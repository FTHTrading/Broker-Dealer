# System Connection Map

> **How existing platform code maps to the Moody Capital integration stack**

---

## Overview

This document maps every existing package, adapter, and service to the 9-layer Moody Capital Markets Operating System integration architecture. It shows what's built, what's designed, and what needs vendor integration — providing a clear implementation path from current state to full delivery.

---

## Connection Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                                                              │
│   EXISTING PLATFORM CODE                    MOODY INTEGRATION LAYERS         │
│   ══════════════════════                    ════════════════════════          │
│                                                                              │
│   @unykorn/provider-abstractions ─────────▶ ALL LAYERS (interface contracts) │
│     ├─ CustodyProvider                                                       │
│     ├─ StablecoinSettlementProvider                                          │
│     ├─ OracleProvider                                                        │
│     ├─ ProofProvider                                                         │
│     ├─ LedgerProvider                                                        │
│     ├─ TreasuryProvider                                                      │
│     └─ ProviderRegistry                                                      │
│                                                                              │
│   @unykorn/custody-adapters ──────────────▶ LAYER 5 (Treasury & Custody)     │
│     ├─ FireblocksAdapter ─────────────────▶   Primary MPC custody            │
│     └─ BitGoAdapter ─────────────────────▶   Secondary custody               │
│                                                                              │
│   @unykorn/stablecoin-adapters ───────────▶ LAYER 5 (Settlement Rails)       │
│     ├─ USDCAdapter ──────────────────────▶   Circle USDC settlement          │
│     └─ RLUSDAdapter ─────────────────────▶   Ripple RLUSD settlement         │
│                                                                              │
│   @unykorn/ledger-adapters ───────────────▶ LAYER 6 (Tokenization)           │
│     └─ XRPLAdapter ─────────────────────▶   XRPL digital issuance           │
│                                                                              │
│   @unykorn/oracle-adapters ───────────────▶ LAYER 7 (Market Data)            │
│     ├─ ChainlinkOracleAdapter ───────────▶   Price feeds                     │
│     ├─ ChainlinkProofAdapter ────────────▶   Proof of Reserve                │
│     └─ FeedRegistry ─────────────────────▶   Feed management                 │
│                                                                              │
│   @unykorn/policy-engine ─────────────────▶ LAYER 4 (Transfer Control)       │
│     │                               ─────▶ LAYER 6 (Token Policy)            │
│     └─ Rule engine, authorization ────────▶ LAYER 2 (Compliance Gates)       │
│                                                                              │
│   @unykorn/auth ──────────────────────────▶ LAYER 2 (Access Control)         │
│     │                               ─────▶ ENTERPRISE (RBAC / MFA)           │
│     └─ OAuth 2.0, RBAC, MFA, sessions ───▶ ALL CLIENT INTERFACES            │
│                                                                              │
│   @unykorn/audit ─────────────────────────▶ LAYER 2 (Compliance Evidence)    │
│     │                               ─────▶ ENTERPRISE (Immutable Trail)      │
│     └─ Hash-chained events, retention ────▶ EXAMINATION READINESS            │
│                                                                              │
│   @unykorn/documents ─────────────────────▶ LAYER 1 (Doc Management)         │
│     │                               ─────▶ ENTERPRISE (Version Control)      │
│     └─ Hashing, storage, versioning ─────▶ LAYER 3 (Offering Docs)          │
│                                                                              │
│   @unykorn/db ────────────────────────────▶ ALL LAYERS (Data Persistence)    │
│   @unykorn/types ─────────────────────────▶ ALL LAYERS (Shared Types)        │
│   @unykorn/config ────────────────────────▶ ALL LAYERS (Environment Config)  │
│                                                                              │
│   Broker-Dealer Architecture ─────────────▶ LAYER 1–9 (Service Topology)     │
│     ├─ 18 bounded contexts ──────────────▶   Microservice boundaries         │
│     ├─ Order lifecycle ──────────────────▶   Offering execution              │
│     ├─ Risk management ──────────────────▶   Compliance monitoring           │
│     ├─ AML/KYC pipeline ────────────────▶   Onboarding workflow              │
│     ├─ Net capital engine ───────────────▶   Treasury compliance             │
│     ├─ Settlement pipeline ──────────────▶   Custody settlement              │
│     ├─ FIX protocol matrix ──────────────▶   Trading connectivity            │
│     └─ CI/CD + Security ────────────────▶   Infrastructure                   │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## Layer-by-Layer Connection Detail

### Layer 1 — Core Broker-Dealer Workflow

```
┌──────────────────────────────────────────────────────────────────────┐
│  LAYER 1: CORE WORKFLOW                                              │
│                                                                      │
│  EXISTING CODE                         VENDOR INTEGRATION NEEDED     │
│  ─────────────                         ─────────────────────────     │
│                                                                      │
│  @unykorn/documents ──────────────▶ ○  DocuSign API connector       │
│    └─ doc storage, hashing            ○  Datasite API connector     │
│                                       ○  Salesforce API connector    │
│  @unykorn/auth ───────────────────▶ ○  MS 365 OAuth integration     │
│    └─ access control, sessions                                       │
│                                    ○  Sage Intacct API connector     │
│  @unykorn/audit ──────────────────▶ ○  Plaid API connector          │
│    └─ activity logging                ○  Twilio API connector        │
│                                                                      │
│  @unykorn/config ─────────────────▶ Environment management          │
│  @unykorn/types ──────────────────▶ CRM data models                 │
│                                                                      │
│  NEW SERVICES TO BUILD:                                              │
│  ● Offering Service (rooms, subscriptions, allocations, closing)     │
│  ● Investor Service (profiles, communications, documents)            │
│  ● CRM Sync Engine (Salesforce bi-directional)                       │
│  ● E-Sign Orchestrator (DocuSign workflow)                           │
│  ● Payment Intake Service (wire/ACH/stablecoin routing)              │
│                                                                      │
│  STATUS: Foundation built, service layer needed                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Layer 2 — Compliance & Onboarding

```
┌──────────────────────────────────────────────────────────────────────┐
│  LAYER 2: COMPLIANCE & ONBOARDING                                    │
│                                                                      │
│  EXISTING CODE                         VENDOR INTEGRATION NEEDED     │
│  ─────────────                         ─────────────────────────     │
│                                                                      │
│  @unykorn/policy-engine ──────────▶ ● Compliance rule evaluation     │
│    └─ authorization rules             (BUILT — extend for KYC gates) │
│                                                                      │
│  @unykorn/auth ───────────────────▶ ● RBAC + MFA + entitlements      │
│    └─ role-based access               (BUILT — extend for investor   │
│                                        vs. banker vs. compliance)    │
│                                                                      │
│  @unykorn/audit ──────────────────▶ ● Compliance evidence store      │
│    └─ immutable event log             (BUILT — extend schema for     │
│                                        KYC/AML/accreditation events) │
│                                                                      │
│  Broker-Dealer Compliance Arch ───▶ ● Regulatory obligations matrix  │
│    └─ 16 regulations mapped           (DESIGNED — implement rules)   │
│                                                                      │
│                                    ○  Persona KYC/KYB API            │
│                                    ○  Middesk entity verification    │
│                                    ○  ComplyAdvantage sanctions      │
│                                    ○  Parallel Markets accreditation │
│                                    ○  DocuSign W-8/W-9 PowerForms   │
│                                                                      │
│  NEW SERVICES TO BUILD:                                              │
│  ● Compliance Service (review queue, disposition, escalation)        │
│  ● KYC Orchestrator (vendor routing, result aggregation)             │
│  ● Sanctions Monitor (continuous screening, alert management)        │
│  ● Accreditation Tracker (status, expiration, re-verification)       │
│  ● Reg BI Engine (suitability assessment per investor per offering)  │
│  ● Supervisory Queue (principal review workflow)                     │
│                                                                      │
│  STATUS: Core infrastructure built, compliance services needed       │
└──────────────────────────────────────────────────────────────────────┘
```

### Layer 3 — Offering Execution

```
┌──────────────────────────────────────────────────────────────────────┐
│  LAYER 3: OFFERING EXECUTION                                         │
│                                                                      │
│  EXISTING CODE                         CONNECTION                    │
│  ─────────────                         ──────────                    │
│                                                                      │
│  @unykorn/documents ──────────────▶ PPM storage, sub agreement mgmt │
│  @unykorn/auth ───────────────────▶ Investor portal access control  │
│  @unykorn/audit ──────────────────▶ Subscription event logging      │
│  @unykorn/types ──────────────────▶ Offering/subscription models    │
│  @unykorn/policy-engine ──────────▶ Allocation policy enforcement   │
│  @unykorn/stablecoin-adapters ────▶ Payment collection (USDC/RLUSD)│
│                                                                      │
│  Broker-Dealer Order Lifecycle ───▶ Execution model reference       │
│                                                                      │
│  NEW SERVICES TO BUILD:                                              │
│  ● Private Placement Engine                                          │
│    - Investor room (gated portal per offering)                       │
│    - Subscription packet builder (DocuSign integrated)               │
│    - Allocation engine (pro-rata / discretionary / hybrid)           │
│    - Closing engine (multi-tranche, partial close)                   │
│    - Payment reconciliation                                          │
│  ● Rights Offering Engine                                            │
│    - Record-date import (Carta API → holder list)                    │
│    - Entitlement calculator (per-share, fractional handling)         │
│    - Subscription portal (basic + oversubscription)                  │
│    - Oversubscription manager (priority rules, cap mgmt)             │
│    - Payment matching + excess return processing                     │
│  ● Debt Administration Module (Phase 2)                              │
│  ● M&A Advisory Module (Phase 2)                                     │
│                                                                      │
│  STATUS: Foundation packages built, execution engines needed         │
└──────────────────────────────────────────────────────────────────────┘
```

### Layer 4 — Registry, Cap Table & Transfer Control

```
┌──────────────────────────────────────────────────────────────────────┐
│  LAYER 4: REGISTRY & TRANSFER CONTROL                                │
│                                                                      │
│  EXISTING CODE                         CONNECTION                    │
│  ─────────────                         ──────────                    │
│                                                                      │
│  @unykorn/policy-engine ──────────▶ Transfer restriction engine      │
│    └─ Whitelist/blacklist rules       (BUILT — extend for lockup,    │
│    └─ Authorization pipeline           legend, affiliate controls)   │
│                                                                      │
│  @unykorn/ledger-adapters ────────▶ Digital registry (XRPL)         │
│    └─ XRPLAdapter trustlines          (BUILT — extend for registry   │
│                                        synchronization logic)        │
│                                                                      │
│  @unykorn/db ─────────────────────▶ Legal registry data store       │
│    └─ PostgreSQL, migrations          (BUILT — extend schema for     │
│                                        holder records, corp actions) │
│                                                                      │
│  @unykorn/audit ──────────────────▶ Transfer event logging          │
│  @unykorn/types ──────────────────▶ Registry data models            │
│                                                                      │
│                                    ○  Carta API (cap table sync)     │
│                                    ○  Transfer agent partner API     │
│                                    ○  ATS partner API (Phase 3)      │
│                                                                      │
│  NEW SERVICES TO BUILD:                                              │
│  ● Registry Service (authoritative legal ownership record)           │
│  ● Transfer Control Service (policy evaluation + execution)          │
│  ● Cap Table Sync Engine (Carta bi-directional)                      │
│  ● Corporate Actions Engine (dividends, splits, conversions)         │
│                                                                      │
│  STATUS: Policy + ledger infrastructure built, registry services     │
│          needed                                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Layer 5 — Treasury, Custody & Settlement

```
┌──────────────────────────────────────────────────────────────────────┐
│  LAYER 5: TREASURY & SETTLEMENT                 ✅ STRONGEST LAYER   │
│                                                                      │
│  EXISTING CODE                         CONNECTION                    │
│  ─────────────                         ──────────                    │
│                                                                      │
│  @unykorn/custody-adapters                                           │
│    ├─ FireblocksAdapter ──────────▶ Primary MPC custody     ✅ BUILT │
│    │   └─ createVault()                Create/manage vaults          │
│    │   └─ getBalance()                 Balance queries               │
│    │   └─ signTransaction()            Transaction signing           │
│    └─ BitGoAdapter ───────────────▶ Secondary custody       ✅ BUILT │
│        └─ createWallet()               Wallet management             │
│        └─ getBalance()                 Balance queries               │
│        └─ signTransaction()            Transaction signing           │
│                                                                      │
│  @unykorn/stablecoin-adapters                                        │
│    ├─ USDCAdapter ────────────────▶ USDC settlement         ✅ BUILT │
│    │   └─ getBalance()                 Circle balance                 │
│    │   └─ transfer()                   USDC payment execution        │
│    │   └─ verifiedAddresses            Address whitelist              │
│    └─ RLUSDAdapter ───────────────▶ RLUSD settlement        ✅ BUILT │
│        └─ getBalance()                 Ripple balance                 │
│        └─ transfer()                   RLUSD payment execution       │
│        └─ verifiedAddresses            Address whitelist              │
│                                                                      │
│  @unykorn/provider-abstractions                                      │
│    ├─ CustodyProvider ────────────▶ Interface contract      ✅ BUILT │
│    ├─ StablecoinSettlementProvider▶ Interface contract      ✅ BUILT │
│    ├─ TreasuryProvider ───────────▶ Interface contract      ✅ BUILT │
│    └─ ProviderRegistry ───────────▶ Runtime resolution      ✅ BUILT │
│                                                                      │
│  @unykorn/policy-engine ──────────▶ Approval rules         ✅ BUILT │
│  @unykorn/audit ──────────────────▶ Settlement event log   ✅ BUILT │
│                                                                      │
│                                    ○  Bank partner API (wire/ACH)    │
│                                    ○  Plaid (account verification)   │
│                                                                      │
│  NEW SERVICES TO BUILD:                                              │
│  ● Treasury Service (approval engine, threshold routing)             │
│  ● Settlement Orchestrator (payment method routing)                  │
│  ● Reconciliation Engine (tx hash ↔ internal booking match)          │
│  ● Treasury Dashboard (balance view, activity, reporting)            │
│                                                                      │
│  STATUS: ▓▓▓▓▓▓▓▓▓▓░░░░ ~70% — adapters built, orchestration       │
│          and service layer needed                                    │
└──────────────────────────────────────────────────────────────────────┘
```

### Layer 6 — Tokenization & Digital Issuance

```
┌──────────────────────────────────────────────────────────────────────┐
│  LAYER 6: TOKENIZATION & DIGITAL ISSUANCE                            │
│                                                                      │
│  EXISTING CODE                         CONNECTION                    │
│  ─────────────                         ──────────                    │
│                                                                      │
│  @unykorn/ledger-adapters                                            │
│    └─ XRPLAdapter ────────────────▶ XRPL token operations   ✅ BUILT │
│        └─ createTrustLine()            Trustline setup               │
│        └─ submitPayment()              Token transfer on XRPL       │
│        └─ getBalance()                 Token balance queries         │
│        └─ getTransactionStatus()       Tx confirmation tracking      │
│                                                                      │
│  @unykorn/provider-abstractions                                      │
│    └─ LedgerProvider ─────────────▶ Interface contract      ✅ BUILT │
│                                                                      │
│  @unykorn/policy-engine ──────────▶ Transfer authorization  ✅ BUILT │
│    └─ Pre-transfer policy check       (must pass before on-chain)    │
│                                                                      │
│  @unykorn/custody-adapters                                           │
│    └─ FireblocksAdapter ──────────▶ Wallet management       ✅ BUILT │
│        └─ Key storage for XRPL wallets                               │
│                                                                      │
│  @unykorn/audit ──────────────────▶ Issuance event log     ✅ BUILT │
│  @unykorn/auth ───────────────────▶ Issuer entitlements    ✅ BUILT │
│                                                                      │
│  NEW SERVICES TO BUILD:                                              │
│  ● Issuance Service (mint, burn, freeze, clawback orchestration)     │
│  ● Wallet Binding Service (KYC identity ↔ wallet address)            │
│  ● Registry Sync Service (legal record ↔ XRPL record)               │
│  ● Legend Manager (restriction metadata on-chain + off-chain)        │
│  ● Discrepancy Detector (auto-freeze on mismatch)                    │
│                                                                      │
│  STATUS: ▓▓▓▓▓▓▓▓░░░░░░ ~55% — ledger adapter built,               │
│          issuance orchestration and wallet binding needed             │
└──────────────────────────────────────────────────────────────────────┘
```

### Layer 7 — Market Data & Research

```
┌──────────────────────────────────────────────────────────────────────┐
│  LAYER 7: MARKET DATA & RESEARCH                                     │
│                                                                      │
│  EXISTING CODE                         CONNECTION                    │
│  ─────────────                         ──────────                    │
│                                                                      │
│  @unykorn/oracle-adapters                                            │
│    ├─ ChainlinkOracleAdapter ─────▶ Price feeds             ✅ BUILT │
│    │   └─ getLatestPrice()             Real-time pricing             │
│    │   └─ getHistoricalPrice()         Historical pricing            │
│    ├─ ChainlinkProofAdapter ──────▶ Proof of Reserve        ✅ BUILT │
│    │   └─ verifyReserve()              Reserve verification          │
│    └─ FeedRegistry ───────────────▶ Feed management         ✅ BUILT │
│        └─ registerFeed()               Feed configuration            │
│        └─ getFeed()                    Feed lookup                    │
│                                                                      │
│  @unykorn/provider-abstractions                                      │
│    ├─ OracleProvider ─────────────▶ Interface contract      ✅ BUILT │
│    └─ ProofProvider ──────────────▶ Interface contract      ✅ BUILT │
│                                                                      │
│                                    ○  SEC EDGAR XBRL API             │
│                                    ○  IEX Cloud / Polygon.io         │
│                                    ○  PR Newswire / Business Wire    │
│                                    ○  NewsAPI / Google Alerts        │
│                                    ○  Bloomberg (Phase 3)            │
│                                                                      │
│  NEW SERVICES TO BUILD:                                              │
│  ● Market Data Service (pricing aggregation, caching, distribution)  │
│  ● EDGAR Ingestor (filing parser, XBRL extraction)                   │
│  ● News Monitor (entity-tagged news feed, relevance scoring)         │
│  ● Research Dashboard (issuer intelligence, holder analytics)        │
│                                                                      │
│  STATUS: ▓▓▓▓▓▓░░░░░░░░ ~40% — oracle adapters built,              │
│          data services and vendor connectors needed                   │
└──────────────────────────────────────────────────────────────────────┘
```

### Layer 8 — MCP Agentic System

```
┌──────────────────────────────────────────────────────────────────────┐
│  LAYER 8: MCP AGENTIC SYSTEM                                        │
│                                                                      │
│  EXISTING CODE                         CONNECTION                    │
│  ─────────────                         ──────────                    │
│                                                                      │
│  @unykorn/provider-abstractions ──▶ Agent tool interfaces            │
│    └─ All 6 provider interfaces       (agents call providers via     │
│       + ProviderRegistry               typed interface contracts)    │
│                                                                      │
│  @unykorn/auth ───────────────────▶ Agent authorization              │
│    └─ RBAC permissions                 (agent has service account     │
│                                         with scoped permissions)     │
│                                                                      │
│  @unykorn/audit ──────────────────▶ Agent action logging             │
│    └─ Every agent action logged       (observation, recommendation,  │
│                                        and execution all tracked)    │
│                                                                      │
│  @unykorn/policy-engine ──────────▶ Agent execution gates            │
│    └─ Human approval rules            (regulated actions require     │
│                                        principal sign-off)           │
│                                                                      │
│  All adapter packages ────────────▶ Agent capabilities               │
│    └─ custody, stablecoin,            (agents use adapters to        │
│       ledger, oracle                   interact with external        │
│                                        systems)                      │
│                                                                      │
│  NEW TO BUILD:                                                       │
│  ● MCP Server (tool registration, agent routing, context mgmt)       │
│  ● Agent Framework (observation → recommendation → approval → exec)  │
│  ● 7 Agent Implementations:                                          │
│    ┌─────────────────────┬──────────────────────────────────────┐     │
│    │ Deal Agent          │ CRM + Data Room + Email → pipeline   │     │
│    │ Compliance Agent    │ KYC + Sanctions + Policy → queue     │     │
│    │ Investor Agent      │ Profiles + Comms + Status → portal   │     │
│    │ Rights Agent        │ Registry + Entitlement + Payment     │     │
│    │ Treasury Agent      │ Custody + Banking + Recon → reports  │     │
│    │ Issuance Agent      │ XRPL + Policy + Wallet → lifecycle   │     │
│    │ Banker Intel Agent  │ EDGAR + News + Pricing → insights    │     │
│    └─────────────────────┴──────────────────────────────────────┘     │
│                                                                      │
│  STATUS: ▓▓▓▓░░░░░░░░░░ ~30% — infrastructure built (auth,         │
│          audit, policy, abstractions), agent framework +              │
│          implementations needed                                      │
└──────────────────────────────────────────────────────────────────────┘
```

### Layer 9 — Prediction & Scoring

```
┌──────────────────────────────────────────────────────────────────────┐
│  LAYER 9: PREDICTION & SCORING ENGINE                                │
│                                                                      │
│  EXISTING CODE                         CONNECTION                    │
│  ─────────────                         ──────────                    │
│                                                                      │
│  @unykorn/db ─────────────────────▶ Feature store data source        │
│    └─ PostgreSQL + TimescaleDB        (historical data for training) │
│                                                                      │
│  @unykorn/oracle-adapters ────────▶ Market context features          │
│    └─ Chainlink price feeds           (pricing signals as inputs)    │
│                                                                      │
│  @unykorn/audit ──────────────────▶ Behavioral features              │
│    └─ Event log data                  (activity patterns as inputs)  │
│                                                                      │
│  @unykorn/types ──────────────────▶ Score output models              │
│                                                                      │
│  NEW TO BUILD:                                                       │
│  ● Feature Engineering Pipeline (CRM + compliance + settlement data) │
│  ● Model Training Infrastructure (XGBoost + time-series)             │
│  ● 6 Scoring Models:                                                 │
│    ┌─────────────────────┬──────────────────────────────────────┐     │
│    │ Close Probability   │ CRM activity → deal close %          │     │
│    │ Investor Propensity │ History + behavior → participation %  │     │
│    │ Rights Participation│ Holder data → take-up forecast        │     │
│    │ Settlement Risk     │ Payment signals → failure probability │     │
│    │ Compliance Escalation│ Alert patterns → escalation risk     │     │
│    │ Tokenization Fit    │ Security attributes → suitability     │     │
│    └─────────────────────┴──────────────────────────────────────┘     │
│  ● Score API (serve predictions to dashboard + agents + CRM)         │
│  ● Model Monitoring (drift detection, retraining triggers)           │
│                                                                      │
│  STATUS: ▓▓░░░░░░░░░░░░ ~15% — data infrastructure built,          │
│          ML pipeline and models to build                             │
└──────────────────────────────────────────────────────────────────────┘
```

### Enterprise Layer — Hidden Essentials

```
┌──────────────────────────────────────────────────────────────────────┐
│  ENTERPRISE: HIDDEN ESSENTIALS                                       │
│                                                                      │
│  EXISTING CODE                         CONNECTION                    │
│  ─────────────                         ──────────                    │
│                                                                      │
│  @unykorn/documents ──────────────▶ Document version control ✅ BUILT│
│    └─ Hash-verified storage           Version tracking, integrity    │
│                                                                      │
│  @unykorn/auth ───────────────────▶ Role-based entitlements  ✅ BUILT│
│    └─ RBAC with granular perms        Banker/Compliance/Investor/    │
│                                        Admin access matrices         │
│                                                                      │
│  @unykorn/audit ──────────────────▶ Immutable audit trails   ✅ BUILT│
│    └─ Hash-chained event log          WORM-capable, 7+ year retain  │
│    └─ Retention policies              Supervisory review logs        │
│                                       Compliance decision records    │
│                                                                      │
│  @unykorn/policy-engine ──────────▶ Exception management     ✅ BUILT│
│    └─ Rule evaluation                 Override with approval + log   │
│                                                                      │
│  @unykorn/config ─────────────────▶ Data retention policies  ✅ BUILT│
│    └─ Environment management          Configurable per entity type   │
│                                                                      │
│  Broker-Dealer CI/CD ─────────────▶ Infrastructure           ✅ BUILT│
│    └─ GitHub Actions                  Build, test, lint, compliance  │
│    └─ Security scanning               Snyk, CodeQL, TruffleHog      │
│                                                                      │
│  NEW TO BUILD:                                                       │
│  ● Notification Service (investor notices, delivery tracking)        │
│  ● Task Queue Service (escalation, SLA tracking, routing)            │
│  ● Report Export Engine (PDF, CSV, XBRL generation)                  │
│  ● Partner API Gateway (OpenAPI 3.1, rate limiting, auth)            │
│  ● White-Label Theming Engine (multi-tenant branding)                │
│                                                                      │
│  STATUS: ▓▓▓▓▓▓▓▓▓▓░░░░ ~70% — core enterprise infra built,       │
│          notification + reporting services needed                    │
└──────────────────────────────────────────────────────────────────────┘
```

---

## Overall Platform Readiness

```
Layer 1 — Core Workflow       ▓▓▓░░░░░░░░░░░  ~25%  Foundation packages built
Layer 2 — Compliance          ▓▓▓▓▓░░░░░░░░░  ~35%  Auth + Audit + Policy built
Layer 3 — Offerings           ▓▓▓░░░░░░░░░░░  ~20%  Doc + types foundation
Layer 4 — Registry            ▓▓▓▓▓▓░░░░░░░░  ~40%  Policy engine + ledger built
Layer 5 — Treasury            ▓▓▓▓▓▓▓▓▓▓░░░░  ~70%  All custody + stablecoin adapters
Layer 6 — Tokenization        ▓▓▓▓▓▓▓▓░░░░░░  ~55%  XRPL adapter + policy engine
Layer 7 — Market Data         ▓▓▓▓▓▓░░░░░░░░  ~40%  Chainlink oracle adapters
Layer 8 — MCP Agents          ▓▓▓▓░░░░░░░░░░  ~30%  Infrastructure (auth, audit, policy)
Layer 9 — Prediction          ▓▓░░░░░░░░░░░░  ~15%  Data layer foundation
Enterprise — Hidden           ▓▓▓▓▓▓▓▓▓▓░░░░  ~70%  Auth + Audit + Docs + Config + CI

WEIGHTED AVERAGE              ▓▓▓▓▓░░░░░░░░░  ~40%  Platform foundation solid
```

---

## Package Inventory

### Built & Type-Checked (0 TypeScript Errors)

| Package | Files | Interfaces / Classes | Lines |
|:---|:---:|:---|:---:|
| `@unykorn/provider-abstractions` | 3 | 6 interfaces + ProviderRegistry | ~350 |
| `@unykorn/custody-adapters` | 3 | FireblocksAdapter + BitGoAdapter | ~400 |
| `@unykorn/ledger-adapters` | 2 | XRPLAdapter | ~250 |
| `@unykorn/oracle-adapters` | 3 | ChainlinkOracleAdapter + ChainlinkProofAdapter + FeedRegistry | ~450 |
| `@unykorn/stablecoin-adapters` | 3 | USDCAdapter + RLUSDAdapter + verified addresses | ~400 |
| `@unykorn/policy-engine` | 2+ | Rule engine, authorization pipeline | ~200+ |
| `@unykorn/auth` | 2+ | OAuth 2.0, RBAC, MFA, sessions | ~300+ |
| `@unykorn/audit` | 2+ | Hash-chained event log, retention | ~250+ |
| `@unykorn/documents` | 2+ | Storage, hashing, versioning | ~200+ |
| `@unykorn/db` | 2+ | PostgreSQL client, migrations, typed queries | ~200+ |
| `@unykorn/types` | 2+ | Shared type definitions | ~300+ |
| `@unykorn/config` | 2+ | Environment configuration | ~100+ |

### Designed & Documented (Ready for Implementation)

| Document | Covers |
|:---|:---|
| `SYSTEM_ARCHITECTURE.md` | Domain model, bounded contexts, data flow, infra topology |
| `COMPLIANCE_ARCHITECTURE.md` | 16 regulations, WORM audit, AML program, net capital engine |
| `API_SPECIFICATION.md` | REST + WebSocket API, OAuth 2.0, 8 scopes, error contracts |
| `ci.yml` | Build, test, lint, compliance pipeline with Postgres + Redis |
| `security.yml` | Snyk, CodeQL, TruffleHog secret scanning |

---

## Critical Path to Moody Deployment

```
MONTH 1                 MONTH 2                 MONTH 3                 MONTH 4
═══════                 ═══════                 ═══════                 ═══════

Investor onboarding     First investor           Rights offering         First placement
service + Persona       through pipeline         engine complete         closed on platform
KYC integration                                                         
                        Compliance queue         Subscription room       Closing engine
CRM Salesforce          operational              with DocuSign           operational
connector                                        
                        Basic treasury           Payment recon           Treasury+custody
Data model              (Fireblocks connect)     operational             connected
finalization                                     

▲ Existing adapters     ▲ Auth + Audit          ▲ Policy engine         ▲ All Layer 1
  provide foundation      power compliance        enforces rules          integrated
```

---

<p align="center">
  <sub>
    <strong>FTH Trading Engineering</strong><br/>
    System Connection Map — Moody Capital Markets Operating System<br/>
    Confidential — March 2026
  </sub>
</p>
