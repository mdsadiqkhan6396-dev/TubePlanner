# 🎬 TubePlanner

A professional YouTube video scheduling and management tool built with Next.js 16, Prisma, and PostgreSQL.

## 🏗️ Project Structure

```
TubePlanner/
│
├── 📁 prisma/                     # Database Layer
│   └── schema.prisma              # PostgreSQL schema (User, YouTubeChannel, etc.)
│
├── 📁 public/                     # Static Assets
│   ├── favicon.svg                # Browser tab icon
│   └── logo.svg                   # App logo
│
├── 📁 src/                        # Source Code
│   │
│   ├── 📁 app/                    # Next.js App Router (Pages & API)
│   │   ├── 📁 api/                # Backend API Routes
│   │   │   ├── 📁 auth/           # NextAuth.js endpoints
│   │   │   ├── 📁 health/         # Health check endpoint
│   │   │   └── 📁 video-scheduler/ # Main API endpoints
│   │   │       ├── analytics/     # Video analytics
│   │   │       ├── auth/          # YouTube OAuth
│   │   │       ├── channels/      # Channel management
│   │   │       ├── generate/      # AI title/description
│   │   │       ├── upload/        # Video upload
│   │   │       └── user-data/     # User data CRUD
│   │   │
│   │   ├── 📁 (pages)/            # Frontend Pages
│   │   │   ├── auth/              # Login/error pages
│   │   │   ├── callback/          # OAuth callback
│   │   │   ├── contact/           # Contact page
│   │   │   ├── privacy/           # Privacy policy
│   │   │   ├── terms/             # Terms of service
│   │   │   └── video-scheduler/   # Main application
│   │   │
│   │   ├── globals.css            # Global Tailwind styles
│   │   ├── layout.tsx             # Root layout wrapper
│   │   └── page.tsx               # Landing page
│   │
│   ├── 📁 components/             # React Components
│   │   ├── 📁 features/           # Business logic components
│   │   │   └── video-scheduler/   # Video scheduler UI
│   │   └── 📁 ui/                 # Reusable UI primitives
│   │       ├── button.tsx         # Button component
│   │       ├── card.tsx           # Card component
│   │       ├── input.tsx          # Input component
│   │       ├── label.tsx          # Label component
│   │       └── theme-toggle.tsx   # Dark/light mode toggle
│   │
│   ├── 📁 generated/              # Auto-generated code
│   │   └── prisma/                # Prisma client
│   │
│   ├── 📁 hooks/                  # Custom React Hooks
│   │   └── index.ts               # Hook exports
│   │
│   ├── 📁 lib/                    # Utilities & Services
│   │   ├── auth.ts                # NextAuth configuration
│   │   ├── auth.edge.ts           # Edge runtime auth
│   │   ├── cloud-storage.ts       # Google Cloud Storage
│   │   ├── db.ts                  # Prisma database client
│   │   ├── encryption.ts          # AES-256-GCM encryption
│   │   ├── env.ts                 # Environment validation
│   │   ├── gemini.ts              # Google AI integration
│   │   ├── rate-limit.ts          # API rate limiting
│   │   ├── security.ts            # Security middleware
│   │   ├── storage.ts             # User data persistence
│   │   ├── utils.ts               # Helper functions
│   │   └── youtube.ts             # YouTube Data API v3
│   │
│   ├── 📁 types/                  # TypeScript Definitions
│   │   ├── index.ts               # Type exports
│   │   └── scheduler.ts           # Video scheduler types
│   │
│   └── middleware.ts              # Next.js edge middleware
│
├── .env.example                   # Environment template
├── .env.local                     # Local development env
├── .env.production                # Production env
├── components.json                # shadcn/ui configuration
├── Dockerfile                     # Docker containerization
├── next.config.ts                 # Next.js configuration
├── package.json                   # Dependencies & scripts
├── prisma.config.ts               # Prisma settings
├── tailwind.config.ts             # Tailwind CSS config
└── tsconfig.json                  # TypeScript config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- PostgreSQL database (or Neon serverless)
- Google Cloud Console project with:
  - YouTube Data API v3 enabled
  - OAuth 2.0 credentials
  - Gemini API key (optional, for AI features)

### Installation

```bash
# Install dependencies
npm install

# Generate Prisma client
npx prisma generate

# Push schema to database
npx prisma db push

# Start development server
npm run dev
```

### Environment Variables

Copy `.env.example` to `.env.local` and fill in:

```env
# Database
DATABASE_URL="postgresql://..."

# Authentication
AUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."
GOOGLE_REDIRECT_URI="http://localhost:3000/callback"

# AI Features
GEMINI_API_KEY="..."

# Security
ENCRYPTION_KEY="..." # Generate: openssl rand -hex 32
```

## 📦 Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Database** | PostgreSQL + Prisma 7 |
| **Auth** | NextAuth.js v5 |
| **Styling** | Tailwind CSS 4 |
| **AI** | Google Gemini |
| **Hosting** | Vercel |
| **Storage** | Neon Serverless PostgreSQL |

## 🔒 Security Features

- AES-256-GCM encryption for OAuth tokens
- CSRF protection
- Rate limiting
- Input validation
- Secure cookie handling

## 📝 License

MIT License - see LICENSE file for details.
