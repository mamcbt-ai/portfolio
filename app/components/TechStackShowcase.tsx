'use client';

import type { IconType } from 'react-icons';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiFastapi,
  SiPython,
  SiPostgresql,
  SiSupabase,
  SiLangchain,
  SiOpenai,
  SiGit,
  SiDocker,
  SiGithub,
  SiVisualstudiocode,
  SiLinux,
} from 'react-icons/si';
import {
  LuServer,
  LuBrainCircuit,
  LuDatabase,
  LuZap,
  LuLock,
  LuSmartphone,
} from 'react-icons/lu';

const techIcons: Record<string, IconType> = {
  React: SiReact,
  'Next.js': SiNextdotjs,
  TypeScript: SiTypescript,
  'Tailwind CSS': SiTailwindcss,
  Vercel: SiVercel,
  FastAPI: SiFastapi,
  Python: SiPython,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  'REST APIs': LuServer,
  LLMs: LuBrainCircuit,
  'RAG Systems': LuDatabase,
  LangChain: SiLangchain,
  OpenAI: SiOpenai,
  Groq: LuZap,
  Git: SiGit,
  Docker: SiDocker,
  GitHub: SiGithub,
  'VS Code': SiVisualstudiocode,
  Linux: SiLinux,
};

const quickFacts: { Icon: IconType; text: string; desc: string }[] = [
  { Icon: LuZap, text: 'Optimized Performance', desc: '90+ PageSpeed scores' },
  { Icon: LuLock, text: 'Security-First', desc: 'Best practices always' },
  { Icon: LuSmartphone, text: 'Mobile-Ready', desc: 'Works on all devices' },
];

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
                {techs.map((tech, techIdx) => {
                  const Icon = techIcons[tech];
                  return (
                    <div
                      key={tech}
                      className="badge w-full justify-center py-2 cursor-pointer hover:scale-105 transition-transform"
                      style={{
                        animation: `bounce-in 0.5s ease-out ${categoryIdx * 0.1 + techIdx * 0.05}s backwards`,
                      }}
                    >
                      <span className="inline-flex items-center gap-2">
                        {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                        {tech}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Facts - Professional cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {quickFacts.map((fact, i) => (
            <div
              key={i}
              className="card group flex flex-col items-center text-center hover:shadow-xl"
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="icon-wrapper mb-6 group-hover:mb-8 transition-all">
                <fact.Icon
                  className="h-7 w-7 text-blue-400 group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                />
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
