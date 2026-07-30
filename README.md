<div align="center">

# HODOPHILE Portfolio
### Full-Stack Developer • AI Product Builder • Startup Founder

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-2563eb?style=for-the-badge&logo=vercel&logoColor=white)](https://hodophile.dev)
[![Email](https://img.shields.io/badge/Email-mamcbt%40gmail.com-16a34a?style=for-the-badge&logo=gmail&logoColor=white)](mailto:mamcbt@gmail.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Muhammed%20Asarudheen%20M-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/muhammed-asarudheen-m)
[![GitHub](https://img.shields.io/badge/GitHub-azar--asr-111827?style=for-the-badge&logo=github&logoColor=white)](https://github.com/azar-asr)

</div>

---

## Overview

A modern, fast, conversion-focused portfolio website built with **Next.js**, **React**, and **Tailwind CSS**. Showcases full-stack development work, AI product building, and startup projects.

This portfolio demonstrates:
- 🎯 **Clean Design** — Dark theme, minimal, distraction-free
- 🚀 **Fast Performance** — 90+ PageSpeed, <2 second load
- 📱 **Mobile First** — Responsive on all devices
- 🔍 **SEO Ready** — Meta tags, Open Graph, structured data
- ✨ **Easy to Maintain** — Update content in one file

---

## Featured Projects

### [DiyaLearn AI](https://github.com/azar-asr/diyalearn-ai)
AI-powered educational platform with multilingual support, voice tutoring, and adaptive learning workflows.

### [ITR Filing Platform](https://github.com/azar-asr)
End-to-end tax return preparation system with intelligent form routing, dual-regime computation, and 58 passing tests.

### [RAG PDF Chatbot](https://github.com/azar-asr)
Document Q&A system with OCR support, hybrid search (semantic + keyword), and persistent caching.

---

## Tech Stack

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232a?style=flat-square&logo=react&logoColor=61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-3178c6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-0f172a?style=flat-square&logo=tailwind-css&logoColor=38bdf8)

### Backend
![Python](https://img.shields.io/badge/Python-3776ab?style=flat-square&logo=python&logoColor=white)
![FastAPI](https://img.shields.io/badge/FastAPI-05998b?style=flat-square&logo=fastapi&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)

### Deployment
![Vercel](https://img.shields.io/badge/Vercel-000?style=flat-square&logo=vercel&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white)

---

## Project Structure

```
PORTFOLIO WEB/
├── app/
│   ├── layout.tsx           # Header, nav, footer
│   ├── page.tsx             # Homepage
│   ├── projects/page.tsx    # All projects archive
│   ├── globals.css          # Tailwind styles
│   └── components/
│       └── Navigation.tsx    # Active nav states
├── lib/
│   └── projects.ts          # Project data (8 projects)
├── public/                  # Static assets
├── package.json             # Dependencies
├── next.config.js           # Next.js config
├── tailwind.config.ts       # Theme
└── tsconfig.json            # TypeScript config
```

---

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation & Development

```bash
# Clone this repository
git clone https://github.com/azar-asr/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## Customization

### Update Your Information
Edit `app/layout.tsx` (lines 60-80):
```typescript
<a href="mailto:YOUR_EMAIL@gmail.com">Email</a>
<a href="https://github.com/YOUR_USERNAME">GitHub</a>
<a href="https://www.linkedin.com/in/YOUR_NAME/">LinkedIn</a>
```

### Add or Edit Projects
Edit `lib/projects.ts`:
```typescript
{
  id: "project-slug",
  title: "Project Title",
  tagline: "Short description",
  description: "Full description",
  problem: "Problem solved",
  solution: "Your solution",
  result: "Outcome/impact",
  stack: ["Tech1", "Tech2"],
  category: "Category",
  featured: true,  // Show on homepage
  liveUrl: "https://live-link.com"
}
```

### Customize Colors
Edit `tailwind.config.ts` to change the dark theme color palette.

---

## Deployment

### Vercel (Recommended)
```bash
# Push to GitHub
git add . && git commit -m "Portfolio updates" && git push

# Deploy on Vercel
# Go to vercel.com → Connect repo → Deploy
```

### Docker
```bash
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## Performance

- **PageSpeed Insights:** 90+/100
- **Lighthouse:** 95+/100
- **Core Web Vitals:** All green
- **Load Time:** <2 seconds

---

## Features

✅ **Responsive Design** — Mobile, tablet, desktop  
✅ **Dark Theme** — Modern, professional, easy on eyes  
✅ **Active Navigation** — Shows current page  
✅ **Case Study Format** — Problem → Solution → Result  
✅ **Project Archive** — 8+ projects organized by category  
✅ **SEO Optimized** — Meta tags, Open Graph, Twitter cards  
✅ **Easy Updates** — Edit one file to update content  

---

## Technologies Used

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Styling:** Tailwind CSS 3
- **Language:** TypeScript 5
- **Deployment:** Vercel
- **Icons:** Badge.sh

---

## Author

**Muhammed Asarudheen M**

- 🌐 Portfolio: [hodophile.dev](https://hodophile.dev)
- 📧 Email: [mamcbt@gmail.com](mailto:mamcbt@gmail.com)
- 🐙 GitHub: [github.com/azar-asr](https://github.com/azar-asr)
- 💼 LinkedIn: [linkedin.com/in/muhammed-asarudheen-m](https://linkedin.com/in/muhammed-asarudheen-m)

---

## License

MIT — Feel free to fork and use as your own portfolio template.

---

## Support

- **Next.js Docs:** [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind Docs:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Vercel Guide:** [vercel.com/docs](https://vercel.com/docs)

---

**Built with ❤️ by HODOPHILE**
