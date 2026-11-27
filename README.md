# Noor Al-Quran — website

Marketing site and privacy policy for the Noor Al-Quran Android app
(`com.qurannoor.app`). Arabic-first (RTL) with English, in the app's
**Moonlit Indigo** brand.

## Stack

Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · TypeScript · Yarn.
Animated pieces come from [React Bits](https://www.reactbits.dev) and live in
`src/components/reactbits/` (LightRays, Aurora, BlurText, ShinyText,
SpotlightCard, StarBorder, TiltedCard, CountUp). They respect
`prefers-reduced-motion`; the WebGL backdrops load lazily and are skipped
entirely when reduced motion is on (`src/components/Ambient.tsx`).

```bash
yarn install
yarn dev      # http://localhost:3000
yarn build
```

## Routes

| Arabic (default)  | English              |                                                              |
| ----------------- | -------------------- | ------------------------------------------------------------ |
| `/`               | `/en`                | Home                                                         |
| `/privacy`        | `/en/privacy`        | Privacy policy — Google Play links `/privacy`; keep that URL |
| `/delete-account` | `/en/delete-account` | Account deletion (Google Play requirement)                   |

Each language has its own root layout (`src/app/(ar)`, `src/app/(en)`) so
`<html lang dir>` is right; unknown URLs hit `src/app/global-not-found.tsx`.

## Where things live

- `src/i18n/home.ts`, `src/i18n/privacy.ts` — all copy, ar + en. Every claim is
  checked against the app source; keep it that way. When the app's data
  handling changes, update `privacy.ts` **and** `PRIVACY_UPDATED` in
  `src/lib/site.ts`.
- `src/lib/site.ts` — site URL, store/APK links, contact email.
- `src/lib/catalog.ts` — live reciter count from the MP3Quran API (weekly ISR).
- `src/styles/tailwind.css` — palette tokens mirroring the app's
  `lib/theme/app_palette.dart`. No gold or warm brand colours.
- `src/fonts/` — Cairo, Tajawal, Poppins (the files the app bundles). Arabic
  text must use Cairo/Tajawal; Poppins has no Arabic glyphs.

## Brand assets

The logo is a hand-drawn vector of the app's mihrab mark in `src/lib/mark.ts`
(React component: `src/components/NoorMark.tsx`). Raster assets are rendered
from it at their exact size, never downscaled from another raster:

```bash
yarn brand:og      # public/og/og-{ar,en}.png
yarn brand:icons   # favicon.ico, icon.svg, apple-icon.png, manifest icons
```

## Screenshots

`src/components/home/Showcase.tsx` shows branded placeholders until real,
unframed device screenshots are added to its `SCREENSHOTS` map.

## Deploy

`main` deploys to production on Netlify. Work on a branch.
