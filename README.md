# HOECHEM SACCO Digital Platform

A full-stack, production-ready SACCO (Savings and Credit Cooperative) web application built with Next.js 15, NestJS, and Supabase.

## Project Structure

```
/
├── apps/
│   ├── web/       # Next.js 15 (App Router) — Public website + Member/Admin Portals
│   └── api/       # NestJS — REST API backend
├── packages/
│   ├── ui/        # Shared React component library
│   ├── types/     # Shared TypeScript types
│   └── config/    # Shared Tailwind, ESLint, Prettier configs
├── docker-compose.yml
└── turbo.json
```

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 15, React 19, TypeScript, Tailwind CSS |
| State | TanStack Query, Zustand |
| Forms | React Hook Form + Zod |
| Backend | NestJS, TypeScript |
| Database | Supabase PostgreSQL + Prisma ORM |
| Auth | JWT (HttpOnly cookies) + bcrypt |
| Storage | Supabase Storage |
| PDF | @react-pdf/renderer |
| Charts | Recharts |
| Icons | Lucide React |

## Prerequisites

- Node.js v20+
- pnpm v9+
- Docker & Docker Compose (for local development)
- Supabase project (for database + storage)

## Quick Start

### 1. Clone & Install Dependencies

```bash
git clone <repo-url>
cd HOECHEM-
pnpm install
```

### 2. Set up Environment Variables

```bash
# Frontend
cp apps/web/.env.example apps/web/.env.local

# Backend
cp apps/api/.env.example apps/api/.env
```

Fill in the required values (see Environment Variables section below).

### 3. Run Database Migrations

```bash
pnpm db:migrate
pnpm db:seed
```

### 4. Start Development Servers

```bash
pnpm dev
```

This starts:
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:4000
- **Swagger Docs:** http://localhost:4000/api/docs

## Environment Variables

### Frontend (`apps/web/.env.local`)

```env
NEXT_PUBLIC_API_URL=http://localhost:4000/api/v1
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Backend (`apps/api/.env`)

```env
NODE_ENV=development
PORT=4000
DATABASE_URL=postgresql://postgres:[password]@[host]:5432/[db]?pgbouncer=true
DIRECT_URL=postgresql://postgres:[password]@[host]:5432/[db]
SUPABASE_URL=your_supabase_project_url
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
SUPABASE_STORAGE_BUCKET=hoechem-sacco
JWT_SECRET=your_super_secret_jwt_key_at_least_32_chars
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d
FRONTEND_URL=http://localhost:3000
RESEND_API_KEY=your_resend_api_key
ADMIN_EMAIL=admin@hoechemsacco.com
ADMIN_PASSWORD=Admin@123456
```

## Docker Deployment

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Stop all services
docker-compose down
```

## Testing

```bash
# All tests
pnpm test

# Backend unit tests
pnpm --filter @hoechem/api test

# Backend e2e tests
pnpm --filter @hoechem/api test:e2e

# Frontend type checking
pnpm --filter @hoechem/web type-check
```

## Application Modules

### Public Website
- **Home** — Hero, stats, featured services
- **About Us** — History, mission, leadership
- **Loans** — All loan products with rates
- **Savings** — Savings products
- **Membership** — How to join + application
- **News & Events** — Announcements
- **Resources** — Forms, downloads
- **Contact** — Working contact form
- **FAQ** — Frequently asked questions

### Member Portal (Authentication Required)
- Dashboard (account summary)
- Savings account management
- Loan applications & tracking
- Transaction history
- Statement downloads (PDF)
- Profile management
- Notifications

### Admin Portal (Admin/Super Admin Only)
- KPI dashboard
- Member management & approval
- Loan workflow management
- Savings management
- Announcements CMS
- Reports (CSV/PDF)
- Audit logs
- User & role management

## API Documentation

Swagger UI is available at `http://localhost:4000/api/docs` when running in development mode.

All endpoints are prefixed with `/api/v1`.

## License

Proprietary — HOECHEM SACCO Ltd.
