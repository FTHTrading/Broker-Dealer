const COMMISSIONS = [
  {
    id: 'CM-7821',
    deal_id: 'DL-4802',
    customer: 'SunPath Manufacturing',
    rep: 'A. Bautista',
    type: 'Solar PPA',
    period: 'Mar 2026',
    gross: '$21,840',
    split: '65%',
    net: '$14,196',
    status: 'Paid',
    paid_date: '2026-03-15',
    override: null,
  },
  {
    id: 'CM-7818',
    deal_id: 'DL-4798',
    customer: 'Nexus Industrial Corp',
    rep: 'D. Monroe',
    type: 'Natural Gas Fixed',
    period: 'Mar 2026',
    gross: '$3,800',
    split: '70%',
    net: '$2,660',
    status: 'Paid',
    paid_date: '2026-03-15',
    override: null,
  },
  {
    id: 'CM-7812',
    deal_id: 'DL-4784',
    customer: 'Prairie Wind LLC',
    rep: 'T. Ashworth',
    type: 'Wind PPA',
    period: 'Mar 2026',
    gross: '$54,820',
    split: '60%',
    net: '$32,892',
    status: 'Paid',
    paid_date: '2026-03-15',
    override: '$4,000 (Manager Override)',
  },
  {
    id: 'CM-7809',
    deal_id: 'DL-4773',
    customer: 'Coastal Logistics Group',
    rep: 'A. Bautista',
    type: 'Electricity Fixed',
    period: 'Apr 2026',
    gross: '$4,620',
    split: '65%',
    net: '$3,003',
    status: 'Pending',
    paid_date: null,
    override: null,
  },
  {
    id: 'CM-7804',
    deal_id: 'DL-4769',
    customer: 'Metro Transit Authority',
    rep: 'D. Monroe',
    type: 'RECs Bundle',
    period: 'Apr 2026',
    gross: '$6,240',
    split: '70%',
    net: '$4,368',
    status: 'Pending',
    paid_date: null,
    override: null,
  },
  {
    id: 'CM-7798',
    deal_id: 'DL-4151',
    customer: 'Atlas Data Centers',
    rep: 'R. Solis',
    type: 'Electricity Fixed',
    period: 'Mar 2026',
    gross: '$12,100',
    split: '65%',
    net: '$7,865',
    status: 'Paid',
    paid_date: '2026-03-15',
    override: null,
  },
  {
    id: 'CM-7791',
    deal_id: 'DL-4744',
    customer: 'Cascade Brewing Co.',
    rep: 'T. Ashworth',
    type: 'Carbon Credits',
    period: 'Apr 2026',
    gross: '$1,890',
    split: '60%',
    net: '$1,134',
    status: 'Pending',
    paid_date: null,
    override: null,
  },
] as const

const REPS = [
  { name: 'A. Bautista', ytd: '$64,200', paid: '$38,100', pending: '$26,100', deals: 14, rank: 1 },
  { name: 'T. Ashworth', ytd: '$51,880', paid: '$35,440', pending: '$16,440', deals: 11, rank: 2 },
  { name: 'D. Monroe',   ytd: '$48,320', paid: '$31,200', pending: '$17,120', deals: 12, rank: 3 },
  { name: 'R. Solis',    ytd: '$32,700', paid: '$22,100', pending: '$10,600', deals: 8,  rank: 4 },
] as const

const COMM_STATS = [
  { label: 'Q1 2026 Commissions', value: '$184,320', color: 'var(--color-gold)' },
  { label: 'Paid This Month', value: '$122,748', color: 'var(--color-success)' },
  { label: 'Pending Payout', value: '$61,572', color: 'var(--color-accent)' },
  { label: 'Avg Deal Commission', value: '$3,918', color: 'var(--color-text-primary)' },
] as const

export const metadata = { title: 'Commissions — Broker OS' }

export default function CommissionsPage() {
  return (
    <div>
      <div style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Commissions</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
            Rep earnings · split schedules · payout status · YTD performance
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '0.55rem 1rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Export Report</button>
          <button style={{ background: 'var(--color-gold)', border: 'none', borderRadius: 6, padding: '0.55rem 1.1rem', fontSize: '0.82rem', color: '#000', fontWeight: 700, cursor: 'pointer' }}>Run Payout</button>
        </div>
      </div>

      {/* KPI row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
        {COMM_STATS.map((s) => (
          <div key={s.label} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.1rem 1.25rem', borderTop: `2px solid ${s.color}` }}>
            <div style={{ fontSize: '1.6rem', fontWeight: 800, color: s.color, lineHeight: 1, fontFamily: 'var(--font-mono)' }}>{s.value}</div>
            <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', marginTop: '0.35rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '1.25rem' }}>
        {/* Commission log */}
        <div>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>Commission Log</div>
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                  {['ID', 'Rep', 'Customer', 'Type', 'Period', 'Gross', 'Split', 'Net', 'Status'].map((h) => (
                    <th key={h} style={{ padding: '0.65rem 0.875rem', textAlign: 'left', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', background: 'rgba(255,255,255,0.02)' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMMISSIONS.map((c) => (
                  <tr key={c.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '0.75rem 0.875rem' }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-accent)', fontWeight: 600 }}>{c.id}</div>
                    </td>
                    <td style={{ padding: '0.75rem 0.875rem' }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600 }}>{c.rep}</div>
                      <div style={{ fontSize: '0.65rem', color: 'var(--color-accent)' }}>{c.deal_id}</div>
                    </td>
                    <td style={{ padding: '0.75rem 0.875rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{c.customer}</td>
                    <td style={{ padding: '0.75rem 0.875rem', fontSize: '0.78rem' }}>{c.type}</td>
                    <td style={{ padding: '0.75rem 0.875rem', fontSize: '0.78rem', fontFamily: 'var(--font-mono)' }}>{c.period}</td>
                    <td style={{ padding: '0.75rem 0.875rem', fontWeight: 700, fontSize: '0.85rem' }}>{c.gross}</td>
                    <td style={{ padding: '0.75rem 0.875rem', fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>{c.split}</td>
                    <td style={{ padding: '0.75rem 0.875rem', fontWeight: 800, fontSize: '0.88rem', color: 'var(--color-success)' }}>{c.net}</td>
                    <td style={{ padding: '0.75rem 0.875rem' }}>
                      <span style={{ display: 'inline-block', padding: '0.15rem 0.5rem', borderRadius: 4, fontSize: '0.7rem', fontWeight: 700, background: c.status === 'Paid' ? 'rgba(34,197,94,0.1)' : 'rgba(91,110,244,0.12)', color: c.status === 'Paid' ? 'var(--color-success)' : 'var(--color-accent)' }}>
                        {c.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Rep leaderboard */}
        <div>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>Rep Leaderboard — Q1 2026</div>
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
            {REPS.map((r, i) => (
              <div key={r.name} style={{ padding: '1rem 1.25rem', borderBottom: i < REPS.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                    <span style={{ width: 24, height: 24, borderRadius: '50%', background: i === 0 ? 'var(--color-gold)' : 'var(--color-border)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 800, color: i === 0 ? '#000' : 'var(--color-text-secondary)' }}>
                      {r.rank}
                    </span>
                    <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>{r.name}</span>
                  </div>
                  <span style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-gold)', fontFamily: 'var(--font-mono)' }}>{r.ytd}</span>
                </div>
                <div style={{ height: 4, background: 'var(--color-border)', borderRadius: 2, marginBottom: '0.5rem' }}>
                  <div style={{ height: '100%', width: `${(parseInt(r.ytd.replace(/\D/g,'')) / 64200) * 100}%`, background: i === 0 ? 'var(--color-gold)' : 'var(--color-accent)', borderRadius: 2 }} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>
                  <span style={{ color: 'var(--color-success)' }}>Paid: {r.paid}</span>
                  <span style={{ color: 'var(--color-accent)' }}>Pending: {r.pending}</span>
                  <span>{r.deals} deals</span>
                </div>
              </div>
            ))}
          </div>

          {/* Split schedule card */}
          <div style={{ marginTop: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.1rem 1.25rem' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>Standard Split Schedule</div>
            {[
              { tier: 'Tier 1 (0–$25K)', split: '60% / 40%' },
              { tier: 'Tier 2 ($25K–$75K)', split: '65% / 35%' },
              { tier: 'Tier 3 ($75K–$150K)', split: '70% / 30%' },
              { tier: 'Tier 4 ($150K+)', split: '75% / 25%' },
            ].map((t) => (
              <div key={t.tier} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', padding: '0.375rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ color: 'var(--color-text-secondary)' }}>{t.tier}</span>
                <span style={{ fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--color-success)' }}>{t.split}</span>
              </div>
            ))}
            <div style={{ marginTop: '0.625rem', fontSize: '0.68rem', color: 'var(--color-text-secondary)' }}>Rep / Firm split (before manager override)</div>
          </div>
        </div>
      </div>
    </div>
  )
}
