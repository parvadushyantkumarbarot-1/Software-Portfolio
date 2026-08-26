# Parva Barot — Software Portfolio

A software-engineering portfolio built as a small, typed Next.js
application rather than a static résumé page: a data-driven project
archive with honest status labels, engineering-review-style case studies,
an interactive architecture panel, and no photograph.

Live target: https://parva-software-portfolio.vercel.app

## Stack

- **Next.js 16** (App Router, TypeScript, server components by default)
- **Tailwind CSS v4** (design tokens as CSS variables, `@theme inline`)
- **next-themes** for light/dark mode (dark by default)
- **Framer Motion** for the restrained architecture-flow animation
  (respects `prefers-reduced-motion`)
- **Vitest + React Testing Library** for unit/component tests
- **Playwright** for end-to-end smoke tests (`e2e/smoke.spec.ts`)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Production build |
| `npm run start` | Serve the production build (run `build` first) |
| `npm run lint` | ESLint |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run test` | Vitest, single run |
| `npm run test:watch` | Vitest, watch mode |
| `npm run test:e2e` | Playwright smoke tests (builds, starts, and drives a real browser) |

## Architecture

All portfolio content — experience, projects, skills, engineering
principles, site metadata — is centralized in
[`src/data/portfolio.ts`](src/data/portfolio.ts) as typed data. Nothing
else hardcodes copy:

- `/projects` and `/projects/[slug]` are generated from the `projects`
  array (`generateStaticParams`). Add a project by adding an entry to the
  array — the archive, filters, and case-study route pick it up
  automatically.
- The home page composes section components
  (`src/components/home/*`) that all read from the same data file.
- `src/components/architecture/architecture-panel.tsx` renders the
  keyboard-accessible, hover/focus-driven architecture diagram used in
  the hero, the Systems page, and every project case study (with
  per-project nodes).
- `src/lib/github.ts` enhances the home page's build log with live
  repository metadata (language, last-updated date) fetched **server-side
  only**, cached for an hour, and designed to never throw — a failed or
  rate-limited GitHub API call silently falls back to the static project
  data instead of breaking the page.
- `src/lib/resume.ts` checks, at request time, whether a résumé PDF has
  actually been placed in `public/`. The `/resume` page and the hero's
  download action show an honest "not configured" state until it has.

See [`AGENTS.md`](AGENTS.md) for the fuller set of conventions and
constraints (anonymized experience labels, no fabricated metrics/status,
the CSS grid `min-width: auto` overflow gotcha this codebase hit once,
etc.) — it's written for whoever (human or agent) touches this repo next.

## Adding the résumé

The résumé PDF is intentionally not included. To enable the résumé
preview/download:

1. Add the file at `public/resume/Parva_Barot_Software_Resume.pdf`
   (filename must match `site.resumePath` in `src/data/portfolio.ts`).
2. Nothing else changes — `/resume` and the hero's download button detect
   the file automatically.

Until the file is present, `/resume` shows an honest "Résumé file not
configured" state rather than a broken link.

## Testing

```bash
npm run test
```

Covers: navigation (active-route indicator, no LinkedIn anywhere), theme
switching, the mobile nav drawer (open/close, Escape, focus trap), project
filtering (including the empty-state and keyboard operability), project
data integrity (unique slugs, featured-project ordering, no metrics
without evidence), the résumé modal (open/close/Escape/focus trap),
copy-to-clipboard, and reduced-motion behavior in the architecture panel.

```bash
npm run test:e2e
```

Builds the app, starts it, and drives real Chromium through the golden
path: home renders with no console errors and no `<img>` anywhere, nav to
the project archive, filtering, a case-study page (asserting no
fabricated "Live" badge), the résumé page's honest empty state, the
mobile nav drawer, and the theme toggle.

## Deployment

Deploys cleanly to Vercel as a standard Next.js App Router project:

1. Push this repository to GitHub.
2. Import it in Vercel with the default Next.js build settings
   (`npm run build`, output auto-detected).
3. No environment variables are required. The GitHub API integration
   uses the public, unauthenticated REST API and is resilient to being
   rate-limited.
4. Add the résumé PDF (see above) before or after the first deploy —
   the site does not need a rebuild trigger for it beyond redeploying
   once the file is committed.

## Project status

This project itself (`software-portfolio` in the project archive) is
under active development, same as everything else here — see its own
case study at `/projects/software-portfolio` for what's built versus
planned.
