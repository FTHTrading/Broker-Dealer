import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'UnyKorn Broker-Dealer System - RWA Issuance and Stablecoin Rails',
    template: '%s - UnyKorn',
  },
  description:
    'Compliance-first broker-dealer partnership system for issuers and asset owners. Launch tokenized offerings, settle with stablecoin rails, and move assets across global jurisdictions.',
  keywords: ['UnyKorn', 'broker dealer partnership', 'RWA tokenization', 'FINRA', 'private placement', 'stablecoin settlement', 'Reg D', 'Reg S'],
  openGraph: {
    title: 'UnyKorn Broker-Dealer System',
    description: 'Partner-ready issuance and settlement rails for broker-dealers, issuers, and asset owners.',
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
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
            }}
          >
            <img
              src="/unykorn-logo.png"
              alt="UnyKorn Logo"
              style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', border: '1px solid #1f1f2b' }}
            />
            <span style={{ color: 'var(--color-gold)' }}>UnyKorn</span> Broker-Dealer System
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

        {children}

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
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>UnyKorn Broker-Dealer System</p>
            <p>Broker-Dealer Partner Infrastructure for Issuance and Settlement</p>
            <p style={{ marginTop: '0.25rem', fontSize: '0.72rem', opacity: 0.5 }}>FINRA Member | SEC Registered | SIPC Covered</p>
            <p style={{ marginTop: '0.35rem', fontSize: '0.7rem', opacity: 0.65 }}>5655 Peachtree Parkway, Norcross, GA 30099</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <Link href="/downloads">Downloads</Link>
            <Link href="/disclosures">Disclosures</Link>
            <Link href="/compliance">Compliance</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </footer>

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
            Securities offered through UnyKorn partner channels are subject to applicable federal and state securities laws.
            Participation is limited to qualified institutional buyers, accredited investors, and verified entities as
            defined under Regulation D, Regulation S, and Regulation A+ of the Securities Act of 1933. All offerings
            are made pursuant to available exemptions and are not registered with the SEC or any state securities
            commission. Tokenized real-world assets are subject to additional regulatory requirements. Investment in
            private securities and digital assets involves significant risk including possible total loss of principal.
            Past performance does not guarantee future results. UnyKorn operates with FINRA member
            broker-dealer and registered Alternative Trading System (ATS) partners. Member SIPC.
          </p>
        </div>
      </body>
    </html>
  )
}
