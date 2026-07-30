# 🚀 Action Plan: Customize & Launch Your Portfolio

Follow these steps in order. Each section takes 5-15 minutes.

---

## ✅ PHASE 1: LOCAL SETUP (10 minutes)

### Step 1: Open Terminal/PowerShell
```bash
cd C:\Users\User\Desktop\PORTFOLIO\ WEB
```

### Step 2: Install Dependencies
```bash
npm install
```
⏱️ Takes 2-3 minutes. You'll see lots of packages installing.

### Step 3: Start Development Server
```bash
npm run dev
```

**Output should show:**
```
  ▲ Next.js 15.0.0
  - Local:        http://localhost:3000
```

### Step 4: Open in Browser
- Click the link or go to `http://localhost:3000`
- You should see your dark-themed portfolio homepage
- Scroll down to see featured projects and archive

✅ **If this works, move to Phase 2**

---

## ✅ PHASE 2: CUSTOMIZE (15 minutes)

### Step 1: Update Contact Information
Edit `C:\Users\User\Desktop\PORTFOLIO WEB\app\layout.tsx`

Find these lines and update:
```typescript
// Line ~60
<a href="mailto:mamcbt@gmail.com">

// Line ~63
href="https://github.com/azar-asr"

// Line ~68
href="https://www.linkedin.com/in/muhammed-asarudheen-m/"

// Line ~80
href="https://wa.me/918590841024"
```

**Replace with YOUR info:**
- Email: Your email address
- GitHub: Your GitHub profile URL
- LinkedIn: Your LinkedIn profile URL
- WhatsApp: Your WhatsApp link (or remove if not needed)

### Step 2: Save File
- Press `Ctrl+S` to save
- Go back to browser — it should auto-refresh
- Scroll to footer and verify your links appear

### Step 3: Review Projects (Optional)
Edit `C:\Users\User\Desktop\PORTFOLIO WEB\lib\projects.ts`

If you want to change project descriptions:
- Update `title`, `tagline`, `description`
- Change `featured: true` or `false` to show/hide on homepage
- Update stack, highlights, links as needed

### Step 4: Check Homepage
- Browser should auto-refresh
- Verify all your changes appear correctly
- Test links (email, GitHub, LinkedIn, WhatsApp)

✅ **If everything looks good, move to Phase 3**

---

## ✅ PHASE 3: PREPARE FOR DEPLOYMENT (5 minutes)

### Step 1: Stop Development Server
In terminal, press: `Ctrl+C`

### Step 2: Build for Production
```bash
npm run build
```

**You should see:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages (5/5)
```

If there are **red errors**, something is wrong. Share the error message.

### Step 3: Create GitHub Repository

1. Go to **github.com** → Click "+" → "New repository"
2. Name it: `portfolio` (or similar)
3. Description: "My freelancer portfolio"
4. Make it **Public**
5. Click "Create repository"

### Step 4: Push Code to GitHub
```bash
cd C:\Users\User\Desktop\PORTFOLIO\ WEB

git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

✅ **When done, move to Phase 4**

---

## ✅ PHASE 4: DEPLOY ON VERCEL (5 minutes)

### Step 1: Go to Vercel.com
- Go to **vercel.com**
- Click "Sign Up" or "Log In"
- Sign in with GitHub (easiest option)

### Step 2: Import Project
- Click "Add New..." → "Project"
- Select your `portfolio` repository
- Click "Import"

### Step 3: Configure & Deploy
- Leave all settings default
- Click "Deploy"
- Wait 2-3 minutes

**You'll see a live URL like:** `portfolio-xyz123.vercel.app`

✅ **Your portfolio is now LIVE!**

### Step 4: Test Live Site
- Open the Vercel URL in browser
- Verify homepage loads
- Test all links work
- Check on mobile device

---

## ✅ PHASE 5: SETUP CUSTOM DOMAIN (Optional, 5 minutes)

### If You Want a Custom Domain:

1. **Buy domain** (Namecheap, GoDaddy, Route53)
   - Budget: $5-15/year
   - Good domain examples: `yourname.dev`, `yourname-dev.com`

2. **Add to Vercel:**
   - Go to Vercel Dashboard → Settings → Domains
   - Add your custom domain
   - Follow DNS instructions

3. **Update `app/layout.tsx`:**
   - Line 18: Change `https://mamdev.site` to your domain
   - Save and push to GitHub
   - Vercel auto-deploys (2 minutes)

---

## ✅ PHASE 6: PROMOTE & SHARE (10 minutes)

### Step 1: Update LinkedIn
1. Go to your LinkedIn profile
2. Edit "About" section
3. Add: `Portfolio: [your-vercel-url or custom domain]`
4. Update headline if needed

### Step 2: Update GitHub
1. Go to your GitHub profile
2. Edit Bio/About
3. Add portfolio link

### Step 3: Update Email Signature
Add to your email signature:
```
Portfolio: [your-vercel-url]
GitHub: github.com/yourname
LinkedIn: linkedin.com/in/yourname
```

### Step 4: Share With Network
- Post on LinkedIn: "Launched my new portfolio! Check it out: [link]"
- Send to friends/mentors
- Add to job application materials

---

## ✅ FINAL CHECKLIST

Before calling it done, verify:

- [ ] Local version works (`npm run dev`)
- [ ] Code pushed to GitHub
- [ ] Deployed on Vercel (live URL works)
- [ ] Custom domain set up (if desired)
- [ ] All links work (email, GitHub, LinkedIn, WhatsApp)
- [ ] Mobile responsive (tested on phone)
- [ ] LinkedIn updated with portfolio link
- [ ] GitHub bio updated
- [ ] Email signature updated

---

## 🎯 QUICK REFERENCE COMMANDS

```bash
# Start development
npm run dev

# Build for production
npm run build

# Deploy to GitHub
git add .
git commit -m "Update portfolio"
git push

# (Vercel auto-deploys on git push)
```

---

## ⏱️ TOTAL TIME

| Phase | Time |
|-------|------|
| Phase 1: Setup | 10 min |
| Phase 2: Customize | 15 min |
| Phase 3: Prepare | 5 min |
| Phase 4: Deploy | 5 min |
| Phase 5: Domain (optional) | 5 min |
| Phase 6: Promote | 10 min |
| **TOTAL** | **~50 minutes** |

---

## 🆘 TROUBLESHOOTING

**"npm install" fails?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**"npm run dev" won't start?**
- Make sure you're in the right folder
- Check no other app is using port 3000

**Vercel deployment fails?**
- Check build logs in Vercel dashboard
- Verify `npm run build` works locally
- Ensure Node.js version 18+

**Links not updating after edit?**
- Save the file (Ctrl+S)
- Browser should auto-refresh
- If not, refresh manually (F5)

---

## 💡 PRO TIPS

1. **Save frequently** — Auto-save isn't always on
2. **Test on mobile** — Use your phone to test responsive design
3. **Share early** — Don't wait for perfection; iterate based on feedback
4. **Update regularly** — Add new projects as you complete them
5. **Monitor analytics** — See which projects generate interest

---

## 🚀 YOU'RE READY!

Everything is set up. Just follow the steps above and your portfolio will be live in ~1 hour.

**Questions?** Check the docs:
- `README.md` — Setup overview
- `SETUP_GUIDE.md` — Detailed customization
- `DEPLOYMENT_CHECKLIST.md` — Pre-launch verification
- `PORTFOLIO_SUMMARY.md` — Complete overview

**Let's go! 🎉**
