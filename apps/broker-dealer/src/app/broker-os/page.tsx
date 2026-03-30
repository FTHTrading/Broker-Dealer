const CARD = {
  background: 'var(--color-card, #0c0c10)',
  border: '1px solid var(--color-border)',
  borderRadius: 6,
  padding: '1.5rem 1.75rem',
} as const

const MONO: React.CSSProperties = {
  fontFamily: 'var(--font-mono)',
}

const KPIs = [
  {
    label: 'Total RWA AUM Tokenized',
    value: '$127.4M',
    sub: '+$8.2M this week',
    trend: 'up',
    color: 'var(--color-text-primary)',
  },
  {
    label: 'Stablecoin Volume (30d)',
    value: '$43.1M',
    sub: 'USDC · USDF · USDT',
    trend: 'up',
    color: 'var(--color-stable)',
  },
  {
    label: 'Active Offerings',
    value: '14',
    sub: '9 Reg D · 5 Reg S',
    trend: 'neutral',
    color: 'var(--color-text-primary)',
  },
  {
    label: 'Pending Settlements',
    value: '6',
    sub: '$2.3M queued',
    trend: 'neutral',
    color: 'var(--color-warning)',
  },
  {
    label: 'Qualified Investors',
    value: '1,847',
    sub: '+23 this month',
    trend: 'up',
    color: 'var(--color-text-primary)',
  },
  {
    label: 'Tokens Issued',
    value: '38',
    sub: '12 chains · $2.8M avg',
    trend: 'up',
    color: 'var(--color-chain)',
  },
]

const TOKEN_PORTFOLIO = [
  { ticker: 'FTHRE-01', name: 'FTH CRE Tower A', type: 'Real Estate', chain: 'ETH', aum: '$24.5M', yield_: '6.8%', investors: 312, status: 'ACTIVE' },
  { ticker: 'NRGX-07', name: 'Permian Basin Energy Rights', type: 'Energy', chain: 'POLYGON', aum: '$18.2M', yield_: '9.2%', investors: 198, status: 'ACTIVE' },
  { ticker: 'TFIN-03', name: 'Trade Finance Pool III', type: 'Trade Finance', chain: 'XRP', aum: '$11.0M', yield_: '7.5%', investors: 87, status: 'ACTIVE' },
  { ticker: 'CMDTY-02', name: 'Gulf Coast Commodity Basket', type: 'Commodity', chain: 'ATP', aum: '$8.7M', yield_: '5.4%', investors: 64, status: 'ACTIVE' },
  { ticker: 'FTHRE-02', name: 'FTH Industrial Park B', type: 'Real Estate', chain: 'ETH', aum: '$15.9M', yield_: '6.1%', investors: 241, status: 'FUNDING' },
  { ticker: 'PVFM-01', name: 'Solar Farm Revenue Bond', type: 'Infrastructure', chain: 'XLM', aum: '$6.3M', yield_: '8.0%', investors: 55, status: 'FUNDING' },
]

const SETTLEMENT_QUEUE = [
  { id: 'STL-2891', investor: 'Blackwood Capital LP', offering: 'FTHRE-01', amount: '$750,000', stable: 'USDC', chain: 'ETH', eta: '< 2 min' },
  { id: 'STL-2892', investor: 'Nevada Pension Fund', offering: 'NRGX-07', amount: '$1,200,000', stable: 'USDF', chain: 'ATP', eta: '< 5 min' },
  { id: 'STL-2893', investor: 'Meridian Family Office', offering: 'TFIN-03', amount: '$300,000', stable: 'USDT', chain: 'XRP', eta: 'Pending KYC' },
]

const CHAIN_ACTIVITY = [
  { chain: 'Apostle Chain (ATP)', txCount: 1842, vol: '$18.4M', status: 'LIVE' },
  { chain: 'Ethereum', txCount: 624, vol: '$40.4M', status: 'LIVE' },
  { chain: 'Polygon', txCount: 3101, vol: '$18.2M', status: 'LIVE' },
  { chain: 'XRPL', txCount: 412, vol: '$11.0M', status: 'LIVE' },
  { chain: 'Stellar', txCount: 198, vol: '$6.3M', status: 'LIVE' },
]

export default function BrokerOSDashboard() {
  const now = new Date().toLocaleString('en-US', { hour12: false, timeZone: 'America/New_York' })

  return (
    <div style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-sans)' }}>

      {/* Page header */}
      <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <h1
            style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              color: '#ffffff',
              marginBottom: '0.3rem',
            }}
          >
            Capital Markets Dashboard
          </h1>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
            Real-world asset tokenization &amp; stablecoin settlement infrastructure
          </p>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', ...MONO }}>LIVE · {now} ET</div>
          <div
            style={{
              marginTop: '0.375rem',
              fontSize: '0.65rem',
              fontWeight: 700,
              color: 'var(--color-chain)',
              ...MONO,
              letterSpacing: '0.05em',
            }}
          >
            5 CHAINS ACTIVE
          </div>
        </div>
      </div>

      {/* KPI grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '0.75rem',
          marginBottom: '2rem',
        }}
      >
        {KPIs.map((k) => (
          <div key={k.label} style={{ ...CARD, padding: '1.125rem 1.25rem' }}>
            <div
              style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-text-secondary)',
                marginBottom: '0.6rem',
              }}
            >
              {k.label}
            </div>
            <div
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: k.color,
                letterSpacing: '-0.04em',
                lineHeight: 1,
                marginBottom: '0.4rem',
                ...MONO,
              }}
            >
              {k.value}
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>
              {k.trend === 'up' && (
                <span style={{ color: 'var(--color-chain)', marginRight: '0.25rem' }}>+</span>
              )}
              {k.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Two-column: token portfolio + settlement queue */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 400px', gap: '1.25rem', marginBottom: '1.25rem' }}>

        {/* Token portfolio table */}
        <div style={CARD}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#ffffff', letterSpacing: '-0.01em' }}>
                Token Portfolio
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginTop: '0.15rem' }}>
                Active &amp; funding RWA token issuances
              </div>
            </div>
            <div style={{ fontSize: '0.65rem', ...MONO, color: 'var(--color-accent-bright)', fontWeight: 700 }}>
              {TOKEN_PORTFOLIO.length} TOKENS · $84.6M AUM
            </div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Ticker', 'Asset Name', 'Type', 'Chain', 'AUM', 'Yield', 'Investors', 'Status'].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'left',
                      padding: '0 0.625rem 0.625rem',
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-text-secondary)',
                      borderBottom: '1px solid var(--color-border)',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TOKEN_PORTFOLIO.map((t, i) => (
                <tr key={t.ticker}>
                  <td style={{ padding: '0.625rem', borderBottom: i < TOKEN_PORTFOLIO.length - 1 ? '1px solid var(--color-border-subtle, #0e0e18)' : 'none', ...MONO, fontSize: '0.75rem', color: 'var(--color-accent-bright)', fontWeight: 700 }}>
                    {t.ticker}
                  </td>
                  <td style={{ padding: '0.625rem', borderBottom: i < TOKEN_PORTFOLIO.length - 1 ? '1px solid var(--color-border-subtle, #0e0e18)' : 'none', fontSize: '0.8rem', color: 'var(--color-text-primary)' }}>
                    {t.name}
                  </td>
                  <td style={{ padding: '0.625rem', borderBottom: i < TOKEN_PORTFOLIO.length - 1 ? '1px solid var(--color-border-subtle, #0e0e18)' : 'none', fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>
                    {t.type}
                  </td>
                  <td style={{ padding: '0.625rem', borderBottom: i < TOKEN_PORTFOLIO.length - 1 ? '1px solid var(--color-border-subtle, #0e0e18)' : 'none', ...MONO, fontSize: '0.68rem', fontWeight: 700, color: 'var(--color-chain)' }}>
                    {t.chain}
                  </td>
                  <td style={{ padding: '0.625rem', borderBottom: i < TOKEN_PORTFOLIO.length - 1 ? '1px solid var(--color-border-subtle, #0e0e18)' : 'none', ...MONO, fontSize: '0.78rem', color: 'var(--color-text-primary)', fontWeight: 600 }}>
                    {t.aum}
                  </td>
                  <td style={{ padding: '0.625rem', borderBottom: i < TOKEN_PORTFOLIO.length - 1 ? '1px solid var(--color-border-subtle, #0e0e18)' : 'none', ...MONO, fontSize: '0.78rem', color: 'var(--color-gold)', fontWeight: 700 }}>
                    {t.yield_}
                  </td>
                  <td style={{ padding: '0.625rem', borderBottom: i < TOKEN_PORTFOLIO.length - 1 ? '1px solid var(--color-border-subtle, #0e0e18)' : 'none', ...MONO, fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                    {t.investors.toLocaleString()}
                  </td>
                  <td style={{ padding: '0.625rem', borderBottom: i < TOKEN_PORTFOLIO.length - 1 ? '1px solid var(--color-border-subtle, #0e0e18)' : 'none' }}>
                    <span
                      style={{
                        fontSize: '0.6rem',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                        ...MONO,
                        padding: '0.15rem 0.45rem',
                        borderRadius: 3,
                        background: t.status === 'ACTIVE' ? 'rgba(16,185,129,0.1)' : 'rgba(245,158,11,0.1)',
                        border: `1px solid ${t.status === 'ACTIVE' ? 'rgba(16,185,129,0.25)' : 'rgba(245,158,11,0.25)'}`,
                        color: t.status === 'ACTIVE' ? 'var(--color-chain)' : 'var(--color-warning)',
                      }}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Settlement queue */}
        <div style={CARD}>
          <div style={{ marginBottom: '1.25rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#ffffff', letterSpacing: '-0.01em', marginBottom: '0.15rem' }}>
              Settlement Queue
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>Pending stablecoin settlements</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {SETTLEMENT_QUEUE.map((s) => (
              <div
                key={s.id}
                style={{
                  background: '#050508',
                  border: '1px solid var(--color-border)',
                  borderRadius: 5,
                  padding: '0.875rem 1rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                  <span style={{ ...MONO, fontSize: '0.68rem', fontWeight: 700, color: 'var(--color-accent-bright)' }}>
                    {s.id}
                  </span>
                  <span
                    style={{
                      ...MONO,
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      color: s.eta.includes('Pending') ? 'var(--color-warning)' : 'var(--color-chain)',
                    }}
                  >
                    {s.eta}
                  </span>
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-primary)', fontWeight: 600, marginBottom: '0.3rem' }}>
                  {s.investor}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ ...MONO, fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>
                    {s.offering} · {s.chain}
                  </span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ ...MONO, fontSize: '0.85rem', fontWeight: 800, color: 'var(--color-stable)', letterSpacing: '-0.02em' }}>
                      {s.amount}
                    </div>
                    <div style={{ ...MONO, fontSize: '0.6rem', color: 'var(--color-text-secondary)', fontWeight: 700 }}>
                      {s.stable}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div
              style={{
                textAlign: 'center',
                padding: '0.5rem',
                fontSize: '0.72rem',
                color: 'var(--color-accent-bright)',
                cursor: 'pointer',
                ...MONO,
              }}
            >
              VIEW ALL SETTLEMENTS &rarr;
            </div>
          </div>
        </div>
      </div>

      {/* Chain activity */}
      <div style={CARD}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#ffffff', letterSpacing: '-0.01em' }}>
              Multi-Chain Activity
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginTop: '0.15rem' }}>
              Live settlement network status
            </div>
          </div>
          <div style={{ ...MONO, fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-text-secondary)' }}>
            LAST 24H
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem' }}>
          {CHAIN_ACTIVITY.map((c) => (
            <div
              key={c.chain}
              style={{
                background: '#050508',
                border: '1px solid var(--color-border)',
                borderRadius: 5,
                padding: '1rem 1.125rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', marginBottom: '0.625rem' }}>
                <span
                  style={{
                    width: 5,
                    height: 5,
                    borderRadius: '50%',
                    background: 'var(--color-chain)',
                    display: 'inline-block',
                    boxShadow: '0 0 5px rgba(16,185,129,0.5)',
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: '0.6rem', fontWeight: 700, color: 'var(--color-chain)', ...MONO, letterSpacing: '0.04em' }}>
                  {c.status}
                </span>
              </div>
              <div style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: '0.625rem', lineHeight: 1.3 }}>
                {c.chain}
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ ...MONO, fontSize: '1rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.03em', lineHeight: 1 }}>
                    {c.txCount.toLocaleString()}
                  </div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>txns</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ ...MONO, fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-stable)', letterSpacing: '-0.02em', lineHeight: 1 }}>
                    {c.vol}
                  </div>
                  <div style={{ fontSize: '0.6rem', color: 'var(--color-text-secondary)', marginTop: '0.2rem' }}>volume</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom row: stablecoin breakdown + quick actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '1.25rem' }}>

        {/* Stablecoin breakdown */}
        <div style={CARD}>
          <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#ffffff', letterSpacing: '-0.01em', marginBottom: '0.15rem' }}>
            Stablecoin Treasury
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
            Settlement balances across rails
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {[
              { label: 'USDC', value: '$4,280,000', pct: 55, bar: 'var(--color-stable)' },
              { label: 'USDF', value: '$2,100,000', pct: 27, bar: 'var(--color-accent-bright)' },
              { label: 'USDT', value: '$1,450,000', pct: 18, bar: 'var(--color-warning)' },
              { label: 'FDUSD', value: '$310,000', pct: 4, bar: 'var(--color-chain)' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ ...MONO, fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-text-secondary)' }}>{s.label}</span>
                  <span style={{ ...MONO, fontSize: '0.78rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{s.value}</span>
                </div>
                <div style={{ height: 3, background: 'var(--color-border)', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${s.pct}%`, background: s.bar, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick actions */}
        <div style={CARD}>
          <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#ffffff', letterSpacing: '-0.01em', marginBottom: '0.15rem' }}>
            Quick Actions
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>
            Common institutional workflows
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem' }}>
            {[
              { label: 'New Reg D Offering', icon: '◈', color: 'var(--color-accent-bright)', href: '/broker-os/offerings' },
              { label: 'Register Investor', icon: '◎', color: 'var(--color-chain)', href: '/broker-os/investor-portal' },
              { label: 'Issue RWA Token', icon: '▦', color: 'var(--color-gold)', href: '/broker-os/rwa-hub' },
              { label: 'Stablecoin Transfer', icon: '◆', color: 'var(--color-stable)', href: '/broker-os/stablecoin' },
              { label: 'Run Compliance Check', icon: '⊕', color: 'var(--color-gold)', href: '/broker-os/compliance' },
              { label: 'View Settlement Queue', icon: '↗', color: 'var(--color-text-secondary)', href: '/broker-os/stablecoin' },
            ].map((a) => (
              <a
                key={a.label}
                href={a.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 0.875rem',
                  background: '#050508',
                  border: '1px solid var(--color-border)',
                  borderRadius: 5,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
              >
                <span style={{ fontSize: '0.8rem', color: a.color, flexShrink: 0 }}>{a.icon}</span>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--color-text-primary)', letterSpacing: '-0.01em', lineHeight: 1.3 }}>
                  {a.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Regulatory footer bar */}
      <div
        style={{
          marginTop: '2rem',
          padding: '0.875rem 1.25rem',
          background: '#030306',
          border: '1px solid var(--color-border)',
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.5rem',
        }}
      >
        <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
          Securities offered through FTH Capital Markets, LLC · FINRA Member · SIPC Member · SEC Registered Broker-Dealer ·
          CRD #XXXXXXX · Alternative Trading System (ATS) Licensed · Reg D Rule 506(b) &amp; 506(c) · Reg S Offerings
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
          {['FINRA', 'SEC', 'SIPC', 'ATS'].map((b) => (
            <span
              key={b}
              style={{
                ...MONO,
                fontSize: '0.6rem',
                fontWeight: 700,
                color: 'var(--color-text-secondary)',
                border: '1px solid var(--color-border)',
                borderRadius: 3,
                padding: '0.15rem 0.4rem',
              }}
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
