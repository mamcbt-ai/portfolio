'use client';

export default function TechStackShowcase() {
  const techStack = {
    Frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    Backend: ['FastAPI', 'Python', 'PostgreSQL', 'Supabase', 'REST APIs'],
    AI: ['LLMs', 'RAG Systems', 'LangChain', 'OpenAI', 'Groq'],
    Other: ['Git', 'Docker', 'GitHub', 'VS Code', 'Linux'],
  };

  return (
    <section className="relative section-padding border-b border-zinc-800/50 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/8 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-md">Tech Stack & Skills</h2>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
            Modern tools and technologies for building production-ready applications
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {Object.entries(techStack).map(([category, techs], categoryIdx) => (
            <div
              key={category}
              className="space-y-4"
              style={{
                animation: `fadeInUp 0.6s ease-out ${categoryIdx * 0.1}s backwards`,
              }}
            >
              <h3 className="font-bold text-lg text-white mb-4">
                {category}
              </h3>
              <div className="space-y-2">
                {techs.map((tech, techIdx) => (
                  <div
                    key={tech}
                    className="badge w-full justify-center py-2 cursor-pointer hover:scale-105 transition-transform"
                    style={{
                      animation: `bounce-in 0.5s ease-out ${categoryIdx * 0.1 + techIdx * 0.05}s backwards`,
                    }}
                  >
                    ✦ {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Facts - Professional cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {[
            { emoji: '⚡', text: 'Optimized Performance', desc: '90+ PageSpeed scores' },
            { emoji: '🔒', text: 'Security-First', desc: 'Best practices always' },
            { emoji: '📱', text: 'Mobile-Ready', desc: 'Works on all devices' },
          ].map((fact, i) => (
            <div
              key={i}
              className="card group flex flex-col items-center text-center hover:shadow-xl"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="icon-wrapper mb-6 group-hover:mb-8 transition-all">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300 inline-block">
                  {fact.emoji}
                </span>
              </div>
              <h4 className="font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {fact.text}
              </h4>
              <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                {fact.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
