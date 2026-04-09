import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Disclosures',
  description: 'Regulatory disclosures and legal notices for UnyKorn broker-dealer operations.',
}

const sections = [
  {
    title: 'Important Notice',
    body: `UnyKorn Securities, LLC ("UnyKorn" or the "Firm") is a technology-enabled broker-dealer.
Securities offered through UnyKorn are subject to all applicable federal and state securities
laws. This disclosure page is provided for informational purposes only and does not constitute
an offer, solicitation, or recommendation to purchase or sell any security.`,
  },
  {
    title: 'Broker-Dealer Registration',
    body: `UnyKorn Securities, LLC is a broker-dealer registered with the U.S. Securities and
Exchange Commission (SEC) and is a member of the Financial Industry Regulatory Authority (FINRA)
and the Securities Investor Protection Corporation (SIPC). Our CRD number and BrokerCheck profile
are available upon request and through FINRA's BrokerCheck system at brokercheck.finra.org.`,
  },
  {
    title: 'Customer Relationship Summary (Form CRS)',
    body: `As required by SEC Regulation Best Interest, our Form CRS (Customer Relationship Summary)
describes the services we offer, our fees and costs, conflicts of interest, legal obligations,
and disciplinary history. A copy of Form CRS is available upon request and will be provided to
all new customers prior to or at the time of establishing a brokerage relationship.`,
  },
  {
    title: 'Business Continuity Plan',
    body: `UnyKorn maintains a Business Continuity Plan (BCP) designed to minimize service
disruption in the event of a significant business interruption. The BCP is reviewed and updated
at least annually. A summary of the plan is available upon request. In the event of a disruption,
customers may contact our operations team via the contact information on our website.`,
  },
  {
    title: 'Privacy Policy',
    body: `UnyKorn is committed to protecting the privacy and security of client information.
Our privacy policy, delivered to clients upon account opening and annually thereafter, describes
the types of personal information we collect, how it is used and shared, and the measures we take
to safeguard that information. We do not sell personal information to third parties. All client
data is encrypted in transit and at rest using industry-standard encryption methods.`,
  },
  {
    title: 'Order Handling & Best Execution',
    body: `UnyKorn does not match, execute, or negotiate the terms of orders in listed securities.
For private placements offered through our platform, UnyKorn acts as placement agent on behalf of
issuers. Subscription orders are processed in the order received and are subject to issuer
acceptance. UnyKorn does not guarantee allocation or acceptance of any subscription.`,
  },
  {
    title: 'Fees & Compensation Disclosure',
    body: `UnyKorn may receive placement fees, technology fees, or other compensation in
connection with securities offerings distributed through our platform. Details of all fees
applicable to a particular offering are disclosed in the relevant offering documents (Private
Placement Memorandum, Subscription Agreement, etc.). Customers should review these documents
carefully before investing.`,
  },
  {
    title: 'Risks of Investing in Private Securities',
    body: `Investments in private securities involve a high degree of risk and are suitable only
for investors who can bear the loss of their entire investment. Private securities are illiquid
and generally cannot be resold absent registration under applicable securities laws or an
exemption therefrom. Past performance is not indicative of future results. Diversification does
not guarantee profit or protect against loss.`,
  },
  {
    title: 'Anti-Money Laundering (AML) Program',
    body: `UnyKorn maintains a comprehensive AML compliance program in accordance with the Bank
Secrecy Act and applicable FINRA rules. Our program includes customer identification procedures
(CIP), suspicious activity monitoring and reporting, OFAC sanctions screening, ongoing risk-based
due diligence, and regular training for all personnel. A copy of our AML policy is available for
regulatory review upon request.`,
  },
  {
    title: 'SIPC Membership',
    body: `UnyKorn is a member of the Securities Investor Protection Corporation (SIPC). SIPC
protects the clients of its member firms against the loss of securities and cash held in customer
accounts in the event of a firm's insolvency. SIPC protection is limited to $500,000 per customer,
including a $250,000 limit for cash. SIPC does not protect against market losses.
For more information, visit www.sipc.org or call 1-202-371-8300.`,
  },
  {
    title: 'Regulatory Filings & Reports',
    body: `UnyKorn files all required reports with the SEC and FINRA, including but not limited to
Form BD, annual FOCUS reports, and customer complaint reports. Copies of public filings may be
obtained through the SEC's EDGAR system or FINRA's BrokerCheck.`,
  },
  {
    title: 'Complaints',
    body: `If you wish to file a complaint regarding any aspect of our business, you may do so by
writing to our Chief Compliance Officer at compliance@unykorn.org. All complaints are logged,
investigated, and resolved in accordance with FINRA Rule 4530 and our internal complaint handling
procedures.`,
  },
]

export default function DisclosuresPage() {
  return (
    <main style={{ maxWidth: 760, margin: '0 auto', padding: '4rem 2rem' }}>
      <header style={{ marginBottom: '3rem' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginBottom: '1rem',
          }}
        >
          Regulatory
        </p>
        <h1
          style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            marginBottom: '1rem',
          }}
        >
          Disclosures &amp; Legal Notices
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </p>
      </header>

      <div style={{ display: 'grid', gap: '2rem' }}>
        {sections.map((s, i) => (
          <section
            key={i}
            style={{
              padding: '1.5rem',
              background: i === 0 ? 'var(--color-surface)' : 'transparent',
              border: i === 0 ? '1px solid var(--color-border)' : 'none',
              borderTop: i > 0 ? '1px solid var(--color-border)' : undefined,
              borderRadius: i === 0 ? 8 : 0,
              paddingTop: i > 0 ? '2rem' : undefined,
            }}
          >
            <h2 style={{ fontSize: '1rem', fontWeight: 600, marginBottom: '0.75rem' }}>
              {i + 1}. {s.title}
            </h2>
            <p
              style={{
                fontSize: '0.825rem',
                color: 'var(--color-text-secondary)',
                lineHeight: 1.7,
                whiteSpace: 'pre-line',
              }}
            >
              {s.body}
            </p>
          </section>
        ))}
      </div>

      {/* Footer disclaimer */}
      <div
        style={{
          marginTop: '3rem',
          padding: '1.5rem',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 8,
          textAlign: 'center',
        }}
      >
        <p style={{ fontSize: '0.7rem', color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
          This page is maintained by UnyKorn&apos;s Compliance Department. To request a copy of any
          document referenced above, contact{' '}
          <a href="mailto:compliance@unykorn.org" style={{ color: 'var(--color-accent)' }}>
            compliance@unykorn.org
          </a>
          .
        </p>
      </div>
    </main>
  )
}
