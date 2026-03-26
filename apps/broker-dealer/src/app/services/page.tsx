import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive broker-dealer services for private securities issuance, distribution, and lifecycle management.',
}

const SERVICES = [
  {
    id: 'placement',
    title: 'Private Placement & Distribution',
    summary: 'End-to-end management of exempt private securities offerings under Regulation D, Regulation A+, and Regulation S frameworks.',
    details: [
      'Offering structuring advisory — security type selection (equity, debt, convertible), pricing mechanics, and investor targeting strategy.',
      'Subscription document preparation including Private Placement Memorandums (PPMs), subscription agreements, investor questionnaires, and accreditation verification forms.',
      'Managed distribution to qualified investor channels with suitability screening, accreditation verification, and jurisdictional compliance checks.',
      'Escrow coordination with qualified third-party custodians, break-funding protection, and minimum-raise threshold management.',
      'Closing mechanics including subscription acceptance, allocation confirmation, cap table recording, and investor notification.',
    ],
  },
  {
    id: 'compliance',
    title: 'Compliance & Regulatory Operations',
    summary: 'Automated and manual compliance workflows for investor qualification, transaction monitoring, and ongoing reporting obligations.',
    details: [
      'AML/KYC program implementation — identity verification, beneficial ownership identification, politically exposed persons (PEP) screening, and enhanced due diligence for high-risk profiles.',
      'Sanctions screening against OFAC SDN, EU consolidated lists, and other applicable restricted-party databases. Automated rescreening on configurable schedules.',
      'Accredited investor verification under Rule 501 — income verification, net worth assessment, professional certification, and entity qualification analysis.',
      'Blue Sky compliance and state notice filing management for multi-state offerings.',
      'Ongoing transfer restriction enforcement including Rule 144 holding periods, lock-up agreements, and right-of-first-refusal provisions.',
      'Regulatory reporting and examination readiness — audit trail export, transaction reconstruction, and examiner-ready documentation packages.',
    ],
  },
  {
    id: 'captable',
    title: 'Cap Table & Position Management',
    summary: 'Institutional-grade capitalization table management with dual-record architecture for legal and on-chain position tracking.',
    details: [
      'Dual-ledger position management: PostgreSQL as the authoritative legal record, blockchain state as a mirrored attestation layer.',
      'Real-time position tracking across all active offerings, including unit counts, cost basis, percentage ownership, and vesting schedules.',
      'Transfer processing with compliance gate enforcement — every transfer evaluated against the policy engine before execution.',
      'Corporate action processing: distributions, dilution events, stock splits, conversions, and forced redemptions recorded to both ledger layers.',
      'Investor statement generation and position reconciliation reporting.',
    ],
  },
  {
    id: 'settlement',
    title: 'Settlement & Clearing',
    summary: 'Multi-rail settlement infrastructure supporting fiat and digital asset transaction channels with institutional custody integration.',
    details: [
      'ACH and wire transfer settlement with automated reconciliation against subscription records.',
      'Stablecoin settlement support for USDC and qualifying digital dollar instruments with on-chain confirmation tracking.',
      'Escrow management with automated release conditions, minimum-raise thresholds, and time-based close mechanics.',
      'Custody coordination with qualified custodians for both traditional and digital asset positions.',
      'T+0 to T+3 configurable settlement windows with automated status tracking and exception handling.',
    ],
  },
  {
    id: 'technology',
    title: 'Technology & Infrastructure',
    summary: 'Purpose-built platform stack designed for regulatory auditability, operational resilience, and institutional-grade security.',
    details: [
      'Policy engine evaluation on every material write operation — configurable rule registry, ordered evaluation, and persistent decision logging.',
      'Append-only audit trail with immutable event recording, structured metadata, and full actor-action-resource traceability.',
      'IPFS-backed document storage with content-addressed hashing (SHA-256) for tamper-evident document management.',
      'Multi-signature approval workflows for high-value operations: large subscriptions, transfer requests, and corporate actions.',
      'Role-based access control with granular permission mapping across platform, operator, issuer, and investor roles.',
      'API-first architecture with webhook integration points for external system connectivity.',
    ],
  },
  {
    id: 'advisory',
    title: 'Issuer Advisory & Structuring',
    summary: 'Strategic guidance for issuers on offering structure, exemption selection, and go-to-market distribution strategy.',
    details: [
      'Exemption analysis and selection — Reg D 506(b) vs 506(c), Reg A+ Tier 1 vs Tier 2, Reg S for offshore distribution, and hybrid structures.',
      'Security type structuring: common/preferred equity, revenue participation, convertible notes, SAFEs, and tokenized interest structures.',
      'Pricing and valuation guidance — unit economics, discount structures, conversion mechanics, and cap table impact modeling.',
      'Go-to-market strategy including investor targeting, distribution channel selection, and timeline planning.',
      'Ongoing issuer support through offering lifecycle: amendment processing, investor communications, and closing coordination.',
    ],
  },
] as const

export default function ServicesPage() {
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
          Services
        </p>
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            lineHeight: 1.15,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          Full-Stack Broker-Dealer Operations
        </h1>
        <p style={{ maxWidth: 600, color: 'var(--color-text-secondary)', fontSize: '1rem' }}>
          From offering structuring through investor closing and ongoing lifecycle management,
          we operate the complete broker-dealer workflow under a single compliance-enforced platform.
        </p>
      </header>

      <div style={{ display: 'grid', gap: '2.5rem' }}>
        {SERVICES.map((svc) => (
          <section
            key={svc.id}
            id={svc.id}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 8,
              padding: '2.5rem',
            }}
          >
            <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.75rem' }}>
              {svc.title}
            </h2>
            <p
              style={{
                fontSize: '0.925rem',
                color: 'var(--color-text-secondary)',
                marginBottom: '1.5rem',
                lineHeight: 1.65,
              }}
            >
              {svc.summary}
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '0.75rem' }}>
              {svc.details.map((d, i) => (
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
                      color: 'var(--color-accent)',
                      fontWeight: 600,
                    }}
                  >
                    ›
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </main>
  )
}
