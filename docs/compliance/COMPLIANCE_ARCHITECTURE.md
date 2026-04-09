# Compliance Architecture — FTH Trading Broker-Dealer Platform

> **Classification:** INTERNAL — CONFIDENTIAL  
> **Last Updated:** 2025-01  
> **Owner:** Compliance & Engineering

---

## 1. Regulatory Obligations Matrix

| Regulation | Agency | Requirement | Automated | Frequency |
|:-----------|:-------|:------------|:---------:|:----------|
| Rule 15c3-1 | SEC | Net capital computation | ✅ | Daily + real-time monitoring |
| Rule 15c3-3 | SEC | Customer protection reserve | ✅ | Weekly + daily lock-up |
| Rule 17a-3 | SEC | Books and records | ✅ | Continuous |
| Rule 17a-4 | SEC | Record retention (WORM) | ✅ | Continuous, 6-year retention |
| Rule 17a-5 | SEC | FOCUS Report | ✅ | Monthly / Quarterly |
| Reg NMS | SEC | Best execution | ✅ | Per-trade analysis |
| Reg SHO | SEC | Short sale rules | ✅ | Pre-trade check |
| Reg T | FRB | Credit extension limits | ✅ | Pre-trade check |
| Rule 7440 | FINRA | CAT reporting | ✅ | T+1 daily |
| Rule 6730 | FINRA | TRACE reporting | ✅ | Within 15 minutes |
| Rule 4210 | FINRA | Margin requirements | ✅ | Continuous |
| Rule 3110 | FINRA | Supervisory systems | ✅ | Continuous |
| Rule 4370 | FINRA | Business continuity | ✅ | Annual test |
| BSA/AML | FinCEN | Anti-money laundering | ✅ | Continuous |
| CIP | FinCEN | Customer identification | ✅ | Account opening |
| OFAC | Treasury | Sanctions screening | ✅ | Real-time |

---

## 2. Audit Trail Architecture

### Immutable Event Log

Every state-mutating action in the platform produces an immutable audit record:

```
┌─────────────────────────────────────────────────────────────────┐
│                    AUDIT TRAIL PIPELINE                          │
│                                                                  │
│   Source Service                                                │
│       │                                                         │
│       ▼                                                         │
│   Audit Event Producer                                          │
│       │  (hash-chained, timestamped, signed)                    │
│       ▼                                                         │
│   Kafka Topic: audit.trail                                      │
│       │  (immutable, compacted, RF=3)                           │
│       ├──▶ WORM Storage (PostgreSQL + pgcrypto)                 │
│       │      6+ year retention, tamper-evident                  │
│       ├──▶ Real-time Compliance Monitor                         │
│       │      Pattern detection, threshold alerts                │
│       └──▶ Archive (S3 Glacier Deep Archive)                    │
│              Cold storage for regulatory examination             │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Audit Record Schema

| Field | Type | Description |
|:------|:-----|:------------|
| `audit_id` | UUID v7 | Unique, time-ordered identifier |
| `prev_hash` | SHA-256 | Hash of previous record (chain integrity) |
| `timestamp` | ISO 8601 | Microsecond precision, NTP-synced |
| `actor` | String | User ID or system service |
| `action` | Enum | CREATE, UPDATE, DELETE, ACCESS, APPROVE, REJECT |
| `resource_type` | String | Order, Position, Account, Report, etc. |
| `resource_id` | String | Target entity identifier |
| `before_state` | JSONB | State before mutation (null for CREATE) |
| `after_state` | JSONB | State after mutation |
| `ip_address` | INET | Source IP address |
| `signature` | Bytes | HMAC-SHA256 of record contents |

### Retention Policy

| Record Type | Hot Storage | Warm Storage | Cold Storage | Total |
|:------------|:---:|:---:|:---:|:---:|
| Trade records | 2 years | 4 years | Indefinite | 6+ years |
| Communications | 1 year | 3 years | Indefinite | 4+ years |
| Account records | 2 years | 4 years | Indefinite | 6+ years |
| AML/SAR records | 2 years | 5 years | Indefinite | 7+ years |
| Audit trail | 2 years | 5 years | Indefinite | 7+ years |

---

## 3. Net Capital Engine (15c3-1)

### Computation Pipeline

| Step | Description | Data Source |
|:-----|:------------|:-----------|
| 1 | Pull trial balance from general ledger | PostgreSQL |
| 2 | Compute total ownership equity | Ledger accounts |
| 3 | Identify and deduct non-allowable assets | Asset classification rules |
| 4 | Apply haircut percentages by asset class | SEC haircut schedule |
| 5 | Compute aggregate indebtedness | Liability accounts |
| 6 | Calculate net capital ratio | Steps 1-5 |
| 7 | Compare against minimum requirement | Regulatory threshold |
| 8 | Generate alerts if early warning triggered | Monitoring rules |

### Alert Thresholds

| Level | Condition | Action |
|:------|:----------|:-------|
| 🟢 **Normal** | Net capital > 150% of minimum | Log only |
| 🟡 **Watch** | Net capital 120-150% of minimum | Alert compliance officer |
| 🟠 **Warning** | Net capital 100-120% of minimum | Alert CCO + restrict activity |
| 🔴 **Critical** | Net capital < 100% of minimum | Halt trading + notify SEC/FINRA |

---

## 4. AML Program Architecture

### Transaction Monitoring Rules

| Rule ID | Pattern | Description | Threshold |
|:--------|:--------|:------------|:----------|
| AML-001 | Structuring | Transactions split to avoid CTR | Multiple txns $8K-$9.9K in 24h |
| AML-002 | Rapid Movement | Funds deposited and withdrawn quickly | In/out < 48h, > $25K |
| AML-003 | Round Tripping | Circular fund flow patterns | Same amount ± 5% within 30 days |
| AML-004 | Unusual Volume | Account activity spike | 3x average monthly volume |
| AML-005 | High-Risk Geo | Transactions involving FATF grey/black list | Any amount |
| AML-006 | PEP Activity | Enhanced monitoring for PEPs | All transactions |
| AML-007 | Wire Patterns | Unusual wire transfer patterns | > $50K to new beneficiary |

### SAR Filing Workflow

```
Alert Generated
    │
    ▼
Automated Triage (ML-scored severity)
    │
    ├── Low Score → Queue for batch review
    │
    ├── Medium Score → Assign to analyst (48h SLA)
    │
    └── High Score → Escalate to BSA Officer (4h SLA)
            │
            ▼
        Investigation
            │
            ├── No suspicious activity → Close with documentation
            │
            └── Suspicious activity confirmed
                    │
                    ▼
                SAR Filing (FinCEN BSA E-Filing)
                    │
                    ▼
                90-day continuing review
```

---

## 5. Best Execution (Reg NMS)

### Execution Quality Metrics

| Metric | Description | Target |
|:-------|:------------|:-------|
| **NBBO Compliance** | Orders executed at or better than NBBO | > 99.5% |
| **Price Improvement** | Average price improvement vs. midpoint | > 0.2 bps |
| **Fill Rate** | Percentage of orders fully filled | > 98% |
| **Speed of Execution** | Time from receipt to execution | < 50ms P99 |
| **Order Routing Analysis** | Venue-level fill quality comparison | Quarterly review |

### Smart Order Router Decision Tree

```
Order Received
    │
    ├── Check: Is this a directed order?
    │   └── YES → Route to specified venue
    │
    ├── Check: Order size vs. displayed liquidity
    │   └── LARGE → Consider dark pool / block venue
    │
    ├── Evaluate: All lit venues (NBBO + depth)
    │   ├── Best price + sufficient size → Route
    │   ├── Split across venues for size → Multi-leg
    │   └── Use algo (TWAP/VWAP) → Time-slice
    │
    └── Post-execution: Log routing decision rationale
        (SEC Rule 606 / Reg NMS documentation)
```

---

## 6. Examination Readiness

### Regulatory Exam Toolkit

| Exam Type | Frequency | Preparation |
|:----------|:----------|:------------|
| **FINRA Cycle** | Every 1-4 years | Standing document packages, automated report generation |
| **SEC Examination** | Risk-based | Real-time data access, audit trail query tools |
| **FinCEN BSA** | Risk-based | AML program documentation, SAR statistics |
| **SOC 2 Type II** | Annual | Continuous control monitoring, evidence collection |
| **State Regulators** | Varies | State-specific reporting packages |

### Data Access for Examiners

All regulatory data is queryable through a read-only compliance portal with:
- Full-text search across all trade records
- Time-range filtering with microsecond precision
- Cross-reference by account, security, trader, or venue
- Export in SEC/FINRA-required formats (Blue Sheets, etc.)
- Immutability verification (hash chain validation)
