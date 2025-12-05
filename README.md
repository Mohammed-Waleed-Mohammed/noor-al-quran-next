# Noor Al-Quran – Marketing Experience

Noor Al-Quran is a reimagined version of the Pocket landing page template, now focused on promoting a Quran recitation companion app. The site blends premium Tailwind CSS styling with motion, rich media, and long-form storytelling to highlight features such as curated reciters, offline listening, and privacy-first design.

## Tech Stack

- [Next.js 14 / App Router](https://nextjs.org/docs/app) with Server Components
- [React 19](https://react.dev/)
- [TypeScript 5.8](https://www.typescriptlang.org/)
- [Tailwind CSS 4 (experimental)](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) for SVG/logo animations
- [Headless UI](https://headlessui.com/) for Tabs, Popovers, etc.

## Getting Started

> We use **Yarn** for all project commands.

```bash
# Install dependencies
yarn install

# Start the local dev server
yarn dev

# Visit the app
open http://localhost:3000
```

### Useful Scripts

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `yarn dev`          | Run the development server with HMR          |
| `yarn build`        | Create an optimized production build         |
| `yarn start`        | Serve the production build on Node.js        |
| `yarn lint`         | Run ESLint (select Base/Strict on first run) |
| `yarn tsc --noEmit` | Type-check the project without emitting JS   |

## Project Structure

- `src/app` – App Router routes (`(main)`, `privacy`, error views, metadata)
- `src/components` – Reusable UI (hero, features, orb background, logos, etc.)
- `src/styles/tailwind.css` – Tailwind config + global styles (brand palettes, animations)
- `public/` – Icons, favicons, marketing imagery (`noor-logo.svg`, `noor-icon.svg`, `logo-mark-outline.svg`, feature PNGs)

## Customization Tips

- **Branding**: Update the SVG assets in `public/` and tweak brand colors via CSS variables inside `src/styles/tailwind.css`.
- **Sections**: Each homepage section lives in its own component (Hero, PrimaryFeatures, SecondaryFeatures, Reviews, CallToAction, Footer) for quick editing.
- **Motion**: `src/components/AnimatedLogomark.tsx` and `AppDemo.tsx` hold Framer Motion logic for SVG path animations. Adjust easing, delays, or replace with static assets as needed.
- **Privacy & Legal**: The privacy policy is a standalone route at `src/app/privacy/page.tsx`. Update the content to reflect your data policies.

## Deployment

1. Generate a production build:

   ```bash
   yarn build
   ```

2. Start the Node.js server (ideal for platforms like Vercel, Netlify, Render):

   ```bash
   yarn start
   ```

For static export or custom hosting, refer to the [Next.js deployment guide](https://nextjs.org/docs/app/building-your-application/deploying).

## License

This project started from the commercial Tailwind Plus “Pocket” template. Ensure your usage complies with the [Tailwind Plus license](https://tailwindcss.com/plus/license).
