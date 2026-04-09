const COMPLIANCE_ITEMS = [
  {
    id: 'CMP-2201',
    category: 'KYC/KYB',
    customer: 'SunPath Manufacturing',
    cx_id: 'CX-1038',
    item: 'Annual KYB Re-verification',
    status: 'Compliant',
    due_date: '2026-12-01',
    completed: '2026-01-10',
    assignee: 'Compliance Dept.',
    severity: 'Routine',
    rwa_related: true,
  },
  {
    id: 'CMP-2198',
    category: 'KYC/KYB',
    customer: 'Cascade Brewing Co.',
    cx_id: 'CX-0998',
    item: 'KYC ID Expiry — Principal Refresh',
    status: 'Action Required',
    due_date: '2026-04-30',
    completed: null,
    assignee: 'T. Ashworth',
    severity: 'High',
    rwa_related: false,
  },
  {
    id: 'CMP-2195',
    category: 'FINRA',
    customer: null,
    cx_id: null,
    item: 'Form BD Annual Amendment',
    status: 'Compliant',
    due_date: '2026-12-31',
    completed: '2026-03-01',
    assignee: 'Compliance Dept.',
    severity: 'Routine',
    rwa_related: false,
  },
  {
    id: 'CMP-2192',
    category: 'SEC',
    customer: null,
    cx_id: null,
    item: 'Reg D 506(c) Filing — WPPA-1017',
    status: 'Compliant',
    due_date: '2026-02-15',
    completed: '2026-01-28',
    assignee: 'Legal',
    severity: 'High',
    rwa_related: true,
  },
  {
    id: 'CMP-2189',
    category: 'SEC',
    customer: null,
    cx_id: null,
    item: 'Reg D 506(c) Filing — SPPA-1038',
    status: 'Compliant',
    due_date: '2026-04-30',
    completed: '2026-03-10',
    assignee: 'Legal',
    severity: 'High',
    rwa_related: true,
  },
  {
    id: 'CMP-2186',
    category: 'AML',
    customer: 'Nexus Industrial Corp',
    cx_id: 'CX-1041',
    item: 'Beneficial Ownership Certification',
    status: 'Compliant',
    due_date: '2027-01-15',
    completed: '2026-01-15',
    assignee: 'Compliance Dept.',
    severity: 'Routine',
    rwa_related: true,
  },
  {
    id: 'CMP-2183',
    category: 'RWA Tokenization',
    customer: 'Prairie Wind LLC',
    cx_id: 'CX-1017',
    item: 'Smart Contract Audit — WPPA-1017',
    status: 'In Review',
    due_date: '2026-05-01',
    completed: null,
    assignee: 'External Auditor (BlockProof)',
    severity: 'Critical',
    rwa_related: true,
  },
  {
    id: 'CMP-2180',
    category: 'RWA Tokenization',
    customer: 'Nexus Industrial Corp',
    cx_id: 'CX-1041',
    item: 'Token Offering Disclosure — NGFX-1041',
    status: 'Action Required',
    due_date: '2026-04-15',
    completed: null,
    assignee: 'Legal',
    severity: 'High',
    rwa_related: true,
  },
  {
    id: 'CMP-2177',
    category: 'FINRA',
    customer: null,
    cx_id: null,
    item: 'Broker Rep Licensing Review — R. Solis',
    status: 'Compliant',
    due_date: '2026-08-01',
    completed: '2026-03-20',
    assignee: 'HR / Compliance',
    severity: 'Routine',
    rwa_related: false,
  },
] as const

const COMPLIANCE_STATS = [
  { label: 'Total Items', value: '84', color: 'var(--color-accent)' },
  { label: 'Compliant', value: '71', color: 'var(--color-success)' },
  { label: 'Action Required', value: '6', color: 'var(--color-danger)' },
  { label: 'In Review', value: '7', color: 'var(--color-warning)' },
  { label: 'RWA Compliance Items', value: '18', color: 'var(--color-gold)' },
  { label: 'Overall Score', value: '94%', color: 'var(--color-success)' },
] as const

const STATUS_STYLE: Record<string, { bg: string; color: string }> = {
  'Compliant':       { bg: 'rgba(34,197,94,0.1)',   color: 'var(--color-success)' },
  'Action Required': { bg: 'rgba(239,68,68,0.12)',  color: 'var(--color-danger)' },
  'In Review':       { bg: 'rgba(245,158,11,0.12)', color: 'var(--color-warning)' },
}

const SEVERITY_STYLE: Record<string, { color: string }> = {
  Routine:  { color: 'var(--color-text-secondary)' },
  High:     { color: 'var(--color-warning)' },
  Critical: { color: 'var(--color-danger)' },
}

const CATS = ['All', 'KYC/KYB', 'AML', 'FINRA', 'SEC', 'RWA Tokenization'] as const

export const metadata = { title: 'Compliance — Broker OS' }

export default function CompliancePage() {
  return (
    <div>
      <div style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Compliance</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
            KYC/AML · FINRA/SEC filings · RWA tokenization compliance · audit trail
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '0.55rem 1rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Download Audit Report</button>
          <button style={{ background: 'var(--color-danger)', border: 'none', borderRadius: 6, padding: '0.55rem 1.1rem', fontSize: '0.82rem', color: '#fff', fontWeight: 700, cursor: 'pointer' }}>Create Alert</button>
        </div>
      </div>

      {/* Stats bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden', marginBottom: '1.5rem' }}>
        {COMPLIANCE_STATS.map((s) => (
          <div key={s.label} style={{ background: 'var(--color-surface)', padding: '0.875rem 1rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: s.color, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)', marginTop: '0.3rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Category filters */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {CATS.map((c) => (
          <span key={c} style={{ padding: '0.4rem 0.75rem', borderRadius: 4, background: c === 'All' ? 'var(--color-accent)' : 'var(--color-surface)', border: `1px solid ${c === 'All' ? 'var(--color-accent)' : 'var(--color-border)'}`, color: c === 'All' ? '#fff' : 'var(--color-text-secondary)', fontSize: '0.78rem', fontWeight: c === 'All' ? 700 : 500, cursor: 'pointer' }}>
            {c}
          </span>
        ))}
        <span style={{ padding: '0.3rem 0.6rem', borderRadius: 4, background: 'rgba(212,168,67,0.12)', border: '1px solid rgba(212,168,67,0.2)', color: 'var(--color-gold)', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}>⬡ RWA Only</span>
      </div>

      {/* Compliance table */}
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              {['ID', 'Category', 'Compliance Item', 'Customer', 'Severity', 'Status', 'Due Date', 'Assignee', 'RWA'].map((h) => (
                <th key={h} style={{ padding: '0.7rem 1rem', textAlign: 'left', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', background: 'rgba(255,255,255,0.02)' }}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPLIANCE_ITEMS.map((c) => {
              const ss = STATUS_STYLE[c.status] || STATUS_STYLE.Compliant
              const sevStyle = SEVERITY_STYLE[c.severity] || SEVERITY_STYLE.Routine
              return (
                <tr key={c.id} style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--color-accent)', fontWeight: 600 }}>{c.id}</span>
                  </td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ padding: '0.15rem 0.5rem', borderRadius: 4, fontSize: '0.7rem', fontWeight: 600, background: 'rgba(255,255,255,0.05)', color: 'var(--color-text-secondary)' }}>{c.category}</span>
                  </td>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.82rem', fontWeight: 600, maxWidth: 280 }}>{c.item}</td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    {c.customer ? (
                      <div>
                        <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{c.customer}</div>
                        <div style={{ fontSize: '0.68rem', color: 'var(--color-accent)' }}>{c.cx_id}</div>
                      </div>
                    ) : (
                      <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>Firm-level</span>
                    )}
                  </td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: sevStyle.color }}>{c.severity}</span>
                  </td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    <span style={{ display: 'inline-block', padding: '0.15rem 0.55rem', borderRadius: 4, fontSize: '0.7rem', fontWeight: 700, background: ss.bg, color: ss.color }}>{c.status}</span>
                  </td>
                  <td style={{ padding: '0.75rem 1rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: c.status === 'Action Required' ? 'var(--color-danger)' : 'var(--color-text-secondary)' }}>{c.due_date}</td>
                  <td style={{ padding: '0.75rem 1rem', fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>{c.assignee}</td>
                  <td style={{ padding: '0.75rem 1rem' }}>
                    {c.rwa_related && (
                      <span style={{ display: 'inline-block', padding: '0.1rem 0.4rem', borderRadius: 3, fontSize: '0.62rem', fontWeight: 700, background: 'rgba(212,168,67,0.12)', color: 'var(--color-gold)' }}>⬡ RWA</span>
                    )}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* Regulatory framework cards */}
      <div style={{ fontSize: '0.68rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', marginBottom: '0.75rem' }}>Regulatory Frameworks</div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
        {[
          { name: 'FINRA Registration', status: 'Active', detail: 'BD-29841 · Series 63, 6, 7', color: 'var(--color-success)' },
          { name: 'SEC Oversight', status: 'Active', detail: 'Reg D filings current · 506(c)', color: 'var(--color-success)' },
          { name: 'AML Program', status: 'Active', detail: 'BSA compliant · SAR filings current', color: 'var(--color-success)' },
          { name: 'RWA Token Framework', status: 'Partial', detail: '2 of 4 tokens fully compliant', color: 'var(--color-warning)' },
          { name: 'State Licenses', status: 'Active', detail: '12 states licensed + pending TX', color: 'var(--color-success)' },
          { name: 'Cybersecurity (GLBA)', status: 'Active', detail: 'Annual pen test complete', color: 'var(--color-success)' },
        ].map((f) => (
          <div key={f.name} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1rem 1.1rem', borderTop: `2px solid ${f.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.35rem' }}>
              <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{f.name}</span>
              <span style={{ padding: '0.1rem 0.4rem', borderRadius: 3, fontSize: '0.68rem', fontWeight: 700, color: f.color, background: `${f.color}18` }}>{f.status}</span>
            </div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{f.detail}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
