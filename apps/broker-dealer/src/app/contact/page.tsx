'use client'

import { useState } from 'react'
import Link from 'next/link'

const FIRM_TYPES = [
  'Registered Broker-Dealer (RIA/BD)',
  'Investment Bank',
  'Family Office',
  'Institutional Investor',
  'RIA / Registered Investment Adviser',
  'Hedge Fund',
  'Private Equity Firm',
  'Fund Administrator',
  'Legal / Compliance Counsel',
  'Other',
]

const INTEREST_OPTIONS = [
  'RWA Tokenization & Issuance',
  'Stablecoin Settlement Rails',
  'Regulation D 506(b/c) Offerings',
  'Regulation S Offshore Structures',
  'ATS / Alternative Trading System',
  'Investor Onboarding & KYC/AML',
  'Custody & Fireblocks Integration',
  'Broker-Dealer Partnership Program',
  'Platform Licensing / White Label',
  'Technology Architecture Review',
  'Compliance Infrastructure',
  'Demo / Full Platform Walkthrough',
]

const QUICK_DOWNLOADS = [
  { label: 'Platform Overview Deck', file: 'fth-capital-platform-overview.pdf', tag: 'START HERE' },
  { label: 'Broker-Dealer Partnership Program', file: 'fth-bd-partnership-program.pdf', tag: 'POPULAR' },
  { label: 'RWA Tokenization Framework', file: 'fth-rwa-tokenization-framework.pdf', tag: 'RWA' },
  { label: 'Fee Schedule & Commission Structure', file: 'fth-fee-schedule.pdf', tag: 'COMMERCIAL' },
]

const INPUT: React.CSSProperties = {
  width: '100%',
  background: '#050508',
  border: '1px solid #141420',
  borderRadius: 4,
  padding: '0.625rem 0.75rem',
  color: '#f0f0f8',
  fontSize: '0.82rem',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
}

const LABEL: React.CSSProperties = {
  display: 'block',
  fontSize: '0.65rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.08em',
  color: '#4a4a60',
  marginBottom: '0.35rem',
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', firm: '', crd: '', email: '', phone: '', type: '', message: '',
  })
  const [interests, setInterests] = useState<string[]>([])
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function toggleInterest(opt: string) {
    setInterests((prev) => prev.includes(opt) ? prev.filter((i) => i !== opt) : [...prev, opt])
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, interests }),
      })
      const data = await res.json()
      if (!res.ok) { setErrorMsg(data.error ?? 'Unknown error'); setStatus('error'); return }
      setStatus('sent')
    } catch {
      setErrorMsg('Network error. Please try again.')
      setStatus('error')
    }
  }

  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '3rem 2rem' }}>
      <div style={{ marginBottom: '3rem' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#2563eb', marginBottom: '0.75rem' }}>Contact</div>
        <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, letterSpacing: '-0.03em', marginBottom: '0.75rem', color: '#fff' }}>Partner with UnyKorn Now</h1>
        <p style={{ fontSize: '1rem', color: '#4a4a60', lineHeight: 1.7, maxWidth: 640 }}>We are actively onboarding broker-dealers to launch compliant issuance and move assets fast. If your team is ready for near-term execution, this intake form goes directly to the partnership desk.</p>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '2rem', alignItems: 'start' }}>
        <div style={{ background: '#0c0c10', border: '1px solid #141420', borderRadius: 6, padding: '2rem' }}>
          {status === 'sent' ? (
            <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>&#10003;</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#10b981', marginBottom: '0.5rem' }}>Message sent successfully</div>
              <div style={{ fontSize: '0.85rem', color: '#4a4a60', marginBottom: '1.5rem' }}>An auto-reply has been sent to <strong style={{ color: '#f0f0f8' }}>{form.email}</strong>. Our institutional team will follow up within one business day.</div>
              <Link href="/downloads" style={{ display: 'inline-block', padding: '0.6rem 1.25rem', background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.3)', borderRadius: 4, color: '#3b82f6', fontSize: '0.78rem', fontWeight: 700, textDecoration: 'none', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>BROWSE ALL DOWNLOADS</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                <div><label style={LABEL}>Full Name *</label><input style={INPUT} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="John Smith" required /></div>
                <div><label style={LABEL}>Firm / Company</label><input style={INPUT} value={form.firm} onChange={(e) => setForm({ ...form, firm: e.target.value })} placeholder="Smith Capital LLC" /></div>
                <div><label style={LABEL}>Email Address *</label><input style={INPUT} type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="john@smithcapital.com" required /></div>
                <div><label style={LABEL}>Phone</label><input style={INPUT} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 (404) 555-0100" /></div>
                <div><label style={LABEL}>CRD # (if applicable)</label><input style={{ ...INPUT, fontFamily: 'var(--font-mono)' }} value={form.crd} onChange={(e) => setForm({ ...form, crd: e.target.value })} placeholder="12345678" /></div>
                <div><label style={LABEL}>Firm Type</label><select style={{ ...INPUT, cursor: 'pointer' }} value={form.type} onChange={(e) => setForm({ ...form, type: e.target.value })}><option value="">Select...</option>{FIRM_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}</select></div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label style={LABEL}>Areas of Interest</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.4rem' }}>
                  {INTEREST_OPTIONS.map((opt) => {
                    const on = interests.includes(opt)
                    return (
                      <button key={opt} type="button" onClick={() => toggleInterest(opt)} style={{ padding: '0.4rem 0.6rem', borderRadius: 3, border: on ? '1px solid rgba(37,99,235,0.6)' : '1px solid #141420', background: on ? 'rgba(37,99,235,0.12)' : '#050508', color: on ? '#3b82f6' : '#4a4a60', fontSize: '0.68rem', fontWeight: on ? 700 : 500, cursor: 'pointer', textAlign: 'left' }}>{opt}</button>
                    )
                  })}
                </div>
              </div>
              <div style={{ marginBottom: '1.5rem' }}><label style={LABEL}>Message *</label><textarea style={{ ...INPUT, minHeight: 110, resize: 'vertical' } as React.CSSProperties} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Describe your firm goals, current infrastructure, or questions about our platform..." required /></div>
              {status === 'error' && <div style={{ marginBottom: '1rem', padding: '0.75rem', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)', borderRadius: 4, color: '#ef4444', fontSize: '0.78rem' }}>{errorMsg}</div>}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontSize: '0.65rem', color: '#30303e', lineHeight: 1.6 }}>Your information is confidential.<br />We do not share or sell contact data.</div>
                <button type="submit" disabled={status === 'sending'} style={{ padding: '0.7rem 1.75rem', background: status === 'sending' ? 'rgba(37,99,235,0.4)' : '#2563eb', border: 'none', borderRadius: 4, color: '#fff', fontSize: '0.78rem', fontWeight: 700, cursor: status === 'sending' ? 'not-allowed' : 'pointer', fontFamily: 'var(--font-mono)', letterSpacing: '0.06em' }}>{status === 'sending' ? 'SENDING...' : 'START PARTNER INTAKE'}</button>
              </div>
            </form>
          )}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ background: '#0c0c10', border: '1px solid #141420', borderRadius: 6, padding: '1.25rem 1.375rem' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4a4a60', marginBottom: '1rem' }}>Direct Contact</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
              {[{ label: 'Institutional Partnerships', email: 'partners@unykorn.org' }, { label: 'Broker-Dealer Inquiries', email: 'bd@unykorn.org' }, { label: 'RWA & Tokenization', email: 'rwa@unykorn.org' }, { label: 'Compliance & Legal', email: 'compliance@unykorn.org' }].map((c) => (
                <div key={c.label}><div style={{ fontSize: '0.65rem', color: '#30303e', marginBottom: '0.15rem' }}>{c.label}</div><a href={`mailto:${c.email}`} style={{ fontSize: '0.82rem', color: '#3b82f6', textDecoration: 'none', fontFamily: 'var(--font-mono)' }}>{c.email}</a></div>
              ))}
            </div>
          </div>
          <div style={{ background: '#0c0c10', border: '1px solid #141420', borderRadius: 6, padding: '1.25rem 1.375rem' }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#4a4a60', marginBottom: '1rem' }}>Quick Downloads</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {QUICK_DOWNLOADS.map((d) => (
                <a key={d.file} href={`/downloads/${d.file}`} download style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.625rem 0.75rem', background: '#050508', border: '1px solid #141420', borderRadius: 4, textDecoration: 'none', gap: '0.5rem' }}>
                  <div style={{ flex: 1 }}><div style={{ fontSize: '0.75rem', fontWeight: 600, color: '#f0f0f8', marginBottom: '0.15rem' }}>{d.label}</div><div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', color: '#2563eb', fontWeight: 700 }}>{d.tag}</div></div>
                  <span style={{ fontSize: '0.7rem', color: '#4a4a60' }}>PDF</span>
                </a>
              ))}
              <Link href="/downloads" style={{ display: 'block', textAlign: 'center', padding: '0.5rem', fontSize: '0.72rem', color: '#3b82f6', textDecoration: 'none', fontWeight: 700, marginTop: '0.25rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>VIEW ALL 31 DOWNLOADS</Link>
            </div>
          </div>
          <div style={{ background: '#030306', border: '1px solid #0e0e18', borderRadius: 6, padding: '1rem 1.125rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {['FINRA Member', 'SEC Registered BD', 'ATS Licensed', 'SIPC Member', 'FinCEN SAR Compliant', 'Reg BI Compliant'].map((b) => (
                <span key={b} style={{ fontFamily: 'var(--font-mono)', fontSize: '0.58rem', fontWeight: 700, color: '#4a4a60', background: '#0c0c10', border: '1px solid #141420', borderRadius: 2, padding: '0.15rem 0.4rem' }}>{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
