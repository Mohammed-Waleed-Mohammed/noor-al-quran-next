# App images for the home page

Put images in `ar/` (Arabic page) and `en/` (English page). Any PNG, WebP or
JPG works; they appear in filename order (`1.png`, `2.png`, … `10.png`), each
as a rounded card. Then run `yarn dev` or `yarn build` (or
`node scripts/screenshots.mjs`) to refresh the list, and commit both the images
and `src/lib/screenshots.json`.

Store-listing graphics (phone + headline already composed) work as they are.
A folder with no images shows branded placeholders instead.
