import Link from 'next/link';

export const metadata = {
  title: 'DiyaLearn AI - Full-Stack AI Learning Platform',
  description: 'Case study: Building an AI-powered learning platform for 50K+ learners across 17 Indian languages.',
};

export default function DiyaLearnCaseStudy() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container-max max-w-4xl">
        {/* Header */}
        <div className="space-y-8 mb-16">
          <Link href="/projects" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Back to Projects
          </Link>

          <div className="space-y-4">
            <div className="inline-block">
              <span className="badge">AI/Education • LIVE</span>
            </div>
            <h1 className="heading-lg">DiyaLearn AI</h1>
            <p className="text-xl text-zinc-300">
              Voice-first AI learning platform for accessible, adaptive, multilingual education
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid gap-6 md:grid-cols-4 p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-lg">
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">50K+</div>
              <p className="text-sm text-zinc-400">Active learners</p>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">17</div>
              <p className="text-sm text-zinc-400">Languages supported</p>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">&lt;2s</div>
              <p className="text-sm text-zinc-400">Voice latency</p>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">4.8/5</div>
              <p className="text-sm text-zinc-400">App rating</p>
            </div>
          </div>
        </div>

        {/* Problem */}
        <section className="space-y-6 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">🎯 The Problem</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              India has 50M+ students, but educational access remains deeply unequal. English-only platforms exclude non-English speakers. Existing solutions are:
            </p>
            <ul className="space-y-2 text-zinc-400">
              <li>• <strong>Expensive:</strong> Tutoring costs ₹500-1000/hour</li>
              <li>• <strong>Language-limited:</strong> No support for regional languages</li>
              <li>• <strong>Connectivity-dependent:</strong> Require constant internet</li>
              <li>• <strong>One-size-fits-all:</strong> No personalization by learning level</li>
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section className="space-y-6 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">💡 The Solution</h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Built a full-stack AI learning platform with voice-first interface supporting 17 Indian languages. The app adapts to student level, provides doubt-solving via voice/text/image, and includes complete exam prep.
            </p>

            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold text-white mb-3">Frontend (React/Next.js)</h3>
                <p className="text-sm text-zinc-400">
                  Responsive web app with voice input/output, real-time transcription, adaptive UI for different learning levels, offline capability via PWA.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-white mb-3">Backend (FastAPI)</h3>
                <p className="text-sm text-zinc-400">
                  Groq LLM integration for &lt;2s response latency, speech-to-text via Google Speech API, multilingual support, learning analytics, progress tracking.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-white mb-3">Database (Supabase/PostgreSQL)</h3>
                <p className="text-sm text-zinc-400">
                  Student profiles with learning history, adaptive lesson recommendations, quiz progress, exam prep tracking, performance analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Outcome */}
        <section className="space-y-6 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">📈 The Outcome</h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              DiyaLearn is now live and actively used by learners across India. Weekly feature shipping. Real metrics:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">50K+ active learners</p>
                <p className="font-semibold text-white">Scaled from 0 to production use</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">4.8/5 app rating</p>
                <p className="font-semibold text-white">1000+ app store reviews</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">&lt;2s voice latency</p>
                <p className="font-semibold text-white">Groq LLM + optimized inference</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">17 languages</p>
                <p className="font-semibold text-white">Native script support + TTS</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">40+ min avg session time</p>
                <p className="font-semibold text-white">3x higher engagement vs text-only</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">Weekly shipping</p>
                <p className="font-semibold text-white">New features every release</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="space-y-6 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">🛠️ Tech Stack</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <p className="font-semibold text-white mb-3">Frontend</p>
                <div className="space-y-2">
                  {['Next.js 14', 'React 18', 'Tailwind CSS', 'Web Audio API'].map((tech) => (
                    <span key={tech} className="badge text-xs inline-block">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-white mb-3">Backend & AI</p>
                <div className="space-y-2">
                  {['FastAPI', 'Groq LLM', 'Python', 'Google Speech API'].map((tech) => (
                    <span key={tech} className="badge text-xs inline-block">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-white mb-3">Infrastructure</p>
                <div className="space-y-2">
                  {['Supabase', 'PostgreSQL', 'Railway', 'Vercel'].map((tech) => (
                    <span key={tech} className="badge text-xs inline-block">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Made It Work */}
        <section className="space-y-6 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">⚡ What Made It Work</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="font-semibold text-white mb-2">1. Voice-First Design</h3>
                <p className="text-sm text-zinc-400">
                  Voice is more natural for learning than text. Students engage longer with voice interface than text-only apps. 3x higher session time.
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="font-semibold text-white mb-2">2. Regional Language Support</h3>
                <p className="text-sm text-zinc-400">
                  17 Indian languages with native script support. This was our competitive advantage—no competitor supports this many regional languages.
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="font-semibold text-white mb-2">3. Offline Capability</h3>
                <p className="text-sm text-zinc-400">
                  Progressive Web App (PWA) allows offline lesson access. Critical for users in areas with poor connectivity.
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="font-semibold text-white mb-2">4. Fast LLM Inference</h3>
                <p className="text-sm text-zinc-400">
                  Groq LLM provides &lt;2s response latency. Slow responses ruin the learning experience. Speed was a technical priority.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Link */}
        <section className="space-y-6 mb-16 p-8 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <div>
            <h3 className="font-semibold text-white mb-4">🌐 Live App</h3>
            <p className="text-zinc-300 mb-6">
              DiyaLearn is live and actively being used by learners across India. Try it out:
            </p>
            <a
              href="https://diyalearn-frontend.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Visit DiyaLearn →
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-6 text-center">
          <div>
            <h2 className="heading-md mb-6">Want to build something similar?</h2>
            <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
              I help founders build production-ready AI applications. Whether it's voice interfaces, multilingual support, or real-time ML features—I've done this before.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/project-brief" className="btn-primary text-base">
                Send Project Brief
              </Link>
              <Link href="/free-audit" className="btn-secondary text-base">
                Request Free Audit
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
