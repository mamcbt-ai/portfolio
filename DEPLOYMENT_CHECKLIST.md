# Deployment Checklist — Portfolio Website

## Pre-Launch Tasks

### Website Content
- [x] Homepage with hero section
- [x] Services section (3 main offerings)
- [x] Featured projects (3 showcase projects with problem/solution/result)
- [x] Full projects archive (8 total projects)
- [x] About section
- [x] Contact section

### Project Information
- [x] DiyaLearn AI — Voice-first AI tutor (17 Indian languages)
- [x] ITR Filing Platform — India tax return preparation system
- [x] RAG PDF Chatbot — Document Q&A with OCR
- [x] Tambola Game — Interactive bingo/raffle game
- [x] Lucky Draw System — Contest management
- [x] Malayalam AI Frontend — Language AI interface
- [x] Additional projects (RAG v2, Voice AI)

### Customization Needed

**Before deploying, update these files:**

1. **`app/layout.tsx`** (Lines 60-65)
   - [ ] Update email: `mamcbt@gmail.com` → your email
   - [ ] Update GitHub URL: `github.com/azar-asr` → your GitHub
   - [ ] Update LinkedIn URL: → your LinkedIn profile
   - [ ] Update WhatsApp: `+918590841024` → your number

2. **`tailwind.config.ts`** (Optional)
   - [ ] Customize color scheme if desired
   - [ ] Adjust spacing/sizing

3. **`package.json`**
   - [ ] Update `name`, `description` if needed

4. **`app/page.tsx`** (Optional)
   - [ ] Update service descriptions if needed
   - [ ] Modify CTA text

5. **`lib/projects.ts`** (Optional)
   - [ ] Add/remove projects
   - [ ] Update stack information
   - [ ] Set `featured: true` for homepage projects

## Setup Steps

### Step 1: Local Development
```bash
npm install
npm run dev
# Open http://localhost:3000
```

### Step 2: Update Personal Information
Edit `app/layout.tsx`:
- Line 60: Change email address
- Line 63: Change GitHub URL
- Line 68: Change LinkedIn URL
- Line 80: Change WhatsApp number

### Step 3: Test Locally
- [ ] Homepage loads correctly
- [ ] All links work
- [ ] Mobile responsive
- [ ] All contact links work
- [ ] Projects display correctly

### Step 4: Prepare for Deployment

#### Option A: Vercel (Recommended)
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio.git
git push -u origin main

# 2. Deploy on Vercel
# Go to vercel.com → Connect GitHub repo → Deploy
# (Takes ~2 minutes)
```

#### Option B: Docker
```bash
# 1. Build image
docker build -t portfolio .

# 2. Test locally
docker run -p 3000:3000 portfolio

# 3. Push to registry
docker push your-registry/portfolio:latest

# 4. Deploy to cloud
```

#### Option C: Traditional Hosting
```bash
# 1. Build
npm run build

# 2. Upload `out/` directory to hosting
# (requires Next.js export configuration)
```

## Post-Deployment Tasks

### Domain Setup
- [ ] Purchase domain (Namecheap, GoDaddy, Route53)
- [ ] Point DNS to deployment (Vercel/Docker host)
- [ ] Update metadata base URL in `app/layout.tsx`
- [ ] Test domain loads correctly

### SEO & Analytics
- [ ] Verify meta tags are correct
- [ ] Test Open Graph preview (Twitter, LinkedIn)
- [ ] Set up analytics (Google Analytics, Vercel Analytics)
- [ ] Submit sitemap to Google Search Console

### Social Media
- [ ] Add portfolio link to LinkedIn
- [ ] Add portfolio link to GitHub bio
- [ ] Add portfolio link to email signature
- [ ] Share on Twitter/X
- [ ] Post announcement on relevant platforms

### Outreach
- [ ] Share portfolio link in job applications
- [ ] Include in project proposals
- [ ] Add to freelance platform profiles
- [ ] Update all professional profiles

## Performance Verification

After deployment, check:

- [ ] PageSpeed Insights: 90+ (both mobile & desktop)
- [ ] Lighthouse: 95+ overall
- [ ] Core Web Vitals: All green
- [ ] No console errors
- [ ] All images load correctly
- [ ] All links functional

## Monitoring

### Regular Maintenance
- [ ] Update projects as new work is completed
- [ ] Keep dependencies up to date: `npm update`
- [ ] Monitor analytics for traffic
- [ ] Check error logs monthly

### Scheduled Tasks
- Monthly: Update project information
- Quarterly: Refresh featured projects
- Annually: Review and redesign if needed

## Troubleshooting

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Vercel Deployment Issues
- Check Node.js version: `node -v` (must be 18+)
- Verify `package.json` scripts exist
- Check for missing environment variables
- Review build logs in Vercel dashboard

## Success Criteria

✅ Site loads in under 3 seconds
✅ All links work correctly
✅ Mobile responsive (tested on phone)
✅ Contact methods functional (email, WhatsApp)
✅ Projects display with images/descriptions
✅ SEO tags present
✅ No console errors
✅ Analytics tracking works

## Next Steps

1. **Month 1:** Build portfolio, deploy, add to profiles
2. **Month 2:** Gather feedback, update projects
3. **Month 3+:** Regular outreach using portfolio link

---

**Time to Deploy:** 30-60 minutes
**Ongoing Maintenance:** 5-10 minutes/month

Questions? Check:
- Next.js docs: nextjs.org/docs
- Vercel guide: vercel.com/docs
- Tailwind docs: tailwindcss.com/docs
