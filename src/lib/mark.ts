// Geometry of the Noor Al-Quran mark, hand-redrawn as vectors from the app's
// original artwork (tool_assets/gen/brand/logo_mihrab_original.jpg in the
// mobile repo): a mihrab arch, crescent moon, three sound arcs and an open
// mushaf on logo-night indigo. Coordinates are in a 1024×1024 box.
//
// Both the React component (components/NoorMark.tsx) and the static SVG
// string used by the OG images and icon generation are built from these.

export const MARK = {
  background: '#161B3B',
  arch:
    'M512 178 C531 206 566 226 604 246 C664 278 708 318 707 382 C706 408 701 426 697 440 C712 452 734 470 734 512 L734 820 L289 820 L289 512 C289 470 311 452 326 440 C322 426 317 408 316 382 C315 318 359 278 419 246 C457 226 492 206 512 178 Z',
  crescent:
    'M462 336 A49 49 0 1 0 559 357 A47.4 47.4 0 1 1 491 290 A49 49 0 0 0 462 336 Z',
  arcs: [
    'M369 512 A208 208 0 0 1 653 512',
    'M409 551 A162 162 0 0 1 613 551',
    'M449 592 A83 83 0 0 1 574 592',
  ],
  cover:
    'M352 646 L258 829 L478 829 C492 852 532 852 546 829 L766 829 L672 646 C620 632 560 640 512 662 C464 640 404 632 352 646 Z',
  pageStack:
    'M346 668 L288 813 C360 803 410 801 470 811 C488 813 500 816 512 820 C524 816 536 813 554 811 C614 801 664 803 736 813 L678 668 Z',
  pageLeft: 'M506 664 C472 641 418 632 364 650 L322 778 C392 770 456 772 506 796 Z',
  pageRight: 'M518 664 C552 641 606 632 660 650 L702 778 C632 770 568 772 518 796 Z',
  colors: {
    archBand: '#E4E7F0',
    archLine: '#141B3D',
    glow: ['#C8D7F6', '#8E9FD2', '#46528A', '#1E2759'],
    crescent: '#F4F6FB',
    arcs: '#BFD3F5',
    pearl: '#E6E8EF',
    page: '#FFFFFF',
    line: '#141B3D',
  },
} as const

/**
 * Standalone SVG markup of the mark.
 * - `tile`: draw the logo-night background (rounded by `radius`, 0 = square).
 * - `viewBox`: crop; the default frames the symbol with breathing room.
 */
export function markSvg({
  tile = true,
  radius = 0,
  viewBox = '0 0 1024 1024',
  size,
}: { tile?: boolean; radius?: number; viewBox?: string; size?: number } = {}) {
  const c = MARK.colors
  const dims = size ? ` width="${size}" height="${size}"` : ''
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}"${dims}>
<defs>
<radialGradient id="g" cx="512" cy="650" r="470" gradientUnits="userSpaceOnUse">
<stop offset="0" stop-color="${c.glow[0]}"/><stop offset="0.3" stop-color="${c.glow[1]}"/><stop offset="0.62" stop-color="${c.glow[2]}"/><stop offset="1" stop-color="${c.glow[3]}"/>
</radialGradient>
<clipPath id="a"><path d="${MARK.arch}"/></clipPath>
</defs>
${tile ? `<rect width="1024" height="1024" rx="${radius}" fill="${MARK.background}"/>` : ''}
<path d="${MARK.arch}" fill="url(#g)"/>
<path d="${MARK.arch}" fill="none" stroke="${c.archLine}" stroke-width="44" clip-path="url(#a)"/>
<path d="${MARK.arch}" fill="none" stroke="${c.archBand}" stroke-width="34" stroke-linejoin="round"/>
<path d="${MARK.crescent}" fill="${c.crescent}" fill-rule="evenodd"/>
<g fill="none" stroke="${c.arcs}" stroke-width="9" stroke-linecap="round">${MARK.arcs
    .map((d) => `<path d="${d}"/>`)
    .join('')}</g>
<g stroke-linejoin="round">
<path d="${MARK.cover}" fill="${MARK.background}" stroke="${c.pearl}" stroke-width="12"/>
<path d="${MARK.pageStack}" fill="${c.pearl}" stroke="${c.line}" stroke-width="6"/>
<path d="${MARK.pageLeft}" fill="${c.page}" stroke="${c.line}" stroke-width="6"/>
<path d="${MARK.pageRight}" fill="${c.page}" stroke="${c.line}" stroke-width="6"/>
<ellipse cx="512" cy="828" rx="20" ry="11" fill="${c.line}"/>
</g>
</svg>`
}

/** Tight crop around the symbol (no tile), for use on dark surfaces. */
export const MARK_SYMBOL_VIEWBOX = '236 160 552 712'
