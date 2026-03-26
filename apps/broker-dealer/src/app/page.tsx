import Link from 'next/link'

const CORE_SERVICES = [
  {
    title: 'Exempt Offering Distribution',
    body: 'End-to-end placement of Regulation D 506(b), 506(c), Reg A+, and Reg S exempt offerings. We manage investor solicitation, subscription documentation, suitability determination, and closing mechanics under applicable statutory frameworks.',
  },
  {
    title: 'Investor Qualification & Onboarding',
    body: 'Comprehensive accredited investor verification, AML/KYC compliance, sanctions screening, and suitability profiling. Every investor undergoes a controlled qualification pipeline before gaining access to offering materials.',
  },
  {
    title: 'Subscription Administration',
    body: 'Automated subscription processing with regulatory hold periods, escrow coordination, funding confirmation, and digital agreement execution. Full audit trail from subscription initiation through final allocation.',
  },
  {
    title: 'Cap Table & Position Management',
    body: 'Dual-record cap table maintenance with blockchain-mirrored positions. Transfer restriction enforcement, lock-up period tracking, and real-time position reporting across all active offerings.',
  },
  {
    title: 'Compliance Infrastructure',
    body: 'Policy-gated operations with rule-engine evaluation on every material transaction. Automated transfer restriction checks, Blue Sky compliance, beneficial ownership tracking, and operator review workflows.',
  },
  {
    title: 'Settlement & Custody Coordination',
    body: 'Multi-rail settlement across ACH, wire, and stablecoin channels with institutional custody integration. Reconciliation engine ensures ledger consistency between legal records and on-chain state.',
  },
] as const

const MARKET_FOCUS = [
  {
    label: 'Private Equity',
    desc: 'Fund interests, LP units, and direct company equity placements under Reg D exemptions.',
  },
  {
    label: 'Real Assets',
    desc: 'Tokenized commercial real estate, infrastructure projects, and natural resource interests.',
  },
  {
    label: 'Debt Instruments',
    desc: 'Private credit, revenue-share notes, convertible instruments, and structured income products.',
  },
  {
    label: 'Digital Securities',
    desc: 'Natively digital private securities with on-chain settlement and programmable compliance.',
  },
] as const

export default function BrokerDealerHomePage() {
  return (
    <main style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 2rem' }}>
      {/* Hero */}
      <header style={{ marginBottom: '5rem' }}>
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
          Broker-Dealer Services
        </p>
        <h1
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.25rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            marginBottom: '1.5rem',
          }}
        >
          Institutional-Grade
          <br />
          Private Securities Placement
        </h1>
        <p
          style={{
            maxWidth: 620,
            fontSize: '1.1rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
          }}
        >
          A regulated, technology-driven broker-dealer operation built for the
          issuance, distribution, and lifecycle management of exempt private
          securities across equity, debt, and digital asset structures.
        </p>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '2.5rem' }}>
          <Link
            href="/services"
            style={{
              background: 'var(--color-accent)',
              color: '#fff',
              padding: '0.75rem 1.75rem',
              borderRadius: 6,
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-primary)',
              padding: '0.75rem 1.75rem',
              borderRadius: 6,
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
            }}
          >
            Schedule Consultation
          </Link>
        </div>
      </header>

      {/* Core Services */}
      <section style={{ marginBottom: '5rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            marginBottom: '2rem',
          }}
        >
          Core Services
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1px',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          {CORE_SERVICES.map((svc) => (
            <div
              key={svc.title}
              style={{
                padding: '2rem',
                background: 'var(--color-surface)',
              }}
            >
              <h3
                style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: '0.75rem',
                  color: 'var(--color-text-primary)',
                }}
              >
                {svc.title}
              </h3>
              <p
                style={{
                  fontSize: '0.85rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {svc.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Market Focus */}
      <section style={{ marginBottom: '5rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            marginBottom: '2rem',
          }}
        >
          Market Focus
        </h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {MARKET_FOCUS.map((m) => (
            <div
              key={m.label}
              style={{
                padding: '1.5rem',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 8,
              }}
            >
              <h3
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  marginBottom: '0.5rem',
                  color: 'var(--color-gold)',
                }}
              >
                {m.label}
              </h3>
              <p
                style={{
                  fontSize: '0.825rem',
                  color: 'var(--color-text-secondary)',
                  lineHeight: 1.7,
                }}
              >
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Technology Section */}
      <section style={{ marginBottom: '4rem' }}>
        <h2
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--color-text-secondary)',
            marginBottom: '2rem',
          }}
        >
          Technology Infrastructure
        </h2>
        <div
          style={{
            padding: '2.5rem',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
          }}
        >
          <p style={{ fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Every broker-dealer operation runs on UnyKorn&apos;s institutional platform stack:
            policy-gated write operations, append-only audit logs, dual-ledger position tracking,
            and automated compliance workflows. The system is designed for regulatory auditability
            at every layer.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {[
              'Policy Engine',
              'Audit Trail',
              'Cap Table Ledger',
              'Compliance Automation',
              'Multi-Rail Settlement',
              'IPFS Document Store',
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.75rem',
                  padding: '0.35rem 0.9rem',
                  borderRadius: 4,
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          textAlign: 'center',
          padding: '3rem 2rem',
          border: '1px solid var(--color-border)',
          borderRadius: 8,
          background: 'var(--color-surface)',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>
          Ready to Launch an Offering?
        </h2>
        <p
          style={{
            color: 'var(--color-text-secondary)',
            marginBottom: '2rem',
            maxWidth: 480,
            margin: '0 auto 2rem',
          }}
        >
          From initial structuring through investor closing and cap table allocation,
          our operations team manages the full lifecycle.
        </p>
        <Link
          href="/contact"
          style={{
            background: 'var(--color-accent)',
            color: '#fff',
            padding: '0.75rem 2rem',
            borderRadius: 6,
            fontWeight: 600,
            fontSize: '0.9rem',
            textDecoration: 'none',
          }}
        >
          Get Started
        </Link>
      </section>
    </main>
  )
}
