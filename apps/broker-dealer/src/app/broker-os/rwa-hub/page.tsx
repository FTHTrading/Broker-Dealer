const CARD = {
  background: '#0c0c10',
  border: '1px solid var(--color-border)',
  borderRadius: 6,
  padding: '1.5rem 1.75rem',
} as const

const MONO: React.CSSProperties = { fontFamily: 'var(--font-mono)' }

const RWA_TOKENS = [
  {
    ticker: 'FTHRE-01',
    name: 'FTH Commercial Real Estate Tower A',
    type: 'Commercial Real Estate',
    chain: 'Ethereum',
    chainTag: 'ETH',
    aum: '$24,500,000',
    nav: '$24.72',
    yield_: '6.8%',
    investors: 312,
    status: 'ACTIVE',
    custody: 'Fireblocks',
    contract: '0x3a4f...d8b2',
    issued: '2025-09-14',
    maturity: '2030-09-14',
    rating: 'AA',
    regType: 'Reg D 506(c)',
    minInvest: '$50,000',
  },
  {
    ticker: 'NRGX-07',
    name: 'Permian Basin Energy Rights Pool VII',
    type: 'Energy Rights',
    chain: 'Polygon',
    chainTag: 'POLY',
    aum: '$18,200,000',
    nav: '$18.44',
    yield_: '9.2%',
    investors: 198,
    status: 'ACTIVE',
    custody: 'BitGo',
    contract: '0x7c1a...f342',
    issued: '2025-11-01',
    maturity: '2028-11-01',
    rating: 'A+',
    regType: 'Reg D 506(c)',
    minInvest: '$100,000',
  },
  {
    ticker: 'TFIN-03',
    name: 'Trade Finance Pool III — Gulf Coast',
    type: 'Trade Finance',
    chain: 'XRPL',
    chainTag: 'XRP',
    aum: '$11,000,000',
    nav: '$11.03',
    yield_: '7.5%',
    investors: 87,
    status: 'ACTIVE',
    custody: 'Fireblocks',
    contract: 'r4GDFMLGJUYmkbt...',
    issued: '2026-01-10',
    maturity: '2027-01-10',
    rating: 'A',
    regType: 'Reg S',
    minInvest: '$250,000',
  },
  {
    ticker: 'CMDTY-02',
    name: 'Gulf Coast Commodity Basket II',
    type: 'Commodity',
    chain: 'Apostle Chain',
    chainTag: 'ATP',
    aum: '$8,700,000',
    nav: '$8.82',
    yield_: '5.4%',
    investors: 64,
    status: 'ACTIVE',
    custody: 'Self-Custody',
    contract: 'agent:6a4f...',
    issued: '2026-02-20',
    maturity: '2027-08-20',
    rating: 'A-',
    regType: 'Reg D 506(b)',
    minInvest: '$25,000',
  },
  {
    ticker: 'FTHRE-02',
    name: 'FTH Industrial Park B — Texas',
    type: 'Industrial Real Estate',
    chain: 'Ethereum',
    chainTag: 'ETH',
    aum: '$15,900,000',
    nav: '$16.00',
    yield_: '6.1%',
    investors: 241,
    status: 'FUNDING',
    custody: 'Fireblocks',
    contract: 'Deploying...',
    issued: '2026-03-01',
    maturity: '2031-03-01',
    rating: 'AA-',
    regType: 'Reg D 506(c)',
    minInvest: '$50,000',
  },
  {
    ticker: 'PVFM-01',
    name: 'Solar Farm Revenue Bond — NM',
    type: 'Infrastructure',
    chain: 'Stellar',
    chainTag: 'XLM',
    aum: '$6,300,000',
    nav: '$6.35',
    yield_: '8.0%',
    investors: 55,
    status: 'FUNDING',
    custody: 'BitGo',
    contract: 'GABCD...WXYZ',
    issued: '2026-03-15',
    maturity: '2036-03-15',
    rating: 'A',
    regType: 'Reg D 506(b)',
    minInvest: '$10,000',
  },
]

const ASSET_TYPES = [
  { label: 'Real Estate', count: 2, aum: '$40.4M', color: 'var(--color-accent-bright)' },
  { label: 'Energy Rights', count: 1, aum: '$18.2M', color: 'var(--color-gold)' },
  { label: 'Trade Finance', count: 1, aum: '$11.0M', color: 'var(--color-stable)' },
  { label: 'Commodity', count: 1, aum: '$8.7M', color: 'var(--color-warning)' },
  { label: 'Infrastructure', count: 1, aum: '$6.3M', color: 'var(--color-chain)' },
]

const CHAIN_DISTRIBUTION = [
  { chain: 'Ethereum', pct: 48, aum: '$40.4M', color: 'var(--color-accent-bright)' },
  { chain: 'Polygon', pct: 22, aum: '$18.2M', color: '#8b5cf6' },
  { chain: 'XRPL', pct: 13, aum: '$11.0M', color: 'var(--color-stable)' },
  { chain: 'Apostle Chain', pct: 10, aum: '$8.7M', color: 'var(--color-chain)' },
  { chain: 'Stellar', pct: 7, aum: '$6.3M', color: 'var(--color-gold)' },
]

export default function RWAHubPage() {
  return (
    <div style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-sans)' }}>

      {/* Header */}
      <div style={{ marginBottom: '2rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.375rem',
              background: 'rgba(37,99,235,0.08)',
              border: '1px solid rgba(37,99,235,0.2)',
              borderRadius: 3,
              padding: '0.2rem 0.6rem',
              fontSize: '0.6rem',
              fontWeight: 700,
              letterSpacing: '0.1em',
              color: 'var(--color-accent-bright)',
              marginBottom: '0.6rem',
              ...MONO,
            }}
          >
            CAPITAL MARKETS / RWA HUB
          </div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: '0.3rem' }}>
            RWA Token Portfolio
          </h1>
          <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
            Tokenized real-world assets under management · Multi-chain institutional issuances
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.625rem' }}>
          {[
            { label: 'ISSUE NEW TOKEN', primary: true },
            { label: 'EXPORT REGISTRY', primary: false },
          ].map((b) => (
            <button
              key={b.label}
              style={{
                padding: '0.5rem 1rem',
                borderRadius: 4,
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                ...MONO,
                cursor: 'pointer',
                border: b.primary ? '1px solid rgba(37,99,235,0.5)' : '1px solid var(--color-border)',
                background: b.primary ? 'rgba(37,99,235,0.15)' : 'transparent',
                color: b.primary ? 'var(--color-accent-bright)' : 'var(--color-text-secondary)',
              }}
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>

      {/* Summary KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {[
          { label: 'Total AUM', value: '$84.6M', color: '#fff' },
          { label: 'Active Tokens', value: '4', color: 'var(--color-chain)' },
          { label: 'Funding Tokens', value: '2', color: 'var(--color-warning)' },
          { label: 'Total Investors', value: '957', color: '#fff' },
          { label: 'Avg Token Yield', value: '7.2%', color: 'var(--color-gold)' },
        ].map((k) => (
          <div key={k.label} style={{ ...CARD, padding: '1rem 1.25rem' }}>
            <div style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              {k.label}
            </div>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, ...MONO, letterSpacing: '-0.04em', color: k.color, lineHeight: 1 }}>
              {k.value}
            </div>
          </div>
        ))}
      </div>

      {/* Asset type + chain distribution */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>

        {/* Asset types */}
        <div style={CARD}>
          <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff', marginBottom: '0.15rem' }}>Asset Class Breakdown</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>By number of tokens and AUM</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {ASSET_TYPES.map((a) => (
              <div key={a.label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: a.color, display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{a.label}</span>
                </div>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <span style={{ ...MONO, fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>{a.count} token{a.count > 1 ? 's' : ''}</span>
                  <span style={{ ...MONO, fontSize: '0.82rem', fontWeight: 700, color: a.color, minWidth: 64, textAlign: 'right' }}>{a.aum}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chain distribution */}
        <div style={CARD}>
          <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff', marginBottom: '0.15rem' }}>Chain Distribution</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>Smart contract deployment by network</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {CHAIN_DISTRIBUTION.map((c) => (
              <div key={c.chain}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem' }}>
                  <span style={{ fontSize: '0.82rem', fontWeight: 500 }}>{c.chain}</span>
                  <span style={{ ...MONO, fontSize: '0.78rem', fontWeight: 700, color: c.color }}>{c.aum} · {c.pct}%</span>
                </div>
                <div style={{ height: 3, background: 'var(--color-border)', borderRadius: 2, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${c.pct}%`, background: c.color, borderRadius: 2 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Full token table */}
      <div style={CARD}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff', marginBottom: '0.15rem' }}>Token Registry</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>All issued and funding RWA tokens · Click to view on-chain</div>
          </div>
          <div style={{ ...MONO, fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-text-secondary)' }}>
            {RWA_TOKENS.length} TOKENS TOTAL
          </div>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 960 }}>
            <thead>
              <tr>
                {['Ticker', 'Asset Name', 'Type', 'Chain', 'AUM', 'NAV/Token', 'Yield', 'Investors', 'Custody', 'Reg Type', 'Min. Invest', 'Maturity', 'Rating', 'Status'].map((h) => (
                  <th
                    key={h}
                    style={{
                      textAlign: 'left',
                      padding: '0 0.75rem 0.75rem',
                      fontSize: '0.58rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      color: 'var(--color-text-secondary)',
                      borderBottom: '1px solid var(--color-border)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RWA_TOKENS.map((t, i) => {
                const rowBorder = i < RWA_TOKENS.length - 1 ? '1px solid #0e0e18' : 'none'
                const tdBase: React.CSSProperties = {
                  padding: '0.75rem',
                  borderBottom: rowBorder,
                  fontSize: '0.78rem',
                  verticalAlign: 'middle',
                }
                return (
                  <tr key={t.ticker}>
                    <td style={{ ...tdBase, ...MONO, color: 'var(--color-accent-bright)', fontWeight: 700 }}>{t.ticker}</td>
                    <td style={{ ...tdBase, fontWeight: 600, color: '#fff', maxWidth: 200 }}>{t.name}</td>
                    <td style={{ ...tdBase, color: 'var(--color-text-secondary)', fontSize: '0.72rem' }}>{t.type}</td>
                    <td style={{ ...tdBase }}>
                      <span style={{ ...MONO, fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-chain)', background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.18)', borderRadius: 3, padding: '0.1rem 0.4rem' }}>
                        {t.chainTag}
                      </span>
                    </td>
                    <td style={{ ...tdBase, ...MONO, fontWeight: 700 }}>{t.aum}</td>
                    <td style={{ ...tdBase, ...MONO, color: 'var(--color-text-secondary)' }}>{t.nav}</td>
                    <td style={{ ...tdBase, ...MONO, color: 'var(--color-gold)', fontWeight: 700 }}>{t.yield_}</td>
                    <td style={{ ...tdBase, ...MONO, color: 'var(--color-text-secondary)' }}>{t.investors.toLocaleString()}</td>
                    <td style={{ ...tdBase, fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>{t.custody}</td>
                    <td style={{ ...tdBase, fontSize: '0.7rem', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{t.regType}</td>
                    <td style={{ ...tdBase, ...MONO, fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>{t.minInvest}</td>
                    <td style={{ ...tdBase, ...MONO, fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>{t.maturity}</td>
                    <td style={{ ...tdBase, ...MONO, fontSize: '0.72rem', color: 'var(--color-gold)', fontWeight: 700 }}>{t.rating}</td>
                    <td style={{ ...tdBase }}>
                      <span
                        style={{
                          ...MONO,
                          fontSize: '0.6rem',
                          fontWeight: 700,
                          letterSpacing: '0.06em',
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
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Regulatory bar */}
      <div style={{ marginTop: '1.5rem', padding: '0.875rem 1.25rem', background: '#030306', border: '1px solid var(--color-border)', borderRadius: 5 }}>
        <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
          <strong style={{ color: 'var(--color-text-primary)' }}>Regulatory Notice:</strong> All RWA token offerings are conducted pursuant to exemptions from registration under the Securities Act of 1933, as amended.
          Reg D Rule 506(b) offerings are available to accredited investors only. Reg D Rule 506(c) offerings involve general solicitation — all investors must be verified accredited investors.
          Reg S offerings are for non-U.S. persons only. Tokens are not registered securities. Past performance is not indicative of future results. All yields are target, not guaranteed.
          Custody arrangements via Fireblocks, BitGo, or self-custody wallets. Smart contracts audited by third-party security firms.
        </div>
      </div>
    </div>
  )
}
