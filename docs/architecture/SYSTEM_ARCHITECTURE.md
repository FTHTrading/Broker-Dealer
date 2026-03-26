# System Architecture — FTH Trading Broker-Dealer Platform

> **Classification:** INTERNAL — CONFIDENTIAL  
> **Last Updated:** 2025-01  
> **Owner:** Engineering Team

---

## 1. Architecture Principles

| Principle | Description |
|:----------|:------------|
| **Event-Driven** | All inter-service communication via event bus (Kafka); services are decoupled producers/consumers |
| **Domain Isolation** | Trading, Risk, Compliance, and Data domains have independent deployment lifecycles |
| **Zero Trust** | All service-to-service calls authenticated via mTLS; no implicit trust boundaries |
| **Regulatory First** | Every trade state mutation produces an immutable audit event before acknowledgment |
| **Latency Budgets** | Each service has a defined P99 latency SLA; hot paths optimized in Rust |

---

## 2. Domain Model

### Bounded Contexts

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        FTH Trading Domain Map                           │
├──────────────────┬──────────────────┬───────────────────────────────────┤
│                  │                  │                                   │
│  TRADING         │  RISK            │  DATA & OPERATIONS               │
│  ────────        │  ────            │  ──────────────────               │
│  • Order Entry   │  • Pre-Trade     │  • Market Data                   │
│  • OMS           │  • Post-Trade    │  • Position Management           │
│  • EMS           │  • Net Capital   │  • P&L                           │
│  • Smart Routing │  • Margin        │  • Settlement                    │
│  • Market Making │  • VaR / Greeks  │  • Reconciliation                │
│  • FIX Gateway   │                  │  • Client Management             │
│                  │  COMPLIANCE      │                                   │
│                  │  ──────────      │  INFRASTRUCTURE                  │
│                  │  • AML/KYC       │  ─────────────────               │
│                  │  • Surveillance  │  • Auth & Identity               │
│                  │  • Reg Reporting │  • Observability                  │
│                  │  • Customer Prot │  • Secret Management             │
│                  │                  │  • Event Bus                     │
│                  │                  │                                   │
└──────────────────┴──────────────────┴───────────────────────────────────┘
```

---

## 3. Data Flow Architecture

### Order Flow (Hot Path)

```
Client → API Gateway → Order Gateway (validate + enrich)
    → Pre-Trade Risk Engine (position limits, margin, restrictions)
    → OMS (book order, assign ID, persist)
    → Smart Order Router (venue selection, algo logic)
    → FIX Bridge (encode, transmit to exchange)
    → Exchange (execute)
    → FIX Bridge (decode execution report)
    → OMS (update order state)
    → Post-Trade Risk Engine (update exposure)
    → Position Manager (update positions)
    → P&L Engine (mark-to-market)
    → Events: [OrderFilled, PositionUpdated, PnLUpdated, TradeForReporting]
```

### Compliance Flow (Parallel)

```
TradeForReporting event →
    ├── CAT Reporter (T+1 submission to FINRA)
    ├── TRACE Reporter (15-min bond trade reporting)
    ├── Trade Surveillance (pattern detection)
    ├── Best Execution Analyzer (Reg NMS compliance)
    └── Audit Trail Writer (immutable record, SEC 17a-4)
```

---

## 4. Infrastructure Topology

### Production Environment

| Component | Configuration | Redundancy |
|:----------|:-------------|:-----------|
| **Kubernetes** | 3-node control plane, multi-AZ worker pools | Active-Active |
| **PostgreSQL** | Primary + streaming replica + async DR replica | Active-Passive |
| **TimescaleDB** | Dedicated cluster for market data & time-series | Active-Passive |
| **Redis** | 6-node cluster (3 primary + 3 replica) | Active-Active |
| **Kafka** | 3-broker cluster, rack-aware replication (RF=3) | Active-Active |
| **Vault** | 3-node HA cluster with auto-unseal | Active-Passive |

### Network Architecture

```
Internet
   │
   ▼
┌─── WAF / DDoS Protection ───┐
│   CloudFlare / AWS Shield    │
└──────────┬───────────────────┘
           │
┌──────────▼───────────────────┐
│   API Gateway (Kong)          │
│   • Rate limiting             │
│   • Authentication            │
│   • Request routing           │
└──────────┬───────────────────┘
           │
┌──────────▼───────────────────┐
│   Service Mesh (Istio)        │
│   • mTLS between services     │
│   • Circuit breaking           │
│   • Retry policies             │
│   • Observability injection    │
└──────────┬───────────────────┘
           │
    ┌──────┴──────┐
    │  K8s Pods   │
    └─────────────┘
```

---

## 5. Data Architecture

### Database Strategy

| Database | Engine | Purpose | Retention |
|:---------|:-------|:--------|:----------|
| `broker_dealer` | PostgreSQL 16 | Orders, positions, accounts | Indefinite |
| `market_data` | TimescaleDB | Tick data, OHLCV, book snapshots | 5 years hot, archive cold |
| `audit_trail` | PostgreSQL (WORM) | Immutable audit records | 7+ years (SEC 17a-4) |
| `compliance` | PostgreSQL 16 | AML alerts, SAR records, screening | 7+ years (BSA) |
| `analytics` | ClickHouse | Trade analytics, TCA, reporting | 3 years |

### Event Schema

All events follow a standardized envelope:

```json
{
  "eventId": "uuid-v7",
  "eventType": "trade.order.filled",
  "version": "2.0",
  "timestamp": "2025-01-15T14:30:00.000Z",
  "source": "oms-engine",
  "correlationId": "uuid-v7",
  "data": { },
  "metadata": {
    "userId": "...",
    "firmId": "...",
    "auditHash": "sha256:..."
  }
}
```

---

## 6. Disaster Recovery

| Metric | Target | Strategy |
|:-------|:-------|:---------|
| **RPO** (Recovery Point Objective) | < 1 minute | Synchronous replication for critical data |
| **RTO** (Recovery Time Objective) | < 15 minutes | Automated failover with health checks |
| **BCP Testing** | Quarterly | Per FINRA Rule 4370 |
| **DR Site** | Separate region | Warm standby with async replication |

---

## 7. Performance Targets

| Metric | SLA | Current |
|:-------|:----|:--------|
| Order-to-ack latency | < 1ms P99 | ~0.4ms |
| Risk check latency | < 50μs P99 | ~22μs |
| Market data propagation | < 100μs P99 | ~45μs |
| API Gateway response | < 50ms P99 | ~12ms |
| System availability | 99.95% | 99.97% |
| Throughput (orders/sec) | > 100K | 142K |
