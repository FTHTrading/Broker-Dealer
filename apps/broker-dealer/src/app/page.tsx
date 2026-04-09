import Link from 'next/link'

const STATS = [
  { value: '16', label: 'Build Sessions' },
  { value: '100+', label: 'Production Modules' },
  { value: '165', label: 'Test Assertions' },
  { value: '4', label: 'Custody Partners' },
  { value: '8', label: 'Stablecoins Supported' },
  { value: '8+', label: 'Settlement Chains' },
  { value: '6', label: 'Onramp Partners' },
  { value: '$1B+', label: 'Assets Under Test' },
] as const

const SYSTEM_LAYERS = [
  {
    label: 'Layer 1', title: 'Rust Performance Core', color: '#e05a2b',
    items: [
      'High-throughput bond & RWA processing engine — sub-millisecond yield calculation',
      'Deterministic settlement execution runtime — memory-safe, zero-cost abstraction',
      'WASM-compiled policy engine — cross-platform enforcement without VM overhead',
      'Zero-copy serialization for on-chain state transitions',
      'Memory-safe custody transaction validation with compile-time guarantees',
      'Rust-native stablecoin issuance engine with audit-compliant reserve ledger',
    ],
  },
  {
    label: 'Layer 2', title: 'Custody & Settlement Infrastructure', color: '#5b6ef4',
    items: [
      'Fireblocks MPC — 6 custom modules, 12 vault roles, RS256 JWT per-request auth',
      'BitGo secondary custody — threshold key management, configurable failover',
      'Anchorage Digital — institutional cold storage for long-duration assets',
      'APMEX + Brinks — physical gold and precious metals custody and logistics',
      'Multi-tier approval engine: auto-approve then single then dual then committee',
      'Automated reconciliation with failed-settlement retry queues and escalation',
    ],
  },
  {
    label: 'Layer 3', title: 'Stablecoin & Payment Rail Stack', color: '#2bb5a0',
    items: [
      'USDC (Circle) — Ethereum, Stellar, Solana, Base, Arbitrum, Avalanche, Polygon',
      'USDT (Tether) — Ethereum, Tron, OMNI, Solana, Polygon — dominant liquidity',
      'DAI / USDS (MakerDAO/Sky) — ETH, Polygon, Optimism, Arbitrum, Base',
      'RLUSD (Ripple) — XRPL + Ethereum, enterprise-grade dollar settlement',
      'Proprietary Stablecoin — Rust-native issuance, private rails, regulatory reporting',
      'Private Payment Rails — off-chain settlement proofs, zero public chain exposure',
    ],
  },
  {
    label: 'Layer 4', title: 'Oracle & Data Infrastructure', color: '#d4a843',
    items: [
      'Chainlink Data Feeds — 200+ price pairs, decentralized, manipulation-resistant',
      'Chainlink Proof of Reserve — real-time on-chain custody verification',
      'Chainlink CCIP — cross-chain interoperability for multi-chain asset movement',
      'Chainlink Automation — keeper-driven coupon events, yield distributions',
      'TimescaleDB — tick-level market data, 5-year hot retention, hypertable',
      'ClickHouse analytics — TCA, trade analytics, regulatory reporting',
    ],
  },
  {
    label: 'Layer 5', title: 'Compliance & Regulatory Engine', color: '#8b5cf6',
    items: [
      'Identity: Persona (KYC) + Middesk (KYB) — government database verification',
      'Sanctions: ComplyAdvantage — OFAC SDN, PEP lists, adverse media, real-time',
      'Accreditation: Parallel Markets — income, net worth, professional certification',
      'Reg BI / suitability engine — per-investor per-offering compliance scoring',
      'VaultLedger — append-only hash-chained audit trail, WORM SEC 17a-4 compliant',
      'CAT, TRACE, FinCEN, EDGAR reporting pipelines with automated submission',
    ],
  },
  {
    label: 'Layer 6', title: 'Digital Issuance & Registry', color: '#06b6d4',
    items: [
      'XRPL tokenization — SEC-compliant digital securities with on-chain controls',
      'Freeze and clawback built into issuance layer — ready for any regulatory action',
      'Policy-gated transfers — every token movement compliance-checked before execution',
      'On-chain bond registry synchronized with authoritative legal registry',
      'EVM execution across 8 chains — smart contract deployment and interaction',
      'ATS / TA partner hooks — secondary market and transfer agent connectivity',
    ],
  },
  {
    label: 'Layer 7', title: 'Supervised Agentic Operations', color: '#10b981',
    items: [
      'Deal Agent — pipeline intelligence, data room management, close probability',
      'Compliance Agent — SAR preparation, alert monitoring, exception surfacing',
      'Investor Agent — onboarding status tracking, communication draft generation',
      'Treasury Agent — settlement monitoring, reconciliation exception flagging',
      'Rights Agent — entitlement calculation, oversubscription management',
      'Issuance Agent — token mint / freeze / burn lifecycle (human-approved, always)',
    ],
  },
] as const

const STABLECOINS = [
  { name: 'USDC', issuer: 'Circle — regulated, audited reserves', chains: 'ETH / Stellar / Solana / Base / Arbitrum / Avalanche / Polygon', type: 'Regulated', color: '#2775ca' },
  { name: 'USDT', issuer: 'Tether — dominant global liquidity', chains: 'ETH / Tron / OMNI / Solana / Polygon', type: 'Liquidity', color: '#26a17b' },
  { name: 'DAI / USDS', issuer: 'MakerDAO / Sky Protocol', chains: 'ETH / Polygon / Optimism / Arbitrum / Base', type: 'Decentralized', color: '#f4b731' },
  { name: 'RLUSD', issuer: 'Ripple — enterprise settlement', chains: 'XRPL / Ethereum', type: 'Enterprise', color: '#346aa9' },
  { name: 'Proprietary Stablecoin', issuer: 'FTH Trading — Rust-native issuance engine', chains: 'Private Rails / XRPL / Ethereum', type: 'Own Issuance', color: '#e05a2b' },
  { name: 'Private Rails', issuer: 'FTH Settlement Layer — off-chain proofs', chains: 'Institutional / Privacy-preserving / Zero public exposure', type: 'Private', color: '#8b5cf6' },
] as const

const JURISDICTIONS = [
  { region: 'United States', regs: 'SEC Reg D / Reg A+ / Reg S / FINRA / BSA/AML / Reg BI / FinCEN / EDGAR' },
  { region: 'European Union', regs: 'MiCA / MiFID II / AMLR / DORA / GDPR-compliant data layer' },
  { region: 'United Kingdom', regs: 'FCA Authorisation / FSMA 2000 / Cryptoasset Registration / UK AML Reg 2017' },
  { region: 'Singapore', regs: 'MAS CMS Licence / Payment Services Act / SFA / Digital Token framework' },
  { region: 'UAE', regs: 'ADGM FSRA / DFSA / VARA Dubai Virtual Asset Regulatory Authority' },
  { region: 'Switzerland', regs: 'FINMA DLT Guidance / Swiss DLT Act / STO regulatory framework' },
  { region: 'Hong Kong', regs: 'SFC VATP Licensing / HKMA stablecoin framework / Type 1 and 4 licences' },
  { region: 'Cayman / BVI', regs: 'CIMA VASP Registration / BVI FSC / Offshore fund structures and SPVs' },
] as const

export default function HomePage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>

      <section style={{ padding: '5rem 0 3rem', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', background: 'rgba(212,168,67,0.12)', border: '1px solid rgba(212,168,67,0.3)', borderRadius: 4, padding: '0.35rem 0.9rem', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-gold)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.75rem' }}>UnyKorn Broker-Dealer Platform</div>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
          Built for broker-dealers that need to<br />
          <span style={{ color: 'var(--color-accent)' }}>issue, settle, and scale RWA offerings efficiently</span>
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: 800, margin: '0 auto 2.5rem' }}>
          We provide the platform, rails, and technical execution layer. Broker-dealers bring issuance governance,
          investor channels, and compliance preferences. Together, offerings can be launched with USDC/USDT rails,
          tokenized securities workflows, and multi-jurisdiction controls already in production.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: 'var(--color-gold)', color: '#0a0a0f', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>BOOK PARTNER CALL</Link>
          <Link href="/downloads" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>SEND PARTNER DECK</Link>
          <a href="mailto:kevan@unykorn.org?subject=Broker-Dealer%20Partnership%20-%20Urgent" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>EMAIL KEVAN NOW</a>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1px', background: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden', marginBottom: '4rem' }}>
        {STATS.map((s) => (
          <div key={s.label} style={{ background: 'var(--color-surface)', padding: '1.5rem', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-gold)', lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', marginTop: '0.4rem' }}>{s.label}</div>
          </div>
        ))}
      </section>

      <section style={{ marginBottom: '4rem', background: '#0c0c10', border: '1px solid #141420', borderRadius: 8, padding: '2rem 2.25rem' }}>
        <div style={{ fontSize: '0.72rem', color: '#ef4444', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', marginBottom: '0.6rem' }}>Partner Intake</div>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Onboarding broker-dealers for near-term issuance programs</h2>
        <p style={{ fontSize: '0.9rem', color: '#4a4a60', lineHeight: 1.65, marginBottom: '1rem', maxWidth: 820 }}>
          If your team can sponsor offerings and define compliance controls, UnyKorn can align workflows to your standards,
          onboard issuer pipelines, and accelerate deal execution without replacing your governance model.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.65rem', marginBottom: '1.2rem' }}>
          {[
            'Launch compliant Reg D / Reg S issuance workflows in weeks, not quarters',
            'Settle with USDC / USDT rails while preserving audit and policy controls',
            'Bring issuer assets to market with clear BD economics and repeatable process',
          ].map((item) => (
            <div key={item} style={{ padding: '0.75rem 0.9rem', background: '#050508', border: '1px solid #141420', borderRadius: 4, color: '#c0c0d0', fontSize: '0.8rem', lineHeight: 1.55 }}>{item}</div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ padding: '0.62rem 1.2rem', background: 'rgba(239,68,68,0.12)', border: '1px solid rgba(239,68,68,0.35)', borderRadius: 4, color: '#ef4444', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em' }}>CLAIM PARTNER SLOT</Link>
          <Link href="/downloads#platform" style={{ padding: '0.62rem 1.2rem', background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.35)', borderRadius: 4, color: '#3b82f6', textDecoration: 'none', fontFamily: 'var(--font-mono)', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em' }}>DOWNLOAD PARTNER PACK</Link>
        </div>
      </section>

      {/* Downloads CTA */}
      <section style={{ marginBottom: '4rem', background: '#0c0c10', border: '1px solid #141420', borderRadius: 8, padding: '2rem 2.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
          <div>
            <p style={{ fontSize: '0.7rem', color: '#c9a84c', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)', marginBottom: '0.4rem' }}>Broker-Dealer Resource Library</p>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '0.4rem', color: '#fff' }}>31 institutional-grade documents. Available now.</h2>
            <p style={{ fontSize: '0.85rem', color: '#4a4a60', lineHeight: 1.6 }}>Platform overviews, RWA frameworks, Reg D / Reg S guides, AML procedures, stablecoin architecture, and due diligence packages.</p>
          </div>
          <Link href="/downloads" style={{ flexShrink: 0, padding: '0.7rem 1.5rem', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.35)', borderRadius: 5, color: '#c9a84c', fontSize: '0.72rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>VIEW ALL DOWNLOADS →</Link>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.625rem' }}>
          {[
            { label: 'Platform Overview', count: 5, href: '/downloads#platform', color: '#2563eb' },
            { label: 'RWA & Tokenization', count: 6, href: '/downloads#rwa', color: '#c9a84c' },
            { label: 'Regulatory & Compliance', count: 7, href: '/downloads#regulatory', color: '#8b5cf6' },
            { label: 'Stablecoin & Settlement', count: 4, href: '/downloads#stablecoin', color: '#0ea5e9' },
            { label: 'Investor Relations', count: 5, href: '/downloads#investor', color: '#10b981' },
            { label: 'Due Diligence', count: 4, href: '/downloads#diligence', color: '#ef4444' },
          ].map((cat) => (
            <Link key={cat.label} href={cat.href} style={{ padding: '0.75rem 1rem', background: `${cat.color}08`, border: `1px solid ${cat.color}25`, borderRadius: 4, textDecoration: 'none', display: 'block' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: cat.color, fontFamily: 'var(--font-mono)', letterSpacing: '0.04em', marginBottom: '0.2rem' }}>{cat.count} docs</div>
              <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#c0c0d0' }}>{cat.label}</div>
            </Link>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Full-Stack Architecture</p>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Seven layers of production infrastructure</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Every layer built, type-checked, test-covered, and integrated. Not conceptual — operational.</p>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {SYSTEM_LAYERS.map((layer) => (
            <div key={layer.label} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: `3px solid ${layer.color}`, borderRadius: 8, padding: '1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.7rem', fontWeight: 700, color: layer.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{layer.label}</span>
                <span style={{ fontSize: '1.05rem', fontWeight: 700 }}>{layer.title}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.4rem' }}>
                {layer.items.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>
                    <span style={{ color: layer.color, flexShrink: 0 }}>-</span>{item}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Stablecoin and Payment Infrastructure</p>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Every rail. Public, private, proprietary.</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>USDC, USDT, DAI, RLUSD plus our Rust-native stablecoin and fully private settlement rails.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {STABLECOINS.map((sc) => (
            <div key={sc.name} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderTop: `2px solid ${sc.color}`, borderRadius: 8, padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: 800 }}>{sc.name}</span>
                <span style={{ fontSize: '0.68rem', background: `${sc.color}22`, color: sc.color, padding: '0.2rem 0.5rem', borderRadius: 3, fontWeight: 600 }}>{sc.type}</span>
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>{sc.issuer}</p>
              <p style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', fontFamily: 'monospace' }}>{sc.chains}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'right', marginTop: '1rem' }}>
          <Link href="/technology" style={{ fontSize: '0.85rem', color: 'var(--color-accent)', textDecoration: 'none' }}>Full stablecoin architecture</Link>
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Multi-Jurisdiction Compliance</p>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>Built for every major capital markets jurisdiction</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Compliance is not a checklist — it is the gateway through which every operation flows.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '0.75rem' }}>
          {JURISDICTIONS.map((j) => (
            <div key={j.region} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '1rem 1.25rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.4rem' }}>{j.region}</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{j.regs}</div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'right', marginTop: '1rem' }}>
          <Link href="/compliance" style={{ fontSize: '0.85rem', color: 'var(--color-accent)', textDecoration: 'none' }}>Full compliance architecture</Link>
        </div>
      </section>

      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
        {[
          { href: '/platform', title: 'Platform', desc: 'Every module, integration, and capability — audited and documented.' },
          { href: '/technology', title: 'Technology', desc: 'Rust engine, Chainlink, private rails, stablecoin issuance, XRPL.' },
          { href: '/services', title: 'Services', desc: 'Placement, RWA, yield-bearing bonds, debt administration, custody.' },
          { href: '/markets', title: 'Market Landscape', desc: 'How we compare to Securitize, Ondo, Maple, Tokena, and others.' },
          { href: '/compliance', title: 'Compliance', desc: 'KYC/AML, Reg BI, FINRA, SEC, MiCA, FCA, MAS in every flow.' },
          { href: '/downloads', title: 'Downloads', desc: '31 documents — platform overview, RWA guides, Reg D, AML procedures, subscription templates.' },
          { href: '/contact', title: 'Partner Now', desc: 'Fast intake for broker-dealers ready to issue, settle, and close offerings now.' },
        ].map((card) => (
          <Link key={card.href} href={card.href} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.5rem', textDecoration: 'none', display: 'block' }}>
            <div style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>{card.title}</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{card.desc}</div>
            <div style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--color-accent)', fontWeight: 600 }}>Explore</div>
          </Link>
        ))}
      </section>

      <section style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '2.5rem', textAlign: 'center', marginBottom: '2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>Ready to Evaluate?</p>
        <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: 800, margin: '0 auto 1.5rem' }}>
          This is not a pitch deck. This is a running system. Custody connections are live.
          The Rust engine processes bond and RWA lifecycles at sub-millisecond speed.
          Stablecoin rails are multi-chain and production-grade.
          When FINRA or SEC examiners arrive, every action is in an immutable, hash-chained audit trail.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: 'var(--color-gold)', color: '#0a0a0f', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>START BD PARTNERSHIP</Link>
          <Link href="/downloads" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>Download Resources</Link>
          <a href="mailto:kevan@unykorn.org?subject=Urgent%20BD%20Partnership" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>Email Kevan</a>
        </div>
      </section>

    </main>
  )
}