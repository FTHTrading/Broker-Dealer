const CARD = {
  background: '#0c0c10',
  border: '1px solid var(--color-border)',
  borderRadius: 6,
  padding: '1.5rem 1.75rem',
} as const

const MONO: React.CSSProperties = { fontFamily: 'var(--font-mono)' }

const OFFERINGS = [
  {
    id: 'OFF-001',
    name: 'FTH Real Estate Fund I',
    token: 'FTHRE-01',
    type: 'Real Estate',
    regType: 'Reg D 506(c)',
    target: '$30,000,000',
    targetRaw: 30000000,
    raised: '$24,500,000',
    raisedRaw: 24500000,
    investors: 48,
    status: 'ACTIVE',
    closeDate: '2025-12-31',
    minInvest: '$250,000',
    yield: '9.2%',
    chain: 'Ethereum',
    formD: 'FILED',
    bluesky: 'COMPLIANT',
    token_issued: true,
  },
  {
    id: 'OFF-002',
    name: 'NRG Infrastructure VII',
    token: 'NRGX-07',
    type: 'Infrastructure',
    regType: 'Reg D 506(b)',
    target: '$25,000,000',
    targetRaw: 25000000,
    raised: '$18,200,000',
    raisedRaw: 18200000,
    investors: 31,
    status: 'ACTIVE',
    closeDate: '2025-10-15',
    minInvest: '$500,000',
    yield: '7.8%',
    chain: 'Polygon',
    formD: 'FILED',
    bluesky: 'PARTIAL',
    token_issued: true,
  },
  {
    id: 'OFF-003',
    name: 'Trade Finance Series III',
    token: 'TFIN-03',
    type: 'Trade Finance',
    regType: 'Reg S',
    target: '$15,000,000',
    targetRaw: 15000000,
    raised: '$11,000,000',
    raisedRaw: 11000000,
    investors: 22,
    status: 'ACTIVE',
    closeDate: '2025-09-30',
    minInvest: '$1,000,000',
    yield: '11.5%',
    chain: 'XRPL',
    formD: 'N/A',
    bluesky: 'N/A',
    token_issued: true,
  },
  {
    id: 'OFF-004',
    name: 'Commodity Basket II',
    token: 'CMDTY-02',
    type: 'Commodities',
    regType: 'Reg D 506(c)',
    target: '$12,000,000',
    targetRaw: 12000000,
    raised: '$8,700,000',
    raisedRaw: 8700000,
    investors: 19,
    status: 'ACTIVE',
    closeDate: '2025-11-01',
    minInvest: '$100,000',
    yield: '8.4%',
    chain: 'Apostle Chain',
    formD: 'FILED',
    bluesky: 'COMPLIANT',
    token_issued: true,
  },
  {
    id: 'OFF-005',
    name: 'FTH Real Estate Fund II',
    token: 'FTHRE-02',
    type: 'Real Estate',
    regType: 'Reg D 506(c)',
    target: '$40,000,000',
    targetRaw: 40000000,
    raised: '$15,900,000',
    raisedRaw: 15900000,
    investors: 27,
    status: 'FUNDRAISING',
    closeDate: '2026-03-31',
    minInvest: '$500,000',
    yield: '10.1%',
    chain: 'Ethereum',
    formD: 'FILED',
    bluesky: 'PENDING',
    token_issued: false,
  },
  {
    id: 'OFF-006',
    name: 'Private Equity Fund I',
    token: 'PVFM-01',
    type: 'Private Equity',
    regType: 'Reg D 506(b)',
    target: '$20,000,000',
    targetRaw: 20000000,
    raised: '$6,300,000',
    raisedRaw: 6300000,
    investors: 12,
    status: 'FUNDRAISING',
    closeDate: '2026-06-30',
    minInvest: '$250,000',
    yield: '14.0%',
    chain: 'Stellar',
    formD: 'PENDING',
    bluesky: 'NOT STARTED',
    token_issued: false,
  },
]

const REG_TYPES_DATA = [
  { label: 'Reg D 506(c)', desc: 'General solicitation OK · accredited investors only · verification required', count: 3, color: 'var(--color-accent-bright)' },
  { label: 'Reg D 506(b)', desc: 'No general solicitation · up to 35 sophisticated non-accredited investors', count: 2, color: 'var(--color-stable)' },
  { label: 'Reg S', desc: 'Offshore only · non-US persons · no EDGAR filing required', count: 1, color: 'var(--color-chain)' },
  { label: 'Reg A+ (Tier 2)', desc: 'Mini-IPO · up to $75M · general public · SEC qualification required', count: 0, color: '#c9a84c' },
]

function statusColor(s: string) {
  if (s === 'ACTIVE') return { color: 'var(--color-chain)', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' }
  if (s === 'FUNDRAISING') return { color: 'var(--color-accent-bright)', bg: 'rgba(37,99,235,0.1)', border: 'rgba(37,99,235,0.25)' }
  return { color: 'var(--color-warning)', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' }
}

function filingColor(s: string) {
  if (s === 'FILED' || s === 'COMPLIANT' || s === 'N/A') return 'var(--color-chain)'
  if (s === 'PARTIAL' || s === 'PENDING') return 'var(--color-warning)'
  return 'var(--color-danger)'
}

function pct(raised: number, target: number) {
  return Math.min(100, Math.round((raised / target) * 100))
}

export default function OfferingsPage() {
  const totalRaised = OFFERINGS.reduce((a, o) => a + o.raisedRaw, 0)
  const totalTarget = OFFERINGS.reduce((a, o) => a + o.targetRaw, 0)
  const active = OFFERINGS.filter((o) => o.status === 'ACTIVE').length
  const fundraising = OFFERINGS.filter((o) => o.status === 'FUNDRAISING').length

  return (
    <div style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-sans)' }}>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ ...MONO, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: '#c9a84c', marginBottom: '0.6rem' }}>
          CAPITAL MARKETS / OFFERINGS
        </div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: '0.3rem' }}>
          Reg D / Reg S Offerings
        </h1>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
          SEC-registered private placement offerings — Form D filings, blue sky compliance, and tokenized capital tracking
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem', marginBottom: '1.25rem' }}>
        {[
          { label: 'Total Offerings', value: '6', color: '#fff' },
          { label: 'Active', value: String(active), color: 'var(--color-chain)' },
          { label: 'Fundraising', value: String(fundraising), color: 'var(--color-accent-bright)' },
          { label: 'Total Raised', value: `$${(totalRaised / 1e6).toFixed(1)}M`, color: '#c9a84c' },
          { label: 'Total Target AUM', value: `$${(totalTarget / 1e6).toFixed(0)}M`, color: 'var(--color-text-secondary)' },
        ].map((s) => (
          <div key={s.label} style={{ ...CARD, padding: '1rem 1.25rem' }}>
            <div style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '0.4rem' }}>
              {s.label}
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, ...MONO, letterSpacing: '-0.04em', color: s.color, lineHeight: 1 }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Offering cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.875rem', marginBottom: '1.25rem' }}>
        {OFFERINGS.map((o) => {
          const sc = statusColor(o.status)
          const p = pct(o.raisedRaw, o.targetRaw)
          const barColor = p >= 80 ? 'var(--color-chain)' : p >= 50 ? 'var(--color-accent-bright)' : '#c9a84c'
          return (
            <div
              key={o.id}
              style={{
                background: '#0c0c10',
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                padding: '1.125rem 1.25rem',
              }}
            >
              {/* Top */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '0.875rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <span style={{ ...MONO, fontSize: '0.68rem', fontWeight: 800, color: '#c9a84c' }}>{o.token}</span>
                    <span style={{ ...MONO, fontSize: '0.58rem', fontWeight: 700, color: 'var(--color-text-secondary)' }}>{o.id}</span>
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', lineHeight: 1.25, marginBottom: '0.2rem' }}>{o.name}</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)' }}>{o.type} · {o.chain}</div>
                </div>
                <span style={{ ...MONO, fontSize: '0.58rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: 3, background: sc.bg, border: `1px solid ${sc.border}`, color: sc.color, flexShrink: 0 }}>
                  {o.status}
                </span>
              </div>

              {/* Progress bar */}
              <div style={{ marginBottom: '0.875rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', marginBottom: '0.3rem' }}>
                  <span style={{ color: 'var(--color-text-secondary)' }}>Capital Raised</span>
                  <span style={{ ...MONO, fontWeight: 700, color: barColor }}>{p}%</span>
                </div>
                <div style={{ height: 3, background: 'var(--color-border)', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${p}%`, background: barColor, borderRadius: 2 }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '0.25rem' }}>
                  <span style={{ ...MONO, fontSize: '0.72rem', fontWeight: 700, color: '#fff' }}>{o.raised}</span>
                  <span style={{ ...MONO, fontSize: '0.68rem', color: 'var(--color-text-secondary)' }}>of {o.target}</span>
                </div>
              </div>

              {/* Metrics grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.375rem', marginBottom: '0.875rem' }}>
                {[
                  { l: 'Reg Type', v: o.regType, c: 'var(--color-accent-bright)' },
                  { l: 'Target Yield', v: o.yield, c: 'var(--color-chain)' },
                  { l: 'Investors', v: String(o.investors), c: '#fff' },
                  { l: 'Min Investment', v: o.minInvest, c: '#fff' },
                  { l: 'Close Date', v: o.closeDate, c: 'var(--color-text-secondary)' },
                  { l: 'Token Issued', v: o.token_issued ? 'YES' : 'PENDING', c: o.token_issued ? 'var(--color-chain)' : 'var(--color-warning)' },
                ].map((m) => (
                  <div key={m.l} style={{ background: '#050508', border: '1px solid var(--color-border)', borderRadius: 3, padding: '0.4rem 0.5rem' }}>
                    <div style={{ fontSize: '0.58rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--color-text-secondary)', marginBottom: '0.2rem' }}>{m.l}</div>
                    <div style={{ ...MONO, fontSize: '0.72rem', fontWeight: 700, color: m.c }}>{m.v}</div>
                  </div>
                ))}
              </div>

              {/* Filing status */}
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <div style={{ flex: 1, background: '#050508', border: '1px solid var(--color-border)', borderRadius: 3, padding: '0.375rem 0.5rem' }}>
                  <div style={{ fontSize: '0.58rem', color: 'var(--color-text-secondary)', marginBottom: '0.15rem' }}>Form D</div>
                  <div style={{ ...MONO, fontSize: '0.68rem', fontWeight: 700, color: filingColor(o.formD) }}>{o.formD}</div>
                </div>
                <div style={{ flex: 1, background: '#050508', border: '1px solid var(--color-border)', borderRadius: 3, padding: '0.375rem 0.5rem' }}>
                  <div style={{ fontSize: '0.58rem', color: 'var(--color-text-secondary)', marginBottom: '0.15rem' }}>Blue Sky</div>
                  <div style={{ ...MONO, fontSize: '0.68rem', fontWeight: 700, color: filingColor(o.bluesky) }}>{o.bluesky}</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Regulation guide */}
      <div style={CARD}>
        <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff', marginBottom: '0.15rem' }}>Regulation Framework Guide</div>
        <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
          Available exemptions for RWA private placements — choose the right structure for your broker-dealer
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          {REG_TYPES_DATA.map((r) => (
            <div key={r.label} style={{ background: '#050508', border: '1px solid var(--color-border)', borderRadius: 4, padding: '1rem' }}>
              <div style={{ ...MONO, fontSize: '0.75rem', fontWeight: 800, color: r.color, marginBottom: '0.4rem' }}>{r.label}</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: '0.75rem' }}>{r.desc}</div>
              <div style={{ ...MONO, fontSize: '0.65rem', color: r.count > 0 ? r.color : 'var(--color-text-muted)', fontWeight: 700 }}>
                {r.count > 0 ? `${r.count} active offering${r.count > 1 ? 's' : ''}` : 'No active offerings'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create offering CTA */}
      <div
        style={{
          marginTop: '1.5rem',
          padding: '1rem 1.375rem',
          background: 'rgba(201,168,76,0.04)',
          border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        <div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.25rem' }}>
            Launch a New Tokenized Offering
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            Structure a new Reg D 506(b/c) or Reg S private placement in minutes. Broker OS will generate your term sheet,
            subscription documents, Form D draft, and deploy your RWA token smart contract — all in one workflow.
          </div>
        </div>
        <button
          style={{
            padding: '0.6rem 1.2rem',
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.35)',
            borderRadius: 4,
            color: '#c9a84c',
            fontSize: '0.7rem',
            fontWeight: 700,
            cursor: 'pointer',
            flexShrink: 0,
            ...MONO,
            letterSpacing: '0.06em',
          }}
        >
          + NEW OFFERING
        </button>
      </div>
    </div>
  )
}
