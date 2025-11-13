# Personal Portfolio - Copilot Instructions

## Architecture Overview
This is a fullstack TypeScript portfolio application featuring 3D visualizations with a modern tech stack:

**Monorepo Structure:**
- `client/` - React SPA with Vite
- `server/` - Express.js API server
- `shared/` - Common types and schemas

**Key Stack:**
- Frontend: React 18 + Vite + Wouter (routing) + Shadcn/ui + Tailwind CSS
- 3D Graphics: Three.js + React Three Fiber + Model Viewer
- Backend: Express.js + TypeScript
- Database: PostgreSQL + Drizzle ORM
- Styling: Tailwind CSS with CSS custom properties via `theme.json`

## Development Workflow

**Start Development:**
```bash
npm run dev  # Runs server on port 5000 (serves both API and client)
```

**Database Operations:**
```bash
npm run db:push  # Push schema changes to database
```

**Build for Production:**
```bash
npm run build   # Builds client with Vite + server with esbuild
npm start       # Production server
```

## Key Patterns & Conventions

### File Organization
- **UI Components**: Use Shadcn/ui pattern in `client/src/components/ui/`
- **Section Components**: Page sections in `client/src/components/sections/`
- **3D Components**: Three.js components in `client/src/components/3d/`
- **Route Structure**: Single-page app with sections (Hero, About, Projects, etc.)

### Styling System
- **Theme Configuration**: Controlled via `theme.json` (primary color, variant, radius)
- **Color System**: CSS custom properties following Shadcn convention (`--primary`, `--background`, etc.)
- **Component Styling**: Use `cn()` utility from `@/lib/utils` for conditional classes
- **Responsive Design**: Mobile-first with Tailwind breakpoints

### 3D Integration Patterns
- **Model Viewer**: Use Google's Model Viewer for GLB files (see `ModelViewer.tsx`)
- **Three.js Integration**: React Three Fiber for interactive 3D scenes
- **Performance**: 3D models as background elements with low opacity for subtle effects

### Backend Patterns
- **API Routes**: Prefix all routes with `/api` in `server/routes.ts`
- **Storage Interface**: Use `IStorage` interface pattern for database operations
- **Schema Management**: Drizzle ORM with schemas in `shared/schema.ts`
- **Request Logging**: Automatic API request logging with response time tracking

### Component Architecture
- **Animation**: Framer Motion for page/section transitions
- **State Management**: React Query for server state
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Mix of Lucide React and React Icons (SI prefixed for brands)

## Critical Integration Points

### Vite Configuration
- **Aliases**: `@` → `client/src`, `@shared` → `shared`
- **Development**: Vite dev server integrated into Express in development
- **Production**: Static files served by Express

### Database Layer
- **Schema**: PostgreSQL with Drizzle ORM schemas in `shared/`
- **Migrations**: Generated in `./migrations` directory
- **Environment**: Requires `DATABASE_URL` environment variable

### Docker Development
- **Port Mapping**: Container port 5000 → host port 3001
- **Hot Reload**: Volume mounted for live development
- **Health Checks**: Built-in container health monitoring

## Project-Specific Conventions

### Portfolio Content Structure
- **Projects**: Hardcoded array in `Projects.tsx` with GitHub links and tech stacks
- **Skills Display**: Icon-based tech logos in Hero section
- **Experience**: Timeline-based layout using custom `TimelineItem` component

### 3D Asset Handling
- **Model Files**: Store GLB files in `client/public/assets/`
- **Loading**: Use Model Viewer web component for reliable GLB rendering
- **Fallbacks**: Ensure 3D elements are non-blocking background enhancements

### Performance Optimizations
- **Bundle Splitting**: Vite handles automatic code splitting
- **Asset Loading**: Lazy loading for heavy 3D models and images
- **Request Logging**: Custom middleware tracks API performance

## Environment Setup Requirements
- Node.js with npm/bun support
- PostgreSQL database with `DATABASE_URL` configured
- Development runs on single port (5000) serving both client and API