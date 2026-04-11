import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Platform — Digital Securities OS Modules',
  description: 'Module-level breakdown of the Dignity UnyKorn Digital Securities Operating System: issuer governance, securities workflow, transfer control, reserve proof, valuation, treasury, investor portal, secondary readiness, and disclosure.',
}

const PLATFORM_MODULES = [
  {
    title: 'Issuer Governance Console',
    color: '#c9a84c',
    summary: 'Board-level controls, issuance authorization, governance workflow, and operational audit discipline.',
    capabilities: [
      'Board resolution tracking: approval records, quorum verification, and vote outcome documentation.',
      'Issuance authorization: multi-signer approval gates before any security can be created or modified.',
      'Governance workflow: structured approval chains for material decisions — pricing, allocation, distribution.',
      'Officer and director registry: key person identification, role assignment, and signing authority.',
      'Audit trail: every governance action timestamped, signed, and linked to the authorizing resolution.',
    ],
    audience: 'Boards, Issuers, Counsel',
  },
  {
    title: 'Securities Onboarding Engine',
    color: '#2563eb',
    summary: 'Investor identification, qualification, suitability capture, subscription control, and exemption-track orchestration.',
    capabilities: [
      'KYC/KYB intake: identity verification, beneficial ownership, and entity documentation.',
      'Accreditation verification: income, net worth, professional certification, or entity qualification.',
      'Suitability assessment: risk tolerance, investment experience, concentration limits, and Reg BI scoring.',
      'Exemption routing: Reg D 506(b), 506(c), Reg S, or Reg A+ — each with distinct qualification requirements.',
      'Subscription control: document delivery, e-signature, payment instruction, and closing confirmation.',
    ],
    audience: 'Broker-Dealers, Issuers',
  },
  {
    title: 'Transfer Control Registry',
    color: '#ef4444',
    summary: 'Wallet allowlists, restriction enforcement, counterparty verification, and compliance-gated movement.',
    capabilities: [
      'Default restriction: every security starts restricted. No transfer unless explicitly approved.',
      'Allowlist management: counterparty identity, qualification status, and holding eligibility verified before transfer.',
      'Lockup enforcement: time-based holds with countdown tracking and restriction release scheduling.',
      'Freeze and clawback: issuer and regulatory authority to halt transfers or recover securities when required.',
      'Off-chain pre-clearance: transfer eligibility determined before any on-chain movement is attempted.',
    ],
    audience: 'Broker-Dealers, Transfer Agents, Counsel',
  },
  {
    title: 'Reserve Proof & Collateral Intelligence',
    color: '#10b981',
    summary: 'Collateral documentation, independent verification, ongoing monitoring, and disclosure controls for asset-backed offerings.',
    capabilities: [
      'Claim documentation: asset description, pledge agreements, title evidence, and chain of custody.',
      'Independent verification: third-party audit attestation, custodian confirmation, and assay reports.',
      'Lien and encumbrance search: UCC filings, title search, and competing claim identification.',
      'Ongoing monitoring: periodic re-verification, material change alerts, and collateral ratio tracking.',
      'Disclosure controls: investor-facing reserve reports, formatted and delivered on auditable schedule.',
    ],
    audience: 'Issuers, Investors, Regulators',
  },
  {
    title: 'Valuation & Reporting Engine',
    color: '#8b5cf6',
    summary: 'NAV calculation, methodology transparency, issuer reporting, investor reporting, and post-close servicing controls.',
    capabilities: [
      'NAV calculation: net asset value from audited inputs with methodology and assumption disclosure.',
      'Issuer reporting: reserve status, financial statements, material events, and compliance attestations.',
      'Investor reporting: position summary, distribution history, tax documents, and restriction status.',
      'Update triggers: scheduled recalculation dates and event-driven revaluation conditions.',
      'Audit-ready trail: every valuation change linked to input data change with timestamp and source.',
    ],
    audience: 'Issuers, Investors, Auditors',
  },
  {
    title: 'Treasury, Custody & Settlement',
    color: '#06b6d4',
    summary: 'Subscription intake, custody-managed settlement, token delivery, reconciliation, and operating ledger support.',
    capabilities: [
      'Subscription intake: payment processing, deposit matching, and funding confirmation.',
      'Custody coordination: custodian-aware settlement with multi-party authorization and approval gates.',
      'Token delivery: security issuance on authorized ledger after all compliance and payment conditions met.',
      'Reconciliation: automated ledger matching, failed-settlement handling, and daily balance attestation.',
      'Operating ledger: authoritative record of all treasury movements, distributions, and redemptions.',
    ],
    audience: 'Issuers, Broker-Dealers, Treasury',
  },
  {
    title: 'Investor Portal',
    color: '#f59e0b',
    summary: 'Investor-facing access to positions, documents, communications, and servicing — scoped by qualification and holding.',
    capabilities: [
      'Position dashboard: holdings, cost basis, current NAV, unrealized gain/loss, and distribution history.',
      'Document room: subscription confirmations, offering documents, K-1s, 1099s, and ongoing disclosures.',
      'Communication log: all investor-facing messages, alerts, and acknowledgment receipts.',
      'Transfer history: all transfers, restriction status, lockup countdown, and restriction release dates.',
      'Qualification status: current accreditation, suitability, and eligibility status with re-verification dates.',
    ],
    audience: 'Investors',
  },
  {
    title: 'Secondary-Readiness Layer',
    color: '#ec4899',
    summary: 'ATS connectivity, transfer agent coordination, and secondary market preparation without assuming public liquidity.',
    capabilities: [
      'ATS integration hooks: connectivity to registered alternative trading systems for restricted securities.',
      'Transfer agent coordination: cap-table updates, restriction releases, and ownership confirmation.',
      'Matching and settlement: order matching with compliance-gated execution and settlement finality.',
      'Restriction carriage: transfer restrictions travel with the security through any secondary movement.',
      'Volume and eligibility controls: holding period, qualification, and concentration limits enforced at trade.',
    ],
    audience: 'Broker-Dealers, ATS Operators',
  },
  {
    title: 'Public Disclosure Control',
    color: '#64748b',
    summary: 'Regulatory filing readiness, material event disclosures, and public-facing information management.',
    capabilities: [
      'Form D filing: initial and amended filings with state blue-sky notification tracking.',
      'Material event disclosure: triggered by predefined conditions — not discretionary timing.',
      'Document version control: every disclosure versioned, timestamped, and delivery-tracked.',
      'Regulatory submission formatting: pre-formatted packages for SEC, FINRA, and state regulators.',
      'Public information management: controlled release of offering-related information with legal review gates.',
    ],
    audience: 'Counsel, Regulators, Issuers',
  },
] as const

const TARGET_USERS = [
  {
    role: 'Boards & Issuers',
    color: '#c9a84c',
    description: 'Governance controls, issuance authorization, reserve proof oversight, and operational reporting.',
  },
  {
    role: 'Counsel & Compliance',
    color: '#8b5cf6',
    description: 'Exemption tracking, transfer restriction enforcement, disclosure scheduling, and regulatory filing readiness.',
  },
  {
    role: 'Broker-Dealers',
    color: '#2563eb',
    description: 'Investor qualification, suitability assessment, subscription orchestration, and secondary-market preparation.',
  },
  {
    role: 'Investors',
    color: '#10b981',
    description: 'Position visibility, distribution tracking, document access, and restriction status — all scoped to their holding.',
  },
] as const

export default function PlatformPage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>

      <section style={{ padding: '4rem 0 2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-gold)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
          Platform
        </p>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>
          Nine modules. One operating system for restricted digital securities.
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: 860, marginBottom: '2rem' }}>
          This is not a token launch platform. It is an operating system for the full lifecycle of
          restricted digital securities — from issuer governance and investor qualification through
          transfer control, reserve proof, reporting, and post-close servicing. Every module
          exists because the securities demand it.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>
          Who this is built for
        </h2>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
          Different participants interact with different modules. The platform scopes access, controls, and
          reporting to each role.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '0.75rem' }}>
          {TARGET_USERS.map((u) => (
            <div key={u.role} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderTop: `3px solid ${u.color}`, borderRadius: 8, padding: '1.25rem 1.4rem' }}>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.4rem' }}>{u.role}</div>
              <div style={{ fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{u.description}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: '1.35rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1.25rem' }}>
          Module breakdown
        </h2>
        <div style={{ display: 'grid', gap: '1.25rem' }}>
          {PLATFORM_MODULES.map((mod) => (
            <div key={mod.title} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: `3px solid ${mod.color}`, borderRadius: 8, padding: '1.5rem 1.6rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.4rem' }}>
                <div style={{ fontWeight: 700, fontSize: '1.1rem' }}>{mod.title}</div>
                <div style={{ fontSize: '0.7rem', color: mod.color, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{mod.audience}</div>
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: '1rem' }}>{mod.summary}</div>
              <div style={{ display: 'grid', gap: '0.4rem' }}>
                {mod.capabilities.map((cap) => (
                  <div key={cap} style={{ display: 'flex', gap: '0.5rem', fontSize: '0.84rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                    <span style={{ color: mod.color, flexShrink: 0, marginTop: '0.15rem' }}>&#8250;</span>
                    {cap}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3.5rem', background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(37,99,235,0.06))', border: '1px solid var(--color-gold)', borderRadius: 8, padding: '2rem 2.2rem' }}>
        <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem' }}>
          Why this is different from a token site
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.75, marginBottom: '0.75rem' }}>
          Token launch platforms optimize for distribution speed and retail access. This platform
          optimizes for restriction enforcement, regulatory discipline, and lifecycle control.
          Every module assumes the asset is restricted, every transfer is gated, every investor
          is qualified, and every disclosure is documented.
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)', lineHeight: 1.75 }}>
          The result is not faster token sales. It is institutional-grade infrastructure for
          securities that require governance, compliance, and reporting throughout their entire lifecycle.
        </p>
      </section>

      <section style={{ textAlign: 'center', padding: '2rem 0 1rem' }}>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/digau-case" style={{ background: 'var(--color-gold)', color: '#0a0a0f', padding: '0.75rem 1.75rem', borderRadius: 6, fontWeight: 700, textDecoration: 'none' }}>
            DIGAU CASE STUDY
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
