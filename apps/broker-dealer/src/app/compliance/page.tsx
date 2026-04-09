import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Compliance',
  description: 'Multi-jurisdiction compliance framework covering US, EU/MiCA, UK/FCA, Singapore/MAS, UAE, Switzerland, Hong Kong, and Cayman/BVI.',
}

const JURISDICTIONS = [
  {
    region: 'United States',
    color: '#5b6ef4',
    regulator: 'SEC / FINRA / FinCEN / CFTC',
    frameworks: [
      { name: 'Reg D 506(b)', desc: 'Private placement — unlimited accredited + up to 35 sophisticated non-accredited investors, no general solicitation' },
      { name: 'Reg D 506(c)', desc: 'Verified accredited investors only, general solicitation permitted, third-party verification required' },
      { name: 'Reg A+ Tier 2', desc: '$75M annual offering ceiling — EDGAR-filed, ongoing SEC reporting, blue sky preemption' },
      { name: 'Reg S', desc: 'Offshore distribution — distribution compliance periods, Category 1/2/3 restrictions, directed selling efforts prohibition' },
      { name: 'Reg BI', desc: 'Best Interest standard — recommendation suitability, conflict disclosure, Form CRS, investor-first obligation' },
      { name: 'BSA / FinCEN', desc: 'CIP, CDD, EDD, SAR, CTR — full Bank Secrecy Act program with automated FinCEN reporting pipelines' },
      { name: 'FINRA Rules', desc: 'CAT reporting, TRACE trade reporting, FINRA examination readiness, registered representative supervision' },
      { name: 'SEC 17a-4', desc: 'WORM audit trail — VaultLedger hash-chained immutable ledger, 6-year retention, examiner-accessible' },
    ],
  },
  {
    region: 'European Union',
    color: '#003399',
    regulator: 'ESMA / EBA / ECB / National Competent Authorities',
    frameworks: [
      { name: 'MiCA', desc: 'Markets in Crypto-Assets Regulation — CASP authorisation, e-money token / ART / utility token classification, whitepaper disclosure' },
      { name: 'MiFID II', desc: 'Investment services licensing — product governance, best execution, transaction reporting, client categorisation' },
      { name: 'AMLR', desc: 'EU Anti-Money Laundering Regulation — enhanced due diligence for crypto-asset transfers, AMLA oversight' },
      { name: 'DORA', desc: 'Digital Operational Resilience Act — ICT risk management, incident reporting, third-party provider management' },
      { name: 'GDPR', desc: 'Data protection by design — data minimisation, right to erasure, DPA notification, cross-border transfer safeguards' },
      { name: 'eIDAS', desc: 'Electronic identification — qualified electronic signatures for subscription agreements and KYC document execution' },
    ],
  },
  {
    region: 'United Kingdom',
    color: '#cf142b',
    regulator: 'FCA / PRA / HMRC',
    frameworks: [
      { name: 'FCA Authorisation', desc: 'Financial services permission under FSMA 2000 — regulated activity mapping, fit and proper assessment' },
      { name: 'Cryptoasset Registration', desc: 'FCA cryptoasset AML/CTF registration — Travel Rule compliance, on-chain analytics, wallet screening' },
      { name: 'UK AML Regulations 2017', desc: 'MLRs 2017 — CDD, enhanced due diligence, PEP screening, suspicious activity reporting to NCA' },
      { name: 'Consumer Duty', desc: 'FCA Consumer Duty — good outcomes framework, fair value assessment, consumer support obligations' },
      { name: 'Financial Promotions', desc: 'Section 21 FSMA — approved promotions, high-risk investment disclosures, cooling-off rights' },
    ],
  },
  {
    region: 'Singapore',
    color: '#ef3340',
    regulator: 'MAS',
    frameworks: [
      { name: 'CMS Licence', desc: 'Capital Markets Services Licence under SFA — dealing in capital markets products, fund management authorisation' },
      { name: 'Payment Services Act', desc: 'PSA 2019 — Digital Payment Token service licence for DPT dealing and exchange activities' },
      { name: 'MAS AML/CFT', desc: 'Notice SFA04-N02 — CDD, EDD, sanctions screening, suspicious transaction reporting to STR' },
      { name: 'Digital Token Framework', desc: 'MAS digital token guidance — security token classification, compliance with SFA Part XIII' },
      { name: 'Variable Capital Companies', desc: 'VCC framework — Singapore fund structures for digital asset and RWA fund vehicles' },
    ],
  },
  {
    region: 'UAE',
    color: '#00732f',
    regulator: 'ADGM FSRA / DFSA / VARA',
    frameworks: [
      { name: 'ADGM FSRA', desc: 'Abu Dhabi Global Market — Financial Services Regulatory Authority authorisation for digital asset activities' },
      { name: 'DFSA', desc: 'Dubai Financial Services Authority — DIFC-based regulated activities, digital asset framework, investment token regime' },
      { name: 'VARA', desc: 'Dubai Virtual Assets Regulatory Authority — VASP licence, virtual asset activities authorisation, compliance manual' },
      { name: 'UAE AML/CFT', desc: 'Federal AML law alignment — goAML reporting, sanctions screening, beneficial ownership register' },
    ],
  },
  {
    region: 'Switzerland',
    color: '#d52b1e',
    regulator: 'FINMA / SIX',
    frameworks: [
      { name: 'FINMA DLT Guidance', desc: 'FINMA blockchain classification — payment, utility, asset, and hybrid token treatment under existing law' },
      { name: 'Swiss DLT Act', desc: 'Distributed Ledger Technology Act 2021 — ledger-based securities, DLT trading facility authorisation' },
      { name: 'STO Framework', desc: 'Security Token Offering compliance — prospectus requirements, qualified investor exemptions, SIX STO rules' },
      { name: 'FINMA Banking Act', desc: 'Banking licence considerations for tokenised deposit-like instruments and custody activities' },
    ],
  },
  {
    region: 'Hong Kong',
    color: '#de2910',
    regulator: 'SFC / HKMA',
    frameworks: [
      { name: 'VATP Licensing', desc: 'SFC Virtual Asset Trading Platform licence — centralised exchange and OTC dealer authorisation' },
      { name: 'Tokenised Securities', desc: 'SFC circular on tokenised SFC-authorised products — investor eligibility, custody, AML/CFT requirements' },
      { name: 'HKMA Stablecoin Bill', desc: 'Stablecoin issuer licensing framework — reserve management, redemption rights, disclosure obligations' },
      { name: 'Type 1 / Type 4', desc: 'SFC Type 1 (dealing) and Type 4 (advising) licences for regulated securities activities' },
    ],
  },
  {
    region: 'Cayman Islands / BVI',
    color: '#003f5c',
    regulator: 'CIMA / BVI FSC',
    frameworks: [
      { name: 'CIMA VASP Registration', desc: 'Cayman VASP Act — virtual asset service provider registration, AML/CFT obligations, CIMA oversight' },
      { name: 'Cayman Exempted Fund', desc: 'Section 4(4) registered or licensed fund structures for offshore RWA and digital asset investment vehicles' },
      { name: 'BVI Business Companies', desc: 'BVI BC Act — offshore SPV structures for tokenised bond issuances and structured products' },
      { name: 'FATF Compliance', desc: 'Travel Rule implementation across both jurisdictions — counterparty VASP verification, transaction screening' },
    ],
  },
] as const

const CORE_CONTROLS = [
  { name: 'VaultLedger Audit Trail', desc: 'Append-only, SHA-256 hash-chained, WORM-compliant audit trail across all 8 jurisdictions — every action immutable and examiner-accessible' },
  { name: 'Persona KYC', desc: 'Government ID verification, liveness detection, database cross-reference — supports global identity document coverage' },
  { name: 'Middesk KYB', desc: 'Business entity verification, beneficial ownership, secretary of state, EIN — US and multi-jurisdiction corporate registry integration' },
  { name: 'ComplyAdvantage Sanctions', desc: 'Real-time OFAC SDN, EU consolidated list, HMT, UN, FinCEN 314(a), PEP — 30-day automated rescreening cadence' },
  { name: 'Parallel Markets Accreditation', desc: 'Accredited investor verification — income, net worth, professional licence (Series 7/65/66) — certification expiry management' },
  { name: 'Reg BI Suitability Engine', desc: 'Per-investor per-offering suitability scoring — risk tolerance, investment horizon, liquidity, concentration limits' },
  { name: 'CAT / TRACE Reporting', desc: 'FINRA Consolidated Audit Trail and Trade Reporting — automated submission pipelines with SLA monitoring' },
  { name: 'FinCEN / EDGAR Pipelines', desc: 'SAR and CTR generation with AI-assisted narrative drafting — EDGAR Form D, Reg A+ filings with automated scheduling' },
] as const

export default function CompliancePage() {
  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '2rem' }}>

      <section style={{ padding: '4rem 0 2rem' }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--color-accent)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>Multi-Jurisdiction Compliance</p>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '1rem' }}>Built for every major capital markets jurisdiction</h1>
        <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', lineHeight: 1.7, maxWidth: 750, marginBottom: '3rem' }}>
          Compliance is not a gate at the end of a transaction — it is embedded in every operation, every module, and every execution path.
          Every investor qualification, custody movement, token transfer, and settlement event passes through the compliance engine before execution.
          We are designed to operate under SEC, FINRA, MiCA, FCA, MAS, ADGM, FINMA, SFC, and CIMA oversight simultaneously.
        </p>
      </section>

      <section style={{ marginBottom: '3.5rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Core Compliance Controls</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '0.75rem' }}>
          {CORE_CONTROLS.map((ctrl) => (
            <div key={ctrl.name} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderRadius: 6, padding: '1rem 1.25rem' }}>
              <div style={{ fontWeight: 700, fontSize: '0.88rem', marginBottom: '0.35rem' }}>{ctrl.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{ctrl.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Jurisdiction Coverage</h2>
        <div style={{ display: 'grid', gap: '1.5rem' }}>
          {JURISDICTIONS.map((juris) => (
            <div key={juris.region} style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: `3px solid ${juris.color}`, borderRadius: 8, padding: '1.75rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.2rem' }}>{juris.region}</h3>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', fontFamily: 'monospace' }}>{juris.regulator}</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '0.6rem' }}>
                {juris.frameworks.map((fw) => (
                  <div key={fw.name} style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 4, padding: '0.7rem 0.9rem', border: '1px solid var(--color-border)' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 700, color: juris.color, marginBottom: '0.25rem' }}>{fw.name}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>{fw.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <Link href="/platform" style={{ background: 'var(--color-accent)', color: '#fff', padding: '0.75rem 1.5rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>Platform Audit</Link>
        <Link href="/contact" style={{ border: '1px solid var(--color-border)', color: 'var(--color-text-secondary)', padding: '0.75rem 1.5rem', borderRadius: 6, fontWeight: 600, textDecoration: 'none' }}>Contact</Link>
      </div>

    </main>
  )
}
