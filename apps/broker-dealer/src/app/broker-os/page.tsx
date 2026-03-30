import Link from 'next/link'

const KPI_CARDS = [
  {
    label: 'Active Deals',
    value: '47',
    delta: '+8 this month',
    deltaPositive: true,
    color: '#5b6ef4',
    sub: '12 pending close',
  },
  {
    label: 'Customers',
    value: '214',
    delta: '+19 this quarter',
    deltaPositive: true,
    color: '#10b981',
    sub: '38 up for renewal',
  },
  {
    label: 'Renewal Alerts',
    value: '23',
    delta: '6 critical (<30d)',
    deltaPositive: false,
    color: '#f59e0b',
    sub: '17 within 90 days',
  },
  {
    label: 'Pending Commission',
    value: '$184,320',
    delta: '+$22K from last month',
    deltaPositive: true,
    color: '#d4a843',
    sub: '$61K this quarter',
  },
] as const

const PIPELINE_STAGES = [
  { stage: 'Prospect', count: 34, value: '$4.2M', color: '#8888a0' },
  { stage: 'Qualified', count: 22, value: '$7.8M', color: '#5b6ef4' },
  { stage: 'Proposal', count: 15, value: '$11.4M', color: '#06b6d4' },
  { stage: 'Negotiation', count: 8, value: '$6.1M', color: '#f59e0b' },
  { stage: 'Contracting', count: 5, value: '$4.9M', color: '#e05a2b' },
  { stage: 'Closed Won', count: 47, value: '$38.2M', color: '#10b981' },
] as const

const RECENT_DEALS = [
  {
    id: 'DEAL-2847',
    customer: 'Nexus Industrial Corp',
    type: 'Natural Gas — Fixed',
    term: '24 mo',
    value: '$1.2M',
    stage: 'Contracting',
    stageColor: '#e05a2b',
    rwa: true,
    daysOld: 3,
  },
  {
    id: 'DEAL-2841',
    customer: 'SunPath Manufacturing',
    type: 'Solar PPA',
    term: '120 mo',
    value: '$8.4M',
    stage: 'Proposal',
    stageColor: '#06b6d4',
    rwa: true,
    daysOld: 7,
  },
  {
    id: 'DEAL-2835',
    customer: 'Ridgeline Hotels LLC',
    type: 'Electricity — Market Index',
    term: '12 mo',
    value: '$340K',
    stage: 'Negotiation',
    stageColor: '#f59e0b',
    rwa: false,
    daysOld: 11,
  },
  {
    id: 'DEAL-2829',
    customer: 'Coastal Logistics Group',
    type: 'REC Portfolio',
    term: '36 mo',
    value: '$2.1M',
    stage: 'Qualified',
    stageColor: '#5b6ef4',
    rwa: true,
    daysOld: 14,
  },
  {
    id: 'DEAL-2821',
    customer: 'Prairie Wind LLC',
    type: 'Wind PPA + Carbon Credits',
    term: '240 mo',
    value: '$22.7M',
    stage: 'Proposal',
    stageColor: '#06b6d4',
    rwa: true,
    daysOld: 18,
  },
] as const

const RENEWAL_ALERTS = [
  {
    customer: 'Hartwell Steel Works',
    contract: 'Natural Gas Fixed Price',
    expires: '2026-04-28',
    daysLeft: 29,
    urgency: 'critical',
    annualValue: '$680K',
  },
  {
    customer: 'Metro Transit Authority',
    contract: 'Electricity — Blended Rate',
    expires: '2026-05-15',
    daysLeft: 46,
    urgency: 'high',
    annualValue: '$1.4M',
  },
  {
    customer: 'Cascade Brewing Co.',
    contract: 'Renewable Energy Bundle',
    expires: '2026-05-31',
    daysLeft: 62,
    urgency: 'medium',
    annualValue: '$210K',
  },
  {
    customer: 'TechPark Realty Fund',
    contract: 'Solar PPA + RECs',
    expires: '2026-06-30',
    daysLeft: 91,
    urgency: 'low',
    annualValue: '$3.2M',
  },
] as const

const COMMISSION_RECENT = [
  { deal: 'DEAL-2803', customer: 'Blue Ridge Energy Coop', type: 'Natural Gas', amount: '$14,400', status: 'paid', date: '2026-03-15' },
  { deal: 'DEAL-2791', customer: 'Irongate Logistics', type: 'Electricity', amount: '$6,800', status: 'paid', date: '2026-03-08' },
  { deal: 'DEAL-2784', customer: 'NovaTech Campus', type: 'Solar PPA', amount: '$48,200', status: 'pending', date: '2026-03-01' },
  { deal: 'DEAL-2778', customer: 'Highpoint Distribution', type: 'Wind REC', amount: '$9,100', status: 'pending', date: '2026-02-22' },
  { deal: 'DEAL-2766', customer: 'Orion Manufacturing', type: 'Gas + Carbon', amount: '$22,400', status: 'pending', date: '2026-02-14' },
] as const

const AGENT_ACTIVITY = [
  { agent: 'Renewal Scout', action: 'Flagged 3 accounts expiring <30d', time: '4m ago', status: 'active' },
  { agent: 'Quote Builder', action: 'Generated 7 price proposals for NovaTech', time: '22m ago', status: 'active' },
  { agent: 'Compliance Watch', action: 'KYC refresh required for 2 customers', time: '1h ago', status: 'alert' },
  { agent: 'Market Intel', action: 'Gas spot price up 4.2% — 8 deals at risk', time: '3h ago', status: 'alert' },
  { agent: 'RWA Tokenizer', action: 'Prairie Wind PPA tokenization queued', time: '6h ago', status: 'active' },
] as const

function urgencyBadge(u: string) {
  const map: Record<string, { bg: string; color: string }> = {
    critical: { bg: 'rgba(239,68,68,0.12)', color: '#ef4444' },
    high: { bg: 'rgba(245,158,11,0.12)', color: '#f59e0b' },
    medium: { bg: 'rgba(91,110,244,0.12)', color: '#5b6ef4' },
    low: { bg: 'rgba(136,136,160,0.1)', color: '#8888a0' },
  }
  return map[u] ?? map.low
}

export const metadata = { title: 'Dashboard — Broker OS' }

export default function BrokerOSDashboard() {
  return (
    <div>
      {/* Page header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(212,168,67,0.08)',
            border: '1px solid rgba(212,168,67,0.2)',
            borderRadius: 4,
            padding: '0.2rem 0.65rem',
            fontSize: '0.65rem',
            fontWeight: 700,
            color: 'var(--color-gold)',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            marginBottom: '0.6rem',
          }}
        >
          <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--color-gold)', display: 'inline-block' }} />
          Broker OS — Deal Origination &amp; Servicing
        </div>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Dashboard</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
          Energy &amp; RWA brokerage operations · As of March 30, 2026
        </p>
      </div>

      {/* KPI Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
          gap: '1rem',
          marginBottom: '1.75rem',
        }}
      >
        {KPI_CARDS.map((card) => (
          <div
            key={card.label}
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderTop: `2px solid ${card.color}`,
              borderRadius: 8,
              padding: '1.25rem',
            }}
          >
            <div style={{ fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'var(--color-text-secondary)', marginBottom: '0.6rem' }}>
              {card.label}
            </div>
            <div style={{ fontSize: '1.9rem', fontWeight: 800, letterSpacing: '-0.02em', color: card.color, lineHeight: 1 }}>
              {card.value}
            </div>
            <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
              <div style={{ fontSize: '0.75rem', color: card.deltaPositive ? 'var(--color-success)' : 'var(--color-warning)', fontWeight: 600 }}>
                {card.deltaPositive ? '▲' : '▼'} {card.delta}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>{card.sub}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Main grid: Pipeline + Renewals + Commissions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>

        {/* Deal Pipeline funnel */}
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>Deal Pipeline</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', marginTop: '0.1rem' }}>84 active across 6 stages · $72.6M total value</div>
            </div>
            <Link href="/broker-os/deals" style={{ fontSize: '0.75rem', color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600 }}>
              View all →
            </Link>
          </div>
          <div style={{ padding: '0.75rem 1.25rem' }}>
            {PIPELINE_STAGES.map((s) => {
              const pct = Math.round((s.count / 84) * 100)
              return (
                <div key={s.stage} style={{ marginBottom: '0.75rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ width: 8, height: 8, borderRadius: '50%', background: s.color, display: 'inline-block', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>{s.stage}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>
                      <span style={{ color: s.color, fontWeight: 700 }}>{s.count}</span>
                      <span>{s.value}</span>
                    </div>
                  </div>
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 3, height: 5, overflow: 'hidden' }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: s.color, borderRadius: 3, transition: 'width 0.3s' }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Renewal Alerts */}
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>Renewal Alerts</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', marginTop: '0.1rem' }}>23 contracts expiring within 90 days</div>
            </div>
            <Link href="/broker-os/renewals" style={{ fontSize: '0.75rem', color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600 }}>
              Manage →
            </Link>
          </div>
          <div>
            {RENEWAL_ALERTS.map((r) => {
              const badge = urgencyBadge(r.urgency)
              return (
                <div
                  key={r.customer}
                  style={{
                    padding: '0.875rem 1.25rem',
                    borderBottom: '1px solid var(--color-border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.85rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {r.customer}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '0.1rem' }}>{r.contract}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div
                      style={{
                        display: 'inline-block',
                        background: badge.bg,
                        color: badge.color,
                        borderRadius: 4,
                        padding: '0.15rem 0.5rem',
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        marginBottom: '0.2rem',
                      }}
                    >
                      {r.daysLeft}d left
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>{r.annualValue}/yr</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Bottom grid: Recent Deals + Commissions + Agent Activity */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '1.25rem', marginBottom: '1.25rem' }}>

        {/* Recent Deals */}
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>Recent Deals</div>
            <Link href="/broker-os/deals" style={{ fontSize: '0.75rem', color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600 }}>
              All deals →
            </Link>
          </div>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                {['Deal', 'Customer', 'Type', 'Value', 'Stage'].map((h) => (
                  <th
                    key={h}
                    style={{
                      padding: '0.5rem 1rem',
                      textAlign: 'left',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--color-text-secondary)',
                    }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RECENT_DEALS.map((d) => (
                <tr key={d.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-accent)', fontWeight: 600 }}>{d.id}</div>
                    {d.rwa && (
                      <div
                        style={{
                          display: 'inline-block',
                          fontSize: '0.58rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.06em',
                          background: 'rgba(212,168,67,0.12)',
                          color: 'var(--color-gold)',
                          borderRadius: 3,
                          padding: '0.1rem 0.3rem',
                          marginTop: '0.2rem',
                        }}
                      >
                        RWA
                      </div>
                    )}
                  </td>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.82rem', fontWeight: 600 }}>{d.customer}</td>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>{d.type}<br /><span style={{ fontSize: '0.7rem' }}>{d.term}</span></td>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{d.value}</td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <span
                      style={{
                        display: 'inline-block',
                        background: `${d.stageColor}18`,
                        color: d.stageColor,
                        borderRadius: 4,
                        padding: '0.2rem 0.6rem',
                        fontSize: '0.72rem',
                        fontWeight: 700,
                      }}
                    >
                      {d.stage}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Commissions */}
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>Commissions</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', marginTop: '0.1rem' }}>YTD: $347,200 · Pending: $184,320</div>
            </div>
            <Link href="/broker-os/commissions" style={{ fontSize: '0.75rem', color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600 }}>
              Full report →
            </Link>
          </div>
          <div>
            {COMMISSION_RECENT.map((c) => (
              <div
                key={c.deal}
                style={{
                  padding: '0.75rem 1.25rem',
                  borderBottom: '1px solid var(--color-border)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.82rem' }}>{c.customer}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>
                    {c.type} · {c.date}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: c.status === 'paid' ? 'var(--color-success)' : 'var(--color-gold)' }}>
                    {c.amount}
                  </div>
                  <div
                    style={{
                      display: 'inline-block',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      color: c.status === 'paid' ? 'var(--color-success)' : 'var(--color-warning)',
                      marginTop: '0.15rem',
                    }}
                  >
                    {c.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agent Activity */}
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden', marginBottom: '1.25rem' }}>
        <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontWeight: 700, fontSize: '0.92rem' }}>Agent Console — Live Activity</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', marginTop: '0.1rem' }}>5 active agents · Real-time deal intelligence</div>
          </div>
          <Link href="/broker-os/agent-console" style={{ fontSize: '0.75rem', color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 600 }}>
            Console →
          </Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 0 }}>
          {AGENT_ACTIVITY.map((a) => (
            <div
              key={a.agent}
              style={{
                padding: '0.875rem 1.25rem',
                borderRight: '1px solid var(--color-border)',
                borderBottom: '1px solid var(--color-border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: a.status === 'active' ? 'var(--color-success)' : 'var(--color-warning)',
                    flexShrink: 0,
                    display: 'inline-block',
                  }}
                />
                <span style={{ fontWeight: 700, fontSize: '0.82rem' }}>{a.agent}</span>
                <span style={{ marginLeft: 'auto', fontSize: '0.68rem', color: 'var(--color-text-secondary)' }}>{a.time}</span>
              </div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{a.action}</div>
            </div>
          ))}
        </div>
      </div>

      {/* RWA Market Pulse */}
      <div
        style={{
          background: 'rgba(91,110,244,0.04)',
          border: '1px solid rgba(91,110,244,0.2)',
          borderRadius: 8,
          padding: '1.25rem',
          display: 'flex',
          gap: '2rem',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-accent)', marginBottom: '0.3rem' }}>
            RWA Market Pulse
          </div>
          <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.2rem' }}>
            Global tokenized RWA market: <span style={{ color: 'var(--color-gold)' }}>$21.4B</span> — Energy sector growing +34% YoY
          </div>
          <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>
            Natural gas spot +4.2% · ISO-NE power +1.8% · Carbon credit index -0.9% · Solar REC premium +2.1%
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexShrink: 0 }}>
          <Link
            href="/broker-os/deals"
            style={{
              background: 'var(--color-accent)',
              color: '#fff',
              padding: '0.6rem 1.25rem',
              borderRadius: 6,
              fontWeight: 700,
              fontSize: '0.82rem',
              textDecoration: 'none',
            }}
          >
            + New Deal
          </Link>
          <Link
            href="/broker-os/agent-console"
            style={{
              border: '1px solid var(--color-border)',
              color: 'var(--color-text-secondary)',
              padding: '0.6rem 1.25rem',
              borderRadius: 6,
              fontWeight: 600,
              fontSize: '0.82rem',
              textDecoration: 'none',
            }}
          >
            Market Intel
          </Link>
        </div>
      </div>
    </div>
  )
}
