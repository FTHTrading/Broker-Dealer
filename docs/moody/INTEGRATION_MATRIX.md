# Integration Matrix — Moody Capital Markets Operating System

> **Classification:** CLIENT CONFIDENTIAL  
> **Prepared for:** Moody Capital Solutions, Inc.  
> **Prepared by:** FTH Trading Engineering  
> **Date:** March 2026  
> **Version:** 1.0

---

## Executive Summary

This document maps the complete integration stack required to operate the **Moody Capital Markets Operating System** — a compliance-first broker-dealer platform covering origination, investor gating, subscription execution, rights offerings, debt administration, custody-connected settlement, controlled digital issuance, and post-close lifecycle management.

Every integration is classified by:
- **Priority Tier** — P0 (launch-critical), P1 (Phase 1 post-launch), P2 (Phase 2 expansion)
- **Phase** — When it enters production
- **Build vs Buy** — Custom-built, vendor API, or hybrid
- **Existing Platform Coverage** — What our system already provides

---

## Integration Layers at a Glance

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                   MOODY CAPITAL MARKETS OPERATING SYSTEM                     │
│                        Integration Architecture                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─── Layer 1: Core Workflow ────┐  ┌─── Layer 2: Compliance ──────────┐   │
│  │ CRM · Data Rooms · E-Sign    │  │ KYC/KYB · Sanctions · Accred.    │   │
│  │ Email · Calendar · Accounting │  │ Entity Checks · Tax Docs · RegBI │   │
│  │ Banking Rails                 │  │                                   │   │
│  └───────────────────────────────┘  └───────────────────────────────────┘   │
│                                                                             │
│  ┌─── Layer 3: Offerings ────────┐  ┌─── Layer 4: Registry & Cap ──────┐   │
│  │ Private Placements · Rights   │  │ Cap Table · Transfer Controls    │   │
│  │ Public Finance · Debt · M&A   │  │ Corp Actions · TA Hooks · ATS    │   │
│  └───────────────────────────────┘  └───────────────────────────────────┘   │
│                                                                             │
│  ┌─── Layer 5: Treasury ─────────┐  ┌─── Layer 6: Tokenization ────────┐   │
│  │ Custody · Banking · Stablecoin│  │ XRPL Issuance · Policy Engine   │   │
│  │ Approvals · Recon · Reporting │  │ Wallet Binding · Freeze/Clawback │   │
│  └───────────────────────────────┘  └───────────────────────────────────┘   │
│                                                                             │
│  ┌─── Layer 7: Market Data ──────┐  ┌─── Layer 8: MCP Agents ──────────┐   │
│  │ EDGAR · Press · Pricing       │  │ Deal · Compliance · Investor     │   │
│  │ Credit · News · Analytics     │  │ Rights · Treasury · Issuance     │   │
│  └───────────────────────────────┘  └───────────────────────────────────┘   │
│                                                                             │
│  ┌─── Layer 9: Prediction ───────┐  ┌─── Layer 10: Enterprise ─────────┐   │
│  │ Close Probability · Propensity│  │ Doc Control · Audit · Notices    │   │
│  │ Participation · Risk Scoring  │  │ Escalation · Retention · Export  │   │
│  └───────────────────────────────┘  └───────────────────────────────────┘   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Layer 1 — Core Broker-Dealer Workflow Integrations

| Integration | Recommended Vendor(s) | Priority | Phase | Build / Buy | Status |
|:---|:---|:---:|:---:|:---:|:---:|
| **CRM / Pipeline** | Salesforce Financial Services Cloud | P0 | 1 | Buy + API | 🔵 Vendor |
| *Alternate CRM* | HubSpot (if cost-sensitive) | P1 | 1 | Buy + API | 🔵 Vendor |
| **Data Room** | Datasite (institutional) | P0 | 1 | Buy + API | 🔵 Vendor |
| *Alternate Data Room* | DealRoom, ShareFile, Box | P1 | 1 | Buy + API | 🔵 Vendor |
| **E-Sign / Forms** | DocuSign eSignature + Rooms | P0 | 1 | Buy + API | 🔵 Vendor |
| *Alternate E-Sign* | Adobe Sign | P1 | 1 | Buy + API | 🔵 Vendor |
| **Email** | Microsoft 365 (Exchange Online) | P0 | 1 | Buy + API | 🔵 Vendor |
| **SMS / Voice** | Twilio (SMS + Voice) | P1 | 1 | Buy + API | 🔵 Vendor |
| **Calendar / Tasking** | Microsoft 365 (Outlook + Planner) | P0 | 1 | Buy + API | 🔵 Vendor |
| **Accounting / GL** | Sage Intacct (financial services) | P0 | 1 | Buy + API | 🔵 Vendor |
| *Alternate GL* | QuickBooks, NetSuite | P1 | 1 | Buy + API | 🔵 Vendor |
| **Banking Rails — Wire** | Plaid (verification) + bank partner | P0 | 1 | Hybrid | 🟡 Partial |
| **Banking Rails — ACH** | Plaid + Dwolla or bank direct | P1 | 1 | Hybrid | 🟡 Partial |
| **Bank Account Verification** | Plaid Auth + Balance | P0 | 1 | Buy + API | 🔵 Vendor |

### CRM Integration Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    CRM ↔ PLATFORM SYNC                          │
│                                                                  │
│  Salesforce / HubSpot                    Platform                │
│  ─────────────────────                   ────────                │
│                                                                  │
│  Issuer Objects ──────────── sync ──────▶ Issuer Registry        │
│  Investor Objects ────────── sync ──────▶ Investor Registry      │
│  Mandate / Opportunity ───── sync ──────▶ Offering Pipeline      │
│  Activity Feed ◀──────────── push ────── Platform Events         │
│  Task Assignment ◀────────── push ────── Compliance Queue        │
│  Document Links ◀─────────── push ────── Data Room URLs          │
│  Subscription Status ◀────── push ────── Closing Engine          │
│                                                                  │
│  Sync: Bi-directional via Salesforce Connect API / HubSpot API   │
│  Frequency: Real-time webhooks + 15-min batch reconciliation     │
│  Conflict Resolution: Platform = system of record for compliance │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Layer 2 — Compliance & Onboarding Integrations

| Integration | Recommended Vendor(s) | Priority | Phase | Build / Buy | Status |
|:---|:---|:---:|:---:|:---:|:---:|
| **KYC / Identity** | Persona (primary) | P0 | 1 | Buy + API | 🔵 Vendor |
| *KYC Alternate* | Alloy, Sumsub, Sardine | P1 | 1 | Buy + API | 🔵 Vendor |
| **KYB / Entity** | Middesk (primary) | P0 | 1 | Buy + API | 🔵 Vendor |
| *KYB Alternate* | Trulioo | P1 | 1 | Buy + API | 🔵 Vendor |
| **Sanctions / PEP** | ComplyAdvantage (primary) | P0 | 1 | Buy + API | 🔵 Vendor |
| *Sanctions Alternate* | Dow Jones Risk & Compliance | P1 | 2 | Buy + API | 🔵 Vendor |
| *Sanctions Alternate* | Refinitiv World-Check | P2 | 2 | Buy + API | 🔵 Vendor |
| **OFAC Screening** | Platform built-in (SDN list) | P0 | 1 | Build | 🟢 Built |
| **Accreditation** | Parallel Markets (primary) | P0 | 1 | Buy + API | 🔵 Vendor |
| *Accreditation Alternate* | InvestReady, VerifyInvestor | P1 | 1 | Buy + API | 🔵 Vendor |
| **Entity / UBO** | Middesk + state SOS APIs | P0 | 1 | Hybrid | 🟡 Partial |
| **EIN Verification** | IRS TIN Matching + Middesk | P1 | 1 | Buy + API | 🔵 Vendor |
| **Beneficial Ownership** | Platform built-in UBO module | P0 | 1 | Build | 🟢 Built |
| **W-8 / W-9 Tax Docs** | DocuSign PowerForms or Toppan Merrill | P0 | 1 | Buy + API | 🔵 Vendor |
| **Reg BI / Suitability** | Platform built-in compliance engine | P0 | 1 | Build | 🟢 Built |
| **Disclosure Tracking** | Platform built-in + DocuSign audit | P0 | 1 | Build | 🟢 Built |
| **Supervisory Review** | Platform built-in (principal review) | P0 | 1 | Build | 🟢 Built |

### Compliance Onboarding Flow

```
┌────────────────────────────────────────────────────────────────────────┐
│                     INVESTOR ONBOARDING PIPELINE                        │
│                                                                         │
│  Step 1       Step 2         Step 3        Step 4        Step 5         │
│  ──────       ──────         ──────        ──────        ──────         │
│  Application  Identity       Entity /      Risk          Account        │
│  Received     Verification   Accreditation Assessment    Activation     │
│                                                                         │
│  ┌────────┐   ┌──────────┐  ┌───────────┐ ┌──────────┐  ┌───────────┐  │
│  │Platform│──▶│ Persona  │──▶│ Parallel  │─▶│ Comply   │──▶│ Platform │  │
│  │Intake  │   │ KYC/KYB  │  │ Markets   │ │ Advantage│  │ Approval  │  │
│  │Form    │   │ Middesk  │  │ Invest    │ │ OFAC     │  │ Engine    │  │
│  └────────┘   │ Trulioo  │  │ Ready     │ │ SDN      │  └───────────┘  │
│               └──────────┘  └───────────┘ └──────────┘                  │
│                    │              │             │                        │
│               ┌────▼──────────────▼─────────────▼────┐                  │
│               │       Compliance Evidence Store       │                  │
│               │   (immutable, 7+ year retention)      │                  │
│               └──────────────────────────────────────┘                  │
│                                                                         │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Layer 3 — Offering Execution Integrations

### Private Placements

| Component | Build / Buy | Priority | Phase | Notes |
|:---|:---:|:---:|:---:|:---|
| Investor Room (gated portal) | Build | P0 | 1 | Role-based access, NDA tracking |
| Subscription Packets (PPM + Sub Agreement) | Build + DocuSign | P0 | 1 | E-sign integrated workflow |
| Allocation Engine | Build | P0 | 1 | Pro-rata, discretionary, hybrid |
| Cap Table Sync | Build + Carta API | P1 | 1 | Bi-directional post-close |
| Payment Collection | Build + Banking Rails | P0 | 1 | Wire/ACH/stablecoin |
| Closing Engine | Build | P0 | 1 | Multi-tranche, partial close |
| Investor Communications | Build + Email API | P0 | 1 | Notices, confirmations, tax docs |

### Rights Offerings

| Component | Build / Buy | Priority | Phase | Notes |
|:---|:---:|:---:|:---:|:---|
| Record-Date Import | Build + Registry Sync | P0 | 1 | Import from cap table / registry |
| Entitlement Calculation | Build | P0 | 1 | Per-share rights, fractional handling |
| Subscription Portal | Build | P0 | 1 | Basic + oversubscription election |
| Oversubscription Engine | Build | P0 | 1 | Priority rules, pro-rata, cap management |
| Payment Reconciliation | Build + Banking Rails | P0 | 1 | Wire/ACH match to subscription |
| Excess Return Processing | Build | P1 | 1 | Automated refund for over-payment |
| Holder Communication | Build + Email/SMS | P0 | 1 | Notice, reminder, confirmation |
| Regulatory Filing Support | Build | P1 | 2 | Form D, Blue Sky, state filing |

### Public Financing

| Component | Build / Buy | Priority | Phase | Notes |
|:---|:---:|:---:|:---:|:---|
| Announcement Calendar | Build | P1 | 2 | Deal timeline, milestone tracker |
| Holder Lists | Build + Registry | P1 | 2 | Beneficial owner identification |
| Allocation Controls | Build | P1 | 2 | Institutional vs retail split |
| Notice Workflows | Build + Email | P1 | 2 | Pricing, settlement, issuance |

### Debt Financing

| Component | Build / Buy | Priority | Phase | Notes |
|:---|:---:|:---:|:---:|:---|
| Note Schedule Management | Build | P1 | 2 | Maturity dates, amortization |
| Coupon Event Processing | Build | P1 | 2 | Interest calculation, payment triggers |
| Covenant Tracking | Build | P1 | 2 | Financial covenants, cure periods |
| Maturity / Redemption Workflows | Build | P1 | 2 | Call provisions, put options |
| Trustee / Agent Communication | Build + Email | P1 | 2 | Notices, waivers, consents |

### M&A Advisory Support

| Component | Build / Buy | Priority | Phase | Notes |
|:---|:---:|:---:|:---:|:---|
| NDA Flow | Build + DocuSign | P1 | 2 | Template library, counter-party tracking |
| CIM Tracking | Build + Data Room | P1 | 2 | View tracking, access control |
| Diligence Access Control | Build + Data Room API | P1 | 2 | Staged disclosure, role-gated |
| IOI / LOI Management | Build | P1 | 2 | Term tracker, comparison matrix |
| Process Timeline | Build | P1 | 2 | Phase gates, milestone tracking |

---

## Layer 4 — Registry, Cap Table & Transfer Control

| Integration | Recommended Vendor(s) | Priority | Phase | Build / Buy | Status |
|:---|:---|:---:|:---:|:---:|:---:|
| **Cap Table Sync** | Carta (primary) | P0 | 1 | Buy + API | 🔵 Vendor |
| *Cap Table Alternate* | Pulley, Shareworks | P1 | 2 | Buy + API | 🔵 Vendor |
| **Internal Registry** | Platform built-in | P0 | 1 | Build | 🟢 Built |
| **Transfer Restrictions** | Platform policy engine | P0 | 1 | Build | 🟢 Built |
| **Whitelist / Blacklist** | Platform policy engine | P0 | 1 | Build | 🟢 Built |
| **Affiliate Flags** | Platform built-in | P0 | 1 | Build | 🟢 Built |
| **Lockup / Legend Tracking** | Platform built-in | P0 | 1 | Build | 🟢 Built |
| **Corporate Actions** | Platform built-in | P1 | 2 | Build | 🟡 Designed |
| **Transfer Agent Hooks** | TA partner API (if applicable) | P1 | 2 | Hybrid | 🔵 Vendor |
| **ATS / Secondary Hooks** | ATS partner API (if applicable) | P2 | 3 | Hybrid | ⬜ Future |

### Transfer Control Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    TRANSFER CONTROL ENGINE                               │
│                                                                          │
│  Transfer Request                                                        │
│       │                                                                  │
│       ▼                                                                  │
│  ┌─────────────────────────────────────────────────────────────┐        │
│  │                    POLICY ENGINE                              │        │
│  │                                                               │        │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────────┐   │        │
│  │  │ Whitelist│ │ Lockup   │ │ Affiliate│ │ Accreditation │   │        │
│  │  │ Check    │ │ Period   │ │ Status   │ │ Verification  │   │        │
│  │  └────┬─────┘ └────┬─────┘ └────┬─────┘ └──────┬────────┘   │        │
│  │       │             │            │              │             │        │
│  │       └──────────┬──┴────────────┴──────────────┘             │        │
│  │                  ▼                                            │        │
│  │        ┌───────────────────┐                                  │        │
│  │        │ Combined Decision │                                  │        │
│  │        │  ALLOW / DENY     │                                  │        │
│  │        └───────────────────┘                                  │        │
│  └─────────────────────────────────────────────────────────────┘        │
│       │                    │                                             │
│       ▼                    ▼                                             │
│  ┌─────────┐         ┌──────────┐                                       │
│  │APPROVED │         │ BLOCKED  │──▶ Exception Queue                    │
│  │Execute  │         │ + Reason │    (human review)                     │
│  └─────────┘         └──────────┘                                       │
│       │                                                                  │
│       ├──▶ Update Registry (legal record)                                │
│       ├──▶ Update Cap Table (Carta sync)                                 │
│       ├──▶ Update Digital Registry (XRPL, if tokenized)                  │
│       └──▶ Audit Trail (immutable event)                                 │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Layer 5 — Treasury, Custody & Settlement

| Integration | Recommended Vendor(s) | Priority | Phase | Build / Buy | Status |
|:---|:---|:---:|:---:|:---:|:---:|
| **Primary Custody** | Fireblocks (MPC) | P0 | 1 | Buy + API | 🟢 Adapter Built |
| **Secondary Custody** | BitGo | P1 | 1 | Buy + API | 🟢 Adapter Built |
| **Operating Accounts** | Bank partner (SVB, Mercury, etc.) | P0 | 1 | Buy + API | 🔵 Vendor |
| **FBO Structures** | Bank partner + Platform | P0 | 1 | Hybrid | 🟡 Designed |
| **USDC Settlement** | Circle (USDC) | P0 | 1 | Buy + API | 🟢 Adapter Built |
| **RLUSD Settlement** | Ripple (RLUSD) | P1 | 2 | Buy + API | 🟢 Adapter Built |
| **Approval Engine** | Platform built-in | P0 | 1 | Build | 🟢 Built |
| **Dual Approval** | Platform built-in | P0 | 1 | Build | 🟢 Built |
| **Destination Whitelist** | Platform built-in | P0 | 1 | Build | 🟢 Built |
| **Transaction Recon** | Platform built-in | P0 | 1 | Build | 🟢 Built |
| **Treasury Reporting** | Platform built-in | P0 | 1 | Build | 🟢 Built |
| **Failed Settlement Queue** | Platform built-in | P0 | 1 | Build | 🟢 Built |

### Treasury Flow Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    TREASURY & SETTLEMENT FLOW                            │
│                                                                          │
│  Subscription Payment               Platform Treasury                    │
│  ──────────────────                  ─────────────────                    │
│                                                                          │
│  Wire / ACH ─────────────────▶ FBO Account (bank partner)               │
│  USDC ───────────────────────▶ Circle USDC (Fireblocks vault)           │
│  RLUSD ──────────────────────▶ Ripple RLUSD (Fireblocks vault)          │
│                                                                          │
│            ┌───────────────────────────────────┐                         │
│            │         APPROVAL ENGINE            │                         │
│            │                                    │                         │
│            │  Amount < $25K  → Auto-approve     │                         │
│            │  $25K–$250K     → Single approval  │                         │
│            │  $250K–$1M      → Dual approval    │                         │
│            │  > $1M          → Committee        │                         │
│            │                                    │                         │
│            │  Destination must be whitelisted   │                         │
│            │  All outbound = audit trail event  │                         │
│            └───────────────────────────────────┘                         │
│                         │                                                │
│                         ▼                                                │
│  ┌──────────────────────────────────────────────────────────┐           │
│  │  Settlement Execution                                     │           │
│  │                                                           │           │
│  │  Fiat ──▶ Wire instruction to issuer / seller account     │           │
│  │  USDC ──▶ Circle transfer to destination wallet           │           │
│  │  RLUSD ─▶ XRPL payment to destination address            │           │
│  │                                                           │           │
│  │  Status: PENDING → SUBMITTED → CONFIRMED → SETTLED        │           │
│  │                                                           │           │
│  │  Failed? → Retry queue → Alert treasury → Manual review   │           │
│  └──────────────────────────────────────────────────────────┘           │
│                         │                                                │
│                         ▼                                                │
│  ┌──────────────────────────────────────────────────────────┐           │
│  │  Reconciliation                                           │           │
│  │  • Tx hash / wire ref ↔ internal booking                  │           │
│  │  • Ledger balance ↔ custody balance                       │           │
│  │  • Daily exception report                                 │           │
│  └──────────────────────────────────────────────────────────┘           │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Layer 6 — Tokenization & Digital Issuance

| Integration | Technology | Priority | Phase | Build / Buy | Status |
|:---|:---|:---:|:---:|:---:|:---:|
| **Primary Digital Registry** | XRPL (Mainnet) | P1 | 2 | Build + API | 🟢 Adapter Built |
| **Policy Engine** | Platform built-in | P0 | 1 | Build | 🟢 Built |
| **Wallet Binding** | Platform + Fireblocks | P1 | 2 | Build | 🟡 Designed |
| **Freeze / Clawback** | XRPL native + Policy Engine | P1 | 2 | Build | 🟡 Designed |
| **Legend-Aware Controls** | Platform policy engine | P1 | 2 | Build | 🟡 Designed |
| **Registry Sync** | Platform (legal ↔ digital) | P1 | 2 | Build | 🟡 Designed |
| **Chainlink Oracle** | Chainlink Data Feeds | P2 | 3 | Buy + API | 🟢 Adapter Built |
| **Chainlink Proof of Reserve** | Chainlink PoR | P2 | 3 | Buy + API | 🟢 Adapter Built |
| **ATS Partner Hooks** | Partner API (future) | P2 | 3 | Hybrid | ⬜ Future |
| **Transfer Agent Hooks** | Partner API (future) | P2 | 3 | Hybrid | ⬜ Future |

### Tokenization Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                  CONTROLLED DIGITAL ISSUANCE                             │
│               (SEC Guidance Framework Compliant)                         │
│                                                                          │
│  ┌─────────────┐     ┌──────────────┐     ┌──────────────────┐          │
│  │ Legal Layer  │     │ Control Layer│     │ Digital Layer     │          │
│  │              │     │              │     │                   │          │
│  │ PPM          │     │ Policy       │     │ XRPL Token        │          │
│  │ Sub Agreement│◀───▶│ Engine       │◀───▶│ Issuance          │          │
│  │ Cap Table    │     │              │     │                   │          │
│  │ Legal Record │     │ Holder Auth  │     │ Controlled        │          │
│  │ of Ownership │     │ Transfer     │     │ Transfer          │          │
│  │              │     │ Rules        │     │                   │          │
│  │ DocuSign     │     │ Whitelist    │     │ Freeze capable    │          │
│  │ Evidence     │     │ Lockup       │     │ Clawback capable  │          │
│  │              │     │ Legend       │     │ Legend-tagged      │          │
│  └─────────────┘     └──────────────┘     └──────────────────┘          │
│                              │                                           │
│                              ▼                                           │
│                    ┌───────────────────┐                                 │
│                    │  REGISTRY SYNC    │                                 │
│                    │                   │                                 │
│                    │  Legal Record  ═══╪══ Digital Record                │
│                    │  (Authoritative)  │   (Representation)              │
│                    │                   │                                 │
│                    │  Any discrepancy  │                                 │
│                    │  → Alert + Freeze │                                 │
│                    │  → Human resolve  │                                 │
│                    └───────────────────┘                                 │
│                                                                          │
│  Key Principle: Legal ownership record is ALWAYS authoritative.          │
│  Digital token is a representation, not the source of truth.             │
│  All transfers require policy engine approval before on-chain exec.      │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Layer 7 — Market Data, Research & Issuer Intelligence

| Integration | Vendor / Source | Priority | Phase | Build / Buy |
|:---|:---|:---:|:---:|:---:|
| **SEC EDGAR** | SEC EDGAR XBRL API | P1 | 2 | Buy (free API) |
| **Press Releases** | PR Newswire, Business Wire, GlobeNewswire | P1 | 2 | Buy + API |
| **Market Pricing** | Bloomberg B-PIPE or Refinitiv Elektron | P2 | 3 | Buy + API |
| *Pricing Alternate* | IEX Cloud, Polygon.io (cost-effective) | P1 | 2 | Buy + API |
| **Credit / Risk Data** | Moody's Analytics, S&P Capital IQ | P2 | 3 | Buy + API |
| **Issuer News Monitoring** | Google Alerts API, NewsAPI | P1 | 2 | Buy + API |
| **Holder / Shareholder Analytics** | Platform + Registry data | P2 | 3 | Build |
| **Chainlink Price Feeds** | Chainlink (on-chain) | P1 | 2 | Build | 

---

## Layer 8 — MCP Agentic System

| Agent | Connected Systems | Priority | Phase | Human Approval |
|:---|:---|:---:|:---:|:---:|
| **Deal Agent** | CRM, Data Room, Document Store, Email | P1 | 2 | Deal setup, NDA routing |
| **Compliance Agent** | KYC vendors, Sanctions, Policy Engine, Audit | P0 | 1 | All regulatory decisions |
| **Investor Agent** | CRM, Compliance, AccredVendor, Subscription | P1 | 2 | Onboarding, status updates |
| **Rights Offering Agent** | Registry, Entitlement Engine, Payment, Email | P1 | 2 | Allocation changes |
| **Treasury Agent** | Custody (Fireblocks/BitGo), Banking, Recon | P1 | 2 | All fund movements |
| **Issuance Agent** | XRPL, Policy Engine, Registry, Wallet | P2 | 3 | Token mint/burn/freeze |
| **Banker Intelligence Agent** | EDGAR, News, Pricing, CRM, Analytics | P2 | 3 | Advisory recommendations |

### Agent Governance Model

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    AGENT GOVERNANCE FRAMEWORK                            │
│                                                                          │
│  ┌───────────────┐     ┌──────────────┐     ┌───────────────────┐       │
│  │  OBSERVE       │     │  RECOMMEND    │     │  EXECUTE           │       │
│  │  (Autonomous)  │     │  (Autonomous) │     │  (Human-Approved)  │       │
│  │                │     │               │     │                    │       │
│  │  Read CRM data │     │  Draft emails │     │  Submit order      │       │
│  │  Monitor feeds │     │  Flag issues  │     │  Move funds        │       │
│  │  Parse docs    │     │  Score deals  │     │  Approve transfer  │       │
│  │  Track status  │     │  Suggest next │     │  File SAR          │       │
│  │  Calc metrics  │     │  Surface risk │     │  Mint/Burn token   │       │
│  │                │     │               │     │  Close offering    │       │
│  └───────────────┘     └──────────────┘     └───────────────────┘       │
│                                                                          │
│  Rule: ALL regulated actions require human principal approval.           │
│  Agents prepare, humans decide. Full audit trail on both.                │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Layer 9 — Prediction & Scoring Engine

| Model | Input Sources | Output | Phase |
|:---|:---|:---|:---:|
| **Close Probability** | CRM activity, investor response, doc access patterns, payment signals | 0-100% probability of deal close | 2 |
| **Investor Propensity** | Historical participation, allocation history, response timing, ticket size | Likelihood to participate in next offering | 2 |
| **Rights Offering Participation** | Holder history, entitlement size, past participation, market context | % take-up forecast per offering | 2 |
| **Settlement Risk** | Payment method, investor history, amount, jurisdiction, counterparty | Risk score for settlement failure | 2 |
| **Compliance Escalation** | Exception history, alert frequency, screening hits, activity patterns | Probability of escalation needed | 2 |
| **Tokenization Fit** | Security type, holder count, transfer frequency, regulatory class | Suitability score for digital issuance | 3 |

### Scoring Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    PREDICTION & SCORING ENGINE                           │
│                                                                          │
│  Data Sources                    Model Layer          Output Layer        │
│  ────────────                    ───────────          ────────────        │
│                                                                          │
│  CRM Activity ────────┐                                                  │
│  Historical Close ────┤                                                  │
│  Investor Behavior ───┤    ┌──────────────┐    ┌──────────────────┐      │
│  Compliance History ──┼───▶│ Feature Eng. │───▶│ Close Prob.      │      │
│  Settlement Data ─────┤    │ + ML Models  │    │ Investor Score   │      │
│  Holder Participation─┤    │              │    │ Participation %  │      │
│  Market / Pricing ────┘    │ XGBoost +    │    │ Settlement Risk  │      │
│                            │ Time-Series  │    │ Escalation Risk  │      │
│                            └──────────────┘    │ Token-Fit Score  │      │
│                                                └──────────────────┘      │
│                                                        │                 │
│                                                        ▼                 │
│                                                ┌──────────────┐          │
│                                                │  Dashboard   │          │
│                                                │  CRM Push    │          │
│                                                │  Agent Feed  │          │
│                                                │  Alert Rules │          │
│                                                └──────────────┘          │
│                                                                          │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Layer 10 — Enterprise Operations (Hidden Essentials)

| Capability | Implementation | Priority | Phase | Status |
|:---|:---|:---:|:---:|:---:|
| **Document Version Control** | Platform built-in + S3 versioning | P0 | 1 | 🟢 Built |
| **Role-Based Entitlements** | Platform RBAC (auth package) | P0 | 1 | 🟢 Built |
| **Supervisory Principal Review** | Platform compliance queue | P0 | 1 | 🟢 Built |
| **Immutable Audit Trails** | Platform audit package (hash-chained) | P0 | 1 | 🟢 Built |
| **Investor Notice Archive** | Platform + Email API integration | P0 | 1 | 🟢 Built |
| **Task Escalation Queues** | Platform workflow engine | P0 | 1 | 🟡 Designed |
| **Exception Management** | Platform compliance + alerting | P0 | 1 | 🟡 Designed |
| **Data Retention Policies** | Platform + TimescaleDB policies | P0 | 1 | 🟢 Built |
| **Partner API Layer** | Platform public API (OpenAPI 3.1) | P1 | 2 | 🟡 Designed |
| **White-Label Issuer Portal** | Platform multi-tenant + theming | P2 | 3 | ⬜ Future |
| **Report Exports** | Platform (PDF, CSV, XBRL) | P0 | 1 | 🟢 Built |

---

## Phase Delivery Timeline

### Phase 1 — Immediate Operating Value (Months 1–4)

> **Goal:** Replace spreadsheets, email chains, and fragmented vendors with repeatable infrastructure.

| Deliverable | Components | Week |
|:---|:---|:---:|
| Investor Onboarding | KYC/KYB, accreditation, sanctions screening, compliance queue | 1–4 |
| Private Placement Room | Investor portal, subscription packets, allocation, payment collection | 3–6 |
| Rights Offering Engine | Record-date import, entitlement calc, subscription, oversubscription, payment recon | 4–8 |
| Compliance Operations | Reg BI tracking, supervisory review, disclosure management, audit trail | 2–6 |
| CRM Integration | Salesforce sync (issuers, investors, mandates, activity) | 3–5 |
| Treasury Basics | Custody connection (Fireblocks), approval engine, settlement tracking | 4–8 |
| Closing Engine | Multi-tranche close, payment matching, confirmation generation | 6–10 |
| Document Management | Version control, data room, e-sign workflow, notice archive | 2–6 |

### Phase 2 — Institutional Control Layer (Months 5–9)

> **Goal:** Custody-connected settlement, registry controls, reporting, post-close administration.

| Deliverable | Components | Week |
|:---|:---|:---:|
| Full Treasury Operations | Dual custody, stablecoin rails, FBO structures, reconciliation | 12–16 |
| Registry & Transfer Controls | Cap table sync, lockup/legend tracking, corporate actions | 14–18 |
| Debt Administration | Note schedules, coupon events, covenant tracking, maturity workflows | 16–20 |
| M&A Advisory Tools | NDA flow, CIM tracking, IOI/LOI management | 16–20 |
| MCP Agents (Core) | Compliance Agent, Investor Agent, Treasury Agent | 14–20 |
| Market Data Integration | Pricing feeds, EDGAR, press releases | 12–16 |
| Prediction Engine (v1) | Close probability, investor propensity, settlement risk | 18–24 |
| Public Financing Tools | Announcement calendar, allocation controls, notice workflows | 18–22 |

### Phase 3 — Digital Capital Markets Layer (Months 10–14)

> **Goal:** Tokenization-ready issuance, wallet binding, digital registry, advanced intelligence.

| Deliverable | Components | Week |
|:---|:---|:---:|
| Digital Issuance | XRPL tokenized securities, policy-controlled transfer | 28–34 |
| Wallet Binding | Investor identity ↔ wallet mapping, Fireblocks integration | 28–32 |
| Registry Sync | Legal record ↔ digital representation synchronization | 30–36 |
| Chainlink Integration | Oracle price feeds, Proof of Reserve verification | 32–38 |
| MCP Agents (Advanced) | Issuance Agent, Banker Intelligence Agent, Deal Agent | 30–38 |
| Prediction Engine (v2) | Tokenization-fit scoring, participation forecasting | 34–40 |
| Partner Expansion Hooks | ATS partner API, transfer agent hooks | 36–42 |
| White-Label Portal | Multi-tenant issuer portal with custom branding | 38–42 |

---

## Platform Coverage Summary

### Already Built (Platform Foundation)

| Package | What It Provides |
|:---|:---|
| `@unykorn/provider-abstractions` | 6 provider interfaces (Custody, Stablecoin, Oracle, Proof, Ledger, Treasury) + Registry |
| `@unykorn/custody-adapters` | Fireblocks + BitGo MPC custody integration |
| `@unykorn/ledger-adapters` | XRPL ledger integration for digital issuance |
| `@unykorn/oracle-adapters` | Chainlink price feeds + Proof of Reserve verification |
| `@unykorn/stablecoin-adapters` | USDC (Circle) + RLUSD (Ripple) settlement |
| `@unykorn/policy-engine` | Rule engine for transfer restrictions, compliance gates |
| `@unykorn/auth` | OAuth 2.0, RBAC, MFA, session management |
| `@unykorn/audit` | Hash-chained immutable audit trail |
| `@unykorn/documents` | Document storage, hashing, version control |
| `@unykorn/db` | PostgreSQL client, migrations, typed queries |
| `@unykorn/types` | Shared type definitions across all services |
| `@unykorn/config` | Environment configuration management |

### Vendor Integrations Needed

| Tier | Count | Examples |
|:---|:---:|:---|
| **P0 — Launch Critical** | 12 | Persona, Middesk, ComplyAdvantage, Parallel Markets, DocuSign, Salesforce, Sage Intacct, Plaid, Fireblocks, Circle, XRPL, MS 365 |
| **P1 — Phase 1-2** | 10 | Twilio, Carta, HubSpot, IEX Cloud/Polygon, NewsAPI, Datasite, BitGo, Ripple RLUSD, PR Newswire, EDGAR |
| **P2 — Phase 3** | 6 | Bloomberg, Refinitiv, S&P Capital IQ, Chainlink, ATS partner, TA partner |

---

## Vendor Cost Estimates (Annual)

| Vendor | Tier | Estimated Annual Cost | Notes |
|:---|:---:|:---|:---|
| Salesforce FSC | P0 | $18K–$36K | 3-6 seats |
| DocuSign Business Pro | P0 | $4.8K–$9.6K | Volume-based |
| Persona (KYC) | P0 | $12K–$24K | Per-verification pricing |
| Middesk (KYB) | P0 | $6K–$12K | Per-entity pricing |
| ComplyAdvantage | P0 | $12K–$24K | Ongoing screening |
| Parallel Markets | P0 | $8K–$18K | Accreditation volume |
| Fireblocks | P0 | $24K–$48K | Custody + MPC |
| Sage Intacct | P0 | $12K–$24K | Financial services tier |
| Plaid | P0 | $3.6K–$12K | Auth + Balance |
| Microsoft 365 | P0 | $2.4K–$4.8K | Business Premium |
| **Phase 1 Total** | — | **~$103K–$213K/yr** | — |
| Datasite | P1 | $12K–$24K | Deal-based pricing |
| BitGo | P1 | $12K–$24K | Secondary custody |
| Twilio | P1 | $2.4K–$6K | SMS + Voice volume |
| Carta | P1 | $6K–$12K | Cap table tier |
| IEX / Polygon | P1 | $3.6K–$12K | Market data |
| **Phase 2 Additional** | — | **~$36K–$78K/yr** | — |
| Bloomberg B-PIPE | P2 | $24K+ | Enterprise pricing |
| **Estimated Total** | — | **$163K–$315K/yr** | All phases |

---

<p align="center">
  <sub>
    <strong>Prepared by FTH Trading Engineering</strong><br/>
    Confidential — For Moody Capital Solutions, Inc. internal evaluation only<br/>
    March 2026
  </sub>
</p>
