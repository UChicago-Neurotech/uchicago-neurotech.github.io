# UChicago Neurotech Site Scaffold (Astro + Tailwind)

Content-first static website scaffold for GitHub Pages. All real content lives in `src/content` files so you can update text/data without editing components.

## Stack

- Astro (static output)
- Tailwind CSS
- Markdown + JSON content with schema validation via `src/content.config.ts`

## Quick start

```bash
npm install
npm run dev
```

Visit `http://localhost:4321`.

## Build

```bash
npm run build
npm run preview
```

## Content locations

- Global settings + nav + CTAs: `src/content/site.json`
- Home copy blocks: `src/content/home.md`
- About page: `src/content/about.md`
- Join page: `src/content/join.md`
- Contact page: `src/content/contact.md`
- Projects (one file per project): `src/content/projects/*.md`
- Team members: `src/content/team.json`
- Events + optional calendar embed: `src/content/events.json`
- Launch checklist: `src/content/TODO.md`

See `EDITING.md` for exact editing steps.

## GitHub Pages deployment

This repo includes `.github/workflows/deploy.yml` that builds and deploys on pushes to `main`.

### GitHub settings

1. Go to repo `Settings > Pages`.
2. Set `Build and deployment` source to **GitHub Actions**.
3. Push to `main`.

### Base path behavior

`astro.config.mjs` auto-detects base path from `GITHUB_REPOSITORY`:

- User/org pages repo (e.g. `yourname.github.io`) -> `base: /`
- Project repo (e.g. `uchicago-neurotech.github.io`) -> `base: /uchicago-neurotech.github.io`

You can override manually:

- `PUBLIC_BASE_PATH` (example: `/my-custom-base`)
- `PUBLIC_SITE_URL` (example: `https://example.com`)

For local dev, defaults work without setting either variable.
