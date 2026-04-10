# EchoVault - Complete Multi-Page UI/UX Design System

## Overview
EchoVault is a production-ready AI-powered Fan Relationship Management platform featuring blockchain ownership, built with React, TypeScript, Tailwind CSS v4, and Motion (Framer Motion).

## Application Structure

### 16 Unique Screens

#### Onboarding (4 screens)
1. **Welcome** (`/onboarding`) - Hero with animated gradient, feature carousel, dual CTAs
2. **Fan Signup** (`/onboarding/fan-signup`) - Email/QR/Wallet connection with privacy notice
3. **Organizer Signup** (`/onboarding/organizer-signup`) - Company details, integrations, pricing
4. **Quiz** (`/onboarding/quiz`) - 5-question cold-start with liquid progress bar

#### Fan Portal - Mobile First (6 screens)
1. **Memory Timeline** (`/fan/memories`) - Temporal search, AI reflections, proactive agent chip
2. **NFT Vault** (`/fan/nft-vault`) - Grid layout, flip card animations, QR claiming
3. **Proactive Agent** (`/fan/agent`) - Suggestion feed, "Why?" explanations, accept/dismiss
4. **Privacy Center** (`/fan/privacy`) - Memory graph, deletion controls, consent history
5. **Settings** (`/fan/settings`) - Profile, wallet, notifications, theme toggle, referrals
6. **Reward Redemption** (Modal) - Evidence display, QR code, confetti animation, social sharing

#### Organizer Dashboard - Desktop First (6 screens)
1. **Overview** (`/organizer/overview`) - KPIs, churn gauge, loyalty chart, at-risk table
2. **Fan Segments** (`/organizer/segments`) - Filter builder, segment comparison, export CSV
3. **Reward Engine** (`/organizer/rewards`) - IF-THEN rules, schedule, budget controls
4. **NFT Analytics** (`/organizer/analytics`) - Revenue trends, royalties, fraud alerts
5. **Campaigns** (`/organizer/campaigns`) - Campaign table, A/B tests, performance charts
6. **Settings** (`/organizer/settings`) - Integrations, privacy, billing, API keys, team

## Design System

### Color Palette
- **Primary Violet**: `#6C3BFF` (buttons, active states, charts)
- **Secondary Mint**: `#00C2A0` (success, positive trends, badges)
- **Accent Coral**: `#FF6B4A` (warnings, churn, danger actions)
- **Info Blue**: `#3B82F6` (help, informational states)

### Liquid Glass Aesthetic
- Backdrop blur: `16px` (standard), `24px` (elevated)
- Background: `rgba(255, 255, 255, 0.04)` with blur
- Border: `rgba(255, 255, 255, 0.08)`
- Hover: `rgba(255, 255, 255, 0.08)` with `scale(1.01)`
- Border radius: `24px` (cards), `16px` (inputs), `48px` (buttons)
- Gradient overlays: `linear-gradient(135deg, #6C3BFF, #00C2A0)`

### Typography (Inter)
- Display: `48px / 700` - Hero sections
- H1: `32px / 600` - Page titles
- H2: `24px / 600` - Section headers
- H3: `20px / 500` - Card titles
- Body: `16px / 400` - Default text
- Caption: `12px / 500` - Badges, timestamps

### Spacing (8px base)
- `4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128px`

## Component Library

### Glass Components
- **GlassCard** - 3 sizes (sm/md/lg), hover states, gradient overlay option
- **GlassButton** - 4 variants (primary/secondary/ghost/danger), 3 sizes
- **GlassInput** - Focus states, error handling, label support

### Specialized Components
- **MemoryCard** - Icon-based type indicator, AI reflection badge, confidence scores
- **NFTTicketCard** - Flip animation (front/back), badges, blockchain icon, transfer actions
- **LoyaltyBadge** - Animated pulse, color-coded by score, inline display
- **ChurnGauge** - Semicircle meter, color zones, gradient arc animation
- **RewardModal** - Multi-step flow, confetti effects, QR code display

## Navigation

### Fan Portal (Mobile)
- Bottom tab bar with 5 tabs
- Active indicator with glow effect
- Icons: Brain, Ticket, Sparkles, Shield, User

### Organizer Dashboard (Desktop)
- Collapsible sidebar (64px collapsed, 256px expanded)
- Logo, navigation menu, user profile
- Icons: BarChart, Users, Gift, Gem, Megaphone, Settings

## Animations & Micro-interactions

### Page Transitions
- Fade + slide up (8px) - `0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)`

### Component Animations
- Card hover: Scale 1.01, shadow increase - `0.2s ease-out`
- Button tap: Scale 0.98 - `0.1s ease-in`
- Modal open: Scale 0.95 → 1 + backdrop blur - `0.25s spring`
- NFT flip: 3D rotation - `0.6s spring`
- Skeleton loader: Shimmer sweep - `1.5s linear infinite`
- Loyalty badge: Pulse ring - `0.8s ease-out`
- Confetti: Burst on reward redemption

### Special Effects
- Proactive agent chip: Slide in from bottom with delay
- Churn gauge: Animated arc fill with color transitions
- Graph nodes: Clickable with selection states
- Toast notifications: Slide from right

## Data Visualization (Recharts)

### Charts Used
- Line Chart: Revenue trends, campaign performance
- Bar Chart: Loyalty distribution, segment comparison
- Custom Gauge: Churn risk semicircle

### Styling
- Background: `rgba(255,255,255,0.04)` with blur
- Grid: `rgba(255,255,255,0.08)` dashed
- Primary line: `#6C3BFF` (3px stroke)
- Secondary line: `#00C2A0` (3px stroke)
- Tooltips: Glass card styling with rounded corners

## Key Features

### AI "Hindsight" Integration
- Purple glow badges on insights
- Sparkles icon throughout
- Confidence percentages on predictions
- "Why did Hindsight suggest this?" explanations

### Blockchain Elements
- Polygon icon on NFT cards
- Royalty percentages displayed
- Transfer history tracking
- Gasless transaction messaging

### Privacy Controls
- Visual memory graph with deletable nodes
- Toggle switches for data sharing
- Consent history log with timestamps
- GDPR-compliant data export

### Churn Prevention
- Real-time risk scoring
- At-risk fan identification
- Automated intervention suggestions
- Win-back campaign templates

## Technical Stack
- React 18.3.1
- React Router 7.13.0
- Motion (Framer Motion) 12.23.24
- Recharts 2.15.2
- Tailwind CSS 4.1.12
- Canvas Confetti 1.9.4
- TypeScript (via Vite)

## File Structure
```
/src
  /app
    /components
      /glass - Reusable glass UI components
      MemoryCard.tsx
      NFTTicketCard.tsx
      LoyaltyBadge.tsx
      ChurnGauge.tsx
      RewardModal.tsx
    /layouts
      FanLayout.tsx - Mobile bottom tabs
      OrganizerLayout.tsx - Desktop sidebar
    /pages
      /onboarding - Welcome flow (4 screens)
      /fan - Fan portal (6 screens)
      /organizer - Dashboard (6 screens)
    /lib
      utils.ts - Utility functions
    routes.tsx - React Router config
    App.tsx - Root component
  /styles
    theme.css - Design tokens & utilities
    index.css - Global styles & animations
```

## Responsive Breakpoints
- Mobile: `< 768px` (Fan portal optimized)
- Tablet: `768px - 1024px`
- Desktop: `> 1024px` (Organizer dashboard optimized)

## Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Optimizations
- Code splitting via React Router
- Lazy loading for heavy components
- Optimized backdrop blur (GPU-accelerated)
- Debounced search inputs
- Virtualized large lists (future enhancement)

## Accessibility
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus rings on all focusable elements
- Semantic HTML structure
- Color contrast ratios meet WCAG AA

---

**Built with ❤️ for production-grade SaaS platforms**
