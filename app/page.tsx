import Link from "next/link";
import { projects } from "@/lib/projects";
import StatsSection from "./components/StatsSection";
import TechStackShowcase from "./components/TechStackShowcase";
import PricingSection from "./components/PricingSection";
import ProcessSection from "./components/ProcessSection";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero Section with gradient background and interactive elements */}
      <section className="relative section-padding border-b border-zinc-800/50 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          {/* Animated gradient orbs */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        <div className="container-max space-y-8">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="badge mb-6">
                ✨ Full-Stack Developer & AI Pioneer
              </div>
            </div>
            <h1 className="heading-lg">
              Full-Stack Developer • AI Product Builder • Startup Founder
            </h1>
            <p className="max-w-3xl text-lg text-zinc-300 leading-relaxed">
              I build practical web apps, backend systems, and AI-powered products for startups, education, and business workflows. Focused on execution-first development with real product impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-6 floating">
            <a href="#featured-projects" className="btn-primary relative">
              <span className="relative z-10">View Featured Work →</span>
            </a>
            <a href="mailto:mamcbt@gmail.com" className="btn-secondary relative">
              <span className="relative z-10">Start a Project</span>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative section-padding border-b border-zinc-800/50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container-max">
          <h2 className="heading-md mb-16">What I Build</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Full-Stack Web Apps",
                icon: "🚀",
                description:
                  "End-to-end applications with Next.js, React, FastAPI, and Supabase. From MVP to scalable production systems.",
              },
              {
                title: "Backend & API Systems",
                icon: "⚙️",
                description:
                  "Scalable FastAPI backends, database architecture, REST APIs, authentication, and business logic design.",
              },
              {
                title: "AI-Powered Features",
                icon: "✨",
                description:
                  "LLM integrations, RAG systems, multilingual workflows, voice AI, OCR, and ML pipelines for real products.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="card group flex flex-col h-full"
                style={{animationDelay: `${i * 0.1}s`}}
              >
                <div className="icon-wrapper mb-6 group-hover:mb-8 transition-all">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300 inline-block">
                    {service.icon}
                  </span>
                </div>
                <h3 className="mb-3 font-bold text-white text-lg group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors flex-grow leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Featured Projects */}
      <section id="featured-projects" className="section-padding border-b border-zinc-800/50">
        <div className="container-max">
          <h2 className="heading-md mb-16">Featured Projects</h2>
          <div className="space-y-20">
            {featuredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`grid gap-12 items-center ${
                  i % 2 === 0 ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-[1.2fr_1fr]"
                }`}
              >
                {/* Content */}
                <div className={i % 2 === 0 ? "order-1" : "order-2"}>
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <div className="inline-block">
                        <span className="badge text-xs">
                          {project.category}
                        </span>
                      </div>
                      <h3 className="heading-md">{project.title}</h3>
                      <p className="text-xl font-medium text-zinc-300">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Problem / Solution / Result */}
                    <div className="space-y-4 text-sm pt-4">
                      <div className="rounded-lg border border-zinc-700/50 bg-zinc-900/30 p-4 backdrop-blur">
                        <p className="font-semibold text-zinc-200 mb-2">🎯 Problem</p>
                        <p className="text-zinc-400">{project.problem}</p>
                      </div>
                      <div className="rounded-lg border border-zinc-700/50 bg-zinc-900/30 p-4 backdrop-blur">
                        <p className="font-semibold text-zinc-200 mb-2">💡 Solution</p>
                        <p className="text-zinc-400">{project.solution}</p>
                      </div>
                      <div className="rounded-lg border border-zinc-700/50 bg-zinc-900/30 p-4 backdrop-blur">
                        <p className="font-semibold text-zinc-200 mb-2">📈 Result</p>
                        <p className="text-zinc-400">{project.result}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.stack.map((tech) => (
                        <span key={tech} className="badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-6">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary text-sm"
                        >
                          Live App →
                        </a>
                      )}
                      <Link
                        href={`/projects#${project.id}`}
                        className="btn-secondary text-sm"
                      >
                        Learn More →
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Visual */}
                <div className={`order-${i % 2 === 0 ? "2" : "1"}`}>
                  <div className="project-card h-80 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="text-6xl font-bold gradient-text">
                        {project.title.split(" ")[0]}
                      </div>
                      <p className="text-zinc-400 text-lg group-hover:text-zinc-300 transition-colors">
                        {project.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <TechStackShowcase />

      {/* How I Work / Process Section */}
      <ProcessSection />

      {/* All Projects CTA */}
      <section className="relative section-padding border-b border-zinc-800/50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container-max text-center">
          <h2 className="heading-md mb-6">See All Projects</h2>
          <p className="mb-10 text-zinc-300 text-lg">
            View the complete archive of projects and side builds.
          </p>
          <Link href="/projects" className="btn-primary text-lg">
            View Full Archive →
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding border-b border-zinc-800/50">
        <div className="container-max max-w-3xl">
          <h2 className="heading-md mb-10">About</h2>
          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <p className="text-lg">
              Full-stack developer building practical web apps, backend systems, and AI-powered products
              for startups, education, and business workflows. I combine disciplined engineering with product
              thinking to create systems that solve real problems.
            </p>
            <div>
              <p className="font-semibold text-zinc-100 mb-4">Focused on:</p>
              <ul className="grid gap-2 ml-6 text-base">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Next.js and React applications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>FastAPI and backend architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Supabase and PostgreSQL systems</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>AI integrations, multilingual workflows, and voice features</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Product-focused MVPs that can grow into production systems</span>
                </li>
              </ul>
            </div>
            <p className="text-lg pt-4">
              A disciplined, execution-first approach shapes the way products are designed, built, and shipped.
              Currently building AI-powered educational tools and exploring practical SaaS and fintech workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative section-padding">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-6">Let's Talk</h2>
            <p className="mb-4 text-zinc-300 text-lg">
              Choose your preferred way to reach out. I'll respond within 24 hours.
            </p>
            <a href="/free-audit" className="text-blue-400 hover:text-blue-300 underline text-sm">
              → Schedule a free 30-minute project audit
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
            {/* Email */}
            <a
              href="mailto:mamcbt@gmail.com"
              className="card group hover:border-blue-500/50 transition-all"
            >
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold text-white mb-2">Email</h3>
              <p className="text-sm text-zinc-400 mb-4 flex-grow">
                For detailed project inquiries
              </p>
              <p className="text-xs text-blue-400 group-hover:text-blue-300">
                mamcbt@gmail.com →
              </p>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/918590841024"
              target="_blank"
              rel="noopener noreferrer"
              className="card group hover:border-green-500/50 transition-all"
            >
              <div className="text-3xl mb-4">💬</div>
              <h3 className="font-semibold text-white mb-2">WhatsApp</h3>
              <p className="text-sm text-zinc-400 mb-4 flex-grow">
                Quick conversations & updates
              </p>
              <p className="text-xs text-green-400 group-hover:text-green-300">
                +91 8590 841024 →
              </p>
            </a>

            {/* Calendar */}
            <a
              href="https://calendly.com/mamcbt"
              target="_blank"
              rel="noopener noreferrer"
              className="card group hover:border-purple-500/50 transition-all"
            >
              <div className="text-3xl mb-4">📅</div>
              <h3 className="font-semibold text-white mb-2">Schedule Call</h3>
              <p className="text-sm text-zinc-400 mb-4 flex-grow">
                15-minute quick chat
              </p>
              <p className="text-xs text-purple-400 group-hover:text-purple-300">
                Book on Calendly →
              </p>
            </a>

            {/* Free Audit */}
            <a
              href="/free-audit"
              className="card group hover:border-yellow-500/50 transition-all bg-gradient-to-br from-blue-500/5 to-purple-500/5"
            >
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="font-semibold text-white mb-2">Free Audit</h3>
              <p className="text-sm text-zinc-400 mb-4 flex-grow">
                30-min project assessment
              </p>
              <p className="text-xs text-yellow-400 group-hover:text-yellow-300 font-medium">
                Start free audit →
              </p>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
