import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Securities Workflow',
  description: 'Investor onboarding, qualification tracks, transfer restriction logic, and issuance workflow for restricted digital securities.',
}

const WORKFLOW_STAGES = [
  {
    stage: '01',
    title: 'Investor Identification',
    color: '#2563eb',
    items: [
      'Investor submits interest through the platform or broker-dealer channel.',
      'Identity verification initiated — KYC for individuals, KYB for entities.',
      'Government ID, beneficial ownership, and address verification collected.',
      'Sanctions screening: OFAC SDN, PEP lists, adverse media, ongoing monitoring.',
      'Identity record established in the authoritative legal registry.',
    ],
  },
  {
    stage: '02',
    title: 'Qualification & Suitability',
    color: '#c9a84c',
    items: [
      'Exemption routing: Reg D 506(b), Reg D 506(c), Reg S, or Reg A+ track selected.',
      'Accreditation verification: income, net worth, professional certification, or entity status.',
      'Suitability assessment: investment experience, risk tolerance, concentration limits.',
      'Qualified Institutional Buyer (QIB) or Qualified Purchaser (QP) status where applicable.',
      'Non-U.S. person verification and jurisdiction determination for Reg S investors.',
      'Qualification decision recorded with full audit trail and supporting documentation.',
    ],
  },
  {
    stage: '03',
    title: 'Subscription & Documentation',
    color: '#10b981',
    items: [
      'Subscription agreement generated with investor-specific terms and allocations.',
      'Private Placement Memorandum (PPM) or Offering Memorandum delivered.',
      'Risk disclosures, anti-dilution provisions, and transfer restriction notices presented.',
      'Electronic signature capture with tamper-evident audit trail.',
      'Subscription payment received: wire, RLUSD, USDC, or approved stablecoin rail.',
      'Escrow or treasury ledger posting with reconciliation confirmation.',
    ],
  },
  {
    stage: '04',
    title: 'Allocation & Issuance',
    color: '#8b5cf6',
    items: [
      'Allocation determined based on subscription amount, offering structure, and oversubscription rules.',
      'Cap table updated in the authoritative legal registry.',
      'Wallet approval: investor wallet added to the approved trust line / allowlist.',
      'Token minted to approved wallet only — no open distribution.',
      'Issuance confirmation with transaction hash, token quantity, and restriction status.',
      'Form D / Form S filing updated if required by offering terms.',
    ],
  },
  {
    stage: '05',
    title: 'Transfer Control',
    color: '#ef4444',
    items: [
      'All transfers blocked by default — restriction is the starting state.',
      'Transfer request submitted through the platform by the holder.',
      'Off-chain compliance check: restriction status, lockup period, holding requirements.',
      'Counterparty verification: is the receiver on the approved allowlist?',
      'Transfer approved or denied with documented reasoning.',
      'On-chain execution only after off-chain approval — never the other way.',
      'Freeze and clawback controls available for regulatory action or corporate events.',
    ],
  },
  {
    stage: '06',
    title: 'Post-Close Servicing',
    color: '#0ea5e9',
    items: [
      'Ongoing investor reporting: distributions, NAV updates, corporate actions.',
      'Document delivery: tax forms, annual reports, updated offering materials.',
      'Re-verification cycles: accreditation refresh, sanctions re-screening.',
      'Distribution processing: profit participation, dividend, or yield distribution.',
      'Investor communication management: notices, disclosures, material event alerts.',
      'Ongoing compliance monitoring and exception handling.',
    ],
  },
] as const

const EXEMPTION_TRACKS = [
  {
    track: 'Reg D 506(b)',
    description: 'Up to 35 non-accredited investors, no general solicitation, self-certification accepted.',
    requirements: ['Investor questionnaire', 'Self-certification of status', 'Pre-existing relationship documentation'],
  },
  {
    track: 'Reg D 506(c)',
    description: 'Accredited investors only, general solicitation permitted, third-party verification required.',
    requirements: ['Income/net worth verification', 'Professional certification check', 'Third-party accreditation letter'],
  },
  {
    track: 'Reg S',
    description: 'Non-U.S. persons, offshore transaction, no directed selling effort into the U.S.',
    requirements: ['Non-U.S. person verification', 'Jurisdiction determination', 'Distribution compliance period tracking'],
  },
  {
    track: 'Reg A+',
    description: 'SEC-qualified offering, Tier 1 ($20M) or Tier 2 ($75M), retail-eligible with investment limits.',
    requirements: ['SEC Form 1-A filing', 'Audited financials', 'Ongoing reporting obligations'],
  },
] as const

export default function WorkflowPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
      <section style={{ padding: '4rem 0 2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
          Securities Workflow
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
          From investor identification to post-close servicing
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: 820 }}>
          Every step in the lifecycle of a restricted digital security — from first contact through
          ongoing compliance — runs through the platform. The workflow is the product.
        </p>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {WORKFLOW_STAGES.map((stage) => (
            <div key={stage.stage} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: `3px solid ${stage.color}`, borderRadius: 8, padding: '1.5rem 1.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.85rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: stage.color, fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>
                  STAGE {stage.stage}
                </span>
                <span style={{ fontSize: '1.1rem', fontWeight: 700 }}>{stage.title}</span>
              </div>
              <div style={{ display: 'grid', gap: '0.4rem' }}>
                {stage.items.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ color: stage.color, flexShrink: 0, marginTop: '0.15rem' }}>&#8250;</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
          Exemption qualification tracks
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
          {EXEMPTION_TRACKS.map((track) => (
            <div key={track.track} style={{ background: '#0c0c10', border: '1px solid #141420', borderRadius: 8, padding: '1.3rem 1.4rem' }}>
              <div style={{ fontWeight: 800, fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-gold)' }}>{track.track}</div>
              <div style={{ fontSize: '0.84rem', color: '#c0c0d0', lineHeight: 1.6, marginBottom: '0.85rem' }}>{track.description}</div>
              <div style={{ display: 'grid', gap: '0.3rem' }}>
                {track.requirements.map((req) => (
                  <div key={req} style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', display: 'flex', gap: '0.4rem' }}>
                    <span style={{ color: 'var(--color-success)', flexShrink: 0 }}>&#10003;</span>
                    {req}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '2rem 2.2rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
          Transfer restriction logic
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: 780 }}>
          Transfers are restricted by default. The system checks every transfer request against the
          authoritative legal registry before any on-chain movement occurs.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
          {[
            { title: 'Restriction is the default', body: 'Tokens are non-transferable on issuance. Movement requires explicit platform approval.' },
            { title: 'Off-chain check first', body: 'Compliance verification happens before chain execution — never after.' },
            { title: 'Counterparty verification', body: 'Both sender and receiver must be approved on the registry and active allowlist.' },
            { title: 'Lockup enforcement', body: 'Holding period, distribution compliance, and restriction schedules are enforced automatically.' },
            { title: 'Freeze capability', body: 'Issuer can freeze individual positions or all positions when required by regulation or corporate event.' },
            { title: 'Clawback reserved', body: 'Regulated recovery through clawback is available when enabled before issuance and activated by authorized process.' },
          ].map((item) => (
            <div key={item.title} style={{ padding: '0.9rem 1rem', background: '#050508', border: '1px solid #141420', borderRadius: 4 }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>{item.title}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '2rem 0 1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/reserve-proof" style={{ background: 'var(--color-gold)', color: '#0a0a0f', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            RESERVE PROOF
          </Link>
          <Link href="/reporting" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            REPORTING ENGINE
          </Link>
          <Link href="/digau-case" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>
            DIGAU CASE STUDY
          </Link>
        </div>
      </section>
    </main>
  )
}
