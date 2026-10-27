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

Weekly sessions are stored in `src/content/sessions/`, with match format, session format, restrictions, partner requirements, hosted/supervised status, and signup links on each record. Dated events are separate records in `src/content/events/` and are highlighted on the home and calendar pages when upcoming.

The Sveltia CMS editor is available at `/admin/`. It edits weekly sessions, dated events, and structured content for the main site pages, with changes submitted through GitHub pull requests. See [`docs/CMS.md`](docs/CMS.md) for editor access and OAuth setup. The Cloudflare OAuth Worker and GitHub OAuth app still require account-level configuration before browser-based GitHub sign-in is ready.

## Not included yet

Results and live event signup counts will be added separately from their data sources. Club information, committee contacts, life-member details, newsletters and document links are based on the saved pages supplied by the club; check external document links for currency before launch.
JBC uses signup.com for host and event signups & pianola for bridge results
