import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operations',
  description: 'Operational processes, workflows, and execution standards for broker-dealer operations.',
}

const OPS_AREAS = [
  {
    title: 'Offering Lifecycle Management',
    status: 'Active',
    procedures: [
      { step: 'Issuer Intake', desc: 'Entity verification, beneficial ownership identification, platform agreement execution, and issuer onboarding case creation.' },
      { step: 'Offering Structuring', desc: 'Security type selection, exemption determination, pricing mechanics, allocation methodology, and document preparation.' },
      { step: 'Regulatory Filing', desc: 'Form D filing, blue sky notice filings, state fee coordination, and filing confirmation tracking.' },
      { step: 'Distribution', desc: 'Investor channel activation, qualification management, offering room access control, and subscription processing.' },
      { step: 'Closing & Allocation', desc: 'Minimum raise confirmation, subscription acceptance finalization, escrow release, cap table recording, and investor notification.' },
      { step: 'Post-Close', desc: 'Certificate issuance, position confirmation, transfer agent recording, and ongoing reporting setup.' },
    ],
  },
  {
    title: 'Investor Qualification Pipeline',
    status: 'Active',
    procedures: [
      { step: 'Registration', desc: 'Account creation, email verification, and initial profile collection.' },
      { step: 'Identity Verification', desc: 'Government ID verification, liveness check, document extraction, and AML watchlist screening via KYC provider.' },
      { step: 'Accreditation', desc: 'Income/net worth verification, professional certification validation, or entity qualification — method depends on exemption type.' },
      { step: 'Suitability Assessment', desc: 'Investment experience evaluation, risk tolerance profiling, and concentration analysis.' },
      { step: 'Sanctions Screening', desc: 'OFAC SDN list screening, PEP identification, adverse media checks. Automated rescreening on 30-day cadence.' },
      { step: 'Approval', desc: 'Operator review of complete investor compliance profile, qualification determination, and access provisioning.' },
    ],
  },
  {
    title: 'Subscription Processing',
    status: 'Active',
    procedures: [
      { step: 'Eligibility Gate', desc: 'Policy engine evaluates investor status (KYC, accreditation, sanctions, suitability) and offering constraints (jurisdiction, limits).' },
      { step: 'Document Execution', desc: 'Subscription agreement presentation, investor acknowledgements, risk disclosure acceptance, and digital signature capture.' },
      { step: 'Funding', desc: 'Funding instruction generation, payment channel selection (ACH/wire/stablecoin), and payment confirmation tracking.' },
      { step: 'Operator Review', desc: 'Review case creation, SLA-gated queue management, compliance officer evaluation, and approval/rejection/escalation decision.' },
      { step: 'Allocation', desc: 'Position creation, cap table entry recording, token minting (if applicable), and settlement confirmation.' },
    ],
  },
  {
    title: 'Transfer & Secondary Operations',
    status: 'Planned',
    procedures: [
      { step: 'Transfer Request', desc: 'Holder-initiated transfer request with recipient identification, compliance pre-check, and approval workflow.' },
      { step: 'Compliance Evaluation', desc: 'Transfer restriction check (Rule 144, lock-ups, ROFR), recipient qualification verification, and policy engine evaluation.' },
      { step: 'Execution', desc: 'Position update on both ledger layers, transfer agent notification, and audit event recording.' },
    ],
  },
  {
    title: 'Corporate Actions Processing',
    status: 'Planned',
    procedures: [
      { step: 'Distribution Events', desc: 'Dividend and return-of-capital distributions with record date snapshots and payment processing.' },
      { step: 'Structural Events', desc: 'Stock splits, reverse splits, conversions, and forced redemptions with cap table recalculation.' },
      { step: 'Communication', desc: 'Investor notification, document distribution, and action confirmation tracking.' },
    ],
  },
] as const

export default function OperationsPage() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 2rem' }}>
      <header style={{ marginBottom: '3rem' }}>
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
          Operations
        </p>
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          Operational Standards & Procedures
        </h1>
        <p style={{ maxWidth: 620, color: 'var(--color-text-secondary)', fontSize: '1rem' }}>
          Every broker-dealer operation follows documented procedures with full audit
          traceability. Below are the core operational workflows and their current status.
        </p>
      </header>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {OPS_AREAS.map((area) => (
          <section
            key={area.title}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 8,
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <h2 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{area.title}</h2>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '0.2rem 0.65rem',
                  borderRadius: 4,
                  fontWeight: 600,
                  fontFamily: 'var(--font-mono)',
                  background: area.status === 'Active' ? '#22c55e18' : '#f59e0b18',
                  color: area.status === 'Active' ? '#22c55e' : '#f59e0b',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {area.status}
              </span>
            </div>
            <div>
              {area.procedures.map((proc, i) => (
                <div
                  key={proc.step}
                  style={{
                    display: 'flex',
                    gap: '1.25rem',
                    padding: '1.25rem 2rem',
                    borderBottom: i < area.procedures.length - 1 ? '1px solid var(--color-border)' : 'none',
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 28,
                      height: 28,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: '50%',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      background: 'var(--color-accent-dim)',
                      color: 'var(--color-accent)',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {i + 1}
                  </span>
                  <div>
                    <p style={{ fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.25rem' }}>
                      {proc.step}
                    </p>
                    <p style={{ fontSize: '0.825rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>
                      {proc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
