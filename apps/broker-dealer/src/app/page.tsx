import Link from 'next/link'

const PROOF_POINTS = [
  {
    title: 'Issuer Governance',
    body: 'Board-level approvals, issuance controls, governance workflow, and audit-ready operational discipline.',
  },
  {
    title: 'Securities Workflow',
    body: 'Reg D / Reg S orchestration, investor qualification, suitability capture, and subscription control.',
  },
  {
    title: 'Transfer Control',
    body: 'Wallet allowlists, transfer restrictions, restriction status checks, and compliance-gated movement.',
  },
  {
    title: 'Reserve Intelligence',
    body: 'Collateral evidence, reserve documentation, pledge visibility, disclosure discipline, and proof workflow.',
  },
  {
    title: 'Valuation & Reporting',
    body: 'Modeled economics, investor reporting, disclosure packs, and post-close servicing visibility.',
  },
  {
    title: 'Treasury & Settlement',
    body: 'Subscription intake, reconciliation, custody-aware settlement, token delivery, and operating ledger support.',
  },
] as const

const DIGAU_VALIDATE = [
  'Real-asset digital securities can be structured and sold through private placement channels.',
  'Structured rights can be wrapped into digital form for institutional workflow and capital formation.',
  'The market can support compliant digital security products when positioned as securities, not retail crypto.',
] as const

const DIGAU_EXPOSES = [
  'Restricted transferability reduces distribution scale and creates operational friction.',
  'Investor eligibility remains narrow under exemption-based frameworks.',
  'Asset-backing narratives require stronger proof, reporting, and disclosure discipline.',
  'Valuation support does not automatically create practical liquidity.',
  'Third-party process dependency creates latency and control gaps.',
] as const

const ARCHITECTURE = [
  'Issuer Governance Console',
  'Securities Onboarding Engine',
  'Transfer Control Registry',
  'Reserve Proof & Collateral Intelligence',
  'Valuation & Reporting Engine',
  'Treasury, Custody & Settlement',
  'Investor Portal',
  'Secondary-Readiness Layer',
  'Public Disclosure Control',
] as const

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
      <section style={{ padding: '5rem 0 3rem', textAlign: 'center' }}>
        <div
          style={{
            display: 'inline-block',
            background: 'rgba(212,168,67,0.12)',
            border: '1px solid rgba(212,168,67,0.3)',
            borderRadius: 4,
            padding: '0.35rem 0.9rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            color: 'var(--color-gold)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginBottom: '1.75rem',
          }}
        >
          Dignity UnyKorn Digital Securities OS
        </div>

        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 800, lineHeight: 1.08, letterSpacing: '-0.03em', marginBottom: '1.4rem' }}>
          Build digital securities that can <br />
          <span style={{ color: 'var(--color-accent)' }}>survive scrutiny, not just sell a story</span>
        </h1>

        <p style={{ fontSize: '1.08rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: 860, margin: '0 auto 2.4rem' }}>
          Dignity UnyKorn is a broker-dealer-grade operating layer for restricted real-asset offerings.
          It brings together issuer governance, securities workflow orchestration, investor qualification,
          transfer controls, reserve intelligence, valuation reporting, and post-close servicing in one system.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/platform" style={{ background: 'var(--color-gold)', color: '#0a0a0f', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            REVIEW PLATFORM
          </Link>
          <Link href="/digau-case" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            DIGAU CASE STUDY
          </Link>
          <Link href="/contact" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>
            CONTACT TEAM
          </Link>
        </div>
      </section>

      <section style={{ marginBottom: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
        {[
          {
            title: 'Most token deals are weak on securities workflow',
            body: 'The offering may exist, but qualification, transfer restriction enforcement, and post-close operations are fragmented.',
          },
          {
            title: 'Most asset-backed stories are weak on proof and disclosure',
            body: 'Backing claims, reserve evidence, and investor communications often drift apart under pressure.',
          },
          {
            title: 'Most offerings are not operationally ready for scale',
            body: 'Without registry, reporting, and servicing discipline, distribution and trust both break down.',
          },
        ].map((item) => (
          <div key={item.title} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.4rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '0.55rem', fontSize: '0.95rem' }}>{item.title}</div>
            <div style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>{item.body}</div>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
          What We Solve
        </p>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.75rem' }}>
          The operating system behind the security
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {PROOF_POINTS.map((item) => (
            <div key={item.title} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.35rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.45rem', fontSize: '0.95rem' }}>{item.title}</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '4rem', background: '#0c0c10', border: '1px solid #141420', borderRadius: 8, padding: '2rem 2.2rem' }}>
        <p style={{ fontSize: '0.72rem', color: '#c9a84c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', marginBottom: '0.55rem' }}>
          DIGau Case Study
        </p>
        <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#fff', marginBottom: '1.4rem', letterSpacing: '-0.02em' }}>
          DIGau: Proof of demand. Proof of friction.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
          <div>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: '0.7rem' }}>What it validates</div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {DIGAU_VALIDATE.map((item) => (
                <div key={item} style={{ fontSize: '0.84rem', color: '#c0c0d0', lineHeight: 1.6, padding: '0.65rem 0.8rem', background: '#050508', border: '1px solid #141420', borderRadius: 4 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, color: '#fff', marginBottom: '0.7rem' }}>What it exposes</div>
            <div style={{ display: 'grid', gap: '0.5rem' }}>
              {DIGAU_EXPOSES.map((item) => (
                <div key={item} style={{ fontSize: '0.84rem', color: '#c0c0d0', lineHeight: 1.6, padding: '0.65rem 0.8rem', background: '#050508', border: '1px solid #141420', borderRadius: 4 }}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ padding: '0.95rem 1rem', background: 'rgba(59,130,246,0.08)', border: '1px solid rgba(59,130,246,0.2)', borderRadius: 6, color: '#bfdbfe', fontSize: '0.86rem', lineHeight: 1.65 }}>
          The answer is not another isolated token. The answer is the operating system behind it.
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
          Platform Architecture
        </p>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.5rem' }}>
          Core modules
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '0.9rem' }}>
          {ARCHITECTURE.map((item) => (
            <div key={item} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1rem 1.1rem', fontSize: '0.88rem', fontWeight: 600 }}>
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
        {[
          {
            title: 'Boards need controls',
            body: 'Governance, approvals, issue visibility, and audit-ready workflow are not optional.',
          },
          {
            title: 'Counsel needs disciplined process',
            body: 'Disclosure alignment, transfer logic, investor status, and document control need to hold up under review.',
          },
          {
            title: 'Broker-dealers need repeatable execution',
            body: 'Qualification, subscription, closing, and post-close operations must run as a system, not a spreadsheet.',
          },
          {
            title: 'Issuers need trust and visibility',
            body: 'Proof, reporting, servicing, and communication discipline are what let real offerings scale.',
          },
        ].map((item) => (
          <div key={item.title} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.3rem' }}>
            <div style={{ fontWeight: 700, marginBottom: '0.45rem', fontSize: '0.95rem' }}>{item.title}</div>
            <div style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{item.body}</div>
          </div>
        ))}
      </section>

      <section style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>
          Final Positioning
        </p>
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.9rem' }}>
          Run it like a security. Not like a token campaign.
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: 820, margin: '0 auto 1.6rem' }}>
          Dignity UnyKorn is built to convert one-off digital asset narratives into repeatable,
          compliant, institutionally credible capital formation infrastructure.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: 'var(--color-gold)', color: '#0a0a0f', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            BOOK STRATEGY SESSION
          </Link>
          <Link href="/downloads" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            DOWNLOAD BRIEF
          </Link>
        </div>
      </section>
    </main>
  )
}