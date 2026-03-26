# API Specification — FTH Trading Broker-Dealer Platform

> **Version:** 2.0  
> **Base URL:** `https://api.fthtrading.com/v2`  
> **Authentication:** OAuth 2.0 Bearer Token + MFA

---

## Overview

The FTH Trading API provides programmatic access to the broker-dealer platform's core functionality. All endpoints require authentication and are subject to rate limiting, audit logging, and compliance checks.

### Base Configuration

| Property | Value |
|:---------|:------|
| Protocol | HTTPS (TLS 1.3) |
| Format | JSON (application/json) |
| Rate Limit | 1,000 req/min (standard), 10,000 req/min (institutional) |
| Versioning | URL path (`/v2/`) |
| Pagination | Cursor-based |
| Time Format | ISO 8601 with microseconds |

---

## Authentication

### OAuth 2.0 Token Exchange

```http
POST /auth/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id={client_id}
&client_secret={client_secret}
&scope=trading:write risk:read
```

### Scopes

| Scope | Description |
|:------|:------------|
| `trading:read` | View orders, executions, positions |
| `trading:write` | Submit, modify, cancel orders |
| `risk:read` | View risk metrics, margin status |
| `compliance:read` | View compliance reports, alerts |
| `accounts:read` | View account information |
| `accounts:write` | Manage accounts (restricted) |
| `market-data:read` | Access market data feeds |
| `admin:*` | Full administrative access (restricted) |

---

## Endpoints

### Orders

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `POST` | `/orders` | Submit new order |
| `GET` | `/orders` | List orders (filtered) |
| `GET` | `/orders/{id}` | Get order details |
| `PUT` | `/orders/{id}` | Modify order |
| `DELETE` | `/orders/{id}` | Cancel order |
| `GET` | `/orders/{id}/executions` | Get execution reports |
| `GET` | `/orders/{id}/audit` | Get order audit trail |

### Positions

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `GET` | `/positions` | List all positions |
| `GET` | `/positions/{symbol}` | Get position for symbol |
| `GET` | `/positions/summary` | Portfolio summary |

### Risk

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `GET` | `/risk/portfolio` | Portfolio risk metrics |
| `GET` | `/risk/margin` | Margin utilization |
| `GET` | `/risk/net-capital` | Current net capital status |
| `GET` | `/risk/limits` | Configured risk limits |

### Accounts

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `GET` | `/accounts` | List accounts |
| `GET` | `/accounts/{id}` | Account details |
| `GET` | `/accounts/{id}/balances` | Account balances |
| `GET` | `/accounts/{id}/activity` | Account activity |

### Market Data

| Method | Endpoint | Description |
|:-------|:---------|:------------|
| `GET` | `/market-data/quotes/{symbol}` | Current quote |
| `GET` | `/market-data/bars/{symbol}` | OHLCV bars |
| `WS` | `/market-data/stream` | Real-time WebSocket feed |

---

## WebSocket API

### Connection

```
wss://stream.fthtrading.com/v2/ws
Authorization: Bearer {token}
```

### Channels

| Channel | Description | Message Rate |
|:--------|:------------|:-------------|
| `orders` | Order updates & execution reports | Event-driven |
| `positions` | Position changes | Event-driven |
| `market-data.{symbol}` | Real-time quotes | Tick-by-tick |
| `risk` | Risk metric updates | 1s intervals |
| `alerts` | System & compliance alerts | Event-driven |

---

## Error Codes

| Code | Status | Description |
|:-----|:-------|:------------|
| `ORDER_REJECTED` | 400 | Order failed pre-trade risk checks |
| `INSUFFICIENT_MARGIN` | 400 | Insufficient margin for order |
| `POSITION_LIMIT` | 400 | Position limit exceeded |
| `RESTRICTED_SECURITY` | 403 | Security on restricted list |
| `MARKET_CLOSED` | 400 | Market not open for trading |
| `RATE_LIMITED` | 429 | Rate limit exceeded |
| `UNAUTHORIZED` | 401 | Invalid or expired token |
| `FORBIDDEN` | 403 | Insufficient permissions |
