# Resend Email Automation Setup

## Overview
Automated email responses for free audit form signups. Users get instant confirmation + 3-day nurture sequence.

## Setup Steps

### 1. Create Resend Account
- Go to https://resend.com
- Sign up (free tier: 100 emails/day)
- Verify your email domain

### 2. Get API Key
- Dashboard → API Keys
- Copy your API key (starts with `re_`)

### 3. Add to Environment Variables
- Create `.env.local` file in project root
- Add: `RESEND_API_KEY=re_your_key_here`

**Example .env.local:**
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://portfolio-lzx3rte36-hodophile.vercel.app
```

### 4. Deploy to Vercel
- Push to GitHub
- Vercel auto-deploys
- Add `RESEND_API_KEY` to Vercel environment variables:
  - Dashboard → Settings → Environment Variables
  - Add `RESEND_API_KEY` with your API key

### 5. Test
- Visit `/free-audit`
- Fill form and submit
- Check email for confirmation message
- Check console for any errors

## Email Flow

**On form submission:**
1. User receives confirmation email with:
   - Application confirmation
   - Next steps (3 time slots incoming)
   - 3 quick development tips

2. Owner receives notification with:
   - Applicant details
   - Project description
   - Industry

## API Endpoint

**Route:** `POST /api/audit-signup`

**Request body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "projectDescription": "Building an AI chatbot...",
  "industry": "AI/SaaS"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Signup successful. Confirmation email sent."
}
```

## Troubleshooting

**Emails not sending?**
- Check API key is correct
- Verify `.env.local` has `RESEND_API_KEY`
- On Vercel, check environment variables are set
- Check console for error messages

**Rate limited?**
- Free tier: 100 emails/day
- Upgrade for higher limits at resend.com

**Test mode:**
- Use `onboarding@resend.dev` as "from" address during testing
- Switch to verified domain email for production

## Future Enhancements

1. **Email sequence automation:**
   - Day 0: Confirmation + tips
   - Day 2: Success story (DiyaLearn / ITR)
   - Day 5: Engagement (pricing packages)

2. **Tracking:**
   - Monitor email open rates
   - Track conversion to paid engagement
   - Measure funnel performance

3. **Personalization:**
   - Customize emails based on industry
   - Recommend relevant case studies
   - Dynamic pricing examples

---

**Cost:** Free tier covers ~3K free audits/month. Upgrade as needed.
