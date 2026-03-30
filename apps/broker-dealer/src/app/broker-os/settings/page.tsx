const TEAM_MEMBERS = [
  { name: 'Aaron Bautista', role: 'Senior Broker Rep', email: 'a.bautista@firm.com', licenses: 'Series 63, 7', status: 'Active', joined: '2023-04-01', ytd: '$64.2K' },
  { name: 'Teresa Ashworth', role: 'Energy Specialist', email: 't.ashworth@firm.com', licenses: 'Series 63, 6', status: 'Active', joined: '2022-11-15', ytd: '$51.9K' },
  { name: 'Derek Monroe', role: 'Senior Broker Rep', email: 'd.monroe@firm.com', licenses: 'Series 63, 7', status: 'Active', joined: '2021-03-20', ytd: '$48.3K' },
  { name: 'Rosa Solis', role: 'Broker Rep', email: 'r.solis@firm.com', licenses: 'Series 63', status: 'Active', joined: '2024-08-01', ytd: '$32.7K' },
] as const

const INTEGRATIONS = [
  { name: 'ICE Price Feed', description: 'Natural gas & power futures', status: 'Connected', last_sync: '2 min ago', icon: '⚡' },
  { name: 'NYMEX Henry Hub', description: 'NG spot & futures pricing', status: 'Connected', last_sync: '5 min ago', icon: '🔥' },
  { name: 'Apostle Chain (ATP)', description: 'RWA tokenization layer · chain_id 7332', status: 'Connected', last_sync: 'Live', icon: '⬡' },
  { name: 'FTH Pay Network', description: 'Settlement & commission disbursement', status: 'Connected', last_sync: 'Live', icon: '💳' },
  { name: 'Salesforce CRM', description: 'Customer data sync', status: 'Disconnected', last_sync: 'Never', icon: '☁' },
  { name: 'DocuSign', description: 'Contract e-signature', status: 'Connected', last_sync: '1 hr ago', icon: '✍' },
  { name: 'S&P Global Commodity Insights', description: 'Market research & analytics', status: 'Connected', last_sync: '6 hr ago', icon: '📊' },
  { name: 'EIA Data API', description: 'US energy data & forecasts', status: 'Connected', last_sync: '12 hr ago', icon: '🏛' },
] as const

export const metadata = { title: 'Settings — Broker OS' }

export default function SettingsPage() {
  return (
    <div>
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Settings</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
          Firm profile · team management · integrations · notification preferences
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
        {/* Firm profile */}
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.25rem', borderTop: '2px solid var(--color-accent)' }}>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>Firm Profile</div>
          {[
            { label: 'Firm Name', value: 'Your Brokerage Name', editable: true },
            { label: 'DBA', value: 'Broker OS Powered', editable: true },
            { label: 'FINRA CRD#', value: 'BD-29841', editable: false },
            { label: 'SEC Registration', value: 'Registered Investment Adviser', editable: false },
            { label: 'Primary State', value: 'Texas', editable: true },
            { label: 'Licensed States', value: '12 states (TX, CA, FL, NY, IL...)', editable: true },
            { label: 'Platform URL', value: 'brokerdealer.unykorn.org', editable: false },
            { label: 'Account Plan', value: 'Enterprise — Unlimited Reps', editable: false },
          ].map((f) => (
            <div key={f.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)' }}>{f.label}</div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginTop: '0.1rem' }}>{f.value}</div>
              </div>
              {f.editable && (
                <button style={{ background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 4, padding: '0.25rem 0.6rem', fontSize: '0.72rem', color: 'var(--color-accent)', cursor: 'pointer' }}>Edit</button>
              )}
            </div>
          ))}
          <button style={{ marginTop: '1rem', background: 'var(--color-accent)', border: 'none', borderRadius: 6, padding: '0.6rem 1.25rem', fontSize: '0.82rem', color: '#fff', fontWeight: 700, cursor: 'pointer', width: '100%' }}>Save Firm Profile</button>
        </div>

        {/* Commission splits */}
        <div>
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.25rem', borderTop: '2px solid var(--color-gold)', marginBottom: '1.25rem' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>Commission Split Schedule</div>
            {[
              { tier: 'Tier 1', range: '$0 – $25,000', split: '60% / 40%', desc: 'Rep / Firm' },
              { tier: 'Tier 2', range: '$25,001 – $75,000', split: '65% / 35%', desc: 'Rep / Firm' },
              { tier: 'Tier 3', range: '$75,001 – $150,000', split: '70% / 30%', desc: 'Rep / Firm' },
              { tier: 'Tier 4', range: '$150,001+', split: '75% / 25%', desc: 'Rep / Firm' },
            ].map((t) => (
              <div key={t.tier} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.625rem', borderRadius: 6, background: 'rgba(255,255,255,0.02)', marginBottom: '0.35rem' }}>
                <div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700 }}>{t.tier} — {t.range}</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)' }}>{t.desc}</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 800, color: 'var(--color-gold)', fontSize: '0.9rem' }}>{t.split}</span>
                  <button style={{ background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 4, padding: '0.2rem 0.5rem', fontSize: '0.68rem', color: 'var(--color-accent)', cursor: 'pointer' }}>Edit</button>
                </div>
              </div>
            ))}
          </div>

          {/* Notifications */}
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.25rem', borderTop: '2px solid var(--color-success)' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>Notification Preferences</div>
            {[
              { label: 'Renewal alerts (< 30 days)', enabled: true },
              { label: 'Commission payout confirmations', enabled: true },
              { label: 'New deal assigned', enabled: true },
              { label: 'Quote accepted by customer', enabled: true },
              { label: 'KYC expiry warnings', enabled: true },
              { label: 'Agent activity digests (daily)', enabled: false },
              { label: 'Market intelligence briefing', enabled: false },
              { label: 'RWA token status updates', enabled: true },
            ].map((n) => (
              <div key={n.label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ fontSize: '0.82rem' }}>{n.label}</span>
                <div style={{ width: 36, height: 20, borderRadius: 10, background: n.enabled ? 'var(--color-success)' : 'var(--color-border)', display: 'flex', alignItems: 'center', padding: '0 3px', cursor: 'pointer', justifyContent: n.enabled ? 'flex-end' : 'flex-start' }}>
                  <div style={{ width: 14, height: 14, borderRadius: '50%', background: '#fff' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team members */}
      <div style={{ marginTop: '1.25rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)' }}>Team Members — 4 Active Reps</span>
          <button style={{ background: 'var(--color-accent)', border: 'none', borderRadius: 5, padding: '0.4rem 0.875rem', fontSize: '0.78rem', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>+ Invite Rep</button>
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              {['Name', 'Role', 'Email', 'Licenses', 'Status', 'Joined', 'YTD Comm.', 'Actions'].map((h) => (
                <th key={h} style={{ padding: '0.65rem 1rem', textAlign: 'left', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', background: 'rgba(255,255,255,0.02)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TEAM_MEMBERS.map((m) => (
              <tr key={m.email} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 700, fontSize: '0.85rem' }}>{m.name}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{m.role}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: 'var(--color-accent)' }}>{m.email}</td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.78rem' }}>{m.licenses}</td>
                <td style={{ padding: '0.75rem 1rem' }}>
                  <span style={{ display: 'inline-block', padding: '0.12rem 0.5rem', borderRadius: 4, fontSize: '0.68rem', fontWeight: 700, background: 'rgba(34,197,94,0.1)', color: 'var(--color-success)' }}>{m.status}</span>
                </td>
                <td style={{ padding: '0.75rem 1rem', fontSize: '0.78rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>{m.joined}</td>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 700, color: 'var(--color-gold)', fontSize: '0.85rem' }}>{m.ytd}</td>
                <td style={{ padding: '0.75rem 1rem' }}>
                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    <button style={{ background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 4, padding: '0.22rem 0.55rem', fontSize: '0.7rem', color: 'var(--color-accent)', cursor: 'pointer' }}>Edit</button>
                    <button style={{ background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 4, padding: '0.22rem 0.55rem', fontSize: '0.7rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Suspend</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Integrations */}
      <div style={{ marginTop: '1.25rem' }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>Integrations</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '0.75rem' }}>
          {INTEGRATIONS.map((intg) => (
            <div key={intg.name} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1rem 1.1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <span style={{ fontSize: '1.4rem' }}>{intg.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{intg.name}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>{intg.description}</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)', marginTop: '0.15rem' }}>Synced: {intg.last_sync}</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.3rem' }}>
                <span style={{ display: 'inline-block', padding: '0.12rem 0.5rem', borderRadius: 4, fontSize: '0.68rem', fontWeight: 700, background: intg.status === 'Connected' ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)', color: intg.status === 'Connected' ? 'var(--color-success)' : 'var(--color-danger)' }}>{intg.status}</span>
                <button style={{ background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 4, padding: '0.18rem 0.5rem', fontSize: '0.68rem', color: intg.status === 'Connected' ? 'var(--color-text-secondary)' : 'var(--color-accent)', cursor: 'pointer', fontWeight: intg.status !== 'Connected' ? 700 : 400 }}>
                  {intg.status === 'Connected' ? 'Manage' : 'Connect'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
