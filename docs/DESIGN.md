# Design criteria

## Audience and tasks

The main audience is current and prospective club members, many browsing on a phone. Some visitors will be new to bridge or unsure whether they can attend without a partner. Pages should answer their immediate question quickly and make the next step obvious.

Prioritise these tasks:

1. Find a session and understand its time, format, and partner requirement.
2. Get directions and know what to expect at a first visit.
3. Find beginner lessons or the supervised starter session.
4. Register for a club event using the club's Signup.com page.
5. Find membership, committee, life-member, newsletter, and bridge-resource information.

## Visual direction

- Friendly, calm, and community-oriented; polished but not corporate or competitive-looking.
- Use a restrained deep-green, mint, warm-paper, white, and gold palette. Current CSS tokens are in `src/styles/global.css` (`--green`, `--green-2`, `--mint`, `--paper`, `--white`, `--gold`).
- Use the existing sans-serif body type and serif display headings. Keep headings clear and readable rather than decorative.
- Use cards to group sessions, contact details, links, and practical information. Keep card styling consistent and avoid unnecessary visual effects.
- Use bridge suits/cards sparingly as decoration. Text must remain the main way information is conveyed.

## Phone-first layout

- Start with a single-column layout at narrow widths; add columns only when the screen can support them comfortably.
- Keep the main navigation reachable and horizontally usable on small screens.
- Put session day, session name, partner guidance, and time together so they are scannable without side-scrolling.
- Make calls to action easy to tap and label them with what happens next (for example, “Open directions” or “Register”).
- Break long reference lists into clearly named, tappable items.
- Prevent long email addresses or external URLs from forcing a page wider than the screen.

## Writing criteria

- Be concise. Prefer short, direct sentences and familiar words.
- Put the practical detail first: time, partner requirement, location, cost, and signup action.
- Avoid duplicating the same details on multiple pages unless the repeat helps visitors complete a task.
- Explain bridge-specific terms when a new player needs them; don't make every page wordy to do so.
- Use the club's terms consistently: **hosted** means a partner is guaranteed; **supervised Starter Session** means no partner is required.
- Use plain sentence case for headings and buttons. Avoid all-caps warnings and lengthy notices.
- Identify external links where useful and signal when a link opens another service.
- Date documents and calendars explicitly. Do not present an old PDF, timetable, fee, or signup total as current without checking it.

## Accessibility and trust

- Use semantic headings in order, landmarks (`header`, `nav`, `main`, `footer`), descriptive link text, and meaningful document titles.
- All interactive elements must work with a keyboard and have a clearly visible focus state.
- Maintain readable contrast, especially for muted text and text placed on colored cards.
- Do not rely on color, suit symbols, hover effects, or icon-only labels to communicate meaning.
- Use descriptive alternative text for meaningful images; mark purely decorative imagery as decorative.
- Publish only confirmed information. Do not show empty “Host” or “Director” fields, guessed data, or private participant names.

## Responsive review checklist

Before considering a page design complete, review it at a narrow phone width and a larger desktop width. Check that:

- no horizontal page scrolling is needed;
- navigation, buttons, session cards, and document links remain usable;
- text is not too small or too dense;
- focus styles remain visible;
- the main action and key facts are easy to find without excessive scrolling.
