# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal website ("roball inside") built with [Eleventy](https://www.11ty.dev/) using the [eleventy-notes](https://github.com/rothsandro/eleventy-notes) theme. Content is authored in Markdown and deployed to GitHub Pages and accessible at `https://robin.cachaca.de` (DNS CNAME) as well as `https://fls15.github.io/roball-website/`.

## Local development

All build tooling lives in `.app/`. Run these commands from that directory:

```bash
cd .app
npm install       # first time only
npm start         # dev server at http://localhost:8080 (watches CSS/JS + serves with 11ty)
npm run build     # production build to .app/dist/
```

## Architecture

- **`app.mjs`** — site configuration (title, sidebar sections, tags, `editThisNote` URL). This is the main file to touch when changing site-wide settings.
- **`app.scss`** — sets the color theme (currently `sky`). Import-only file; actual styles are in `.app/`.
- **`index.md`** — homepage
- **`n.njk`** — notes index page at `/n/`
- **`Sport/`, `Beruf/`, `Projekte/`** — content directories; each `.md` file becomes a page
- **`.app/`** — the eleventy-notes theme (treat as a dependency, not first-party code)

## Content authoring

Pages use YAML frontmatter. Relevant fields:

| Field | Purpose |
|-------|---------|
| `navTitle` | Title shown in sidebar (falls back to `title`) |
| `sort` | Numeric sort order within a sidebar section |
| `tags` | Array of tags (e.g. `[sport]`) |
| `panel` | Set `false` to hide the right-hand panel |
| `templateEngineOverride` | Use `njk,md` when the page contains Nunjucks syntax (e.g. inline HTML with template calls) |

Sidebar sections are defined in `app.mjs` and match content by URL pattern (`^/sport/`, `^/beruf/`, `^/Projekte/`). Note the case sensitivity: `Projekte` is capitalized in the filesystem and the pattern.

## External accounts & infrastructure

- **Instagram:** Match reports are published under the account [`matchday_recap`](https://www.instagram.com/matchday_recap) — link posts in `Sport/Events.md` using the `<a href="...">Instagram</a>` pattern.

## Markdown notes

- To open a link in a new tab, use raw HTML: `<a href="..." target="_blank" rel="noopener noreferrer">text</a>` — standard Markdown links cannot do this.
- To embed a YouTube video, use the `<iframe>` snippet (see README.md).
- Static assets (images, etc.) go in `public/` and are served from `/`.

## Deployment

The site is deployed automatically via **GitHub Actions** (`.github/workflows/deploy-to-gh-pages.yaml`) on every push to `main`:

1. `npm install --prefix .app` — install dependencies
2. `npm run build --prefix .app` — build site into `.app/dist/`
3. Upload `.app/dist/` as a GitHub Pages artifact and deploy it

The workflow can also be triggered manually via `workflow_dispatch`. No path prefix is needed because the site is hosted under a GitHub Organization (`fls15.github.io`), not a personal user subdirectory.
