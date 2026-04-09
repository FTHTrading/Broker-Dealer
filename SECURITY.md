# 🔒 Security Policy

## Supported Versions

| Version | Supported |
|:--------|:---------:|
| 2.x     | ✅        |
| 1.x     | ⚠️ Critical fixes only |
| < 1.0   | ❌        |

## Reporting a Vulnerability

**⚠️ Do NOT open a public GitHub issue for security vulnerabilities.**

If you discover a security vulnerability in this project, please report it responsibly:

### Contact

- **Email:** [security@fthtrading.com](mailto:security@fthtrading.com)
- **PGP Key:** Available upon request
- **Response SLA:** Within 24 hours for initial acknowledgment

### What to Include

1. Description of the vulnerability
2. Steps to reproduce
3. Potential impact assessment
4. Suggested remediation (if any)

### Process

1. **Report** — Send details to the security team
2. **Acknowledge** — We confirm receipt within 24 hours
3. **Investigate** — Our team assesses severity and impact
4. **Remediate** — We develop and test a fix
5. **Disclose** — Coordinated disclosure after fix is deployed

### Severity Levels

| Level | Response Time | Examples |
|:------|:---:|:---|
| 🔴 **Critical** | < 4 hours | Auth bypass, data exfiltration, RCE |
| 🟠 **High** | < 24 hours | Privilege escalation, SQL injection |
| 🟡 **Medium** | < 72 hours | XSS, CSRF, information disclosure |
| 🟢 **Low** | < 1 week | Minor configuration issues |

## Security Practices

- All code undergoes mandatory security review
- Automated SAST/DAST scanning on every PR
- Annual third-party penetration testing
- SOC 2 Type II compliance maintained
- Encryption at rest (AES-256) and in transit (TLS 1.3)
- Secret management via HashiCorp Vault
- FINRA Rule 4370 Business Continuity Plan maintained

## Regulatory Compliance

This platform handles sensitive financial data subject to:
- **SEC Rule 17a-4** — Electronic record retention
- **FINRA Rule 3110** — Supervisory systems
- **Gramm-Leach-Bliley Act** — Customer financial privacy
- **SOX** — Internal controls over financial reporting
