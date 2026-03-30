import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, firm, crd, email, phone, type, interests, message } = body

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required.' }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? 587),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const interestsList = Array.isArray(interests) ? interests.join(', ') : (interests ?? 'Not specified')

    // Internal notification to the team
    await transporter.sendMail({
      from: `"${process.env.CONTACT_FROM_NAME ?? 'FTH Capital Markets Site'}" <${process.env.CONTACT_FROM_EMAIL}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: email,
      subject: `[BD Inquiry] ${name} — ${firm ?? 'No Firm'} — FTH Capital Markets`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; background: #09090d; color: #e5e5ef; padding: 32px; border-radius: 8px;">
          <h2 style="color: #2563eb; font-size: 18px; margin: 0 0 24px;">New Broker-Dealer Inquiry</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 8px 0; color: #6b7280; width: 140px;">Name</td><td style="padding: 8px 0; font-weight: 600;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Firm</td><td style="padding: 8px 0;">${firm ?? '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">CRD #</td><td style="padding: 8px 0; font-family: monospace;">${crd ?? '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Email</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #3b82f6;">${email}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Phone</td><td style="padding: 8px 0;">${phone ?? '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Firm Type</td><td style="padding: 8px 0;">${type ?? '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #6b7280;">Interests</td><td style="padding: 8px 0;">${interestsList}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #111118; border-radius: 6px; border-left: 3px solid #2563eb;">
            <div style="color: #6b7280; font-size: 12px; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.08em;">Message</div>
            <div style="font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
          </div>
          <div style="margin-top: 24px; font-size: 11px; color: #4b5563;">Submitted via FTH Capital Markets — brokerdealer.unykorn.org</div>
        </div>
      `,
    })

    // Auto-reply to the broker dealer
    await transporter.sendMail({
      from: `"${process.env.CONTACT_FROM_NAME ?? 'FTH Capital Markets'}" <${process.env.CONTACT_FROM_EMAIL}>`,
      to: email,
      subject: 'FTH Capital Markets — We received your inquiry',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; background: #09090d; color: #e5e5ef; padding: 32px; border-radius: 8px;">
          <h2 style="color: #2563eb; font-size: 18px; margin: 0 0 16px;">Thank you, ${name}</h2>
          <p style="font-size: 14px; line-height: 1.7; color: #9ca3af; margin: 0 0 20px;">
            We have received your inquiry at <strong style="color: #e5e5ef;">FTH Capital Markets</strong> and a member of our institutional team will be in touch within one business day.
          </p>
          <div style="padding: 20px; background: #111118; border-radius: 6px; border-left: 3px solid #c9a84c; margin-bottom: 24px;">
            <div style="font-size: 13px; color: #c9a84c; font-weight: 600; margin-bottom: 8px;">While you wait, download our materials:</div>
            <ul style="margin: 0; padding: 0 0 0 16px; list-style: disc; color: #9ca3af; font-size: 13px; line-height: 2;">
              <li>Platform Overview &amp; Capabilities Deck</li>
              <li>RWA Tokenization Framework</li>
              <li>Stablecoin Settlement Infrastructure Guide</li>
              <li>Broker-Dealer Partnership Program</li>
            </ul>
            <p style="margin: 12px 0 0; font-size: 13px; color: #6b7280;">Visit: <a href="https://brokerdealer.unykorn.org/downloads" style="color: #3b82f6;">brokerdealer.unykorn.org/downloads</a></p>
          </div>
          <p style="font-size: 12px; color: #4b5563; margin: 0;">
            FTH Capital Markets · FINRA Member · SEC Registered Broker-Dealer · ATS Licensed<br />
            This is an automated confirmation. Do not reply to this message.
          </p>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('Contact email error:', err)
    return NextResponse.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
