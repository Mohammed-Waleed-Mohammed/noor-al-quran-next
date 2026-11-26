import localFont from 'next/font/local'

// The same families the app bundles (assets/fonts in the mobile repo),
// converted losslessly to WOFF2. Arabic text uses Cairo or Tajawal only;
// Poppins has no Arabic glyphs. Each language preloads only the families it
// renders most; the others still load on demand.

const cairo = localFont({
  src: [
    { path: '../fonts/Cairo-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Cairo-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/Cairo-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-cairo',
  display: 'swap',
  preload: true,
})

const tajawal = localFont({
  src: [
    { path: '../fonts/Tajawal-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Tajawal-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/Tajawal-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-tajawal',
  display: 'swap',
  preload: true,
})

const poppins = localFont({
  src: [
    { path: '../fonts/Poppins-Regular.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/Poppins-Medium.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/Poppins-SemiBold.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
  preload: false,
})

export const fontVariables = [cairo.variable, tajawal.variable, poppins.variable].join(' ')
