# 🤝 Contributing to FTH Trading Broker-Dealer Platform

Thank you for your interest in contributing. This document provides guidelines and standards for contributing to this codebase.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Commit Convention](#commit-convention)
- [Pull Request Process](#pull-request-process)
- [Compliance Requirements](#compliance-requirements)

## Code of Conduct

All contributors must adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to providing a welcoming, inclusive, and harassment-free environment.

## Getting Started

1. **Fork** the repository (internal contributors: create a feature branch)
2. **Clone** your fork locally
3. **Install** dependencies: `pnpm install`
4. **Configure** your environment: `cp .env.example .env.local`
5. **Start** infrastructure: `docker compose up -d`
6. **Run** tests to verify setup: `pnpm test`

## Development Workflow

### Branch Naming

```
feature/TICKET-123-short-description
bugfix/TICKET-456-fix-description
hotfix/TICKET-789-critical-fix
release/v2.1.0
```

### Branch Strategy

| Branch | Purpose | Protection |
|:-------|:--------|:-----------|
| `main` | Production releases | Required reviews, CI pass, compliance gate |
| `develop` | Integration branch | Required reviews, CI pass |
| `feature/*` | Feature development | CI pass |
| `release/*` | Release candidates | Required reviews, full test suite |
| `hotfix/*` | Production fixes | Expedited review, CI pass |

## Coding Standards

### TypeScript

- **Strict mode** enabled — zero type errors allowed
- **No `any` types** — use proper typing or `unknown`
- Prefer **interfaces** over type aliases for object shapes
- Use **readonly** properties where mutation is not required
- **Exhaustive switch** statements with `never` checks

### Testing

| Type | Coverage Target | Location |
|:-----|:---:|:---|
| Unit Tests | ≥ 95% | `tests/unit/` |
| Integration Tests | ≥ 85% | `tests/integration/` |
| E2E Tests | Critical paths | `tests/e2e/` |
| Compliance Tests | 100% | `tests/compliance/` |

### Documentation

- All public APIs must have JSDoc comments
- OpenAPI 3.1 spec updated for REST endpoints
- Architecture Decision Records (ADRs) for significant changes
- Runbook updates for operational changes

## Commit Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### Types

| Type | Description |
|:-----|:------------|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Code style (formatting, semicolons, etc.) |
| `refactor` | Code refactoring (no feature/fix) |
| `perf` | Performance improvement |
| `test` | Adding or updating tests |
| `build` | Build system or dependencies |
| `ci` | CI/CD configuration |
| `chore` | Maintenance tasks |
| `security` | Security-related changes |
| `compliance` | Regulatory compliance changes |

### Examples

```
feat(oms): add support for OCO order types
fix(risk-engine): correct VaR calculation for multi-leg options
compliance(net-capital): update haircut schedule per SEC amendment
security(auth): enforce MFA for all admin endpoints
```

## Pull Request Process

### Requirements

- [ ] All CI checks pass (build, lint, test, security scan)
- [ ] Test coverage meets threshold (≥ 94%)
- [ ] No new security vulnerabilities
- [ ] Compliance tests pass
- [ ] Documentation updated
- [ ] Changelog entry added
- [ ] At least 2 approving reviews (1 must be CODEOWNER)

### Review SLA

| Priority | First Review | Merge Target |
|:---------|:---:|:---:|
| 🔴 Hotfix | < 2 hours | < 4 hours |
| 🟠 High | < 4 hours | < 1 business day |
| 🟡 Normal | < 1 business day | < 3 business days |
| 🟢 Low | < 2 business days | < 1 week |

## Compliance Requirements

### Mandatory for All Changes

1. **Audit Trail** — All state-mutating operations must be logged to the immutable audit trail
2. **Data Classification** — New data fields must be classified (Public, Internal, Confidential, Restricted)
3. **Retention** — Ensure data retention policies are met (SEC 17a-4: 6 years minimum)
4. **Privacy** — PII must be tokenized or encrypted at rest
5. **Access Control** — New endpoints must have proper RBAC enforcement

### Regulatory Impact Assessment

If your change affects any of the following areas, a **Compliance Officer review** is required:

- Net capital computation
- Customer protection reserve calculation
- Order handling or execution logic
- AML/KYC screening rules
- Regulatory report generation
- Risk limit thresholds
- Customer data handling

---

<sub>Questions? Contact the engineering team at [engineering@fthtrading.com](mailto:engineering@fthtrading.com)</sub>
