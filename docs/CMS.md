# Sveltia CMS

The admin is served from `/admin/`. It edits weekly session records, dated club events, and structured content for the home, sessions, calendar, about, learning, visit, membership, committee, life members, newsletters, and useful links pages. Astro templates remain responsible for layout and route behavior.

## Publishing

The CMS uses GitHub’s `editorial_workflow` against `main`. Editors make changes in a CMS entry and publish them as pull requests; the site changes only after the pull request is merged and the configured static-site build succeeds.

The GitHub repository and CMS workflow are configured in `public/admin/config.yml`. Each editor needs repository write access for this workflow. With a fine-grained personal access token, grant access to this repository and **Contents: read and write** plus **Pull requests: read and write**. The simpler classic token needs the `repo` scope. Sveltia’s token sign-in is available without a separate OAuth service; tokens are stored in the editor’s browser, so do not share or commit them.

## Browser-based GitHub sign-in

For volunteer editors, configure Sveltia’s authorization-code flow using the [Sveltia CMS Authenticator](https://github.com/sveltia/sveltia-cms-auth) on Cloudflare Workers:

1. Deploy the authenticator to the club’s Cloudflare account.
2. Register a GitHub OAuth app and set its callback URL to `<worker-url>/callback`.
3. Add `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET` as Worker secrets. Set `ALLOWED_DOMAINS` to the confirmed site hostname (and any required preview hostname); do not use a wildcard unless necessary.
4. Set `backend.base_url` in `public/admin/config.yml` to the Worker URL.
5. Test login and a full editorial-workflow round trip on a non-production branch or test entry before inviting editors.

Do not put OAuth secrets or access tokens in this repository. The Pages site hostname and Cloudflare account setup are external to this repository and must be confirmed before completing this flow.

## Content model

- Weekly sessions are individual Markdown files in `src/content/sessions/`. Their match format, session format, restrictions, partner requirement, hosted/supervised status, and signup URLs are validated by the Astro schema. A required registration URL is shown on that session’s card, and hosted sessions show a “Sign up as a host” link when a host signup URL is supplied.
- Dated events are separate Markdown entries in `src/content/events/`. Editors can set the date, optional start time, match format, masterpoint colour, restrictions, details, and registration URL. Upcoming events appear on the home and calendar pages; past events are not shown there.
- Committee and life-member portraits are stored under `public/images/committee/` and `public/images/life-members/`. Their image fields in Sveltia save the public image path with each person’s page data.
- Main page copy and repeatable lists are structured JSON files in `src/data/pages/`. Their Sveltia field definitions are in `public/admin/config.yml`.
- Page templates and internal route behavior remain in `src/pages/`. Update those templates in Git if the page layout or content model changes.

## Local checks

Run `pnpm run build` to validate the Astro pages and static output. The CMS files are copied from `public/admin/` to `dist/admin/`. A local CMS preview can verify that the admin interface and collection configuration load, but GitHub sign-in and pull-request publishing require valid credentials and the external OAuth setup above.
