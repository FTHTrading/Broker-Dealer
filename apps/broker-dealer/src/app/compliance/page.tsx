import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compliance',
  description: 'Compliance framework, regulatory posture, and control documentation for broker-dealer operations.',
}

const FRAMEWORKS = [
  {
    title: 'Securities Act Compliance',
    items: [
      'Regulation D Rule 506(b) — private placement to unlimited accredited investors and up to 35 sophisticated non-accredited investors without general solicitation.',
      'Regulation D Rule 506(c) — placement to verified accredited investors only, with general solicitation permitted.',
      'Regulation A+ Tier 1 & Tier 2 — qualified offerings up to $20M (Tier 1) or $75M (Tier 2) with scaled disclosure requirements.',
      'Regulation S — offshore transactions not involving U.S. persons, with distribution compliance period enforcement.',
    ],
  },
  {
    title: 'Anti-Money Laundering (AML)',
    items: [
      'Customer Identification Program (CIP) with government ID verification and liveness detection.',
      'Customer Due Diligence (CDD) with beneficial ownership identification for entity investors.',
      'Enhanced Due Diligence (EDD) for high-risk profiles including PEPs and high-value subscriptions.',
      'Suspicious Activity Reporting (SAR) procedures and FinCEN filing protocols.',
      'Automated OFAC SDN and consolidated sanctions list screening with 30-day rescreening cadence.',
    ],
  },
  {
    title: 'Investor Protection',
    items: [
      'Accredited investor verification under Rule 501(a) with documented evidence retention.',
      'Suitability determination based on investment experience, risk tolerance, and financial capacity.',
      'Concentration risk analysis to prevent excessive allocation to a single offering or asset class.',
      'Mandatory cooling-off periods and subscription cancellation rights as applicable.',
      'Clear and conspicuous risk disclosures on all offering materials.',
    ],
  },
  {
    title: 'Record Keeping & Audit',
    items: [
      'Append-only audit log capturing every material state transition with actor, action, resource, and timestamp.',
      'Structured event taxonomy with 100+ named audit event types covering all operational domains.',
      'Evidence bundle generation for regulatory examination with full transaction reconstruction capability.',
      'Document retention policies aligned with SEC Rule 17a-4 requirements.',
      'Immutable document storage with SHA-256 content hashing and IPFS-backed content addressing.',
    ],
  },
  {
    title: 'Technology Controls',
    items: [
      'Policy engine evaluation on every material write operation before execution.',
      'Role-based access control (RBAC) with least-privilege permission mapping.',
      'Session management with expiration enforcement and IP-based anomaly detection.',
      'API authentication with key rotation and rate limiting.',
      'Encryption at rest and in transit for all sensitive data fields.',
    ],
  },
] as const

export default function CompliancePage() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 2rem' }}>
      <header style={{ marginBottom: '4rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '1rem',
          }}
        >
          Compliance
        </p>
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          Regulatory & Compliance Framework
        </h1>
        <p style={{ maxWidth: 600, color: 'var(--color-text-secondary)', fontSize: '1rem' }}>
          Our operations are built on a foundation of regulatory compliance. Every process,
          system, and transaction is designed to meet applicable federal and state securities
          law requirements.
        </p>
      </header>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {FRAMEWORKS.map((fw) => (
          <section
            key={fw.title}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 8,
              padding: '2rem',
            }}
          >
            <h2 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              {fw.title}
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
              {fw.items.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.7,
                    paddingLeft: '1.25rem',
                    position: 'relative',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      color: 'var(--color-success)',
                      fontWeight: 700,
                    }}
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
