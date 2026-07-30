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
      {/* Header */}
      <section className="section-padding border-b border-zinc-800">
        <div className="container-max space-y-4">
          <h1 className="heading-lg">All Projects</h1>
          <p className="max-w-2xl text-lg text-zinc-400">
            A complete archive of product builds, side projects, and technical explorations.
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
              <div key={category} className="mb-16 scroll-mt-20" id={category}>
                <h2 className="heading-md mb-8 text-white">{category}</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {categoryProjects.map((project) => (
                    <div
                      key={project.id}
                      id={project.id}
                      className="card group scroll-mt-20"
                    >
                      {/* Featured Badge */}
                      {project.featured && (
                        <div className="mb-3">
                          <span className="badge bg-amber-900/50 text-amber-300">
                            Featured
                          </span>
                        </div>
                      )}

                      {/* Title & Tagline */}
                      <h3 className="mb-2 heading-md text-white group-hover:text-zinc-300 transition">
                        {project.title}
                      </h3>
                      <p className="mb-3 text-sm font-medium text-zinc-400">
                        {project.tagline}
                      </p>

                      {/* Description */}
                      <p className="mb-4 text-sm text-zinc-400">
                        {project.description}
                      </p>

                      {/* Highlights */}
                      {project.highlights && project.highlights.length > 0 && (
                        <ul className="mb-4 space-y-1 text-xs text-zinc-400">
                          {project.highlights.slice(0, 3).map((highlight, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-zinc-600">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Tech Stack */}
                      <div className="mb-4 flex flex-wrap gap-1">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="badge text-xs bg-zinc-800/70 text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.stack.length > 4 && (
                          <span className="badge text-xs bg-zinc-800/70 text-zinc-300">
                            +{project.stack.length - 4}
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex flex-wrap gap-2">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs btn-secondary py-1 px-3"
                          >
                            Live
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href="#"
                            className="text-xs btn-secondary py-1 px-3"
                          >
                            Demo
                          </a>
                        )}
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
      <section className="section-padding border-t border-zinc-800">
        <div className="container-max text-center">
          <h2 className="heading-md mb-4">Interested in Working Together?</h2>
          <p className="mb-8 text-zinc-400">
            Let's discuss how I can help with your next project.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:mamcbt@gmail.com" className="btn-primary">
              Start a Conversation
            </a>
            <Link href="/" className="btn-secondary">
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
