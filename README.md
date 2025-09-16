Anasco Group Dashboard

A Next.js (App Router) dashboard UI with responsive sidebar, navbar, right panel, and charts.

Prerequisites
- Node.js 18+ (recommended LTS)
- npm (or yarn/pnpm/bun)

Quick Start
```bash
npm install
npm run dev
# http://localhost:3000 (redirects to /dashboards/default)

# Production
npm run build
npm run start
```

Folder Structure
```
anascotask/
├─ app/
│  ├─ dashboards/
│  │  ├─ default/page.tsx         # Default dashboard route
│  │  └─ page.tsx                 # Redirect → /dashboards/default
│  ├─ layout.tsx                  # Global layout (Navbar, Sidebar, RightPanel)
│  ├─ not-found.tsx               # 404
│  └─ page.tsx                    # Redirect → /dashboards/default
├─ components/
│  ├─ layout/
│  │  ├─ Navbar.tsx               # Top navigation, toggles for panels
│  │  ├─ Sidebar.tsx              # Left navigation
│  │  └─ RightPanel.tsx           # Notifications/Activities/Contacts
│  └─ ui/
│     ├─ Charts.tsx               # Line, Bar, Donut charts
│     ├─ StatsCards.tsx           # KPI cards
│     └─ TrafficWebsite.tsx       # Traffic bars
├─ data/
│  └─ dashboard.json              # Demo data
├─ public/
│  └─ assets/
│     ├─ contacts/                # Sample avatars
│     └─ group.png                # Sidebar brand icon
├─ styles/
│  └─ globals.css                 # Tailwind + custom styles
├─ types/
│  ├─ charts.ts                   # Chart types
│  └─ dashboard.ts                # Stat/Notification/Activity types
├─ next.config.ts
├─ postcss.config.mjs
├─ package.json
└─ tsconfig.json
```

Scripts
- dev: start development server
- build: production build (Turbopack)
- start: run built app

Environment
- No env vars required; data is local in `data/dashboard.json`.

Libraries Used
- Next.js 15 (App Router) + Turbopack
- React 18 + TypeScript
- Tailwind CSS
- Chart.js + react-chartjs-2 (loaded via next/dynamic)
- Lucide React icons
- next/font (Inter)

Notes
- Sidebar and right panel are responsive and full-height on large screens; toggles live in the navbar.
- Charts are client-only and memoized for performance.

