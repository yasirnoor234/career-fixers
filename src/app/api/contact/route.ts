import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, target, notes, careerLevel, type } = body;

    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required fields.' },
        { status: 400 }
      );
    }

    const formType = type === 'free-review' ? 'Free Resume Review Request' : 'Direct Message / Inquiry';
    const recipientEmail = 'suban@careerfixers.com';

    // Titan Mail (Hostinger) SMTP Configuration
    const smtpHost = process.env.SMTP_HOST || 'smtp.titan.email';
    const smtpPort = parseInt(process.env.SMTP_PORT || '465', 10);
    const smtpUser = process.env.SMTP_USER || 'suban@careerfixers.com';
    const smtpPass = process.env.SMTP_PASSWORD;

    const emailSubject = `[Career Fixers] New ${formType} from ${name}`;
    const emailHtml = `
      <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background-color: #f8fafc; border-radius: 12px; border: 1px solid #e2e8f0;">
        <div style="background-color: #102241; padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 24px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px;">Career Fixers</h1>
          <p style="color: #cbd5e1; margin: 6px 0 0; font-size: 13px;">New Client Submission Alert</p>
        </div>

        <div style="background-color: #ffffff; padding: 24px; border-radius: 8px; border: 1px solid #e2e8f0;">
          <h2 style="color: #102241; font-size: 17px; margin-top: 0; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">
            Submission Details (${formType})
          </h2>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 140px; font-weight: bold;">Client Name:</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0; color: #2563eb; font-weight: 600;">
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </td>
            </tr>
            ${target ? `
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Target Role / Level:</td>
              <td style="padding: 8px 0; color: #0f172a;">${target}</td>
            </tr>` : ''}
            ${careerLevel ? `
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Career Tier:</td>
              <td style="padding: 8px 0; color: #0f172a; text-transform: capitalize;">${careerLevel}</td>
            </tr>` : ''}
            <tr>
              <td style="padding: 8px 0; color: #64748b; font-weight: bold;">Timestamp:</td>
              <td style="padding: 8px 0; color: #64748b;">${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST</td>
            </tr>
          </table>

          ${notes ? `
          <div style="margin-top: 20px; padding-top: 16px; border-top: 1px solid #f1f5f9;">
            <strong style="color: #102241; display: block; margin-bottom: 8px; font-size: 14px;">Notes / Questions:</strong>
            <div style="background-color: #f8fafc; padding: 14px; border-radius: 6px; border: 1px solid #e2e8f0; color: #334155; font-size: 14px; white-space: pre-wrap; line-height: 1.6;">${notes}</div>
          </div>` : ''}
        </div>

        <div style="text-align: center; margin-top: 20px; color: #94a3b8; font-size: 12px;">
          Sent automatically via Career Fixers Web Platform &bull; Destination: ${recipientEmail}
        </div>
      </div>
    `;

    // If SMTP credentials exist, send via Hostinger Titan Mail
    if (smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"Career Fixers Web" <${smtpUser}>`,
        to: recipientEmail,
        replyTo: email,
        subject: emailSubject,
        html: emailHtml,
      });

      return NextResponse.json({
        success: true,
        message: 'Email delivered successfully to suban@careerfixers.com',
      });
    } else {
      // Development / Fallback mode when SMTP_PASSWORD is not set yet in environment
      console.log(`[Form Submission for ${recipientEmail}]`, {
        name,
        email,
        target,
        notes,
        careerLevel,
        formType,
      });

      return NextResponse.json({
        success: true,
        message: 'Submission received. (Configure SMTP_PASSWORD in .env.local to enable live Hostinger Titan SMTP dispatch)',
      });
    }
  } catch (error: unknown) {
    console.error('Error sending email:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown server error';
    return NextResponse.json(
      { error: 'Failed to dispatch email notification.', details: errorMessage },
      { status: 500 }
    );
  }
}
