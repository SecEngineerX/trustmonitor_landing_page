# TRUSTMONITOR LANDING PAGE — DEV README

**Version:** 4.0  
**Goal:** Build the most psychologically brutal, high-converting landing page for CTOs & Agencies  
**Duration:** 72-hour sprint  

---

## 1. PROJECT OVERVIEW

This landing page is **not a brochure**. It is a **conversion weapon**.

Every element, word, color, and layout decision serves one purpose:  
**Shock → Shame → Proof → Demand**

| Phase | Objective |
|-------|-----------|
| Shock | Expose $0 liability of competitors |
| Shame | Make decision-makers feel exposed |
| Proof | Court-admissible evidence vs "trust us" |
| Demand | Clear, unavoidable CTAs |

**Do not reinterpret copy or design.**  
Follow this README and the blueprint exactly. No creative liberties.

---

## 2. PAGE STRUCTURE (FIXED ORDER)

```

HERO     → Shock & Contrast
LIE      → Expose $0 Liability
PROOF    → Evidence vs Hope
GUARANTEE → Money Where Mouth Is
DECISION → Unavoidable Choice

```

**No extra sections. No rearranging. No exceptions.**

---

## 3. COLOR SYSTEM

| Usage | Value |
|-------|-------|
| Primary Background | `#FFFFFF` |
| Alt Background | `#F7F8FA` |
| Primary Text | `#0F172A` |
| Secondary Text | `#475569` |
| Accent / Danger | `#7F1D1D` |
| Accent Hover | `#991B1B` |
| Border / Divider | `#E2E8F0` |

**No gradients. No shadows beyond 4px blur. No additional colors.**

---

## 4. TYPOGRAPHY

| Element | Spec |
|---------|------|
| Font Stack | `Inter, system-ui, -apple-system, sans-serif` |
| Headings | Weight 600–700, `letter-spacing: -0.02em` |
| Body | Weight 400, `line-height: 1.6` |
| H1 Desktop | `56px` |
| H1 Mobile | `36px` |
| H2 | `32px` desktop / `24px` mobile |
| H3 | `22px` |
| Body | `16px–18px` |

**No decorative fonts. No italics. No emoji.**

---

## 5. DEVELOPER RESPONSIBILITIES

### Dev 1 — Hero + Live Ticker + Layout
- Hero H1 + subhead (desktop/mobile responsive)
- Primary CTA: `DEMAND THE CONTRACT`
- Secondary CTA: `COMPARE LIABILITY MODELS`
- Live ticker — rotates every 30s from JSON/API
- Global CSS variables, typography, spacing, responsive grid
- **No hero images. Zero.**

### Dev 2 — The Lie + Comparison Table
- Section title: `THE $0 LIABILITY CLAUSE IN YOUR CURRENT MONITORING CONTRACT`
- Bullet points (red accent on `$0 liability`)
- Comparison table with 4 columns:
  `Feature | Typical Monitoring | TrustMonitor | What This Means`
- Mobile: horizontal scroll, sticky first column
- Desktop: full width, scannable

### Dev 3 — Proof + Ledger + Evidence
- Ledger table (monospaced font, borders `#E2E8F0`)
- Status badges: `Paid` (`#0F172A`), `Pending` (`#475569`)
- Proof of Reserve: escrow balance + verified date + auditor
- Monitoring regions: 3 dots (US, EU, APAC) with status indicators
- `Verify Our Claims` — modal with real-time status

### Dev 4 — Guarantee + Decision + Contract Snippet
- Side-by-side contract comparison:
  - Left: Typical provider clause (`#F7F8FA`, faded)
  - Right: TrustMonitor clause (white, red border, bold)
- Decision section — two boxes:
  - Option 1: Gray, faint, unappealing
  - Option 2: White, red accent border, CTA `DEMAND THE CONTRACT`
- Microcopy: 12px, `#475569`, legal reminder

### Dev 5 — Mobile + Performance + Analytics + Risk Calculator
- Mobile optimization:
  - H1 fits iPhone SE
  - Buttons ≥44px tappable
  - Comparison table horizontal scroll indicator
- Performance targets:
  - FCP <1.2s | LCP <2s | CLS <0.1
- Analytics events:
  - `heroView`, `contractDownload`, `comparisonView`, `calculatorUsed`, `ctaClick`
- Risk calculator:
  - Inputs: Monthly monitoring cost, endpoints, hourly downtime cost
  - Output: `"You're carrying $XX,XXX in uninsured monitoring risk"`
  - Whole dollars only

---

## 6. WORKFLOW RULES

```

1. Pull latest main
2. Create branch: devX/section-name
3. Implement exactly per spec
4. PR → assign ≥1 reviewer
5. Merge only after approval
6. NO DIRECT MERGES TO MAIN

```

**PRs rejected immediately for:**
- Copy changes
- Layout rearrangements
- Additional colors/gradients
- Images/illustrations/emoji
- Softer messaging
- "Get Started" instead of `DEMAND THE CONTRACT`

---

## 7. MOCK DATA & API (MVP USE ONLY)

### Ticker JSON
```json
[
  {"amount":200, "hoursAgo":3, "id":"INC-48392"},
  {"amount":500, "hoursAgo":8, "id":"INC-48387"},
  {"amount":150, "hoursAgo":12, "id":"INC-48379"}
]
```

Ledger JSON

```json
[
  {"id":"INC-48392", "detected":"2026-02-03T03:21:44Z", "payout":200, "status":"Paid"},
  {"id":"INC-48387", "detected":"2026-02-02T08:14:11Z", "payout":500, "status":"Paid"},
  {"id":"INC-48379", "detected":"2026-02-02T01:05:22Z", "payout":150, "status":"Paid"}
]
```

Proof of Reserve (Static for MVP)

· Balance: $250,000
· Verified: February 1, 2026
· Auditor: Veritas Assurance

Region Status (Static for MVP)

```json
{
  "us-east": "operational",
  "eu-west": "operational",
  "ap-southeast": "operational"
}
```

8. QA CHECKLIST

Hero

· H1 56px desktop / 36px mobile
· Live ticker rotates every 30s
· Both CTAs visible and tappable

Lie

· Red accent on "$0 liability"
· Comparison table renders correctly
· Mobile scroll functional

Proof

· Ledger monospaced font
· Status badges styled
· Region dots with correct colors
· "Verify Our Claims" opens modal

Guarantee

· Contract side-by-side at 768px+
· Left panel faded, right panel emphasized
· Microcopy present

Decision

· Two boxes distinct visual hierarchy
· CTA: "DEMAND THE CONTRACT"
· Mobile stack works

Performance

· FCP <1.2s
· LCP <2s
· CLS <0.1
· No horizontal overflow

Analytics

· All 5 events fire
· Event data visible in console

Risk Calculator

· Three inputs accept numbers
· Output updates without page reload
· Whole dollars, no decimals

---

9. NON-NEGOTIABLES

Element Requirement
Section order Hero → Lie → Proof → Guarantee → Decision
CTA text DEMAND THE CONTRACT — exact
Hero image None
Copy Exact match to spec
Colors Only 6 colors listed in Section 3
Tone Legal-tech, forceful, zero marketing fluff
Live ticker Must pull from data source (no hardcoded static for final)
"What This Means" column Required in comparison table

---

10. 72-HOUR TIMELINE

Hour 0–24 — Foundation

· Dev 1: HTML structure, CSS variables, grid
· Dev 1: Hero + live ticker (mock data)
· Dev 2: Lie + comparison table skeleton
· All: Component communication established

Hour 24–48 — Core Sections

· Dev 3: Proof + ledger + region indicators
· Dev 4: Guarantee + decision + contract snippet
· Dev 5: Mobile pass, initial performance setup

Hour 48–72 — Polish & Integration

· All: Cross-browser testing
· Dev 5: Risk calculator implementation
· Dev 5: Analytics events wired
· All: PR review → merge to main

---

11. SUCCESS CRITERIA

This launch is successful if:

· CTO reads hero and pauses (not scrolls)
· Contract downloads >10% of visitors
· Pilot signups >2% of visitors
· Page loads <2s on 4G
· All 5 devs deliver on time

---

This README is the source of truth.
Spec is law. Copy is sacred. 72 hours.

PRs only. Let's work.

```
