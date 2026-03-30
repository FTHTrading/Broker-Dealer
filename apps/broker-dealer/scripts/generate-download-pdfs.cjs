'use strict'
const fs   = require('fs')
const path = require('path')
const PDFDocument = require('pdfkit')

// ─── Brand ───────────────────────────────────────────────────────────────────
const FIRM  = 'UnyKorn Capital Markets'
const LINE1 = '5655 Peachtree Parkway, Suite 100'
const LINE2 = 'Norcross, Georgia  30099'
const PHONE = '+1 (470) 871-0517'
const EMAIL_BD   = 'bd@unykorn.org'
const EMAIL_COMP = 'compliance@unykorn.org'
const EMAIL_RWA  = 'rwa@unykorn.org'
const EMAIL_PART = 'partners@unykorn.org'
const WEB    = 'www.unykorn.org'
const WEB_BD = 'brokerdealer.unykorn.org'

const LOGO_PATH = path.resolve(__dirname, '..', 'public', 'unykorn-logo.png')
const OUT_DIR   = path.resolve(__dirname, '..', 'public', 'downloads')

// Colors
const NAVY  = '#0b1f3a'
const GOLD  = '#b8922a'
const DARK  = '#1a1a2e'
const MID   = '#374151'
const LIGHT = '#6b7280'
const WHITE = '#ffffff'
const RULE  = '#d1d5db'
const ACCENT = '#1e3a5f'

if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true })

// ─── Document data ────────────────────────────────────────────────────────────
const DOCS = [
  {
    file: 'fth-capital-platform-overview.pdf',
    title: 'Capital Markets Platform Overview',
    subtitle: 'Executive Summary: Infrastructure, Rails, and Dealer Controls',
    category: 'Platform Overview',
    paras: [
      'UnyKorn delivers a production-ready digital capital markets stack enabling registered broker-dealers to originate, structure, and distribute tokenized real-world assets across multiple blockchain settlement layers. The platform sits beneath a broker-dealer\'s supervisory framework — every workflow is configurable to the sponsoring firm\'s compliance standards.',
      'Core capabilities include multi-chain contract authoring across XRP Ledger, EVM chains, Stellar, Avalanche, Tron, Polygon, and Base; stablecoin settlement via USDC, USDT, and proprietary USDF rails; investor onboarding automation with accreditation logic; real-time audit trail capture; and post-close reporting. Custody integrations connect to four institutional custodians with segregated account structures.',
      'Broker-dealer partners retain full supervisory authority. UnyKorn provides the technical execution layer only — no client relationships, no AUM discretion, no dealer activity. The platform is designed to be invisible to end investors: your issuance infrastructure, white-label ready, with branding, documents, and communications controlled by the sponsoring firm.',
    ],
    checklist: [
      'Review platform architecture deck with internal IT and compliance',
      'Map current issuance workflow to UnyKorn module set',
      'Identify target chains and settlement rails by program type',
      'Confirm custody provider integration requirements',
      'Schedule technical demo with the UnyKorn engineering team',
      'Execute mutual NDA and platform access agreement',
      'Begin sandbox configuration in the test environment',
    ],
  },
  {
    file: 'fth-bd-partnership-program.pdf',
    title: 'Broker-Dealer Partnership Program',
    subtitle: 'Engagement Model, Revenue Structure, and Onboarding Timeline',
    category: 'Partnership Model',
    paras: [
      'The UnyKorn Broker-Dealer Partnership Program is structured as an infrastructure licensing arrangement. The sponsoring broker-dealer retains full regulatory ownership of all offerings, investor relationships, and supervisory obligations. UnyKorn provides the platform layer under a technical services agreement that explicitly excludes dealer activity.',
      'Revenue sharing is negotiated on a per-program basis. Standard terms reflect a platform fee on gross proceeds, a per-investor processing fee for onboarding automation, and an optional white-label services fee for custom document and branding packages. Volume tiers reduce per-transaction rates for programs exceeding defined annual issuance thresholds.',
      'Onboarding proceeds in four phases: (1) Legal and compliance alignment, including review of the technical services agreement by partner counsel; (2) Technical configuration of the platform to the BD\'s supervisory policy requirements; (3) Test transaction cycle in the sandbox environment; (4) Production launch with a defined go-live sequence and escalation matrix.',
    ],
    checklist: [
      'Execute mutual NDA prior to program-level disclosure',
      'Review and negotiate technical services agreement',
      'Define supervisory policy matrix with compliance officer',
      'Complete sandbox integration and test transaction cycle',
      'Submit internal BD approval memo (board or CCO)',
      'Configure live investor onboarding environment',
      'Establish reporting cadence and audit-ready data feeds',
    ],
  },
  {
    file: 'fth-technology-architecture.pdf',
    title: 'Technology Architecture Summary',
    subtitle: 'Infrastructure Stack, Settlement Design, and Security Posture',
    category: 'Architecture Overview',
    paras: [
      'The UnyKorn technology stack spans seven functional layers: (1) Rust-core settlement engine Apostle Chain (Chain ID 7332) handling AI-to-AI transactions at sub-second latency; (2) Custody integration with four institutional custodians; (3) Stablecoin rail management (USDC, USDT, DAI/USDS, RLUSD, USDF, private rails); (4) Oracle data layer for real-time pricing and NAV feeds; (5) Compliance automation for KYC/AML, accreditation, and regulatory event logging; (6) Digital issuance module for token contract authoring across eight settlement chains; (7) Agentic operations for automated reporting, investor communications, and post-close reconciliation.',
      'All inter-layer communication is authenticated with per-request signing. Audit events are written to an append-only log with cryptographic chaining. The platform supports multi-chain asset registration, enabling a single offering to be represented across XRPL, EVM, Stellar, and proprietary chains simultaneously, with cross-chain settlement routing managed by the execution engine.',
      'Security controls include end-to-end encryption in transit, encrypted keystores for all treasury and custodian credentials, rate limiting and brute-force detection at the API boundary, and an integrity monitoring module (Sentinel) performing continuous behavioral and anomaly analysis on all platform actors and agents.',
    ],
    checklist: [
      'Request architecture deep-dive session with UnyKorn engineering',
      'Review API documentation and obtain sandbox credentials',
      'Complete internal IT security review of platform integration points',
      'Validate connectivity to custody provider APIs',
      'Test reporting data feed format against internal systems',
      'Confirm key management and credential storage procedures',
      'Execute integration acceptance testing checklist',
    ],
  },
  {
    file: 'fth-fee-schedule.pdf',
    title: 'Fee Schedule and Commission Structure',
    subtitle: 'Platform Pricing, Volume Tiers, and Revenue Sharing Framework',
    category: 'Commercial Model',
    paras: [
      'Platform fees are structured to align UnyKorn\'s revenue with successful issuance outcomes for sponsoring broker-dealers. Base platform access is provided at no charge during onboarding and the sandbox phase. Production fees apply upon first live offering close.',
      'Standard Fee Reference (indicative; subject to negotiation by program): Platform license fee — 0.75% of gross offering proceeds at close. Investor onboarding automation — $85 per qualified investor processed through the KYC/AML and accreditation workflow. Optional white-label document package — $2,500 per offering. Ongoing reporting module — $500 per month per active program. Custom chain integration — quoted on scope. Volume tiers reduce per-transaction rates by 15-35% for programs exceeding $10M, $25M, and $50M in annualized gross proceeds.',
      'All fees are payable by the sponsoring broker-dealer. UnyKorn does not collect fees directly from investors. A detailed schedule with program-specific terms is delivered under NDA as part of the partnership proposal package.',
    ],
    checklist: [
      'Request customized fee proposal under mutual NDA',
      'Model fee impact against projected program gross proceeds',
      'Confirm fee payment mechanism with operations team',
      'Negotiate volume tier thresholds for multi-program pipeline',
      'Establish invoice timing relative to offering close dates',
      'Confirm currency and settlement rail for platform fee payment',
      'Document fee structure in the technical services agreement',
    ],
  },
  {
    file: 'fth-competitive-analysis.pdf',
    title: 'Competitive Landscape Analysis',
    subtitle: 'Market Positioning: Tokenization Platforms, Rail Providers, and BD Enablers',
    category: 'Market Positioning',
    paras: [
      'The tokenized RWA infrastructure market contains three categories of providers: (1) end-to-end issuance platforms that include dealer functions and seek to displace the broker-dealer; (2) chain-native tooling that requires significant technical resources to adapt for regulated securities workflows; and (3) compliance-only software vendors that lack settlement and ledger capabilities. UnyKorn occupies none of these positions.',
      'UnyKorn is the broker-dealer infrastructure layer — it provides rails beneath a registered firm, not around one. Securitize, Tokeny, and comparable platforms build direct investor relationships, take on compliance obligations, and often operate as registered transfer agents or dealers themselves. UnyKorn does not. It is pure infrastructure, configurable to the sponsoring firm\'s requirements, with no investor-facing identity.',
      'The value this creates for broker-dealer partners: access to multi-chain settlement rails, investor onboarding automation, and reporting infrastructure that would cost mid-market BD firms $5-15M to build internally — available on a per-program fee basis with no capital expenditure, no additional headcount, and no transfer of regulatory obligation.',
    ],
    checklist: [
      'Compare UnyKorn capability set against current tech stack',
      'Review existing vendor contracts for exclusivity provisions',
      'Request reference contacts from UnyKorn partner network',
      'Evaluate build-vs-buy analysis for targeted capabilities',
      'Assess regulatory fit relative to existing dealer functions',
      'Identify first pilot program for platform evaluation',
      'Schedule executive alignment call with UnyKorn leadership',
    ],
  },
  {
    file: 'fth-rwa-tokenization-framework.pdf',
    title: 'RWA Tokenization Framework',
    subtitle: 'Asset Classes, Structural Considerations, and Chain Selection Logic',
    category: 'Issuance Framework',
    paras: [
      'UnyKorn supports tokenization across seven real-world asset categories: residential and commercial real estate; private credit and direct lending; private equity and venture fund interests; infrastructure and energy project finance; art, collectibles, and IP royalty streams; structured notes and fixed income; and diversified fund wrapper structures. Each category has distinct structural, custodial, and regulatory characteristics accommodated through configurable offering templates.',
      'Chain selection for each program is driven by investor geography, regulatory jurisdiction, liquidity preference, and custody provider compatibility. XRP Ledger is the primary chain for institutional and cross-border investors, with EVM chains providing DeFi composability where appropriate. Apostle Chain and USDF rails provide sub-second settlement for AI-agent-to-AI-agent transactions and proprietary fund structures.',
      'Token economic design — supply caps, transfer restriction logic, redemption mechanics, and distribution automation — is configured per program by UnyKorn engineers under direction of the sponsoring BD\'s legal counsel. No standard template is imposed. Every structure is built to the specific offering and jurisdiction requirements.',
    ],
    checklist: [
      'Identify target asset class for the first program',
      'Confirm underlying asset custody and legal ownership structure',
      'Select primary and secondary settlement chains',
      'Engage legal counsel for token structure opinion',
      'Define transfer restriction logic (eligibility, lockup periods)',
      'Establish distribution automation requirements (dividends, interest)',
      'Begin offering document coordination with platform template',
    ],
  },
  {
    file: 'fth-sample-om-real-estate.pdf',
    title: 'Sample Offering Memorandum: Real Estate',
    subtitle: 'Illustrative Structure for Tokenized Real Estate Private Placement',
    category: 'Illustrative Structure',
    paras: [
      'This document illustrates an offering structure for a hypothetical tokenized real estate private placement conducted under Regulation D, Rule 506(c). All figures and terms are illustrative only. This is not an offer to sell securities. Any actual offering would require a complete offering memorandum drafted and approved by qualified securities counsel and the sponsoring registered broker-dealer.',
      'Illustrative Terms: Issuer: Norcross Industrial Holdings LLC (hypothetical). Offering Size: $12,500,000. Security Type: LLC membership interests, represented as tokens on XRPL and EVM. Minimum Subscription: $25,000. Target Distribution Yield: 7.5% per annum, paid quarterly in USDC. Offering Exemption: Reg D 506(c). Custody: Anchorage Digital (qualified custodian). Administrative Agent: UnyKorn Capital Markets on behalf of sponsoring broker-dealer.',
      'Post-close, quarterly distribution calculations are computed by the platform\'s reporting engine and disbursed via stablecoin to verified investor wallet addresses. All audit records are maintained on-chain with off-chain backup in the platform\'s append-only ledger. Investor statements and tax documents are generated automatically by the reporting module.',
    ],
    checklist: [
      'Confirm offering exemption with securities counsel (506b vs. 506c)',
      'Establish LLC or trust structure for the underlying asset',
      'Define token economic terms with the underwriting team',
      'Configure investor onboarding for accredited investor verification',
      'Select custody provider and confirm qualified custodian status',
      'Draft offering memorandum using platform template as base',
      'Execute subscription automation testing in sandbox',
    ],
  },
  {
    file: 'fth-smart-contract-audit.pdf',
    title: 'Smart Contract Audit Summary',
    subtitle: 'Control Framework, Testing Methodology, and Security Posture',
    category: 'Control and Security',
    paras: [
      'All smart contracts deployed by UnyKorn on behalf of issuing broker-dealer programs undergo a documented security review prior to production deployment. The review framework covers: access control logic, ownership and upgrade authority structures, transfer restriction enforcement, reentrancy and overflow protections, event emission and audit trail completeness, and emergency pause and fund recovery mechanisms.',
      'Internal review uses static analysis tooling, manual code review, and an automated test suite with a minimum of 165 assertions per contract module. For institutional programs exceeding $5M in targeted gross proceeds, an external audit engagement with a qualified third-party security firm is recommended and facilitated by UnyKorn at the broker-dealer\'s election.',
      'All deployed contract addresses, bytecode hashes, and audit reference documents are maintained in the platform\'s program registry and provided to the sponsoring broker-dealer as part of the standard post-close documentation package, available to regulators, transfer agents, and auditors on request.',
    ],
    checklist: [
      'Review contract access control architecture with engineering',
      'Request internal audit report for target contract modules',
      'Evaluate need for external audit based on program size',
      'Confirm emergency pause and fund recovery procedures',
      'Obtain deployed contract addresses and bytecode hashes',
      'Validate event logging against audit trail requirements',
      'Retain audit package in the program documentation file',
    ],
  },
  {
    file: 'fth-custody-guide.pdf',
    title: 'Digital Asset Custody Guide',
    subtitle: 'Qualified Custodian Integration, Segregation, and Control Standards',
    category: 'Custody Controls',
    paras: [
      'UnyKorn integrates with four institutional custody providers: Anchorage Digital, BitGo, Copper, and Fireblocks. Each custodian connection supports segregated account structures under the sponsoring broker-dealer\'s entity name, consistent with qualified custodian obligations under the Investment Advisers Act and applicable SEC guidance.',
      'When investor subscription funds are received, the platform\'s settlement engine routes assets to the designated custodian sub-account for the relevant program. Redemption and distribution transactions are authorized through the platform\'s multi-signature approval workflow, requiring sign-off by the sponsoring broker-dealer\'s designated operations contact before execution.',
      'Custody fees are separate from UnyKorn platform fees and are negotiated directly between the sponsoring broker-dealer and the custodian. UnyKorn provides technical integration only and receives no economic participation in custody fee arrangements. Custody provider selection is made by the sponsoring firm; all four integrations are supported with equivalent capability.',
    ],
    checklist: [
      'Select custody provider and establish institutional account',
      'Complete custodian onboarding and KYB documentation',
      'Configure API credentials in UnyKorn platform settings',
      'Define multi-signature approval structure for transactions',
      'Test settlement routing in the sandbox environment',
      'Confirm segregated account structure per program',
      'Document custody arrangement in offering disclosures',
    ],
  },
  {
    file: 'fth-token-economics.pdf',
    title: 'Token Economics and Distribution Model',
    subtitle: 'Supply Design, Distribution Logic, and Governance Structure',
    category: 'Economic Model',
    paras: [
      'Token economic design on the UnyKorn platform is entirely program-specific — there is no standard template. Each structure is designed in coordination with the sponsoring broker-dealer\'s legal and underwriting teams, reflecting the economics of the underlying asset, distribution preferences, and the redemption mechanics required by the offering structure.',
      'Common structural elements include: fixed or variable supply caps tied to offering size; distribution automation connected to underlying asset cash flows (rent, interest, royalties); pro-rata redemption mechanics for closed-end structures; and NAV-linked pricing for open-end or evergreen fund structures. All distributions are computed on-chain and disbursed in stablecoin, reducing volatility risk for investors.',
      'Governance rights, if any, are encoded at the contract level per issuer counsel\'s instruction. Voting, consent, and extraordinary event mechanics are fully configurable. Most Reg D private placement structures do not include governance token mechanics — the UnyKorn platform accommodates this by default, with governance module activation as an optional add-on.',
    ],
    checklist: [
      'Define token supply cap relative to target offering size',
      'Confirm distribution currency (USDC / USDT / USDF)',
      'Design distribution calculation methodology with underwriting',
      'Specify redemption mechanics and lockup period',
      'Address governance rights with issuer counsel',
      'Test distribution automation in sandbox with a test investor set',
      'Document token economic terms fully in the offering memorandum',
    ],
  },
  {
    file: 'fth-multi-chain-registry.pdf',
    title: 'Multi-Chain Asset Registry Overview',
    subtitle: 'Cross-Chain Issuance, Settlement Routing, and Registry Architecture',
    category: 'Ledger Strategy',
    paras: [
      'The UnyKorn multi-chain registry enables a single offering to be represented simultaneously across multiple blockchain settlement layers. A canonical registry maintained by the platform maps each investor\'s position to their chain allocation and maintains real-time reconciliation across all active chains.',
      'Supported settlement chains: XRP Ledger (institutional and cross-border primary), Ethereum Mainnet and Polygon (EVM and DeFi composability), Avalanche C-Chain, Base, Tron (Asian distribution), Stellar (Reg S offshore programs), and Apostle Chain (AI-agent-to-AI-agent settlement and proprietary programs). Additional chains can be integrated on a custom basis.',
      'The registry architecture separates the legal record of ownership from on-chain settlement representations. Legal ownership is maintained in the platform\'s off-chain ledger with full legal enforceability documentation. On-chain token holdings are settlement instruments. The platform\'s ledger is the authoritative source; chain representations are operationally efficient but do not override the legal record.',
    ],
    checklist: [
      'Select primary chain for offering base registration',
      'Determine secondary chains for distribution and liquidity',
      'Confirm investor wallet requirements per chain',
      'Test multi-chain reconciliation in sandbox environment',
      'Establish off-chain legal record and on-chain mapping',
      'Document chain election in offering mechanics',
      'Set up monitoring for cross-chain position reconciliation',
    ],
  },
  {
    file: 'fth-reg-d-506c-framework.pdf',
    title: 'Regulation D: Rule 506(c) Offering Framework',
    subtitle: 'General Solicitation, Accredited Investor Verification, and Federal Exemption',
    category: 'US Exemption Framework',
    paras: [
      'Rule 506(c) permits general solicitation in private placements provided all investors are accredited and the issuer takes reasonable steps to verify accredited investor status. UnyKorn\'s platform enforces accreditation verification as a prerequisite for subscription processing — no investor bypass is available.',
      'Verification methods supported: third-party accreditation letter review, income and net worth documentation with automated review workflow, attorney or CPA certification, and registered investment adviser letter acceptance. All verification records are stored in the audit-ready document vault with timestamp, reviewer identity, and version control.',
      'Form D filing is required within 15 days of first sale. The platform\'s compliance module tracks first sale date, investor count, and aggregate proceeds at each threshold, and delivers a Form D preparation package to the sponsoring BD\'s compliance team on schedule. State blue sky notice filings remain the responsibility of the sponsoring BD — a jurisdiction checklist is provided as part of the standard package.',
    ],
    checklist: [
      'Confirm accredited investor restriction with securities counsel',
      'Configure investor onboarding to enforce verification',
      'Select verification methodology (income/NW docs, letter, CPA)',
      'Establish first sale tracking for Form D filing timeline',
      'Prepare Form D with the broker-dealer compliance team',
      'Complete state blue sky notice filings (see separate checklist)',
      'Retain verification records in audit vault for 5 years minimum',
    ],
  },
  {
    file: 'fth-reg-d-506b-framework.pdf',
    title: 'Regulation D: Rule 506(b) Offering Framework',
    subtitle: 'Pre-Existing Relationship Requirement, No General Solicitation, Investor Mix',
    category: 'US Exemption Framework',
    paras: [
      'Rule 506(b) permits up to 35 sophisticated non-accredited investors per offering in addition to unlimited accredited investors, but prohibits general solicitation. Issuers must have a pre-existing, substantive relationship with investors prior to the offering. The platform\'s onboarding module enforces the 35-non-accredited investor count in real time, blocking additional non-accredited subscriptions at threshold.',
      'Substantive relationship documentation is the responsibility of the sponsoring broker-dealer, maintained in the BD\'s CRM and customer files. General solicitation restrictions under 506(b) require that all investor communications and marketing materials avoid general advertising characteristics. The sponsoring BD\'s compliance officer is responsible for reviewing all investor-facing materials.',
      'The UnyKorn document generation module supports restricted distribution watermarking and access-controlled viewing of offering documents. All access events — who viewed which document and when — are logged in the platform\'s compliance record for supervisory review.',
    ],
    checklist: [
      'Confirm pre-existing relationship documentation for all investors',
      'Configure platform for 35-sophisticate investor count enforcement',
      'Mark all materials NOT FOR GENERAL DISTRIBUTION',
      'Establish CCO review workflow for investor communications',
      'Implement access-controlled document viewing for OM',
      'Track investor eligibility classification in platform registry',
      'Retain complete investor file with relationship history',
    ],
  },
  {
    file: 'fth-reg-s-guide.pdf',
    title: 'Regulation S: Offshore Offering Guide',
    subtitle: 'Non-US Person Requirement, Offering Restrictions, and Distribution Compliance',
    category: 'Offshore Framework',
    paras: [
      'Regulation S provides a safe harbor from US Securities Act registration for securities offered and sold outside the United States to non-US persons. UnyKorn supports Reg S structures on Stellar and XRP Ledger rails — widely used in cross-border institutional settlement — and can configure dual Reg D / Reg S programs targeting both US-accredited and non-US investor bases simultaneously.',
      'Category 3 restrictions, which apply to most private equity and real estate programs, require a one-year distribution compliance period. The platform enforces these restrictions through token transfer logic, preventing resale to US persons during the restricted period. EDGAR reporting obligations are coordinated with the sponsoring BD\'s outside counsel.',
      'Investor onboarding for Reg S programs includes non-US person certification, country of residence verification, and sanctions screening against OFAC, EU, and UN consolidated lists. All screening results are logged with timestamps and version history. Pass-through reporting to the sponsoring BD\'s AML officer occurs in real time via the platform\'s reporting module.',
    ],
    checklist: [
      'Confirm Reg S category applicability with securities counsel',
      'Define distribution compliance period and enforce via token logic',
      'Configure non-US person certification in onboarding module',
      'Enable dual Reg D/Reg S if both investor bases are targeted',
      'Complete OFAC, EU, and UN sanctions screening configuration',
      'Document offshore offering procedures in the compliance manual',
      'Monitor for Reg S resale and flowback restrictions during period',
    ],
  },
  {
    file: 'fth-ats-compliance.pdf',
    title: 'ATS Regulatory Compliance Overview',
    subtitle: 'Alternative Trading System Requirements and Secondary Liquidity Framework',
    category: 'Trading Venue Controls',
    paras: [
      'Alternative Trading Systems facilitating secondary trading in tokenized securities must be operated by a registered broker-dealer with Form ATS filing. The UnyKorn platform does not itself operate as an ATS. It provides settlement infrastructure that connects to ATS venues operated by registered broker-dealers.',
      'For broker-dealer partners establishing a secondary liquidity venue for tokenized offerings, UnyKorn provides connectivity to ATS-registered venues and can configure program-specific settlement flows. All matching and execution functions remain with the licensed ATS operator; UnyKorn provides the settlement rail, not the trading venue.',
      'Key ATS compliance considerations for tokenized securities: access person and order exposure requirements, fair access standards, system and information safeguard obligations, and quarterly volume reporting via Form ATS-R. The platform\'s audit module supports ATS data reporting needs with pre-formatted extracts for quarterly filings.',
    ],
    checklist: [
      'Confirm ATS registration status of secondary venue operator',
      'Execute connectivity agreement with target ATS operator',
      'Configure settlement rail for ATS-matched trades',
      'Establish fair access standards with the ATS operator',
      'Set up Form ATS-R reporting data feed from platform',
      'Review system safeguard requirements with IT security',
      'Document ATS arrangement in BD supervisory procedures',
    ],
  },
  {
    file: 'fth-kyc-aml-procedures.pdf',
    title: 'KYC and AML Procedures Manual',
    subtitle: 'Investor Onboarding Controls, Sanctions Screening, and SAR Obligations',
    category: 'Onboarding and Monitoring',
    paras: [
      'UnyKorn\'s investor onboarding module enforces a multi-step KYC/AML process for every investor prior to subscription processing: identity document collection and verification, sanctions screening against OFAC SDN, EU Consolidated, UN Security Council, and FinCEN watchlists, beneficial ownership documentation for entity investors, and source of funds documentation above defined thresholds.',
      'Screening is performed in real time at onboarding initiation and again at subscription. Adverse media monitoring is available as an enhanced due diligence add-on for institutional investors. All screening results, pass/fail determinations, and override authorizations are logged in the compliance vault with identification of the authorizing party and decision timestamp.',
      'Suspicious activity reporting obligations remain with the sponsoring broker-dealer as the registered FinCEN-obligated institution. The platform delivers a formatted SAR preparation package to the compliance team when behavioral flags exceed defined thresholds. Threshold configuration is set by the sponsoring BD\'s AML officer during onboarding. Alerts are available for real-time compliance officer notification on flagged events.',
    ],
    checklist: [
      'Define investor KYC tier thresholds with AML officer',
      'Configure sanctions screening list subscriptions',
      'Establish beneficial ownership collection for entity accounts',
      'Set source of funds threshold for enhanced documentation',
      'Enable SAR preparation package and alert routing',
      'Set up adverse media monitoring for institutional investors',
      'Test full KYC workflow in sandbox with a sample investor set',
    ],
  },
  {
    file: 'fth-reg-bi-guide.pdf',
    title: 'Regulation Best Interest: Conduct Standards',
    subtitle: 'BD Obligations, Care Duty, and Conflict Disclosure Framework',
    category: 'Conduct Standards',
    paras: [
      'Regulation Best Interest requires broker-dealers recommending securities to retail customers to act in the customer\'s best interest. For tokenized private placements, this creates obligations around suitability determination, conflict identification and disclosure, compliance policy documentation, and recommendation rationale.',
      'The UnyKorn platform supports Reg BI compliance via suitability questionnaire modules configurable to the sponsoring BD\'s standards, investor financial profile capture, investment objective and risk tolerance documentation, and suitability flag configuration that prevents subscription processing for investors not meeting defined criteria.',
      'Conflict disclosures related to the platform relationship between UnyKorn and the sponsoring broker-dealer must be included in the BD\'s Form CRS and applicable Reg BI disclosure documents. UnyKorn provides a platform disclosure template for use by partner counsel. Specific language must be reviewed and approved by the BD\'s CCO prior to use.',
    ],
    checklist: [
      'Review Reg BI obligations with CCO and outside counsel',
      'Configure suitability questionnaire in onboarding module',
      'Define investment objective and risk tolerance categories',
      'Set suitability blocking logic for non-qualifying investors',
      'Update Form CRS to reflect platform relationship disclosures',
      'Prepare Reg BI disclosure template for each program',
      'Document recommendation rationale process in supervisory procedures',
    ],
  },
  {
    file: 'fth-blue-sky-checklist.pdf',
    title: 'Blue Sky Filing Checklist',
    subtitle: 'State Notice Filing Requirements for Reg D Private Placements',
    category: 'State Notice Process',
    paras: [
      'Under NSMIA, securities sold in reliance on Regulation D are covered securities exempt from state merit review. Most states nonetheless require notice filings with fees, typically coinciding with or within a specified period of the Form D federal filing. Failure to make timely notice filings can result in state enforcement action.',
      'Most states accept Form D as the notice filing. Some require a state-specific form, separate fee, or consent to service of process. A minority (including New York for certain offerings) have additional requirements. The sponsoring BD\'s outside counsel is responsible for determining and completing state filings. UnyKorn provides program data — investor state distribution — for filing preparation.',
      'The platform\'s compliance module tracks investors by state of residence, providing the BD\'s compliance team with a real-time investor count per state. Filings should be made in states where investors reside. Threshold exemptions exist in some states for limited investor counts — counsel should confirm applicability before relying on any threshold exemption.',
    ],
    checklist: [
      'Identify investor states from the platform onboarding data feed',
      'Engage outside counsel for state filing determination',
      'File Form D with the SEC within 15 days of first sale',
      'Submit state notice filings per state-specific deadlines',
      'Pay state filing fees; retain receipts in compliance file',
      'Identify states with unique forms or additional requirements',
      'Calendar annual or termination update filings as required',
    ],
  },
  {
    file: 'fth-stablecoin-settlement-guide.pdf',
    title: 'Stablecoin Settlement Infrastructure Guide',
    subtitle: 'Rail Architecture, Supported Assets, and Reconciliation Operations',
    category: 'Settlement Operations',
    paras: [
      'UnyKorn\'s settlement engine supports six stablecoin types: USDC (Circle, EVM and Stellar native), USDT (Tether, EVM native), DAI/USDS (MakerDAO/Sky Protocol), RLUSD (Ripple USD, XRPL native), USDF (UnyKorn proprietary, Apostle Chain), and private bank rails for institutional counterparties. Each is available for investor subscription receipt, distribution payments, and redemption proceeds.',
      'Settlement routing selects the optimal rail for each transaction based on: investor wallet type, program chain configuration, liquidity availability in the designated currency, and settlement latency requirements. Sub-second finality is available on Apostle Chain with USDF. Blockchain-confirmed settlement under 5 minutes is available on Polygon, Avalanche, and Base. XRPL provides 3-5 second finality for RLUSD transactions.',
      'Reconciliation occurs in real time against the platform\'s canonical ledger. Discrepancies between on-chain settlement records and expected transaction values trigger an automated alert to the operations team and a hold on related transactions until reconciliation is confirmed. All reconciliation events are logged with resolution timestamps for audit access.',
    ],
    checklist: [
      'Select stablecoin(s) for investor subscription and distribution',
      'Configure custody account for each selected stablecoin',
      'Test round-trip settlement in sandbox environment',
      'Establish reconciliation alert routing with operations team',
      'Define latency requirements and select rail accordingly',
      'Document stablecoin election in the offering supplement',
      'Confirm stablecoin disclosures in investor communications',
    ],
  },
  {
    file: 'fth-settlement-architecture.pdf',
    title: 'Multi-Chain Settlement Architecture',
    subtitle: 'Execution Engine Design, Routing Logic, and Finality Standards',
    category: 'Execution Design',
    paras: [
      'Apostle Chain, UnyKorn\'s settlement engine, serves as the execution coordination layer across all supported chains. It maintains a canonical transaction ledger, manages multi-chain routing, enforces settlement policy rules defined per program, and writes the audit trail in real time. Apostle Chain achieves sub-second finality using a delegated consensus model designed for high-throughput institutional workflows.',
      'For each transaction, the engine evaluates: program-level chain policy, investor wallet chain preference, liquidity state per rail, and transaction size routing thresholds. The result is an optimal execution path balancing settlement cost, latency, and audit completeness. Routing decisions are logged at the transaction level, providing a complete record of why each settlement took the path it did.',
      'Bridges between chains are managed by the platform\'s bridge module using atomic swap mechanisms where available and custodian-assisted transfers where atomicity is not achievable. All bridge events are recorded as compound transactions, with debit and credit legs linked by program transaction ID.',
    ],
    checklist: [
      'Define primary and fallback chain for each program',
      'Confirm bridge requirements for cross-chain investor base',
      'Set routing policy (cost vs. latency vs. audit priority)',
      'Test atomic bridge transactions in sandbox',
      'Establish custodian-assisted transfer protocol for non-atomic routes',
      'Review compound transaction logging with audit team',
      'Set alert thresholds for settlement failure or delay',
    ],
  },
  {
    file: 'fth-stablecoin-matrix.pdf',
    title: 'Stablecoin Comparison Matrix',
    subtitle: 'Rail Selection by Investor Base, Jurisdiction, and Settlement Latency',
    category: 'Rail Selection',
    paras: [
      'USDC (Circle): Supported on Ethereum, Polygon, Avalanche, Base, Stellar, Solana. Institutional preferred for US and EU investor bases. Strong regulatory clarity relative to other stablecoins. Native Stellar support enables efficient cross-border settlement. Recommended primary settlement currency for most Reg D and Reg S programs. USDT (Tether): Dominant liquidity in Asian and emerging market channels. Tron-native USDT provides very low transaction cost for high-frequency distribution programs.',
      'RLUSD (Ripple USD, XRP Ledger): Native XRPL stablecoin with 3-5 second finality and deep institutional liquidity on the XRPL DEX. Preferred for cross-border programs and multi-currency programs combining USD and XRP settlement. On-ledger escrow mechanics integrate directly with UnyKorn\'s distribution automation module.',
      'USDF (UnyKorn Proprietary, Apostle Chain): Sub-second finality. Used for AI-agent-to-AI-agent programs, proprietary settlement layers, and cases where instant confirmation is required. Operates on Apostle Chain (Chain ID 7332). Particularly well-suited for fund structures where rapid intra-program settlement is a design requirement.',
    ],
    checklist: [
      'Map investor geography to preferred stablecoin rails',
      'Confirm custodian support for each selected stablecoin',
      'Review regulatory position of selected stablecoin(s) with counsel',
      'Test investor wallet compatibility for each stablecoin',
      'Configure distribution module for selected currency',
      'Establish stablecoin liquidity monitoring for distribution dates',
      'Document stablecoin selection rationale in the program file',
    ],
  },
  {
    file: 'fth-pay-integration-guide.pdf',
    title: 'UnyKorn Network Integration Guide',
    subtitle: 'API Access, Sandbox Environment, and Partner Technical Onboarding',
    category: 'Integration Steps',
    paras: [
      'The UnyKorn platform API provides programmatic access to all modules: investor onboarding, KYC/AML event feeds, transaction submission, registry queries, reporting extracts, and compliance document vault. The API follows REST conventions with JSON payloads, bearer token authentication, and standard rate limiting. Full API reference documentation is provided under NDA as part of the technical integration package.',
      'Sandbox environment access is provided at the start of the technical integration phase. The sandbox mirrors production capabilities with test stablecoin values and synthetic ledger entries. Partners can simulate complete investor onboarding, subscription, distribution, and redemption workflows without affecting production data or custody balances.',
      'Integration timeline for a standard Reg D program is 4-8 weeks from sandbox access to production readiness, assuming active engineering involvement on the partner side and timely completion of legal and compliance review. Custom chain integrations, novel token structures, or ATS connectivity add 2-6 weeks to the base timeline.',
    ],
    checklist: [
      'Execute technical services agreement and NDA for API access',
      'Receive sandbox credentials and API key set',
      'Complete API authentication and endpoint testing',
      'Map partner workflows to platform API endpoints',
      'Test investor onboarding, subscription, and distribution flows',
      'Complete security review of API integration with partner IT',
      'Obtain production API credentials and go-live clearance',
    ],
  },
  {
    file: 'fth-accreditation-checklist.pdf',
    title: 'Qualified Investor Accreditation Checklist',
    subtitle: 'Verification Standards, Documentation Requirements, and Recordkeeping',
    category: 'Investor Qualification',
    paras: [
      'For 506(c) offerings, issuers must take reasonable steps to verify accredited investor status. SEC safe harbor methods: (1) income verification using IRS forms for the two most recent years plus investor representation of expectation to qualify in the current year; (2) net worth verification using bank and brokerage statements plus credit report; (3) written confirmation from a licensed attorney, CPA, registered investment adviser, or registered broker-dealer; (4) prior platform verification re-confirmation for investors who verified within the preceding 5 years.',
      'For institutional accredited investor eligibility, the platform also supports: entity accreditation under Rule 501(a)(3) (organizations with over $5M in assets), 501(a)(7) for registered broker-dealers, 501(a)(8) for investment companies, and Qualified Purchaser designation under the Investment Company Act for entities with $25M or more in investments.',
      'All verification documents are collected through the platform\'s secure upload module, reviewed, and returned with a verified status record containing the reviewer\'s identity, date, method employed, and document references. Records are retained for 7 years in the compliance vault, accessible for production to regulators or auditors on request.',
    ],
    checklist: [
      'Select verification method appropriate for each investor type',
      'Collect income or net worth documents per SEC safe harbor method',
      'Obtain third-party letter for attorney/CPA/RIA verification',
      'Process entity accreditation documentation for institutional investors',
      'Confirm QP designation documentation for Qualified Purchaser status',
      'Log verification decision and method in the compliance vault',
      'Retain all records for a minimum of 7 years with audit-ready access',
    ],
  },
  {
    file: 'fth-subscription-agreement-template.pdf',
    title: 'Subscription Agreement: Reference Template',
    subtitle: 'Documentation Framework and Required Investor Representations',
    category: 'Documentation Pack',
    paras: [
      'The subscription agreement is the core legal instrument through which an investor commits capital to a private placement. It contains representations regarding accredited investor or Qualified Purchaser status, investment experience, risk tolerance, source of funds, and acknowledgment of offering restrictions. It is executed by the investor prior to subscription processing.',
      'UnyKorn delivers a customizable subscription agreement template as part of the offering setup package. Required modifications include: issuer entity name and offering terms, minimum subscription amount and pro-rata allocation language, state-specific investor legend language, and representations specific to the offering structure. All modifications must be reviewed and approved by the BD\'s outside securities counsel prior to use.',
      'Executed subscription agreements are collected through the platform\'s e-signature module, retained in the document vault with execution timestamp and identity record, and linked to the investor\'s onboarding profile and subscription record. Countersignature by the issuer or its authorized representative is captured in the same workflow.',
    ],
    checklist: [
      'Obtain subscription agreement template from platform package',
      'Customize for issuer, offering size, and exemption type',
      'Have outside counsel review and approve the final form',
      'Configure e-signature workflow in the platform document module',
      'Test end-to-end execution and vault storage in sandbox',
      'Confirm countersignature routing to issuer representative',
      'Retain executed agreements for program life plus 7 years',
    ],
  },
  {
    file: 'fth-investor-onboarding-guide.pdf',
    title: 'Investor Onboarding Workflow Guide',
    subtitle: 'Step-by-Step Process from Invitation to Subscription Confirmation',
    category: 'Process Operations',
    paras: [
      'The UnyKorn investor onboarding workflow is a seven-stage process: (1) Investor invitation and access provisioning by the sponsoring broker-dealer; (2) Identity verification — government-issued ID, selfie liveness check, and address confirmation; (3) Accredited investor or Qualified Purchaser verification using one of the four SEC safe harbor methods; (4) Suitability assessment based on the BD\'s configured questionnaire; (5) AML/sanctions screening; (6) Subscription agreement execution via e-signature; (7) Subscription processing and settlement instruction generation.',
      'Average completion time for a prepared investor is 12-20 minutes. The platform sends automated reminders for incomplete steps at configurable intervals. Compliance holds triggered by AML screening, ID verification failures, or accreditation document issues are escalated to the sponsoring BD\'s compliance officer through the platform\'s alert module.',
      'Bulk investor invitation is available via CSV upload for programs with pre-identified investor lists. Individual invitation links are also available for self-directed onboarding managed by the BD\'s sales team. All invitation and onboarding activity is logged with timestamps for supervisory review.',
    ],
    checklist: [
      'Configure onboarding workflow for specific program requirements',
      'Upload investor invitation list or configure individual invitation flow',
      'Set reminder cadence for incomplete onboarding steps',
      'Configure compliance hold alerts and routing to CCO',
      'Test full onboarding cycle in sandbox with a test investor profile',
      'Train BD sales and compliance teams on onboarding dashboard',
      'Establish investor support contact for onboarding inquiries',
    ],
  },
  {
    file: 'fth-form-d-guide.pdf',
    title: 'Form D Filing Guide',
    subtitle: 'SEC Electronic Filing Requirements, Timeline, and Amendment Process',
    category: 'Filing Sequence',
    paras: [
      'Form D is the notice of exempt offering of securities required by SEC Rule 503 under Regulation D. It must be filed electronically via the SEC\'s EDGAR system within 15 calendar days of the date of first sale. The form captures: issuer information, exemption relied upon, offering size, number of investors, and aggregate amount sold to date.',
      'The filing is made through EDGAR using the issuer\'s access credentials. If the issuer lacks EDGAR access, the application process typically takes 5-7 business days before the filing deadline. UnyKorn provides a Form D preparation package — a completed draft based on platform program data — to the sponsoring BD\'s compliance team, but filing responsibility remains with the issuer or its outside counsel.',
      'Amendments are required: within 15 days of each annual anniversary of the first sale date if the offering continues; upon any material change to the offering terms; and within 15 days of completing or terminating the offering. Failure to file timely can result in loss of the Regulation D exemption in one or more states and SEC enforcement inquiry.',
    ],
    checklist: [
      'Confirm EDGAR access credentials for the issuer entity',
      'Obtain Form D preparation package from UnyKorn compliance module',
      'File Form D within 15 calendar days of the date of first sale',
      'Retain EDGAR submission receipt in the compliance file',
      'Calendar 15-day amendment deadline from each annual anniversary',
      'File termination or completion Form D amendment at offering close',
      'Confirm state blue sky filings concurrent with or following Form D',
    ],
  },
  {
    file: 'fth-investor-comm-templates.pdf',
    title: 'Investor Communication Templates',
    subtitle: 'Pre-Offering, Subscription, Distribution, and Post-Close Communications',
    category: 'Communications Toolkit',
    paras: [
      'UnyKorn provides institutional-grade investor communication templates for five program stages: (1) Pre-offering — indication of interest letter, NDA request, and soft-circle communication; (2) Subscription — onboarding invitation, status reminder emails, and subscription confirmation; (3) Funding — wire instruction confirmation and stablecoin wallet details; (4) Distribution — quarterly distribution notice with amount, payment rail, and transaction hash; (5) Post-close — annual program update, NAV update if applicable, and exit event notice.',
      'All templates are configurable to the sponsoring broker-dealer\'s brand, sender domain, and approved communication language. Templates include required regulatory disclaimers, Reg D/Reg S legend language, and non-solicitation statements. Template language must be reviewed and approved by the BD\'s CCO before use in any investor-facing context.',
      'The platform\'s communication module supports SMTP relay via the BD\'s designated email domain and optional SMS alert delivery for subscription confirmations, distribution alerts, and compliance holds. No communications are sent from UnyKorn-branded addresses to investors unless the BD explicitly configures this under a white-label arrangement.',
    ],
    checklist: [
      'Review all templates with CCO for regulatory language compliance',
      'Customize templates with BD brand, sender domain, and contact',
      'Configure SMTP relay and sender domain authentication (DKIM/SPF)',
      'Optionally configure SMS alerts for investor notifications',
      'Test all five stage templates in sandbox with a test investor',
      'Establish approval workflow for non-template investor communications',
      'Document communication controls in BD supervisory procedures',
    ],
  },
  {
    file: 'fth-technical-dd-package.pdf',
    title: 'Technical Due Diligence Package',
    subtitle: 'Infrastructure Review, Security Attestations, and Integration Documentation',
    category: 'Technical Validation',
    paras: [
      'The UnyKorn Technical Due Diligence Package is provided under NDA to prospective broker-dealer partners as part of the platform review process. The package contains: platform architecture overview, API reference documentation, security posture summary, custody integration specifications, smart contract audit references, and the platform\'s business continuity and disaster recovery summary.',
      'Security posture documentation covers: encryption at rest and in transit, key management procedures, access control architecture, rate limiting and DDoS mitigation, monitoring and incident response procedures, and the Sentinel behavioral security layer overview. Penetration testing may be arranged on a coordinated basis for partners with internal IT security mandates.',
      'SLA commitments include a 99.5% platform availability target (excluding scheduled maintenance windows), defined incident response timelines, and documented escalation contacts for production issues. Support is available at compliance@unykorn.org and partners@unykorn.org. Emergency escalation is handled by the BD partnership lead with direct contact.',
    ],
    checklist: [
      'Request technical DD package under mutual NDA',
      'Complete internal IT security review of architecture documentation',
      'Review custody integration specifications with custody operations team',
      'Evaluate business continuity plan against BD operational standards',
      'Arrange coordinated penetration test if required by internal policy',
      'Review SLA commitments against BD operational requirements',
      'Confirm support escalation contacts and response timelines',
    ],
  },
  {
    file: 'fth-regulatory-dd-checklist.pdf',
    title: 'Regulatory Due Diligence Checklist',
    subtitle: 'BD Supervisory Review of Platform Partners and Technology Vendors',
    category: 'Regulatory Validation',
    paras: [
      'FINRA and SEC guidance requires broker-dealers to conduct due diligence on technology vendors and platform partners used in securities activities. This checklist provides a framework for the sponsoring BD\'s compliance department to evaluate UnyKorn as a platform vendor in connection with a tokenized securities program.',
      'Key areas of review: confirmation that UnyKorn does not engage in broker-dealer activity (solicitation, recommendation, execution, or customer account maintenance); review of the technical services agreement for role clarity and regulatory responsibility allocation; assessment of UnyKorn\'s AML procedures as they interface with the BD\'s BSA program; and review of data handling, privacy, and record retention procedures for compliance with SEC Rules 17a-3 and 17a-4.',
      'UnyKorn maintains documentation confirming that it does not hold, control, or maintain custody of investor assets on its own behalf; that all investor relationships are owned by the sponsoring broker-dealer; and that the platform operates solely as a technology vendor. These representations are in the technical services agreement and are available in letter form for inclusion in the BD\'s supervisory file.',
    ],
    checklist: [
      'Confirm UnyKorn does not engage in BD activity via services agreement',
      'Review UnyKorn AML interface with BD BSA program',
      'Assess data handling and record retention compliance per 17a-3/17a-4',
      'Confirm no investor asset custody by UnyKorn on its own behalf',
      'Obtain vendor attestation letter for the supervisory file',
      'Review indemnification and liability allocation in services agreement',
      'Document vendor due diligence completion in the compliance manual',
    ],
  },
  {
    file: 'fth-cybersecurity-overview.pdf',
    title: 'Cybersecurity and Data Protection Overview',
    subtitle: 'Security Architecture, Incident Response, and Access Controls',
    category: 'Security Program',
    paras: [
      'UnyKorn\'s cybersecurity program is organized around the NIST Cybersecurity Framework: Identify (asset inventory, risk assessment), Protect (access controls, encryption, key management, training), Detect (monitoring, behavioral analysis, anomaly detection via Sentinel), Respond (incident response procedures, escalation contacts, forensic log access), and Recover (disaster recovery, business continuity, data backup and restoration).',
      'All investor and program data is encrypted in transit using TLS 1.3 and at rest using AES-256. API authentication uses bearer tokens with short expiry and refresh rotation. Internal access is governed by role-based access control with least-privilege enforcement. No single platform user has unrestricted access to both investor PII and financial settlement functions simultaneously.',
      'Incident response is activated within 15 minutes of a confirmed security event. The sponsoring BD\'s designated security contact is notified within 1 hour of any event affecting investor data or settlement functions. Post-incident reports are delivered within 72 hours. Regulatory notification obligations remain with the sponsoring BD; UnyKorn provides all required platform data to support timely notification.',
    ],
    checklist: [
      'Review NIST framework coverage documentation with IT security team',
      'Confirm TLS and encryption standards meet BD security requirements',
      'Review RBAC architecture and privileged access control documentation',
      'Establish incident notification contact with UnyKorn security team',
      'Document BD Reg S-P obligations and notification thresholds',
      'Test data access and audit log retrieval for forensic requirements',
      'Complete annual vendor security review per BD procedures',
    ],
  },
  {
    file: 'fth-audit-trail-overview.pdf',
    title: 'Financial Audit Trail Overview',
    subtitle: 'Record Capture, Retention Architecture, and Regulatory Access',
    category: 'Audit and Records',
    paras: [
      'UnyKorn maintains a complete, immutable audit trail for every transaction processed on the platform. Every event — investor onboarding action, subscription submission, settlement execution, distribution payment, compliance hold, and system configuration change — is written to an append-only log with timestamp, actor identity, transaction hash (for blockchain-anchored events), and data payload hash.',
      'Records are retained in the platform\'s audit vault for a minimum of 7 years, consistent with SEC Rule 17a-4 standards for broker-dealer records. The vault is write-once, read-many, with no delete capability for standard users. Cryptographic chaining of log entries ensures any tampering or gap is immediately detectable. Quarterly integrity verification runs are scheduled automatically.',
      'Regulatory access is provided within 24 hours of a regulatory examination request or legal process, subject to applicable legal review. The audit vault supports bulk export in standard formats (CSV, JSON) and structured query access for compliance team review. The sponsoring BD receives a copy of all investor-facing records via the platform\'s real-time reporting feed, satisfying independent record retention obligations.',
    ],
    checklist: [
      'Confirm audit trail format and retention period with BD compliance',
      'Set up real-time reporting feed to BD internal record system',
      'Verify 17a-4 write-once retention architecture with IT',
      'Test audit log export in standard format for compliance review',
      'Document regulatory access request procedure with UnyKorn team',
      'Schedule annual integrity verification report review',
      'Confirm audit trail scope covers all investor-facing events',
    ],
  },
]

// ─── PDF renderer ─────────────────────────────────────────────────────────────
const LETTER_W = 612
const LETTER_H = 792
const MARGIN    = 56

function renderHeaderFooter(doc) {
  const pageH = doc.page.height

  // Gold top rule
  doc.rect(MARGIN, 28, LETTER_W - MARGIN * 2, 2).fill(GOLD)

  // Logo (top-right, reserved space)
  if (fs.existsSync(LOGO_PATH)) {
    try { doc.image(LOGO_PATH, LETTER_W - MARGIN - 46, 30, { width: 46, height: 46 }) } catch (_) {}
  }

  // Firm + web (top-left)
  doc.font('Helvetica-Bold').fontSize(8).fillColor(NAVY)
     .text(FIRM.toUpperCase(), MARGIN, 35, { width: 300, lineBreak: false })
  doc.font('Helvetica').fontSize(7.5).fillColor(LIGHT)
     .text(WEB + '  |  ' + WEB_BD, MARGIN, 47, { width: 300, lineBreak: false })

  // Footer rule
  doc.rect(MARGIN, pageH - 44, LETTER_W - MARGIN * 2, 0.75).fill(RULE)

  // Footer line
  doc.font('Helvetica').fontSize(7).fillColor(LIGHT)
     .text(
       FIRM + '  \u00B7  ' + LINE1 + ', ' + LINE2 + '  \u00B7  ' + PHONE + '  \u00B7  ' + EMAIL_BD,
       MARGIN,
       pageH - 34,
       { width: LETTER_W - MARGIN * 2, align: 'center', lineBreak: false }
     )
}

function buildDoc(entry) {
  const { title, subtitle, category, paras, checklist } = entry

  const doc = new PDFDocument({
    size: 'LETTER',
    margins: { top: 92, bottom: 56, left: MARGIN, right: MARGIN },
    bufferPages: true,
    info: { Title: title, Author: FIRM, Subject: category },
  })

  // ── PAGE 1 ──────────────────────────────────────────────────────────────────

  // Navy banner
  doc.rect(0, 0, LETTER_W, 192).fill(NAVY)

  // Category tag
  doc.font('Helvetica-Bold').fontSize(7.5).fillColor(GOLD)
     .text(category.toUpperCase(), MARGIN, 98, { lineBreak: false, width: LETTER_W - MARGIN * 2 - 56, characterSpacing: 1.5 })

  // Title
  doc.font('Helvetica-Bold').fontSize(20).fillColor(WHITE)
     .text(title, MARGIN, 114, { width: LETTER_W - MARGIN * 2 - 56 })

  // Hold y after title
  const afterTitle = doc.y

  // Gold rule
  doc.rect(MARGIN, afterTitle + 4, 64, 2.5).fill(GOLD)

  // Subtitle
  doc.font('Helvetica').fontSize(10).fillColor('#9cb3cc')
     .text(subtitle, MARGIN, afterTitle + 14, { width: LETTER_W - MARGIN * 2 - 56 })

  // ── Identity block (single-column, below banner) ─────────────────────────
  const blockY = 204
  const now = new Date()
  const monthYear = now.toLocaleString('en-US', { month: 'long', year: 'numeric' })

  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(NAVY)
     .text(FIRM, MARGIN, blockY, { lineBreak: false })

  doc.font('Helvetica').fontSize(8.5).fillColor(MID)
     .text(LINE1 + ',  ' + LINE2, MARGIN, blockY + 13)
     .text(PHONE + '   |   ' + EMAIL_BD + '   |   ' + EMAIL_PART, MARGIN, blockY + 25)
     .text(WEB + '   |   ' + WEB_BD, MARGIN, blockY + 37)

  // Meta — right column inside identity block
  const col2 = LETTER_W / 2 + 16
  doc.font('Helvetica-Bold').fontSize(8).fillColor(MID)
     .text('Classification:', col2, blockY, { width: 200, lineBreak: false })
  doc.font('Helvetica').fontSize(8).fillColor(ACCENT)
     .text('Restricted — BD Only', col2, blockY + 11, { width: 200, lineBreak: false })

  doc.font('Helvetica-Bold').fontSize(8).fillColor(MID)
     .text('Date:', col2, blockY + 24, { width: 200, lineBreak: false })
  doc.font('Helvetica').fontSize(8).fillColor(MID)
     .text(monthYear, col2, blockY + 35, { width: 200, lineBreak: false })

  // Divider
  doc.rect(MARGIN, blockY + 52, LETTER_W - MARGIN * 2, 0.75).fill(RULE)

  // ── Overview section ──────────────────────────────────────────────────────
  let curY = blockY + 64

  doc.font('Helvetica-Bold').fontSize(9).fillColor(ACCENT)
     .text('OVERVIEW', MARGIN, curY, { characterSpacing: 1 })

  curY = doc.y + 2
  doc.rect(MARGIN, curY, 40, 1.5).fill(GOLD)
  curY += 8

  const textW = LETTER_W - MARGIN * 2

  paras.forEach((p, i) => {
    doc.font('Helvetica').fontSize(10).fillColor(DARK)
       .text(p, MARGIN, curY, { width: textW, align: 'justify', lineGap: 2 })
    curY = doc.y + (i < paras.length - 1 ? 9 : 0)
  })

  // ── PAGE 2: Checklist ─────────────────────────────────────────────────────
  doc.addPage()

  let cy = 96  // below header

  // Checklist header bar
  doc.rect(MARGIN, cy, LETTER_W - MARGIN * 2, 30).fill(NAVY)
  doc.font('Helvetica-Bold').fontSize(9).fillColor(WHITE)
     .text('PARTNER IMPLEMENTATION CHECKLIST', MARGIN + 12, cy + 10, { lineBreak: false, characterSpacing: 0.8 })
  cy += 40

  checklist.forEach((item, idx) => {
    // Gold checkbox
    doc.rect(MARGIN, cy + 2, 10, 10).lineWidth(1).stroke(GOLD)
    doc.font('Helvetica-Bold').fontSize(7.5).fillColor(GOLD)
       .text(String(idx + 1), MARGIN + 3, cy + 3, { lineBreak: false })

    doc.font('Helvetica').fontSize(10.5).fillColor(DARK)
       .text(item, MARGIN + 18, cy, { width: textW - 18, lineGap: 1.5 })
    cy = doc.y + 8
  })

  cy += 6

  // Rule
  doc.rect(MARGIN, cy, LETTER_W - MARGIN * 2, 0.75).fill(RULE)
  cy += 14

  // Contact block heading
  doc.font('Helvetica-Bold').fontSize(8.5).fillColor(NAVY)
     .text('NEXT STEPS — UnyKorn Capital Markets Partnership Desk', MARGIN, cy)
  cy += 16

  const ctacts = [
    ['BD Partnerships', EMAIL_PART],
    ['RWA Programs',    EMAIL_RWA],
    ['Compliance',      EMAIL_COMP],
    ['Phone',           PHONE],
    ['Platform',        WEB_BD],
    ['Main',            WEB],
    ['Office',          LINE1 + ', ' + LINE2],
  ]
  ctacts.forEach(([lbl, val]) => {
    doc.font('Helvetica-Bold').fontSize(8.5).fillColor(MID)
       .text(lbl + ':', MARGIN, cy, { width: 90, lineBreak: false })
    doc.font('Helvetica').fontSize(8.5).fillColor(DARK)
       .text(val, MARGIN + 94, cy, { width: textW - 94, lineBreak: false })
    cy += 13
  })

  cy += 10

  // Rule
  doc.rect(MARGIN, cy, LETTER_W - MARGIN * 2, 0.5).fill('#e5e7eb')
  cy += 8

  // Disclaimer
  doc.font('Helvetica').fontSize(6.5).fillColor(LIGHT)
     .text(
       'This document is provided for informational purposes only to registered broker-dealer personnel and is not an offer to sell or solicitation of an offer to buy any security. ' +
       'UnyKorn Capital Markets is a financial technology infrastructure provider and is not a registered broker-dealer, investment adviser, transfer agent, or custodian. ' +
       'All securities activities described herein are conducted by appropriately registered and licensed broker-dealer partners. ' +
       'This document is CONFIDENTIAL and intended solely for the named recipient. Unauthorized distribution is prohibited. ' +
       '\u00A9 ' + now.getFullYear() + ' ' + FIRM + '.  All rights reserved.',
       MARGIN, cy,
       { width: textW, align: 'justify', lineGap: 1 }
     )

  // ── Apply header/footer to every buffered page ───────────────────────────
  const range = doc.bufferedPageRange()
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i)
    renderHeaderFooter(doc)
  }

  return doc
}

// ─── Generate ─────────────────────────────────────────────────────────────────
let done = 0
const promises = []
for (const entry of DOCS) {
  const outPath = path.join(OUT_DIR, entry.file)
  const stream  = fs.createWriteStream(outPath)
  const doc     = buildDoc(entry)
  doc.pipe(stream)
  doc.end()
  promises.push(new Promise(resolve => stream.on('finish', resolve)))
  done++
  process.stdout.write('\r  ' + done + '/' + DOCS.length + ': ' + entry.file.padEnd(50))
}

Promise.all(promises).then(() => {
  console.log('\nDone. ' + DOCS.length + ' PDFs written to ' + OUT_DIR)
})
