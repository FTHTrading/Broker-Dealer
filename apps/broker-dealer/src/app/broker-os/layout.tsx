import Link from 'next/link'

const NAV_ITEMS = [
  { href: '/broker-os', label: 'Dashboard', icon: '▦' },
  { href: '/broker-os/customers', label: 'Customers', icon: '◎' },
  { href: '/broker-os/deals', label: 'Deals', icon: '◈' },
  { href: '/broker-os/quotes', label: 'Quotes', icon: '◻' },
  { href: '/broker-os/commissions', label: 'Commissions', icon: '◆' },
  { href: '/broker-os/renewals', label: 'Renewals', icon: '↻' },
  { href: '/broker-os/compliance', label: 'Compliance', icon: '⊕' },
  { href: '/broker-os/agent-console', label: 'Agent Console', icon: '⬡' },
] as const

export default function BrokerOSLayout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-bg)' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: 220,
          flexShrink: 0,
          background: 'var(--color-surface)',
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
            padding: '1.25rem 1.25rem 0.75rem',
            borderBottom: '1px solid var(--color-border)',
          }}
        >
          <Link href="/broker-os" style={{ textDecoration: 'none' }}>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--color-text-primary)', letterSpacing: '-0.02em' }}>
              <span style={{ color: 'var(--color-accent)' }}>Broker</span> OS
            </div>
            <div
              style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--color-gold)',
                marginTop: '0.2rem',
              }}
            >
              Energy &amp; RWA Platform
            </div>
          </Link>
        </div>

        {/* Nav */}
        <nav style={{ padding: '0.75rem 0.75rem', flex: 1 }}>
          <div style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-secondary)', padding: '0.25rem 0.5rem 0.6rem' }}>
            Main
          </div>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                padding: '0.55rem 0.75rem',
                borderRadius: 6,
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                marginBottom: '0.125rem',
                transition: 'background 0.1s, color 0.1s',
              }}
            >
              <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>{item.icon}</span>
              {item.label}
            </Link>
          ))}

          <div
            style={{
              fontSize: '0.6rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-text-secondary)',
              padding: '1rem 0.5rem 0.6rem',
              marginTop: '0.5rem',
            }}
          >
            Account
          </div>
          <Link
            href="/broker-os/settings"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.625rem',
              padding: '0.55rem 0.75rem',
              borderRadius: 6,
              fontSize: '0.85rem',
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
            }}
          >
            <span style={{ fontSize: '0.75rem', opacity: 0.7 }}>⚙</span>
            Settings
          </Link>
        </nav>

        {/* Firm tag */}
        <div
          style={{
            padding: '0.875rem 1.25rem',
            borderTop: '1px solid var(--color-border)',
          }}
        >
          <div style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            <div style={{ fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: '0.1rem' }}>Apex Energy Brokerage</div>
            <div>FINRA · SEC Registered</div>
            <div style={{ marginTop: '0.25rem', color: 'var(--color-gold)', fontWeight: 600 }}>brokerdealer.unykorn.org</div>
          </div>
        </div>
      </aside>

      {/* Main content area */}
      <div style={{ marginLeft: 220, flex: 1, display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Top bar */}
        <header
          style={{
            borderBottom: '1px solid var(--color-border)',
            padding: '0.875rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--color-surface)',
            position: 'sticky',
            top: 0,
            zIndex: 40,
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'var(--color-success)',
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
              Systems operational
            </span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div
              style={{
                fontSize: '0.75rem',
                fontWeight: 600,
                background: 'rgba(91,110,244,0.12)',
                border: '1px solid rgba(91,110,244,0.25)',
                borderRadius: 4,
                padding: '0.2rem 0.6rem',
                color: 'var(--color-accent)',
              }}
            >
              RWA ENABLED
            </div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>
              Q2 2026 · FY26
            </div>
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: '50%',
                background: 'var(--color-accent-dim)',
                border: '1px solid var(--color-accent)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--color-accent)',
                flexShrink: 0,
              }}
            >
              AB
            </div>
          </div>
        </header>

        {/* Page content */}
        <main style={{ flex: 1, padding: '2rem', maxWidth: 1400 }}>
          {children}
        </main>
      </div>
    </div>
  )
}
