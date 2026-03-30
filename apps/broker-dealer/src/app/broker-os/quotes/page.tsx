const QUOTES = [
  {
    id: 'QT-9914',
    customer: 'Hartwell Steel Works',
    cx_id: 'CX-1009',
    deal_id: 'DL-4751',
    type: 'Natural Gas Indexed',
    rate_structure: 'NYMEX + $0.18/MMBtu',
    term: '12 months',
    volume: '310 MMBtu/yr',
    total_value: '$680K',
    margin: '$0.18/MMBtu',
    status: 'Sent',
    sent_date: '2026-03-21',
    expires: '2026-04-21',
    days_left: 12,
    rep: 'R. Solis',
    valid: true,
  },
  {
    id: 'QT-9909',
    customer: 'Metro Transit Authority',
    cx_id: 'CX-1004',
    deal_id: 'DL-4769',
    type: 'RECs Bundle',
    rate_structure: '$10.45/REC (Class I)',
    term: '60 months',
    volume: '88,000 RECs/yr',
    total_value: '$920K',
    margin: '$0.45/REC',
    status: 'Accepted',
    sent_date: '2026-03-10',
    expires: null,
    days_left: null,
    rep: 'D. Monroe',
    valid: true,
  },
  {
    id: 'QT-9903',
    customer: 'Cascade Brewing Co.',
    cx_id: 'CX-0998',
    deal_id: 'DL-4744',
    type: 'Carbon Credits',
    rate_structure: '$52.00/tCO₂e (Verra VCS)',
    term: '24 months',
    volume: '4,200 tCO₂e',
    total_value: '$218K',
    margin: '$4.50/tCO₂e',
    status: 'Sent',
    sent_date: '2026-03-18',
    expires: '2026-04-18',
    days_left: 18,
    rep: 'T. Ashworth',
    valid: true,
  },
  {
    id: 'QT-9896',
    customer: 'Ridgeline Hotels LLC',
    cx_id: 'CX-1029',
    deal_id: 'DL-4730',
    type: 'Electricity Indexed',
    rate_structure: 'Day-Ahead LMP + $3.20/MWh',
    term: '24 months',
    volume: '12 GWh/yr',
    total_value: '$340K',
    margin: '$3.20/MWh',
    status: 'Draft',
    sent_date: null,
    expires: null,
    days_left: null,
    rep: 'A. Bautista',
    valid: false,
  },
  {
    id: 'QT-9882',
    customer: 'Pioneer Grain Co.',
    cx_id: 'CX-0990',
    deal_id: null,
    type: 'Natural Gas Fixed',
    rate_structure: '$3.84/MMBtu all-in',
    term: '36 months',
    volume: '52 MMBtu/yr',
    total_value: '$600K',
    margin: '$0.22/MMBtu',
    status: 'Declined',
    sent_date: '2026-02-14',
    expires: null,
    days_left: null,
    rep: 'D. Monroe',
    valid: false,
  },
  {
    id: 'QT-9876',
    customer: 'Lakeland Cold Storage',
    cx_id: 'CX-0985',
    deal_id: null,
    type: 'Electricity Fixed',
    rate_structure: '$0.0812/kWh all-in',
    term: '36 months',
    volume: '5.4 GWh/yr',
    total_value: '$438K',
    margin: '$0.008/kWh',
    status: 'Expired',
    sent_date: '2026-01-20',
    expires: '2026-02-20',
    days_left: null,
    rep: 'R. Solis',
    valid: false,
  },
] as const

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  Draft:    { bg: 'rgba(136,136,160,0.1)', color: 'var(--color-text-secondary)' },
  Sent:     { bg: 'rgba(91,110,244,0.12)', color: 'var(--color-accent)' },
  Accepted: { bg: 'rgba(34,197,94,0.1)',   color: 'var(--color-success)' },
  Declined: { bg: 'rgba(239,68,68,0.1)',   color: 'var(--color-danger)' },
  Expired:  { bg: 'rgba(239,68,68,0.06)',  color: '#888' },
}

const QUOTE_STATS = [
  { label: 'Quotes Sent (30d)', value: '38' },
  { label: 'Acceptance Rate', value: '44%' },
  { label: 'Pending Value', value: '$4.2M' },
  { label: 'Avg Quote → Close', value: '12 days' },
  { label: 'Expiring This Week', value: '7' },
  { label: 'Avg Margin', value: '4.3%' },
] as const

export const metadata = { title: 'Quotes — Broker OS' }

export default function QuotesPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Quotes</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
            Pricing proposals · rate structures · quote lifecycle tracking
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '0.55rem 1rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Rate Calculator</button>
          <button style={{ background: 'var(--color-accent)', border: 'none', borderRadius: 6, padding: '0.55rem 1.1rem', fontSize: '0.82rem', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>+ Build Quote</button>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden', marginBottom: '1.5rem' }}>
        {QUOTE_STATS.map((s) => (
          <div key={s.label} style={{ background: 'var(--color-surface)', padding: '0.875rem 1rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-accent)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)', marginTop: '0.3rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: 220, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '0.5rem 0.875rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
          ⌕ Search quotes, customers, or types...
        </div>
        {['All', 'Draft', 'Sent', 'Accepted', 'Declined', 'Expired'].map((f) => (
          <span key={f} style={{ padding: '0.4rem 0.75rem', borderRadius: 4, background: f === 'All' ? 'var(--color-accent)' : 'var(--color-surface)', border: `1px solid ${f === 'All' ? 'var(--color-accent)' : 'var(--color-border)'}`, color: f === 'All' ? '#fff' : 'var(--color-text-secondary)', fontSize: '0.78rem', fontWeight: f === 'All' ? 700 : 500, cursor: 'pointer' }}>
            {f}
          </span>
        ))}
      </div>

      {/* Grid of quote cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(420px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
        {QUOTES.map((q) => {
          const ss = STATUS_STYLE[q.status] || STATUS_STYLE.Draft
          return (
            <div
              key={q.id}
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 8,
                padding: '1.25rem',
                borderTop: `2px solid ${ss.color}`,
                opacity: q.status === 'Expired' || q.status === 'Declined' ? 0.65 : 1,
              }}
            >
              {/* Card header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-accent)', fontWeight: 600 }}>{q.id}</span>
                    {q.deal_id && (
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: 'var(--color-text-secondary)' }}>→ {q.deal_id}</span>
                    )}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{q.customer}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', marginTop: '0.1rem' }}>{q.cx_id} · Rep: {q.rep}</div>
                </div>
                <span style={{ display: 'inline-block', padding: '0.2rem 0.65rem', borderRadius: 4, fontSize: '0.72rem', fontWeight: 700, background: ss.bg, color: ss.color }}>
                  {q.status}
                </span>
              </div>

              {/* Quote details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem', marginBottom: '0.875rem' }}>
                {[
                  { label: 'Commodity', val: q.type },
                  { label: 'Rate Structure', val: q.rate_structure },
                  { label: 'Term', val: q.term },
                  { label: 'Volume', val: q.volume },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ fontSize: '0.63rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', marginBottom: '0.1rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{item.val}</div>
                  </div>
                ))}
              </div>

              {/* Value / margin strip */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', borderRadius: 6, padding: '0.625rem 0.875rem', marginBottom: '0.875rem' }}>
                <div>
                  <div style={{ fontSize: '0.63rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Total Value</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-gold)' }}>{q.total_value}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.63rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Broker Margin</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--color-success)' }}>{q.margin}</div>
                </div>
                {q.days_left !== null && (
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.63rem', color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Expires In</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 700, color: q.days_left <= 7 ? 'var(--color-danger)' : 'var(--color-warning)' }}>{q.days_left}d</div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{ flex: 1, background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 5, padding: '0.45rem', fontSize: '0.78rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>View PDF</button>
                {q.status === 'Draft' && (
                  <button style={{ flex: 1, background: 'var(--color-accent)', border: 'none', borderRadius: 5, padding: '0.45rem', fontSize: '0.78rem', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>Send Quote</button>
                )}
                {q.status === 'Sent' && (
                  <button style={{ flex: 1, background: 'var(--color-success)', border: 'none', borderRadius: 5, padding: '0.45rem', fontSize: '0.78rem', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>Mark Accepted</button>
                )}
                {(q.status === 'Declined' || q.status === 'Expired') && (
                  <button style={{ flex: 1, background: 'var(--color-surface)', border: '1px solid var(--color-accent)', borderRadius: 5, padding: '0.45rem', fontSize: '0.78rem', color: 'var(--color-accent)', fontWeight: 700, cursor: 'pointer' }}>Re-Quote</button>
                )}
                {q.status === 'Accepted' && (
                  <button style={{ flex: 1, background: 'var(--color-gold)', border: 'none', borderRadius: 5, padding: '0.45rem', fontSize: '0.78rem', color: '#000', fontWeight: 700, cursor: 'pointer' }}>Convert to Deal</button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
