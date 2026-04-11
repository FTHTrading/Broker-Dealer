import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Reserve Proof & Collateral Intelligence',
  description: 'Reserve documentation, collateral proof architecture, claim evidence, and disclosure controls for restricted real-asset offerings.',
}

const PROOF_LAYERS = [
  {
    title: 'Claim Documentation',
    color: '#c9a84c',
    description: 'The first layer of reserve proof is documenting what the issuer claims to hold, pledge, or control.',
    items: [
      'Asset description: type, quantity, location, custodian, and legal status.',
      'Pledge agreements: signed documentation linking specific assets to the offering.',
      'Title evidence: deeds, certificates, assay reports, or custody receipts.',
      'Chain of custody: documented transfer history from acquisition to current holding.',
      'Encumbrance disclosure: liens, UCC filings, competing claims, and priority status.',
    ],
  },
  {
    title: 'Independent Verification',
    color: '#2563eb',
    description: 'Claims without verification are narratives. This layer converts claims into evidence.',
    items: [
      'Third-party auditor attestation: independent review of reserve claims.',
      'Custodian confirmation: direct custody receipts from identified holding institutions.',
      'Assay and grading: independent quality and quantity confirmation for physical assets.',
      'Lien search: UCC filing verification, title search, and encumbrance confirmation.',
      'Timestamp and hash: cryptographic anchoring of verification documents to immutable record.',
    ],
  },
  {
    title: 'Ongoing Monitoring',
    color: '#10b981',
    description: 'Reserve proof is not a one-time event. Status must be maintained and reported continuously.',
    items: [
      'Periodic re-verification: scheduled custodian confirmations and auditor reviews.',
      'Material change alerts: automatic notification when reserve status changes.',
      'NAV recalculation: asset value updates reflected in reporting and investor communications.',
      'Collateral ratio tracking: coverage ratios monitored against offering terms.',
      'Exception handling: documented process for reserve shortfalls, disputed claims, or custody changes.',
    ],
  },
  {
    title: 'Disclosure Controls',
    color: '#8b5cf6',
    description: 'What investors see, when they see it, and how it is formatted must be controlled and auditable.',
    items: [
      'Investor-facing reserve reports: formatted, versioned, and delivered on schedule.',
      'Material event disclosures: triggered by predefined conditions, not discretionary timing.',
      'Document access control: role-based visibility for different investor classes and regulators.',
      'Audit trail: every disclosure, delivery, and acknowledgment recorded.',
      'Regulatory submission readiness: formatted for SEC, FINRA, or other authority requirements.',
    ],
  },
] as const

const DIGAU_COMPARISON = [
  {
    aspect: 'Gold quantity',
    digau: '6,429,396 oz pledged',
    platform: 'Documented pledge with custodian confirmation and periodic re-verification.',
  },
  {
    aspect: 'Vaulted status',
    digau: '0 oz independently verified as vaulted',
    platform: 'Independent custody receipt required. Custodian identity and holding confirmation documented.',
  },
  {
    aspect: 'Lien / encumbrance',
    digau: 'Not publicly disclosed',
    platform: 'UCC filing search, title clear confirmation, and encumbrance disclosure required before issuance.',
  },
  {
    aspect: 'Valuation methodology',
    digau: '$10.11 OLV from modeled economics',
    platform: 'Methodology documented, assumptions disclosed, and investor-visible with update triggers.',
  },
  {
    aspect: 'Investor reporting',
    digau: 'Limited post-close visibility',
    platform: 'Scheduled reserve reports, NAV updates, and material event disclosures through investor portal.',
  },
  {
    aspect: 'Regulatory readiness',
    digau: 'Dependent on BD/TA processes',
    platform: 'Pre-formatted disclosure packages for SEC, FINRA, and state regulators.',
  },
] as const

export default function ReserveProofPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
      <section style={{ padding: '4rem 0 2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
          Reserve Proof
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
          Collateral intelligence, not collateral narrative
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: 820 }}>
          Asset-backed securities require more than a backing story. They require documented claims,
          independent verification, ongoing monitoring, and controlled disclosure. This is the
          proof architecture.
        </p>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {PROOF_LAYERS.map((layer) => (
            <div key={layer.title} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: `3px solid ${layer.color}`, borderRadius: 8, padding: '1.5rem 1.6rem' }}>
              <div style={{ fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.4rem' }}>{layer.title}</div>
              <div style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>{layer.description}</div>
              <div style={{ display: 'grid', gap: '0.4rem' }}>
                {layer.items.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ color: layer.color, flexShrink: 0, marginTop: '0.15rem' }}>&#8250;</span>
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
          DIGau comparison: what changes with the platform
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem', maxWidth: 780 }}>
          Using DIGau as the reference case, here is what the reserve proof layer adds to each
          dimension of the collateral story.
        </p>
        <div style={{ background: '#0c0c10', border: '1px solid #141420', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', gap: '1px', background: '#141420' }}>
            <div style={{ background: '#0a0a10', padding: '0.8rem 1rem', fontWeight: 700, fontSize: '0.78rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Aspect</div>
            <div style={{ background: '#0a0a10', padding: '0.8rem 1rem', fontWeight: 700, fontSize: '0.78rem', color: 'var(--color-warning)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>DIGau Today</div>
            <div style={{ background: '#0a0a10', padding: '0.8rem 1rem', fontWeight: 700, fontSize: '0.78rem', color: 'var(--color-success)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>With Platform</div>
          </div>
          {DIGAU_COMPARISON.map((row) => (
            <div key={row.aspect} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1.5fr', gap: '1px', background: '#141420' }}>
              <div style={{ background: '#0c0c10', padding: '0.75rem 1rem', fontSize: '0.84rem', fontWeight: 600 }}>{row.aspect}</div>
              <div style={{ background: '#0c0c10', padding: '0.75rem 1rem', fontSize: '0.82rem', color: '#c0c0d0' }}>{row.digau}</div>
              <div style={{ background: '#0c0c10', padding: '0.75rem 1rem', fontSize: '0.82rem', color: '#c0c0d0' }}>{row.platform}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '2rem 2.2rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.75rem' }}>
          The documentation room
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem', maxWidth: 780 }}>
          Every offering maintains a structured documentation room with controlled access,
          versioned documents, and auditable delivery trails.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '0.75rem' }}>
          {[
            'Offering memorandum',
            'Subscription agreements',
            'Pledge / collateral documentation',
            'Custodian confirmations',
            'Assay / appraisal reports',
            'UCC filing evidence',
            'Title / deed records',
            'Independent audit reports',
            'Investor qualification records',
            'Transfer restriction notices',
            'Distribution records',
            'Regulatory filings',
          ].map((doc) => (
            <div key={doc} style={{ padding: '0.7rem 0.85rem', background: '#050508', border: '1px solid #141420', borderRadius: 4, fontSize: '0.82rem', color: '#c0c0d0' }}>
              {doc}
            </div>
          ))}
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '2rem 0 1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/reporting" style={{ background: 'var(--color-gold)', color: '#0a0a0f', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            REPORTING ENGINE
          </Link>
          <Link href="/workflow" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            SECURITIES WORKFLOW
          </Link>
          <Link href="/contact" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>
            CONTACT TEAM
          </Link>
        </div>
      </section>
    </main>
  )
}
