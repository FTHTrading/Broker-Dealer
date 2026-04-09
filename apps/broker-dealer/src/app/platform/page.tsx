import Link from 'next/link'

const BUILT_MODULES = [
  {
    category: 'Custody Infrastructure',
    color: '#5b6ef4',
    modules: [
      { name: 'Fireblocks Core', detail: '6 custom modules · 12 vault roles · RS256 JWT per-request auth · HTTP retry with exponential backoff · vault types, vault client, transaction client' },
      { name: 'BitGo Secondary Custody', detail: 'Threshold key management · configurable failover policies · hot/warm/cold wallet segmentation · multi-signature authorization' },
      { name: 'Anchorage Digital', detail: 'Institutional cold storage · long-duration asset custody · regulatory-grade key ceremony procedures · HSM-backed signing' },
      { name: 'APMEX + Brinks', detail: 'Physical gold custody · precious metals logistics · tokenized RWA backing for commodity-linked instruments · chain-of-custody documentation' },
      { name: 'Multi-Custodian Approval Engine', detail: 'Auto-approve · single-sign · dual-control · committee threshold · quorum-based releasing · time-lock on large transactions' },
      { name: 'Custody Reconciliation', detail: 'Automated ledger matching · failed-settlement retry queues · escalation routing · out-of-band alert delivery · daily balance attestation' },
    ],
  },
  {
    category: 'Settlement & Payment Rails',
    color: '#2bb5a0',
    modules: [
      { name: 'StablecoinRail', detail: 'Multi-chain stablecoin movement · USDC · USDT · DAI · RLUSD · Proprietary · 8+ chains · route selection and fee optimization' },
      { name: 'PaymentIntent', detail: 'Deterministic payment lifecycle · idempotency guarantees · auto-retry on transient failure · state machine with full event log per transition' },
      { name: 'SettlementRecorder', detail: 'Immutable settlement capture · every movement hash-anchored · Stellar + Ethereum + XRPL + EVM chains · 7-year retention' },
      { name: 'Wire / ACH Rails', detail: 'Plaid bank verification + Dwolla ACH · bank partner wire routing · same-day ACH · reconciliation matching engine · dispute workflow' },
      { name: 'Private Settlement Rails', detail: 'Off-chain settlement proofs · zero public chain exposure · institutional-only · privacy-preserving · zkProof-compatible architecture' },
      { name: 'FundingOrchestrator', detail: '6 onramp partners integrated · automated deposit detection · classification + routing · deposit-to-allocation pipeline · de-duplication' },
    ],
  },
  {
    category: 'Rust Performance Engine',
    color: '#e05a2b',
    modules: [
      { name: 'Bond & RWA Processing Core', detail: 'Sub-millisecond yield calculation · memory-safe deterministic execution · zero-cost abstraction over settlement primitives · no GC pauses' },
      { name: 'Stablecoin Issuance Engine', detail: 'Rust-native mint / burn / reserve management · audit-compliant reserve ledger · regulatory reporting hooks · reserve attestation pipeline' },
      { name: 'WASM Policy Engine', detail: 'Cross-platform enforcement without VM overhead · compiled from Rust · deploy at edge or on-chain · transfer restriction evaluation at <1ms' },
      { name: 'Zero-Copy State Serialization', detail: 'On-chain state transition encoding · memory-safe without GC pressure · deterministic byte layout for audit-trail compatibility' },
      { name: 'Custody Transaction Validator', detail: 'Compile-time safety guarantees · rule-checked before wire transmission · immutable validation receipts · panic-free error handling' },
      { name: 'Yield Distribution Engine', detail: '7-state bond lifecycle · Draft → Offered → Subscribing → Funded → Active → Maturing → Matured · coupon automation · pro-rata calculation' },
    ],
  },
  {
    category: 'Oracle & Data Infrastructure',
    color: '#d4a843',
    modules: [
      { name: 'Chainlink Data Feeds', detail: '200+ price pairs · decentralized aggregation · manipulation-resistant · real-time mark-to-market for RWA and bond positions' },
      { name: 'Chainlink Proof of Reserve', detail: 'Real-time on-chain custody verification · reserve attestation for proprietary stablecoin · automated anomaly detection and alerts' },
      { name: 'Chainlink CCIP', detail: 'Cross-chain interoperability protocol · multi-chain asset movement with cryptographic security · programmable token transfers across chains' },
      { name: 'Chainlink Automation', detail: 'Keeper-driven coupon events · yield distributions · offering expirations · rights offering deadlines · no manual trigger required' },
      { name: 'TimescaleDB Cluster', detail: 'Tick-level market data · 5-year hot retention · hypertable compression · continuous aggregates for OHLCV and order book snapshots' },
      { name: 'ClickHouse Analytics', detail: 'TCA engine · trade analytics · regulatory reporting · audit queries at scale · sub-second aggregation across years of timestamped events' },
    ],
  },
  {
    category: 'Compliance Engine',
    color: '#8b5cf6',
    modules: [
      { name: 'KYC — Persona', detail: 'Government ID verification · liveness detection · database cross-checks · auto-pass / manual review routing · 200+ country coverage' },
      { name: 'KYB — Middesk', detail: 'Business identity verification · Secretary of State record checks · UBO identification · beneficial ownership mapping · EIN verification' },
      { name: 'Sanctions — ComplyAdvantage', detail: 'OFAC SDN list · PEP screening · adverse media monitoring · real-time rescreening · automated SAR preparation queue' },
      { name: 'Accreditation — Parallel Markets', detail: 'Income + net worth verification · professional certification · letter of counsel pathway · automated re-verification triggers' },
      { name: 'Reg BI / Suitability Engine', detail: 'Per-investor per-offering scoring · Best Interest analysis · conflict of interest disclosure tracking · supervisory review queues' },
      { name: 'VaultLedger (WORM Audit)', detail: 'Append-only hash-chained · every action timestamped and signed · SEC 17a-4 compliant · 7+ year retention · examiner export API' },
      { name: 'Regulatory Reporting Pipelines', detail: 'CAT T+1 FINRA submission · TRACE 15-min bond reporting · FinCEN SAR/CTR · EDGAR Form D · Blue Sky state database filings' },
      { name: 'Transfer Control Policy Engine', detail: 'Whitelist/blacklist enforcement · lockup period tracking · affiliate status gates · accreditation requirements · WASM-compiled rule modules' },
    ],
  },
  {
    category: 'Digital Issuance & Registry',
    color: '#06b6d4',
    modules: [
      { name: 'XRPL Tokenization Layer', detail: 'SEC-compliant digital securities · freeze + clawback + legend controls · deterministic token ID scheme · regulatory action hooks' },
      { name: 'On-Chain Bond Registry', detail: 'Synchronized with authoritative legal registry · XRPL on-chain state · dual-record consistency checks · real-time position reconciliation' },
      { name: 'EVM Execution Layer', detail: '8 chains · smart contract deployment · interaction layer · contract upgrade governance · proxy patterns for regulatory compliance' },
      { name: 'ATS / Transfer Agent Hooks', detail: 'Secondary market connectivity · transfer agent partner APIs · Carta cap table bi-directional sync · post-close holder registry management' },
      { name: 'Policy-Gated Transfer Engine', detail: 'Every token transfer compliance-evaluated before execution · failed transfer reason codes · investor notification pipeline' },
      { name: 'Rights Offering Engine', detail: 'Record-date import · entitlement calculation · subscription portal · oversubscription handling · payment reconciliation · closing automation' },
    ],
  },
  {
    category: 'Capital Operations System',
    color: '#10b981',
    modules: [
      { name: 'Capital OS Core', detail: 'Wire intake → KYC/AML → XRPL settlement → yield distribution → redemption · 165 automated test assertions · 6 operational guardrails in production' },
      { name: 'Investor Onboarding Pipeline', detail: '5-step flow: application → identity → accreditation → risk assessment → account activation · full compliance evidence store at each step' },
      { name: 'Subscription Room', detail: 'Gated investor portal · compliance-status-driven access · document delivery · DocuSign e-sign integration · NDA audit trail' },
      { name: 'Allocation Engine', detail: 'Pro-rata allocation · discretionary overrides · multi-tranche support · partial-close mechanics · soft and hard cap enforcement' },
      { name: 'Post-Close Administration', detail: 'Ongoing holder management · corporate actions · covenant tracking · coupon events · communication archive · K-1 / 1099 tax reporting' },
      { name: 'Agentic Operations Layer', detail: 'Deal Agent · Compliance Agent · Investor Agent · Treasury Agent · Rights Agent · Issuance Agent · all human-approved before regulated action' },
    ],
  },
  {
    category: 'Auth, Infrastructure & Observability',
    color: '#ec4899',
    modules: [
      { name: 'Auth System', detail: 'OAuth 2.0 · granular RBAC · MFA · session management · API key rotation · role hierarchy: Admin → Principal → Compliance → Banker → Investor' },
      { name: 'Kubernetes Infrastructure', detail: '3-node control plane · multi-AZ worker pools · Active-Active · rolling deploys · HPA + VPA for load elasticity · PodDisruptionBudgets' },
      { name: 'Service Mesh (Istio)', detail: 'mTLS between all services · circuit breaking · retry policies · observability injection · zero-trust pod-to-pod communication' },
      { name: 'API Gateway (Kong)', detail: 'Rate limiting · auth enforcement · request routing · plugin-based middleware · audit log injection at ingress · developer portal' },
      { name: 'Provider Abstraction Layer', detail: '6 typed interfaces: Custody · Stablecoin · Oracle · Proof · Ledger · Treasury · Adapters: Fireblocks · BitGo · XRPL · Chainlink · Circle · Ripple' },
      { name: 'Observability Stack', detail: 'Prometheus + Grafana · distributed tracing · alert routing · P99 latency budgets per service · SLA dashboards · on-call runbooks' },
    ],
  },
]

const ACTIVATION = [
  { label: 'Configure existing infrastructure', pct: 60, color: '#10b981' },
  { label: 'Extend for Moody-specific workflows', pct: 25, color: '#5b6ef4' },
  { label: 'Net-new feature development', pct: 15, color: '#d4a843' },
]

export const metadata = { title: 'Platform Audit' }

export default function PlatformPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>

      <section style={{ padding: '4rem 0 2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Platform Audit</p>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Everything that has been built</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 860, marginBottom: '2rem' }}>
          This is not a capabilities list. It is an audit. Every module below is built, type-checked, tested,
          and integrated into a running production system. 100+ modules across 8 domains. All TypeScript unless
          noted as Rust. Zero compilation errors. 165 automated test assertions.
        </p>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          {ACTIVATION.map((r) => (
            <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: 42, height: 42, borderRadius: '50%', background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.85rem', color: '#0a0a0f' }}>{r.pct}%</div>
              <span style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>{r.label}</span>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: 'grid', gap: '1.5rem', marginBottom: '4rem' }}>
        {BUILT_MODULES.map((domain) => (
          <div key={domain.category} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: `3px solid ${domain.color}`, borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ padding: '1rem 1.5rem', borderBottom: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: domain.color, flexShrink: 0 }} />
              <span style={{ fontWeight: 700, fontSize: '1rem' }}>{domain.category}</span>
              <span style={{ marginLeft: 'auto', fontSize: '0.75rem', color: 'var(--color-text-secondary)' }}>{domain.modules.length} modules</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))' }}>
              {domain.modules.map((mod) => (
                <div key={mod.name} style={{ padding: '1.25rem 1.5rem', borderRight: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem', marginBottom: '0.4rem', color: domain.color }}>{mod.name}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{mod.detail}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '2rem', marginBottom: '2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>Activation Ratio for Moody Capital</p>
        <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.8, maxWidth: 800, marginBottom: '1.5rem' }}>
          <strong style={{ color: 'var(--color-text-primary)' }}>60%</strong> of Moody Capital deployment is configuration of existing
          production infrastructure. <strong style={{ color: 'var(--color-text-primary)' }}>25%</strong> extends the platform for
          Moody-specific workflows — rights offerings, debt administration, entitlement engine, Moody role hierarchy,
          document packages. <strong style={{ color: 'var(--color-text-primary)' }}>15%</strong> is net-new feature development.
          This is not a build-from-scratch engagement. It is an infrastructure activation.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/contact" style={{ background: 'var(--color-gold)', color: '#0a0a0f', padding: '0.65rem 1.5rem', borderRadius: 6, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>Request Technical Demo</Link>
          <Link href="/technology" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.65rem 1.5rem', borderRadius: 6, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Technology Stack</Link>
          <Link href="/markets" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.65rem 1.5rem', borderRadius: 6, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Market Landscape</Link>
        </div>
      </section>

    </main>
  )
}
