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
      "Many learners need better explanations tailored to their level, support in more than one language, easier access to digital tools, and more affordable learning experiences. Existing platforms don't serve non-English speakers well.",
    solution:
      "Built a full-stack AI platform with voice-first interface supporting 17 Indian languages. Features AI tutor, lessons, quizzes, exam prep, career tools, voice interaction workflows, and offline capabilities.",
    result:
      "Live app at diyalearn-frontend.vercel.app with 17 language support, real-time voice tutoring, complete exam prep ecosystem, and accessibility features for underserved learners.",
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
      "Voice input/output with word-by-word highlighting",
      "UPSC, SSC, Banking, NEET, JEE exam prep",
      "AI mock interviews with scoring",
      "Offline-capable PWA",
    ],
  },
  {
    id: "itr-filing",
    title: "ITR Filing Platform",
    tagline: "Complete India ITR preparation and filing system",
    description:
      "End-to-end ITR (Income Tax Return) preparation, validation, and filing platform for individual taxpayers. Includes form eligibility engine, computation with dual regimes, validation with confidence scoring, and PDF/JSON generation.",
    problem:
      "Individual taxpayers in India struggle with complex ITR forms, eligibility rules, and manual calculations. Existing tools lack intelligent routing and validation.",
    solution:
      "Built a complete FastAPI backend with 8 specialized engines: eligibility (intelligent form routing), computation (dual regime), validation (confidence-scored), and 4 form generators (ITR-1/2/3/4). 58 passing tests, 35 PostgreSQL schemas, DPDP-aware.",
    result:
      "Production-ready platform with working API, full test suite, sample demo, and comprehensive blueprints.",
    stack: ["FastAPI", "Python", "PostgreSQL", "React", "Streamlit"],
    category: "FinTech/SaaS",
    featured: true,
    highlights: [
      "Intelligent ITR form eligibility engine",
      "Dual-regime computation with marginal relief",
      "58 passing API tests",
      "Form 16 PDF parser with confidence scoring",
      "ITR-1/2/3/4 JSON generators",
    ],
  },
  {
    id: "rag-chatbot",
    title: "RAG PDF Chatbot",
    tagline: "Intelligent document chatbot with OCR and semantic search",
    description:
      "Retrieval-Augmented Generation chatbot for querying PDF documents including scanned/image-based PDFs. Uses hybrid search (BM25 + FAISS), Tesseract OCR, and OpenAI embeddings for accurate document-grounded answers.",
    problem:
      "Users need to search and extract information from multiple PDFs, including scanned documents. Traditional search tools lack semantic understanding.",
    solution:
      "Built a full-stack Streamlit app combining text PDFs, OCR for scanned documents, hybrid search (keyword + semantic), persistent FAISS indexes, and cite-sources functionality.",
    result:
      "Working app supporting mixed PDF types, multi-page citation, persistent caching, and downloadable chat history.",
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
      "Text and scanned PDF support",
      "Hybrid semantic + keyword search",
      "Persistent FAISS index caching",
      "Page-number citations",
      "Downloadable chat history",
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
