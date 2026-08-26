# AGENTS.md

Guidance for agents (and humans) working in this repository.

## What this is

A Next.js App Router portfolio for Parva Barot. All content — experience,
projects, skills, principles — lives in `src/data/portfolio.ts` as typed
data. Pages and components render that data; they do not hardcode copy.

## Development commands

```bash
npm run dev         # start the dev server (webpack)
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

### Next.js version is pinned deliberately — do not casually bump to 16.x

This project was first built on Next.js 16.3.3 (`latest` at the time). That
version deployed cleanly to `next build`/`next start` locally but returned a
platform-level `NOT_FOUND` (`X-Vercel-Error: NOT_FOUND`) for every route once
deployed to Vercel, despite Vercel reporting the build itself as "Ready" and
the domain being correctly assigned to that production deployment. Next 16
shipped a new, alpha "Build Adapters API" the same day, and the most likely
explanation is that Vercel's platform adapter hadn't caught up yet to that
exact release.

The fix was downgrading to `next@15.5.24` / `eslint-config-next@15.5.24` —
the security-**backport** release on the 15.x line (check `npm view next
dist-tags` for the current `backport` tag before assuming 15.5.24 is still
current), not the plain 15.3.x line, which still carries several patched
Next.js CVEs. This also reverted the build to webpack (Next 15 doesn't
default `next build` to Turbopack the way 16 does), which is the most
battle-tested path on Vercel.

Two follow-on effects if you touch Next.js version pins:

- `eslint-config-next` on the 15.x line ships legacy `.eslintrc`-shaped
  configs, not ESLint 9 flat config. `eslint.config.mjs` bridges this with
  `FlatCompat` from `@eslint/eslintrc`. If you upgrade to a 16.x line where
  `eslint-config-next` exports flat config natively, you can drop the
  `FlatCompat` bridge — check `node_modules/eslint-config-next/core-web-vitals.js`
  first to see which shape it actually exports.
- Next 15 requires `"jsx": "preserve"` in `tsconfig.json` (Next 16 wants
  `"react-jsx"`); `next build` will rewrite this for you if it's wrong, but
  don't hand-revert it back to `react-jsx` while on the 15.x line.

Before upgrading Next.js again: build locally, then **actually deploy and
curl the live URL** (`curl -I` looking for `X-Vercel-Error`) before
declaring it fixed — a clean local build proves nothing about Vercel's
adapter compatibility with a very recently published release.

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
