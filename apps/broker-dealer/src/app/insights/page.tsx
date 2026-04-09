import Link from 'next/link'

const ARTICLES = [
  {
    slug: 'sec-tokenization-guidance',
    category: 'Regulation',
    categoryColor: '#5b6ef4',
    title: 'SEC Tokenization Guidance: What the No-Action Relief Means for Digital Securities Issuers',
    date: '2025-03-15',
    summary: 'The SEC Staff has issued several no-action letters acknowledging blockchain-based securities delivery. We break down what each decision means for issuers considering tokenized equity, tokenized debt, and fund interests on XRPL and Ethereum.',
    points: [
      'No-action relief covers delivery of securities — not the underlying offering exemption',
      'Book-entry remains the primary record; blockchain state is an authorized mirror',
      'Transfer restriction enforcement via XRPL freeze and clawback satisfies transfer agent requirements in some structures',
      'ERC-3643 (T-REX) and XRPL-native controls are the leading compliance-compatible token standards',
    ],
  },
  {
    slug: 'rwa-market-size-2025',
    category: 'Market Intelligence',
    categoryColor: '#10b981',
    title: 'RWA Market Size and Composition: $15B On-Chain, $30T Addressable — The Actual Picture',
    date: '2025-02-28',
    summary: 'Tokenized real-world assets passed $15B on-chain notional in early 2025. But the headline obscures a more complex picture: government treasuries, private credit, and trade receivables drive the bulk. Commodities and real estate are earlier stage. Here is the real breakdown.',
    points: [
      'Tokenized US Treasuries: BlackRock BUIDL, Franklin OnChain, Ondo — $8B+ combined notional',
      'Private credit tokens: Maple Finance, Centrifuge, Goldfinch — $2B+ TVL with real loss history',
      'Tokenized real estate: nascent, most issuances under $100M, liquidity thin',
      'Trade receivables and supply chain: Tradeteq, Fasanara — growing fastest outside DeFi',
      'Commodities (gold, silver): PAXG, Tether Gold — established but capped by custody friction',
    ],
  },
  {
    slug: 'mica-stablecoin-implications',
    category: 'Regulation',
    categoryColor: '#5b6ef4',
    title: 'MiCA Title III EMT Rules: What Every Stablecoin Issuer Deploying in Europe Must Know Now',
    date: '2025-02-10',
    summary: 'MiCA is in effect for stablecoins (Title III EMT/ART) since June 2024. Any issuer operating in the EU or serving EU persons must have CASP authorisation or a local EMT/credit institution licence. We map the requirements, the thresholds that trigger enhanced obligations, and the practical ops implications.',
    points: [
      'EMT issuers must hold 1:1 reserves in segregated accounts at EU credit institutions',
      'Redemption at par on demand within 1 business day — no exceptions',
      'Volume caps: >1M daily transactions or >200M EUR daily value triggers enhanced oversight',
      'National competent authority authorisation required before public offer in any EU member state',
      'Transaction reporting to ESMA — real-time and daily settlement data submission',
    ],
  },
  {
    slug: 'private-placement-process',
    category: 'Operations',
    categoryColor: '#d4a843',
    title: 'How a Reg D 506(c) Offering Actually Works: From PPM to Closing in 12 Operational Steps',
    date: '2025-01-25',
    summary: 'Most descriptions of Reg D offerings skip the execution detail. We walk through every operational step from issuer onboarding through closing — including the compliance gates, funding mechanics, allocation logic, and post-close obligations that most platforms outsource or omit entirely.',
    points: [
      'Step 1–3: Issuer KYB, offering structuring, PPM and subscription agreement preparation',
      'Step 4–5: Form D filing (within 15 days of first sale), blue sky notice filings',
      'Step 6–7: Investor portal activation, KYC/AML/accreditation gating for all subscribers',
      'Step 8–9: Subscription room, document execution, Reg BI suitability per subscriber',
      'Step 10: Payment collection, reconciliation, escrow management',
      'Step 11–12: Subscription acceptance, allocation, cap table recording, investor notices, 1099-INT setup',
    ],
  },
  {
    slug: 'stablecoin-settlement-adoption',
    category: 'Technology',
    categoryColor: '#06b6d4',
    title: 'Stablecoin Settlement in Private Capital Markets: USDC vs USDT vs RLUSD vs Institutional Rails',
    date: '2025-01-12',
    summary: 'Stablecoin settlement in private capital markets is moving from experiment to infrastructure. But not all stablecoins are equal for institutional use. We compare USDC, USDT, DAI/USDS, RLUSD, and private settlement rails — on reserve quality, chain coverage, regulatory standing, and counterparty risk.',
    points: [
      'USDC: Circle / BlackRock reserve management, MiCA EMT licensed in EU, NYDFS trust charter — best regulated',
      'USDT: largest liquidity pool, TRON + ETH primary, Tether reserve quality improving but still opaque',
      'DAI/USDS: MakerDAO / Sky, over-collateralized, decentralized governance risk, RWA reserves growing',
      'RLUSD: Ripple Labs, NYDFS DFS licensed, XRPL and ETH, purpose-built for institutional settlement',
      'Private rails: counterparty bilateral, zero public chain exposure, used at Fireblocks Network layer',
    ],
  },
  {
    slug: 'rights-offering-mechanics',
    category: 'Operations',
    categoryColor: '#d4a843',
    title: 'Rights Offering Mechanics for Private Issuers: The 7 Operational Steps No One Explains',
    date: '2024-12-18',
    summary: 'Rights offerings allow existing investors to maintain their pro-rata ownership through a new capital raise. Operationally they are significantly more complex than primary offerings: oversubscription handling, fractional entitlements, payment matching, and excess return processing require purpose-built infrastructure.',
    points: [
      'Record date: snapshot of cap table to determine eligible holders and entitlement shares',
      'Entitlement calculation: per-unit rights allocation with fractional rounding policy election',
      'Basic subscription: investor elects to exercise all, partial, or none of their basic rights',
      'Oversubscription: investors elect additional units beyond basic right — subject to pro-rata reduction',
      'Payment matching: wire, ACH, and stablecoin collections matched to each election record',
      'Excess return: oversubscription reductions trigger automated excess payment refund calculation',
      'Closing: final allocation, cap table update, notice delivery, transfer restriction ledger entry',
    ],
  },
  {
    slug: 'chainlink-capital-markets',
    category: 'Technology',
    categoryColor: '#06b6d4',
    title: 'Chainlink in Capital Markets Infrastructure: Data Feeds, CCIP, PoR, and Automation — Practical Applications',
    date: '2024-11-30',
    summary: 'Chainlink has evolved from a price oracle into a full capital markets oracle network. We examine how each Chainlink product applies to broker-dealer infrastructure — with specific use cases in yield distribution, cross-chain position monitoring, reserve verification, and automated corporate actions.',
    points: [
      'Data Feeds: real-time NAV marking for RWA positions, FX rate feeds for multi-currency settlement',
      'Proof of Reserve: on-chain custody balance verification — auditors query the PoR adapter, not our database',
      'CCIP: cross-chain position bridging for multi-chain token holders without liquidity fragmentation',
      'Automation: coupon payment keepers — triggers yield distribution on schedule without manual execution',
      'Functions: off-chain computation of complex coupon and allocation formulas brought on-chain for audit',
      'VRF: verifiable randomness for lottery-style oversubscription allocation where appropriate',
    ],
  },
  {
    slug: 'fireblocks-architecture',
    category: 'Technology',
    categoryColor: '#06b6d4',
    title: 'Building on Fireblocks: 6 Custom Modules, 12 Vault Roles, and Why Every Broker-Dealer Needs This Architecture',
    date: '2024-11-15',
    summary: 'Fireblocks is not a plug-and-play custody API for capital markets. The raw SDK handles signing and broadcasting. The real work is the 6 custom abstraction modules: vault lifecycle management, per-transaction RS256 JWT signing, approval workflow engine, reconciliation, VaultLedger integration, and PoR adapter. Here is what we built.',
    points: [
      'Module 1: Vault Provisioning — programmatic vault creation per offering with role matrix seeding',
      'Module 2: RS256 JWT — SPKI PEM key loading, per-API-call signature generation, clock alignment',
      'Module 3: Approval Engine — 4-tier routing based on transaction value, asset type, counterparty risk score',
      'Module 4: Reconciliation — post-settlement balance polling vs. expected positions, discrepancy alerting',
      'Module 5: VaultLedger — every Fireblocks event written to append-only hash-chained audit ledger',
      'Module 6: PoR Adapter — pushes verified balance snapshots to Chainlink PoR node for on-chain publication',
    ],
  },
]

const CATEGORIES = ['All', 'Regulation', 'Market Intelligence', 'Technology', 'Operations']

export const metadata = { title: 'Insights' }

export default function InsightsPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>

      <section style={{ padding: '4rem 0 2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Insights</p>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Regulation, market intelligence, and operational depth.</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 800, marginBottom: '2rem' }}>
          Analysis from inside the infrastructure — SEC tokenization guidance, MiCA implementation, RWA market data, Chainlink capital markets applications, and step-by-step operational breakdowns.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {CATEGORIES.map((cat) => (
            <span key={cat} style={{ fontSize: '0.8rem', padding: '0.3rem 0.8rem', borderRadius: 4, background: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)' }}>{cat}</span>
          ))}
        </div>
      </section>

      <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
        {ARTICLES.map((article) => (
          <article key={article.slug} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.75rem', display: 'grid', gridTemplateColumns: '1fr', gap: '0' }}>
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: article.categoryColor, background: `${article.categoryColor}15`, padding: '0.2rem 0.5rem', borderRadius: 3 }}>{article.category}</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', fontFamily: 'monospace' }}>{article.date}</span>
            </div>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.75rem', lineHeight: 1.4 }}>{article.title}</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>{article.summary}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '0.35rem', borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
              {article.points.map((point) => (
                <div key={point} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                  <span style={{ color: article.categoryColor, flexShrink: 0, fontWeight: 700 }}>·</span>{point}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>

      <section style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '2rem', marginBottom: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>Get the Moody Capital Markets Briefing</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', maxWidth: 560 }}>Monthly analysis of regulatory developments, RWA market movements, and infrastructure updates. No pitch — just the relevant operational and compliance intelligence.</p>
        </div>
        <Link href="/contact" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.65rem 1.5rem', borderRadius: 6, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none', flexShrink: 0 }}>Subscribe</Link>
      </section>

    </main>
  )
}
