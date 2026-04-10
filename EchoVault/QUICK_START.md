# EchoVault - Quick Start Guide

## 🚀 Getting Started

This is a complete, production-ready multi-page application with 16 unique screens.

### Navigate to Different Sections

#### Onboarding Flow
- **Welcome**: `/` or `/onboarding`
- **Fan Signup**: `/onboarding/fan-signup`
- **Organizer Signup**: `/onboarding/organizer-signup`
- **Quiz**: `/onboarding/quiz`

#### Fan Portal (Mobile-First)
- **Memory Timeline**: `/fan/memories` (default)
- **NFT Vault**: `/fan/nft-vault`
- **Proactive Agent**: `/fan/agent`
- **Privacy Center**: `/fan/privacy`
- **Settings**: `/fan/settings`

#### Organizer Dashboard (Desktop-First)
- **Overview**: `/organizer/overview` (default)
- **Fan Segments**: `/organizer/segments`
- **Reward Engine**: `/organizer/rewards`
- **NFT Analytics**: `/organizer/analytics`
- **Campaigns**: `/organizer/campaigns`
- **Settings**: `/organizer/settings`

## 🎨 Design Highlights

### Liquid Glass Aesthetic
- Translucent backgrounds with backdrop blur
- Subtle gradients and glow effects
- Smooth animations and transitions
- Dark mode optimized

### Color System
- **Primary Violet**: #6C3BFF
- **Secondary Mint**: #00C2A0
- **Accent Coral**: #FF6B4A
- **Info Blue**: #3B82F6

### Interactive Elements
- ✨ AI "Hindsight" insights with sparkle icons
- 🎫 Flippable NFT ticket cards
- 📊 Animated charts and gauges
- 🎉 Confetti on reward redemption
- 📱 Mobile bottom tab navigation
- 🖥️ Desktop collapsible sidebar

## 🧩 Key Features

### Fan Experience
1. **Memory Timeline** - Track all interactions with AI insights
2. **NFT Vault** - Manage blockchain tickets with flip animation
3. **Proactive Agent** - Get personalized recommendations
4. **Privacy Controls** - Visual memory graph, delete/manage data
5. **Reward System** - Modal flow with QR codes and confetti

### Organizer Tools
1. **Dashboard Overview** - KPIs, churn metrics, at-risk fans
2. **Fan Segmentation** - Build custom segments with IF-THEN rules
3. **Reward Engine** - Automated campaigns based on behavior
4. **NFT Analytics** - Track secondary sales and royalties
5. **Campaign Management** - A/B testing and performance tracking
6. **Team & Settings** - Integrations, API keys, billing

## 📦 Component Library

### Glass Components
```tsx
import { GlassCard, GlassButton, GlassInput } from './components/glass';
```

### Specialized Components
```tsx
import { MemoryCard, NFTTicketCard, LoyaltyBadge, ChurnGauge, RewardModal } from './components';
```

## 🎭 Animations

- **Page Transitions**: Fade + slide up (300ms)
- **Card Hover**: Scale 1.01 with shadow
- **NFT Flip**: 3D rotation (600ms spring)
- **Loyalty Badge**: Pulse animation
- **Churn Gauge**: Animated arc fill
- **Confetti**: On reward redemption

## 📱 Responsive Design

- **Mobile**: < 768px - Optimized fan portal with bottom tabs
- **Tablet**: 768px - 1024px - Adaptive layouts
- **Desktop**: > 1024px - Organizer dashboard with sidebar

## 🔧 Tech Stack

- React 18.3.1 + TypeScript
- React Router 7.13.0
- Motion (Framer Motion) 12.23.24
- Recharts 2.15.2
- Tailwind CSS 4.1.12
- Canvas Confetti 1.9.4

## 🎯 Best Practices

1. **Navigation**: Use React Router links for all navigation
2. **Animations**: Leverage Motion for complex animations
3. **Data Viz**: Use Recharts with glass styling
4. **State**: Keep component state local when possible
5. **Accessibility**: All interactive elements have proper ARIA labels

## 💡 Pro Tips

- The sidebar in organizer view can collapse for more space
- NFT cards flip when clicked - tap to see details
- Memory graph nodes in Privacy Center are interactive
- Proactive agent suggestions have "Why?" explanations
- All campaigns support A/B testing

---

**Ready to explore? Start at `/` for the welcome flow!**
