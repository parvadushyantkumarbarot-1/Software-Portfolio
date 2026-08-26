# AGENTS.md

Guidance for agents (and humans) working in this repository.

## What this is

A Next.js App Router portfolio for Parva Barot. All content — experience,
projects, skills, principles — lives in `src/data/portfolio.ts` as typed
data. Pages and components render that data; they do not hardcode copy.

## Development commands

```bash
npm run dev         # start the dev server (Turbopack)
npm run build        # production build
npm run start        # serve the production build (after build)
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
npm run test         # Vitest (unit + component tests), run once
npm run test:watch   # Vitest in watch mode
```

Node 20+ and npm are assumed. There is no database and no required
environment variables — the site has no backend beyond a server-side,
best-effort GitHub API call (see below).

## Architecture conventions

- **Single source of truth**: all portfolio content (experience, projects,
  skills, principles, site metadata) lives in `src/data/portfolio.ts`. The
  project archive (`/projects`) and case-study routes (`/projects/[slug]`)
  are generated from the `projects` array via `generateStaticParams`. Add a
  new project by adding an entry there, not by hand-writing a route.
- **Server components by default.** Only mark a component `"use client"`
  when it needs state, effects, or browser APIs (theme toggle, nav drawer,
  filters, resume modal, copy-to-clipboard, contact form).
- **No client-side data fetching, no required API keys.** The one dynamic
  integration — `src/lib/github.ts` — calls the public GitHub REST API
  server-side, with `next: { revalidate: 3600 }`, and must never throw: a
  failed or rate-limited call resolves to `null` per repo and the UI falls
  back to the static project data. Don't add client-side fetches for
  portfolio content.
- **Résumé path is centralized.** `site.resumePath` /
  `site.resumeFileName` in `portfolio.ts` are the only place the résumé
  filename is defined. `src/lib/resume.ts#resumeFileExists()` checks
  whether the file actually exists in `public/` at request/build time —
  UI that offers preview/download must gate on that check rather than
  assuming the file is present. See `public/resume/README.md`.
- **Design tokens live in `src/app/globals.css`** as CSS variables consumed
  through Tailwind v4's `@theme inline`. Light is the default `:root`
  palette; dark overrides live both under
  `@media (prefers-color-scheme: dark)` (scoped to `:not([data-theme="light"])`)
  and under `:root[data-theme="dark"]` (so an explicit toggle wins over the
  system preference in both directions). Theme switching itself is
  `next-themes` with `attribute="data-theme"`, `defaultTheme="dark"`.
- **Icons**: `lucide-react` for generic icons. It no longer ships brand
  icons (trademark reasons) — the GitHub mark is a hand-rolled inline SVG
  at `src/components/icons/github-icon.tsx`. Don't try to import `Github`
  from `lucide-react`.

## Design constraints (do not violate)

These come directly from the brief this portfolio was built against —
treat them as hard constraints, not style preferences:

- No photograph, no AI-generated avatar, no stock imagery anywhere. The
  hero's right column is the interactive architecture panel, not a
  portrait.
- Identity mark is the "PB" monogram only.
- No LinkedIn link or reference anywhere (nav, footer, contact, structured
  data).
- No employer names. Work experience uses anonymized, domain-based role
  labels (`experience` array in `portfolio.ts`), not company names.
- Never fabricate metrics, certifications, "Live" status, or completion
  claims. A project's `status` field must be one of `"In Development"`,
  `"Active Development"`, or `"Planned Rebuild"` — there is deliberately no
  `"Live"` status in the type, because no project here has a verified
  public deployment yet. If one gets a real deployment, add `liveUrl` and
  reconsider status/copy together, backed by a real, checked URL.
  `project.metrics` should stay `undefined`/absent unless the numbers are
  independently verified — professional-experience metrics (in the
  `experience` array) are the verified ones; don't project-launder them
  onto unrelated demo projects.

## Testing requirements

- Unit/component tests: Vitest + React Testing Library, colocated as
  `*.test.ts(x)` next to the code they cover. `vitest.setup.ts` stubs
  `window.matchMedia` (jsdom doesn't implement it) — tests that need a
  specific media-query result (e.g. reduced motion) should override it
  themselves and know that some hooks (framer-motion's
  `useReducedMotion`) cache the result process-wide on first read, so
  order-sensitive tests should set the override before anything else in
  the file has mounted.
- `userEvent.setup()` installs its own clipboard stub — attach clipboard
  spies (`vi.spyOn(navigator.clipboard, "writeText")`) *after* calling
  `userEvent.setup()`, not before, or the spy gets silently replaced.
- Before calling anything done: `npm run lint`, `npm run typecheck`,
  `npm run test`, and `npm run build` must all pass.

## Definition of done for a change here

- Content changes go through `src/data/portfolio.ts` (or the other
  `src/data/*.ts` files), not hardcoded into components.
- `npm run lint`, `npm run typecheck`, `npm run test`, and `npm run build`
  all pass.
- No new horizontal overflow at 1440/1024/768/430/390px. If you introduce
  a two-column `grid`/`flex` layout, remember CSS's `min-width: auto`
  default on grid/flex items — a long unbroken string (a URL, an email) in
  one column can force the whole row wider than the viewport even though
  every individual element "looks" like it should wrap. Add `min-w-0` on
  the grid/flex item and `truncate` (plus a `title` attribute) on the
  offending text rather than assuming `flex-wrap`/`break-words` alone will
  save you.
- No fabricated claims slip in (see Design constraints above).
- If you change a route, re-run a real browser check (not just the build)
  — `next build` succeeding does not guarantee a page is visually correct;
  this repo's history includes at least one case where a stale
  `next start` process kept serving an old CSS chunk hash after a rebuild,
  which looked like a real styling bug until the stale server was killed.
