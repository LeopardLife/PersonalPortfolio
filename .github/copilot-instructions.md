# Personal Portfolio - Copilot Instructions

## Architecture & Code Layout
- Next.js 16 App Router app with Turbopack; React 18, Shadcn UI, Tailwind, Framer Motion; 3D via Google Model Viewer web component. Legacy `client/` + `server/` exist but are read-only references—build in `app/` + shared `components/`.
- Root layout wraps pages with `Navbar`, `Footer`, `Toaster`, GA tracker, and `Providers` (React Query) in [app/layout.tsx](app/layout.tsx). Home page is a client component composing section blocks with motion wrappers in [app/page.tsx](app/page.tsx).
- Section components live in [components/sections](components/sections) and are all client components for animations/interactivity. Shadcn primitives in [components/ui](components/ui) follow generated structure—regenerate rather than hand-edit.

## Styling & Theming
- Theme source: [theme.json](theme.json) (`primary`, `radius`, `appearance`). CSS variables set in [app/globals.css](app/globals.css); Tailwind pulls from them via [tailwind.config.ts](tailwind.config.ts). Dark mode is class-based. Utilities include gradient/glass/glow helpers defined in globals.

## State & Data
- React Query provided at root in [app/providers.tsx](app/providers.tsx) with `staleTime` 60s. An alternative shared client with custom `getQueryFn`/`apiRequest` exists in [lib/queryClient.ts](lib/queryClient.ts) if you need consistent fetch/error handling.
- Drizzle + Neon pool configured in [lib/db.ts](lib/db.ts); requires `DATABASE_URL` at runtime (throws if missing). Schema lives in `shared/schema.ts`; migrations via `npm run db:push`.

## 3D Integration
- Model Viewer component in [components/3d/ModelViewer.tsx](components/3d/ModelViewer.tsx) loads the Google `model-viewer` script once (guards against duplicate loads) and extends JSX typings. Preferred for GLB assets stored under `public/assets/...`; pass `camera-controls/auto-rotate/rotation-per-second` etc. as attributes.

## API Routes & External Services
- Contact form handler in [app/api/contact/route.ts](app/api/contact/route.ts) validates name/email/message, supports Resend (`RESEND_API_KEY`) or optional Nodemailer Gmail (`GMAIL_USER`, `GMAIL_APP_PASSWORD`), currently logs and returns success. Health route exists at `app/api/health/route.ts` (see file for details).
- Google Analytics ID is wired in layout via `GoogleAnalytics` component; adjust there if changing tracking.

## Workflows & Commands
- Dev/build: `npm run dev` (Turbopack), `npm run build`, `npm start`. Database: `npm run db:push` for Drizzle migrations. Default port 3000; Node 20+. Ensure env vars for DB and email before running server or contact endpoint.

## Patterns & Conventions
- All pages/sections are client components to enable Framer Motion; wrap new animated blocks with `motion.*` and initial/animate/transition props for consistency.
- Use path aliases from `tsconfig.json`: `@/*`, `@/components/*`, `@/app/*`, `@/lib/*`. Ignore legacy Vite aliasing.
- Prefer background 3D elements at low opacity to avoid blocking content (existing sections use gradients + separators). Reuse `SectionSeparator` pattern from [app/page.tsx](app/page.tsx) when adding new landing sections.
