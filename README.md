# EchoVault - Fan Relationship Management

A Learning Fan Relationship Management Agent built for the Hindsight Hackathon.

## Overview

EchoVault is a comprehensive SaaS platform that helps artists, event organizers, and music festivals build lasting relationships with their fans through AI-powered insights, dynamic rewards, and personalized experiences.

## Features

### For Fans
- **Memory Vault**: Interactive timeline of fan journey with React Flow visualization
- **NFT Gallery**: Dynamic NFT tickets with claim animations
- **Proactive Offers**: AI-suggested personalized rewards
- **Fan Insights**: What EchoVault remembers about you

### For Organizers
- **Dashboard Overview**: Key metrics, fan growth charts, and recent activity
- **Fan Segmentation**: AI-powered fan categorization
- **Reward Rules Builder**: Drag-and-drop reward automation
- **AI Agent Suggestions**: Live recommendations for engagement
- **Campaign Launcher**: Create and launch targeted campaigns

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Graphs**: React Flow
- **Auth**: Clerk
- **Icons**: Lucide React
- **Theme**: next-themes (Light/Dark mode)
- **i18n**: next-i18next (English/Hindi)

## Color Palette

- **Primary**: Warm Amber (#F5C26B) → Deep Teal (#0F766E)
- **Accent**: Soft Sunset Orange (#FB923C) + Rich Gold (#EAB308)
- **Background**: Soft Cream (#FEF9E8) / Deep Charcoal (#111827)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── auth/
│   │   ├── login/page.tsx
│   │   └── signup/page.tsx
│   ├── fan/page.tsx
│   ├── organizer/page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/ (shadcn/ui components)
│   ├── hero.tsx
│   ├── features.tsx
│   ├── testimonials.tsx
│   ├── cta.tsx
│   ├── fan-dashboard.tsx
│   ├── organizer-dashboard.tsx
│   ├── memory-vault.tsx
│   ├── nft-gallery.tsx
│   ├── proactive-offers.tsx
│   ├── fan-insights.tsx
│   ├── overview.tsx
│   ├── fan-segments.tsx
│   ├── reward-rules-builder.tsx
│   ├── agent-suggestions.tsx
│   ├── campaign-launcher.tsx
│   ├── auth-form.tsx
│   ├── navbar.tsx
│   └── theme-provider.tsx
├── lib/
│   └── utils.ts
├── hooks/
│   └── use-toast.ts
└── ...
```

## Key Components

### Landing Page
- Video background with concert footage
- Floating memory particles animation
- Interactive feature cards
- Testimonials from industry leaders

### Fan Dashboard
- Loyalty score with progress ring
- Memory vault with React Flow graph
- NFT gallery with claim animations
- Proactive offers with AI insights

### Organizer Dashboard
- Metrics overview with Recharts
- Fan segmentation insights
- Reward rules builder
- AI agent suggestions
- Campaign launcher

## Authentication

Uses Clerk for authentication with role-based access (Fan/Organizer).

## Internationalization

Supports English and Hindi with simple text switching.

## Responsive Design

Fully responsive with mobile-first approach.

## Animations

Heavy use of Framer Motion for:
- Page transitions
- Micro-interactions
- Loading states
- Hover effects
- NFT claim confetti

## Demo Data

Includes realistic demo data for 3 fake fans with 6-month memory history.

## Deployment

Ready for deployment on Vercel, Netlify, or any Node.js hosting platform.

## License

MIT License