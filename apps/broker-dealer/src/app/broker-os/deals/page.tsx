const PIPELINE_STAGES = [
  { stage: 'Prospect', count: 22, value: '$8.4M', color: 'var(--color-text-secondary)' },
  { stage: 'Qualified', count: 17, value: '$12.1M', color: '#818cf8' },
  { stage: 'Quoted', count: 14, value: '$9.8M', color: 'var(--color-accent)' },
  { stage: 'Negotiation', count: 9, value: '$7.2M', color: '#a78bfa' },
  { stage: 'Contracting', count: 6, value: '$6.3M', color: 'var(--color-gold)' },
  { stage: 'Closed Won', count: 47, value: '$29.7M', color: 'var(--color-success)' },
] as const

const DEALS = [
  {
    id: 'DL-4802',
    customer: 'SunPath Manufacturing',
    cx_id: 'CX-1038',
    type: 'Solar PPA',
    term: '20yr',
    volume: '240 GWh/yr',
    value: '$8.4M',
    stage: 'Closed Won',
    margin: '4.2%',
    rep: 'A. Bautista',
    rwa: true,
    rwa_ticker: 'SPPA-1038',
    signed: '2026-01-15',
    start_date: '2026-03-01',
  },
  {
    id: 'DL-4798',
    customer: 'Nexus Industrial Corp',
    cx_id: 'CX-1041',
    type: 'Natural Gas Fixed',
    term: '2yr',
    volume: '84 MMBtu/yr',
    value: '$1.2M',
    stage: 'Closed Won',
    margin: '3.8%',
    rep: 'D. Monroe',
    rwa: true,
    rwa_ticker: 'NGFX-1041',
    signed: '2026-01-08',
    start_date: '2026-02-01',
  },
  {
    id: 'DL-4784',
    customer: 'Prairie Wind LLC',
    cx_id: 'CX-1017',
    type: 'Wind PPA',
    term: '20yr',
    volume: '180 MW',
    value: '$22.7M',
    stage: 'Closed Won',
    margin: '2.9%',
    rep: 'T. Ashworth',
    rwa: true,
    rwa_ticker: 'WPPA-1017',
    signed: '2025-11-12',
    start_date: '2026-01-01',
  },
  {
    id: 'DL-4773',
    customer: 'Coastal Logistics Group',
    cx_id: 'CX-1021',
    type: 'Electricity Fixed',
    term: '3yr',
    volume: '6.2 GWh/yr',
    value: '$1.4M',
    stage: 'Contracting',
    margin: '4.1%',
    rep: 'A. Bautista',
    rwa: false,
    rwa_ticker: null,
    signed: null,
    start_date: '2026-04-01',
  },
  {
    id: 'DL-4769',
    customer: 'Metro Transit Authority',
    cx_id: 'CX-1004',
    type: 'RECs Bundle',
    term: '5yr',
    volume: '88 GWh/yr',
    value: '$920K',
    stage: 'Negotiation',
    margin: '5.6%',
    rep: 'D. Monroe',
    rwa: true,
    rwa_ticker: 'REC-1004',
    signed: null,
    start_date: null,
  },
  {
    id: 'DL-4751',
    customer: 'Hartwell Steel Works',
    cx_id: 'CX-1009',
    type: 'Natural Gas Indexed',
    term: '1yr',
    volume: '310 MMBtu/yr',
    value: '$680K',
    stage: 'Quoted',
    margin: '3.1%',
    rep: 'R. Solis',
    rwa: false,
    rwa_ticker: null,
    signed: null,
    start_date: null,
  },
  {
    id: 'DL-4744',
    customer: 'Cascade Brewing Co.',
    cx_id: 'CX-0998',
    type: 'Carbon Credits',
    term: '2yr',
    volume: '4,200 tCO₂e',
    value: '$218K',
    stage: 'Quoted',
    margin: '12.4%',
    rep: 'T. Ashworth',
    rwa: true,
    rwa_ticker: null,
    signed: null,
    start_date: null,
  },
  {
    id: 'DL-4730',
    customer: 'Ridgeline Hotels LLC',
    cx_id: 'CX-1029',
    type: 'Electricity Indexed',
    term: '2yr',
    volume: '12 GWh/yr',
    value: '$340K',
    stage: 'Qualified',
    margin: '4.8%',
    rep: 'A. Bautista',
    rwa: false,
    rwa_ticker: null,
    signed: null,
    start_date: null,
  },
] as const

const DEAL_TYPES = ['All', 'Natural Gas Fixed', 'Natural Gas Indexed', 'Electricity Fixed', 'Electricity Indexed', 'Solar PPA', 'Wind PPA', 'RECs Bundle', 'Carbon Credits'] as const

const STAGE_STYLES: Record<string, { bg: string; color: string }> = {
  'Prospect':     { bg: 'rgba(136,136,160,0.1)', color: 'var(--color-text-secondary)' },
  'Qualified':    { bg: 'rgba(129,140,248,0.12)', color: '#818cf8' },
  'Quoted':       { bg: 'rgba(91,110,244,0.12)', color: 'var(--color-accent)' },
  'Negotiation':  { bg: 'rgba(167,139,250,0.12)', color: '#a78bfa' },
  'Contracting':  { bg: 'rgba(212,168,67,0.12)', color: 'var(--color-gold)' },
  'Closed Won':   { bg: 'rgba(34,197,94,0.1)',  color: 'var(--color-success)' },
  'Closed Lost':  { bg: 'rgba(239,68,68,0.1)',  color: 'var(--color-danger)' },
}

export const metadata = { title: 'Deals — Broker OS' }

export default function DealsPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Deals</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
            Live deal pipeline · energy contract origination · RWA tokenization
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '0.55rem 1rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Kanban View</button>
          <button style={{ background: 'var(--color-accent)', border: 'none', borderRadius: 6, padding: '0.55rem 1.1rem', fontSize: '0.82rem', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>+ New Deal</button>
        </div>
      </div>

      {/* Pipeline funnel */}
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.25rem', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          Pipeline Summary — $72.6M Total Active Value
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '0.75rem' }}>
          {PIPELINE_STAGES.map((ps) => (
            <div key={ps.stage} style={{ textAlign: 'center' }}>
              <div
                style={{
                  height: 6,
                  background: ps.color,
                  borderRadius: 3,
                  marginBottom: '0.6rem',
                  opacity: 0.8,
                }}
              />
              <div style={{ fontSize: '1.3rem', fontWeight: 800, color: ps.color, lineHeight: 1 }}>{ps.count}</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)', margin: '0.2rem 0' }}>{ps.stage}</div>
              <div style={{ fontSize: '0.78rem', fontWeight: 700 }}>{ps.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ flex: 1, minWidth: 220, background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '0.5rem 0.875rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>
          ⌕ Search deals, customers, types...
        </div>
        {['All Stages', 'Active', 'Closed Won', 'Closed Lost'].map((f) => (
          <span key={f} style={{ padding: '0.4rem 0.75rem', borderRadius: 4, background: f === 'All Stages' ? 'var(--color-accent)' : 'var(--color-surface)', border: `1px solid ${f === 'All Stages' ? 'var(--color-accent)' : 'var(--color-border)'}`, color: f === 'All Stages' ? '#fff' : 'var(--color-text-secondary)', fontSize: '0.78rem', fontWeight: f === 'All Stages' ? 700 : 500, cursor: 'pointer' }}>
            {f}
          </span>
        ))}
        <select style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '0.45rem 0.75rem', fontSize: '0.78rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>
          <option>All Deal Types</option>
          {DEAL_TYPES.filter(t => t !== 'All').map(t => <option key={t}>{t}</option>)}
        </select>
        <span style={{ padding: '0.3rem 0.6rem', borderRadius: 4, background: 'rgba(212,168,67,0.12)', border: '1px solid rgba(212,168,67,0.2)', color: 'var(--color-gold)', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>⬡ RWA Only</span>
      </div>

      {/* Deals Table */}
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              {['Deal ID', 'Customer', 'Type', 'Term / Volume', 'Value', 'Margin', 'Stage', 'RWA Token', 'Rep', 'Actions'].map((h) => (
                <th key={h} style={{ padding: '0.7rem 1rem', textAlign: 'left', fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', background: 'rgba(255,255,255,0.02)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {DEALS.map((d) => {
              const stageStyle = STAGE_STYLES[d.stage] || STAGE_STYLES['Prospect']
              return (
                <tr key={d.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.875rem 1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-accent)', fontWeight: 600 }}>{d.id}</span>
                  </td>
                  <td style={{ padding: '0.875rem 1rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{d.customer}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>{d.cx_id}</div>
                  </td>
                  <td style={{ padding: '0.875rem 1rem', fontSize: '0.82rem', fontWeight: 600, color: 'var(--color-text-primary)' }}>{d.type}</td>
                  <td style={{ padding: '0.875rem 1rem' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{d.term}</div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>{d.volume}</div>
                  </td>
                  <td style={{ padding: '0.875rem 1rem', fontWeight: 800, fontSize: '0.9rem', color: 'var(--color-gold)' }}>{d.value}</td>
                  <td style={{ padding: '0.875rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--color-success)' }}>{d.margin}</td>
                  <td style={{ padding: '0.875rem 1rem' }}>
                    <span style={{ display: 'inline-block', padding: '0.15rem 0.55rem', borderRadius: 4, fontSize: '0.7rem', fontWeight: 700, background: stageStyle.bg, color: stageStyle.color }}>
                      {d.stage}
                    </span>
                  </td>
                  <td style={{ padding: '0.875rem 1rem' }}>
                    {d.rwa && d.rwa_ticker && (
                      <span style={{ display: 'inline-block', padding: '0.15rem 0.5rem', borderRadius: 4, fontSize: '0.65rem', fontWeight: 700, background: 'rgba(212,168,67,0.12)', color: 'var(--color-gold)', fontFamily: 'var(--font-mono)' }}>
                        ⬡ {d.rwa_ticker}
                      </span>
                    )}
                    {d.rwa && !d.rwa_ticker && (
                      <span style={{ display: 'inline-block', padding: '0.15rem 0.5rem', borderRadius: 4, fontSize: '0.65rem', fontWeight: 700, background: 'rgba(212,168,67,0.08)', color: 'rgba(212,168,67,0.6)', fontFamily: 'var(--font-mono)' }}>
                        ⬡ Eligible
                      </span>
                    )}
                  </td>
                  <td style={{ padding: '0.875rem 1rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{d.rep}</td>
                  <td style={{ padding: '0.875rem 1rem' }}>
                    <div style={{ display: 'flex', gap: '0.4rem' }}>
                      <button style={{ background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 4, padding: '0.25rem 0.6rem', fontSize: '0.72rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>View</button>
                      <button style={{ background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 4, padding: '0.25rem 0.6rem', fontSize: '0.72rem', color: 'var(--color-accent)', cursor: 'pointer' }}>Edit</button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>
        <span>Showing 8 of 84 active deals</span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 4, padding: '0.3rem 0.7rem', fontSize: '0.75rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Previous</button>
          <button style={{ background: 'var(--color-accent)', border: 'none', borderRadius: 4, padding: '0.3rem 0.7rem', fontSize: '0.75rem', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Next</button>
        </div>
      </div>
    </div>
  )
}
