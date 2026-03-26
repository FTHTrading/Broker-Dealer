import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Market analysis, regulatory updates, and educational content for private securities and digital asset markets.',
}

const INSIGHTS = [
  {
    category: 'Regulatory',
    date: '2026-03-20',
    title: 'SEC Staff Guidance on Digital Asset Securities: Key Takeaways for Issuers',
    summary: 'An analysis of recent SEC staff statements regarding the application of existing securities frameworks to tokenized instruments, and what issuers should consider when structuring digital security offerings.',
    slug: 'sec-digital-asset-guidance-2026',
  },
  {
    category: 'Market Structure',
    date: '2026-03-15',
    title: 'The Evolution of Private Market Liquidity: ATS, Bulletin Boards, and Programmatic Matching',
    summary: 'How alternative trading systems and technology-driven matching engines are creating new liquidity pathways for traditionally illiquid private securities.',
    slug: 'private-market-liquidity-evolution',
  },
  {
    category: 'Compliance',
    date: '2026-03-10',
    title: 'Transfer Restrictions in Tokenized Securities: Implementing Rule 144 On-Chain',
    summary: 'A technical and regulatory deep-dive into encoding SEC Rule 144 holding periods, volume limitations, and manner-of-sale requirements into smart contract logic.',
    slug: 'rule-144-on-chain-implementation',
  },
  {
    category: 'Operations',
    date: '2026-03-05',
    title: 'Multi-Signature Custody in Regulated Securities Operations',
    summary: 'Institutional custody requirements for digital securities and how multi-signature wallet architectures provide operational security while maintaining regulatory compliance.',
    slug: 'multisig-custody-operations',
  },
  {
    category: 'Education',
    date: '2026-02-28',
    title: 'Regulation D Offerings: 506(b) vs 506(c) — Choosing the Right Exemption',
    summary: 'A comprehensive comparison of the two most commonly used Reg D exemptions, including investor solicitation rules, verification requirements, and practical considerations for issuers.',
    slug: 'reg-d-506b-vs-506c-guide',
  },
  {
    category: 'Technology',
    date: '2026-02-20',
    title: 'Content-Addressed Document Storage: IPFS for Securities Document Management',
    summary: 'How content-addressed storage systems provide tamper-evident document management for offering materials, subscription agreements, and regulatory filings.',
    slug: 'ipfs-securities-document-management',
  },
  {
    category: 'Market Analysis',
    date: '2026-02-15',
    title: 'Private Credit Markets: Tokenization Opportunities in Revenue-Share and Structured Notes',
    summary: 'Examining how tokenization enables more efficient structuring, distribution, and servicing of private debt instruments including revenue participation notes and structured credit.',
    slug: 'private-credit-tokenization',
  },
  {
    category: 'Regulatory',
    date: '2026-02-10',
    title: 'Blue Sky Laws and Multi-State Offering Compliance: A Practical Guide',
    summary: 'Navigating state securities registration requirements, notice filings, and exemption coordination for offerings distributed across multiple U.S. jurisdictions.',
    slug: 'blue-sky-compliance-guide',
  },
] as const

const CATEGORY_COLORS: Record<string, string> = {
  Regulatory: '#5b6ef4',
  'Market Structure': '#22c55e',
  Compliance: '#f59e0b',
  Operations: '#d4a843',
  Education: '#a78bfa',
  Technology: '#06b6d4',
  'Market Analysis': '#ec4899',
}

export default function InsightsPage() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '4rem 2rem' }}>
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
          Insights & Research
        </p>
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          Market Intelligence
        </h1>
        <p style={{ maxWidth: 580, color: 'var(--color-text-secondary)', fontSize: '1rem' }}>
          Regulatory analysis, market structure research, and educational content
          for institutional participants in the private securities ecosystem.
        </p>
      </header>

      <div style={{ display: 'grid', gap: '1px', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
        {INSIGHTS.map((item) => (
          <Link
            key={item.slug}
            href={`/insights/${item.slug}`}
            style={{
              display: 'block',
              padding: '2rem',
              background: 'var(--color-surface)',
              textDecoration: 'none',
              color: 'inherit',
              transition: 'background 0.15s',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontSize: '0.7rem',
                  padding: '0.2rem 0.6rem',
                  borderRadius: 4,
                  fontWeight: 600,
                  background: (CATEGORY_COLORS[item.category] ?? '#5b6ef4') + '15',
                  color: CATEGORY_COLORS[item.category] ?? '#5b6ef4',
                  fontFamily: 'var(--font-mono)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                }}
              >
                {item.category}
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>
                {new Date(item.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
            <h2
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                marginBottom: '0.5rem',
                lineHeight: 1.35,
              }}
            >
              {item.title}
            </h2>
            <p
              style={{
                fontSize: '0.85rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.65,
              }}
            >
              {item.summary}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
