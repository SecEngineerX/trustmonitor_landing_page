TRUSTMONITOR LANDING PAGE — 72-HOUR EXECUTION BLUEPRINT
Version 4.0
Goal: Convert CTOs & Agencies Instantly

TARGET:
- CTOs, agency owners, dev leads
- Busy, skeptical, paying for monitoring
- Key triggers: Financial risk, reputation, career exposure

------------------------------------------------------------
DEV RESPONSIBILITIES
------------------------------------------------------------

Dev 1: HERO + LIVE TICKER + LAYOUT (Most Critical)
------------------------------------------------------------
1. Hero H1 (Desktop: 56px, Mobile: 36px)
   - "WHEN YOUR CURRENT MONITORING FAILS, WHO PAYS? (HINT: YOU DO.)"
2. Subhead: "Your dashboard is a placebo. We put money where it matters: on your SLA."
3. Primary CTA: "DEMAND THE CONTRACT"
4. Secondary CTA: "COMPARE LIABILITY MODELS"
5. Live Ticker:
   - Pulls from JSON or real API
   - Rotates every 30 sec: Last Payout, Incident ID, Hours Ago
   - Shows: We actually pay. Often.
6. Layout: global CSS variables, responsive grid, typography
7. No images. Text-only, forceful messaging.

------------------------------------------------------------
Dev 2: THE LIE + COMPARISON TABLE
------------------------------------------------------------
1. Lie Section:
   - Title: "THE $0 LIABILITY CLAUSE IN YOUR CURRENT MONITORING CONTRACT"
   - Bullets: missed alerts, SSL expiry, payment API failures
   - Red accent highlight: #7F1D1D
2. Comparison Table:
   Feature | Typical Monitoring | TrustMonitor | What This Means
   - Add row: SLA Enforceability | Marketing language | Legally binding | Your lawyer vs. their lawyer
3. Mobile: horizontal scroll with sticky first column
4. Desktop: full width, readable, scannable

------------------------------------------------------------
Dev 3: PROOF + LEDGER + EVIDENCE
------------------------------------------------------------
1. Ledger Table:
   - Monospaced font, clean borders (#E2E8F0)
   - Status badges: "Paid" (#0F172A)
2. Proof of Reserve:
   - Show escrow balance (static acceptable for MVP)
   - Verified date and auditor info
3. Monitoring Regions:
   - 3 dots (US, EU, APAC) with status
   - "Verify Our Claims" → real-time check display

------------------------------------------------------------
Dev 4: GUARANTEE + DECISION + CONTRACT SNIPPET
------------------------------------------------------------
1. Contract Side-by-Side:
   - Left: Typical Provider clause (#F7F8FA, faded)
   - Right: TrustMonitor clause (White, red border, bold)
2. Decision Section:
   - Two boxes (desktop side-by-side, mobile stacked)
   - Option 1: Gray, faint, unappealing
   - Option 2: White, red accent, CTA: "DEMAND THE CONTRACT"
   - Microcopy: 12px #475569, legal reminder

------------------------------------------------------------
Dev 5: MOBILE + PERFORMANCE + ANALYTICS + RISK CALCULATOR
------------------------------------------------------------
1. Mobile Optimization:
   - Hero H1 fits iPhone SE
   - Buttons minimum 44px tappable
   - Comparison table horizontal scroll
2. Performance Targets:
   - FCP <1.2s, LCP <2s, CLS <0.1
3. Analytics:
   - HeroView, ContractDownload, ComparisonView, CalculatorUsed, CTAclick
4. Risk Calculator:
   - Inputs: Monthly Cost, Endpoints, Hourly Downtime
   - Output: "You're carrying $XX,XXX in uninsured monitoring risk"
   - Whole dollars only

------------------------------------------------------------
IMPLEMENTATION TIMELINE
------------------------------------------------------------
Hour 0-24: Foundation
- Dev 1: HTML structure, CSS variables, grid
- Dev 1: Hero + Live ticker (mock data)
- Dev 2: Lie + Comparison table skeleton
- All: Component communication setup

Hour 24-48: Core Sections
- Dev 3: Proof + Ledger + Region indicators
- Dev 4: Guarantee + Decision + Contract snippet
- Dev 5: Mobile pass, initial performance setup

Hour 48-72: Polish & Integration
- All: Cross-browser testing
- Dev 5: Risk calculator implementation
- Dev 5: Analytics wired
- All: PR review → merge to main

------------------------------------------------------------
CRITICAL NOTES
------------------------------------------------------------
- Copy must match spec exactly — no reinterpretation
- No marketing fluff; legal-tech tone
- Live ticker must feel real, not mocked
- Comparison table "What This Means" column is key psychological lever
- Hero must shock <7 seconds
- CTA language aggressive, unavoidable

------------------------------------------------------------
SUCCESS METRICS
------------------------------------------------------------
- Landing page converts → not just visually pleasing
- 5 devs execute on time → filter serious talent
- Page communicates: serious financial/legal accountability
- CTOs & agencies feel discomfort → instant engagement

------------------------------------------------------------
READY TO EXECUTE
------------------------------------------------------------
Give devs this blueprint. Assign sections. Enforce PR reviews. No direct merges. 72 hours.

