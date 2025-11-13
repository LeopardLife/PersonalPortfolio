# Personal Portfolio - Copilot Instructions

## Architecture Overview
Next.js 16 portfolio application with 3D visualizations and modern fullstack architecture.

**Key Stack:**
- Framework: Next.js 16 with App Router + Turbopack (default)
- Frontend: React 18 + Shadcn/ui + Tailwind CSS + Framer Motion
- 3D Graphics: Three.js + React Three Fiber + Google Model Viewer web component
- Database: PostgreSQL + Drizzle ORM
- State: React Query (`@tanstack/react-query`) for server state
- Styling: Tailwind CSS with CSS custom properties controlled by `theme.json`

**Dual Architecture (Migration in Progress):**
- **Primary**: `app/` directory (Next.js App Router) - active development
- **Legacy**: `client/` directory (Vite SPA) + `server/` (Express) - retained for reference
- Components live in root `components/` shared by both architectures

## Development Workflow

```bash
npm run dev      # Next.js dev server with Turbopack
npm run build    # Next.js production build
npm start        # Next.js production server
npm run db:push  # Push Drizzle schema changes to PostgreSQL
```

**Important**: Despite legacy `server/` directory, this is now a **Next.js application**. API routes use Next.js Route Handlers in `app/api/*/route.ts`, not Express.

## Key Patterns & Conventions

### File Organization
- **Page Components**: `app/page.tsx` (client component with section imports)
- **Section Components**: `components/sections/` (Hero, About, Projects, Experience, Contact)
- **UI Components**: `components/ui/` (Shadcn pattern - never edit manually, regenerate)
- **3D Components**: `components/3d/` (ModelViewer, Scene3D, FloatingShape)
- **API Routes**: `app/api/*/route.ts` (Next.js Route Handlers)

### Client vs Server Components
- **All page/section components use `'use client'` directive** (required for Framer Motion and interactivity)
- Root layout (`app/layout.tsx`) is server component with metadata
- Providers wrapper (`app/providers.tsx`) handles React Query setup

### Styling System
- **Theme Source of Truth**: `theme.json` defines primary color, variant, appearance, radius
- **CSS Variables**: Injected via `app/globals.css` following Shadcn convention (`--primary`, `--background`, etc.)
- **Tailwind Config**: `tailwind.config.ts` references CSS variables, content includes `app/`, `components/`, `pages/`
- **Utility Function**: Use `cn()` from `@/lib/utils` for conditional Tailwind classes

### 3D Integration Patterns
- **Model Viewer Web Component**: Preferred for GLB files (see `components/3d/ModelViewer.tsx`)
  - Dynamically loads script from `ajax.googleapis.com/ajax/libs/model-viewer/3.4.0/`
  - Custom TypeScript declaration for JSX intrinsic element
  - Props: `camera-controls`, `auto-rotate`, `rotation-per-second`, `interaction-prompt`
- **Asset Location**: `/public/assets/*.glb` served statically
- **Background Usage**: 3D elements rendered with low opacity (`opacity-30`) as non-blocking backgrounds
- **Performance**: Model Viewer handles optimization better than raw Three.js for static models

### Component Architecture
- **Animation**: Framer Motion with `initial`, `animate`, `transition` props on `motion.div`
- **Icons**: Mix of Lucide React (`lucide-react`) and React Icons (`react-icons`) - use `Si` prefix for brand logos
- **Forms**: React Hook Form + Zod validation (setup exists via Shadcn)
- **Toast Notifications**: Shadcn toast system with `<Toaster />` in layout

### Database Layer
- **Schema Location**: `shared/schema.ts` (single source of truth)
- **ORM**: Drizzle with Neon PostgreSQL driver (`@neondatabase/serverless`)
- **Config**: `drizzle.config.ts` points to `shared/schema.ts`, outputs to `./migrations`
- **Connection**: Requires `DATABASE_URL` environment variable
- **Types**: Auto-generated with `$inferSelect` and Zod schemas via `createInsertSchema`

## Critical Integration Points

### Path Aliases
TypeScript `paths` in `tsconfig.json`:
- `@/*` → root directory
- `@/components/*` → `components/`
- `@/app/*` → `app/`
- `@/lib/*` → `lib/`

**Note**: Legacy `vite.config.ts` has different aliases (`@` → `client/src`) - ignore when working in Next.js context.

### Next.js Configuration
- **Transpile Packages**: `transpilePackages: ['three', '@react-three/fiber', '@react-three/drei']` required for 3D libraries
- **Turbopack**: Default in Next.js 16, empty config to silence webpack warnings
- **Strict Mode**: Enabled (`reactStrictMode: true`)

### State Management
- **Query Client**: Configured in `app/providers.tsx` with 60s `staleTime`
- **Pattern**: Wrap mutations/queries with React Query hooks, defined in component files or custom hooks

## Project-Specific Conventions

### Portfolio Content
- **Hardcoded Data**: Projects, experience, skills defined inline in section components (no CMS)
- **Tech Logos**: Icon components from `react-icons/fa` and `react-icons/si` in `Hero.tsx`
- **Timeline Layout**: Custom `TimelineItem` component in `components/` for experience display

### Migration Notes
- `client/` and `server/` directories are **legacy** - do not add new features there
- When adding API routes, use Next.js Route Handlers in `app/api/`
- Shared types in `shared/` still valid for database schemas
- Component duplication exists between `client/src/components/` and `components/` - prioritize root `components/`

## Environment Requirements
- Node.js 20+ (specified in `@types/node`)
- PostgreSQL database with `DATABASE_URL` configured
- Development server runs on default Next.js port (3000)
