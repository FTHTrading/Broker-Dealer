import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'FTH Capital Markets — Institutional RWA & Stablecoin Infrastructure',
    template: '%s — FTH Capital Markets',
  },
  description:
    'Institutional-grade broker-dealer infrastructure for RWA tokenization, private placements, stablecoin settlement, and digital asset custody. FINRA-registered, SEC-compliant, multi-chain.',
  keywords: ['RWA tokenization', 'broker dealer', 'FINRA', 'private placement', 'stablecoin settlement', 'digital assets', 'Reg D', 'alternative investments'],
  openGraph: {
    title: 'FTH Capital Markets — Institutional RWA & Stablecoin Infrastructure',
    description: 'Institutional broker-dealer platform for tokenized real-world assets, private placements, and multi-chain stablecoin settlement.',
    type: 'website',
  },
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
  { href: '/downloads', label: 'Downloads' },
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
            <span style={{ color: 'var(--color-gold)' }}>FTH</span> Capital Markets
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
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>FTH Capital Markets</p>
            <p>Institutional RWA & Stablecoin Infrastructure</p>
            <p style={{ marginTop: '0.25rem', fontSize: '0.72rem', opacity: 0.5 }}>FINRA Member · SEC Registered · SIPC Covered</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link href="/downloads">Downloads</Link>
            <Link href="/disclosures">Disclosures</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/contact">Contact</Link>
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
            Securities offered through FTH Capital Markets are subject to applicable federal and state securities laws.
            Participation is limited to qualified institutional buyers, accredited investors, and verified entities as
            defined under Regulation D, Regulation S, and Regulation A+ of the Securities Act of 1933. All offerings
            are made pursuant to available exemptions and are not registered with the SEC or any state securities
            commission. Tokenized real-world assets are subject to additional regulatory requirements. Investment in
            private securities and digital assets involves significant risk including possible total loss of principal.
            Past performance does not guarantee future results. FTH Capital Markets operates as a FINRA member
            broker-dealer and registered Alternative Trading System (ATS). Member SIPC.
          </p>
        </div>
      </body>
    </html>
  )
}
