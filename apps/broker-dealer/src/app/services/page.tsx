import Link from 'next/link'

const SERVICES = [
  {
    id: 'placement',
    title: 'Private Placement & Exempt Offering Distribution',
    color: '#5b6ef4',
    summary: 'End-to-end management of Reg D 506(b), 506(c), Reg A+, and Reg S exempt offerings from origination through closing and cap table allocation.',
    capabilities: [
      'Offering structuring and regulatory framework selection (Reg D / Reg A+ / Reg S / Reg CF)',
      'Gated investor portal — compliance-status-driven access, NDA audit trail, document delivery',
      'Digital subscription room with DocuSign e-sign integration and PPM delivery tracking',
      'Automated investor qualification: KYC via Persona, KYB via Middesk, accreditation via Parallel Markets',
      'Sanctions screening via ComplyAdvantage — OFAC, PEP, adverse media, real-time rescreening',
      'Reg BI suitability assessment — Best Interest analysis, conflict disclosure, supervisory review queue',
      'Allocation engine: pro-rata, discretionary, multi-tranche, soft/hard cap enforcement',
      'Multi-rail subscription funding: wire, ACH, USDC, USDT, DAI, RLUSD, private rails',
      'Closing mechanics: partial close, rolling close, firm close with automated notice delivery',
      'Post-close administration: cap table sync, investor notices, transfer restriction enforcement',
    ],
    instruments: ['Common equity', 'Preferred equity', 'Convertible notes', 'SAFEs', 'LP interests', 'Fund units', 'Co-investment vehicles'],
  },
  {
    id: 'rwa',
    title: 'Real World Asset (RWA) Issuance',
    color: '#e05a2b',
    summary: 'Tokenized real-world assets on XRPL and EVM chains with Chainlink Proof of Reserve backing, custody-connected settlement, and programmable compliance.',
    capabilities: [
      'Asset onboarding: legal structuring, custodian selection, reserve account establishment',
      'Chainlink Proof of Reserve — real-time on-chain custody verification for every tokenized asset',
      'XRPL token issuance with freeze, clawback, and legend controls baked into the issuance layer',
      'Physical asset custody: APMEX + Brinks for gold and precious metals backing',
      'Multi-chain deployment: XRPL primary + Ethereum ERC-3643 security token standard',
      'Rust-native RWA processing engine — sub-millisecond NAV calculation and settlement validation',
      'Policy-gated transfers: whitelist/blacklist, lockup periods, accreditation gates, affiliate checks',
      'Chainlink Data Feeds for real-time mark-to-market of underlying asset values',
      'Automated income distribution: yield events triggered by Chainlink Automation keepers',
      'ClickHouse TCA analytics + TimescaleDB asset performance time-series',
    ],
    instruments: ['Tokenized real estate', 'Commodity-backed tokens', 'Infrastructure debt', 'Royalty streams', 'Carbon credits', 'Trade receivables'],
  },
  {
    id: 'bonds',
    title: 'Yield-Bearing Bond & Debt Administration',
    color: '#d4a843',
    summary: 'Full seven-state bond lifecycle from issuance through maturity. Coupon automation via Chainlink. On-chain XRPL registry synchronized with legal record.',
    capabilities: [
      '7-state lifecycle: Draft → Offered → Subscribing → Funded → Active → Maturing → Matured',
      'Rust yield distribution engine — pro-rata coupon calculation with fractional handling and rounding policies',
      'Chainlink Automation keepers for coupon payment triggers — no manual intervention required',
      'On-chain bond registry on XRPL synchronized with authoritative legal registry in real-time',
      'Note schedule management: maturity dates, amortization schedules, PIK provisions',
      'Covenant tracking: financial covenant monitoring, breach detection, reporting obligations',
      'Payment reconciliation: wire and stablecoin payment matching, excess-return processing',
      'Holder communication: notice archive, delivery tracking, confirmation receipts',
      'Transfer restriction enforcement: 12-month lock-up default, assignee qualification checks',
      'Tax reporting: interest income aggregation, 1099-INT generation, withholding management',
    ],
    instruments: ['Senior secured notes', 'Convertible bonds', 'Revenue-share notes', 'Subordinated debt', 'Mezzanine instruments', 'Structured products'],
  },
  {
    id: 'rights',
    title: 'Rights Offerings',
    color: '#10b981',
    summary: 'Automated rights offering execution: record-date import through oversubscription handling, payment reconciliation, and closing — fully managed.',
    capabilities: [
      'Record-date import from cap table registry or external transfer agent',
      'Entitlement calculation: per-share rights, fractional handling, rounding policies',
      'Basic + oversubscription election portal — HTML/web-based investor interface',
      'Oversubscription engine: priority rules, pro-rata, hard cap management, excess processing',
      'Payment collection: wire, ACH, USDC, USDT, RLUSD stablecoin payment matching',
      'Excess return processing: automated refund calculation and disbursement',
      'Standby underwriter coordination workflows',
      'Holder communication: notice, reminder, election confirmation, closing notice',
      'Regulatory filing support: Form D, Blue Sky multi-state, state notice filings',
      'SEC review coordination if subject to rights offering rules under Rule 801/802',
    ],
    instruments: ['Equity rights', 'Debt rights', 'Warrant exercises', 'Subscription rights', 'Preemptive rights'],
  },
  {
    id: 'custody',
    title: 'Custody-Connected Settlement',
    color: '#06b6d4',
    summary: 'Multi-custodian, multi-rail settlement connecting subscription payment through custody wallet, approval engine, settlement execution, and reconciliation.',
    capabilities: [
      'Fireblocks primary custody: 6 custom modules, 12 vault roles, RS256 JWT per-request auth',
      'BitGo secondary custody with threshold key management and configurable failover policies',
      'Anchorage Digital for institutional cold storage of long-duration digital assets',
      'APMEX + Brinks for physical commodity custody underlying tokenized RWA instruments',
      'Multi-tier approval engine: auto-approve → single-sign → dual-control → committee quorum',
      'Settlement across USDC, USDT, DAI, RLUSD, proprietary stablecoin, wire, ACH, private rails',
      'Private settlement rails for institutional counterparty transactions with zero public chain exposure',
      'Automated reconciliation engine with failed-settlement retry queues and escalation routing',
      'VaultLedger: append-only cryptographically hash-chained custody movement ledger (SEC 17a-4)',
      'Chainlink Proof of Reserve: real-time on-chain custody balance verification',
    ],
    instruments: ['Digital securities', 'Stablecoins', 'Tokenized commodities', 'Fund interests', 'Principal protected notes'],
  },
  {
    id: 'digital',
    title: 'Controlled Digital Securities Issuance',
    color: '#8b5cf6',
    summary: 'SEC-compliant digital security issuance on XRPL and EVM chains. Freeze, clawback, and legend controls native. Policy enforcement at the token layer.',
    capabilities: [
      'XRPL tokenization with freeze, clawback, and legend controls in the issuance layer',
      'ERC-3643 (T-REX) compliant security tokens on Ethereum and Polygon for institutional compatibility',
      'Deterministic token ID scheme — every token linked to legal instrument record',
      'Policy-gated transfers: every transfer compliance-evaluated before execution via WASM engine',
      'ATS hook integration for secondary market connectivity when eligible',
      'Transfer agent partner APIs and Carta cap table bi-directional synchronization',
      'CCIP cross-chain interoperability for multi-chain holder positions',
      'On-chain corporate actions: splits, dividends, mergers, conversions',
      'Regulatory action readiness: freeze any holder position, execute clawback, update legend restrictions',
      'Examiner export: full token ledger + transfer history in regulator-ready format',
    ],
    instruments: ['SEC-registered digital securities', 'Tokenized fund interests', 'Digital bonds', 'Digital preferred equity', 'Stablecoin-settled instruments'],
  },
]

export const metadata = { title: 'Services' }

export default function ServicesPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>

      <section style={{ padding: '4rem 0 2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Services</p>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Every service. Every instrument. Every jurisdiction.</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 860, marginBottom: '2.5rem' }}>
          Six core service lines covering the complete capital markets lifecycle — from origination through post-close administration.
          Each service is backed by production infrastructure, not a vendor configuration or a manual process.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {SERVICES.map((s) => (
            <a key={s.id} href={'#' + s.id} style={{ fontSize: '0.8rem', padding: '0.35rem 0.85rem', borderRadius: 4, background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
              {s.title.split(' ')[0]} {s.title.split(' ')[1]}
            </a>
          ))}
        </div>
      </section>

      <div style={{ display: 'grid', gap: '2rem', marginBottom: '4rem' }}>
        {SERVICES.map((svc) => (
          <div key={svc.id} id={svc.id} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: `3px solid ${svc.color}`, borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ padding: '1.75rem 1.75rem 1.25rem' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.75rem', color: svc.color }}>{svc.title}</h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem', maxWidth: 800 }}>{svc.summary}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '0.4rem', marginBottom: '1.5rem' }}>
                {svc.capabilities.map((cap) => (
                  <div key={cap} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                    <span style={{ color: svc.color, flexShrink: 0, fontWeight: 700 }}>—</span>{cap}
                  </div>
                ))}
              </div>
              <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--color-text-secondary)', marginRight: '0.75rem' }}>Instruments</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{svc.instruments.join(' · ')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <section style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '2rem', marginBottom: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>Ready to structure an offering or activate the platform?</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', maxWidth: 600 }}>Our operations team manages every stage from issuer onboarding through investor closing and post-close administration.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
          <Link href="/contact" style={{ background: 'var(--color-gold)', color: '#0a0a0f', padding: '0.65rem 1.5rem', borderRadius: 6, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>Start a Conversation</Link>
          <Link href="/operations" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.65rem 1.5rem', borderRadius: 6, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>View Operations</Link>
        </div>
      </section>

    </main>
  )
}
