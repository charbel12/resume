# Charbel Haber — Resume Site

Modern one-page resume site built with Astro + Tailwind, deployable to GitHub Pages.

## Local dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages)

This repo includes a GitHub Actions workflow that builds and deploys to GitHub Pages.

Important: set the correct `site` and `base` values in `astro.config.mjs` depending on whether you deploy to:
- `username.github.io` (root domain) or
- `username.github.io/repo` (project pages).

