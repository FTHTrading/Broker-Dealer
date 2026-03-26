import Link from 'next/link'

const COMPETITORS = [
  {
    name: 'Securitize',
    category: 'Digital Securities Platform',
    strengths: ['Transfer agent + broker-dealer', 'SEC-registered platform', 'Established issuer base', 'iCapital partnership'],
    weaknesses: ['No Rust performance layer', 'No proprietary stablecoin', 'Limited private rail capability', 'Traditional settlement only', 'Single custody provider'],
    our_edge: 'We offer the same regulatory framework with Rust-native bond processing, 4 custody providers, 6 stablecoin rails including proprietary, Chainlink oracles, and agentic operations.',
    color: '#5b6ef4',
  },
  {
    name: 'Ondo Finance',
    category: 'Tokenized Treasuries / RWA',
    strengths: ['OUSG institutional product', 'BlackRock BUIDL partnership', 'DeFi composability', 'Strong VC backing'],
    weaknesses: ['No broker-dealer infrastructure', 'No compliance pipeline (KYC/AML)', 'No subscription management', 'Limited to Treasury/yield products', 'No rights offering capability'],
    our_edge: 'We cover the full deal lifecycle — origination, compliance, subscription, settlement, registry, secondary — not just yield product issuance. DeFi composability is one capability, not the whole product.',
    color: '#06b6d4',
  },
  {
    name: 'Maple Finance',
    category: 'Institutional Credit / On-Chain Lending',
    strengths: ['Institutional lending pools', 'On-chain credit underwriting', 'Sophisicated borrower base', 'Multi-chain pools'],
    weaknesses: ['Suffered significant defaults (2022)', 'No equity or rights offering capability', 'No custody integration', 'No traditional AML/KYC pipeline', 'No bond lifecycle engine'],
    our_edge: 'Institutional credit is one instrument class in our system. We add the regulatory compliance layer, custody stack, multi-stablecoin settlement, and full broker-dealer operations that Maple lacks.',
    color: '#10b981',
  },
  {
    name: 'Tokena / Fnality',
    category: 'Wholesale CBDC / Institutional Settlement',
    strengths: ['Bank-grade settlement infrastructure', 'Regulatory credibility', 'Multi-bank consortium backing'],
    weaknesses: ['Not publicly accessible', 'No retail or accredited investor layer', 'No offering origination', 'No compliance onboarding', 'No stablecoin alternatives'],
    our_edge: 'We serve the full spectrum from boutique placement to institutional scale. Our private rails and custody stack deliver comparable institutional settlement without consortium membership requirements.',
    color: '#8b5cf6',
  },
  {
    name: 'tZERO',
    category: 'ATS / Security Token Trading',
    strengths: ['FINRA-registered ATS', 'SEC-registered broker-dealer', 'Operating secondary market', 'Regulated trading infrastructure'],
    weaknesses: ['Limited issuance capability', 'No multi-chain settlement', 'No stablecoin rails', 'No agentic operations', 'Thin secondary liquidity'],
    our_edge: 'We integrate ATS connectivity as a hook in our registry layer. Our platform focuses on the full lifecycle including issuance, compliance, primary subscription, and secondary hand-off — not just the trading venue.',
    color: '#d4a843',
  },
  {
    name: 'Apex Group / Broadridge',
    category: 'Traditional Fund Admin / Transfer Agent',
    strengths: ['Established regulatory relationships', 'Massive client base', 'Full-stack fund operations', 'DTCC integration'],
    weaknesses: ['No blockchain settlement', 'No stablecoin capability', 'No digital issuance', 'Legacy technology stack', 'Slow configuration cycles'],
    our_edge: 'We offer the same regulatory reliability with modern distributed infrastructure, 10x faster configuration, stablecoin settlement, on-chain registry, and supervised AI operations — at a fraction of the implementation time.',
    color: '#e05a2b',
  },
  {
    name: 'Republic / Verivest',
    category: 'Reg A+ / Reg CF Crowdfunding',
    strengths: ['Large retail investor base', 'Streamlined Reg A+ workflow', 'Consumer-friendly UX'],
    weaknesses: ['Limited institutional capability', 'No private rails', 'No stablecoin settlement', 'No rights offering engine', 'Not built for boutique BD operations'],
    our_edge: 'We operate at the institutional and accredited investor layer. Rights offerings, Reg D 506(b) and 506(c), custody-connected settlement, and transfer restriction enforcement are core — not afterthoughts.',
    color: '#ec4899',
  },
  {
    name: 'ADDX / iSTOX',
    category: 'Asia-Pacific Digital Exchange',
    strengths: ['MAS licensed', 'Institutional-grade digital exchange', 'Multi-asset class', 'Regional credibility'],
    weaknesses: ['Singapore/APAC concentration', 'No US regulatory framework (SEC/FINRA)', 'No proprietary stablecoin', 'Limited Western connectivity'],
    our_edge: 'We are built for US regulatory primacy (SEC, FINRA, Reg D, Reg A+, Reg S) while designed from the ground up for multi-jurisdictional expansion: MiCA, FCA, MAS, VARA — through the same compliance abstraction layer.',
    color: '#2bb5a0',
  },
]

const WHAT_NONE_HAVE = [
  { point: 'Rust performance engine for bond and RWA lifecycle', why: 'Every competitor uses interpreted runtimes. Sub-millisecond yield calculation and settlement validation without GC pauses is structurally differentiated.' },
  { point: 'Proprietary stablecoin + private settlement rails', why: 'No competitor offers both a public stablecoin issuance engine and a fully private institutional settlement layer under one platform.' },
  { point: 'Four integrated custody providers', why: 'Fireblocks + BitGo + Anchorage + APMEX/Brinks. No other platform offers physical gold custody alongside institutional digital asset custody under one operational console.' },
  { point: 'Chainlink Proof of Reserve for stablecoin backing', why: 'Real-time on-chain reserve attestation rather than quarterly PDF attestations. Continuous transparency.' },
  { point: 'Supervised agentic operations across seven domains', why: 'AI agents that surface, prepare, and recommend — always human-approved before regulated action. No competitor has built this into the compliance and treasury operations layer.' },
  { point: 'Full seven-state bond lifecycle with XRPL on-chain registry', why: 'Draft through Matured. Coupon events, oversubscription, post-close administration — all state-machine driven with an on-chain authoritative record.' },
  { point: 'Multi-jurisdiction compliance abstraction (8+ jurisdictions)', why: 'The same compliance pipeline adapts to SEC/FINRA, MiCA, FCA, MAS, VARA, FINMA through a provider abstraction layer — not separate codebases.' },
  { point: '165 automated test assertions in production', why: 'This is the level of infrastructure confidence that institutional counterparties, examiners, and principals require before relying on a system for custody-connected settlement.' },
]

const JURISDICTIONS_DEEP = [
  {
    region: 'United States',
    color: '#5b6ef4',
    framework: 'SEC + FINRA',
    instruments: 'Reg D 506(b/c) · Reg A+ · Reg S · Reg CF · Exchange Act · Investment Company Act',
    compliance: 'CAT reporting · TRACE bond reporting · FinCEN SAR/CTR · Form D EDGAR · Blue Sky multi-state · Reg BI suitability',
    settlement: 'USDC · USDT · Wire · ACH · RLUSD · Private Rails',
    custody: 'Fireblocks · BitGo · Anchorage Digital',
  },
  {
    region: 'European Union',
    color: '#10b981',
    framework: 'MiCA + MiFID II',
    instruments: 'Asset-referenced tokens · E-money tokens · Utility tokens · DLT financial instruments under Pilot Regime',
    compliance: 'AMLR · DORA operational resilience · GDPR data layer · White paper requirements · reserve asset management',
    settlement: 'USDC (MiCA-compliant) · EURC · Private Rails · Traditional SEPA',
    custody: 'CASP (Crypto Asset Service Provider) licensed custodians',
  },
  {
    region: 'United Kingdom',
    color: '#06b6d4',
    framework: 'FCA + FSMA 2000',
    instruments: 'Security tokens under FSMA · Cryptoasset registration · Regulated activities authorization',
    compliance: 'UK AML Regulations 2017 · FCA Handbook · Cryptoasset regime (Financial Services and Markets Act 2023)',
    settlement: 'USDC · USDT · Sterling stablecoin (anticipated) · Faster Payments integration',
    custody: 'FCA-registered cryptoasset custodians',
  },
  {
    region: 'Singapore',
    color: '#d4a843',
    framework: 'MAS + SFA',
    instruments: 'Capital markets products · Digital payment tokens · Digital tokens under Securities and Futures Act',
    compliance: 'Payment Services Act Class Licence · CMS Licence · AML/CFT MAS Notice · Technology Risk Management Guidelines',
    settlement: 'USDC · XSGD · SGD-denominated stablecoins · PayNow integration',
    custody: 'MAS-approved digital payment token custodians',
  },
  {
    region: 'UAE',
    color: '#e05a2b',
    framework: 'VARA + ADGM FSRA + DFSA',
    instruments: 'Virtual assets · security tokens · investment tokens under VARA rulebook · ADGM digital securities framework',
    compliance: 'UAE AML/CFT Federal Decree · VARA Virtual Asset Issuance Rulebook · FSRA ADGM financial services permission',
    settlement: 'USDC · USDT · AED stablecoin infrastructure · traditional SWIFT',
    custody: 'VARA-licensed virtual asset custodians',
  },
  {
    region: 'Switzerland',
    color: '#8b5cf6',
    framework: 'FINMA + Swiss DLT Act',
    instruments: 'Uncertificated ledger-based securities under DLT Act · Security tokens · Payment tokens',
    compliance: 'AMLA Anti-Money Laundering Act · FINMA Blockchain/DLT guidance · Swiss DLT Act registration requirements',
    settlement: 'USDC · CHF-denominated instruments · Swiss SIC payment system integration',
    custody: 'FINMA-supervised custodian or DLT trading facility',
  },
  {
    region: 'Hong Kong',
    color: '#ec4899',
    framework: 'SFC + HKMA',
    instruments: 'Virtual asset trading platform licensing · Type 1 (securities dealing) + Type 4 (advising) SFC licences · Tokenized securities',
    compliance: 'VATP licensing regime · AMLO Anti-Money Laundering Ordinance · HKMA stablecoin issuer sandbox framework',
    settlement: 'USDC · USDT · HKD stablecoin (HKMA sandbox) · FPS Faster Payment System',
    custody: 'VATP-licensed custodians · SFC-approved virtual asset custodians',
  },
  {
    region: 'Cayman Islands / BVI',
    color: '#2bb5a0',
    framework: 'CIMA + BVI FSC',
    instruments: 'Virtual Asset Service Provider registration · Exempt funds · SPV structures · Offshore fund administration',
    compliance: 'VASP (CIMA) · AML/CFT Regulations 2020 · Beneficial ownership register · CRS/FATCA compliance',
    settlement: 'USDC · USDT · traditional wire · multi-currency fund structures',
    custody: 'CIMA-registered virtual asset custodians · traditional fund administrators',
  },
]

export const metadata = { title: 'Market Landscape' }

export default function MarketsPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>

      <section style={{ padding: '4rem 0 2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Market Landscape</p>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>How this system compares to every alternative</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 860 }}>
          A deep audit of every major platform, protocol, and institution operating in tokenized securities,
          private capital markets, RWA issuance, and digital settlement — and where this system is materially differentiated.
        </p>
      </section>

      {/* Competitor Grid */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Competitive Landscape Audit</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>8 platforms analyzed. Strengths acknowledged. Gaps documented. Our differentiation stated plainly.</p>
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {COMPETITORS.map((co) => (
            <div key={co.name} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: `3px solid ${co.color}`, borderRadius: 8, padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 800, fontSize: '1.1rem' }}>{co.name}</span>
                <span style={{ fontSize: '0.75rem', color: co.color, background: `${co.color}18`, padding: '0.2rem 0.6rem', borderRadius: 4, fontWeight: 600 }}>{co.category}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.25rem' }}>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#10b981', marginBottom: '0.5rem' }}>Strengths</div>
                  {co.strengths.map((s) => (
                    <div key={s} style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', display: 'flex', gap: '0.4rem', marginBottom: '0.25rem' }}>
                      <span style={{ color: '#10b981', flexShrink: 0 }}>+</span>{s}
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: '#ef4444', marginBottom: '0.5rem' }}>Gaps</div>
                  {co.weaknesses.map((w) => (
                    <div key={w} style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', display: 'flex', gap: '0.4rem', marginBottom: '0.25rem' }}>
                      <span style={{ color: '#ef4444', flexShrink: 0 }}>–</span>{w}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ background: 'var(--color-bg)', borderRadius: 6, padding: '0.875rem 1rem', borderLeft: `2px solid ${co.color}` }}>
                <span style={{ fontSize: '0.72rem', color: co.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Our Edge — </span>
                <span style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)' }}>{co.our_edge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What none have */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>What no competitor has built</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>Eight structural differentiators that do not exist in any combination on any competing platform.</p>
        <div style={{ display: 'grid', gap: '0.875rem' }}>
          {WHAT_NONE_HAVE.map((item, i) => (
            <div key={item.point} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.25rem', display: 'grid', gridTemplateColumns: '32px 1fr', gap: '1rem', alignItems: 'start' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.8rem', color: '#fff', flexShrink: 0 }}>{i + 1}</div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.35rem' }}>{item.point}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{item.why}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Jurisdiction deep dive */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Jurisdiction-by-Jurisdiction Framework</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>8 major capital markets jurisdictions. The same compliance abstraction layer adapts to each — not separate codebases.</p>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {JURISDICTIONS_DEEP.map((j) => (
            <div key={j.region} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: `3px solid ${j.color}`, borderRadius: 8, padding: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontWeight: 800, fontSize: '1rem' }}>{j.region}</span>
                <span style={{ fontSize: '0.75rem', color: j.color, background: `${j.color}18`, padding: '0.2rem 0.6rem', borderRadius: 4, fontWeight: 600 }}>{j.framework}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                {[
                  { label: 'Instruments', val: j.instruments },
                  { label: 'Compliance', val: j.compliance },
                  { label: 'Settlement', val: j.settlement },
                  { label: 'Custody', val: j.custody },
                ].map((f) => (
                  <div key={f.label}>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: j.color, marginBottom: '0.25rem' }}>{f.label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>{f.val}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '2rem', marginBottom: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>Built for every market. Ready for every examiner.</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', maxWidth: 600 }}>The same infrastructure that handles SEC 17a-4 compliance in the US can adapt to MiCA in the EU, PSA in Singapore, and VARA in Dubai — through the provider abstraction layer, not a rebuild.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
          <Link href="/compliance" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.65rem 1.5rem', borderRadius: 6, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Compliance Architecture</Link>
          <Link href="/contact" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.65rem 1.5rem', borderRadius: 6, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Contact Us</Link>
        </div>
      </section>

    </main>
  )
}
