import Link from "next/link";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description: "All projects and product builds by Muhammed Asarudheen M",
};

export default function ProjectsPage() {
  const allProjects = projects;
  const categories = Array.from(
    new Set(allProjects.map((p) => p.category))
  ).sort();

  return (
    <>
      {/* Header with gradient background */}
      <section className="relative section-padding border-b border-zinc-800/50 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container-max space-y-6">
          <h1 className="heading-lg">All Projects</h1>
          <p className="max-w-3xl text-lg text-zinc-300">
            A complete archive of product builds, side projects, and technical explorations. Each project represents real-world solutions and production-ready applications.
          </p>
        </div>
      </section>

      {/* Projects by Category */}
      <section className="section-padding">
        <div className="container-max">
          {categories.map((category) => {
            const categoryProjects = allProjects.filter(
              (p) => p.category === category
            );

            return (
              <div key={category} className="mb-24 scroll-mt-20" id={category}>
                <div className="mb-12">
                  <h2 className="heading-md mb-2 text-white">{category}</h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {categoryProjects.map((project, idx) => (
                    <div
                      key={project.id}
                      id={project.id}
                      className="card group scroll-mt-20 flex flex-col h-full"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s backwards`,
                      }}
                    >
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="mb-4">
                          <span className="inline-block px-3 py-1 text-xs font-bold text-amber-300 bg-gradient-to-r from-amber-500/20 to-orange-500/10 border border-amber-500/30 rounded-full">
                            ⭐ Featured
                          </span>
                        </div>
                      )}

                      {/* Title & Tagline */}
                      <h3 className="mb-3 text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="mb-4 text-base font-medium text-zinc-300">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="mb-6 text-sm text-zinc-400 flex-grow">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <ul className="mb-6 space-y-2 text-xs text-zinc-300">
                          {project.highlights.slice(0, 3).map((highlight, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-blue-400 font-bold mt-0.5">✓</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech Stack */}
                      <div className="mb-6 flex flex-wrap gap-2">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="badge text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 4 && (
                          <span className="badge text-xs">
                            +{project.stack.length - 4} more
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-3 pt-4 border-t border-zinc-700/50 mt-auto">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs btn-secondary py-2 px-4 flex-1"
                          >
                            🚀 Live App
                          </a>
                        )}
                        <Link
                          href={`/#featured-projects`}
                          className="text-xs btn-secondary py-2 px-4 flex-1"
                        >
                          👁️ View Details
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="relative section-padding border-t border-zinc-800/50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        <div className="container-max text-center">
          <h2 className="heading-md mb-6">Interested in Working Together?</h2>
          <p className="mb-12 text-zinc-300 text-lg">
            Let's discuss how I can help bring your vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:mamcbt@gmail.com" className="btn-primary text-lg">
              Start a Conversation
            </a>
            <Link href="/" className="btn-secondary text-lg">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
