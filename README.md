# Joondalup Bridge Club website

Mobile-first static website built with Astro for Cloudflare Pages.

Project guidance for maintainers and coding agents is in [`AGENTS.md`](AGENTS.md). See [`docs/`](docs/) for the architecture, decisions and design criteria.

## Local preview

```sh
pnpm install
pnpm dev
```

## Cloudflare Pages

- Build command: `pnpm run build`
- Build output directory: `dist`
- No server adapter is required; the site is generated as static files.

## Session schedule

Weekly sessions are stored in `src/content/sessions/`. Each Markdown file represents one session. Optional `host` and `director` fields are displayed on the session cards only when a name is supplied. Signup links and partnership notes are stored with the relevant session.

The Sveltia CMS admin and GitHub OAuth Worker still need to be configured before editors can update this content through a browser.

## Not included yet

Results and live event signup counts will be added separately from their data sources. Club information, committee contacts, life-member details, newsletters and document links are based on the saved pages supplied by the club; check external document links for currency before launch.
