# sosketchy.app

Landing page for [So Sketchy](https://sosketchy.app), an iMessage game.

Static Astro site on GitHub Pages. See `CLAUDE.md` for conventions.

## Run

```bash
nvm use
cp .env.example .env
npm ci
npm run dev
```

## Pages

- `/` home
- `/privacy/` privacy policy
- `/support/` support
- `/releases/` release notes rendered from `src/data/release-notes.json`, pushed from the app repo's release tool. 20 per page, continuing at `/releases/2/`
- `/robots.txt`, `/sitemap-index.xml`, `/sitemap-0.xml` generated at build

## License

The code is MIT licensed; see [LICENSE](LICENSE). The text, images and other site content are © Sean Kennedy, all rights reserved.
