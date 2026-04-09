import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Downloads — FTH Capital Markets',
  description: 'Downloadable resources for broker-dealers: platform overview, RWA tokenization framework, regulatory guides, stablecoin infrastructure, and due diligence packages.',
}

const CATEGORIES = [
  {
    id: 'platform',
    label: 'Platform Overview',
    color: '#2563eb',
    description: 'Capabilities, architecture, and partnership materials for broker-dealers evaluating FTH Capital Markets.',
    docs: [
      { title: 'Platform Overview & Capabilities Deck', desc: 'Full walkthrough of all 100+ modules, infrastructure, and settlement capabilities. Start here.', file: 'fth-capital-platform-overview.pdf', tag: 'START HERE', pages: '24pp' },
      { title: 'Broker-Dealer Partnership Program', desc: 'Revenue share, co-branding, white-label licensing, and referral structure for FINRA-registered BDs.', file: 'fth-bd-partnership-program.pdf', tag: 'POPULAR', pages: '12pp' },
      { title: 'Technology Architecture Summary', desc: 'High-level system architecture: Rust engine, custody integrations, oracle stack, and chain topology.', file: 'fth-technology-architecture.pdf', tag: 'TECHNICAL', pages: '18pp' },
      { title: 'Fee Schedule & Commission Structure', desc: 'Platform fees, transaction costs, custody charges, and broker-dealer commission grid.', file: 'fth-fee-schedule.pdf', tag: 'COMMERCIAL', pages: '6pp' },
      { title: 'Competitive Landscape Analysis', desc: 'How FTH Capital Markets compares to Securitize, Ondo, Maple, Tokena, and traditional prime brokers.', file: 'fth-competitive-analysis.pdf', tag: 'MARKET', pages: '14pp' },
    ],
  },
  {
    id: 'rwa',
    label: 'RWA & Tokenization',
    color: '#c9a84c',
    description: 'Frameworks, sample documents, and technical guides for real-world asset tokenization on all supported chains.',
    docs: [
      { title: 'RWA Tokenization Framework', desc: 'End-to-end tokenization process: legal structuring, smart contract deployment, token registry, and lifecycle.', file: 'fth-rwa-tokenization-framework.pdf', tag: 'CORE DOC', pages: '28pp' },
      { title: 'Sample Offering Memorandum — Real Estate', desc: 'Annotated sample OM for a Reg D 506(c) tokenized real estate fund. Redacted for public review.', file: 'fth-sample-om-real-estate.pdf', tag: 'SAMPLE', pages: '44pp' },
      { title: 'Smart Contract Audit Summary', desc: 'Security audit coverage for EVM, XRPL, and Stellar token contracts. Conducted by independent auditors.', file: 'fth-smart-contract-audit.pdf', tag: 'SECURITY', pages: '16pp' },
      { title: 'Digital Asset Custody Guide', desc: 'Fireblocks MPC, BitGo, and Anchorage custody workflows for tokenized assets — roles, thresholds, and failover.', file: 'fth-custody-guide.pdf', tag: 'CUSTODY', pages: '20pp' },
      { title: 'Token Economics & Distribution Model', desc: 'Yield calculation, coupon mechanics, reserve reporting, and Chainlink Proof of Reserve integration.', file: 'fth-token-economics.pdf', tag: 'ECONOMICS', pages: '10pp' },
      { title: 'Multi-Chain Asset Registry Overview', desc: 'How assets are tracked across ETH, Polygon, XRPL, Stellar, and Apostle Chain simultaneously.', file: 'fth-multi-chain-registry.pdf', tag: 'TECHNICAL', pages: '8pp' },
    ],
  },
  {
    id: 'regulatory',
    label: 'Regulatory & Compliance',
    color: '#8b5cf6',
    description: 'SEC exemption guides, FINRA requirements, AML procedures, and filing checklists for compliant private placements.',
    docs: [
      { title: 'Reg D 506(c) Offering Framework', desc: 'Complete guide to general solicitation offerings: accreditation verification, Form D, advertising rules, and timeline.', file: 'fth-reg-d-506c-framework.pdf', tag: 'REG D', pages: '22pp' },
      { title: 'Reg D 506(b) Offering Framework', desc: 'Non-general solicitation structure: up to 35 sophisticated non-accredited investors, disclosures, and suitability.', file: 'fth-reg-d-506b-framework.pdf', tag: 'REG D', pages: '18pp' },
      { title: 'Regulation S Offshore Offering Guide', desc: 'Non-US person transactions: Category 1/2/3, distribution compliance periods, and offshore fund structuring.', file: 'fth-reg-s-guide.pdf', tag: 'REG S', pages: '16pp' },
      { title: 'ATS Regulatory Compliance Overview', desc: 'Alternative Trading System registration, Reg ATS requirements, order display, and fair access obligations.', file: 'fth-ats-compliance.pdf', tag: 'ATS', pages: '12pp' },
      { title: 'KYC/AML Procedures Manual', desc: 'Persona KYC, Middesk KYB, ComplyAdvantage AML, FinCEN SAR, and BSA procedures in the FTH platform.', file: 'fth-kyc-aml-procedures.pdf', tag: 'COMPLIANCE', pages: '30pp' },
      { title: 'Reg BI Suitability & Best Interest Guide', desc: 'Regulation Best Interest obligations, conflict-of-interest disclosure, care and compliance obligations for BDs.', file: 'fth-reg-bi-guide.pdf', tag: 'FINRA', pages: '14pp' },
      { title: 'Blue Sky Filing Checklist', desc: 'State-by-state blue sky notice filing requirements for Reg D and Reg A+ offerings across all 50 states.', file: 'fth-blue-sky-checklist.pdf', tag: 'STATE REG', pages: '8pp' },
    ],
  },
  {
    id: 'stablecoin',
    label: 'Stablecoin & Settlement',
    color: '#0ea5e9',
    description: 'Infrastructure guides and architecture documents for stablecoin-based RWA settlement and distribution.',
    docs: [
      { title: 'Stablecoin Settlement Infrastructure Guide', desc: 'Complete guide to USDC, USDT, USDF, DAI, RLUSD settlement across ATP, ETH, Polygon, XRPL, and Stellar.', file: 'fth-stablecoin-settlement-guide.pdf', tag: 'CORE DOC', pages: '20pp' },
      { title: 'Multi-Chain Settlement Architecture', desc: 'Technical deep-dive: rail selection, finality times, gas optimization, and fail-safe retry mechanisms.', file: 'fth-settlement-architecture.pdf', tag: 'TECHNICAL', pages: '16pp' },
      { title: 'Stablecoin Comparison Matrix', desc: 'USDC vs USDT vs USDF vs DAI vs RLUSD: reserves, regulation, chain support, and BD use-case fit.', file: 'fth-stablecoin-matrix.pdf', tag: 'COMPARISON', pages: '6pp' },
      { title: 'FTH Pay Network Integration Guide', desc: 'How to connect the FTH Pay stablecoin network for instant investor distributions and zero-fee ATP settlement.', file: 'fth-pay-integration-guide.pdf', tag: 'INTEGRATION', pages: '12pp' },
    ],
  },
  {
    id: 'investor',
    label: 'Investor Relations',
    color: '#10b981',
    description: 'Templates and checklists for investor onboarding, subscription execution, and accreditation verification.',
    docs: [
      { title: 'Qualified Investor Accreditation Checklist', desc: 'Documentation requirements for income, net worth, professional certification, and entity accreditation.', file: 'fth-accreditation-checklist.pdf', tag: 'CHECKLIST', pages: '4pp' },
      { title: 'Subscription Agreement Template', desc: 'Annotated sample subscription agreement for Reg D tokenized offerings. Legal review required before use.', file: 'fth-subscription-agreement-template.pdf', tag: 'TEMPLATE', pages: '28pp' },
      { title: 'Investor Onboarding Workflow Guide', desc: 'Step-by-step walkthrough of KYC, accreditation, subscription docs, and token allocation for new investors.', file: 'fth-investor-onboarding-guide.pdf', tag: 'WORKFLOW', pages: '10pp' },
      { title: 'Form D Filing Guide', desc: 'How and when to file Form D with the SEC: timing, amendments, late filing consequences, and state notices.', file: 'fth-form-d-guide.pdf', tag: 'FILING', pages: '8pp' },
      { title: 'Investor Communication Templates', desc: 'Quarterly update, distribution notice, capital call, and closing communication templates for tokenized offerings.', file: 'fth-investor-comm-templates.pdf', tag: 'TEMPLATES', pages: '16pp' },
    ],
  },
  {
    id: 'diligence',
    label: 'Due Diligence',
    color: '#ef4444',
    description: 'Technical and regulatory due diligence packages for institutional investors and BD partners evaluating the platform.',
    docs: [
      { title: 'Technical Due Diligence Package', desc: 'Full technical audit: system architecture, security posture, DR/BCP, and third-party integrations. NDA required.', file: 'fth-technical-dd-package.pdf', tag: 'NDA', pages: '52pp' },
      { title: 'Regulatory Due Diligence Checklist', desc: 'FINRA membership, SEC registration, ATS licensing, SIPC coverage, and audit trail documentation.', file: 'fth-regulatory-dd-checklist.pdf', tag: 'CHECKLIST', pages: '12pp' },
      { title: 'Cybersecurity & Data Protection Overview', desc: 'SOC 2 alignment, encryption standards, penetration testing cadence, and incident response procedures.', file: 'fth-cybersecurity-overview.pdf', tag: 'SECURITY', pages: '14pp' },
      { title: 'Financial Audit Trail Overview', desc: 'VaultLedger WORM audit trail: hash-chaining, SEC 17a-4 compliance, and FINRA exam readiness.', file: 'fth-audit-trail-overview.pdf', tag: 'COMPLIANCE', pages: '10pp' },
    ],
  },
] as const

function tagColor(tag: string) {
  const map: Record<string, { color: string; bg: string }> = {
    'START HERE': { color: '#c9a84c', bg: 'rgba(201,168,76,0.1)' },
    'POPULAR': { color: '#10b981', bg: 'rgba(16,185,129,0.1)' },
    'CORE DOC': { color: '#2563eb', bg: 'rgba(37,99,235,0.1)' },
    'NDA': { color: '#ef4444', bg: 'rgba(239,68,68,0.1)' },
    'TEMPLATE': { color: '#8b5cf6', bg: 'rgba(139,92,246,0.1)' },
  }
  return map[tag] ?? { color: '#4a4a60', bg: 'rgba(74,74,96,0.1)' }
}

export default function DownloadsPage() {
  const totalDocs = CATEGORIES.reduce((a, c) => a + c.docs.length, 0)

  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 2rem' }}>

      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '0.75rem' }}>Resources & Downloads</div>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem', color: '#fff' }}>
          Broker-Dealer Resource Library
        </h1>
        <p style={{ fontSize: '1rem', color: '#4a4a60', lineHeight: 1.7, maxWidth: 680 }}>
          {totalDocs} institutional-grade documents across 6 categories — platform overview, RWA frameworks,
          regulatory guides, stablecoin infrastructure, investor templates, and due diligence packages.
        </p>
      </div>

      {/* Category jump links */}
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem', padding: '1rem 1.25rem', background: '#0c0c10', border: '1px solid #141420', borderRadius: 6 }}>
        {CATEGORIES.map((cat) => (
          <a
            key={cat.id}
            href={`#${cat.id}`}
            style={{
              padding: '0.35rem 0.875rem',
              borderRadius: 3,
              border: `1px solid ${cat.color}40`,
              background: `${cat.color}10`,
              color: cat.color,
              fontSize: '0.72rem',
              fontWeight: 700,
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.04em',
            }}
          >
            {cat.label} ({cat.docs.length})
          </a>
        ))}
      </div>

      {/* Categories */}
      {CATEGORIES.map((cat) => (
        <section key={cat.id} id={cat.id} style={{ marginBottom: '3.5rem', scrollMarginTop: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '0.5rem' }}>
            <div style={{ width: 3, height: 22, background: cat.color, borderRadius: 2, flexShrink: 0 }} />
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>{cat.label}</h2>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#30303e' }}>{cat.docs.length} documents</span>
          </div>
          <p style={{ fontSize: '0.82rem', color: '#4a4a60', marginBottom: '1.25rem', paddingLeft: '0.875rem' }}>{cat.description}</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '0.75rem' }}>
            {cat.docs.map((doc) => {
              const tc = tagColor(doc.tag)
              return (
                <div
                  key={doc.file}
                  style={{
                    background: '#0c0c10',
                    border: '1px solid #141420',
                    borderRadius: 5,
                    padding: '1.125rem 1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.625rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '0.5rem' }}>
                    <h3 style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f0f0f8', lineHeight: 1.35, flex: 1 }}>{doc.title}</h3>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', fontWeight: 700, padding: '0.15rem 0.4rem', borderRadius: 3, background: tc.bg, color: tc.color, border: `1px solid ${tc.color}40`, flexShrink: 0, whiteSpace: 'nowrap' }}>
                      {doc.tag}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#4a4a60', lineHeight: 1.55, flex: 1 }}>{doc.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.65rem', color: '#30303e' }}>{doc.pages} · PDF</span>
                    <a
                      href={`/downloads/${doc.file}`}
                      download
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.4rem 0.875rem',
                        background: `${cat.color}12`,
                        border: `1px solid ${cat.color}35`,
                        borderRadius: 3,
                        color: cat.color,
                        fontSize: '0.68rem',
                        fontWeight: 700,
                        textDecoration: 'none',
                        fontFamily: 'var(--font-mono)',
                        letterSpacing: '0.05em',
                      }}
                    >
                      ↓ DOWNLOAD
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      ))}

      {/* CTA */}
      <div style={{ padding: '2rem 2.5rem', background: '#0c0c10', border: '1px solid #141420', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#c9a84c', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Need the Full Technical DD Package?</div>
          <div style={{ fontSize: '0.88rem', color: '#4a4a60', lineHeight: 1.6 }}>
            The Technical Due Diligence Package (52pp) is available under NDA for institutional investors and registered broker-dealers.
          </div>
        </div>
        <a
          href="/contact"
          style={{
            padding: '0.7rem 1.5rem',
            background: 'rgba(201,168,76,0.1)',
            border: '1px solid rgba(201,168,76,0.35)',
            borderRadius: 4,
            color: '#c9a84c',
            fontSize: '0.72rem',
            fontWeight: 700,
            textDecoration: 'none',
            fontFamily: 'var(--font-mono)',
            letterSpacing: '0.06em',
            flexShrink: 0,
          }}
        >
          REQUEST UNDER NDA →
        </a>
      </div>
    </main>
  )
}
