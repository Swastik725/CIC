EchoVault — Complete Multi-Page UI/UX Design System for Figma Make
⚠️ CRITICAL INSTRUCTION — READ FIRST
This is NOT a single-page or landing page design request.
I need a COMPLETE, MULTI-PAGE APPLICATION DESIGN with:

Minimum 12 unique screens across two user personas

Fully functional navigation between screens

Both Light and Dark themes as separate Figma Make variants

Working prototypes with realistic micro-interactions

Dashboard, fan portal, settings, analytics, and onboarding flows

The previous output was too basic. Please treat this as a production SaaS platform with enterprise complexity.

1. Project Recap (For Context)
Product: EchoVault — AI-powered Fan Relationship Management Agent with Hindsight memory + blockchain ownership
Target Users:

Organizers (artists, event managers, sports teams) — Desktop-first

Fans (attendees, collectors) — Mobile-first

Core Promise: The AI remembers EVERY interaction and gets smarter over time.

2. Total Screen Count & Structure
Section	Number of Screens	User	Theme Support
Onboarding & Auth	4 screens	Both	Light + Dark
Fan Portal (Mobile)	6 screens	Fan	Light + Dark
Organizer Dashboard (Desktop)	6 screens	Organizer	Light + Dark
Shared Components	N/A	Both	Light + Dark
TOTAL	16 unique screens	—	Both themes
3. Complete Screen-by-Screen Breakdown
SECTION A: Onboarding & Authentication (4 screens)
Screen A1: Welcome & Value Prop

Liquid glass hero with animated gradient

Two CTAs: "I'm a Fan" / "I'm an Organizer"

Brief carousel (3 cards) explaining Hindsight memory + blockchain ownership

Skip option (but with visual friction)

Screen A2: Fan Signup (Email/QR)

Email input with glass styling

"Claim my first NFT ticket" button (gasless promise)

Optional: "Connect Wallet" (small link, not forced)

Privacy notice: "Your memory is yours. Delete anytime."

Screen A3: Organizer Signup

Company name, role, event type dropdown

"Connect existing data" (Ticketmaster, Shopify, Discord — placeholder icons)

Pricing preview ($499/mo Pro / $2999/mo Enterprise)

Stripe-style payment test mode indicator

Screen A4: Quick Quiz (Cold-start solution)

5 questions: "Favorite genres? How many shows/year? Merch preferences?"

Progress bar with liquid fill animation

"Skip for now — Hindsight will learn anyway"

SECTION B: Fan Portal — Mobile (6 screens)
Screen B1: Memory Timeline (Home)

Header: Fan avatar + name + loyalty score (glass pill, animated on score change)

Temporal search bar — "Search memories..." with date filter chips

Vertical timeline — each memory card includes:

Icon (ticket 🎫 / merch 👕 / social 💬)

Timestamp (relative: "2 days ago")

Memory content ("You attended Arctic Monkeys, Section A, Row 4")

AI reflection badge: "Hindsight noticed: You prefer left side (87% confidence)"

Graph toggle — switch to node graph view (memories connected by lines)

Proactive agent chip — slides in from bottom: "Early access available for you 👀"

Screen B2: My NFT Vault (Ownership Layer)

Grid layout (2 columns) of NFT tickets

Each ticket card shows:

Event name + date

Dynamic badge (VIP / Upgraded / Limited)

Small blockchain icon (Polygon)

Tap card → flip animation showing:

Metadata (seat, section, transfer history)

"Transfer" / "Sell" buttons (gasless via QR)

Royalty info: "Artist earns 5% on resale"

Claim with QR button at bottom (camera icon)

Import external NFT option (wallet connect)

Screen B3: Hindsight Proactive Agent (The "Brain")

Chat-like interface but NOT a chatbot — it's a suggestion feed

Cards that say:

"🎫 Based on your last 3 shows, you'd love The Weeknd. Early access in 2 days."

"👕 Your favorite hoodie is back in stock — limited edition"

"⚠️ You haven't attended in 6 months. Here's 15% off your next ticket."

Accept button → triggers reward (NFT upgrade, discount code)

Dismiss button → "Not interested" (learns for next time)

"Why did Hindsight suggest this?" link — shows memory evidence

Screen B4: Reward Redemption Flow

Full-screen modal (glass)

Shows reward: "VIP Upgrade: Front Row Access"

Memory evidence: "You've attended 4 shows this year. Top 10% fan."

QR code for venue scanning (or digital ticket generation)

Success state: Confetti + NFT minting animation

Option to share to social (with referral tracking)

Screen B5: Privacy & Memory Control Center

Visual memory graph — fan sees ALL memories as nodes

Delete any memory — tap → remove (with confirmation)

"Mark outdated" button (for old addresses, preferences)

Toggle switches:

"Share anonymized data with organizers"

"Allow Hindsight to learn from Spotify"

"Allow Hindsight to learn from Discord"

"Download my memory JSON" button (GDPR compliant)

Consent history log (timestamped)

Screen B6: Settings & Profile

Profile picture (upload or avatar generator)

Wallet connection status ("Not connected" / "0x1234...5678")

Notification preferences (push, email, none)

Theme toggle (Light / Dark / System)

Referral code: "Invite a friend → both get 10% off"

Logout button (with confirmation)

SECTION C: Organizer Dashboard — Desktop (6 screens)
Screen C1: Overview Dashboard (Home)

Header: Date range picker + "Create Campaign" CTA

KPI row (3 cards):

Total Fans (with % change)

Avg Loyalty Score (0–1000)

Projected Churn Rate (this month)

Churn Risk Gauge — semicircle meter, color-coded (green → yellow → coral)

Loyalty Score Distribution — bar chart (glass style, interactive tooltips)

At-Risk Fans List — table with: Name, Last Event, Churn Probability, "Save" button

Recent Hindsight Reflections — feed: "Hindsight noticed: 43 fans stopped attending after price increase to $89"

Quick actions: "Send push notification to at-risk segment"

Screen C2: Fan Segmentation & Insights

Filter builder (glass pill interface):

Condition 1: "Loyalty score" [is greater than] [750]

Condition 2: "Last event" [is more than] [90 days ago]

Condition 3: "Merch spend" [is greater than] [$100]

"Save segment" button

Audience size preview: "1,247 fans match"

Segment comparison table: Segment A vs Segment B (loyalty, spend, churn risk)

Export CSV button

"Trigger Campaign" → opens Reward Engine (Screen C3)

Screen C3: Reward Engine (Rule Builder)

Rule builder interface (IF-THEN style):

IF: [Select condition] [Operator] [Value]

THEN: [Select reward type]

Condition library:

Attendance count (last 3/6/12 months)

Total merch spend

Social engagement (Discord/Spotify connected)

Referrals made

Churn risk score

Reward library:

NFT upgrade (bronze→silver→gold→platinum)

Early access code (time-limited)

Discount code (fixed % or $)

Physical merch (shipping required)

Backstage pass (limited quantity)

Preview button → shows "1,247 fans qualify"

Schedule (start/end date)

Budget limit (optional: max redemptions)

Screen C4: NFT Analytics & Secondary Market

Revenue chart — line chart: Primary sales vs Secondary sales royalties

Top traded tickets table: Event Name, # Trades, Avg Price, Royalties Earned

Royalty earnings counter — animated number (e.g., "$12,430 earned from resales")

Fraud alerts — cards: "Same wallet resold 12 tickets for Coldplay → flagged"

Dynamic NFT upgrade metrics — "342 fans upgraded to VIP via Hindsight suggestions"

Export blockchain report button (CSV/PDF)

Screen C5: Campaign Management

Campaign list — table with columns: Name, Type, Audience Size, Status, Redemption Rate

Status badges: Draft / Active / Paused / Completed

Create new campaign button → opens modal (reuses Reward Engine)

Performance chart — line chart comparing redemption rate over time

A/B test results — "Version A (20% off) vs Version B (early access) → Version B won by 3.2x ROI"

Screen C6: Settings & Data Connections

Connected platforms:

Ticketmaster (green check / disconnect)

Shopify (placeholder: "Connect")

Discord (placeholder: "Connect")

Spotify (placeholder: "Connect")

Data sync schedule: Every hour / Daily / Manual

Privacy settings:

"Anonymize fan data for reports" (toggle)

"Allow fans to delete memories" (toggle — recommended ON)

Billing & plan — shows current plan (Pro / Enterprise), next billing date

API keys — generate/view keys for webhook integrations

Team members — invite others (email + role: Admin/Analyst/Viewer)

4. Complete Design System Specifications
Color System — BOTH THEMES
Dark Theme (Default)
Role	Hex	Usage
Background	#0A0A0F	Main canvas
Surface (glass)	rgba(255,255,255,0.04)	Cards, modals
Surface elevated	rgba(255,255,255,0.08)	Hover states
Border subtle	rgba(255,255,255,0.08)	Dividers, outlines
Text primary	rgba(255,255,255,0.92)	Headings, body
Text secondary	rgba(255,255,255,0.65)	Labels, metadata
Text tertiary	rgba(255,255,255,0.40)	Placeholders, disabled
Primary	#6C3BFF	Buttons, links, active
Primary glow	#9B6BFF	Hover, focus rings
Secondary	#00C2A0	Success, positive trends
Accent coral	#FF6B4A	Warnings, churn, delete
Accent blue	#3B82F6	Info, help
Light Theme
Role	Hex	Usage
Background	#F5F5F7	Main canvas
Surface (glass)	rgba(255,255,255,0.70)	Cards (with blur)
Surface elevated	rgba(255,255,255,0.90)	Hover states
Border subtle	rgba(0,0,0,0.08)	Dividers, outlines
Text primary	#1D1D1F	Headings, body
Text secondary	rgba(0,0,0,0.60)	Labels, metadata
Primary	#5B2EE0	Buttons, links (darker for contrast)
Secondary	#00A886	Success
Accent coral	#E8553A	Warnings
Typography (Same for both themes)
Style	Weight	Size	Line Height	Usage
Display	700	48px	1.1	Hero, empty states
H1	600	32px	1.2	Page titles
H2	600	24px	1.3	Section headers
H3	500	20px	1.4	Card titles
Body large	400	18px	1.5	Descriptions
Body	400	16px	1.5	Default text
Body small	400	14px	1.5	Helper, metadata
Caption	500	12px	1.4	Badges, timestamps
Label	600	13px	1.2	Buttons, inputs
Font Family: Inter (primary), SF Pro (fallback)

Spacing & Layout
Base unit: 8px

Scale: 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 128

Desktop grid: 12 columns, gutter 24px, margin 32px

Mobile grid: 4 columns, gutter 16px, margin 20px

Card padding: 24px (default), 16px (compact), 32px (large)

Liquid Glass Effects
Backdrop blur: 16px (standard), 24px (elevated), 8px (subtle)

Border radius: 24px (cards), 16px (inputs), 48px (buttons/pills), 12px (small)

Shadow: 0px 8px 32px rgba(0,0,0,0.12) (dark), 0px 8px 24px rgba(0,0,0,0.05) (light)

Reflection line: 1px white at 15% opacity on top edge of glass cards

Gradient overlays: linear-gradient(135deg, #6C3BFF20, #00C2A020)

5. Navigation Structure
Fan Portal (Mobile — Bottom Tab Bar)
Tab	Icon	Screen
🧠	Memory	Timeline (B1)
🎟️	Ticket	NFT Vault (B2)
✨	Sparkle	Proactive Agent (B3)
🔒	Shield	Privacy Center (B5)
👤	Profile	Settings (B6)
Organizer Dashboard (Desktop — Sidebar Navigation)
Menu Item	Icon	Screen
Overview	📊	Dashboard (C1)
Fans	👥	Segmentation (C2)
Rewards	🎁	Reward Engine (C3)
NFTs	💎	NFT Analytics (C4)
Campaigns	📣	Campaign Management (C5)
Settings	⚙️	Settings (C6)
6. Required Prototype Interactions (Figma Make Smart Animate)
Trigger	Action	Destination
Tap "I'm a Fan" (A1)	Slide right	Fan Signup (A2)
Tap "I'm an Organizer" (A1)	Slide right	Organizer Signup (A3)
Complete quiz (A4)	Confetti + transition	Fan Timeline (B1)
Tap NFT card (B2)	Flip animation	Same screen (flipped state)
Tap "Accept" on suggestion (B3)	Modal slide up	Reward Redemption (B4)
Tap "Save" on at-risk fan (C1)	Toast notification	Stays on C1
Tap "Create Campaign" (C1/C5)	Modal overlay	Reward Engine modal (C3)
Theme toggle (B6 or C6)	Cross-fade transition	Entire app switches theme
Tap "Delete memory" (B5)	Shake + confirmation	Memory removed from graph
7. Component Library Requirements (Figma Make Components)
Create these as reusable components with variants for light/dark, hover/press/disabled:

Glass Card — with variant sizes (sm/md/lg)

Glass Button — primary/secondary/ghost/danger

Input Field — text/email/password/search with focus states

Memory Card — with icon, timestamp, AI badge

NFT Ticket Card — front + back (flip variant)

Churn Risk Gauge — semicircle progress with color zones

Loyalty Score Pill — animated number component

Segmentation Filter Builder — dynamic add/remove conditions

Timeline Node — for memory graph view

Toast Notification — success/error/warning variants

Modal (full-screen) — glass background + content

Sidebar Navigation — desktop, collapsible

Bottom Tab Bar — mobile, with active indicator

Data Table — sortable columns, pagination

Chart Container — placeholder for line/bar charts

8. Animation & Micro-interactions Master List
Element	Animation	Duration	Easing
Page entrance	Fade + slide up (8px)	0.3s	cubic-bezier(0.2, 0.9, 0.4, 1.1)
Card hover	Scale 1.01 + shadow increase	0.2s	ease-out
Modal open	Scale 0.95 → 1 + backdrop blur	0.25s	spring (0.3, 0.8)
Button tap	Scale to 0.98	0.1s	ease-in
Skeleton loader	Shimmer gradient sweep	1.5s	linear (infinite)
Memory timeline scroll	Sticky parallax (subtle)	0.1s per step	linear
NFT upgrade	Glow pulse + confetti burst	0.4s	ease-out
Toast notification	Slide from right, fade	0.3s	cubic-bezier(0.2, 0.9, 0.4, 1.1)
Hindsight reflection pulse	Ripple ring from avatar	0.6s	ease-out (once)
Churn indicator	Gentle shake + color pulse to coral	0.3s	ease-in-out
Theme switch	Cross-fade (all elements)	0.2s	ease
Loyalty score update	Number count-up + pill glow	0.8s	ease-out
Tab switch (mobile)	Sliding underline + content fade	0.2s	ease
9. Design Tokens (Figma Variables)
Create these as global variables in Figma Make:

text
// Theme-aware tokens (swap values between light/dark)
$bg-primary: {dark: #0A0A0F, light: #F5F5F7}
$bg-surface: {dark: rgba(255,255,255,0.04), light: rgba(255,255,255,0.70)}
$text-primary: {dark: rgba(255,255,255,0.92), light: #1D1D1F}
$border-subtle: {dark: rgba(255,255,255,0.08), light: rgba(0,0,0,0.08)}

// Static tokens
$space-xs: 4px
$space-sm: 8px
$space-md: 16px
$space-lg: 24px
$space-xl: 32px
$space-2xl: 48px

$radius-sm: 12px
$radius-md: 16px
$radius-lg: 24px
$radius-xl: 32px
$radius-pill: 100px

$blur-sm: 8px
$blur-md: 16px
$blur-lg: 24px

$transition-fast: 0.15s ease-out
$transition-base: 0.25s cubic-bezier(0.2, 0.9, 0.4, 1.1)
$transition-slow: 0.4s ease-out
10. Visual References (For Designer)
Liquid glass aesthetic: Apple visionOS, Arc Browser, Linear.app

Dashboard clarity: Stripe Dashboard, Vercel Analytics

Mobile fan experience: Spotify (community feel) + NBA Top Shot (NFT moments)

Data visualization: Observable Plot, Chart.js (clean, minimal)

Typography-driven design: Linear.app, Raycast

11. Success Checklist (Before Submitting)
All 16 screens are designed (no placeholders, no lorem ipsum — use realistic fan/event data)

Both Light and Dark themes exist as separate variants or via a toggle prototype

Navigation works — tapping tabs/menu items changes screens

At least 5 interactive prototypes (tap → modal, flip, slide, confetti, theme switch)

Hindsight AI elements are visually distinct (glow, badge, pulse animation)

Blockchain elements (NFTs) have subtle visual cues (Polygon icon, small chain link)

Privacy controls are visible in fan portal (not hidden in sub-menu)

Churn risk is immediately scannable on dashboard (color + icon + label)

Reward Engine shows a realistic rule builder (not just static text)

Mobile screens are 390×844, Desktop screens are 1440×900 minimum

12. Final Figma Make Prompt (Copy-Paste This)
Generate a complete multi-page UI/UX design system for EchoVault, a SaaS platform where an AI agent with Hindsight memory manages fan relationships and blockchain provides NFT ticket ownership.

REQUIREMENTS:

16 unique screens (4 onboarding, 6 fan portal mobile, 6 organizer dashboard desktop)

Both Light and Dark themes as separate variants

Full navigation between screens (bottom tab bar for mobile, sidebar for desktop)

Liquid glass aesthetic (backdrop blur, reflections, gradient overlays)

Working prototypes with smart animate (flip cards, modals, theme toggle, confetti)

Component library with 15+ reusable components (cards, buttons, inputs, charts, NFTs)

Realistic data (no lorem ipsum — use fan names, event names, loyalty scores)

Typography: Inter font, scale from 12px to 48px

Color system: Primary #6C3BFF, Secondary #00C2A0, Accent coral #FF6B4A

Animations: page entrances, hover states, tap feedback, shimmer loaders

DO NOT create a single landing page. This is a full application with multiple user flows.