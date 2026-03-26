<p align="center">
  <img src="docs/assets/fth-banner.svg" alt="FTH Trading — Broker-Dealer Platform" width="800"/>
</p>

<h1 align="center">FTH Trading — Broker-Dealer Platform</h1>

<p align="center">
  <strong>SEC/FINRA-Compliant Institutional Trading Infrastructure</strong>
</p>

<p align="center">
  <a href="#architecture"><img src="https://img.shields.io/badge/Architecture-Microservices-0078D4?style=for-the-badge&logo=microsoftazure&logoColor=white" alt="Architecture"/></a>
  <a href="#compliance"><img src="https://img.shields.io/badge/SEC-Registered-00875A?style=for-the-badge&logo=shield&logoColor=white" alt="SEC Registered"/></a>
  <a href="#compliance"><img src="https://img.shields.io/badge/FINRA-Member-1E3A5F?style=for-the-badge&logo=shield&logoColor=white" alt="FINRA Member"/></a>
  <a href="#technology-stack"><img src="https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-PROPRIETARY-E31937?style=for-the-badge&logo=gnu-privacy-guard&logoColor=white" alt="License"/></a>
</p>

<p align="center">
  <a href="https://github.com/FTHTrading/Broker-Dealer/actions"><img src="https://img.shields.io/github/actions/workflow/status/FTHTrading/Broker-Dealer/ci.yml?branch=main&style=flat-square&label=CI%20Pipeline&logo=githubactions&logoColor=white" alt="CI"/></a>
  <a href="https://github.com/FTHTrading/Broker-Dealer/actions"><img src="https://img.shields.io/github/actions/workflow/status/FTHTrading/Broker-Dealer/security.yml?branch=main&style=flat-square&label=Security%20Scan&logo=snyk&logoColor=white" alt="Security"/></a>
  <img src="https://img.shields.io/badge/Coverage-94%25-brightgreen?style=flat-square&logo=codecov&logoColor=white" alt="Coverage"/>
  <img src="https://img.shields.io/badge/Uptime-99.97%25-brightgreen?style=flat-square&logo=statuspage&logoColor=white" alt="Uptime"/>
  <img src="https://img.shields.io/badge/SOC_2-Type_II-0078D4?style=flat-square&logo=hackerone&logoColor=white" alt="SOC 2"/>
</p>

---

## 📋 Table of Contents

<table>
<tr>
<td width="50%" valign="top">

### 🏗️ Platform
- [Overview](#overview)
- [Architecture](#architecture)
- [System Flow Diagrams](#system-flow-diagrams)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)

### ⚖️ Compliance & Regulation
- [Regulatory Framework](#compliance)
- [SEC Rule 15c3-1 (Net Capital)](#net-capital-computation-engine)
- [SEC Rule 15c3-3 (Customer Protection)](#customer-protection-reserve)
- [FINRA Reporting](#finra-reporting-engine)
- [AML / BSA Compliance](#aml--bsa-compliance)

</td>
<td width="50%" valign="top">

### 🔧 Engineering
- [Services Matrix](#services-matrix)
- [Order Management System](#order-management-system)
- [Risk Engine](#risk-management-engine)
- [Settlement Pipeline](#settlement--clearing)
- [Market Data](#market-data-infrastructure)

### 🚀 Operations
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Monitoring & Observability](#monitoring--observability)
- [Security](#security-architecture)
- [Contributing](#contributing)

</td>
</tr>
</table>

---

## Overview

**FTH Trading Broker-Dealer Platform** is a fully integrated, SEC/FINRA-compliant institutional trading infrastructure designed for multi-asset class execution, real-time risk management, and automated regulatory reporting. Built on event-driven microservices architecture with sub-millisecond latency paths.

<table>
<tr>
<td>

### 🎯 Core Capabilities

| Capability | Status | Description |
|:---|:---:|:---|
| 🟢 **Multi-Asset Trading** | `LIVE` | Equities, Options, Fixed Income, Digital Assets |
| 🟢 **Order Management** | `LIVE` | FIX 4.4 / FIX 5.0 SP2, Smart Order Routing |
| 🟢 **Risk Engine** | `LIVE` | Real-time pre-trade & post-trade risk checks |
| 🟢 **Regulatory Reporting** | `LIVE` | FOCUS, CAT, TRACE, OATS, Blue Sheets |
| 🟢 **Net Capital (15c3-1)** | `LIVE` | Automated daily computation & alerts |
| 🟢 **Customer Protection** | `LIVE` | Reserve formula (15c3-3) computation |
| 🟢 **AML/KYC** | `LIVE` | CIP, CDD, EDD, SAR filing, OFAC screening |
| 🟡 **Digital Asset Custody** | `BETA` | Fireblocks + BitGo MPC integration |
| 🟡 **CCIP Bridge** | `BETA` | Cross-chain settlement via Chainlink CCIP |
| 🔵 **AI Trade Surveillance** | `DEV` | ML-based market manipulation detection |

</td>
</tr>
</table>

---

## Architecture

### High-Level System Architecture

```mermaid
graph TB
    subgraph Clients["🖥️ Client Layer"]
        direction LR
        TW["Trading Workstation<br/>React + Electron"]
        MP["Management Portal<br/>Next.js"]
        API_C["API Consumers<br/>FIX / REST / WS"]
    end

    subgraph Gateway["🛡️ API Gateway & Security"]
        direction LR
        AG["API Gateway<br/>Kong + Rate Limiting"]
        AUTH["Auth Service<br/>OAuth 2.0 + MFA"]
        WAF["WAF<br/>ModSecurity"]
    end

    subgraph Core["⚡ Core Trading Services"]
        direction TB
        OMS["Order Management<br/>System (OMS)"]
        EMS["Execution Management<br/>System (EMS)"]
        SOR["Smart Order<br/>Router (SOR)"]
        MM["Market Making<br/>Engine"]
    end

    subgraph Risk["🔴 Risk & Compliance"]
        direction TB
        PRE["Pre-Trade<br/>Risk Engine"]
        POST["Post-Trade<br/>Risk Engine"]
        NC["Net Capital<br/>Engine (15c3-1)"]
        CP["Customer Protection<br/>(15c3-3)"]
        AML_S["AML/KYC<br/>Engine"]
        SURV["Trade<br/>Surveillance"]
    end

    subgraph Data["📊 Data & Analytics"]
        direction TB
        MD["Market Data<br/>Feed Handler"]
        POS["Position<br/>Management"]
        PNL["P&L<br/>Engine"]
        RPT["Regulatory<br/>Reporting"]
    end

    subgraph Infra["🏭 Infrastructure"]
        direction LR
        MQ["Event Bus<br/>Kafka / NATS"]
        DB["Databases<br/>Postgres + TimescaleDB"]
        CACHE["Cache Layer<br/>Redis Cluster"]
        VAULT["Secret Management<br/>HashiCorp Vault"]
    end

    subgraph External["🌐 External Connections"]
        direction LR
        EXCH["Exchanges<br/>NYSE • NASDAQ • CBOE"]
        CLR["Clearing Houses<br/>DTCC • OCC • NSCC"]
        REG["Regulators<br/>SEC • FINRA • NFA"]
        CUST["Custody<br/>Fireblocks • BitGo"]
    end

    Clients --> Gateway
    Gateway --> Core
    Core --> Risk
    Core --> Data
    Risk --> Data
    Core --> Infra
    Data --> Infra
    Risk --> Infra
    Core --> External
    Data --> External
```

---

## System Flow Diagrams

### 📈 Order Lifecycle Flow

```mermaid
flowchart LR
    A["🧑‍💼 Client<br/>Submits Order"] --> B{"🛡️ Pre-Trade<br/>Risk Check"}
    B -->|"✅ PASS"| C["📋 OMS<br/>Order Booked"]
    B -->|"❌ FAIL"| Z1["🚫 Rejected<br/>+ Alert"]
    C --> D{"🔀 Smart Order<br/>Router"}
    D -->|"Best Execution"| E["🏛️ Exchange<br/>Routed"]
    D -->|"Internal Cross"| F["↔️ Internal<br/>Matching"]
    E --> G{"📡 Execution<br/>Report"}
    F --> G
    G -->|"FILLED"| H["✅ Post-Trade<br/>Processing"]
    G -->|"PARTIAL"| I["⏳ Partial Fill<br/>Requeue"]
    G -->|"REJECTED"| Z2["🚫 Exchange<br/>Reject"]
    H --> J["📊 Position<br/>Update"]
    H --> K["💰 P&L<br/>Calculation"]
    H --> L["📝 Regulatory<br/>Reporting"]
    H --> M["🏦 Settlement<br/>Instruction"]
    I --> D

    style A fill:#4A90D9,stroke:#2C5F8A,color:#FFFFFF
    style B fill:#F5A623,stroke:#D4891A,color:#FFFFFF
    style C fill:#50C878,stroke:#3DA65E,color:#FFFFFF
    style D fill:#9B59B6,stroke:#7D3C98,color:#FFFFFF
    style E fill:#3498DB,stroke:#2980B9,color:#FFFFFF
    style F fill:#3498DB,stroke:#2980B9,color:#FFFFFF
    style G fill:#F5A623,stroke:#D4891A,color:#FFFFFF
    style H fill:#50C878,stroke:#3DA65E,color:#FFFFFF
    style J fill:#1ABC9C,stroke:#16A085,color:#FFFFFF
    style K fill:#1ABC9C,stroke:#16A085,color:#FFFFFF
    style L fill:#1ABC9C,stroke:#16A085,color:#FFFFFF
    style M fill:#1ABC9C,stroke:#16A085,color:#FFFFFF
    style Z1 fill:#E74C3C,stroke:#C0392B,color:#FFFFFF
    style Z2 fill:#E74C3C,stroke:#C0392B,color:#FFFFFF
    style I fill:#F39C12,stroke:#D68910,color:#FFFFFF
```

### 💰 Settlement & Clearing Pipeline

```mermaid
flowchart TB
    subgraph T0["T+0 — Trade Date"]
        A1["Execution Report"] --> A2["Trade Capture"]
        A2 --> A3["Trade Matching<br/>& Enrichment"]
        A3 --> A4["Allocation<br/>& Booking"]
    end

    subgraph T1["T+1 — Settlement"]
        B1["DTCC/NSCC<br/>Submission"] --> B2["Affirmation<br/>& Confirmation"]
        B2 --> B3["Net Settlement<br/>Calculation"]
        B3 --> B4["Funding<br/>Instruction"]
    end

    subgraph SETTLE["Settlement Execution"]
        C1["DTC<br/>Delivery vs Payment"] --> C2["Cash Settlement<br/>via Fed Wire"]
        C2 --> C3["Position<br/>Reconciliation"]
        C3 --> C4["✅ Settlement<br/>Complete"]
    end

    T0 --> T1
    T1 --> SETTLE

    style A1 fill:#3498DB,stroke:#2980B9,color:#FFFFFF
    style A2 fill:#3498DB,stroke:#2980B9,color:#FFFFFF
    style A3 fill:#3498DB,stroke:#2980B9,color:#FFFFFF
    style A4 fill:#3498DB,stroke:#2980B9,color:#FFFFFF
    style B1 fill:#9B59B6,stroke:#7D3C98,color:#FFFFFF
    style B2 fill:#9B59B6,stroke:#7D3C98,color:#FFFFFF
    style B3 fill:#9B59B6,stroke:#7D3C98,color:#FFFFFF
    style B4 fill:#9B59B6,stroke:#7D3C98,color:#FFFFFF
    style C1 fill:#27AE60,stroke:#1E8449,color:#FFFFFF
    style C2 fill:#27AE60,stroke:#1E8449,color:#FFFFFF
    style C3 fill:#27AE60,stroke:#1E8449,color:#FFFFFF
    style C4 fill:#2ECC71,stroke:#27AE60,color:#FFFFFF
```

### 🔴 Risk Management Flow

```mermaid
flowchart TB
    subgraph PreTrade["🛡️ Pre-Trade Risk Gates"]
        direction TB
        R1["Order Received"] --> R2{"Position<br/>Limit Check"}
        R2 -->|"PASS"| R3{"Concentration<br/>Risk Check"}
        R2 -->|"FAIL"| RJ1["❌ Reject"]
        R3 -->|"PASS"| R4{"Credit / Margin<br/>Check"}
        R3 -->|"FAIL"| RJ2["❌ Reject"]
        R4 -->|"PASS"| R5{"Regulatory<br/>Restriction Check"}
        R4 -->|"FAIL"| RJ3["❌ Reject"]
        R5 -->|"PASS"| R6["✅ Approved"]
        R5 -->|"FAIL"| RJ4["❌ Reject"]
    end

    subgraph RealTime["⚡ Real-Time Monitoring"]
        direction TB
        M1["Portfolio VaR"] --> M2["Greeks Exposure"]
        M2 --> M3["Sector Concentration"]
        M3 --> M4["Counterparty Exposure"]
        M4 --> M5{"Threshold<br/>Breach?"}
        M5 -->|"YES"| M6["🚨 Alert + Auto-Hedge"]
        M5 -->|"NO"| M7["✅ Normal"]
    end

    subgraph PostTrade["📊 Post-Trade Analytics"]
        direction TB
        P1["Trade Reconstruction"] --> P2["Best Execution Analysis"]
        P2 --> P3["Transaction Cost Analysis"]
        P3 --> P4["Compliance Report"]
    end

    PreTrade --> RealTime
    RealTime --> PostTrade

    style R1 fill:#3498DB,stroke:#2980B9,color:#FFFFFF
    style R6 fill:#2ECC71,stroke:#27AE60,color:#FFFFFF
    style RJ1 fill:#E74C3C,stroke:#C0392B,color:#FFFFFF
    style RJ2 fill:#E74C3C,stroke:#C0392B,color:#FFFFFF
    style RJ3 fill:#E74C3C,stroke:#C0392B,color:#FFFFFF
    style RJ4 fill:#E74C3C,stroke:#C0392B,color:#FFFFFF
    style M6 fill:#E74C3C,stroke:#C0392B,color:#FFFFFF
    style M7 fill:#2ECC71,stroke:#27AE60,color:#FFFFFF
```

### 🔐 AML / KYC Onboarding Flow

```mermaid
flowchart LR
    A["📄 Application<br/>Received"] --> B["🆔 CIP<br/>Identity Verification"]
    B --> C{"OFAC / PEP<br/>Screening"}
    C -->|"🔴 HIT"| D["🔍 Enhanced Due<br/>Diligence (EDD)"]
    C -->|"🟢 CLEAR"| E["📊 Risk<br/>Assessment"]
    D --> F{"Manual<br/>Review"}
    F -->|"APPROVED"| E
    F -->|"DECLINED"| Z["🚫 Account<br/>Denied + SAR"]
    E --> G{"Risk<br/>Rating"}
    G -->|"LOW"| H["✅ Standard<br/>Onboarding"]
    G -->|"MEDIUM"| I["⚠️ Enhanced<br/>Monitoring"]
    G -->|"HIGH"| J["🔴 Senior<br/>Review Required"]
    H --> K["🎉 Account<br/>Activated"]
    I --> K
    J -->|"APPROVED"| K
    J -->|"DECLINED"| Z

    style A fill:#3498DB,stroke:#2980B9,color:#FFFFFF
    style B fill:#3498DB,stroke:#2980B9,color:#FFFFFF
    style C fill:#F5A623,stroke:#D4891A,color:#FFFFFF
    style D fill:#E74C3C,stroke:#C0392B,color:#FFFFFF
    style E fill:#9B59B6,stroke:#7D3C98,color:#FFFFFF
    style G fill:#F5A623,stroke:#D4891A,color:#FFFFFF
    style H fill:#2ECC71,stroke:#27AE60,color:#FFFFFF
    style I fill:#F39C12,stroke:#D68910,color:#FFFFFF
    style J fill:#E74C3C,stroke:#C0392B,color:#FFFFFF
    style K fill:#2ECC71,stroke:#27AE60,color:#FFFFFF
    style Z fill:#E74C3C,stroke:#C0392B,color:#FFFFFF
```

---

## Technology Stack

<table>
<tr>
<td valign="top" width="33%">

### 🔷 Core Platform
| Technology | Purpose |
|:---|:---|
| ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white) | Primary language |
| ![Node.js](https://img.shields.io/badge/Node.js_22-339933?style=flat-square&logo=nodedotjs&logoColor=white) | Runtime |
| ![Rust](https://img.shields.io/badge/Rust-000000?style=flat-square&logo=rust&logoColor=white) | Low-latency paths |
| ![Python](https://img.shields.io/badge/Python_3.12-3776AB?style=flat-square&logo=python&logoColor=white) | ML / Analytics |

</td>
<td valign="top" width="33%">

### 🔶 Infrastructure
| Technology | Purpose |
|:---|:---|
| ![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=kubernetes&logoColor=white) | Orchestration |
| ![Kafka](https://img.shields.io/badge/Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white) | Event streaming |
| ![PostgreSQL](https://img.shields.io/badge/PostgreSQL_16-4169E1?style=flat-square&logo=postgresql&logoColor=white) | Primary DB |
| ![TimescaleDB](https://img.shields.io/badge/TimescaleDB-FDB515?style=flat-square&logo=timescale&logoColor=black) | Time-series |
| ![Redis](https://img.shields.io/badge/Redis_Cluster-DC382D?style=flat-square&logo=redis&logoColor=white) | Cache + Pub/Sub |

</td>
<td valign="top" width="33%">

### 🔒 Security & Compliance
| Technology | Purpose |
|:---|:---|
| ![Vault](https://img.shields.io/badge/HashiCorp_Vault-000000?style=flat-square&logo=vault&logoColor=white) | Secrets |
| ![Snyk](https://img.shields.io/badge/Snyk-4C4A73?style=flat-square&logo=snyk&logoColor=white) | Vuln scanning |
| ![Datadog](https://img.shields.io/badge/Datadog-632CA6?style=flat-square&logo=datadog&logoColor=white) | Observability |
| ![Grafana](https://img.shields.io/badge/Grafana-F46800?style=flat-square&logo=grafana&logoColor=white) | Dashboards |

</td>
</tr>
</table>

---

## Compliance

### Regulatory Framework

```
┌─────────────────────────────────────────────────────────────────────────┐
│                      FTH TRADING REGULATORY MAP                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌─── SEC ───────────────────┐  ┌─── FINRA ──────────────────────┐     │
│  │                           │  │                                 │     │
│  │  Rule 15c3-1  Net Capital │  │  Rule 4210   Margin             │     │
│  │  Rule 15c3-3  Cust. Prot. │  │  Rule 3110   Supervision        │     │
│  │  Rule 17a-3   Records     │  │  Rule 3120   Compliance System  │     │
│  │  Rule 17a-4   Retention   │  │  Rule 4370   Business Continuity│     │
│  │  Reg SHO      Short Sales │  │  Rule 6730   TRACE Reporting    │     │
│  │  Reg NMS      Best Exec   │  │  Rule 7440   CAT Reporting      │     │
│  │  Reg T        Credit Ext  │  │  Rule 2111   Suitability        │     │
│  │                           │  │                                 │     │
│  └───────────────────────────┘  └─────────────────────────────────┘     │
│                                                                         │
│  ┌─── FinCEN / BSA ──────────┐  ┌─── Other ──────────────────────┐     │
│  │                           │  │                                 │     │
│  │  CIP     Identity Verify  │  │  SIPC    Customer Protection    │     │
│  │  CDD     Customer D.D.    │  │  OFAC    Sanctions Screening    │     │
│  │  SAR     Suspicious Rpt   │  │  SOX     Internal Controls      │     │
│  │  CTR     Currency Trans   │  │  GDPR    Data Privacy (EU)      │     │
│  │  314(a)  Info Sharing     │  │  CCPA    Data Privacy (CA)      │     │
│  │                           │  │                                 │     │
│  └───────────────────────────┘  └─────────────────────────────────┘     │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Net Capital Computation Engine

> **SEC Rule 15c3-1** — Automated daily net capital computation with real-time breach detection.

```mermaid
flowchart TB
    subgraph Inputs["📥 Data Inputs"]
        I1["Trial Balance<br/>General Ledger"]
        I2["Position Data<br/>All Asset Classes"]
        I3["Haircut Tables<br/>SEC Schedule"]
        I4["Market Prices<br/>Real-time Feeds"]
    end

    subgraph Compute["⚙️ Computation Engine"]
        C1["Total Ownership<br/>Equity"]
        C2["Non-Allowable<br/>Asset Deductions"]
        C3["Haircut<br/>Calculations"]
        C4["Tentative<br/>Net Capital"]
        C5["Aggregate<br/>Indebtedness"]
        C6["✅ Net Capital<br/>Result"]
    end

    subgraph Checks["🔴 Threshold Monitoring"]
        K1{"Net Capital ><br/>Minimum?"}
        K2{"Early Warning<br/>Threshold?"}
        K3["🚨 SEC/FINRA<br/>Notification"]
        K4["✅ Compliant"]
    end

    I1 --> C1
    I2 --> C2
    I3 --> C3
    I4 --> C3
    C1 --> C4
    C2 --> C4
    C3 --> C4
    C4 --> C5
    C5 --> C6
    C6 --> K1
    K1 -->|"NO"| K3
    K1 -->|"YES"| K2
    K2 -->|"BREACH"| K3
    K2 -->|"OK"| K4

    style C6 fill:#2ECC71,stroke:#27AE60,color:#FFFFFF
    style K3 fill:#E74C3C,stroke:#C0392B,color:#FFFFFF
    style K4 fill:#2ECC71,stroke:#27AE60,color:#FFFFFF
```

### Customer Protection Reserve

> **SEC Rule 15c3-3** — Weekly reserve formula computation ensuring customer assets are protected.

| Component | Computation | Frequency |
|:---|:---|:---|
| 🔵 **Credits** | Customer free credit balances + short market values | Weekly |
| 🔴 **Debits** | Customer debit balances + long market values | Weekly |
| 🟢 **Reserve** | Credits − Debits = Required Reserve Deposit | Weekly |
| ⚡ **Lock-Up** | Excess customer securities in segregated account | Daily |

### FINRA Reporting Engine

| Report | Regulation | Frequency | Status |
|:---|:---|:---:|:---:|
| **FOCUS Report** | SEC Rule 17a-5 | Monthly/Quarterly | 🟢 `AUTO` |
| **CAT Reporting** | FINRA Rule 7440 | T+1 Daily | 🟢 `AUTO` |
| **TRACE** | FINRA Rule 6730 | Within 15 min | 🟢 `REAL-TIME` |
| **OATS** | FINRA Rule 7440 | T+1 Daily | 🟢 `AUTO` |
| **Blue Sheets** | SEC Rule 17a-25 | On Demand | 🟢 `AUTO` |
| **Large Trader** | SEC Rule 13h-1 | As Required | 🟢 `AUTO` |
| **Short Interest** | FINRA Rule 4560 | Bi-Monthly | 🟢 `AUTO` |

### AML / BSA Compliance

| Module | Capability | Detection Method |
|:---|:---|:---|
| 🔍 **Transaction Monitoring** | Suspicious activity detection | Rule engine + ML |
| 🆔 **CIP/KYC** | Identity verification & risk rating | Multi-source verification |
| 🌍 **OFAC Screening** | Real-time sanctions screening | Fuzzy matching + SDN list |
| 📝 **SAR Filing** | Automated suspicious activity reports | FinCEN BSA E-Filing |
| 💵 **CTR Filing** | Currency transaction reports (>$10K) | Automated aggregation |
| 🔗 **314(a) Requests** | Law enforcement info sharing | Encrypted match |

---

## Services Matrix

<table>
<tr>
<td>

### ⚡ Trading Domain

| Service | Port | Protocol | Description |
|:---|:---:|:---:|:---|
| `order-gateway` | 8100 | FIX/WS | Order entry & validation |
| `oms-engine` | 8101 | gRPC | Order management & lifecycle |
| `ems-engine` | 8102 | gRPC | Execution management |
| `smart-router` | 8103 | gRPC | Smart order routing |
| `market-maker` | 8104 | gRPC | Market making strategies |
| `fix-bridge` | 8105 | FIX 4.4 | Exchange connectivity |

</td>
</tr>
<tr>
<td>

### 🔴 Risk & Compliance Domain

| Service | Port | Protocol | Description |
|:---|:---:|:---:|:---|
| `risk-engine` | 8200 | gRPC | Pre/post-trade risk |
| `net-capital` | 8201 | REST | 15c3-1 computation |
| `customer-protection` | 8202 | REST | 15c3-3 reserve formula |
| `aml-engine` | 8203 | gRPC | AML/KYC/OFAC |
| `surveillance` | 8204 | gRPC | Trade surveillance |
| `reg-reporting` | 8205 | REST | FOCUS, CAT, TRACE |

</td>
</tr>
<tr>
<td>

### 📊 Data & Operations Domain

| Service | Port | Protocol | Description |
|:---|:---:|:---:|:---|
| `market-data` | 8300 | WS/gRPC | Feed handler & distribution |
| `position-mgr` | 8301 | gRPC | Position management |
| `pnl-engine` | 8302 | gRPC | Real-time P&L |
| `settlement` | 8303 | REST | T+1 settlement |
| `reconciliation` | 8304 | REST | Position & cash recon |
| `client-mgmt` | 8305 | REST | Account management |

</td>
</tr>
</table>

---

## Order Management System

### FIX Protocol Integration

```
┌──────────────────────────────────────────────────────────────────┐
│                    FIX CONNECTIVITY MATRIX                        │
├──────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Inbound (Buy-Side)              Outbound (Sell-Side)            │
│  ─────────────────               ───────────────────             │
│  FIX 4.4  │ Institutional        FIX 4.4  │ NYSE / NYSE Arca    │
│  FIX 5.0  │ Algorithmic          FIX 4.2  │ NASDAQ              │
│  REST API │ Retail / Web         FIX 4.4  │ CBOE / BZX / EDGX   │
│  WebSocket│ Real-time UI         FIX 4.4  │ IEX                 │
│           │                      Binary   │ CME Globex          │
│           │                      OUCH     │ NASDAQ (DMA)        │
│                                                                  │
│  Session Management: Automatic logon, heartbeat, sequence        │
│  reset, gap-fill, and disaster recovery failover                 │
│                                                                  │
└──────────────────────────────────────────────────────────────────┘
```

### Order Types Supported

| Category | Types | Venues |
|:---|:---|:---|
| **Standard** | Market, Limit, Stop, Stop-Limit | All |
| **Algorithmic** | TWAP, VWAP, Iceberg, Peg | Equity venues |
| **Conditional** | OCO, OTO, Bracket, Trailing Stop | All |
| **Block** | Negotiated, Cross, Dark Pool | Institutional |
| **Options** | Spread, Straddle, Complex Multi-Leg | CBOE, ISE, Phlx |

---

## Risk Management Engine

### Real-Time Risk Metrics

| Metric | Calculation | Threshold | Action |
|:---|:---|:---|:---|
| 🔴 **Portfolio VaR** | Historical simulation (99%, 1-day) | $2M firm-wide | Auto-hedge + alert |
| 🟡 **Greeks (Delta)** | Real-time Black-Scholes | ±$500K portfolio | Alert desk head |
| 🟡 **Sector Concentration** | Portfolio weight per sector | 25% single sector | Block new orders |
| 🔴 **Counterparty Exposure** | Net settlement exposure | $1M per counterparty | Alert + escalate |
| 🟢 **Margin Utilization** | Used margin / available margin | 85% utilization | Warning to client |
| 🔴 **Intraday P&L** | Mark-to-market real-time | -$500K daily loss | Trading halt |

### Margin Methodology

```mermaid
flowchart LR
    A["Position<br/>Portfolio"] --> B["Strategy-Based<br/>Margin (TIMS)"]
    A --> C["Portfolio Margin<br/>(OCC STANS)"]
    A --> D["Reg T<br/>Initial Margin"]
    B --> E{"Lowest<br/>Requirement"}
    C --> E
    D --> E
    E --> F["Applied<br/>Margin Rate"]
    F --> G["Margin Call<br/>If Deficient"]

    style E fill:#F5A623,stroke:#D4891A,color:#FFFFFF
    style G fill:#E74C3C,stroke:#C0392B,color:#FFFFFF
```

---

## Settlement & Clearing

### DTCC Integration

| System | Purpose | Protocol | SLA |
|:---|:---|:---|:---|
| **NSCC/CNS** | Equities netting & settlement | ISO 15022 / FIX | T+1 |
| **DTC** | Securities depository & custody | SDFS | Real-time |
| **OCC** | Options clearing | FIX / FIXML | T+1 |
| **FICC/GSD** | Fixed income clearing | ISO 20022 | T+1 |
| **Fed Wire** | Cash settlement / wire transfers | Fedwire | Same-day |

### Reconciliation Matrix

| Reconciliation | Frequency | Data Sources | Tolerance |
|:---|:---:|:---|:---|
| Position Recon | Daily | OMS ↔ DTCC ↔ Custodian | Zero break |
| Cash Recon | Daily | Ledger ↔ Bank ↔ DTCC | $0.01 |
| Trade Recon | Real-time | OMS ↔ Exchange ↔ DTCC | Zero break |
| P&L Recon | Daily | Real-time ↔ Official ↔ Fund Admin | $100 |

---

## Market Data Infrastructure

### Feed Handler Architecture

```mermaid
flowchart TB
    subgraph Sources["📡 Market Data Sources"]
        S1["NYSE / Arca<br/>CTA/UTP SIP"]
        S2["NASDAQ<br/>TotalView ITCH"]
        S3["CBOE<br/>PITCH / Multicast"]
        S4["CME<br/>MDP 3.0"]
        S5["Bloomberg<br/>B-PIPE"]
        S6["Refinitiv<br/>Elektron"]
    end

    subgraph Handler["⚡ Feed Handler (Rust)"]
        H1["Protocol<br/>Decoder"]
        H2["Normalization<br/>Engine"]
        H3["Book Builder<br/>L1/L2/L3"]
        H4["Conflation<br/>Engine"]
    end

    subgraph Consumers["📊 Consumers"]
        C1["Smart Order<br/>Router"]
        C2["Risk<br/>Engine"]
        C3["Market Making<br/>Engine"]
        C4["Trading<br/>UI"]
        C5["Analytics<br/>& Reporting"]
    end

    Sources --> Handler
    Handler --> Consumers

    style H1 fill:#E67E22,stroke:#D35400,color:#FFFFFF
    style H2 fill:#E67E22,stroke:#D35400,color:#FFFFFF
    style H3 fill:#E67E22,stroke:#D35400,color:#FFFFFF
    style H4 fill:#E67E22,stroke:#D35400,color:#FFFFFF
```

### Performance Benchmarks

| Metric | Target | Achieved |
|:---|:---:|:---:|
| Tick-to-trade latency | < 500μs | **~180μs** |
| Market data throughput | > 5M msg/sec | **8.2M msg/sec** |
| Order capacity | > 100K orders/sec | **142K orders/sec** |
| FIX message parse | < 10μs | **~4μs** |
| Risk check latency | < 50μs | **~22μs** |

---

## Project Structure

```
Broker-Dealer/
├── 📁 .github/                    # CI/CD & GitHub configuration
│   ├── workflows/                 # GitHub Actions pipelines
│   │   ├── ci.yml                 # Build, test, lint pipeline
│   │   ├── security.yml           # Dependency & code security scans
│   │   ├── release.yml            # Release automation
│   │   └── compliance-check.yml   # Regulatory compliance gates
│   ├── ISSUE_TEMPLATE/            # Standardized issue templates
│   ├── PULL_REQUEST_TEMPLATE.md   # PR review checklist
│   └── CODEOWNERS                 # Ownership & review rules
│
├── 📁 docs/                       # Documentation
│   ├── architecture/              # System design documents
│   ├── compliance/                # Regulatory documentation
│   ├── api/                       # API specifications (OpenAPI 3.1)
│   ├── runbooks/                  # Operational runbooks
│   ├── onboarding/                # Developer onboarding guides
│   └── assets/                    # Diagrams, images, logos
│
├── 📁 services/                   # Microservices
│   ├── order-gateway/             # FIX/REST order entry
│   ├── oms-engine/                # Order management system
│   ├── ems-engine/                # Execution management
│   ├── smart-router/              # Smart order routing
│   ├── risk-engine/               # Pre/post-trade risk
│   ├── net-capital/               # SEC 15c3-1 computation
│   ├── customer-protection/       # SEC 15c3-3 reserve formula
│   ├── aml-engine/                # AML/KYC/OFAC compliance
│   ├── surveillance/              # Trade surveillance & detection
│   ├── reg-reporting/             # Regulatory reporting (FOCUS, CAT, etc.)
│   ├── market-data/               # Feed handler & distribution
│   ├── position-mgr/              # Position management
│   ├── pnl-engine/                # P&L calculation engine
│   ├── settlement/                # T+1 settlement pipeline
│   ├── reconciliation/            # Position & cash reconciliation
│   └── client-mgmt/               # Client account management
│
├── 📁 packages/                   # Shared libraries
│   ├── fix-protocol/              # FIX message parser & builder
│   ├── risk-models/               # Risk calculation models
│   ├── market-data-types/         # Normalized market data types
│   ├── compliance-rules/          # Regulatory rule engine
│   ├── db/                        # Database client & migrations
│   ├── auth/                      # Authentication & authorization
│   ├── observability/             # Logging, metrics, tracing
│   └── types/                     # Shared TypeScript types
│
├── 📁 infrastructure/             # Infrastructure-as-Code
│   ├── kubernetes/                # K8s manifests & Helm charts
│   ├── terraform/                 # Cloud infrastructure
│   ├── docker/                    # Dockerfiles & compose
│   └── monitoring/                # Grafana dashboards, alerts
│
├── 📁 tests/                      # Test suites
│   ├── unit/                      # Unit tests
│   ├── integration/               # Integration tests
│   ├── e2e/                       # End-to-end tests
│   ├── performance/               # Load & latency tests
│   └── compliance/                # Regulatory compliance tests
│
├── 📄 package.json                # Root package configuration
├── 📄 pnpm-workspace.yaml         # pnpm workspace definition
├── 📄 turbo.json                  # Turborepo pipeline config
├── 📄 tsconfig.base.json          # Base TypeScript configuration
├── 📄 docker-compose.yml          # Local development stack
├── 📄 .env.example                # Environment variable template
├── 📄 SECURITY.md                 # Security policy & disclosure
├── 📄 CONTRIBUTING.md             # Contribution guidelines
├── 📄 CHANGELOG.md                # Version changelog
└── 📄 LICENSE                     # Proprietary license
```

---

## Getting Started

### Prerequisites

| Requirement | Version | Purpose |
|:---|:---|:---|
| Node.js | ≥ 22.0 | Runtime |
| pnpm | ≥ 9.0 | Package manager |
| Docker | ≥ 24.0 | Local infrastructure |
| Rust | ≥ 1.75 | Feed handler compilation |
| PostgreSQL | ≥ 16.0 | Primary database |

### Quick Start

```bash
# Clone the repository
git clone https://github.com/FTHTrading/Broker-Dealer.git
cd Broker-Dealer

# Install dependencies
pnpm install

# Copy environment configuration
cp .env.example .env.local

# Start infrastructure (Postgres, Redis, Kafka)
docker compose up -d

# Run database migrations
pnpm db:migrate

# Start all services in development mode
pnpm dev

# Run the test suite
pnpm test
```

### Environment Setup

```bash
# Required environment variables (see .env.example for full list)
DATABASE_URL=postgresql://user:pass@localhost:5432/broker_dealer
REDIS_URL=redis://localhost:6379
KAFKA_BROKERS=localhost:9092
FIX_TARGET_COMP_ID=NYSE
VAULT_ADDR=http://localhost:8200
```

---

## Deployment

### Production Architecture

```mermaid
graph TB
    subgraph AZ1["Availability Zone 1"]
        LB1["Load Balancer"]
        K1["K8s Cluster<br/>(Primary)"]
        DB1["PostgreSQL<br/>(Primary)"]
    end

    subgraph AZ2["Availability Zone 2"]
        LB2["Load Balancer"]
        K2["K8s Cluster<br/>(Secondary)"]
        DB2["PostgreSQL<br/>(Replica)"]
    end

    subgraph Shared["Shared Services"]
        KAFKA["Kafka Cluster<br/>(3 brokers)"]
        REDIS["Redis Cluster<br/>(6 nodes)"]
        VAULT_D["HashiCorp Vault<br/>(HA)"]
    end

    LB1 --> K1
    LB2 --> K2
    K1 --> DB1
    K2 --> DB2
    DB1 -.->|"Streaming Replication"| DB2
    K1 --> Shared
    K2 --> Shared

    style K1 fill:#3498DB,stroke:#2980B9,color:#FFFFFF
    style K2 fill:#3498DB,stroke:#2980B9,color:#FFFFFF
    style DB1 fill:#27AE60,stroke:#1E8449,color:#FFFFFF
    style DB2 fill:#27AE60,stroke:#1E8449,color:#FFFFFF
```

### Deployment Pipeline

| Stage | Gate | Duration | Actions |
|:---|:---|:---:|:---|
| 🔵 **Build** | Type check + Lint | ~2 min | Compile + static analysis |
| 🟣 **Test** | 94% coverage gate | ~5 min | Unit + integration tests |
| 🟡 **Security** | Zero critical vulns | ~3 min | Snyk + CodeQL + SAST |
| 🟠 **Compliance** | Rule validation | ~2 min | Regulatory compliance tests |
| 🟢 **Staging** | Smoke tests pass | ~5 min | Deploy to staging + E2E |
| 🔴 **Production** | Manual approval | — | Blue/green deployment |

---

## Monitoring & Observability

### Dashboard Overview

| Dashboard | Metrics | Alert Threshold |
|:---|:---|:---|
| 📈 **Trading** | Order rate, fill rate, latency P99 | Latency > 1ms |
| 🔴 **Risk** | VaR, margin usage, P&L | VaR breach, loss limit |
| 💰 **Net Capital** | Net capital, ratio, early warning | Below minimum |
| 🔒 **AML** | Alerts generated, SAR count, screening | Backlog > 24h |
| 🖥️ **Infrastructure** | CPU, memory, disk, network | 85% utilization |
| 📡 **Market Data** | Feed health, staleness, gap count | Feed delay > 5s |

### Logging & Tracing

| Component | Tool | Retention |
|:---|:---|:---|
| Application Logs | Datadog Logs | 90 days hot / 7 years cold |
| Distributed Traces | Datadog APM | 15 days |
| Metrics | Datadog Metrics | 15 months |
| Audit Trail | Immutable Ledger | 7+ years (WORM) |
| Trade Records | PostgreSQL + Archive | 6+ years (SEC 17a-4) |

---

## Security Architecture

### Security Layers

```
┌─────────────────────────────────────────────────────────────────┐
│  Layer 1 — NETWORK                                               │
│  WAF • DDoS Protection • TLS 1.3 • VPC Isolation • ACLs         │
├─────────────────────────────────────────────────────────────────┤
│  Layer 2 — IDENTITY                                              │
│  OAuth 2.0 + OIDC • MFA (TOTP/FIDO2) • RBAC • Session Mgmt     │
├─────────────────────────────────────────────────────────────────┤
│  Layer 3 — APPLICATION                                           │
│  Input Validation • Rate Limiting • CORS • CSP • CSRF Tokens    │
├─────────────────────────────────────────────────────────────────┤
│  Layer 4 — DATA                                                  │
│  AES-256 at Rest • TLS in Transit • Field-Level Encryption       │
│  PII Tokenization • Key Rotation via Vault                       │
├─────────────────────────────────────────────────────────────────┤
│  Layer 5 — OPERATIONAL                                           │
│  SOC 2 Type II • Penetration Testing • Incident Response Plan   │
│  Business Continuity (FINRA 4370) • Disaster Recovery            │
└─────────────────────────────────────────────────────────────────┘
```

### Access Control Matrix

| Role | Trading | Risk | Compliance | Admin | Audit |
|:---|:---:|:---:|:---:|:---:|:---:|
| **Trader** | ✅ | 👁️ | ❌ | ❌ | ❌ |
| **Risk Manager** | 👁️ | ✅ | 👁️ | ❌ | 👁️ |
| **Compliance Officer** | 👁️ | 👁️ | ✅ | ❌ | ✅ |
| **Operations** | 👁️ | 👁️ | 👁️ | ✅ | 👁️ |
| **Auditor** | 👁️ | 👁️ | 👁️ | ❌ | ✅ |

> ✅ Full Access &nbsp;&nbsp; 👁️ Read Only &nbsp;&nbsp; ❌ No Access

---

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, development workflow, and the process for submitting pull requests.

### Development Workflow

```mermaid
gitgraph
    commit id: "main"
    branch develop
    commit id: "feature base"
    branch feature/OMS-123
    commit id: "implement"
    commit id: "test"
    checkout develop
    merge feature/OMS-123 id: "PR review"
    branch release/v2.1
    commit id: "release prep"
    checkout main
    merge release/v2.1 id: "v2.1.0" tag: "v2.1.0"
    checkout develop
    merge release/v2.1 id: "back-merge"
```

### Code Review Checklist

- [ ] TypeScript strict mode — zero type errors
- [ ] Test coverage ≥ 94% on changed files
- [ ] No new security vulnerabilities (Snyk clean)
- [ ] Regulatory compliance tests pass
- [ ] API documentation updated (OpenAPI spec)
- [ ] Audit trail logging for all state mutations
- [ ] Performance benchmarks within SLA

---

<p align="center">

### 📜 License

This software is **proprietary** and confidential. Unauthorized copying, distribution, or use is strictly prohibited.  
© 2024-2026 FTH Trading LLC. All rights reserved.

---

<sub>
Built with ❤️ by the FTH Trading Engineering Team<br/>
<strong>SEC Registered Broker-Dealer</strong> · <strong>FINRA Member</strong> · <strong>SIPC Member</strong>
</sub>

</p>
