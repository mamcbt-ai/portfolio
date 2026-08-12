# HODOPHILE Measurement Dashboard
## Weekly Metrics Tracking

### Setup

1. **Google Analytics 4 Account**
   - Create account at https://analytics.google.com
   - Add your portfolio URL
   - Get GA4 Measurement ID (starts with `G-`)

2. **Add GA4 to Portfolio**
   - Replace `G-XXXXXXXXXX` in `app/components/AnalyticsSetup.tsx`
   - Import `Analytics` component in `app/layout.tsx`
   - Deploy

3. **Set up Custom Events** (in GA4 dashboard)
   ```
   - cta_click: When user clicks CTA button
   - form_submit: When user submits form
   - case_study_view: When user views case study
   - audit_application: When user applies for free audit
   - project_brief_submit: When user submits project brief
   ```

---

## Weekly Dashboard Metrics

Track these metrics **every Monday** for 4 weeks:

### 1. **Traffic & Discovery**

| Metric | How to Find | Target | What It Means |
|--------|------------|--------|---------------|
| **Sessions** | GA4 → Overview → Sessions | 20-50/week | How many people visited |
| **Users** | GA4 → Overview → Users | 15-40/week | Unique visitors |
| **Avg Session Duration** | GA4 → Overview | >1 min | People spending time |
| **Bounce Rate** | GA4 → Overview | <50% | Less people leaving immediately |

### 2. **Engagement & Interest**

| Metric | How to Find | Target | What It Means |
|--------|------------|--------|---------------|
| **CTA Clicks (Pricing)** | GA4 → Events → cta_click | 5-15/week | Pricing interest |
| **CTA Clicks (Contact)** | GA4 → Events → cta_click | 10-20/week | Contact intent |
| **Case Study Views** | GA4 → Events → case_study_view | 10-25/week | Proof reading |
| **Avg Pages/Session** | GA4 → Overview | >2 pages | Exploration depth |

### 3. **Lead Generation**

| Metric | How to Find | Target | What It Means |
|--------|------------|--------|---------------|
| **Free Audit Apps** | GA4 → Events → audit_application | 2-5/week | Qualified leads |
| **Project Brief Subs** | GA4 → Events → project_brief_submit | 1-3/week | Sales-qualified leads |
| **Contact Form Subs** | GA4 → Events → form_submit | 2-5/week | All inquiries |

### 4. **Conversion & ROI**

| Metric | How to Find | Calculate | Target |
|--------|------------|-----------|---------|
| **CTA Click Rate** | CTA Clicks / Sessions | (15 clicks / 40 sessions) × 100 | >25% |
| **Form Completion Rate** | Completed Subs / Form Views | (3 subs / 5 views) × 100 | >60% |
| **Qualified Lead Rate** | Audits + Briefs / All Contacts | (3 + 2) / 7 | >70% |
| **Case Study Impact** | Subs after CS view / Total Subs | If 2 of 3 subs viewed CS first | Track correlation |

### 5. **Content Performance**

| Page | Sessions | Avg Duration | Bounce % | Best Day |
|------|----------|--------------|----------|----------|
| Homepage | - | - | - | - |
| /pricing | - | - | - | - |
| /free-audit | - | - | - | - |
| /project-brief | - | - | - | - |
| /case-studies/diyalearn | - | - | - | - |
| /projects | - | - | - | - |

---

## Weekly Review Template

**Week of: [DATE]**

### Traffic Summary
- Sessions: **X** (↑/↓ vs last week)
- New Users: **X**
- Bounce Rate: **X%**

### Lead Summary
- Free Audit Apps: **X** (qual leads)
- Project Brief Subs: **X** (sales leads)
- Contact Form Subs: **X**
- **Total Qualified Leads: X**

### Conversion Metrics
- CTA Click Rate: **X%** (target: >25%)
- Form Completion: **X%** (target: >60%)
- Qualified Leads Rate: **X%** (target: >70%)

### Top Performers
- Best Page: **[PAGE]** (X sessions, Y bounce rate)
- Best CTA: **[CTA]** (X clicks)
- Best Day: **[DAY]** (X sessions)

### Observations & Changes
1. What worked?
2. What didn't?
3. What to improve next week?

### Action Items
- [ ] Action 1
- [ ] Action 2
- [ ] Action 3

---

## Event Tracking Implementation

Events are pre-configured in `app/components/AnalyticsSetup.tsx`:

```typescript
// Track CTA clicks
trackCTAClick('pricing_section');

// Track form submissions  
trackFormSubmission('project_brief');

// Track case study views
trackCaseStudyView('DiyaLearn AI');

// Track free audit applications
trackAuditApplication();

// Track project brief submissions
trackProjectBriefSubmit();
```

Use these in your components when users interact.

---

## Expected Results (30 Days)

**Week 1:** Baseline (establish numbers)  
**Week 2:** Small improvements expected (+10-15% traffic)  
**Week 3:** Momentum building (+20-30% traffic, qualified leads start)  
**Week 4:** Plateau or acceleration (depends on LinkedIn outreach)

**Conservative target for Month 1:**
- 150-200 sessions
- 5-8 free audit applications
- 2-4 project briefs
- 2-3 qualified proposals

---

## Tools Needed

1. **Google Analytics 4** (FREE) — Set up account
2. **Google Sheets** — Copy template above, track weekly
3. **Calendly** (if not using) — Track 15-min call bookings
4. **Email client** — Track "free audit" email opens/clicks

---

## Next: LinkedIn Launch

Once GA4 is set up and tracking:

1. Share portfolio on LinkedIn (tag 10 relevant people)
2. Post about free audit offer
3. Reach out to past clients for testimonials
4. Respond to every inquiry within 4 hours

Track how LinkedIn traffic converts to leads.

---

**Update this dashboard every Monday for 4 weeks. Use data to optimize.**
