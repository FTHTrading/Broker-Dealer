import Link from 'next/link'

const WORKFLOWS = [
  {
    id: 'offering',
    title: 'Offering Lifecycle',
    color: '#5b6ef4',
    status: 'Active',
    steps: [
      { name: 'Issuer Onboarding', detail: 'Entity KYB via Middesk, beneficial ownership identification, FINRA background check, platform MSA execution, account provisioning with issuer-role access control' },
      { name: 'Offering Structuring', detail: 'Security type determination, exemption selection (Reg D 506b/c, Reg A+, Reg S), pricing mechanics, allocation method, min/max raise, closing schedule' },
      { name: 'Document Preparation', detail: 'PPM, subscription agreement, investor questionnaire, accreditation form generation — IPFS-backed with SHA-256 hash anchoring for tamper evidence' },
      { name: 'Regulatory Filing', detail: 'Form D (SEC EDGAR), blue sky notice filings across all target states, state fee coordination, filing confirmation tracking with SLA monitoring' },
      { name: 'Distribution', detail: 'Investor portal activation, offering room access gating by compliance status, subscription open, real-time allocation tracking, partial close management' },
      { name: 'Closing & Allocation', detail: 'Minimum raise confirmation, subscription finalization, escrow release trigger, pro-rata or discretionary allocation computation, cap table recording' },
      { name: 'Post-Close Administration', detail: 'Position confirmation notices, certificate issuance, transfer restriction ledger entry, 1099 and K-1 tax event setup, ongoing reporting cadence activation' },
    ],
  },
  {
    id: 'investor',
    title: 'Investor Qualification Pipeline',
    color: '#10b981',
    status: 'Active',
    steps: [
      { name: 'Account Registration', detail: 'Email verification, profile collection, jurisdiction self-declaration, device fingerprinting, session management initialization' },
      { name: 'KYC', detail: 'Government ID capture + liveness detection via Persona — document extraction, database cross-reference, global coverage for 200+ countries' },
      { name: 'KYB (Entity Investors)', detail: 'Business entity verification via Middesk — EIN, secretary of state registry, beneficial ownership up to full UBO chain, state good-standing check' },
      { name: 'Accreditation Verification', detail: 'Via Parallel Markets: income verification (2-year tax, W-2), net worth (statements), professional licence (Series 7/65/66/82), entity GAV — expiry tracking' },
      { name: 'AML Sanctions Screening', detail: 'ComplyAdvantage: OFAC SDN, EU consolidated, HMT, UN, FinCEN 314(a) — PEP check, adverse media scan, geographic risk scoring, 30-day rescan cadence' },
      { name: 'Suitability Assessment', detail: 'Reg BI suitability scoring: investment experience, risk tolerance, liquidity horizon, income/net worth relative to subscription size, concentration limits' },
      { name: 'Operator Approval', detail: 'Review case creation with full compliance profile, SLA-gated queue, compliance officer decision (approve / escalate / reject), access provisioning' },
    ],
  },
  {
    id: 'subscription',
    title: 'Subscription Processing',
    color: '#d4a843',
    status: 'Active',
    steps: [
      { name: 'Eligibility Gate', detail: 'Policy engine evaluates 11 dimensions: KYC, KYB, accreditation, sanctions, suitability, jurisdiction, offering access, subscription limits, investor count, affiliate status, holding period' },
      { name: 'Document Execution', detail: 'Subscription agreement presentation, risk disclosure, offering-specific addenda, DocuSign e-signature capture with audit trail and timestamp' },
      { name: 'Funding Instruction', detail: 'Payment rail selection: wire (with bank instructions), ACH pull, stablecoin (USDC/USDT/DAI/RLUSD) on supported chains, private rails for institutional counterparties' },
      { name: 'Payment Matching', detail: 'Automated reconciliation of incoming payments to subscription records — hash verification for on-chain, bank reference for wire/ACH, retry queues for failed matches' },
      { name: 'Operator Review', detail: 'Review case with subscription + payment + compliance snapshot, compliance officer evaluation, approval routes to allocation, rejection routes to notice + refund' },
      { name: 'Allocation', detail: 'Position creation in cap table, on-chain token minting (if digital), custody wallet crediting, settlement confirmation, investor allocation notice delivery' },
    ],
  },
  {
    id: 'custody',
    title: 'Custody & Settlement Operations',
    color: '#06b6d4',
    status: 'Active',
    steps: [
      { name: 'Wallet Provisioning', detail: 'Fireblocks vault creation per offering, wallet role assignment (12 roles), threshold configuration, RS256 JWT per-request signing for Fireblocks API' },
      { name: 'Approval Workflow', detail: '4-tier engine: auto-approve (below threshold) → single-sign (1 officer) → dual-control (2 officers) → committee quorum (configurable N-of-M)' },
      { name: 'Settlement Execution', detail: 'On-chain transaction submission via Fireblocks SDK — nonce management, gas estimation, broadcast, confirmation polling, finality check' },
      { name: 'Reconciliation', detail: 'Post-settlement balance reconciliation across all vaults vs. cap table positions — discrepancy detection, exception queue, escalation routing' },
      { name: 'VaultLedger Audit', detail: 'Every custody movement recorded to append-only SHA-256 hash-chained WORM ledger — SEC 17a-4 compliant, 6-year retention, examiner-accessible endpoint' },
      { name: 'Proof of Reserve', detail: 'Chainlink PoR adapter publishes verified custody balances on-chain — auditors and investors can verify backing without trusting our representations' },
    ],
  },
  {
    id: 'transfers',
    title: 'Transfer & Corporate Actions',
    color: '#8b5cf6',
    status: 'Active',
    steps: [
      { name: 'Transfer Request', detail: 'Holder-initiated request: recipient identification, AML pre-check on receiving wallet/entity, policy engine pre-evaluation before queue entry' },
      { name: 'Restriction Check', detail: 'Rule 144 holding period verification, lock-up agreement check, right-of-first-refusal notification workflow, affiliate status analysis' },
      { name: 'Recipient Qualification', detail: 'Receiving investor KYC + accreditation status verification, suitability re-evaluation for the specific security, sanctions rescan' },
      { name: 'Transfer Execution', detail: 'Cap table position update, on-chain XRPL/EVM token transfer, transfer agent notification, both ledger layers synchronized' },
      { name: 'Distribution Events', detail: 'Dividend / coupon / yield distribution: record date snapshot, per-holder pro-rata calculation via Rust engine, multi-rail payment processing' },
      { name: 'Structural Actions', detail: 'Splits, conversions, forced redemptions, mergers: cap table recalculation, token burn/mint, holder notifications, EDGAR 8-K coordination' },
    ],
  },
  {
    id: 'agentic',
    title: 'Agentic Operations Layer',
    color: '#e05a2b',
    status: 'In Build',
    steps: [
      { name: 'Compliance Monitor Agent', detail: 'Continuous surveillance of all investor records — flags expired KYC, accreditation, or sanctions rescan overdue — auto-generates review cases' },
      { name: 'Settlement Reconciliation Agent', detail: 'Polls custody wallet balances post-settlement, compares against expected positions, auto-raises exception tickets on discrepancy > threshold' },
      { name: 'Regulatory Filing Agent', detail: 'Watches offering milestones — auto-generates Form D amendment drafts, blue sky renewal reminders, and EDGAR filing schedules' },
      { name: 'Investor Communication Agent', detail: 'Triggered by lifecycle events — subscription confirmations, funding instructions, allocation notices, distribution announcements, maturity notices' },
      { name: 'Yield Distribution Agent', detail: 'Processes Chainlink Automation keeper signals — validates coupon dates, computes per-holder amounts in Rust engine, queues settlement transactions' },
      { name: 'Risk Scoring Agent', detail: 'Continuously re-evaluates investor suitability and portfolio concentration relative to market conditions and updated financial profiles' },
      { name: 'Examiner Readiness Agent', detail: 'On-demand export of trade blotter, audit trail, investor files, and cap table snapshot in SEC/FINRA examination format' },
    ],
  },
]

export const metadata = { title: 'Operations' }

export default function OperationsPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>

      <section style={{ padding: '4rem 0 2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Operations</p>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Six operational workflows. Zero manual steps without audit trail.</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 860, marginBottom: '3rem' }}>
          Every broker-dealer operation follows a documented procedure enforced at the infrastructure layer.
          No step executes without passing the policy engine. Every actor, action, and resource is logged to the VaultLedger.
          The agentic layer monitors and executes without human bottlenecks.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '0.75rem', marginBottom: '2rem' }}>
          {WORKFLOWS.map((wf) => (
            <a key={wf.id} href={'#' + wf.id} style={{ textDecoration: 'none', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderTop: `2px solid ${wf.color}`, borderRadius: 6, padding: '0.75rem', display: 'block' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 700, color: wf.color, marginBottom: '0.2rem' }}>{wf.title}</div>
              <div style={{ fontSize: '0.7rem', padding: '0.15rem 0.4rem', borderRadius: 3, display: 'inline-block', background: wf.status === 'Active' ? '#22c55e15' : wf.status === 'In Build' ? '#f59e0b15' : '#6b728015', color: wf.status === 'Active' ? '#22c55e' : wf.status === 'In Build' ? '#f59e0b' : '#9ca3af' }}>{wf.status}</div>
            </a>
          ))}
        </div>
      </section>

      <div style={{ display: 'grid', gap: '2rem', marginBottom: '4rem' }}>
        {WORKFLOWS.map((wf) => (
          <div key={wf.id} id={wf.id} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden' }}>
            <div style={{ padding: '1.25rem 1.75rem', borderBottom: '1px solid var(--color-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: wf.color, marginBottom: '0.1rem' }}>{wf.title}</h2>
              </div>
              <span style={{ fontSize: '0.7rem', fontWeight: 700, padding: '0.2rem 0.65rem', borderRadius: 4, textTransform: 'uppercase', letterSpacing: '0.06em', background: wf.status === 'Active' ? '#22c55e18' : '#f59e0b18', color: wf.status === 'Active' ? '#22c55e' : '#f59e0b' }}>{wf.status}</span>
            </div>
            <div>
              {wf.steps.map((step, i) => (
                <div key={step.name} style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: '1rem', padding: '1rem 1.75rem', borderBottom: i < wf.steps.length - 1 ? '1px solid var(--color-border)' : 'none', alignItems: 'baseline' }}>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ width: 22, height: 22, borderRadius: '50%', background: `${wf.color}20`, color: wf.color, fontSize: '0.7rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{i + 1}</span>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>{step.name}</span>
                  </div>
                  <span style={{ fontSize: '0.82rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{step.detail}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '2rem', marginBottom: '2rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '0.5rem' }}>Activate the operations layer for your firm</p>
          <p style={{ fontSize: '0.85rem', color: 'var(--color-text-secondary)', maxWidth: 600 }}>White-label deployment or full managed operations — both backed by the same compliance-enforced infrastructure.</p>
        </div>
        <div style={{ display: 'flex', gap: '1rem', flexShrink: 0 }}>
          <Link href="/contact" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.65rem 1.5rem', borderRadius: 6, fontWeight: 700, fontSize: '0.9rem', textDecoration: 'none' }}>Request Access</Link>
          <Link href="/platform" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.65rem 1.5rem', borderRadius: 6, fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none' }}>Platform Audit</Link>
        </div>
      </section>

    </main>
  )
}
