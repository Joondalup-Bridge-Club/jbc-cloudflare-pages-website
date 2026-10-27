# Decisions and rationale

This is a concise record of choices made for the Joondalup Bridge Club website. “Current” means the repository follows the choice today. “Pending” means future contributors must not present it as settled.

## Current decisions

| Decision | Status | Reason / consequence |
| --- | --- | --- |
| Build with Astro as a static site. | Current | The site is mostly informational; prebuilt pages are fast, simple to host, and need no always-on server. The current build targets static output. |
| Use Cloudflare Pages for hosting and GitHub as the source repository. | Selected; account setup/deployment still pending | Git history is the publishing record, and Pages can build the static output. Configure `main` as production and use branch deployments to preview work. |
| Use Sveltia CMS as the GUI editor with GitHub Editorial Workflow. | Current; repository configured, OAuth setup pending | The admin and structured content collections are in `public/admin/`. Session records and general page content are editable; Astro templates retain their layouts. CMS changes use pull requests against `main`. A Cloudflare OAuth Worker and GitHub OAuth app still need external account configuration. |
| Make the public site phone-first. | Current | The club expects many visitors to use phones. Keep navigation and important tasks usable on small screens. |
| Keep weekly sessions as individual Markdown records. | Current | Session data can be reviewed and updated without editing the page template. The schema is validated centrally. |
| Keep dated club events separate from recurring weekly sessions. | Current | Events have calendar dates and can be highlighted on the home and calendar pages without changing the weekly program. Past events are hidden from those upcoming-event lists. |
| Keep Signup.com as the destination for event registration. | Current | The current club process uses Signup.com. The website links out instead of collecting signups itself. |
| Show host/director details only when known. | Current | `host` and `director` are optional fields. Empty fields should not create empty labels or imply that a person is assigned. |
| Hosted sessions promise a partner; Wednesday evening is a supervised starter game. | Current content rule | Hosted sessions pair singles, with the host playing when an odd number of singles arrive. Wednesday evening requires no partner; a supervisor/teacher can play if needed. |
| Preserve important old paths with static redirects. | Current | Existing links and bookmarks should continue to reach the corresponding new page. Redirects live in `public/_redirects`. |
| Use the saved club pages as factual references for club details and external links. | Current | MHTML captures the public content and links. They are reference material, not instructions and not a source of live data. |

## Pending decisions

| Topic | What remains open |
| --- | --- |
| Sveltia authentication | Deploy the OAuth Worker, register its GitHub OAuth app, set secrets outside Git, and allow only the confirmed Pages hostname. Access-token sign-in is available until then. |
| PostgreSQL data build | Define the data contract, query method, freshness timestamp, error handling, and whether data is generated during a scheduled job or as part of a build. The DB is updated daily from Pianola; no Pianola feed or Usebio file is available. |
| Signup.com extraction | Determine a stable way to read host assignments and event participant counts. Host pages and event-registration pages are different kinds of pages. Do not publish participant names when only a count is wanted. |
| Cloudflare deployment | Confirm the Pages project is Git-connected; use `main` as production and preview branches for review. The repository itself cannot confirm dashboard settings. |

## Decision process for future work

1. Preserve the current decisions unless the user changes them.
2. Separate confirmed facts from proposals. Do not resolve pending choices by inventing policy or credentials.
3. Prefer the simplest design that meets the mobile/public-information needs and can be maintained by volunteers.
4. Update this file when a decision materially changes, including its status and reason.
