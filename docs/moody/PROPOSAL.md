<p align="center">
  <img src="../assets/fth-banner.svg" width="900" alt="FTH Trading" />
</p>

<h1 align="center">Moody Capital Markets Operating System</h1>

<p align="center">
  <strong>A compliance-first broker-dealer platform for origination, investor gating, subscription execution, rights offerings, debt administration, custody-connected settlement, controlled digital issuance, and post-close lifecycle management.</strong>
</p>

<p align="center">
  <em>Supported by supervised agentic operations and decision intelligence.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/SEC-Reg_D_%7C_Reg_A%2B_%7C_Reg_S-00305a?style=flat-square" />
  <img src="https://img.shields.io/badge/FINRA-Member_Firm-00305a?style=flat-square" />
  <img src="https://img.shields.io/badge/SOC_2-Type_II-00305a?style=flat-square" />
  <img src="https://img.shields.io/badge/AML-BSA_%7C_USA_PATRIOT-00305a?style=flat-square" />
</p>

---

## For: Moody Capital Solutions, Inc.

**Prepared by:** FTH Trading Engineering  
**Date:** March 2026  
**Classification:** Confidential

---

## Table of Contents

- [The Opportunity](#the-opportunity)
- [What We Replace](#what-we-replace)
- [What We Add](#what-we-add)
- [What We Unlock](#what-we-unlock)
- [Why Now](#why-now)
- [Existing Production Foundation](#existing-production-foundation)
- [Already Built vs Moody-Specific](#already-built-vs-moody-specific)
- [Platform Architecture](#platform-architecture)
- [Three-Layer Delivery Strategy](#three-layer-delivery-strategy)
- [Layer 1: Immediate Operating Value](#layer-1-immediate-operating-value)
- [Layer 2: Institutional Control](#layer-2-institutional-control)
- [Layer 3: Digital Capital Markets](#layer-3-digital-capital-markets)
- [Phased Activation](#phased-activation)
- [The Hidden Enterprise](#the-hidden-enterprise)
- [Agentic Operations](#agentic-operations)
- [Decision Intelligence](#decision-intelligence)
- [Technology Foundation](#technology-foundation)
- [Why This Is Defensible](#why-this-is-defensible)
- [Timeline](#timeline)
- [Investment Summary](#investment-summary)

---

## The Opportunity

Moody Capital operates at the intersection of private capital placement, debt financing, M&A advisory, and — increasingly — digital capital markets under SEC guidance. Today, this work is executed across disconnected systems: CRM for pipeline, email for investor communication, spreadsheets for allocation, DocuSign for signatures, manual compliance checklists, and fragmented custody and settlement processes.

Moody is not being sold a prototype. Moody is being offered a **broker-dealer-grade digital capital markets operating system** built on an existing institutional infrastructure base — then tailored to Moody's rights offerings, private placements, debt workflows, custody-connected settlement, and controlled digital issuance roadmap.

**The Moody Capital Markets Operating System** activates this existing foundation into a single, compliance-first platform that connects every stage of a deal — from origination to post-close lifecycle management — under one audit trail, one compliance queue, and one operational command center.

This isn't a CRM. It's not a data room. It's not a compliance tool. It's the operating system that connects all of them — and it's built on production infrastructure that already exists.

---

## What We Replace

| Today | Tomorrow |
|:---|:---|
| Spreadsheets tracking investor allocations | Automated allocation engine with policy controls |
| Email-based subscription document collection | Digital subscription room with e-sign integration |
| Manual compliance checklists (KYC, accreditation) | Automated compliance pipeline with vendor APIs |
| Disconnected data rooms per deal | Integrated data room with role-based access |
| Excel-based rights offering entitlement calculations | Automated entitlement engine with oversubscription |
| Manual wire reconciliation | Automated payment matching and settlement tracking |
| Folder-based document storage | Version-controlled, hash-verified document management |
| Periodic compliance reporting | Real-time compliance dashboard with audit trail |
| Ad hoc investor communication | Systematic notice archive with delivery tracking |
| Manual supervisory reviews | Workflow-based principal review queues |

---

## What We Add

Things you don't have today — and can't buy off the shelf:

| Capability | Description |
|:---|:---|
| **Subscription Room** | Investor-facing portal for a specific offering — gated by compliance status, showing only what each investor is eligible to see and sign |
| **Rights Offering Engine** | Record-date import → entitlement calculation → subscription portal → oversubscription handling → payment reconciliation → closing — fully automated |
| **Compliance Operations Center** | Single queue for KYC reviews, sanctions alerts, accreditation verification, Reg BI assessments, and supervisory approvals |
| **Custody-Connected Settlement** | Subscription payment → custody wallet → approval engine → settlement execution → reconciliation — with stablecoin rails (USDC, RLUSD) alongside traditional wire/ACH |
| **Transfer Control Engine** | Policy-based transfer restrictions: whitelist/blacklist, lockup periods, affiliate status, accreditation requirements — all enforced automatically |
| **Immutable Audit Trail** | Every action hash-chained and timestamped — investor onboarding, compliance decisions, fund movements, document access, allocation changes |
| **Post-Close Administration** | Ongoing holder management, corporate actions, covenant tracking, coupon events, communication archive |
| **Agentic Operations** | AI agents that prepare, surface, and recommend — with human approval required for all regulated actions |
| **Decision Intelligence** | Predictive scoring for deal close probability, investor propensity, rights offering participation, settlement risk |

---

## What We Unlock

| Unlock | Impact |
|:---|:---|
| **SEC-tokenized securities on XRPL** | Controlled digital issuance under existing securities law — not as an experiment, but as production infrastructure with freeze, clawback, and legend controls |
| **Stablecoin settlement** | USDC and RLUSD payment rails alongside traditional wire/ACH — reducing settlement time from days to minutes |
| **Scalable compliance** | Turn compliance from a bottleneck into a pipeline — automated where safe, human-approved where required |
| **Examination readiness** | When FINRA or SEC examiners arrive, every action is auditable, every decision is documented, every control is demonstrable |
| **Deal velocity** | Parallel-process offerings that used to be sequential — compliance doesn't wait for subscription, treasury doesn't wait for compliance |
| **Institutional confidence** | The kind of operational infrastructure that institutional investors and issuers expect but few boutique firms can deliver |

---

## Why Now

1. **Moody Capital is actively expanding** into rights offerings, debt financing, and digital issuance — activities that require institutional-grade infrastructure
2. **SEC guidance on digital securities** is maturing, and firms that build compliant tokenization infrastructure now will lead the next cycle
3. **Regulatory scrutiny is increasing** — the firms that survive examination are the ones with demonstrable controls, not paper policies
4. **The vendor ecosystem is ready** — KYC, custody, stablecoin, and ledger APIs are mature enough to integrate, but no single vendor offers the full stack
5. **AI operations are here** — supervised agentic workflows can eliminate 60%+ of manual operational overhead while maintaining full compliance

---

## Existing Production Foundation

This platform is not conceptual. The core institutional infrastructure is already built and operational — the result of 16 build sessions, 100+ modules, and a production Capital OS handling wire intake through settlement and yield distribution.

**What exists today:**

- **Fireblocks Custody Stack** — Six custom modules built in-house: configuration management, per-request RS256 JWT authentication, HTTP client with retry and exponential backoff, vault types, vault client, and transaction client. Twelve vault roles with deterministic naming conventions. Not a vendor demo — a production-grade custody integration.

- **Multi-Chain Settlement Layer** — StablecoinRail for multi-chain stablecoin movement, PaymentIntent for deterministic payment lifecycle management, and SettlementRecorder for immutable settlement capture across Stellar, Ethereum, and XRPL. Seven stablecoins supported across five chains including USDC and RLUSD.

- **Bond Lifecycle Engine** — Full seven-state bond lifecycle management: Draft → Offered → Subscribing → Funded → Active → Maturing → Matured. On-chain bond registry with XRPL integration. This is the backbone of Moody's debt administration and rights offering workflows.

- **VaultLedger** — Append-only, cryptographically chained asset position ledger. Every custody movement recorded with hash verification. Provides the immutable audit spine that regulators require and examiners inspect.

- **Capital OS (Production)** — End-to-end capital operations system: wire intake → KYC/AML verification → XRPL settlement → yield distribution → redemption. 165 automated test assertions covering smoke tests, adversarial scenarios, and full lifecycle validation. Six operational guardrails running in production. Built for 400,000 clients and $1B+ in assets under management.

- **Funding Orchestration** — FundingOrchestrator: single entry point for all funding operations. Six onramp partners integrated. Automated deposit detection, classification, and routing.

- **Custody Partner Expansion** — Beyond Fireblocks: BitGo integration for secondary custody, Anchorage Digital for institutional cold storage, APMEX integration for physical gold custody, and Brink's for precious metals logistics. Institutional-grade multi-custodian architecture.

- **Provider Abstraction Layer** — Six typed interfaces (Custody, Stablecoin, Oracle, Proof, Ledger, Treasury) with a provider registry pattern allowing vendor swap without service disruption. Adapters built and typechecked for Fireblocks, BitGo, XRPL, Chainlink, Circle USDC, and Ripple RLUSD.

- **Exchange & Venue Readiness** — Exchange connectivity framework with venue routing infrastructure. EVM execution layer spanning eight chains for smart contract deployment and interaction where future workflows require it.

- **Policy Engine, Auth, and Audit** — Rule-based authorization for transfers and compliance gates. OAuth 2.0 with granular RBAC and MFA. Hash-chained immutable event log with configurable retention policies. Version-controlled document store with cryptographic hashing.

**All TypeScript. Zero compilation errors. Every module typechecked.**

---

## Already Built vs Moody-Specific

The left column exists today. The right column is what gets configured, extended, or activated specifically for Moody's deal types and workflows.

| Already Built (Production Infrastructure) | Moody-Specific (Configure & Extend) |
|:---|:---|
| Fireblocks custody integration (6 modules, 12 vault roles) | FBO account structures per offering, Moody approval thresholds |
| Multi-chain settlement (Stellar, Ethereum, XRPL) | Wire/ACH reconciliation rules for Moody's banking partners |
| USDC + RLUSD stablecoin rails | Stablecoin settlement policies specific to Moody offering types |
| Bond lifecycle engine (7-state) | Rights offering entitlement engine, oversubscription logic |
| VaultLedger (append-only, hash-chained) | Moody-branded audit trail views and examiner export formats |
| Capital OS (wire → KYC → settlement → yield) | Moody investor onboarding flow, compliance queue customization |
| FundingOrchestrator (6 onramp partners) | Moody payment routing rules, deposit classification |
| Provider abstraction layer (6 interfaces) | Moody vendor selection (Persona, Middesk, ComplyAdvantage) |
| Policy engine with transfer controls | Moody-specific whitelist/blacklist, lockup, affiliate rules |
| Auth system (RBAC, MFA, sessions) | Moody role hierarchy: banker, compliance, principal, admin, investor |
| Hash-chained audit system | Moody retention policies, FINRA/SEC export templates |
| Document store (version-controlled, hashed) | Moody document packages: PPM, sub agreements, tax forms |
| BitGo secondary custody | Failover policies and threshold configuration for Moody |
| Exchange connectivity framework | Moody venue preferences and routing rules |
| EVM execution layer (8 chains) | Smart contract templates for Moody's tokenization roadmap |
| 165 automated test assertions | Moody-specific test scenarios for rights offerings and debt |

**Estimated activation ratio: ~60% configure existing infrastructure, ~25% extend for Moody-specific workflows, ~15% net-new feature development.**

---

## Platform Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    MOODY CAPITAL MARKETS OPERATING SYSTEM                     │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │                         CLIENT INTERFACES                                │ │
│  │  Banker Dashboard  │  Investor Portal  │  Issuer Portal  │  Admin Panel │ │
│  └────────┬───────────┴─────────┬─────────┴────────┬────────┴──────┬──────┘ │
│           │                     │                   │               │        │
│  ┌────────▼─────────────────────▼───────────────────▼───────────────▼──────┐ │
│  │                       API GATEWAY (Auth + Rate Limiting)                 │ │
│  └────┬────────┬──────────┬───────────┬───────────┬──────────┬────────────┘ │
│       │        │          │           │           │          │              │
│  ┌────▼───┐┌───▼────┐┌───▼────┐┌─────▼───┐┌─────▼───┐┌────▼─────┐       │
│  │OFFERING││INVESTOR││COMPLY. ││TREASURY ││REGISTRY ││ ISSUANCE │       │
│  │SERVICE ││SERVICE ││SERVICE ││SERVICE  ││SERVICE  ││ SERVICE  │       │
│  │        ││        ││        ││         ││         ││          │       │
│  │Rooms   ││Onboard ││KYC     ││Custody  ││Cap Table││XRPL     │       │
│  │Subscr. ││Profile ││Sanctions││Settle   ││Transfer ││Policy   │       │
│  │Alloc.  ││Comms   ││Accred. ││Approval ││Corp Act ││Wallet   │       │
│  │Close   ││Docs    ││RegBI   ││Recon    ││Lockups  ││Registry │       │
│  └────────┘└────────┘└────────┘└─────────┘└─────────┘└──────────┘       │
│       │        │          │           │           │          │              │
│  ┌────▼────────▼──────────▼───────────▼───────────▼──────────▼────────────┐ │
│  │                      SHARED PLATFORM LAYER                              │ │
│  │  Auth (RBAC/MFA) │ Audit (hash-chain) │ Policy Engine │ Document Store │ │
│  │  Event Bus │ Config │ Types │ Notifications │ Task Queue │ Reporting    │ │
│  └────┬────────┬──────────┬───────────┬───────────┬──────────┬────────────┘ │
│       │        │          │           │           │          │              │
│  ┌────▼────────▼──────────▼───────────▼───────────▼──────────▼────────────┐ │
│  │                      VENDOR INTEGRATION LAYER                           │ │
│  │                                                                         │ │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌─────────────┐  │ │
│  │  │Persona   │ │Fireblocks│ │Circle    │ │Salesforce│ │DocuSign     │  │ │
│  │  │Middesk   │ │BitGo     │ │Ripple    │ │HubSpot   │ │Adobe Sign   │  │ │
│  │  │Comply    │ │Bank API  │ │XRPL      │ │Plaid     │ │Sage Intacct │  │ │
│  │  │ParallelMk│ │          │ │Chainlink │ │Twilio    │ │EDGAR API    │  │ │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └─────────────┘  │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │                      MCP AGENT LAYER                                     │ │
│  │  Deal Agent │ Compliance Agent │ Investor Agent │ Treasury Agent         │ │
│  │  Rights Agent │ Issuance Agent │ Banker Intelligence Agent               │ │
│  │  [All regulated actions require human principal approval]                 │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────┐ │
│  │                      INTELLIGENCE LAYER                                  │ │
│  │  Close Probability │ Investor Propensity │ Participation Forecast        │ │
│  │  Settlement Risk │ Compliance Escalation │ Tokenization-Fit Scoring      │ │
│  └─────────────────────────────────────────────────────────────────────────┘ │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Three-Layer Delivery Strategy

We don't build from scratch. We activate, configure, and extend an existing institutional base in three layers — each one valuable on its own, each one building on the last.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│  Layer 1 (Months 1–4)              Layer 2 (Months 5–9)                      │
│  ══════════════════                ═════════════════════                      │
│  IMMEDIATE OPERATING VALUE         INSTITUTIONAL CONTROL                     │
│                                                                              │
│  • Investor onboarding             • Full treasury operations                │
│  • Private placement room          • Registry & transfer controls            │
│  • Rights offering engine          • Debt administration                     │
│  • Compliance operations           • M&A advisory tools                      │
│  • CRM integration                 • Core MCP agents                         │
│  • Basic treasury / custody        • Market data integration                 │
│  • Closing engine                  • Prediction engine (v1)                  │
│  • Document management             • Public financing tools                  │
│                                                                              │
│                          Layer 3 (Months 10–14)                              │
│                          ══════════════════════                               │
│                          DIGITAL CAPITAL MARKETS                              │
│                                                                              │
│                          • XRPL digital issuance                             │
│                          • Wallet binding                                    │
│                          • Registry synchronization                          │
│                          • Chainlink oracle integration                      │
│                          • Advanced MCP agents                               │
│                          • Prediction engine (v2)                            │
│                          • ATS / TA partner hooks                            │
│                          • White-label issuer portal                         │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Layer 1: Immediate Operating Value

**Timeline:** Months 1–4  
**Goal:** Replace spreadsheets, email chains, and fragmented processes with repeatable, auditable infrastructure.

### 1.1 Investor Onboarding Pipeline

A compliance-gated pipeline that takes an investor from application to activated account:

| Step | What Happens | Vendor / Module |
|:---|:---|:---|
| Application intake | Investor submits profile, entity info, investment objectives | Platform |
| Identity verification | KYC/KYB against government databases | Persona + Middesk |
| Accreditation | Verify accredited status (income, net worth, or professional cert) | Parallel Markets |
| Sanctions screening | Check against OFAC SDN, PEP lists, adverse media | ComplyAdvantage |
| Reg BI / Suitability | Assess investment profile against offering characteristics | Platform compliance engine |
| Supervisory review | Registered principal reviews and approves | Platform review queue |
| Account activation | Investor gains access to eligible offerings | Platform |

**Result:** An investor who is fully vetted, compliance-flagged, and ready to subscribe — with every step documented in an immutable audit trail.

### 1.2 Private Placement Subscription Room

Per-offering investor portal that manages the full subscription lifecycle:

- **Gated access** — only qualified investors see offering materials
- **Document package** — PPM, subscription agreement, operating agreement, risk disclosures
- **E-sign workflow** — DocuSign-integrated signing with countersign tracking
- **Payment instructions** — wire, ACH, and stablecoin payment options
- **Status tracking** — investor sees their subscription status in real-time
- **Allocation engine** — pro-rata, discretionary, or hybrid allocation with policy controls
- **Closing coordination** — multi-tranche close with automated confirmation generation

### 1.3 Rights Offering Engine

End-to-end rights offering administration:

1. **Record-date import** — pull holder list from cap table (Carta) or internal registry
2. **Entitlement calculation** — per-share rights allocation with fractional handling
3. **Subscription portal** — basic subscription + oversubscription election
4. **Oversubscription engine** — priority rules, pro-rata within tiers, cap management
5. **Payment reconciliation** — match incoming payments to subscriptions
6. **Excess return processing** — automated refund for over-payment
7. **Holder communication** — notice of rights, subscription reminder, confirmation, tax reporting

### 1.4 Compliance Operations Center

Single pane of glass for all compliance operations:

- **KYC/KYB review queue** — automated vendor results + human override capability
- **Sanctions alert queue** — real-time match alerts with disposition workflow
- **Accreditation tracking** — status, expiration, re-verification triggers
- **Reg BI dashboard** — suitability assessments per investor per offering
- **Supervisory queue** — registered principal review and approval
- **Audit trail viewer** — searchable, filterable, exportable compliance history
- **Regulatory reporting** — FinCEN, state, FINRA report generation

---

## Layer 2: Institutional Control

**Timeline:** Months 5–9  
**Goal:** Custody-connected settlement, registry controls, reporting, and post-close administration.

### 2.1 Full Treasury Operations

- **Dual custody** — Fireblocks (primary MPC) + BitGo (secondary) with failover
- **Stablecoin settlement** — USDC (Circle) and RLUSD (Ripple) alongside wire/ACH
- **FBO account structures** — segregated accounts per offering or investor
- **Multi-tier approval engine** — threshold-based: auto-approve, single, dual, committee
- **Automated reconciliation** — transaction hash / wire reference matched to internal bookings
- **Failed settlement queue** — retry logic, alert escalation, manual resolution
- **Treasury dashboard** — real-time balance view across custody, bank, stablecoin

### 2.2 Registry & Transfer Control

- **Cap table sync** — bi-directional with Carta (Pulley, Shareworks as alternates)
- **Internal legal registry** — authoritative record of ownership
- **Transfer restriction engine** — whitelist, lockup, affiliate status, legend-based controls
- **Corporate actions** — dividends, splits, conversions, redemptions
- **Transfer agent integration hooks** — for offerings requiring a registered TA

### 2.3 Debt Administration

- **Note schedule management** — maturity dates, amortization schedules
- **Coupon event processing** — interest calculation, payment triggers, distribution
- **Covenant tracking** — financial covenants, cure periods, breach alerts
- **Maturity / redemption workflows** — call provisions, put options, refinancing

### 2.4 MCP Agents (Core)

| Agent | Function |
|:---|:---|
| **Compliance Agent** | Monitors screening results, surfaces exceptions, prepares SAR filings, tracks alert resolution |
| **Investor Agent** | Manages onboarding status, answers investor questions, generates communication drafts |
| **Treasury Agent** | Monitors settlement status, flags reconciliation exceptions, prepares treasury reports |

All agents: observe autonomously, recommend autonomously, **execute only with human approval**.

---

## Layer 3: Digital Capital Markets

**Timeline:** Months 10–14  
**Goal:** Tokenization-ready issuance, digital registry, advanced intelligence.

### 3.1 Controlled Digital Issuance (XRPL)

Issue SEC-compliant digital securities on the XRP Ledger with full regulatory controls:

- **Token issuance** — XRPL native tokens representing ownership interests
- **Policy-controlled transfer** — every transfer must pass the policy engine before on-chain execution
- **Freeze capability** — issuer can freeze tokens if regulatory action required
- **Clawback capability** — issuer can recall tokens under specific legal circumstances
- **Legend tagging** — on-chain metadata reflecting offering restrictions (lock-up, accreditation, etc.)

**Critical principle:** The legal ownership record is always authoritative. The digital token is a representation, not the source of truth. All transfers require policy engine approval before on-chain execution.

### 3.2 Wallet Binding

- Map investor identity (KYC-verified) to blockchain wallet address
- Fireblocks-managed wallets for institutional investors
- Self-custody option for qualified holders (with policy engine controls)
- Wallet rotation, replacement, and recovery procedures

### 3.3 Registry Synchronization

- Continuous sync between legal registry and digital (XRPL) registry
- Discrepancy detection → automatic freeze + human resolution
- Corporate actions propagated to both registries simultaneously

### 3.4 Oracle Integration (Chainlink)

- On-chain price feeds for reference pricing
- Proof of Reserve verification for custody-backed assets
- Event-driven data for covenant monitoring and valuation

### 3.5 Advanced Agents

| Agent | Function |
|:---|:---|
| **Deal Agent** | Manages deal pipeline across CRM and data room, surfaces deal intelligence |
| **Rights Offering Agent** | Administers rights offering lifecycle, tracks participation, manages oversubscription |
| **Issuance Agent** | Manages digital token lifecycle — mint, transfer, freeze, burn — all human-approved |
| **Banker Intelligence Agent** | Synthesizes EDGAR filings, market data, news, CRM activity into actionable intelligence |

### 3.6 Decision Intelligence

| Model | Input | Output |
|:---|:---|:---|
| Close Probability | CRM activity, investor response, payment signals | 0-100% deal close likelihood |
| Investor Propensity | Historical behavior, ticket size, response timing | Ranked participation likelihood |
| Rights Participation | Holder history, entitlement size, market conditions | Expected take-up rate per offering |
| Settlement Risk | Payment method, amount, track record, jurisdiction | Settlement failure probability |
| Compliance Escalation | Alert frequency, screening hits, exception history | Escalation likelihood |
| Tokenization Fit | Security type, holder count, transfer activity, reg class | Digital issuance suitability |

---

## Phased Activation

Because the core infrastructure already exists, Moody's deployment is not a greenfield build — it's a phased activation of proven systems, configured and extended for Moody's specific deal types.

| Phase | Action | What Happens | Timeline |
|:---|:---:|:---|:---:|
| **Activate** | 🟢 | Turn on existing custody, settlement, audit, auth, and policy infrastructure. Connect Moody's Fireblocks workspace. Provision Moody environments. | Months 1–2 |
| **Configure** | 🔧 | Set Moody role hierarchy, approval thresholds, compliance queue rules, document templates, investor portal branding, retention policies. | Months 2–3 |
| **Extend** | 🔨 | Build Moody-specific modules: rights offering entitlement engine, oversubscription logic, debt coupon processing, M&A advisory tools, CRM sync rules. | Months 3–6 |
| **Harden** | 🛡️ | Full compliance review, penetration testing, SOC 2 readiness assessment, FINRA mock examination, disaster recovery validation, load testing at scale. | Months 6–8 |
| **Deploy** | 🚀 | Production cutover: first offering live on platform, investor onboarding operational, custody-connected settlement active, compliance center in use. | Months 8–9 |

**Key distinction:** "Activate" and "Configure" cover roughly 60% of delivery. "Extend" covers 25%. Only 15% is net-new development. This is why the timeline is aggressive but credible — we're not writing a platform from scratch.

---

## The Hidden Enterprise

The things that aren't on any feature list but make the difference between a prototype and production infrastructure:

| Capability | Why It Matters |
|:---|:---|
| **Document version control** | Every version of every document — PPM, subscription agreement, compliance evidence — is hash-verified and retrievable |
| **Role-based entitlements** | Bankers see deal pipeline and allocation. Compliance sees review queues. Investors see only their offerings. Admins see everything. Granular. Auditable. |
| **Supervisory principal review logs** | Every compliance decision, every investor approval, every allocation change — recorded with who reviewed, when, and what they decided |
| **Immutable audit trails** | Hash-chained event log. Cannot be modified after the fact. Examinable by time range, entity, event type, or actor |
| **Investor notice archive** | Every communication sent to an investor — subscription confirmation, tax document, notice of closing, etc. — stored with delivery status |
| **Task escalation queues** | Failed KYC? Sanctions hit? Payment mismatch? Each routes to the right person with the right priority and the right SLA |
| **Exception management** | Not everything fits the happy path. The platform handles edge cases gracefully — partial payments, document corrections, compliance overrides (with approval) |
| **Data retention policies** | Built for the regulatory requirement: 7+ years for compliance evidence, WORM where required, automated archival and retrieval |
| **Partner API layer** | Open API for integration with existing tools, partner firms, custodians, transfer agents |
| **White-label portal** | Issuer-branded investor-facing portal — Moody Capital infrastructure, client-facing brand |
| **Report exports** | PDF, CSV, and XBRL exports for regulatory reporting, board packages, investor statements |

---

## Agentic Operations

Seven supervised AI agents that handle operational overhead while keeping humans in control of every regulated decision.

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    AGENT OPERATIONS MODEL                                    │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐    │
│  │  What agents DO autonomously:                                         │    │
│  │                                                                       │    │
│  │  • Read CRM records, compliance data, treasury balances               │    │
│  │  • Parse documents, extract terms, identify discrepancies             │    │
│  │  • Calculate entitlements, allocations, reconciliation differences    │    │
│  │  • Draft communications, prepare reports, surface action items        │    │
│  │  • Score deals, rank investors, forecast participation                │    │
│  │  • Flag compliance exceptions, monitor sanctions feeds                │    │
│  │  • Track settlement status, alert on failures, prepare resolution     │    │
│  └──────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  ┌──────────────────────────────────────────────────────────────────────┐    │
│  │  What agents NEVER do without human approval:                         │    │
│  │                                                                       │    │
│  │  • Submit a subscription or close a deal                              │    │
│  │  • Move funds or initiate settlement                                  │    │
│  │  • Approve or reject a compliance review                              │    │
│  │  • Mint, transfer, freeze, or burn a digital security                 │    │
│  │  • File a SAR or regulatory report                                    │    │
│  │  • Change an allocation or override a policy                          │    │
│  │  • Send a communication to an investor or issuer                      │    │
│  └──────────────────────────────────────────────────────────────────────┘    │
│                                                                              │
│  Every agent action — both autonomous observations and human-approved        │
│  executions — is logged in the immutable audit trail.                        │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Technology Foundation

| Component | Technology | Why |
|:---|:---|:---|
| **Language** | TypeScript (full stack) | Type safety, shared models between frontend and backend, large talent pool |
| **Frontend** | Next.js 14 (App Router) | Server-side rendering, API routes, incremental adoption |
| **API Layer** | tRPC + REST (OpenAPI 3.1) | Type-safe internal calls + standard REST for external partners |
| **Database** | PostgreSQL 16 + TimescaleDB | ACID compliance, time-series for market data and audit events |
| **Cache** | Redis 7 | Session management, rate limiting, real-time status |
| **Message Queue** | NATS JetStream | Event-driven architecture, exactly-once delivery, replay capability |
| **Custody** | Fireblocks + BitGo APIs | MPC wallet infrastructure, institutional-grade key management |
| **Ledger** | XRPL (XRP Ledger) | Low-cost, fast-finality ledger purpose-built for tokenized assets |
| **Stablecoins** | Circle USDC + Ripple RLUSD | Regulated dollar-denominated settlement rails |
| **Oracles** | Chainlink | Decentralized price feeds and Proof of Reserve verification |
| **Infrastructure** | Kubernetes on AWS/GCP | Multi-AZ deployment, horizontal scaling, disaster recovery |
| **CI/CD** | GitHub Actions | Automated testing, security scanning, deployment pipelines |
| **Monitoring** | Datadog + PagerDuty | Real-time observability, alerting, incident management |

---

## Why This Is Defensible

What makes this system different from a vendor pitch or a consulting engagement isn't features — it's the architecture decisions that make every feature trustworthy under regulatory scrutiny.

**1. Compliance-First Controls**

Every transaction, every investor action, every document access passes through the policy engine before execution. Compliance isn't bolted on after the fact — it's the gateway through which operations flow. KYC verification, sanctions screening, accreditation checks, Reg BI assessments, and supervisory reviews are all enforced in the pipeline, not reviewed downstream.

**2. Maker-Checker Approvals**

Multi-tier approval architecture: threshold-based auto-approve for low-risk operations, single principal approval for standard actions, dual approval for high-value transactions, committee review for exceptional items. Every approval is logged with identity, timestamp, and disposition.

**3. Immutable Audit Trails**

The VaultLedger and platform audit system use cryptographic hash-chaining — every event references the hash of the previous event. Records cannot be modified, deleted, or reordered after the fact. When FINRA or SEC examiners ask "show me the record," the answer is one query, not a forensic exercise.

**4. Custody-Connected Treasury**

Settlement doesn't happen in a spreadsheet and get reconciled later. Custody wallets (Fireblocks, BitGo) are directly connected to the approval engine. Payment intent → policy check → custody execution → settlement recording — all in one auditable flow. Stablecoin rails (USDC, RLUSD) operate alongside wire/ACH with the same controls.

**5. Controlled Digital Issuance**

Tokenization on XRPL is not a crypto experiment. Every token represents a legal security. Every transfer must pass the policy engine. Freeze and clawback controls are built-in from day one. The legal registry is always authoritative — the digital token is a representation, never the source of truth.

**6. Post-Close Lifecycle Control**

Most platforms stop at closing. This system continues: coupon events, covenant tracking, corporate actions, holder communication, transfer restriction enforcement, and registry maintenance — all under the same audit trail and policy controls that governed the offering itself.

**The net result:** An infrastructure that doesn't just process transactions — it produces the compliance evidence, audit trails, and operational records that make a broker-dealer examination-ready at all times.

---

## Timeline

```
   Month   1    2    3    4    5    6    7    8    9    10   11   12   13   14
           ═══════════════════  ════════════════════════  ═══════════════════
           LAYER 1              LAYER 2                    LAYER 3
           Immediate Value      Institutional Control      Digital Markets
           ─────────────────    ────────────────────────   ──────────────────
 Onboard   ████████████
 Placement ░░░░████████████
 Rights    ░░░░░░░░████████
 Comply.   ████████████████
 CRM       ░░░░████████
 Treasury  ░░░░░░░░████████──────────████████
 Registry                        ████████████████
 Debt                            ░░░░░░░░████████████
 M&A                             ░░░░░░░░████████████
 Agents                          ░░░░████████████────────────████████████
 Data                        ████████████
 Predict.                        ░░░░░░░░████████────────────████████
 Token                                                   ████████████████
 Wallet                                                  ████████████
 Oracle                                                  ░░░░░░░░████████
 Portal                                                  ░░░░░░░░░░░░████████
```

**Key milestones:**
- **Month 2:** First investor onboarded through automated pipeline
- **Month 4:** First private placement closed on platform
- **Month 6:** First rights offering administered end-to-end
- **Month 8:** Custody-connected settlement operational
- **Month 12:** First digital security token issued on XRPL
- **Month 14:** Full platform operational with all 7 agents

---

## Investment Summary

### Platform Development

| Phase | Duration | Focus | Estimated Investment |
|:---|:---:|:---|:---|
| **Layer 1** | 4 months | Immediate operating value | $280K – $380K |
| **Layer 2** | 5 months | Institutional control | $350K – $475K |
| **Layer 3** | 5 months | Digital capital markets | $300K – $425K |
| **Total** | **14 months** | **Full platform** | **$930K – $1.28M** |

### Vendor Costs (Annual)

| Phase | Estimated Annual Cost |
|:---|:---|
| Phase 1 vendors (Persona, Middesk, ComplyAdvantage, Parallel Markets, DocuSign, Salesforce, Sage Intacct, Plaid, Fireblocks, MS 365) | $103K – $213K |
| Phase 2 vendors (Datasite, BitGo, Twilio, Carta, IEX/Polygon) | $36K – $78K |
| Phase 3 vendors (Bloomberg, Chainlink, partner APIs) | $24K+ |
| **Total annual vendor cost** | **$163K – $315K** |

### Infrastructure (Annual)

| Component | Estimated Annual Cost |
|:---|:---|
| Cloud infrastructure (AWS/GCP, Kubernetes, databases) | $48K – $72K |
| Monitoring / alerting (Datadog, PagerDuty) | $12K – $24K |
| CI/CD / security scanning (GitHub Advanced, Snyk) | $6K – $12K |
| **Total annual infrastructure** | **$66K – $108K** |

---

## What Moody Capital Gets

1. **A production-grade operating system** — not a prototype, not a roadmap — a broker-dealer capital markets platform built on existing institutional infrastructure
2. **Immediate activation** — core custody, settlement, audit, and compliance systems are operational; Moody-specific workflows are configured on top
3. **Automated compliance infrastructure** that turns regulatory burden into competitive advantage
4. **Custody-connected settlement** — Fireblocks, BitGo, stablecoin rails, and wire/ACH all under one approval engine
5. **Examination-ready operations** — hash-chained audit trails, maker-checker approvals, immutable records — ready for FINRA and SEC scrutiny
6. **Rights offerings and capital formation tools** purpose-built for Moody's deal flow: entitlement calculations, oversubscription, payment reconciliation, holder communication
7. **Controlled digital issuance** — tokenization under SEC guidance with freeze, clawback, and policy controls from day one
8. **Supervised AI operations** that eliminate manual overhead without sacrificing compliance
9. **A defensible technology moat** — 100+ modules, 165 test assertions, multi-custodian architecture — infrastructure that competitors cannot replicate quickly

---

<p align="center">
  <strong>Moody Capital Markets Operating System</strong><br/>
  Built on production infrastructure. Configured for Moody's deal flow.<br/>
  Ready for how capital markets work today — and how they're going to work next.
</p>

<p align="center">
  <sub>
    <strong>FTH Trading Engineering</strong><br/>
    Confidential — Prepared for Moody Capital Solutions, Inc.<br/>
    March 2026
  </sub>
</p>
