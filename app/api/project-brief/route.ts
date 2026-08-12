import { NextRequest, NextResponse } from 'next/server';

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const OWNER_EMAIL = 'mamcbt@gmail.com';

interface ProjectBriefData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
  currentStatus: string;
  challenges: string;
  phone: string;
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
    const body: ProjectBriefData = await request.json();
    const { name, email, company, projectType, description, budget, timeline, currentStatus, challenges, phone } = body;

    // Validate required fields
    if (!name || !email || !projectType || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send confirmation email to user
    const userConfirmationHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e293b;">Project Brief Received, ${name}! 📋</h2>
        <p style="color: #64748b; font-size: 16px; line-height: 1.6;">
          Thanks for sharing your project details. I've received your brief and will review it carefully.
        </p>

        <div style="background: #f1f5f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e293b; margin-top: 0;">What happens next:</h3>
          <ol style="color: #64748b; line-height: 1.8;">
            <li>I review your project brief thoroughly (usually within 24 hours)</li>
            <li>I clarify any questions about scope, timeline, or technical approach</li>
            <li>I send you a detailed proposal with cost estimate and timeline</li>
            <li>If everything aligns, we schedule a kickoff call</li>
          </ol>
        </div>

        <div style="border: 1px solid #e2e8f0; padding: 15px; border-radius: 6px; background: #f8fafc;">
          <p style="color: #64748b; margin: 0;"><strong>Project Type:</strong> ${projectType}</p>
          <p style="color: #64748b; margin: 8px 0 0 0;"><strong>Timeline:</strong> ${timeline}</p>
          <p style="color: #64748b; margin: 8px 0 0 0;"><strong>Budget Range:</strong> ${budget}</p>
        </div>

        <p style="color: #94a3b8; font-size: 14px; margin-top: 20px;">
          In the meantime, feel free to share any additional context, design files, or technical specs. Everything helps me prepare a better proposal.
        </p>

        <p style="color: #94a3b8; font-size: 12px; margin-top: 20px;">
          Questions? Reply to this email anytime.
        </p>
      </div>
    `;

    // Send notification email to owner
    const ownerNotificationHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1e293b;">New Project Brief 📋</h2>
        <p style="color: #64748b;">
          <strong>Client Name:</strong> ${name}<br>
          <strong>Email:</strong> ${email}<br>
          <strong>Phone:</strong> ${phone || 'Not provided'}<br>
          <strong>Company:</strong> ${company || 'Not provided'}<br>
          <strong>Project Type:</strong> ${projectType}<br>
          <strong>Budget Range:</strong> ${budget}<br>
          <strong>Timeline:</strong> ${timeline}<br>
          <strong>Current Status:</strong> ${currentStatus || 'Not specified'}<br>
        </p>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 20px 0;">

        <h3 style="color: #1e293b;">Project Description:</h3>
        <p style="color: #64748b; white-space: pre-wrap;">${description}</p>

        ${challenges ? `
          <h3 style="color: #1e293b; margin-top: 20px;">Key Challenges:</h3>
          <p style="color: #64748b; white-space: pre-wrap;">${challenges}</p>
        ` : ''}
      </div>
    `;

    // Send confirmation email to user
    await sendEmail(
      email,
      'Project Brief Received ✅',
      userConfirmationHTML
    );

    // Send notification to owner
    await sendEmail(
      OWNER_EMAIL,
      `New Project Brief: ${projectType} from ${name}`,
      ownerNotificationHTML
    );

    return NextResponse.json(
      {
        success: true,
        message: 'Project brief received. Confirmation email sent.'
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in project brief submission:', error);
    return NextResponse.json(
      { error: 'Failed to process project brief' },
      { status: 500 }
    );
  }
}
