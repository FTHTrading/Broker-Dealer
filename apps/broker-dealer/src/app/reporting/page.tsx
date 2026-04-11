import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Valuation & Reporting Engine',
  description: 'Issuer reporting, investor reporting, NAV tracking, servicing controls, and post-close lifecycle management.',
}

const REPORTING_MODULES = [
  {
    title: 'Issuer Reporting',
    color: '#c9a84c',
    description: 'Structured reporting from the issuer to the platform, regulators, and investors.',
    items: [
      'Reserve status reports: collateral position, custody confirmation, and coverage ratios.',
      'Financial statements: income, balance sheet, and cash flow presented to platform standards.',
      'Material event filings: triggered disclosures for reserve changes, key personnel, or legal actions.',
      'Compliance attestations: signed issuer confirmations of ongoing regulatory adherence.',
      'Operational updates: business milestones, asset development, and distribution schedules.',
    ],
  },
  {
    title: 'Investor Reporting',
    color: '#2563eb',
    description: 'What each investor sees, scoped to their holding, qualification, and access rights.',
    items: [
      'Position summary: share count, cost basis, current NAV, unrealized gain/loss.',
      'Distribution history: payment dates, amounts, withholding, tax lot tracking.',
      'Document delivery: subscription confirmation, K-1s, 1099s, and ongoing disclosures.',
      'Transfer history: all transfers, restrictions, lockup countdown, and restriction release.',
      'Communication log: all investor-facing messages, alerts, and acknowledgement receipts.',
    ],
  },
  {
    title: 'Valuation Engine',
    color: '#10b981',
    description: 'Transparent, explainable valuation methodology with documented assumptions and update triggers.',
    items: [
      'NAV calculation: net asset value computed from audited inputs with methodology disclosure.',
      'Pricing model documentation: assumptions, discount rates, comparables, and sensitivity ranges.',
      'Mark-to-market vs. mark-to-model: mode identification and justification for each asset class.',
      'Update triggers: scheduled recalculation dates and event-driven revaluation conditions.',
      'Audit-ready trail: every NAV change linked to input data change with timestamp.',
    ],
  },
  {
    title: 'Post-Close Servicing',
    color: '#8b5cf6',
    description: 'The offering does not end at closing. Servicing, distributions, and lifecycle events continue.',
    items: [
      'Distribution processing: calculated per share, withheld per investor tax status, delivered on schedule.',
      'Transfer agent coordination: cap-table updates, restriction releases, and ownership confirmations.',
      'Corporate actions: mergers, splits, conversions, or restructurings applied to security records.',
      'Sunset provisions: redemption, buyback, or maturity events with investor notification.',
      'Regulatory filings: ongoing Form D amendments, blue sky updates, and ATS reporting.',
    ],
  },
] as const

const REPORT_TYPES = [
  { name: 'Quarterly Reserve Report', frequency: 'Quarterly', audience: 'Investors, Regulators' },
  { name: 'NAV Update', frequency: 'Monthly / Event-driven', audience: 'Investors' },
  { name: 'Distribution Notice', frequency: 'Per schedule', audience: 'Investors' },
  { name: 'Material Event Disclosure', frequency: 'Event-driven', audience: 'All parties' },
  { name: 'Annual Financial Statements', frequency: 'Annual', audience: 'Investors, Regulators' },
  { name: 'Compliance Attestation', frequency: 'Quarterly', audience: 'Platform, Regulators' },
  { name: 'Transfer Activity Report', frequency: 'Monthly', audience: 'Platform, BD' },
  { name: 'Investor Position Statement', frequency: 'Quarterly', audience: 'Per investor' },
  { name: 'Tax Documentation (K-1 / 1099)', frequency: 'Annual', audience: 'Per investor' },
  { name: 'Regulatory Filing Status', frequency: 'Ongoing', audience: 'Platform, Counsel' },
] as const

export default function ReportingPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
      <section style={{ padding: '4rem 0 2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
          Reporting Engine
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
          Visibility is not optional for restricted securities
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: 820 }}>
          Issuers report. The platform validates. Investors receive. Regulators access.
          Every number is sourced, every disclosure is versioned, every delivery is recorded.
        </p>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {REPORTING_MODULES.map((mod) => (
            <div key={mod.title} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: `3px solid ${mod.color}`, borderRadius: 8, padding: '1.5rem 1.6rem' }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>{mod.title}</div>
              <div style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>{mod.description}</div>
              <div style={{ display: 'grid', gap: '0.4rem' }}>
                {mod.items.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ color: mod.color, flexShrink: 0, marginTop: '0.15rem' }}>&#8250;</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          Scheduled report types
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
          The platform generates, tracks delivery, and records acknowledgment for each report type.
        </p>
        <div style={{ background: '#0c0c10', border: '1px solid #141420', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: '1px', background: '#141420' }}>
            <div style={{ background: '#0a0a10', padding: '0.8rem 1rem', fontWeight: 700, fontSize: '0.78rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Report</div>
            <div style={{ background: '#0a0a10', padding: '0.8rem 1rem', fontWeight: 700, fontSize: '0.78rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Frequency</div>
            <div style={{ background: '#0a0a10', padding: '0.8rem 1rem', fontWeight: 700, fontSize: '0.78rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Audience</div>
          </div>
          {REPORT_TYPES.map((r) => (
            <div key={r.name} style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr 1fr', gap: '1px', background: '#141420' }}>
              <div style={{ background: '#0c0c10', padding: '0.7rem 1rem', fontSize: '0.84rem', fontWeight: 600 }}>{r.name}</div>
              <div style={{ background: '#0c0c10', padding: '0.7rem 1rem', fontSize: '0.82rem', color: '#c0c0d0' }}>{r.frequency}</div>
              <div style={{ background: '#0c0c10', padding: '0.7rem 1rem', fontSize: '0.82rem', color: '#c0c0d0' }}>{r.audience}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3.5rem', background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(37,99,235,0.06))', border: '1px solid var(--color-gold)', borderRadius: 8, padding: '2rem 2.2rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem' }}>
          The discipline gap
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
          Most digital asset offerings stop reporting after the token sale. Restricted securities
          do not work that way. Post-close servicing, ongoing reporting, and lifecycle management
          are not features — they are obligations. This engine ensures they happen on schedule,
          with evidence, and with audit trails that satisfy both investors and regulators.
        </p>
      </section>

      <section style={{ textAlign: 'center', padding: '2rem 0 1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/reserve-proof" style={{ background: 'var(--color-gold)', color: '#0a0a0f', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            RESERVE PROOF
          </Link>
          <Link href="/platform" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            PLATFORM MODULES
          </Link>
          <Link href="/contact" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>
            CONTACT TEAM
          </Link>
        </div>
      </section>
    </main>
  )
}
