const AGENTS = [
  {
    id: 'AGT-001',
    name: 'Renewal Scout',
    role: 'Contract Renewal Intelligence',
    description: 'Monitors all active contracts for upcoming expiration. Automatically triggers outreach sequences 90, 60, and 30 days before renewal. Analyzes market rates to recommend competitive re-pricing.',
    status: 'Active',
    uptime: '99.8%',
    last_action: '2 min ago',
    last_action_detail: 'Flagged Hartwell Steel Works — 19d to expiry, sent Solis alert',
    actions_today: 14,
    actions_total: 2847,
    model: 'GPT-4o',
    tasks: ['Contract expiry monitoring', 'Rep alert generation', 'Outreach email drafting', 'Rate benchmarking'],
    color: 'var(--color-warning)',
  },
  {
    id: 'AGT-002',
    name: 'Quote Builder',
    role: 'Dynamic Pricing Engine',
    description: 'Pulls live commodity pricing from ICE, NYMEX, and regional ISO feeds. Calculates optimal broker margin based on volume, term, and competitive intelligence. Generates PDF proposals in seconds.',
    status: 'Active',
    uptime: '99.6%',
    last_action: '18 min ago',
    last_action_detail: 'Built quote QT-9914 for Hartwell Steel — NYMEX+$0.18 basis',
    actions_today: 8,
    actions_total: 1492,
    model: 'GPT-4o',
    tasks: ['Live commodity price pull', 'Margin optimization', 'PDF quote generation', 'Competitor rate analysis'],
    color: 'var(--color-accent)',
  },
  {
    id: 'AGT-003',
    name: 'Compliance Watch',
    role: 'Regulatory & KYC Monitoring',
    description: 'Tracks all KYC/KYB expiration dates and regulatory filing deadlines across FINRA, SEC, and AML requirements. Automatically flags issues and routes to appropriate team members.',
    status: 'Active',
    uptime: '100%',
    last_action: '1 hr ago',
    last_action_detail: 'Flagged CMP-2198 — Cascade KYC ID expiring Apr 30, routed to Ashworth',
    actions_today: 3,
    actions_total: 882,
    model: 'GPT-4o',
    tasks: ['KYC/KYB expiry tracking', 'FINRA filing reminders', 'SEC Reg D deadline alerts', 'AML pattern scanning'],
    color: 'var(--color-danger)',
  },
  {
    id: 'AGT-004',
    name: 'Market Intel',
    role: 'Energy Market Research',
    description: 'Scans EIA reports, ISO market data, weather forecasts, and geopolitical signals to generate daily energy market briefings. Alerts reps when price movements create closing opportunities.',
    status: 'Active',
    uptime: '98.4%',
    last_action: '6 hr ago',
    last_action_detail: 'Published daily market brief — NYMEX Henry Hub -4.2% this week',
    actions_today: 2,
    actions_total: 411,
    model: 'GPT-4o',
    tasks: ['EIA data parsing', 'ISO price monitoring', 'Daily market brief generation', 'Rep opportunity alerts'],
    color: '#818cf8',
  },
  {
    id: 'AGT-005',
    name: 'RWA Tokenizer',
    role: 'Real World Asset Tokenization',
    description: 'Evaluates energy contracts for RWA tokenization eligibility under SEC Reg D. Prepares offering documents, coordinates with legal and smart contract auditors, and tracks token deployment on-chain.',
    status: 'Active',
    uptime: '97.1%',
    last_action: '3 hr ago',
    last_action_detail: 'Initiated Reg D disclosure prep for NGFX-1041 — Nexus Industrial',
    actions_today: 1,
    actions_total: 94,
    model: 'GPT-4o',
    tasks: ['RWA eligibility scoring', 'Reg D document prep', 'Smart contract audit coordination', 'On-chain deployment tracking'],
    color: 'var(--color-gold)',
  },
] as const

const ACTIVITY_LOG = [
  { time: '10:32 AM', agent: 'Renewal Scout', event: 'Alert sent to R. Solis — Hartwell Steel 19d to expiry', level: 'warn' },
  { time: '10:14 AM', agent: 'Compliance Watch', event: 'CMP-2198 flagged — Cascade KYC expiring Apr 30', level: 'danger' },
  { time: '09:58 AM', agent: 'Quote Builder', event: 'QT-9914 generated — Hartwell Steel, $680K, NYMEX+$0.18', level: 'info' },
  { time: '09:41 AM', agent: 'Renewal Scout', event: 'Outreach email drafted — Metro Transit Authority renewal', level: 'info' },
  { time: '09:20 AM', agent: 'RWA Tokenizer', event: 'NGFX-1041 Reg D disclosure initiated — Nexus Industrial', level: 'gold' },
  { time: '08:55 AM', agent: 'Market Intel', event: 'Daily brief published — NYMEX -4.2%, EIA bullish storage draw', level: 'info' },
  { time: '08:30 AM', agent: 'Renewal Scout', event: 'Renewal queue refreshed — 23 contracts flagged for 90d window', level: 'info' },
  { time: '08:01 AM', agent: 'Compliance Watch', event: 'Daily compliance scan complete — 84 items, 6 action required', level: 'warn' },
] as const

const LEVEL_COLORS: Record<string, string> = {
  info:   'var(--color-accent)',
  warn:   'var(--color-warning)',
  danger: 'var(--color-danger)',
  gold:   'var(--color-gold)',
}

export const metadata = { title: 'Agent Console — Broker OS' }

export default function AgentConsolePage() {
  return (
    <div>
      <div style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Agent Console</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
            AI agent fleet · real-time activity · configuration & control
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: 'var(--color-success)', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: 6, padding: '0.4rem 0.75rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-success)', display: 'inline-block' }} />
            All agents operational
          </div>
          <button style={{ background: 'var(--color-accent)', border: 'none', borderRadius: 6, padding: '0.55rem 1.1rem', fontSize: '0.82rem', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>
            Deploy New Agent
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 360px', gap: '1.25rem' }}>
        {/* Agent cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {AGENTS.map((a) => (
            <div key={a.id} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.25rem', borderLeft: `3px solid ${a.color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.875rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: a.status === 'Active' ? 'var(--color-success)' : 'var(--color-text-secondary)', display: 'inline-block' }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-text-secondary)' }}>{a.id}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: a.color, background: `${a.color}12`, padding: '0.1rem 0.4rem', borderRadius: 3, fontWeight: 700 }}>{a.model}</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: a.color }}>{a.name}</h3>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '0.15rem' }}>{a.role}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, lineHeight: 1, marginBottom: '0.1rem' }}>{a.actions_today}</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--color-text-secondary)' }}>actions today</div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--color-success)', marginTop: '0.2rem' }}>↑ {a.uptime} uptime</div>
                </div>
              </div>

              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '0.875rem' }}>{a.description}</p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.875rem' }}>
                {a.tasks.map((t) => (
                  <span key={t} style={{ padding: '0.15rem 0.5rem', borderRadius: 4, fontSize: '0.68rem', fontWeight: 600, background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-secondary)', border: '1px solid var(--color-border)' }}>{t}</span>
                ))}
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 6, padding: '0.6rem 0.875rem', marginBottom: '0.875rem' }}>
                <div style={{ fontSize: '0.63rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', marginBottom: '0.25rem' }}>Last Action — {a.last_action}</div>
                <div style={{ fontSize: '0.78rem' }}>{a.last_action_detail}</div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={{ background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 5, padding: '0.4rem 0.875rem', fontSize: '0.75rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>View Logs</button>
                <button style={{ background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 5, padding: '0.4rem 0.875rem', fontSize: '0.75rem', color: 'var(--color-accent)', cursor: 'pointer' }}>Configure</button>
                <button style={{ background: 'transparent', border: '1px solid var(--color-border)', borderRadius: 5, padding: '0.4rem 0.875rem', fontSize: '0.75rem', color: 'var(--color-warning)', cursor: 'pointer' }}>Pause</button>
                <div style={{ marginLeft: 'auto', fontSize: '0.72rem', color: 'var(--color-text-secondary)', display: 'flex', alignItems: 'center' }}>
                  {a.actions_total.toLocaleString()} total actions
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity log */}
        <div>
          <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>Live Activity Log</div>
          <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem 1rem', borderBottom: '1px solid var(--color-border)', background: 'rgba(255,255,255,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--color-success)' }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-success)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                Live — Today
              </div>
              <span style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)' }}>31 events</span>
            </div>
            {ACTIVITY_LOG.map((e, i) => (
              <div key={i} style={{ padding: '0.75rem 1rem', borderBottom: i < ACTIVITY_LOG.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.2rem' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 600, color: LEVEL_COLORS[e.level] }}>{e.agent}</span>
                  <span style={{ fontSize: '0.65rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>{e.time}</span>
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{e.event}</div>
              </div>
            ))}
            <div style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>
              <button style={{ background: 'transparent', border: 'none', fontSize: '0.78rem', color: 'var(--color-accent)', cursor: 'pointer', fontWeight: 600 }}>Load more events →</button>
            </div>
          </div>

          {/* Fleet summary */}
          <div style={{ marginTop: '1rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1rem 1.1rem' }}>
            <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>Fleet At a Glance</div>
            {[
              { label: 'Active Agents', val: '5 / 5', color: 'var(--color-success)' },
              { label: 'Actions Today', val: '28', color: 'var(--color-accent)' },
              { label: 'Total Actions', val: '5,726', color: 'var(--color-text-primary)' },
              { label: 'Avg Response Time', val: '1.2s', color: 'var(--color-success)' },
              { label: 'Alerts Generated', val: '4 today', color: 'var(--color-warning)' },
            ].map((s) => (
              <div key={s.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.375rem 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{s.label}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: 700, color: s.color }}>{s.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
