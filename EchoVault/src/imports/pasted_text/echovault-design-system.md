Here is a structured, production-ready **Figma Make prompt** for your EchoVault project. It includes typography, color systems, spacing, component architecture, Apple-inspired "liquid glass" styling, and micro-interactions.

---

# EchoVault — Complete Figma Make Design System Prompt

## 1. Project Overview

**Product:** EchoVault — AI-powered Fan Relationship Management Agent with blockchain ownership  
**Style:** Apple-inspired "liquid glass" — translucent, blurred layers, smooth gradients, depth through light, subtle reflections, fluid animations  
**Vibe:** Premium, intelligent, trustworthy, futuristic but warm, data-rich but human-centered  
**Platforms:** Web dashboard (organizers) + Fan portal (mobile-first web app)

---

## 2. Frame Sizes & Layout Structure

| Frame | Device | Size (px) | Purpose |
|-------|--------|-----------|---------|
| Desktop Dashboard | MacBook Pro 16" | 1728 × 1117 | Organizer main view |
| Desktop Dashboard Mini | 1440 × 900 | Secondary organizer view |
| Fan Portal (Desktop) | 1440 × 900 | Fan view on desktop |
| Fan Portal (Mobile) | iPhone 15 Pro | 390 × 844 | Primary fan experience |
| Fan Portal (Tablet) | iPad Pro 11" | 834 × 1194 | Optional |
| Component Library | Auto layout | Variable | All UI components |

**Grid System:**
- Desktop: 12-column grid, gutter 24px, margin 32px
- Mobile: 4-column grid, gutter 16px, margin 20px
- Tablet: 8-column grid, gutter 20px, margin 24px

**Spacing Scale (8px base):** 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128

---

## 3. Color System

### Primary Palette (EchoVault Identity)
| Role | Hex | Usage |
|------|-----|-------|
| Primary | `#6C3BFF` (Deep Violet) | Buttons, links, active states, key accents |
| Primary Glow | `#9B6BFF` | Hover states, glow effects |
| Primary Dark | `#4A1DCC` | Pressed states, deep backgrounds |

### Secondary Palette
| Role | Hex | Usage |
|------|-----|-------|
| Secondary | `#00C2A0` (Mint) | Success, positive trends, loyalty score high |
| Secondary Glow | `#33E0C0` | Hover on secondary elements |
| Accent | `#FF6B4A` (Coral) | Churn risk, warnings, urgent actions |
| Info | `#3B82F6` (Blue) | Information, help, tooltips |

### Neutral Palette (Liquid Glass Base)
| Role | Hex | Opacity |
|------|-----|---------|
| Glass Base | `#FFFFFF` | 0.08–0.12 (light mode) / `#000000` 0.15–0.25 (dark) |
| Surface 1 | `#FFFFFF` | 0.10 |
| Surface 2 | `#FFFFFF` | 0.06 |
| Border Subtle | `#FFFFFF` | 0.15 |
| Text Primary | `#FFFFFF` | 0.92 |
| Text Secondary | `#FFFFFF` | 0.65 |
| Text Tertiary | `#FFFFFF` | 0.40 |

### Dark Mode (Default — fan portal)
- Background: `#0A0A0F`
- Cards: `rgba(255,255,255,0.04)` with 16px blur
- Elevation 1: `rgba(0,0,0,0.6)` shadows

### Light Mode (Optional — dashboard preference)
- Background: `#F5F5F7`
- Cards: `rgba(255,255,255,0.8)` with 20px blur
- Text: `#1D1D1F`

---

## 4. Typography System

**Font Family:** Inter (SF Pro alternative for cross-platform)

| Style | Weight | Size (px) | Line Height | Letter Spacing | Usage |
|-------|--------|-----------|-------------|----------------|-------|
| Display | 700 | 48 | 1.1 | -0.02em | Hero, empty states |
| H1 | 600 | 32 | 1.2 | -0.01em | Page titles |
| H2 | 600 | 24 | 1.3 | -0.01em | Section headers |
| H3 | 500 | 20 | 1.4 | 0 | Card titles |
| Body Large | 400 | 18 | 1.5 | 0 | Descriptions |
| Body | 400 | 16 | 1.5 | 0 | Default text |
| Body Small | 400 | 14 | 1.5 | 0.01em | Helper, metadata |
| Caption | 500 | 12 | 1.4 | 0.02em | Badges, timestamps |
| Label | 600 | 13 | 1.2 | 0.01em | Buttons, inputs |

**Font for numbers (dashboard):** "Inter", tabular-nums feature

---

## 5. Liquid Glass Component Library

### Card Component
```
Properties:
- Background: rgba(255,255,255,0.04) + backdrop-blur(16px)
- Border: 1px solid rgba(255,255,255,0.08)
- Border-radius: 24px (large) / 20px (medium) / 16px (small)
- Shadow: 0px 8px 32px rgba(0,0,0,0.12)
- Hover: background rgba(255,255,255,0.08), scale(1.01), transition 0.2s ease
- Padding: 24px (default)
```

### Glass Button (3 variants)
**Primary:**
- Background: `#6C3BFF` + 10% white overlay
- Border-radius: 48px (pill)
- Padding: 12px 24px
- Hover: scale(1.02), brightness(1.1)
- Tap: scale(0.98)

**Secondary (Glass outline):**
- Background: transparent
- Border: 1.5px solid rgba(255,255,255,0.3)
- Backdrop-blur: 12px
- Hover: background rgba(255,255,255,0.1)

**Ghost:**
- Background: transparent
- No border
- Hover: background rgba(255,255,255,0.06)

### Input Fields
```
- Background: rgba(255,255,255,0.04)
- Border: 1px solid rgba(255,255,255,0.1)
- Border-radius: 16px
- Padding: 14px 18px
- Focus: border #6C3BFF, box-shadow 0 0 0 3px rgba(108,59,255,0.3)
- Placeholder: rgba(255,255,255,0.35)
- Label: 14px, 500 weight, above field
```

### Memory Vault Cards (Special)
- Gradient border: `linear-gradient(135deg, #6C3BFF, #00C2A0)`
- Inner glass: same as card
- Animated shimmer on hover
- Corner indicator for "active memory"

### NFT Ticket Card
- 3D tilt effect (simulate in Figma with shadow angles)
- Dynamic badge overlay (VIP, Early Access, etc.)
- QR code area (mock) with glass mask
- Back side: metadata, loyalty score, memory timestamp

---

## 6. Animations & Micro-interactions (Spec for Developer Handoff)

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Page entrance | Fade + slide up (8px) | 0.3s | cubic-bezier(0.2, 0.9, 0.4, 1.1) |
| Card hover | Scale 1.01 + shadow increase | 0.2s | ease-out |
| Modal open | Scale 0.95 → 1 + backdrop blur | 0.25s | spring (0.3, 0.8) |
| Button tap | Scale to 0.98 | 0.1s | ease-in |
| Skeleton loader | Shimmer gradient sweep | 1.5s | linear (infinite) |
| Memory timeline scroll | Sticky parallax (subtle) | 0.1s per step | linear |
| NFT upgrade | Glow pulse + confetti burst | 0.4s | ease-out |
| Toast notification | Slide from right, fade | 0.3s | cubic-bezier(0.2, 0.9, 0.4, 1.1) |
| Hindsight reflection pulse | Ripple ring from avatar | 0.6s | ease-out (once) |
| Churn indicator | Gentle shake + color pulse to coral | 0.3s | ease-in-out |

**Figma Make note:** Use Smart Animate with matching layer names. Create interactive components with Variants for hover/press/disabled.

---

## 7. Key Screens to Design

### Fan Portal (Mobile Priority)

**Screen 1: Memory Timeline**
- Header: Avatar + fan name + loyalty score (glass pill)
- Timeline: Vertical scrolling cards, each = one memory (event, merch, interaction)
- Temporal search bar (glass) with date filter
- Graph node view (toggle): shows connections between memories
- AI reflection badge: "Hindsight learned: You love front row (94% confidence)"

**Screen 2: My NFT Vault**
- Grid of NFT tickets (2 columns)
- Each card shows event name, date, dynamic badge (VIP/Upgraded)
- Tap card → flips to show metadata + transfer/sell option
- "Claim with QR" button (gasless flow)

**Screen 3: Proactive Agent Panel**
- "For you" section (personalized offers)
- Early access card with timer
- "Hindsight recommends:" message from AI
- Reward redemption flow (2 taps)

**Screen 4: Privacy Center**
- Toggle switches for data sharing
- Visual memory graph (fan can delete nodes)
- "Download my memory" button
- Consent timestamp log

### Organizer Dashboard (Desktop Priority)

**Screen 1: Overview**
- Top: Churn risk gauge (glass ring meter)
- Middle: Loyalty score distribution (bar chart — glass style)
- Right: At-risk fans list (3–5 rows with action buttons)
- Bottom: Recent Hindsight reflections (feed)

**Screen 2: Fan Segments**
- Filter bar: by loyalty score, churn risk, event attendance
- Segment cards with audience size
- "Trigger Campaign" button → opens reward engine

**Screen 3: Reward Engine**
- Rule builder: "If [condition] then [reward]"
- Condition options: attendance count, merch spend, sentiment score
- Reward options: NFT upgrade, early access, discount code
- Preview audience size (real-time)

**Screen 4: NFT Analytics**
- Secondary sales volume (line chart)
- Royalties earned (counter animation)
- Most traded tickets table
- Fraud alerts (if same wallet multiple resales)

---

## 8. Design Tokens (for Figma Variables)

```
// Spacing
$space-xs: 4px
$space-sm: 8px
$space-md: 16px
$space-lg: 24px
$space-xl: 32px
$space-2xl: 48px

// Border Radius
$radius-sm: 12px
$radius-md: 16px
$radius-lg: 24px
$radius-xl: 32px
$radius-pill: 100px

// Blur Values
$blur-sm: 8px
$blur-md: 16px
$blur-lg: 24px
$blur-xl: 40px

// Transitions
$transition-fast: 0.15s ease-out
$transition-base: 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1)
$transition-slow: 0.4s ease-out
```

---

## 9. Apple-Inspired Liquid Glass Details

1. **Frosted tabs** — bottom navigation on mobile with active indicator that slides like a liquid bubble
2. **Dynamic island-style notifications** — inline alerts that expand from a small pill
3. **Parallax scrolling** — background blur intensity increases as user scrolls
4. **Haptic feedback simulation** (visual only) — button press shows ripple
5. **Gradient overlays** — subtle `#6C3BFF` to `#00C2A0` on active elements
6. **Reflection lines** — 1px white line at 15% opacity on top edge of glass cards
7. **Skeleton screens** — animated with shimmer gradient (white to transparent)

---

## 10. Delivery Format for Figma Make

Please generate a **complete Figma Make design system** with:

1. **Color styles** (all tokens as variables)
2. **Text styles** (every typography variant)
3. **Component library** (cards, buttons, inputs, NFTs, badges)
4. **Interactive prototypes** for:
   - Memory timeline (scroll + tap)
   - NFT upgrade flow (3 screens)
   - Proactive agent suggestion → reward claim
5. **Desktop dashboard** (organizer view) — 1 fully designed screen
6. **Mobile fan portal** — 4 fully designed screens linked
7. **Liquid glass template** (reusable background component)
8. **Animation spec annotations** on hover states and smart animate transitions

**Visual references to emulate:** Apple's visionOS glass materials, Arc Browser's sidebar, Linear.app's attention to micro-interactions, Stripe's Dashboard clarity.

---

## 11. Success Checkpoints (For Designer)

- [ ] Every glass component has `backdrop-blur` clearly indicated
- [ ] Hindsight memory timeline visually distinguishes between "raw memory" vs "reflected opinion"
- [ ] Blockchain elements (NFTs) have subtle visual distinction (glow, corner badge)
- [ ] Dark mode is default; light mode exists as variant
- [ ] Churn risk is immediately scannable (color + icon + label)
- [ ] Proactive agent feels alive (not static — add typing indicator or pulse)
- [ ] Privacy controls are not hidden — prominent but respectful

---

This prompt gives your UI/UX designer everything needed to build a **VC-ready, hackathon-winning EchoVault design system** in Figma Make. The "liquid glass + Hindsight memory" combination will visually communicate intelligence, memory, and ownership — the three pillars of your pitch.