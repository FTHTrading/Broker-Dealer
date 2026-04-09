const CARD = {
  background: '#0c0c10',
  border: '1px solid var(--color-border)',
  borderRadius: 6,
  padding: '1.5rem 1.75rem',
} as const

const MONO: React.CSSProperties = { fontFamily: 'var(--font-mono)' }

const INVESTORS = [
  { name: 'Blackwood Capital LP', type: 'Institutional', tier: 'Qualified Purchaser', kyc: 'VERIFIED', accred: 'VERIFIED', regD: true, regS: true, netWorth: '$50M+', totalInvested: '$1,950,000', added: '2024-11-12' },
  { name: 'Nevada State Pension Fund', type: 'Pension / Gov', tier: 'Qualified Purchaser', kyc: 'VERIFIED', accred: 'VERIFIED', regD: true, regS: false, netWorth: 'Institutional', totalInvested: '$1,200,000', added: '2024-12-03' },
  { name: 'Meridian Family Office', type: 'Family Office', tier: 'Qualified Purchaser', kyc: 'VERIFIED', accred: 'VERIFIED', regD: true, regS: true, netWorth: '$25M+', totalInvested: '$850,000', added: '2025-01-08' },
  { name: 'Atlas Ventures Fund II', type: 'VC / PE', tier: 'Accredited Investor', kyc: 'VERIFIED', accred: 'VERIFIED', regD: true, regS: false, netWorth: '$5M+', totalInvested: '$400,000', added: '2025-02-15' },
  { name: 'Southfield Family Trust', type: 'HNWI', tier: 'Accredited Investor', kyc: 'VERIFIED', accred: 'VERIFIED', regD: true, regS: true, netWorth: '$5M+', totalInvested: '$175,000', added: '2025-03-01' },
  { name: 'Park Avenue Holdings', type: 'Family Office', tier: 'Qualified Purchaser', kyc: 'VERIFIED', accred: 'VERIFIED', regD: true, regS: true, netWorth: '$30M+', totalInvested: '$620,000', added: '2025-03-12' },
  { name: 'Geneva RE Capital', type: 'Institutional', tier: 'Qualified Purchaser', kyc: 'UNDER REVIEW', accred: 'PENDING', regD: true, regS: true, netWorth: 'TBD', totalInvested: '$0', added: '2025-06-01' },
  { name: 'Harrison Digital Assets', type: 'Institutional', tier: 'Accredited Investor', kyc: 'UNDER REVIEW', accred: 'PENDING', regD: true, regS: false, netWorth: 'TBD', totalInvested: '$0', added: '2025-06-02' },
  { name: 'Cascade Growth Partners', type: 'VC / PE', tier: 'Accredited Investor', kyc: 'PENDING KYC', accred: 'NOT STARTED', regD: false, regS: false, netWorth: 'N/A', totalInvested: '$0', added: '2025-06-04' },
]

const TIER_DATA = [
  { label: 'Qualified Purchaser ($5M+ NW)', count: 5, amt: '$4.62M', color: '#c9a84c', pct: 60 },
  { label: 'Institutional', count: 2, amt: '$3.15M', color: 'var(--color-accent-bright)', pct: 50 },
  { label: 'Accredited Investor', count: 4, amt: '$575K', color: 'var(--color-chain)', pct: 35 },
  { label: 'Family Office', count: 2, amt: '$1.47M', color: 'var(--color-stable)', pct: 28 },
]

const PIPELINE = [
  { status: 'PENDING KYC', count: 3, desc: 'Awaiting document submission', color: 'var(--color-warning)' },
  { status: 'UNDER REVIEW', count: 2, desc: 'Compliance team reviewing docs', color: 'var(--color-stable)' },
  { status: 'ACCREDITATION CHECK', count: 1, desc: 'Pending accred. verification', color: 'var(--color-accent-bright)' },
  { status: 'SUBSCRIPTION DOCS', count: 4, desc: 'Docs generated, awaiting sigs', color: '#c9a84c' },
  { status: 'VERIFIED', count: 1847, desc: 'Fully onboarded & eligible', color: 'var(--color-chain)' },
]

function kycColor(s: string) {
  if (s === 'VERIFIED') return { color: 'var(--color-chain)', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' }
  if (s === 'UNDER REVIEW') return { color: 'var(--color-stable)', bg: 'rgba(14,165,233,0.1)', border: 'rgba(14,165,233,0.25)' }
  return { color: 'var(--color-warning)', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' }
}

export default function InvestorPortalPage() {
  return (
    <div style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-sans)' }}>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ ...MONO, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-gold, #c9a84c)', marginBottom: '0.6rem' }}>
          CAPITAL MARKETS / INVESTOR PORTAL
        </div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: '0.3rem' }}>
          Investor Registry
        </h1>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
          Qualified &amp; accredited investor management — KYC/AML, accreditation verification, and subscription tracking
        </p>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
        {[
          { label: 'Total Investors', value: '1,847' },
          { label: 'Total Invested', value: '$5.19M' },
          { label: 'KYC Verified', value: '1,838' },
          { label: 'Pending Onboard', value: '9' },
          { label: 'Avg Investment', value: '$2,810' },
        ].map((s) => (
          <div key={s.label} style={{ ...CARD, padding: '1rem 1.25rem' }}>
            <div style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
              {s.label}
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, ...MONO, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1 }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Two columns: tier breakdown + pipeline */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.25rem' }}>

        {/* Investor tier breakdown */}
        <div style={CARD}>
          <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff', marginBottom: '0.15rem' }}>Investor Tier Breakdown</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>By qualification level</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
            {TIER_DATA.map((t) => (
              <div key={t.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '0.3rem' }}>
                  <span style={{ color: t.color, fontWeight: 600 }}>{t.label}</span>
                  <span style={{ ...MONO, fontWeight: 700, color: '#fff' }}>{t.amt}</span>
                </div>
                <div style={{ height: 3, background: 'var(--color-border)', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${t.pct}%`, background: t.color, borderRadius: 2 }} />
                </div>
                <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem', ...MONO }}>
                  {t.count} investors
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KYC/AML pipeline */}
        <div style={CARD}>
          <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff', marginBottom: '0.15rem' }}>KYC / AML Onboarding Pipeline</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>Investor verification stages</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {PIPELINE.map((p) => (
              <div
                key={p.status}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.625rem 0.75rem',
                  background: '#050508',
                  border: '1px solid var(--color-border)',
                  borderRadius: 4,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: p.color, display: 'inline-block', flexShrink: 0 }} />
                  <div>
                    <div style={{ ...MONO, fontSize: '0.65rem', fontWeight: 700, color: p.color }}>{p.status}</div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', marginTop: '0.1rem' }}>{p.desc}</div>
                  </div>
                </div>
                <div style={{ ...MONO, fontSize: '1.1rem', fontWeight: 800, color: '#fff', marginLeft: '1rem' }}>{p.count}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Investor Registry Table */}
      <div style={CARD}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff', marginBottom: '0.15rem' }}>Investor Registry</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>Qualified &amp; accredited investor records — Reg D &amp; Reg S eligibility shown</div>
          </div>
          <button
            style={{
              padding: '0.5rem 1rem',
              background: 'rgba(37,99,235,0.12)',
              border: '1px solid rgba(37,99,235,0.3)',
              borderRadius: 4,
              color: 'var(--color-accent-bright)',
              fontSize: '0.65rem',
              fontWeight: 700,
              cursor: 'pointer',
              ...MONO,
              letterSpacing: '0.06em',
            }}
          >
            + ADD INVESTOR
          </button>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 1100 }}>
            <thead>
              <tr>
                {['Investor Name', 'Type', 'Tier', 'KYC/AML', 'Accreditation', 'Reg D', 'Reg S', 'Est. Net Worth', 'Total Invested', 'Added'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '0 0.625rem 0.625rem', fontSize: '0.575rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', borderBottom: '1px solid var(--color-border)', whiteSpace: 'nowrap' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {INVESTORS.map((inv, i) => {
                const kyc = kycColor(inv.kyc)
                const ac = kycColor(inv.accred)
                const bd = i < INVESTORS.length - 1 ? '1px solid #0e0e18' : 'none'
                return (
                  <tr key={inv.name}>
                    <td style={{ padding: '0.625rem', borderBottom: bd, fontWeight: 600, fontSize: '0.8rem', whiteSpace: 'nowrap' }}>{inv.name}</td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, fontSize: '0.72rem', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{inv.type}</td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, fontSize: '0.72rem', color: 'var(--color-warning)', fontWeight: 600, whiteSpace: 'nowrap' }}>{inv.tier}</td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, whiteSpace: 'nowrap' }}>
                      <span style={{ ...MONO, fontSize: '0.58rem', fontWeight: 700, padding: '0.12rem 0.35rem', borderRadius: 3, background: kyc.bg, border: `1px solid ${kyc.border}`, color: kyc.color }}>
                        {inv.kyc}
                      </span>
                    </td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, whiteSpace: 'nowrap' }}>
                      <span style={{ ...MONO, fontSize: '0.58rem', fontWeight: 700, padding: '0.12rem 0.35rem', borderRadius: 3, background: ac.bg, border: `1px solid ${ac.border}`, color: ac.color }}>
                        {inv.accred}
                      </span>
                    </td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, textAlign: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: inv.regD ? 'var(--color-chain)' : 'var(--color-text-muted)' }}>{inv.regD ? '✓' : '—'}</span>
                    </td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, textAlign: 'center' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: inv.regS ? 'var(--color-chain)' : 'var(--color-text-muted)' }}>{inv.regS ? '✓' : '—'}</span>
                    </td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, ...MONO, fontSize: '0.72rem', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{inv.netWorth}</td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, ...MONO, fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{inv.totalInvested}</td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, ...MONO, fontSize: '0.68rem', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{inv.added}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regulatory notice */}
      <div style={{ marginTop: '1.5rem', padding: '0.875rem 1.25rem', background: '#030306', border: '1px solid var(--color-border)', borderRadius: 4 }}>
        <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, ...MONO }}>
          INVESTOR RECORDS — CONFIDENTIAL &amp; REGULATED. All investor data is maintained in accordance with SEC Rules 501-506 of Regulation D, Regulation S, and applicable FINRA requirements.
          Accreditation must be verified by a licensed attorney, CPA, registered broker-dealer, or registered investment adviser. KYC/AML procedures are conducted per FinCEN guidance and Bank
          Secrecy Act (BSA) requirements. Unauthorized access to investor records is prohibited under 15 U.S.C. § 78a et seq.
        </div>
      </div>
    </div>
  )
}
