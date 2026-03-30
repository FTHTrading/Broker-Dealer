import Link from 'next/link'

const CUSTOMERS = [
  {
    id: 'CX-1041',
    name: 'Nexus Industrial Corp',
    industry: 'Manufacturing',
    contact: 'Dana Whitfield',
    email: 'd.whitfield@nexusindustrial.com',
    annual_usage: '84 MMBtu/yr',
    portfolio_value: '$2.4M',
    status: 'Active',
    kyc: 'Verified',
    next_renewal: '2026-08-15',
    deals: 3,
    rwa_eligible: true,
    jurisdiction: 'TX',
    risk: 'Low',
  },
  {
    id: 'CX-1038',
    name: 'SunPath Manufacturing',
    industry: 'Semiconductor Fab',
    contact: 'Ray Okonkwo',
    email: 'rokonkwo@sunpath.io',
    annual_usage: '240 GWh/yr',
    portfolio_value: '$8.4M',
    status: 'Active',
    kyc: 'Verified',
    next_renewal: '2035-01-01',
    deals: 1,
    rwa_eligible: true,
    jurisdiction: 'CA',
    risk: 'Low',
  },
  {
    id: 'CX-1029',
    name: 'Ridgeline Hotels LLC',
    industry: 'Hospitality',
    contact: 'Margot Fain',
    email: 'm.fain@ridgelinehotels.com',
    annual_usage: '12 GWh/yr',
    portfolio_value: '$340K',
    status: 'Active',
    kyc: 'Verified',
    next_renewal: '2027-01-31',
    deals: 2,
    rwa_eligible: false,
    jurisdiction: 'CO',
    risk: 'Medium',
  },
  {
    id: 'CX-1021',
    name: 'Coastal Logistics Group',
    industry: 'Freight & Logistics',
    contact: 'Trevor Banks',
    email: 'tbanks@coastallogistics.com',
    annual_usage: '6.2 MMBtu/yr',
    portfolio_value: '$2.1M',
    status: 'Active',
    kyc: 'Verified',
    next_renewal: '2028-06-30',
    deals: 2,
    rwa_eligible: true,
    jurisdiction: 'FL',
    risk: 'Low',
  },
  {
    id: 'CX-1017',
    name: 'Prairie Wind LLC',
    industry: 'Renewable Developer',
    contact: 'Nadine Colquhoun',
    email: 'n.colquhoun@prairiewind.energy',
    annual_usage: 'N/A — producer',
    portfolio_value: '$22.7M',
    status: 'Active',
    kyc: 'Verified',
    next_renewal: '2046-03-01',
    deals: 1,
    rwa_eligible: true,
    jurisdiction: 'OK',
    risk: 'Low',
  },
  {
    id: 'CX-1009',
    name: 'Hartwell Steel Works',
    industry: 'Steel & Metals',
    contact: 'George Hartwell III',
    email: 'ghartwell@hartwellsteel.com',
    annual_usage: '310 MMBtu/yr',
    portfolio_value: '$680K',
    status: 'Renewal Due',
    kyc: 'Verified',
    next_renewal: '2026-04-28',
    deals: 4,
    rwa_eligible: false,
    jurisdiction: 'PA',
    risk: 'Medium',
  },
  {
    id: 'CX-1004',
    name: 'Metro Transit Authority',
    industry: 'Public Transit',
    contact: 'Commissioner Vasquez',
    email: 'pvasquez@metrotransit.gov',
    annual_usage: '88 GWh/yr',
    portfolio_value: '$1.4M',
    status: 'Renewal Due',
    kyc: 'Verified',
    next_renewal: '2026-05-15',
    deals: 3,
    rwa_eligible: false,
    jurisdiction: 'IL',
    risk: 'Low',
  },
  {
    id: 'CX-0998',
    name: 'Cascade Brewing Co.',
    industry: 'Food & Beverage',
    contact: 'Jay Tanner',
    email: 'jtanner@cascadebrewing.com',
    annual_usage: '3.1 GWh/yr',
    portfolio_value: '$210K',
    status: 'Renewal Due',
    kyc: 'Expiring',
    next_renewal: '2026-05-31',
    deals: 2,
    rwa_eligible: false,
    jurisdiction: 'OR',
    risk: 'Low',
  },
] as const

const SEGMENTS = ['All', 'Manufacturing', 'Renewable Developer', 'Hospitality', 'Logistics', 'Public Sector', 'Food & Bev'] as const
const STATS = [
  { label: 'Total Customers', value: '214' },
  { label: 'Active Contracts', value: '189' },
  { label: 'Renewal Due (90d)', value: '23' },
  { label: 'KYC Pending', value: '7' },
  { label: 'RWA Eligible', value: '61' },
  { label: 'Portfolio AUM', value: '$38.2M' },
] as const

export const metadata = { title: 'Customers — Broker OS' }

export default function CustomersPage() {
  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <h1 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>Customers</h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem', marginTop: '0.25rem' }}>
            Full customer book · KYC/KYB status · portfolio overview
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
          <button
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 6,
              padding: '0.55rem 1rem',
              fontSize: '0.82rem',
              color: 'var(--color-text-secondary)',
              cursor: 'pointer',
            }}
          >
            Export CSV
          </button>
          <button
            style={{
              background: 'var(--color-accent)',
              border: 'none',
              borderRadius: 6,
              padding: '0.55rem 1.1rem',
              fontSize: '0.82rem',
              color: '#fff',
              fontWeight: 700,
              cursor: 'pointer',
            }}
          >
            + Add Customer
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
          gap: '1px',
          background: 'var(--color-border)',
          border: '1px solid var(--color-border)',
          borderRadius: 8,
          overflow: 'hidden',
          marginBottom: '1.5rem',
        }}
      >
        {STATS.map((s) => (
          <div key={s.label} style={{ background: 'var(--color-surface)', padding: '0.875rem 1rem', textAlign: 'center' }}>
            <div style={{ fontSize: '1.3rem', fontWeight: 800, color: 'var(--color-accent)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--color-text-secondary)', marginTop: '0.3rem' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div
          style={{
            flex: 1,
            minWidth: 220,
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 6,
            padding: '0.5rem 0.875rem',
            fontSize: '0.82rem',
            color: 'var(--color-text-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span>⌕</span> Search customers or contacts...
        </div>
        {SEGMENTS.map((seg) => (
          <span
            key={seg}
            style={{
              padding: '0.4rem 0.75rem',
              borderRadius: 4,
              background: seg === 'All' ? 'var(--color-accent)' : 'var(--color-surface)',
              border: `1px solid ${seg === 'All' ? 'var(--color-accent)' : 'var(--color-border)'}`,
              color: seg === 'All' ? '#fff' : 'var(--color-text-secondary)',
              fontSize: '0.78rem',
              fontWeight: seg === 'All' ? 700 : 500,
              cursor: 'pointer',
            }}
          >
            {seg}
          </span>
        ))}
      </div>

      {/* Customer Table */}
      <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              {['ID', 'Company', 'Industry', 'Portfolio Value', 'Next Renewal', 'KYC', 'Status', 'RWA', 'Actions'].map((h) => (
                <th
                  key={h}
                  style={{
                    padding: '0.7rem 1rem',
                    textAlign: 'left',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                    color: 'var(--color-text-secondary)',
                    background: 'rgba(255,255,255,0.02)',
                  }}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {CUSTOMERS.map((c) => (
              <tr
                key={c.id}
                style={{
                  borderBottom: '1px solid var(--color-border)',
                }}
              >
                <td style={{ padding: '0.875rem 1rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--color-accent)', fontWeight: 600 }}>{c.id}</span>
                </td>
                <td style={{ padding: '0.875rem 1rem' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.85rem' }}>{c.name}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)' }}>{c.contact} · {c.jurisdiction}</div>
                </td>
                <td style={{ padding: '0.875rem 1rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{c.industry}</td>
                <td style={{ padding: '0.875rem 1rem', fontWeight: 700, fontSize: '0.88rem', color: 'var(--color-gold)' }}>{c.portfolio_value}</td>
                <td style={{ padding: '0.875rem 1rem' }}>
                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)' }}>{c.next_renewal}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)' }}>{c.deals} deal{c.deals !== 1 ? 's' : ''}</div>
                </td>
                <td style={{ padding: '0.875rem 1rem' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '0.15rem 0.5rem',
                      borderRadius: 4,
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      background: c.kyc === 'Verified' ? 'rgba(34,197,94,0.1)' : c.kyc === 'Expiring' ? 'rgba(245,158,11,0.1)' : 'rgba(239,68,68,0.1)',
                      color: c.kyc === 'Verified' ? 'var(--color-success)' : c.kyc === 'Expiring' ? 'var(--color-warning)' : 'var(--color-danger)',
                    }}
                  >
                    {c.kyc}
                  </span>
                </td>
                <td style={{ padding: '0.875rem 1rem' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '0.15rem 0.5rem',
                      borderRadius: 4,
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      background: c.status === 'Active' ? 'rgba(34,197,94,0.1)' : 'rgba(245,158,11,0.1)',
                      color: c.status === 'Active' ? 'var(--color-success)' : 'var(--color-warning)',
                    }}
                  >
                    {c.status}
                  </span>
                </td>
                <td style={{ padding: '0.875rem 1rem' }}>
                  {c.rwa_eligible && (
                    <span
                      style={{
                        display: 'inline-block',
                        padding: '0.15rem 0.5rem',
                        borderRadius: 4,
                        fontSize: '0.65rem',
                        fontWeight: 700,
                        background: 'rgba(212,168,67,0.12)',
                        color: 'var(--color-gold)',
                      }}
                    >
                      Eligible
                    </span>
                  )}
                </td>
                <td style={{ padding: '0.875rem 1rem' }}>
                  <div style={{ display: 'flex', gap: '0.4rem' }}>
                    <button
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--color-border)',
                        borderRadius: 4,
                        padding: '0.25rem 0.6rem',
                        fontSize: '0.72rem',
                        color: 'var(--color-text-secondary)',
                        cursor: 'pointer',
                      }}
                    >
                      View
                    </button>
                    <button
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--color-border)',
                        borderRadius: 4,
                        padding: '0.25rem 0.6rem',
                        fontSize: '0.72rem',
                        color: 'var(--color-accent)',
                        cursor: 'pointer',
                      }}
                    >
                      Quote
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', color: 'var(--color-text-secondary)' }}>
        <span>Showing 8 of 214 customers</span>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 4, padding: '0.3rem 0.7rem', fontSize: '0.75rem', color: 'var(--color-text-secondary)', cursor: 'pointer' }}>Previous</button>
          <button style={{ background: 'var(--color-accent)', border: 'none', borderRadius: 4, padding: '0.3rem 0.7rem', fontSize: '0.75rem', color: '#fff', fontWeight: 600, cursor: 'pointer' }}>Next</button>
        </div>
      </div>
    </div>
  )
}
