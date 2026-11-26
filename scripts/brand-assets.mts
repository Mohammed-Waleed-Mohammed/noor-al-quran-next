// Regenerates brand raster assets from the vector mark (src/lib/mark.ts).
//
//   node scripts/brand-assets.mts og      → public/og/og-{ar,en}.png (1200×630)
//   node scripts/brand-assets.mts icons   → favicon.ico, icon.svg, apple-icon.png,
//                                           manifest icons (src/app, public/)
//
// Everything is rendered straight from vectors at the exact output size, so
// no asset is ever produced by downscaling another raster. Text in the OG
// images is real text set in the bundled Cairo/Poppins fonts (rendered by
// librsvg + Pango, which shapes Arabic correctly).

import { mkdtempSync, writeFileSync, mkdirSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')

// Point fontconfig at the bundled fonts before sharp/libvips loads.
const confDir = mkdtempSync(join(tmpdir(), 'noor-fc-'))
writeFileSync(
  join(confDir, 'fonts.conf'),
  `<?xml version="1.0"?><!DOCTYPE fontconfig SYSTEM "fonts.dtd"><fontconfig><dir>${join(root, 'scripts/og-fonts')}</dir><cachedir>${confDir}</cachedir></fontconfig>`,
)
process.env.FONTCONFIG_FILE = join(confDir, 'fonts.conf')

const { default: sharp } = await import('sharp')
const { markSvg, MARK_SYMBOL_VIEWBOX } = await import('../src/lib/mark.ts')

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;')

async function og(locale: 'ar' | 'en') {
  const W = 1200
  const H = 630
  const rtl = locale === 'ar'
  const name = rtl ? 'نور القرآن' : 'Noor Al-Quran'
  const tagline = rtl ? 'استمع إلى القرآن الكريم بسكينة' : 'Listen to the Holy Quran in peace'
  const sub = rtl
    ? 'مئات القرّاء · إذاعات القرآن · الأذكار · استماع دون إنترنت'
    : 'Hundreds of reciters · Quran radio · Athkar · Offline listening'
  const font = rtl ? 'Cairo' : 'Poppins'

  // Background: the app's moonlit-lake artwork, covered to 1200×630 from its
  // 1200×896 original (a crop, not a downscale), with the moon kept in frame.
  const bg = await sharp(join(root, 'public/home-hero.jpg'))
    .extract({ left: 0, top: 40, width: 1200, height: 630 })
    .toBuffer()

  const markW = 250
  const markH = Math.round((markW * 712) / 552)
  const mark = await sharp(Buffer.from(markSvg({ tile: false, viewBox: MARK_SYMBOL_VIEWBOX })), {
    density: 300,
  })
    .resize(markW, markH)
    .png()
    .toBuffer()

  // With direction="rtl", 'start' is the right edge.
  const anchor = 'start'
  const overlay = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="v" x1="0" y1="0" x2="${rtl ? 0 : 1}" y2="0" gradientUnits="objectBoundingBox">
      <stop offset="0" stop-color="#141B3D" stop-opacity="${rtl ? 0.35 : 0.88}"/>
      <stop offset="1" stop-color="#141B3D" stop-opacity="${rtl ? 0.88 : 0.35}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#v)"/>
  <rect width="${W}" height="${H}" fill="#141B3D" opacity="0.25"/>
  <g font-family="${font}" fill="#F1F3FA" text-anchor="${anchor}" direction="${rtl ? 'rtl' : 'ltr'}">
    <text x="${rtl ? W - 360 : 360}" y="238" font-size="${rtl ? 64 : 58}" font-weight="700">${esc(name)}</text>
    <text x="${rtl ? W - 360 : 360}" y="320" font-size="${rtl ? 40 : 36}" font-weight="500" fill="#BFD3F5">${esc(tagline)}</text>
    <text x="${rtl ? W - 360 : 360}" y="392" font-size="24" fill="#B4BCDB">${esc(sub)}</text>
  </g>
</svg>`

  mkdirSync(join(root, 'public/og'), { recursive: true })
  await sharp(bg)
    .composite([
      { input: Buffer.from(overlay), left: 0, top: 0 },
      { input: mark, left: rtl ? W - 90 - markW : 70, top: Math.round((H - markH) / 2) },
    ])
    .png({ compressionLevel: 9 })
    .toFile(join(root, `public/og/og-${locale}.png`))
  console.log(`public/og/og-${locale}.png`)
}

function ico(pngs: { size: number; data: Buffer }[]) {
  const header = Buffer.alloc(6)
  header.writeUInt16LE(0, 0)
  header.writeUInt16LE(1, 2)
  header.writeUInt16LE(pngs.length, 4)
  const dir = Buffer.alloc(16 * pngs.length)
  let offset = 6 + dir.length
  pngs.forEach(({ size, data }, i) => {
    const o = i * 16
    dir.writeUInt8(size >= 256 ? 0 : size, o)
    dir.writeUInt8(size >= 256 ? 0 : size, o + 1)
    dir.writeUInt16LE(1, o + 4)
    dir.writeUInt16LE(32, o + 6)
    dir.writeUInt32LE(data.length, o + 8)
    dir.writeUInt32LE(offset, o + 12)
    offset += data.length
  })
  return Buffer.concat([header, dir, ...pngs.map((p) => p.data)])
}

async function icons() {
  const render = (svg: string, size: number) =>
    sharp(Buffer.from(svg), { density: Math.max(72, (72 * size) / 1024) * 4 })
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toBuffer()

  // Browser tab / app icons: the full tile, rounded like the app icon.
  const rounded = markSvg({ tile: true, radius: 228 })
  // Platforms that apply their own mask (iOS, maskable PWA icons) get a
  // square tile; maskable ones also shrink the symbol into the 80% safe zone.
  const square = markSvg({ tile: true, radius: 0 })
  const maskable = markSvg({ tile: true, radius: 0, viewBox: '-102 -102 1228 1228' }).replace(
    '<rect width="1024" height="1024" rx="0"',
    '<rect x="-102" y="-102" width="1228" height="1228"',
  )

  // Favicons are tiny: crop closer so the symbol fills more of the tile.
  const fav = markSvg({ tile: true, viewBox: '112 111 800 800' }).replace(
    '<rect width="1024" height="1024" rx="0"',
    '<rect x="112" y="111" width="800" height="800" rx="176"',
  )
  writeFileSync(join(root, 'src/app/icon.svg'), fav)
  writeFileSync(
    join(root, 'src/app/favicon.ico'),
    ico(await Promise.all([16, 32, 48].map(async (s) => ({ size: s, data: await render(fav, s) })))),
  )
  writeFileSync(join(root, 'src/app/apple-icon.png'), await render(square, 180))
  for (const s of [192, 512]) {
    writeFileSync(join(root, `public/icon-${s}.png`), await render(rounded, s))
    writeFileSync(join(root, `public/icon-maskable-${s}.png`), await render(maskable, s))
  }
  writeFileSync(
    join(root, 'src/app/manifest.json'),
    JSON.stringify(
      {
        name: 'Noor Al-Quran · نور القرآن',
        short_name: 'Noor Al-Quran',
        start_url: '/',
        display: 'standalone',
        theme_color: '#141B3D',
        background_color: '#141B3D',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: '/icon-maskable-192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      null,
      2,
    ) + '\n',
  )
  console.log('icons written — now delete src/app/icon0.svg, src/app/icon1.png and public/web-app-manifest-*.png')
}

const what = process.argv[2]
if (what === 'og' || !what) {
  await og('ar')
  await og('en')
}
if (what === 'icons') await icons()
