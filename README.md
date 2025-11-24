# Axiom Trade Pulse — Token Discovery Table

Production‑grade replica of Axiom Trade Pulse token table implemented with Next.js 14, TypeScript, Tailwind, Redux Toolkit, React Query, and Radix UI.

## Features

- Tabs: New Pairs, Final Stretch, Migrated
- Sorting: price, 24h change, volume, stable ordering to avoid row jumping
- Tooltips, popovers, modal with token details
- Real‑time price updates via WebSocket mock (1–3s) with green/red fade
- Skeleton + shimmer loading and progressive reveal (top rows first)
- Error boundary and resilient data fetching
- Responsive down to 320px: collapsible columns, horizontal scroll

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:5173/pulse`.

Type checking:

```bash
npm run typecheck
```

Production build:

```bash
npm run build
npm run start
```

## Visual Regression (Layout Snapshots)

Playwright is configured to capture automatic layout snapshots of the Pulse table.

- Run tests to compare against existing baseline:

```bash
npm run test:e2e
```

- Update snapshots after UI changes:

```bash
npm run test:e2e:update
```

The test navigates to `/pulse`, waits for skeletons to finish, and records a screenshot of the table area. Baselines are stored under `tests/__screenshots__`.

## Notes on Performance

- Zero layout shift through fixed row heights and tabular numerals
- Memoized row components and derived UI selectors via Reselect
- React Query caching with 30s staleTime and window focus disabled
- Server components for layout; client components only where interactive

## Deployment

This Next.js app can be deployed to any Node host or Vercel. For Vercel, import the repository and it will detect the Next.js project automatically. For self‑hosting, build and start with the commands above.
