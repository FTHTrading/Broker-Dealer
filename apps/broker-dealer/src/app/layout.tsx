import type { Metadata } from 'next'
import Link from 'next/link'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Dignity UnyKorn - Digital Securities Operating System',
    template: '%s - Dignity UnyKorn',
  },
  description:
    'Broker-dealer-grade digital securities platform for restricted real-asset offerings. Built for compliant issuance, investor qualification, transfer controls, reserve proof, valuation reporting, and post-close servicing.',
  keywords: [
    'digital securities',
    'restricted securities',
    'real world assets',
    'RWA',
    'Reg D',
    'Reg S',
    'transfer controls',
    'reserve proof',
    'capital formation',
    'broker dealer platform',
  ],
  openGraph: {
    title: 'Dignity UnyKorn',
    description:
      'Digital securities infrastructure for restricted real-asset offerings.',
    type: 'website',
  },
}

const NAV_LINKS = [
  { href: '/', label: 'Overview' },
  { href: '/platform', label: 'Platform' },
  { href: '/digau-case', label: 'DIGau Case' },
  { href: '/workflow', label: 'Securities Workflow' },
  { href: '/reserve-proof', label: 'Reserve Proof' },
  { href: '/reporting', label: 'Reporting' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/contact', label: 'Contact' },
] as const

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
              gap: '0.65rem',
            }}
          >
            <img
              src="/unykorn-logo.png"
              alt="Dignity UnyKorn"
              style={{ width: 28, height: 28, borderRadius: '50%', objectFit: 'cover', border: '1px solid #1f1f2b' }}
            />
            <span style={{ color: 'var(--color-gold)' }}>Dignity</span> UnyKorn
          </Link>

          <nav style={{ display: 'flex', gap: '1.5rem', fontSize: '0.85rem', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
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
            <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>Dignity UnyKorn</p>
            <p>Digital Securities Operating System for Restricted Real-Asset Offerings</p>
            <p style={{ marginTop: '0.35rem', fontSize: '0.7rem', opacity: 0.65 }}>
              Compliance-first infrastructure for issuance, qualification, transfer control, reserve proof, and reporting.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
            <Link href="/platform">Platform</Link>
            <Link href="/digau-case">DIGau Case</Link>
            <Link href="/downloads">Downloads</Link>
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
            Digital securities, private placements, and restricted real-asset offerings are subject to applicable federal,
            state, and international securities laws. Participation may be limited to qualified institutional buyers,
            accredited investors, non-U.S. persons, or verified entities depending on the offering structure and governing
            exemption. Nothing on this site constitutes an offer to sell or a solicitation to buy any security.
          </p>
        </div>
      </body>
    </html>
  )
}
