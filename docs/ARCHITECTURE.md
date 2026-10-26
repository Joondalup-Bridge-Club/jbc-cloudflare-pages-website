# Architecture

## Goal

Joondalup Bridge Club's public website is a small, fast, mobile-first information site. Visitors use it to choose a session, check partner requirements, plan a visit, learn about the club, and follow links to registration and bridge services.

The site is intended to be maintained in GitHub and published with Cloudflare Pages. Most public content should remain available as prebuilt static files. The site should not need a continuously running application server for ordinary pages.

## Current shape

```mermaid
flowchart LR
  EDIT[Club editors] -->|planned browser CMS| CMS[Sveltia CMS]
  CMS -->|GitHub commits or pull requests; mode TBD| GH[GitHub repository]
  CONTENT[Markdown session records] --> BUILD[Astro build]
  PAGES[Astro page templates] --> BUILD
  GH --> BUILD
  BUILD -->|static output: dist/| CF[Cloudflare Pages]
  CF --> VISITORS[Club visitors]
  PG[(Club PostgreSQL results DB)] -. future data generation .-> BUILD
  SIGNUP[Signup.com pages] -. future host/count extraction .-> BUILD
```

The dotted data paths are plans, not working integrations. No result data or Signup.com counts are fetched by this code today.

## Implemented components

- **Astro:** Builds HTML and assets into `dist/`; `astro.config.mjs` sets `output: "static"`. There is no Cloudflare adapter or runtime API.
- **Pages:** `src/pages/` contains the home page, sessions, learning, calendar, club information, membership, committee, life members, newsletters, links, and location pages. Some legacy pages remain as aliases/redirect targets while routes are being consolidated.
- **Shared layout:** `src/layouts/SiteLayout.astro` provides the document head, navigation, footer, and shared global stylesheet.
- **Styles:** `src/styles/global.css` contains the visual system and responsive layouts.
- **Session content:** One Markdown file per weekly session under `src/content/sessions/`; `src/content.config.ts` validates the records. `src/pages/index.astro` and `src/pages/sessions.astro` render those records.
- **Signup links:** Host signup URLs are currently in `src/data/sessions.ts`. Session/event registration links may also be present as optional session fields.
- **Legacy paths:** `public/_redirects` retains redirects for old site URLs.
- **Club documents:** Newsletters, forms, resources, and external bridge links point to their supplied external destinations. The external hosts remain responsible for serving those files.

## Planned components

### Editorial publishing

Sveltia CMS is the selected editorial interface. GitHub accounts are acceptable for editors. The admin page, CMS collections, and GitHub OAuth service are not yet configured. Authentication mode (pull-request/open authoring or direct writes) is not yet recorded as a final decision. Until the CMS is implemented, most Astro page text and links are edited in source files; only sessions are already in a content collection.

### Generated data

- The club maintains a PostgreSQL database that is updated daily with Pianola results.
- Pianola exposes links to its own site, not a data feed. No Usebio export is planned/available.
- The intended result pages and any derived statistics should be generated from the club database, not copied from a transient Pianola web page.
- Signup.com has distinct host signup pages (one host for each hosted session) and event registration pages (multiple participants; the site should publish a count, not a participant list).
- No data extraction, scheduled job, schema, or publication format has been implemented or selected. Do not fetch or expose personal signup details as a shortcut.

## Deployment contract

For a Git-connected Cloudflare Pages project:

- Production branch: `main`.
- Build command: `pnpm run build`.
- Build output directory: `dist`.
- A non-production branch such as `site-preview` is for preview builds; do not merge or push preview changes to `main` without the user's approval.

Cloudflare account/project setup is external to this repository. A successful local Astro build does not prove that a Pages deployment exists.

## Key paths

| Path | Responsibility |
| --- | --- |
| `src/pages/` | Page templates and routes |
| `src/layouts/SiteLayout.astro` | Shared header, navigation, footer |
| `src/content/sessions/` | Weekly session records |
| `src/content.config.ts` | Session schema and collection loader |
| `src/data/sessions.ts` | Hosted-session Signup.com URLs |
| `src/styles/global.css` | Shared responsive design |
| `public/_redirects` | Legacy route redirects |
| `docs/DECISIONS.md` | Decision record and unresolved choices |
| `docs/DESIGN.md` | Visual, content, and accessibility criteria |
