import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Schedule a consultation with UnyKorn broker-dealer operations.',
}

export default function ContactPage() {
  return (
    <main style={{ maxWidth: 720, margin: '0 auto', padding: '4rem 2rem' }}>
      <header style={{ marginBottom: '3rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '1rem',
          }}
        >
          Contact
        </p>
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          Schedule a Consultation
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1rem' }}>
          Whether you&apos;re planning an offering, evaluating distribution options, or need
          operational support for an existing program, our team is available for a confidential
          discussion.
        </p>
      </header>

      {/* Contact Channels */}
      <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '3rem' }}>
        <div
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            padding: '2rem',
          }}
        >
          <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Issuer Inquiries</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
            For issuers exploring offering structuring, exemption selection, distribution strategy,
            or platform onboarding.
          </p>
          <p style={{ fontSize: '0.875rem' }}>
            <strong>Email:</strong>{' '}
            <a href="mailto:issuers@unykorn.org" style={{ color: 'var(--color-accent)' }}>
              issuers@unykorn.org
            </a>
          </p>
        </div>

        <div
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            padding: '2rem',
          }}
        >
          <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Institutional Investors</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
            For qualified investors seeking access to private placement opportunities and
            portfolio allocation guidance.
          </p>
          <p style={{ fontSize: '0.875rem' }}>
            <strong>Email:</strong>{' '}
            <a href="mailto:invest@unykorn.org" style={{ color: 'var(--color-accent)' }}>
              invest@unykorn.org
            </a>
          </p>
        </div>

        <div
          style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            padding: '2rem',
          }}
        >
          <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '1rem' }}>Partnership & Integration</h2>
          <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1rem' }}>
            For technology partners, service providers, and organizations interested in platform
            integration or co-distribution arrangements.
          </p>
          <p style={{ fontSize: '0.875rem' }}>
            <strong>Email:</strong>{' '}
            <a href="mailto:partners@unykorn.org" style={{ color: 'var(--color-accent)' }}>
              partners@unykorn.org
            </a>
          </p>
        </div>
      </div>

      {/* General */}
      <div
        style={{
          padding: '2rem',
          border: '1px solid var(--color-border)',
          borderRadius: 8,
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', marginBottom: '1rem' }}>
          General inquiries and compliance questions
        </p>
        <p style={{ fontSize: '0.9rem' }}>
          <a href="mailto:info@unykorn.org" style={{ color: 'var(--color-accent)', fontWeight: 600 }}>
            info@unykorn.org
          </a>
        </p>
      </div>

      {/* Disclaimer */}
      <p
        style={{
          marginTop: '2rem',
          fontSize: '0.7rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.5,
          opacity: 0.6,
        }}
      >
        Contacting UnyKorn does not constitute an offer or solicitation to buy or sell any security.
        All communications are subject to our{' '}
        <Link href="/disclosures">regulatory disclosures</Link>.
      </p>
    </main>
  )
}
