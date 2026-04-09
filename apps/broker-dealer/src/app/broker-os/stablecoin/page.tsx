const CARD = {
  background: '#0c0c10',
  border: '1px solid var(--color-border)',
  borderRadius: 6,
  padding: '1.5rem 1.75rem',
} as const

const MONO: React.CSSProperties = { fontFamily: 'var(--font-mono)' }

const STABLECOIN_BALANCES = [
  {
    symbol: 'USDC',
    name: 'USD Coin',
    issuer: 'Circle',
    balance: 4280000,
    display: '$4,280,000',
    pct: 53,
    chain: 'Ethereum / Polygon',
    color: '#2775ca',
    change24h: '+$142,000',
    positive: true,
  },
  {
    symbol: 'USDF',
    name: 'US Dollar Fabric',
    issuer: 'FTH Network',
    balance: 2100000,
    display: '$2,100,000',
    pct: 26,
    chain: 'Apostle Chain (ATP)',
    color: 'var(--color-accent-bright)',
    change24h: '+$55,000',
    positive: true,
  },
  {
    symbol: 'USDT',
    name: 'Tether USD',
    issuer: 'Tether',
    balance: 1450000,
    display: '$1,450,000',
    pct: 18,
    chain: 'Ethereum / XRPL',
    color: '#26a17b',
    change24h: '-$12,000',
    positive: false,
  },
  {
    symbol: 'FDUSD',
    name: 'First Digital USD',
    issuer: 'First Digital',
    balance: 310000,
    display: '$310,000',
    pct: 4,
    chain: 'Ethereum',
    color: 'var(--color-chain)',
    change24h: '+$8,000',
    positive: true,
  },
]

const SETTLEMENT_RAILS = [
  {
    name: 'Apostle Chain (ATP)',
    type: 'Native L1',
    supported: ['USDF', 'ATP'],
    avgSettleTime: '< 1s',
    finality: '< 1s',
    cost: '~$0.001',
    status: 'LIVE',
    vol24h: '$18.4M',
    txCount: 1842,
  },
  {
    name: 'XRPL',
    type: 'L1 Blockchain',
    supported: ['USDC', 'USDT', 'XRP'],
    avgSettleTime: '3-5s',
    finality: '3-5s',
    cost: '~$0.0002',
    status: 'LIVE',
    vol24h: '$11.0M',
    txCount: 412,
  },
  {
    name: 'Stellar (XLM)',
    type: 'L1 Blockchain',
    supported: ['USDC', 'USDT', 'USDF'],
    avgSettleTime: '3-5s',
    finality: '5s',
    cost: '~$0.00001',
    status: 'LIVE',
    vol24h: '$6.3M',
    txCount: 198,
  },
  {
    name: 'Ethereum',
    type: 'L1 Blockchain',
    supported: ['USDC', 'USDT', 'FDUSD', 'DAI'],
    avgSettleTime: '12-30s',
    finality: '~15 min',
    cost: '$1-15',
    status: 'LIVE',
    vol24h: '$40.4M',
    txCount: 624,
  },
  {
    name: 'Polygon',
    type: 'L2 / Sidechain',
    supported: ['USDC', 'USDT'],
    avgSettleTime: '2-5s',
    finality: '~256 blocks',
    cost: '~$0.01',
    status: 'LIVE',
    vol24h: '$18.2M',
    txCount: 3101,
  },
  {
    name: 'FTH Pay Network',
    type: 'Internal Rails',
    supported: ['UNY', 'USDF', 'ATP'],
    avgSettleTime: 'Instant',
    finality: 'Instant',
    cost: '$0.00',
    status: 'LIVE',
    vol24h: '$4.1M',
    txCount: 892,
  },
]

const SETTLEMENT_QUEUE = [
  { id: 'STL-2891', from: 'Blackwood Capital LP', to: 'FTHRE-01 Escrow', amount: '$750,000', stable: 'USDC', rail: 'Ethereum', status: 'SETTLING', eta: '< 2 min', hash: '0x4f8a...c2d1' },
  { id: 'STL-2892', from: 'Nevada Pension Fund', to: 'NRGX-07 Escrow', amount: '$1,200,000', stable: 'USDF', rail: 'ATP', status: 'SETTLING', eta: '< 30s', hash: 'tx:a9f2...3b81' },
  { id: 'STL-2893', from: 'Meridian Family Office', to: 'TFIN-03 Escrow', amount: '$300,000', stable: 'USDT', rail: 'XRPL', status: 'PENDING KYC', eta: 'KYC Hold', hash: '—' },
  { id: 'STL-2890', from: 'Atlas Ventures II', to: 'CMDTY-02 Escrow', amount: '$85,000', stable: 'USDC', rail: 'Polygon', status: 'CONFIRMED', eta: 'Complete', hash: '0x7d3c...e19a' },
  { id: 'STL-2889', from: 'Southfield Family Trust', to: 'PVFM-01 Escrow', amount: '$50,000', stable: 'USDT', rail: 'Ethereum', status: 'CONFIRMED', eta: 'Complete', hash: '0xb2f1...4a33' },
]

const SETTLEMENT_STATS = [
  { label: 'Total Stablecoin Balance', value: '$8,140,000', color: '#fff' },
  { label: 'Settled (30d)', value: '$43.1M', color: 'var(--color-chain)' },
  { label: 'Pending Queue', value: '$2,350,000', color: 'var(--color-warning)' },
  { label: 'Avg Settlement Time', value: '4.2s', color: 'var(--color-stable)' },
  { label: 'Rails Active', value: '6', color: '#fff' },
]

function statusColor(s: string) {
  if (s === 'SETTLING') return { color: 'var(--color-accent-bright)', bg: 'rgba(37,99,235,0.1)', border: 'rgba(37,99,235,0.25)' }
  if (s === 'CONFIRMED') return { color: 'var(--color-chain)', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' }
  return { color: 'var(--color-warning)', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.25)' }
}

export default function StablecoinPage() {
  return (
    <div style={{ color: 'var(--color-text-primary)', fontFamily: 'var(--font-sans)' }}>

      {/* Header */}
      <div style={{ marginBottom: '2rem' }}>
        <div style={{ ...MONO, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--color-stable)', marginBottom: '0.6rem' }}>
          SETTLEMENT / STABLECOIN RAILS
        </div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#fff', marginBottom: '0.3rem' }}>
          Stablecoin Settlement Infrastructure
        </h1>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
          Real-time multi-rail stablecoin settlement for RWA investments &amp; distributions
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '0.75rem', marginBottom: '1.5rem' }}>
        {SETTLEMENT_STATS.map((s) => (
          <div key={s.label} style={{ ...CARD, padding: '1rem 1.25rem' }}>
            <div style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>
              {s.label}
            </div>
            <div style={{ fontSize: '1.5rem', fontWeight: 800, ...MONO, letterSpacing: '-0.04em', color: s.color, lineHeight: 1 }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Stablecoin balances */}
      <div style={CARD}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff', marginBottom: '0.15rem' }}>Treasury Balances</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>Stablecoin holdings available for settlement</div>
          </div>
          <div style={{ ...MONO, fontSize: '0.65rem', fontWeight: 700, color: 'var(--color-stable)' }}>TOTAL: $8,140,000</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.75rem' }}>
          {STABLECOIN_BALANCES.map((s) => (
            <div
              key={s.symbol}
              style={{
                background: '#050508',
                border: '1px solid var(--color-border)',
                borderTop: `2px solid ${s.color}`,
                borderRadius: 5,
                padding: '1rem 1.125rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                <span style={{ ...MONO, fontSize: '0.9rem', fontWeight: 900, color: s.color }}>{s.symbol}</span>
                <span style={{ ...MONO, fontSize: '0.6rem', fontWeight: 700, color: s.positive ? 'var(--color-chain)' : 'var(--color-danger)' }}>
                  {s.change24h}
                </span>
              </div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>{s.name} · {s.issuer}</div>
              <div style={{ ...MONO, fontSize: '1.3rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '0.4rem' }}>
                {s.display}
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>{s.chain}</div>
              {/* Bar */}
              <div style={{ height: 2, background: 'var(--color-border)', borderRadius: 1, overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${s.pct}%`, background: s.color, borderRadius: 1 }} />
              </div>
              <div style={{ ...MONO, fontSize: '0.6rem', color: 'var(--color-text-secondary)', marginTop: '0.3rem' }}>{s.pct}% of total</div>
            </div>
          ))}
        </div>
      </div>

      {/* Two-column: settlement queue + rails */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '1rem', marginTop: '1rem' }}>

        {/* Settlement queue */}
        <div style={CARD}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff', marginBottom: '0.15rem' }}>Settlement Queue</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>Live RWA subscription settlements</div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <span style={{ ...MONO, fontSize: '0.6rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: 3, background: 'rgba(37,99,235,0.1)', border: '1px solid rgba(37,99,235,0.25)', color: 'var(--color-accent-bright)' }}>2 SETTLING</span>
              <span style={{ ...MONO, fontSize: '0.6rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: 3, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', color: 'var(--color-warning)' }}>1 PENDING</span>
            </div>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['ID', 'From', 'To', 'Amount', 'Stable', 'Rail', 'Status', 'ETA', 'Tx Hash'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '0 0.625rem 0.625rem', fontSize: '0.575rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', borderBottom: '1px solid var(--color-border)', whiteSpace: 'nowrap' }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SETTLEMENT_QUEUE.map((q, i) => {
                const sc = statusColor(q.status)
                const bd = i < SETTLEMENT_QUEUE.length - 1 ? '1px solid #0e0e18' : 'none'
                return (
                  <tr key={q.id}>
                    <td style={{ padding: '0.625rem', borderBottom: bd, ...MONO, fontSize: '0.68rem', fontWeight: 700, color: 'var(--color-accent-bright)', whiteSpace: 'nowrap' }}>{q.id}</td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, fontSize: '0.75rem', fontWeight: 500, maxWidth: 140, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{q.from}</td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, fontSize: '0.72rem', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{q.to}</td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, ...MONO, fontSize: '0.8rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{q.amount}</td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, ...MONO, fontSize: '0.68rem', fontWeight: 700, color: 'var(--color-stable)', whiteSpace: 'nowrap' }}>{q.stable}</td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, fontSize: '0.72rem', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{q.rail}</td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, whiteSpace: 'nowrap' }}>
                      <span style={{ ...MONO, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.04em', padding: '0.15rem 0.4rem', borderRadius: 3, background: sc.bg, border: `1px solid ${sc.border}`, color: sc.color }}>
                        {q.status}
                      </span>
                    </td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, ...MONO, fontSize: '0.68rem', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{q.eta}</td>
                    <td style={{ padding: '0.625rem', borderBottom: bd, ...MONO, fontSize: '0.65rem', color: 'var(--color-text-secondary)', whiteSpace: 'nowrap' }}>{q.hash}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        {/* Settlement rails */}
        <div style={CARD}>
          <div style={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff', marginBottom: '0.15rem' }}>Settlement Rails</div>
          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', marginBottom: '1.25rem' }}>Active blockchain networks</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
            {SETTLEMENT_RAILS.map((r) => (
              <div key={r.name} style={{ background: '#050508', border: '1px solid var(--color-border)', borderRadius: 4, padding: '0.75rem 0.875rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-chain)', display: 'inline-block', flexShrink: 0, boxShadow: '0 0 4px rgba(16,185,129,0.5)' }} />
                    <span style={{ fontSize: '0.8rem', fontWeight: 600 }}>{r.name}</span>
                  </div>
                  <span style={{ ...MONO, fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-stable)' }}>{r.vol24h}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: 'var(--color-text-secondary)', ...MONO }}>
                  <span>Settle: {r.avgSettleTime}</span>
                  <span>Cost: {r.cost}</span>
                  <span>{r.txCount.toLocaleString()} txns/24h</span>
                </div>
                <div style={{ marginTop: '0.4rem', display: 'flex', gap: '0.25rem', flexWrap: 'wrap' }}>
                  {r.supported.map((sym) => (
                    <span key={sym} style={{ ...MONO, fontSize: '0.58rem', fontWeight: 700, color: 'var(--color-stable)', background: 'rgba(14,165,233,0.08)', border: '1px solid rgba(14,165,233,0.15)', borderRadius: 2, padding: '0.05rem 0.3rem' }}>
                      {sym}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FTH Pay integration notice */}
      <div
        style={{
          marginTop: '1.5rem',
          padding: '1rem 1.375rem',
          background: 'rgba(37,99,235,0.05)',
          border: '1px solid rgba(37,99,235,0.15)',
          borderRadius: 5,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
        }}
      >
        <div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--color-accent-bright)', marginBottom: '0.25rem' }}>
            FTH Pay Network Integration
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            Broker OS is natively integrated with the FTH Pay stablecoin network. All RWA subscription payments and distributions
            can settle instantly via USDF on Apostle Chain (ATP) with zero gas fees. Connect your FTH Pay merchant account to
            enable instant investor distributions.
          </div>
        </div>
        <button
          style={{
            padding: '0.6rem 1.2rem',
            background: 'rgba(37,99,235,0.15)',
            border: '1px solid rgba(37,99,235,0.4)',
            borderRadius: 4,
            color: 'var(--color-accent-bright)',
            fontSize: '0.7rem',
            fontWeight: 700,
            cursor: 'pointer',
            flexShrink: 0,
            ...MONO,
            letterSpacing: '0.06em',
          }}
        >
          CONFIGURE FTH PAY
        </button>
      </div>
    </div>
  )
}
