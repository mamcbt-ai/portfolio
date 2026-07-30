import Link from "next/link";
import { projects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-max space-y-6">
          <div className="space-y-4">
            <h1 className="heading-lg">
              Full-Stack Developer • AI Product Builder • Startup Founder
            </h1>
            <p className="max-w-2xl text-lg text-zinc-400">
              I build practical web apps, backend systems, and AI-powered products for startups, education, and business workflows. Focused on execution-first development with real product impact.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="#featured-projects" className="btn-primary">
              View Featured Work →
            </a>
            <a href="mailto:mamcbt@gmail.com" className="btn-secondary">
              Start a Project
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-max">
          <h2 className="heading-md mb-12">What I Build</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Full-Stack Web Apps",
                description:
                  "End-to-end applications with Next.js, React, FastAPI, and Supabase. From MVP to scalable production systems.",
              },
              {
                title: "Backend & API Systems",
                description:
                  "Scalable FastAPI backends, database architecture, REST APIs, authentication, and business logic design.",
              },
              {
                title: "AI-Powered Features",
                description:
                  "LLM integrations, RAG systems, multilingual workflows, voice AI, OCR, and ML pipelines for real products.",
              },
            ].map((service, i) => (
              <div key={i} className="card">
                <h3 className="mb-2 font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-sm text-zinc-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="featured-projects" className="section-padding border-b border-zinc-800">
        <div className="container-max">
          <h2 className="heading-md mb-12">Featured Projects</h2>
          <div className="space-y-12">
            {featuredProjects.map((project, i) => (
              <div
                key={project.id}
                className={`grid gap-8 items-center ${
                  i % 2 === 0 ? "md:grid-cols-[1fr_1.2fr]" : "md:grid-cols-[1.2fr_1fr]"
                }`}
              >
                {/* Content */}
                <div className={i % 2 === 0 ? "order-1" : "order-2"}>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-zinc-300">
                        {project.category}
                      </p>
                      <h3 className="heading-md">{project.title}</h3>
                      <p className="text-lg font-medium text-zinc-400">
                        {project.tagline}
                      </p>
                    </div>

                    {/* Problem / Solution / Result */}
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold text-zinc-300">Problem</p>
                        <p className="text-zinc-400">{project.problem}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-300">Solution</p>
                        <p className="text-zinc-400">{project.solution}</p>
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-300">Result</p>
                        <p className="text-zinc-400">{project.result}</p>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.stack.map((tech) => (
                        <span key={tech} className="badge">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3 pt-4">
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
                  <div className="rounded-lg border border-zinc-700 bg-zinc-900 p-8">
                    <div className="flex h-64 items-center justify-center">
                      <div className="text-center">
                        <p className="text-3xl font-bold text-zinc-600">
                          {project.title.split(" ")[0]}
                        </p>
                        <p className="text-sm text-zinc-500 mt-2">
                          {project.tagline}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects CTA */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-max text-center">
          <h2 className="heading-md mb-4">See All Projects</h2>
          <p className="mb-8 text-zinc-400">
            View the complete archive of projects and side builds.
          </p>
          <Link href="/projects" className="btn-primary">
            View Full Archive →
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-max max-w-3xl">
          <h2 className="heading-md mb-8">About</h2>
          <div className="space-y-4 text-zinc-300">
            <p>
              Full-stack developer building practical web apps, backend systems, and AI-powered products
              for startups, education, and business workflows. I combine disciplined engineering with product
              thinking to create systems that solve real problems.
            </p>
            <p className="text-sm">
              <span className="font-semibold text-zinc-200">Focused on:</span>
            </p>
            <ul className="space-y-1 ml-4 text-sm">
              <li>• Next.js and React applications</li>
              <li>• FastAPI and backend architecture</li>
              <li>• Supabase and PostgreSQL systems</li>
              <li>• AI integrations, multilingual workflows, and voice features</li>
              <li>• Product-focused MVPs that can grow into production systems</li>
            </ul>
            <p>
              A disciplined, execution-first approach shapes the way products are designed, built, and shipped.
              Currently building AI-powered educational tools and exploring practical SaaS and fintech workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-max text-center">
          <h2 className="heading-md mb-4">Ready to Build?</h2>
          <p className="mb-8 text-zinc-400">
            Let's discuss your project, timeline, and vision.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:mamcbt@gmail.com" className="btn-primary">
              Email: mamcbt@gmail.com
            </a>
            <a
              href="https://wa.me/918590841024"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
