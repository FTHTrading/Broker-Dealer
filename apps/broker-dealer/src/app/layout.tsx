import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Moody Capital Markets Operating System',
    template: '%s — Moody Capital',
  },
  description:
    'A compliance-first broker-dealer platform for origination, investor gating, subscription execution, rights offerings, debt administration, custody-connected settlement, controlled digital issuance, and post-close lifecycle management.',
}

const NAV_LINKS = [
  { href: '/', label: 'Overview' },
  { href: '/platform', label: 'Platform' },
  { href: '/technology', label: 'Technology' },
  { href: '/services', label: 'Services' },
  { href: '/markets', label: 'Markets' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/operations', label: 'Operations' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
] as const

export default function BrokerDealerLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Site Header */}
        <header
          style={{
            borderBottom: '1px solid var(--color-border)',
            padding: '1rem 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            maxWidth: 1200,
            margin: '0 auto',
          }}
        >
          <Link
            href="/"
            style={{
              fontWeight: 700,
              fontSize: '1.125rem',
              color: 'var(--color-text-primary)',
              textDecoration: 'none',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: 'var(--color-gold)' }}>Moody</span>{' '}Capital
          </Link>

          <nav style={{ display: 'flex', gap: '1.75rem', fontSize: '0.85rem' }}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  fontWeight: 500,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* Main Content */}
        {children}

        {/* Site Footer */}
        <footer
          style={{
            borderTop: '1px solid var(--color-border)',
            padding: '2rem',
            maxWidth: 1200,
            margin: '3rem auto 0',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.5rem',
            fontSize: '0.8rem',
            color: 'var(--color-text-secondary)',
          }}
        >
          <div>
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Moody Capital Markets Operating System</p>
            <p>Compliance-First Broker-Dealer Infrastructure</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link href="/disclosures">Disclosures</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/platform">Platform</Link>
          </div>
        </footer>

        {/* Regulatory Footer */}
        <div
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '1rem 2rem 2rem',
            fontSize: '0.7rem',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.5,
            opacity: 0.7,
          }}
        >
          <p>
            Securities offered through Moody Capital are subject to applicable federal and state
            securities laws. Participation is limited to qualified and accredited investors as defined
            under Regulation D of the Securities Act of 1933, Regulation A+, and Regulation S. All
            offerings are made pursuant to available exemptions and are not registered with the SEC
            or any state securities commission. Investment in private securities involves significant
            risk including possible loss of principal. Past performance does not guarantee future
            results. This platform is operated by a registered broker-dealer and FINRA member firm.
          </p>
        </div>
      </body>
    </html>
  )
}
