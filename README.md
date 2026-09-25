# UChicago Neurotech website

Static site built with [Astro](https://astro.build) and plain CSS. Deploys to GitHub Pages on every push to `main` (`.github/workflows/deploy.yml`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
```

## Editing content

The site is a single page (`src/pages/index.astro`). All content lives in `src/content/`:

| Section | File |
|---|---|
| Name, email, socials, top banner | `site.json` |
| 1. What we do | `home.md` |
| 2. Projects (name, one-line description, optional links) | `projects.json` |
| 3. Board members + faculty mentor (name, role, link, details behind [+]) | `team.json` |
| 4. Join us | `join.md` |

Set `banner.show` in `site.json` to `false` to hide the ">>> applications open <<<" line.

Anything in `[brackets]` is placeholder text.
