const fs = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')

const outDir = path.resolve(__dirname, '..', 'public', 'downloads')
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true })

const office = 'UnyKorn | 5655 Peachtree Parkway, Norcross, GA 30099'

const docs = [
  ['fth-capital-platform-overview.pdf', 'Platform Overview and Capabilities', 'Executive Overview'],
  ['fth-bd-partnership-program.pdf', 'Broker-Dealer Partnership Program', 'Partnership Model'],
  ['fth-technology-architecture.pdf', 'Technology Architecture Summary', 'Architecture Overview'],
  ['fth-fee-schedule.pdf', 'Fee Schedule and Commission Structure', 'Commercial Model'],
  ['fth-competitive-analysis.pdf', 'Competitive Landscape Analysis', 'Market Positioning'],
  ['fth-rwa-tokenization-framework.pdf', 'RWA Tokenization Framework', 'Issuance Framework'],
  ['fth-sample-om-real-estate.pdf', 'Sample Offering Memorandum - Real Estate', 'Illustrative Structure'],
  ['fth-smart-contract-audit.pdf', 'Smart Contract Audit Summary', 'Control and Security'],
  ['fth-custody-guide.pdf', 'Digital Asset Custody Guide', 'Custody Controls'],
  ['fth-token-economics.pdf', 'Token Economics and Distribution Model', 'Economic Model'],
  ['fth-multi-chain-registry.pdf', 'Multi-Chain Asset Registry Overview', 'Ledger Strategy'],
  ['fth-reg-d-506c-framework.pdf', 'Reg D 506(c) Offering Framework', 'US Exemption Framework'],
  ['fth-reg-d-506b-framework.pdf', 'Reg D 506(b) Offering Framework', 'US Exemption Framework'],
  ['fth-reg-s-guide.pdf', 'Regulation S Offshore Offering Guide', 'Offshore Framework'],
  ['fth-ats-compliance.pdf', 'ATS Regulatory Compliance Overview', 'Trading Venue Controls'],
  ['fth-kyc-aml-procedures.pdf', 'KYC and AML Procedures Manual', 'Onboarding and Monitoring'],
  ['fth-reg-bi-guide.pdf', 'Reg BI Suitability and Best Interest Guide', 'Conduct Standards'],
  ['fth-blue-sky-checklist.pdf', 'Blue Sky Filing Checklist', 'State Notice Process'],
  ['fth-stablecoin-settlement-guide.pdf', 'Stablecoin Settlement Infrastructure Guide', 'Settlement Operations'],
  ['fth-settlement-architecture.pdf', 'Multi-Chain Settlement Architecture', 'Execution Design'],
  ['fth-stablecoin-matrix.pdf', 'Stablecoin Comparison Matrix', 'Rail Selection'],
  ['fth-pay-integration-guide.pdf', 'Network Integration Guide', 'Integration Steps'],
  ['fth-accreditation-checklist.pdf', 'Qualified Investor Accreditation Checklist', 'Investor Qualification'],
  ['fth-subscription-agreement-template.pdf', 'Subscription Agreement Template', 'Documentation Pack'],
  ['fth-investor-onboarding-guide.pdf', 'Investor Onboarding Workflow Guide', 'Process Operations'],
  ['fth-form-d-guide.pdf', 'Form D Filing Guide', 'Filing Sequence'],
  ['fth-investor-comm-templates.pdf', 'Investor Communication Templates', 'Communications Toolkit'],
  ['fth-technical-dd-package.pdf', 'Technical Due Diligence Package', 'Technical Validation'],
  ['fth-regulatory-dd-checklist.pdf', 'Regulatory Due Diligence Checklist', 'Regulatory Validation'],
  ['fth-cybersecurity-overview.pdf', 'Cybersecurity and Data Protection Overview', 'Security Program'],
  ['fth-audit-trail-overview.pdf', 'Financial Audit Trail Overview', 'Audit and Records'],
]

const bodySections = [
  'Purpose: Provide broker-dealer teams a concise operating summary for review, internal approval, and issuer onboarding.',
  'What UnyKorn Provides: issuer intake tooling, multi-chain contract writing support, stablecoin settlement rails, and reporting workflows.',
  'What Broker-Dealer Partners Control: supervision, suitability standards, offering approval, and final compliance policy requirements.',
  'Execution Model: partner defines controls, UnyKorn configures workflows, launch sequence is documented, and post-close reporting is maintained.',
  'Rail Coverage: XRP Ledger, Ethereum-compatible chains, and additional chain integrations with client-specific policy constraints.',
  'Settlement Coverage: USDC and USDT settlement paths with reconciliation checkpoints and audit trail capture.',
  'Regulatory Positioning: framework supports Reg D / Reg S style workflows with jurisdiction-specific adaptation by partner counsel.',
  'Operational Posture: all configurations are adjustable to broker-dealer standards; no forced single-template issuance model.',
]

for (const [file, title, subtitle] of docs) {
  const doc = new PDFDocument({ size: 'LETTER', margin: 56 })
  const stream = fs.createWriteStream(path.join(outDir, file))
  doc.pipe(stream)

  doc.font('Helvetica-Bold').fontSize(20).fillColor('#0f172a').text('UnyKorn Broker-Dealer Resource', { align: 'left' })
  doc.moveDown(0.4)
  doc.font('Helvetica-Bold').fontSize(16).fillColor('#111827').text(title)
  doc.moveDown(0.2)
  doc.font('Helvetica').fontSize(11).fillColor('#374151').text(subtitle)
  doc.moveDown(0.8)
  doc.font('Helvetica').fontSize(10).fillColor('#4b5563').text(office)
  doc.moveDown(0.7)

  doc.font('Helvetica-Bold').fontSize(11).fillColor('#111827').text('Broker-Dealer Brief')
  doc.moveDown(0.3)

  doc.font('Helvetica').fontSize(10.5).fillColor('#1f2937')
  bodySections.forEach((line) => {
    doc.text(line, { align: 'left', lineGap: 2 })
    doc.moveDown(0.35)
  })

  doc.addPage()
  doc.font('Helvetica-Bold').fontSize(14).fillColor('#111827').text('Partner Implementation Checklist')
  doc.moveDown(0.6)
  doc.font('Helvetica').fontSize(10.5).fillColor('#1f2937')

  const checklist = [
    '1. Initial BD intake call and issuance objectives',
    '2. Compliance policy alignment and supervisory requirements',
    '3. Offering data room and legal template exchange',
    '4. Chain and settlement rail selection for the program',
    '5. Investor onboarding workflow approval',
    '6. Test transaction and reporting validation',
    '7. Launch readiness signoff and go-live sequence',
  ]
  checklist.forEach((line) => {
    doc.text(line, { lineGap: 2 })
    doc.moveDown(0.35)
  })

  doc.moveDown(0.6)
  doc.font('Helvetica-Bold').text('Contact')
  doc.font('Helvetica').text('kevan@unykorn.org')
  doc.text('5655 Peachtree Parkway, Norcross, GA 30099')

  doc.end()
}

console.log(`Generated ${docs.length} PDFs in ${outDir}`)
