export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem?: string;
  solution?: string;
  result?: string;
  stack: string[];
  category: string;
  featured: boolean;
  liveUrl?: string;
  demoUrl?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    id: "diyalearn",
    title: "DiyaLearn AI",
    tagline: "AI-powered learning platform for accessible, adaptive, multilingual education",
    description:
      "A free, voice-first AI learning platform designed to make learning personalized, accessible, and multilingual. Features voice/text/image doubt-solving, adaptive lessons, quizzes, exam prep, and career guidance across 17 Indian languages.",
    problem:
      "50M+ Indian students lack access to personalized tutoring in regional languages. English-only platforms exclude non-English speakers. Existing solutions are expensive, require constant internet, and don't adapt to individual learning levels.",
    solution:
      "Built a full-stack AI platform with voice-first interface supporting 17 Indian languages. Features Groq LLM for real-time responses, FastAPI backend with adaptive learning engine, offline-capable PWA, and integrated exam prep (UPSC/SSC/NEET/JEE).",
    result:
      "Live in production (diyalearn-frontend.vercel.app). Ships weekly. Voice latency <2s. Tested on both offline & limited connectivity. Supports complete exam prep workflow with real-time doubt resolution.",
    stack: [
      "Next.js",
      "React",
      "FastAPI",
      "Groq LLM",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "Railway",
    ],
    category: "AI/Education",
    featured: true,
    liveUrl: "https://diyalearn-frontend.vercel.app",
    highlights: [
      "17 Indian languages with native script support",
      "Voice I/O with <2s latency",
      "Offline-capable progressive web app",
      "Adaptive lesson personalization",
      "UPSC, SSC, Banking, NEET, JEE exam prep built-in",
      "Weekly feature shipping",
    ],
  },
  {
    id: "itr-filing",
    title: "ITR Filing Platform",
    tagline: "Complete India ITR preparation and filing system",
    description:
      "End-to-end ITR (Income Tax Return) preparation, validation, and filing platform for individual taxpayers. Includes form eligibility engine, computation with dual regimes, validation with confidence scoring, and PDF/JSON generation.",
    problem:
      "10M+ individual taxpayers in India manually struggle with complex ITR forms, eligibility rules, and dual-regime calculations. Manual errors cost time and penalties. Existing tools lack intelligent routing and validation.",
    solution:
      "Built FastAPI backend with 8 specialized engines: eligibility router (intelligent form selection), computation (dual regime with marginal relief), validation (confidence-scored), and 4 form generators. 58 passing tests. 35 PostgreSQL schemas. DPDP-compliant.",
    result:
      "Production-ready API deployed with 99%+ accuracy on test cases. Handles Form 16 PDF parsing, dual-regime computation, and generates valid ITR-1/2/3/4 JSON. Backed by comprehensive test suite.",
    stack: ["FastAPI", "Python", "PostgreSQL", "React", "Streamlit"],
    category: "FinTech/SaaS",
    featured: true,
    highlights: [
      "Intelligent ITR form eligibility engine (99%+ accuracy)",
      "Dual-regime computation with marginal relief calculations",
      "58 passing unit + integration tests",
      "Form 16 PDF parser with confidence scoring",
      "Auto-generates valid ITR-1/2/3/4 JSON + PDF",
    ],
  },
  {
    id: "rag-chatbot",
    title: "RAG PDF Chatbot",
    tagline: "Intelligent document chatbot with OCR and semantic search",
    description:
      "Retrieval-Augmented Generation chatbot for querying PDF documents including scanned/image-based PDFs. Uses hybrid search (BM25 + FAISS), Tesseract OCR, and OpenAI embeddings for accurate document-grounded answers.",
    problem:
      "Knowledge workers spend hours manually searching through PDFs and scanned documents. Traditional search tools lack semantic understanding. Users can't cite sources or verify answers against original documents.",
    solution:
      "Built Streamlit app combining text PDFs + OCR for scanned docs, hybrid search (BM25 keyword + FAISS semantic), persistent vector index caching, and page-level citations. Supports multi-document queries with source verification.",
    result:
      "Working app supporting 95%+ OCR accuracy on scanned docs, <500ms query response time, persistent index caching (no re-processing), and downloadable chat history with source citations.",
    stack: [
      "Streamlit",
      "LangChain",
      "FAISS",
      "OpenAI",
      "Tesseract OCR",
      "rank-bm25",
    ],
    category: "AI/Productivity",
    featured: true,
    highlights: [
      "Text + scanned PDF support with 95%+ OCR accuracy",
      "Hybrid search (keyword + semantic) for precision",
      "Persistent FAISS vector cache (instant re-queries)",
      "Page-level citations with source verification",
      "Downloadable chat history with references",
    ],
  },
  {
    id: "tambola",
    title: "Tambola Game",
    tagline: "Interactive Tambola/Bingo game with live drawing",
    description:
      "Full-featured Tambola (Indian Bingo) game with real-time number drawing, ticket generation, and winner detection. Built as both web app and Electron desktop application.",
    problem:
      "Traditional Tambola games require manual number drawing and ticket management. Need a digital solution for modern gameplay.",
    solution:
      "Built an interactive web app with HTML/CSS/JavaScript frontend, auto-number generation, live drawing interface, and winner tracking. Packaged as Electron app for Windows desktop.",
    result:
      "Working game playable in browser and as Windows application with full game flow support.",
    stack: ["HTML", "CSS", "JavaScript", "Electron", "Node.js"],
    category: "Games/Entertainment",
    featured: false,
    highlights: [
      "Automatic number drawing",
      "Real-time ticket management",
      "Winner detection system",
      "Windows executable packaging",
      "Full game flow support",
    ],
  },
  {
    id: "lucky-draw",
    title: "Lucky Draw System",
    tagline: "Automated raffle and lucky draw management",
    description:
      "Lucky draw and raffle management system for running contests, giveaways, and prize distributions. Handles participant management, random selection, and winner announcement.",
    stack: ["JavaScript", "Web Technologies"],
    category: "Games/Entertainment",
    featured: false,
    highlights: [
      "Automated random selection",
      "Participant management",
      "Winner tracking",
      "Prize distribution",
    ],
  },
  {
    id: "malayalam-ai-frontend",
    title: "Malayalam AI Frontend",
    tagline: "Modern Next.js frontend for Malayalam AI assistant",
    description:
      "Clean, responsive Next.js frontend built for Malayalam language AI applications. Demonstrates modern React patterns, component architecture, and deployment on Vercel.",
    problem:
      "Need a scalable, maintainable frontend for Malayalam language AI services.",
    solution:
      "Built with Next.js, optimized for performance and accessibility with automatic font loading and responsive design.",
    result: "Production-ready frontend with clean architecture.",
    stack: ["Next.js", "React", "Vercel", "Tailwind CSS"],
    category: "Frontend",
    featured: false,
    highlights: [
      "Next.js App Router",
      "Responsive design",
      "Font optimization",
      "Vercel deployment ready",
    ],
  },
  {
    id: "rag2-project",
    title: "RAG Project v2",
    tagline: "Advanced RAG system with improved retrieval",
    description:
      "Enhanced version of RAG system with improved document parsing, better relevance ranking, and multi-document analysis capabilities.",
    stack: ["Python", "LangChain", "FAISS", "OpenAI"],
    category: "AI",
    featured: false,
  },
  {
    id: "malayalam-voice-ai",
    title: "Malayalam Voice AI",
    tagline: "Voice interface for Malayalam language AI",
    description:
      "Speech-enabled interface for Malayalam language AI assistant. Supports voice input/output with natural conversation flow.",
    stack: ["React", "Web Audio API", "Speech Recognition", "TTS"],
    category: "AI/Voice",
    featured: false,
  },
];
