import Link from 'next/link'

const NAV_SECTIONS = [
  {
    label: 'CAPITAL MARKETS',
    items: [
      { href: '/broker-os', label: 'Dashboard', icon: '▦' },
      { href: '/broker-os/rwa-hub', label: 'RWA Hub', icon: '◈' },
      { href: '/broker-os/offerings', label: 'Offerings · Reg D/S', icon: '◻' },
      { href: '/broker-os/investor-portal', label: 'Investor Portal', icon: '◎' },
    ],
  },
  {
    label: 'SETTLEMENT',
    items: [
      { href: '/broker-os/stablecoin', label: 'Stablecoin Rails', icon: '◆' },
      { href: '/broker-os/deals', label: 'Deal Pipeline', icon: '↗' },
      { href: '/broker-os/commissions', label: 'Revenue & Dist.', icon: '◆' },
    ],
  },
  {
    label: 'OPERATIONS',
    items: [
      { href: '/broker-os/customers', label: 'Counterparty Book', icon: '▤' },
      { href: '/broker-os/quotes', label: 'Term Sheets', icon: '◻' },
      { href: '/broker-os/renewals', label: 'Renewals', icon: '↻' },
    ],
  },
  {
    label: 'PLATFORM',
    items: [
      { href: '/broker-os/compliance', label: 'Compliance · ATS', icon: '⊕' },
      { href: '/broker-os/agent-console', label: 'Agent Console', icon: '⬡' },
      { href: '/broker-os/settings', label: 'Settings', icon: '⚙' },
    ],
  },
]

const CHAIN_STATUS = [
  { label: 'ATP', active: true },
  { label: 'ETH', active: true },
  { label: 'XRP', active: true },
  { label: 'XLM', active: true },
]

export default function BrokerOSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 236,
          flexShrink: 0,
          background: '#050508',
          borderRight: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          position: 'fixed',
          top: 0,
          left: 0,
          height: '100vh',
          overflowY: 'auto',
          zIndex: 50,
        }}
      >
        {/* Logo / Wordmark */}
        <div
          style={{
            padding: '1.5rem 1.375rem 1rem',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <Link href="/broker-os" style={{ textDecoration: 'none' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
              <span
                style={{
                  fontWeight: 900,
                  fontSize: '1.05rem',
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                BROKER
              </span>
              <span
                style={{
                  fontWeight: 400,
                  fontSize: '1.05rem',
                  color: 'var(--color-accent-bright)',
                  letterSpacing: '-0.02em',
                }}
              >
                OS
              </span>
            </div>
            <div
              style={{
                fontSize: '0.6rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--color-text-secondary)',
                marginTop: '0.3rem',
              }}
            >
              RWA &amp; Stablecoin Infrastructure
            </div>
          </Link>
        </div>

        {/* Chain status pills */}
        <div
          style={{
            padding: '0.625rem 1.375rem',
            borderBottom: '1px solid var(--color-border)',
            display: 'flex',
            gap: '0.375rem',
            flexWrap: 'wrap',
          }}
        >
          {CHAIN_STATUS.map((c) => (
            <div
              key={c.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.6rem',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                color: c.active ? 'var(--color-chain)' : 'var(--color-text-secondary)',
                background: c.active ? 'rgba(16,185,129,0.07)' : 'transparent',
                border: `1px solid ${c.active ? 'rgba(16,185,129,0.2)' : 'var(--color-border)'}`,
                borderRadius: 3,
                padding: '0.15rem 0.4rem',
              }}
            >
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: '50%',
                  background: c.active ? 'var(--color-chain)' : 'var(--color-text-secondary)',
                  display: 'inline-block',
                  flexShrink: 0,
                }}
              />
              {c.label}
            </div>
          ))}
        </div>

        {/* Nav */}
        <nav style={{ padding: '0.75rem 0.875rem', flex: 1 }}>
          {NAV_SECTIONS.map((section) => (
            <div key={section.label} style={{ marginBottom: '0.25rem' }}>
              <div
                style={{
                  fontSize: '0.575rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  color: 'var(--color-text-secondary)',
                  padding: '0.875rem 0.625rem 0.45rem',
                }}
              >
                {section.label}
              </div>
              {section.items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.625rem',
                    padding: '0.475rem 0.625rem',
                    borderRadius: 4,
                    fontSize: '0.815rem',
                    fontWeight: 500,
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    marginBottom: '0.05rem',
                    letterSpacing: '-0.01em',
                  }}
                >
                  <span style={{ fontSize: '0.65rem', opacity: 0.5, flexShrink: 0 }}>{item.icon}</span>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        {/* Firm tag */}
        <div
          style={{
            padding: '0.875rem 1.375rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <div style={{ fontSize: '0.655rem', lineHeight: 1.6 }}>
            <div
              style={{
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.01em',
                marginBottom: '0.1rem',
                fontSize: '0.72rem',
              }}
            >
              FTH Capital Markets
            </div>
            <div style={{ color: 'var(--color-text-secondary)' }}>FINRA Member · SEC Registered BD</div>
            <div style={{ color: 'var(--color-text-secondary)' }}>CRD #XXXXXXX · ATS Licensed</div>
            <div
              style={{
                marginTop: '0.375rem',
                color: 'var(--color-accent-bright)',
                fontWeight: 600,
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
              }}
            >
              brokerdealer.unykorn.org
            </div>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div style={{ marginLeft: 236, flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Top bar */}
        <header
          style={{
            borderBottom: '1px solid var(--color-border)',
            padding: '0.75rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: '#030306',
            position: 'sticky',
            top: 0,
            zIndex: 40,
          }}
        >
          {/* Left: system status + stablecoin balances */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: 'var(--color-success)',
                  display: 'inline-block',
                  flexShrink: 0,
                  boxShadow: '0 0 6px rgba(16,185,129,0.6)',
                }}
              />
              <span
                style={{
                  fontSize: '0.72rem',
                  color: 'var(--color-text-secondary)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                ALL SYSTEMS OPERATIONAL
              </span>
            </div>

            {/* Stablecoin balances */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {[
                { label: 'USDC', value: '$4.28M' },
                { label: 'USDF', value: '$2.10M' },
                { label: 'USDT', value: '$1.45M' },
              ].map((s) => (
                <div key={s.label} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <span
                    style={{
                      fontSize: '0.6rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-stable)',
                      opacity: 0.7,
                    }}
                  >
                    {s.label}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-text-primary)',
                    }}
                  >
                    {s.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: badges */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                background: 'rgba(37,99,235,0.1)',
                border: '1px solid rgba(37,99,235,0.3)',
                borderRadius: 3,
                padding: '0.2rem 0.55rem',
                color: 'var(--color-accent-bright)',
                letterSpacing: '0.05em',
              }}
            >
              RWA ENABLED
            </div>
            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 700,
                fontFamily: 'var(--font-mono)',
                background: 'rgba(201,168,76,0.08)',
                border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: 3,
                padding: '0.2rem 0.55rem',
                color: 'var(--color-gold)',
                letterSpacing: '0.05em',
              }}
            >
              ATS LICENSED
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>
              Q2 2026
            </div>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: '50%',
                background: 'var(--color-accent-dim)',
                border: '1px solid rgba(37,99,235,0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.65rem',
                fontWeight: 700,
                color: 'var(--color-accent-bright)',
                flexShrink: 0,
                fontFamily: 'var(--font-mono)',
              }}
            >
              BD
            </div>
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, padding: '2rem 2.5rem', maxWidth: 1600 }}>
          {children}
        </main>
      </div>
    </div>
  )
}
