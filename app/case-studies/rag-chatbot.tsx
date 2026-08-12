import Link from 'next/link';

export const metadata = {
  title: 'RAG PDF Chatbot - Intelligent Document Search System',
  description: 'Case study: Building a RAG system with OCR and semantic search for PDF document querying.',
};

export default function RAGChatbotCaseStudy() {
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
              <span className="badge">AI/Productivity • LIVE</span>
            </div>
            <h1 className="heading-lg">RAG PDF Chatbot</h1>
            <p className="text-xl text-zinc-300">
              Intelligent document chatbot with OCR and semantic search for PDF querying
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid gap-6 md:grid-cols-4 p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-lg">
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">95%+</div>
              <p className="text-sm text-zinc-400">OCR accuracy</p>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">&lt;500ms</div>
              <p className="text-sm text-zinc-400">Query response time</p>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">Hybrid</div>
              <p className="text-sm text-zinc-400">Keyword + semantic search</p>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">Persistent</div>
              <p className="text-sm text-zinc-400">FAISS vector caching</p>
            </div>
          </div>
        </div>

        {/* Problem */}
        <section className="space-y-6 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">🎯 The Problem</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              Knowledge workers spend hours manually searching through PDFs and scanned documents:
            </p>
            <ul className="space-y-2 text-zinc-400">
              <li>• <strong>Manual search:</strong> Ctrl+F doesn't understand context or meaning</li>
              <li>• <strong>Scanned documents:</strong> No text layer means can't search at all</li>
              <li>• <strong>No verification:</strong> Hard to cite sources or verify answers</li>
              <li>• <strong>Multi-doc queries:</strong> Can't ask questions across multiple documents</li>
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section className="space-y-6 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">💡 The Solution</h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Built a Streamlit-based RAG (Retrieval-Augmented Generation) system that understands both keyword and semantic meaning. Works with text PDFs and scanned documents.
            </p>

            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold text-white mb-3">Document Processing</h3>
                <p className="text-sm text-zinc-400">
                  Handles text PDFs directly. For scanned documents, uses Tesseract OCR (95%+ accuracy) to extract text from images.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-white mb-3">Hybrid Search (BM25 + FAISS)</h3>
                <p className="text-sm text-zinc-400">
                  Combines keyword search (BM25) with semantic search (FAISS + OpenAI embeddings). Catches both exact matches and semantic meaning.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-white mb-3">Persistent Caching</h3>
                <p className="text-sm text-zinc-400">
                  Caches FAISS indexes. Re-uploading same document doesn't re-process. Instant re-queries on cached documents.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-white mb-3">Source Citations</h3>
                <p className="text-sm text-zinc-400">
                  Every answer includes page number and source quote. Users can verify answers against original document.
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
              Working production app supporting mixed PDF types, fast queries, and source verification:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">95%+ OCR accuracy</p>
                <p className="font-semibold text-white">Scanned documents searchable</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">&lt;500ms query response</p>
                <p className="font-semibold text-white">Fast enough for real-time use</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">Hybrid search (BM25 + semantic)</p>
                <p className="font-semibold text-white">Best of both search types</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">Persistent FAISS cache</p>
                <p className="font-semibold text-white">No re-indexing on re-query</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">Page-level citations</p>
                <p className="font-semibold text-white">Verify answers instantly</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">Downloadable history</p>
                <p className="font-semibold text-white">Save conversations with sources</p>
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
                <p className="font-semibold text-white mb-3">Frontend & App</p>
                <div className="space-y-2">
                  {['Streamlit', 'Python', 'UI Components'].map((tech) => (
                    <span key={tech} className="badge text-xs inline-block">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-white mb-3">AI & Search</p>
                <div className="space-y-2">
                  {['LangChain', 'OpenAI Embeddings', 'FAISS', 'rank-bm25'].map((tech) => (
                    <span key={tech} className="badge text-xs inline-block">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-white mb-3">Document Processing</p>
                <div className="space-y-2">
                  {['Tesseract OCR', 'PDF parsing', 'pypdf'].map((tech) => (
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
                <h3 className="font-semibold text-white mb-2">1. Hybrid Search Strategy</h3>
                <p className="text-sm text-zinc-400">
                  Keyword search alone misses semantic meaning. Semantic search alone has false positives. Hybrid approach combines strengths of both.
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="font-semibold text-white mb-2">2. OCR Quality</h3>
                <p className="text-sm text-zinc-400">
                  Tesseract is production-grade OCR. With proper preprocessing, achieves 95%+ accuracy. Makes scanned docs fully searchable.
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="font-semibold text-white mb-2">3. Persistent Caching</h3>
                <p className="text-sm text-zinc-400">
                  Users often re-query same documents. Caching FAISS indexes makes re-queries instant. Huge UX win.
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="font-semibold text-white mb-2">4. Source Citations</h3>
                <p className="text-sm text-zinc-400">
                  Users need to verify AI answers. Page-level citations let users instantly check the source. Builds trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Live Link */}
        <section className="space-y-6 mb-16 p-8 bg-blue-500/10 border border-blue-500/20 rounded-lg">
          <div>
            <h3 className="font-semibold text-white mb-4">💻 Live Demo</h3>
            <p className="text-zinc-300 mb-6">
              Try the RAG chatbot. Upload any PDF (text or scanned) and ask questions:
            </p>
            <a
              href="https://rag-chatbot.streamlit.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-block"
            >
              Try RAG Chatbot →
            </a>
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-6 text-center">
          <div>
            <h2 className="heading-md mb-6">Building AI features into your product?</h2>
            <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
              I integrate LLMs, RAG systems, and AI workflows into production applications. From prototype to deployment with proper testing and monitoring.
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
