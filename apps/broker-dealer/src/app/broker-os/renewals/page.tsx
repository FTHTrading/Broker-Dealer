const RENEWALS = [
  {
    id: 'RN-3301',
    customer: 'Hartwell Steel Works',
    cx_id: 'CX-1009',
    deal_id: 'DL-4009',
    type: 'Natural Gas Fixed',
    volume: '310 MMBtu/yr',
    annual_value: '$680K',
    current_rate: '$3.62/MMBtu',
    expiry: '2026-04-28',
    days_left: 19,
    urgency: 'Critical',
    rep: 'R. Solis',
    contact: 'G. Hartwell III',
    outreach_status: 'Quoted — Awaiting Signature',
    auto_renew: false,
    rwa: false,
  },
  {
    id: 'RN-3298',
    customer: 'Metro Transit Authority',
    cx_id: 'CX-1004',
    deal_id: 'DL-3882',
    type: 'Electricity Fixed',
    volume: '88 GWh/yr',
    annual_value: '$1.4M',
    current_rate: '$0.0778/kWh',
    expiry: '2026-05-15',
    days_left: 36,
    urgency: 'High',
    rep: 'D. Monroe',
    contact: 'Commissioner Vasquez',
    outreach_status: 'Meeting Scheduled — Apr 14',
    auto_renew: false,
    rwa: false,
  },
  {
    id: 'RN-3295',
    customer: 'Cascade Brewing Co.',
    cx_id: 'CX-0998',
    deal_id: 'DL-3771',
    type: 'Electricity Indexed',
    volume: '3.1 GWh/yr',
    annual_value: '$210K',
    current_rate: 'DA LMP + $3.10/MWh',
    expiry: '2026-05-31',
    days_left: 52,
    urgency: 'High',
    rep: 'T. Ashworth',
    contact: 'Jay Tanner',
    outreach_status: 'Initial Contact Made',
    auto_renew: false,
    rwa: false,
  },
  {
    id: 'RN-3290',
    customer: 'Ridgeline Hotels LLC',
    cx_id: 'CX-1029',
    deal_id: 'DL-3612',
    type: 'Natural Gas Indexed',
    volume: '8.2 MMBtu/yr',
    annual_value: '$140K',
    current_rate: 'NYMEX + $0.21/MMBtu',
    expiry: '2026-07-31',
    days_left: 83,
    urgency: 'Medium',
    rep: 'A. Bautista',
    contact: 'Margot Fain',
    outreach_status: 'Not Yet Contacted',
    auto_renew: true,
    rwa: false,
  },
  {
    id: 'RN-3287',
    customer: 'Lakeland Cold Storage',
    cx_id: 'CX-0985',
    deal_id: 'DL-3540',
    type: 'Electricity Fixed',
    volume: '5.4 GWh/yr',
    annual_value: '$438K',
    current_rate: '$0.0812/kWh',
    expiry: '2026-07-20',
    days_left: 72,
    urgency: 'Medium',
    rep: 'R. Solis',
    contact: 'Patricia Owen',
    outreach_status: 'Not Yet Contacted',
    auto_renew: false,
    rwa: false,
  },
  {
    id: 'RN-3282',
    customer: 'Nexus Industrial Corp',
    cx_id: 'CX-1041',
    deal_id: 'DL-3210',
    type: 'Natural Gas Fixed',
    volume: '84 MMBtu/yr',
    annual_value: '$1.2M',
    current_rate: '$3.58/MMBtu',
    expiry: '2026-08-15',
    days_left: 98,
    urgency: 'Low',
    rep: 'D. Monroe',
    contact: 'Dana Whitfield',
    outreach_status: 'Auto-Outreach Queued (Jul 15)',
    auto_renew: false,
    rwa: true,
  },
  {
    id: 'RN-3278',
    customer: 'Pioneer Grain Co.',
    cx_id: 'CX-0990',
    deal_id: 'DL-3156',
    type: 'Natural Gas Fixed',
    volume: '52 MMBtu/yr',
    annual_value: '$600K',
    current_rate: '$3.62/MMBtu',
    expiry: '2026-09-01',
    days_left: 115,
    urgency: 'Low',
    rep: 'D. Monroe',
    contact: 'T. Beaumont',
    outreach_status: 'Not Yet Contacted',
    auto_renew: false,
    rwa: false,
  },
] as const

const URGENCY_STYLE: Record<string, { bg: string; color: string }> = {
  Critical: { bg: 'rgba(239,68,68,0.12)',   color: 'var(--color-danger)' },
  High:     { bg: 'rgba(245,158,11,0.12)',  color: 'var(--color-warning)' },
  Medium:   { bg: 'rgba(91,110,244,0.12)',  color: 'var(--color-accent)' },
  Low:      { bg: 'rgba(34,197,94,0.1)',    color: 'var(--color-success)' },
}

const RENEWAL_STATS = [
  { label: 'Renewals Due (90d)',  value: '23', color: 'var(--color-warning)' },
  { label: 'Critical (<30d)',     value: '4',  color: 'var(--color-danger)' },
  { label: 'High (<60d)',         value: '8',  color: 'var(--color-warning)' },
  { label: 'Renewal AUM at Risk', value: '$8.2M', color: 'var(--color-accent)' },
  { label: 'Auto-Renew Enrolled', value: '11', color: 'var(--color-success)' },
  { label: 'Avg Renewal Rate',    value: '82%', color: 'var(--color-gold)' },
] as const

export const metadata = { title: 'Renewals — Broker OS' }

export default function RenewalsPage() {
  return (
    <div>
      <div style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Renewals</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
            Contract expiration tracker · AI-assisted outreach · retention intelligence
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '0.55rem 1rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Export</button>
          <button style={{ background: 'var(--color-warning)', border: 'none', borderRadius: 6, padding: '0.55rem 1.1rem', fontSize: '0.82rem', color: '#000', fontWeight: 700, cursor: 'pointer' }}>Launch Renewal Campaign</button>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden', marginBottom: '1.5rem' }}>
        {RENEWAL_STATS.map((s) => (
          <div key={s.label} style={{ background: 'var(--color-surface)', padding: '0.875rem 1rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)', marginTop: '0.3rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {['All', 'Critical (<30d)', 'High (<60d)', 'Medium (<90d)', 'Low (90d+)'].map((f) => {
          const isAll = f === 'All'
          return (
            <span key={f} style={{ padding: '0.4rem 0.75rem', borderRadius: 4, background: isAll ? 'var(--color-danger)' : 'var(--color-surface)', border: `1px solid ${isAll ? 'var(--color-danger)' : 'var(--color-border)'}`, color: isAll ? '#fff' : 'var(--color-text-secondary)', fontSize: '0.78rem', fontWeight: isAll ? 700 : 500, cursor: 'pointer' }}>
              {f}
            </span>
          )
        })}
      </div>

      {/* Renewal cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {RENEWALS.map((r) => {
          const urgStyle = URGENCY_STYLE[r.urgency]
          return (
            <div key={r.id} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.1rem 1.25rem', borderLeft: `3px solid ${urgStyle.color}` }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr 1fr auto', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                {/* Customer */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.15rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-accent)' }}>{r.id}</span>
                    {r.auto_renew && (
                      <span style={{ padding: '0.1rem 0.4rem', borderRadius: 3, fontSize: '0.6rem', fontWeight: 700, background: 'rgba(34,197,94,0.12)', color: 'var(--color-success)' }}>AUTO</span>
                    )}
                    {r.rwa && (
                      <span style={{ padding: '0.1rem 0.4rem', borderRadius: 3, fontSize: '0.6rem', fontWeight: 700, background: 'rgba(212,168,67,0.12)', color: 'var(--color-gold)' }}>⬡ RWA</span>
                    )}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{r.customer}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', marginTop: '0.1rem' }}>{r.contact} · {r.rep} · {r.type}</div>
                </div>

                {/* Annual Value */}
                <div>
                  <div style={{ fontSize: '0.63rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', marginBottom: '0.15rem' }}>Annual Value</div>
                  <div style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-gold)' }}>{r.annual_value}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>{r.volume}</div>
                </div>

                {/* Rate */}
                <div>
                  <div style={{ fontSize: '0.63rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', marginBottom: '0.15rem' }}>Current Rate</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{r.current_rate}</div>
                </div>

                {/* Expiry */}
                <div>
                  <div style={{ fontSize: '0.63rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', marginBottom: '0.15rem' }}>Expiry</div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, fontFamily: 'var(--font-mono)', color: urgStyle.color }}>{r.expiry}</div>
                  <div style={{ fontSize: '0.7rem', color: urgStyle.color, fontWeight: 600 }}>{r.days_left}d remaining</div>
                </div>

                {/* Outreach */}
                <div>
                  <div style={{ fontSize: '0.63rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', marginBottom: '0.15rem' }}>Outreach</div>
                  <span style={{ display: 'inline-block', padding: '0.15rem 0.5rem', borderRadius: 4, fontSize: '0.7rem', fontWeight: 600, background: urgStyle.bg, color: urgStyle.color }}>
                    {r.urgency}
                  </span>
                  <div style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)', marginTop: '0.25rem' }}>{r.outreach_status}</div>
                </div>

                {/* Actions */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <button style={{ background: 'var(--color-accent)', border: 'none', borderRadius: 5, padding: '0.4rem 0.875rem', fontSize: '0.75rem', color: '#fff', fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap' }}>Generate Quote</button>
                  <button style={{ background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 5, padding: '0.3rem 0.875rem', fontSize: '0.72rem', color: 'var(--color-text-secondary)', cursor: 'pointer', whiteSpace: 'nowrap' }}>Send Outreach</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
