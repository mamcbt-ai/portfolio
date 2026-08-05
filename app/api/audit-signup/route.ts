import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const OWNER_EMAIL = 'mamcbt@gmail.com';

interface AuditSignupData {
  name: string;
  email: string;
  projectDescription: string;
  industry: string;
}

async function sendEmail(to: string, subject: string, html: string) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: `HODOPHILE <onboarding@resend.dev>`,
      to,
      subject,
      html,
    }),
  });

  if (!response.ok) {
    throw new Error(`Failed to send email: ${response.statusText}`);
  }

  return response.json();
}

export async function POST(request: NextRequest) {
  try {
    const body: AuditSignupData = await request.json();
    const { name, email, projectDescription, industry } = body;

    // Validate required fields
    if (!name || !email || !projectDescription) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send confirmation email to user
    const userConfirmationHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e293b;">Thanks for applying, ${name}! 🎯</h2>
        <p style="color: #64748b; font-size: 16px; line-height: 1.6;">
          I've received your submission for a free project audit. I'm excited to review your project and help you identify quick wins and architectural improvements.
        </p>

        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">What happens next:</h3>
          <ol style="color: #64748b; line-height: 1.8;">
            <li>I review your project details (usually within 24 hours)</li>
            <li>You'll receive an email with 5 available time slots</li>
            <li>We have a focused 30-minute video call (Zoom)</li>
            <li>I send you 3-5 actionable recommendations within 24 hours</li>
          </ol>
        </div>

        <p style="color: #64748b; font-size: 14px;">
          <strong>Your project:</strong> ${industry || 'Not specified'}<br>
          <strong>Description:</strong> ${projectDescription.substring(0, 150)}...
        </p>

        <div style="border-top: 1px solid #e2e8f0; margin-top: 30px; padding-top: 20px;">
          <p style="color: #94a3b8; font-size: 12px;">
            In the meantime, here are 3 quick tips to improve your development velocity:
          </p>
          <ul style="color: #64748b; font-size: 14px; line-height: 1.8;">
            <li><strong>Start with architecture:</strong> Spend 1 day designing before coding. Saves weeks of rework.</li>
            <li><strong>Test early:</strong> Write tests as you go, not after. Prevents bugs from compounding.</li>
            <li><strong>Ship small:</strong> Deploy features weekly. Feedback beats perfection.</li>
          </ul>
        </div>

        <p style="color: #94a3b8; font-size: 12px; margin-top: 20px;">
          Questions? Reply to this email anytime.
        </p>
      </div>
    `;

    // Send notification email to owner
    const ownerNotificationHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e293b;">New Free Audit Signup 🎯</h2>
        <p style="color: #64748b;">
          <strong>Name:</strong> ${name}<br>
          <strong>Email:</strong> ${email}<br>
          <strong>Industry:</strong> ${industry || 'Not specified'}<br>
          <strong>Project Description:</strong><br>
          ${projectDescription}
        </p>
      </div>
    `;

    // Send confirmation email to user
    await sendEmail(
      email,
      'Free Project Audit - Application Confirmed ✅',
      userConfirmationHTML
    );

    // Send notification to owner
    await sendEmail(
      OWNER_EMAIL,
      `New Free Audit Signup: ${name}`,
      ownerNotificationHTML
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Signup successful. Confirmation email sent.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in audit signup:', error);
    return NextResponse.json(
      { error: 'Failed to process signup' },
      { status: 500 }
    );
  }
}
