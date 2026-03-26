import Link from 'next/link'

const RUST_ENGINE = [
  { title: 'Bond & RWA Processing Core', desc: 'Sub-millisecond yield calculation across every bond state. The engine handles Draft through Matured in a single deterministic pass. Memory-safe. No garbage collection pauses during settlement windows.' },
  { title: 'Stablecoin Issuance Engine', desc: 'Rust-native mint, burn, and reserve management. Every issuance event writes to an audit-compliant reserve ledger. Regulatory reporting hooks fire synchronously before acknowledgment.' },
  { title: 'WASM Policy Engine', desc: 'Transfer restriction rules compiled from Rust to WASM. Deploy at the edge, on-chain, or in the service layer. Cross-platform enforcement evaluated in under 1ms per transaction.' },
  { title: 'Yield Distribution Engine', desc: 'Pro-rata coupon calculation across all active holders at coupon-event time. Handles fractional amounts, rounding policies, FX conversion, and excess-return queues without floating-point drift.' },
  { title: 'Custody Transaction Validator', desc: 'Compile-time safety guarantees on every custody instruction. Panic-free error handling. All validation receipts written to the immutable ledger before the transaction leaves the system.' },
  { title: 'Zero-Copy Serialization', desc: 'On-chain state transitions encoded with zero-copy serialization. Deterministic byte layout compatible with the audit-trail hash chain. No intermediate allocations in the hot path.' },
]

const STABLECOINS = [
  {
    name: 'USDC',
    type: 'Regulated',
    issuer: 'Circle Internet Financial',
    backing: '1:1 USD reserves · monthly attestation by Grant Thornton',
    chains: ['Ethereum', 'Stellar', 'Solana', 'Base', 'Arbitrum', 'Avalanche', 'Polygon', 'Optimism'],
    status: 'Integrated',
    color: '#2775ca',
    note: 'Primary institutional settlement rail. Highest regulatory certainty. FINRA and bank-accepted.',
  },
  {
    name: 'USDT',
    type: 'Liquidity',
    issuer: 'Tether Operations Ltd.',
    backing: 'Commercial paper + T-Bills + other reserves · quarterly attestation',
    chains: ['Ethereum', 'Tron', 'OMNI', 'Solana', 'Polygon', 'Avalanche', 'Liquid'],
    status: 'Integrated',
    color: '#26a17b',
    note: 'Dominant global liquidity. Highest trading volume. Essential for cross-border and OTC workflows.',
  },
  {
    name: 'DAI / USDS',
    type: 'Decentralized',
    issuer: 'MakerDAO / Sky Protocol',
    backing: 'Over-collateralized on-chain collateral · transparent on-chain reserve verification',
    chains: ['Ethereum', 'Polygon', 'Optimism', 'Arbitrum', 'Base', 'Gnosis'],
    status: 'Integrated',
    color: '#f4b731',
    note: 'Censorship-resistant dollar exposure. Critical for DeFi-native investor base and on-chain yield.',
  },
  {
    name: 'RLUSD',
    type: 'Enterprise',
    issuer: 'Ripple Labs',
    backing: '1:1 USD + short-term Treasuries · NYDFS-regulated',
    chains: ['XRPL', 'Ethereum'],
    status: 'Integrated',
    color: '#346aa9',
    note: 'Enterprise settlement on XRPL. Fastest finality for cross-border private securities settlement.',
  },
  {
    name: 'Proprietary Stablecoin',
    type: 'Own Issuance',
    issuer: 'FTH Trading — Rust issuance engine',
    backing: 'Custody-verified reserves via Chainlink Proof of Reserve · real-time attestation',
    chains: ['Private Rails', 'XRPL', 'Ethereum', 'Stellar'],
    status: 'In Build',
    color: '#e05a2b',
    note: 'FTH-native dollar instrument. Programmable compliance. Designed for closed-loop settlement within the platform ecosystem.',
  },
  {
    name: 'Private Rails',
    type: 'Private',
    issuer: 'FTH Settlement Layer',
    backing: 'Off-chain proof system · institutional counterparty bilateral settlement · zero public chain exposure',
    chains: ['Institutional', 'Privacy-preserving', 'zkProof-compatible'],
    status: 'Architecture Complete',
    color: '#8b5cf6',
    note: 'For transactions where public chain settlement is operationally or regulatorily unsuitable. Full audit trail maintained off-chain.',
  },
]

const CHAINLINK = [
  { product: 'Data Feeds', capability: '200+ price pairs · decentralized · manipulation-resistant · used for real-time mark-to-market on all RWA and bond positions', use: 'NAV calculation, yield accrual, collateral valuation, margin monitoring' },
  { product: 'Proof of Reserve', capability: 'On-chain real-time verification of custody balances · automated anomaly detection · reserve attestation for proprietary stablecoin', use: 'Stablecoin reserve transparency, RWA backing verification, investor-facing reserve dashboards' },
  { product: 'CCIP', capability: 'Cross-Chain Interoperability Protocol · cryptographically secure multi-chain asset movement · programmable token transfers', use: 'Moving assets across settlement chains, enabling multi-chain holder positions' },
  { product: 'Automation (Keepers)', capability: 'Decentralized keeper network · condition-triggered execution · no centralized dependency for time-critical events', use: 'Coupon payment triggers, rights offering deadlines, offering expirations, yield distribution cycles' },
  { product: 'VRF', capability: 'Verifiable Random Function · cryptographically provable randomness · manipulation-proof', use: 'Pro-rata allocation tiebreaking, oversubscription lottery mechanics, audit-provable randomness' },
  { product: 'Functions', capability: 'Smart contract connectivity to off-chain APIs · custom compute in Chainlink nodes', use: 'Bringing KYC status, accreditation results, and cap table data on-chain for policy enforcement' },
]

const CHAINS = [
  { name: 'XRPL', purpose: 'Primary digital securities issuance · RLUSD settlement · fastest finality for private securities · freeze/clawback native', type: 'Primary' },
  { name: 'Ethereum', purpose: 'USDC · USDT · DAI · Chainlink feeds · smart contracts · ERC-3643 compliant security tokens · main DeFi liquidity layer', type: 'Primary' },
  { name: 'Stellar', purpose: 'USDC settlement · cross-border payment rails · low-cost remittance · Anchor protocol for fiat on/off ramps', type: 'Primary' },
  { name: 'Solana', purpose: 'USDC · USDT · high-throughput settlement · sub-cent transaction costs · institutional-grade finality speed', type: 'Secondary' },
  { name: 'Base', purpose: 'Coinbase institutional layer · USDC native · EVM-compatible · regulatory-friendly L2 environment', type: 'Secondary' },
  { name: 'Arbitrum', purpose: 'USDC · DAI · Ethereum L2 · DeFi integration · lower-cost institutional transactions without leaving ETH security', type: 'Secondary' },
  { name: 'Polygon', purpose: 'USDC · USDT · DAI · institutional PoS chain · established enterprise partnerships · bulk settlement', type: 'Secondary' },
  { name: 'Tron', purpose: 'USDT dominant chain · critical for Asian market liquidity · highest USDT transfer volume globally', type: 'Liquidity' },
]

const DATABASES = [
  { name: 'PostgreSQL 16', purpose: 'Orders, positions, accounts, compliance records', retention: 'Indefinite', notes: 'Primary + streaming replica + async DR replica' },
  { name: 'TimescaleDB', purpose: 'Market data, tick data, OHLCV, order book snapshots, time-series metrics', retention: '5 years hot → archive cold', notes: 'Hypertable compression, continuous aggregates' },
  { name: 'PostgreSQL WORM', purpose: 'Immutable audit trail, every system event', retention: '7+ years (SEC 17a-4)', notes: 'Append-only, hash-chained, no deletes permitted' },
  { name: 'PostgreSQL Compliance', purpose: 'AML alerts, SAR records, sanctions screening results, Reg BI assessments', retention: '7+ years (BSA)', notes: 'Encrypted at rest, audit-only access pattern' },
  { name: 'ClickHouse', purpose: 'Trade analytics, TCA, regulatory reporting, audit queries', retention: '3 years', notes: 'Columnar, sub-second on billions of rows' },
  { name: 'Redis Cluster', purpose: 'Session state, rate limiting, real-time position cache, pub/sub events', retention: 'Ephemeral + TTL', notes: '6-node cluster: 3 primary + 3 replica' },
]

export const metadata = { title: 'Technology Stack' }

export default function TechnologyPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>

      <section style={{ padding: '4rem 0 2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Technology Stack</p>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Rust core. Chainlink oracles. Every stablecoin. Private rails.</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 860 }}>
          The infrastructure layer beneath the Moody Capital Markets Operating System. Designed for regulatory auditability,
          institutional custody, multi-chain settlement, and sub-millisecond performance on yield-bearing and RWA instruments.
        </p>
      </section>

      {/* Rust Engine */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#e05a2b' }} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Rust Performance Engine</h2>
          <span style={{ fontSize: '0.75rem', background: '#e05a2b22', color: '#e05a2b', padding: '0.2rem 0.6rem', borderRadius: 4, fontWeight: 600 }}>Memory-safe · Sub-millisecond · Deterministic</span>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          The hot path of every yield-bearing bond, RWA lifecycle, and stablecoin operation runs through a Rust engine.
          No garbage collection pauses during settlement. Compile-time guarantees instead of runtime validation.
          WASM compilation means policy rules deploy to edge, on-chain, or service layer without modification.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1rem' }}>
          {RUST_ENGINE.map((m) => (
            <div key={m.title} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: '2px solid #e05a2b', borderRadius: 8, padding: '1.25rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#e05a2b', marginBottom: '0.5rem' }}>{m.title}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{m.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Stablecoins */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#2bb5a0' }} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Stablecoin & Settlement Infrastructure</h2>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          USDC, USDT, DAI, and RLUSD are production-integrated across eight chains.
          The proprietary stablecoin — built on the Rust issuance engine with Chainlink Proof of Reserve — operates
          across private rails and public chains. Private settlement rails eliminate public chain exposure entirely
          for institutional counterparty workflows.
        </p>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {STABLECOINS.map((sc) => (
            <div key={sc.name} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '1.5rem', display: 'grid', gridTemplateColumns: '180px 1fr 1fr', gap: '1.5rem', alignItems: 'start' }}>
              <div>
                <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.2rem' }}>{sc.name}</div>
                <span style={{ fontSize: '0.7rem', background: `${sc.color}22`, color: sc.color, padding: '0.2rem 0.5rem', borderRadius: 3, fontWeight: 600 }}>{sc.type}</span>
                <div style={{ marginTop: '0.75rem', fontSize: '0.75rem', color: sc.status === 'Integrated' ? '#10b981' : sc.status === 'In Build' ? '#d4a843' : '#5b6ef4', fontWeight: 600 }}>{sc.status}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.3rem' }}>Issuer & Backing</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', marginBottom: '0.5rem' }}>{sc.issuer}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{sc.backing}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>Chains</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.75rem' }}>
                  {sc.chains.map((c) => (
                    <span key={c} style={{ fontSize: '0.72rem', background: 'var(--color-bg)', border: '1px solid var(--color-border)', borderRadius: 3, padding: '0.15rem 0.5rem', color: 'var(--color-text-secondary)', fontFamily: 'monospace' }}>{c}</span>
                  ))}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontStyle: 'italic' }}>{sc.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Chainlink */}
      <section style={{ marginBottom: '4rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#d4a843' }} />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700 }}>Chainlink Oracle Infrastructure</h2>
        </div>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
          Every piece of off-chain data the system consumes — price feeds, reserve proofs, time-triggered events — flows
          through Chainlink. Manipulation-resistant, decentralized, and audit-provable.
        </p>
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', background: 'var(--color-bg)', padding: '0.75rem 1.5rem', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', borderBottom: '1px solid var(--color-border)' }}>
            <span>Product</span><span>Capability</span><span>Use in Platform</span>
          </div>
          {CHAINLINK.map((row) => (
            <div key={row.product} style={{ display: 'grid', gridTemplateColumns: '160px 1fr 1fr', padding: '1rem 1.5rem', borderBottom: '1px solid var(--color-border)', gap: '1.5rem', alignItems: 'start' }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#d4a843' }}>{row.product}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{row.capability}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{row.use}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Chain Coverage */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '0.5rem' }}>Settlement Chain Coverage</h2>
        <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>8+ chains integrated. Chain selection is policy-driven based on asset type, counterparty, and regulatory context.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.75rem' }}>
          {CHAINS.map((ch) => (
            <div key={ch.name} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '1rem 1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{ch.name}</span>
                <span style={{ fontSize: '0.68rem', background: ch.type === 'Primary' ? '#10b98122' : ch.type === 'Secondary' ? '#5b6ef422' : '#d4a84322', color: ch.type === 'Primary' ? '#10b981' : ch.type === 'Secondary' ? '#5b6ef4' : '#d4a843', padding: '0.15rem 0.5rem', borderRadius: 3, fontWeight: 600 }}>{ch.type}</span>
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{ch.purpose}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Databases */}
      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1.5rem' }}>Data Architecture</h2>
        <div style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr 130px 1fr', background: 'var(--color-bg)', padding: '0.75rem 1.5rem', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-text-secondary)', borderBottom: '1px solid var(--color-border)' }}>
            <span>Engine</span><span>Purpose</span><span>Retention</span><span>Notes</span>
          </div>
          {DATABASES.map((db) => (
            <div key={db.name} style={{ display: 'grid', gridTemplateColumns: '160px 1fr 130px 1fr', padding: '1rem 1.5rem', borderBottom: '1px solid var(--color-border)', gap: '1rem', alignItems: 'start' }}>
              <div style={{ fontWeight: 700, fontSize: '0.85rem', color: 'var(--color-accent)', fontFamily: 'monospace' }}>{db.name}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{db.purpose}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>{db.retention}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>{db.notes}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '2rem', marginBottom: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontWeight: 700, marginBottom: '0.5rem' }}>Built in TypeScript and Rust. Zero compilation errors.</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)' }}>All TypeScript modules are strict-mode typechecked. Rust engine components compile with zero warnings.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
          <Link href="/platform" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.65rem 1.5rem', borderRadius: 6, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Review Platform Audit</Link>
          <Link href="/contact" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.65rem 1.5rem', borderRadius: 6, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Get in Touch</Link>
        </div>
      </section>

    </main>
  )
}
