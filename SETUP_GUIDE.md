# Portfolio Setup & Launch Guide

## Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Edit Your Portfolio

**Homepage Content:**
- Edit `app/page.tsx` for hero, services, featured projects
- Update contact email in `app/layout.tsx`

**Projects:**
- Edit `lib/projects.ts` to add/modify projects
- Set `featured: true` to show on homepage

**Styling:**
- Update colors in `tailwind.config.ts`
- Modify component styles in `app/globals.css`

## Before Launching

### Checklist

- [ ] Update contact email in `app/layout.tsx`
- [ ] Verify all project information in `lib/projects.ts`
- [ ] Add project screenshots to `public/images/projects/`
- [ ] Update GitHub URL in footer
- [ ] Update LinkedIn URL in footer
- [ ] Test all links work correctly
- [ ] Test on mobile device
- [ ] Update meta description if needed

### Update Personal Links

Open `app/layout.tsx` and find:

```typescript
// Line 60-65: Update these links
<a href="mailto:mamcbt@gmail.com">  // Your email
<a href="https://github.com/azar-asr">  // Your GitHub
<a href="https://www.linkedin.com/in/muhammed-asarudheen-m/">  // Your LinkedIn
<a href="https://wa.me/918590841024">  // Your WhatsApp
```

## Deployment Options

### Option 1: Vercel (Easiest)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Select your repository
5. Click "Deploy"

Done! Your site is live at `projectname.vercel.app`

To use custom domain:
- Buy domain (Namecheap, GoDaddy, etc.)
- Add to Vercel settings → Domains
- Update DNS settings

### Option 2: Docker

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio

# Deploy to cloud (Railway, Heroku, DigitalOcean, etc.)
```

### Option 3: Traditional Hosting

```bash
# Build
npm run build

# Upload `out/` folder to your hosting provider
# (requires Next.js export configured in next.config.js)
```

## Project Structure Explained

- **app/layout.tsx** — Header, navigation, footer (appears on all pages)
- **app/page.tsx** — Homepage with hero, services, featured projects
- **app/projects/page.tsx** — All projects archive organized by category
- **lib/projects.ts** — Project data (edit here to add/remove projects)
- **app/globals.css** — Global Tailwind styles
- **tailwind.config.ts** — Color theme configuration
- **package.json** — Dependencies and scripts

## Customizing Design

### Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  zinc: {
    50: '#fafafa',
    // ... Change hex values to your preferred colors
  }
}
```

### Fonts

In `app/globals.css`, add custom font imports:

```css
@import url('https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@400;700&display=swap');

@layer base {
  body {
    @apply font-sans; /* Update font-family in tailwind config */
  }
}
```

## Adding Projects

Edit `lib/projects.ts`:

```typescript
{
  id: "unique-slug",
  title: "Project Name",
  tagline: "One-line description",
  description: "Full description of what it does",
  problem: "What problem does it solve?",
  solution: "How you solved it",
  result: "Outcome and impact",
  stack: ["Tech1", "Tech2", "Tech3"],
  category: "Category Name",
  featured: true,  // Shows on homepage if true
  liveUrl: "https://live-link.com",
  highlights: ["Feature 1", "Feature 2", "Feature 3"]
}
```

## Performance Tips

1. **Optimize images**: Use WebP format, compress SVGs
2. **Remove unused dependencies**: `npm prune`
3. **Cache assets**: Vercel does this automatically
4. **Lazy load**: Next.js handles this for you

## Security

- Never commit `.env.local` (add to `.gitignore`)
- Keep dependencies updated: `npm update`
- Review security warnings: `npm audit`

## Troubleshooting

### Port 3000 already in use?
```bash
npm run dev -- -p 3001  # Use different port
```

### Dependencies not installing?
```bash
rm -rf node_modules package-lock.json
npm install
```

### Vercel deployment fails?
- Check `npm run build` works locally
- Verify Node.js version matches Vercel (18+)
- Check for missing environment variables

## Next Steps

1. **Add your projects** — Edit `lib/projects.ts`
2. **Customize design** — Edit `tailwind.config.ts` and `app/globals.css`
3. **Update links** — Edit `app/layout.tsx` for contact info
4. **Deploy** — Push to GitHub and deploy on Vercel
5. **Promote** — Share link on LinkedIn, Twitter, email

## Support

For Next.js help: [nextjs.org/docs](https://nextjs.org/docs)
For Tailwind help: [tailwindcss.com/docs](https://tailwindcss.com/docs)
For Vercel deployment: [vercel.com/docs](https://vercel.com/docs)

---

**Happy building!** 🚀
