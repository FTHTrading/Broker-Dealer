import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'DIGau Case Study',
  description: 'DIGau digital gold security: what it validates, what it exposes, and what the platform fixes.',
}

const STRUCTURAL_FACTS = [
  { label: 'Exemption', value: 'Rule 506(c) Reg D + Reg S' },
  { label: 'Security Type', value: 'Restricted under Rule 144' },
  { label: 'Broker-Dealer', value: 'Tritaurian Capital' },
  { label: 'Gold Pledged', value: '6,429,396 oz (pledged, not vaulted)' },
  { label: 'Token OLV', value: '$10.11 per token' },
  { label: 'Supply', value: '700M circulation / 3B max' },
  { label: 'Investor Rights', value: '15% net profit participation' },
  { label: 'Redemption', value: 'No current gold redemption' },
  { label: 'Trading', value: 'Not freely tradeable' },
] as const

const VALIDATIONS = [
  {
    title: 'Real-asset digital securities can be sold',
    body: 'DIGau demonstrated that gold-backed digital securities with structured profit-participation rights can be packaged for private placement and attract capital through compliant BD channels.',
  },
  {
    title: 'Compliant channels exist',
    body: 'The Tritaurian Capital / Rule 506(c) path shows that broker-dealer-sponsored private placements for digital securities are executable under existing exemption frameworks.',
  },
  {
    title: 'Institutional appetite is possible',
    body: 'Investor interest in asset-backed digital products exists when positioned as securities with defined rights, not speculative retail tokens.',
  },
  {
    title: 'Structured rights work in digital form',
    body: 'Profit participation, collateral documentation, and offering memoranda can be translated into digital security structures that function under securities law.',
  },
  {
    title: 'The market wants operational maturity',
    body: 'The demand signal from DIGau points toward products that combine asset backing with governance, reporting, and servicing discipline — not just a backing narrative.',
  },
] as const

const FRICTIONS = [
  {
    title: 'Restricted transferability',
    body: 'Rule 144 restrictions severely limit secondary movement. No ATS listing. No secondary market. Investors hold without exit unless the issuer creates one.',
    fix: 'Transfer Control Registry — compliance-gated movement, restriction status tracking, secondary-readiness architecture.',
  },
  {
    title: 'Narrow investor eligibility',
    body: 'Rule 506(c) limits to verified accredited investors only. No Reg A+ qualification. No retail access. Distribution ceiling is structural.',
    fix: 'Securities Onboarding Engine — multi-exemption qualification tracks, suitability, accreditation verification, Reg D / Reg S routing.',
  },
  {
    title: 'Proof and disclosure discipline',
    body: '6.43M oz gold pledged but 0 oz vaulted. No independent custody verification visible. Backing narrative requires stronger evidentiary support.',
    fix: 'Reserve Proof & Collateral Intelligence — claim documentation, lien/UCC filing evidence, independent verification workflow, disclosure controls.',
  },
  {
    title: 'Valuation-to-liquidity mismatch',
    body: '$10.11 OLV derived from modeled economics, but no practical liquidity path. Valuation exists without a market to validate it.',
    fix: 'Valuation & Reporting Engine — modeled economics with disclosed methodology, investor reporting, post-close servicing controls.',
  },
  {
    title: 'Third-party process dependency',
    body: 'Single broker-dealer, single transfer agent, single custody narrative. Operational risk concentrates without platform-level orchestration.',
    fix: 'Issuer Governance Console — multi-party workflow, approval chains, audit trail, operational discipline beyond single-vendor dependency.',
  },
  {
    title: 'Post-close servicing gap',
    body: 'After subscription close, investor communications, reporting, and servicing are not systematized. Ongoing relationship management is manual.',
    fix: 'Investor Portal — servicing dashboard, distribution tracking, communication management, document delivery, ongoing qualification checks.',
  },
  {
    title: 'No secondary readiness',
    body: 'No pathway toward ATS listing, no transfer agent integration for secondary movement, no compliance pre-clearing for future trading eligibility.',
    fix: 'Secondary-Readiness Layer — ATS/TA hooks, pre-clearing architecture, compliance-gated movement preparation, market-readiness documentation.',
  },
] as const

export default function DIGauCasePage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>
      <section style={{ padding: '4rem 0 2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.75rem' }}>
          Case Study
        </p>
        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
          DIGau: Proof of demand. Proof of friction.
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, maxWidth: 820 }}>
          Dignity Gold&apos;s DIGau digital gold security is simultaneously a validation of the market
          and a map of every operational gap that a platform like this must solve. This case study
          examines both with equal discipline.
        </p>
      </section>

      <section style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
          Structural facts
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '0.65rem' }}>
          {STRUCTURAL_FACTS.map((fact) => (
            <div key={fact.label} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '0.85rem 1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '1rem' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', fontWeight: 600, flexShrink: 0 }}>{fact.label}</span>
              <span style={{ fontSize: '0.84rem', fontWeight: 600, textAlign: 'right' }}>{fact.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
          What it validates
        </h2>
        <div style={{ display: 'grid', gap: '0.9rem' }}>
          {VALIDATIONS.map((item) => (
            <div key={item.title} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-success)', borderRadius: 8, padding: '1.2rem 1.4rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.title}</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.65 }}>{item.body}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          What it exposes — and what the system fixes
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem', maxWidth: 780 }}>
          Every friction point below maps to a specific platform module. The answer is not more narrative.
          The answer is operational infrastructure.
        </p>
        <div style={{ display: 'grid', gap: '1rem' }}>
          {FRICTIONS.map((item) => (
            <div key={item.title} style={{ background: '#0c0c10', border: '1px solid #141420', borderRadius: 8, padding: '1.4rem 1.5rem' }}>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', fontSize: '0.95rem', color: 'var(--color-warning)' }}>{item.title}</div>
              <div style={{ fontSize: '0.84rem', color: '#c0c0d0', lineHeight: 1.65, marginBottom: '0.75rem' }}>{item.body}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--color-accent-bright)', lineHeight: 1.6, padding: '0.7rem 0.85rem', background: 'rgba(59,130,246,0.06)', border: '1px solid rgba(59,130,246,0.15)', borderRadius: 4 }}>
                <span style={{ fontWeight: 700 }}>Platform fix:</span> {item.fix}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3.5rem', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 8, padding: '2rem 2.2rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
          Strategic implication
        </h2>
        <div style={{ display: 'grid', gap: '1rem', maxWidth: 820 }}>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            DIGau proves that the market for real-asset digital securities exists. It also proves that
            isolated token issuance — without a platform behind it — creates structural friction that
            limits distribution, erodes investor confidence, and makes post-close operations fragile.
          </p>
          <p style={{ fontSize: '0.92rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
            The right response is not to criticize the deal. The right response is to build the operating
            system that would have made it stronger from the start — and will make the next deal
            institutionally credible.
          </p>
          <div style={{ padding: '1rem 1.1rem', background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)', borderRadius: 6, color: '#e8d5a0', fontSize: '0.88rem', lineHeight: 1.65, fontWeight: 600 }}>
            The answer is not another isolated token. The answer is the operating system behind it.
          </div>
        </div>
      </section>

      <section style={{ textAlign: 'center', padding: '2rem 0 1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/platform" style={{ background: 'var(--color-gold)', color: '#0a0a0f', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            VIEW PLATFORM MODULES
          </Link>
          <Link href="/workflow" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            SECURITIES WORKFLOW
          </Link>
          <Link href="/contact" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>
            CONTACT TEAM
          </Link>
        </div>
      </section>
    </main>
  )
}
