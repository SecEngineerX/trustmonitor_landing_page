# TrustMonitor Landing Page

**Mission:** Convert CTOs, SaaS founders, and agencies managing 100+ clients into founding customers.

**Strategy:** Make them feel financial pain they're currently absorbing, then offer the only solution with real liability.

**Tone:** Cold. Institutional. Legal-document precision. Zero warmth. Zero hype.

---

## 🎯 TARGET AUDIENCE

- **CTOs** at SaaS companies with $10K+ monthly monitoring spend
- **SaaS Founders** who have lost revenue to missed monitoring alerts
- **Agency Owners** managing 100+ client sites with uptime guarantees

**Common Pain:**
- Lost $50K–$500K to incidents their monitoring tool missed
- Current vendor's liability? $0
- Best they got? Service credits worth $20–$200

---

## 🔥 THE HOOK (First 5 Seconds)

### Current Hero (7/10):
```
We Will Pay When We Fail.
```

### Nuclear Hero (9.5/10):
```
February 10, 2026 — 2:47 AM

Your Payment Gateway
Was Down for 22 Minutes.

Your monitoring tool didn't alert you.
You lost $43,000 in transactions.
Their liability? $0.

What if they had to pay you when they failed?
```

**Why This Murders:**
1. Specific incident (not "downtime")
2. Specific loss ($43K, not "impact")
3. $0 liability stated as fact
4. Makes them relive their pain

---

## 📐 ARCHITECTURE

### Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Variables + Modules (NO Tailwind, NO shadcn)
- **Form:** Formspree (no backend needed)
- **Hosting:** Vercel
- **Analytics:** None (pre-launch)

### Why This Stack?
- **Next.js:** SEO, performance, no client-side routing needed
- **TypeScript:** Type safety for calculator logic
- **Plain CSS:** Full control, no framework bloat, institutional feel
- **No backend:** Launch in 48 hours, validate first

---

## 🗂️ FOLDER STRUCTURE

```
.
├── README.md                          # This file
├── package.json
├── next.config.js
├── tsconfig.json
├── .env.example
│
├── public/
│   ├── favicon.ico
│   ├── robots.txt                     # Disallow all (pre-launch)
│   └── sla-preview.pdf                # Static SLA preview
│
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout
│   │   ├── page.tsx                   # Landing page
│   │   └── thank-you/
│   │       └── page.tsx               # Post-submission
│   │
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx               # Section 1
│   │   │   ├── Pain.tsx               # Section 2 (The $0 Liability)
│   │   │   ├── Calculator.tsx         # Section 2.5 (NEW)
│   │   │   ├── Proof.tsx              # Section 3
│   │   │   ├── Comparison.tsx         # Section 4 (Competitor table)
│   │   │   ├── Guarantee.tsx          # Section 5
│   │   │   ├── Decision.tsx           # Section 6
│   │   │   ├── Waitlist.tsx           # Section 7
│   │   │   └── Footer.tsx
│   │   │
│   │   └── shared/
│   │       ├── Button.tsx             # Primary/Secondary variants
│   │       ├── Container.tsx          # Max-width wrapper
│   │       └── Badge.tsx              # "Launching Q2" badge
│   │
│   ├── styles/
│   │   ├── globals.css                # Reset + base styles
│   │   ├── variables.css              # CSS custom properties
│   │   └── typography.css             # Font definitions
│   │
│   └── utils/
│       ├── constants.ts               # Copy, pricing, dates
│       └── calculator.ts              # Payout calculation logic
│
└── docs/
    ├── DESIGN_SYSTEM.md               # Colors, typography, spacing
    ├── CONTENT_RULES.md               # Copy principles, forbidden words
    └── LAUNCH_CHECKLIST.md            # Pre-deploy validation
```

---

## 🚀 QUICK START

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

```bash
cp .env.example .env.local
```

Add your Formspree endpoint:
```
NEXT_PUBLIC_FORMSPREE_ID=your_form_id_here
```

### 3. Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 4. Build & Deploy

```bash
npm run build
vercel --prod
```

---

## 📄 SECTION BREAKDOWN

### Section 1: Hero (Nuclear Version)
**Goal:** Make them relive their worst monitoring failure

**Key Elements:**
- Specific incident timestamp
- Specific revenue loss ($43K)
- "$0 liability" punch line
- Two CTAs: Calculate + Review SLA

**Copy Rule:** No abstract language. Concrete numbers only.

---

### Section 2: Pain (The $0 Liability Clause)
**Goal:** Expose what their current contract actually says

**Key Elements:**
- Quote the actual liability clause
- Show what they got last time (service credits)
- Name competitors (Datadog, PagerDuty, Better Uptime)

**Copy Rule:** Use their vendor's exact legal language.

---

### Section 2.5: Calculator (NEW - The Hook)
**Goal:** Make them see their personal number

**Interactive Elements:**
- "Incidents missed last year" slider (0-50)
- "Average revenue lost per incident" input
- Real-time calculation showing:
  - Total losses: $X
  - Vendor paid: $0
  - TrustMonitor would pay: $Y (capped)

**Why This Works:**
- CTOs love calculators
- Seeing their number makes it personal
- Shows TrustMonitor isn't full insurance, but something vs. nothing

---

### Section 3: Proof (Evidence Bundle)
**Goal:** Show cryptographic verification, not "trust us"

**Key Elements:**
- JSON evidence bundle example
- Live verification link (OpenTimestamps)
- 3+ regions, 2/3 quorum, 7yr retention stats

**Copy Rule:** Show, don't tell. Let them verify themselves.

---

### Section 4: Comparison (Competitor Table)
**Goal:** Direct comparison with vendors they already use

**Table Columns:**
- Datadog | PagerDuty | Better Uptime | TrustMonitor
- Rows: Liability, Evidence, Payout timeline, Risk absorption

**Copy Rule:** Be factual. Don't trash competitors, just state facts.

---

### Section 5: Guarantee (Pricing Tiers)
**Goal:** Show this is real money, not vaporware

**Tiers:**
- Standard: $499/mo, $200/incident cap
- Professional: $2,499/mo, $500/incident cap (MOST SELECTED)
- Enterprise: Custom, $1,000+/incident

**Copy Rule:** "Founding clients get 40% off for 12 months" (urgency)

---

### Section 6: Decision (Binary Choice)
**Goal:** Force the decision

**Two Cards:**
1. Continue with $0 liability (status quo pain)
2. Switch to TrustMonitor (defined risk)

**Copy Rule:** No marketing speak. Just consequences.

---

### Section 7: Waitlist (Founding Program)
**Goal:** Capture leads with qualification

**Form Fields:**
- Email (required)
- Full name (required)
- Company/Domain (required)
- Current monitoring stack (multi-select)
- Monthly monitoring spend (range)

**Copy Rule:** "No payment. No contract. We reply in 72h if you're a fit."

---

## 🎨 DESIGN PRINCIPLES

### Colors (LOCKED)
```css
--bg-primary: #FFFFFF;        /* Pure white */
--text-primary: #111827;      /* Near black */
--accent: #7F1D1D;            /* Blood red for liability */
--link-blue: #1E40AF;         /* Enterprise blue */
```

**FORBIDDEN:**
- Any shade of green (fintech/crypto vibe)
- Gradients, shadows, glows
- Dark mode

### Typography (LOCKED)
```css
--font-headings: 'Helvetica Neue', Arial, sans-serif;
--font-body: 'Helvetica Neue', Arial, sans-serif;
--font-mono: 'SF Mono', Monaco, monospace;
```

**FORBIDDEN:**
- Serif fonts
- Italic text
- Font size below 16px

### Spacing
```css
--space-8: 96px;   /* Section padding */
--space-6: 48px;   /* Element gaps */
--space-4: 24px;   /* Component padding */
```

**Rule:** Whitespace is your only visual element.

---

## ✍️ COPY PRINCIPLES

### DO:
✅ Use specific numbers ($43,000, not "significant loss")
✅ Quote actual SLA clauses from competitors
✅ Use legal/institutional language
✅ State facts, not opinions
✅ Create urgency with specific dates (March 31, 2026)

### DON'T:
❌ "Join the revolution"
❌ "Get started"
❌ Exclamation marks in headlines
❌ Emojis (except ⚠️ in legal disclaimer)
❌ "We're excited to announce..."
❌ "Game-changing solution"

---

## 📊 SUCCESS METRICS (Post-Launch)

### Primary KPI:
- **Qualified leads:** CTOs/founders managing $10K+ monthly monitoring spend

### Target (First 30 Days):
- 25 founding applications
- 5 enterprise inquiries
- 100+ SLA preview downloads

### Qualification Criteria:
- Company domain (not Gmail/Yahoo)
- Monthly spend $500+ (self-reported)
- Current monitoring stack (validation signal)

---

## 🚨 WHAT WILL BE REJECTED

PRs containing ANY of these will be closed:

❌ Any shade of green
❌ Dark mode
❌ Rounded corners >4px
❌ Illustrations, icons, photos
❌ "Join the revolution" language
❌ Fewer than 5 form fields
❌ Missing launch timeline
❌ Missing legal disclaimer

---

## 📝 PRE-LAUNCH CHECKLIST

See `docs/LAUNCH_CHECKLIST.md` for complete validation.

**Critical:**
- [ ] HTML validates (W3C)
- [ ] Mobile responsive (iPhone 12+, Pixel)
- [ ] Form submits to Formspree
- [ ] SLA PDF downloads
- [ ] robots.txt blocks crawlers
- [ ] SSL enabled
- [ ] No console errors

---

## 🔗 LINKS

- **Live Site:** TBD (post-launch)
- **SLA Preview:** `/public/sla-preview.pdf`
- **Design System:** `docs/DESIGN_SYSTEM.md`
- **Content Rules:** `docs/CONTENT_RULES.md`

---

## 📧 CONTACT

**Founding Program Inquiries:**  
founding@trustmonitor.dev

**Technical Issues:**  
(Add GitHub Issues link post-deployment)

---

## 📜 LICENSE

Proprietary. All rights reserved.

This is a pre-launch validation page. TrustMonitor is not yet operational.

---

**Last Updated:** February 13, 2026  
**Status:** Pre-launch validation  
**Target Launch:** Q2 2026
