import Link from 'next/link';

export const metadata = {
  title: 'ITR Filing Platform - Complete India Tax Return System',
  description: 'Case study: Building production-ready ITR preparation and filing system for individual taxpayers.',
};

export default function ITRFilingCaseStudy() {
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
              <span className="badge">FinTech/SaaS • PRODUCTION</span>
            </div>
            <h1 className="heading-lg">ITR Filing Platform</h1>
            <p className="text-xl text-zinc-300">
              Complete India ITR preparation, validation, and filing system for individual taxpayers
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid gap-6 md:grid-cols-4 p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-lg">
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">99%+</div>
              <p className="text-sm text-zinc-400">Accuracy rate</p>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">58</div>
              <p className="text-sm text-zinc-400">Passing tests</p>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">8</div>
              <p className="text-sm text-zinc-400">Specialized engines</p>
            </div>
            <div>
              <div className="text-2xl font-bold gradient-text mb-1">35</div>
              <p className="text-sm text-zinc-400">PostgreSQL schemas</p>
            </div>
          </div>
        </div>

        {/* Problem */}
        <section className="space-y-6 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">🎯 The Problem</h2>
            <p className="text-zinc-300 leading-relaxed mb-4">
              India has 10M+ individual taxpayers, but ITR filing remains complex and error-prone:
            </p>
            <ul className="space-y-2 text-zinc-400">
              <li>• <strong>Form complexity:</strong> Multiple forms (ITR-1, 2, 3, 4) with confusing eligibility rules</li>
              <li>• <strong>Manual calculation:</strong> Dual-regime computation, marginal relief, surcharge calculations are tedious</li>
              <li>• <strong>No validation:</strong> Existing tools lack intelligent validation and confidence scoring</li>
              <li>• <strong>Compliance risk:</strong> Missing deductions, incorrect form selection, calculation errors</li>
            </ul>
          </div>
        </section>

        {/* Solution */}
        <section className="space-y-6 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">💡 The Solution</h2>
            <p className="text-zinc-300 leading-relaxed mb-6">
              Built a complete FastAPI backend with 8 specialized engines to handle ITR preparation end-to-end. Each engine focuses on one critical function.
            </p>

            <div className="space-y-4">
              <div className="card">
                <h3 className="font-semibold text-white mb-3">Eligibility Engine</h3>
                <p className="text-sm text-zinc-400">
                  Intelligent form routing. Analyzes income sources (salary, business, capital gains, etc.) to recommend correct ITR form (1/2/3/4).
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-white mb-3">Computation Engine</h3>
                <p className="text-sm text-zinc-400">
                  Calculates tax under both normal regime and new regime. Handles marginal relief, surcharge, cess, and deductions correctly.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-white mb-3">Validation Engine</h3>
                <p className="text-sm text-zinc-400">
                  Confidence-scored validation. Flags inconsistencies, missing deductions, and form errors before filing.
                </p>
              </div>

              <div className="card">
                <h3 className="font-semibold text-white mb-3">Form Generators (ITR 1/2/3/4)</h3>
                <p className="text-sm text-zinc-400">
                  Generates valid JSON and PDF forms. Compliant with latest ITR format and schedule requirements.
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
              Production-ready platform with comprehensive test coverage and real-world validation:
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">99%+ accuracy on test cases</p>
                <p className="font-semibold text-white">Validated against manual filings</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">58 passing unit + integration tests</p>
                <p className="font-semibold text-white">Comprehensive test coverage</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">8 specialized engines</p>
                <p className="font-semibold text-white">Each handles one critical function</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">35 PostgreSQL schemas</p>
                <p className="font-semibold text-white">Database normalized & optimized</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">DPDP compliant</p>
                <p className="font-semibold text-white">Privacy & data protection ready</p>
              </div>
              <div className="card">
                <p className="text-sm text-zinc-400 mb-2">Form 16 PDF parser</p>
                <p className="font-semibold text-white">Auto-extract salary data</p>
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
                <p className="font-semibold text-white mb-3">Backend</p>
                <div className="space-y-2">
                  {['FastAPI', 'Python 3.12', 'Pydantic'].map((tech) => (
                    <span key={tech} className="badge text-xs inline-block">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-white mb-3">Database</p>
                <div className="space-y-2">
                  {['PostgreSQL', 'SQLAlchemy', 'Alembic'].map((tech) => (
                    <span key={tech} className="badge text-xs inline-block">{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <p className="font-semibold text-white mb-3">Frontend & Docs</p>
                <div className="space-y-2">
                  {['React', 'Streamlit', 'OpenAPI'].map((tech) => (
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
                <h3 className="font-semibold text-white mb-2">1. Specialized Engines</h3>
                <p className="text-sm text-zinc-400">
                  Instead of monolithic logic, 8 focused engines. Each handles one problem well. Easier to test, maintain, and extend.
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="font-semibold text-white mb-2">2. Comprehensive Testing</h3>
                <p className="text-sm text-zinc-400">
                  58 passing tests covering normal regime, new regime, edge cases, and real tax scenarios. Test-driven development.
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="font-semibold text-white mb-2">3. Database Normalization</h3>
                <p className="text-sm text-zinc-400">
                  35 properly normalized schemas. Makes data integrity automatic, reduces errors, supports complex queries.
                </p>
              </div>
              <div className="border-l-2 border-blue-500 pl-6">
                <h3 className="font-semibold text-white mb-2">4. Confidence Scoring</h3>
                <p className="text-sm text-zinc-400">
                  Validation engine assigns confidence scores to each field. Shows user where data might be missing or incorrect.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="space-y-6 text-center">
          <div>
            <h2 className="heading-md mb-6">Need a complex backend system?</h2>
            <p className="text-lg text-zinc-300 mb-8 max-w-2xl mx-auto">
              I build production-ready backend systems with rigorous testing, clear architecture, and real-world validation. Whether it's financial, compliance, or data-heavy systems.
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
