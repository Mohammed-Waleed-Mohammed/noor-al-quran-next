// Lists the app images in public/screenshots/{ar,en}/ so the home page can
// show them. Any PNG/WebP/JPG works; they're shown in natural filename order
// (1.png, 2.png, … 10.png). Runs before `yarn dev` and `yarn build`; the
// generated src/lib/screenshots.json is committed so any build command works.
// A language with no images keeps the branded placeholders.

import { existsSync, readdirSync, writeFileSync } from 'node:fs'
import { join, resolve } from 'node:path'

const root = resolve(import.meta.dirname, '..')
const isImage = (f) => /\.(png|webp|jpe?g)$/i.test(f)
const natural = new Intl.Collator('en', { numeric: true }).compare
const out = {}

for (const locale of ['ar', 'en']) {
  const dir = join(root, 'public/screenshots', locale)
  out[locale] = existsSync(dir)
    ? readdirSync(dir).filter(isImage).sort(natural).map((f) => `/screenshots/${locale}/${f}`)
    : []
}

writeFileSync(join(root, 'src/lib/screenshots.json'), JSON.stringify(out, null, 2) + '\n')
console.log(`screenshots: ar ${out.ar.length}, en ${out.en.length}`)
