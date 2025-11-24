# Axiom Trade Pulse — Token Discovery Table

A production-grade replica of the Axiom Trade Pulse token discovery table, implemented using Next.js 14 (App Router), TypeScript, Tailwind CSS, Redux Toolkit, React Query, and Radix UI.
The project focuses on pixel-accurate layout reproduction, real-time data updates, responsive behavior, and high performance.

## Features
Core Functionality

- Three tabs: New Pairs, Final Stretch, Migrated

- Table columns: token pair, status, price, 24h change, and volume

- Stable sorting on price, 24h change, and volume

- Real-time mock WebSocket updates with smooth green/red transitions

- Token details modal, tooltips, and popovers

- Skeleton and shimmer loading states

- Progressive loading (top rows appear first)

- Error boundary for resilient data fetching

## Performance & Architecture

- Zero layout shift through fixed row heights and controlled animations

- Memoized row components and derived selectors with Reselect

- React Query caching with staleTime=30s

- Reduced re-renders during price updates

- Server components for non-interactive layout sections

- Lighthouse scores: 98 (mobile), 100 (desktop)

## Responsiveness

- Fully responsive down to 320px width

- Horizontal scrolling enabled for narrow viewports

- Fixed column widths to maintain alignment on mobile

## Live Deployment

- Vercel deployment:
`https://axiom-trade-s-token-discovery-table.vercel.app/pulse`

- YouTube demo (public):
`https://youtu.be/AAyPPHGhWFs`

## Installation & Development

Clone the repository, then:

```bash
npm install
npm run dev
```


The project runs at:
`http://localhost:5173/pulse`


Type-checking:

```bash
npm run typecheck
```

Production build:

```bash
npm run build
npm run start
```

## Visual Regression Testing (Playwright)

Playwright is configured to capture layout snapshots of the /pulse page and compare them against stored baselines.

Run tests:

```bash
npm run test:e2e
```

Update snapshots after intentional UI changes:

```bash
npm run test:e2e:update
```

Baseline snapshots are stored in:
```bash
tests/pulse.spec.ts-snapshots/
```

These snapshots help ensure pixel-accurate consistency across commits.

## Responsive Layout Snapshots

Automated screenshots are generated during Playwright tests at different viewport widths (320px, 480px, 768px, etc.).
These are useful for validating responsive layout behavior across devices.

Auto-layout Snapshot
![Auto Layout](public/snapshots/auto_snapshot.png)

## Notes on Implementation

- Column alignment preserved using defined min-widths and table-like layout

- WebSocket mock simulates real-time volatility with throttled updates

- Numerical columns use tabular numerals for consistent spacing

- Careful memoization prevents unnecessary row updates on every price tick

- Error handling covers API failures and unexpected data states

## Deployment

The project is optimized for Vercel.
Importing the repository into Vercel will automatically detect the Next.js 14 setup and apply appropriate build commands.

For manual deployment:

```bash
npm run build
npm run start
```