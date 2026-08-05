'use client';

export default function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Discovery",
      duration: "Week 1",
      icon: "🎯",
      description: "Understand your problem, define success metrics, and align on scope & timeline.",
      points: [
        "Deep-dive conversation about goals",
        "Identify constraints and risks",
        "Define measurable success",
      ],
    },
    {
      number: "2",
      title: "Architecture",
      duration: "Week 2",
      icon: "🛠️",
      description: "Design system architecture, select tech stack, and assess technical risks.",
      points: [
        "System design documentation",
        "Tech stack recommendations",
        "Risk mitigation strategy",
      ],
    },
    {
      number: "3",
      title: "Build",
      duration: "Weeks 3-6",
      icon: "⚡",
      description: "Iterative development with weekly progress updates and your feedback integrated.",
      points: [
        "Frequent feature shipping",
        "Weekly progress reports",
        "Direct feedback loop",
      ],
    },
    {
      number: "4",
      title: "Launch & Scale",
      duration: "Week 7+",
      icon: "🚀",
      description: "Testing, optimization, deployment assistance, and 30-day post-launch support.",
      points: [
        "Testing & optimization",
        "Deployment guidance",
        "30-day support included",
      ],
    },
  ];

  return (
    <section className="relative section-padding border-b border-zinc-800/50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container-max">
        <div className="max-w-2xl mb-16">
          <h2 className="heading-md mb-6">How I Work</h2>
          <p className="text-lg text-zinc-300">
            My approach prioritizes clarity, speed, and quality. No lengthy consultations or bloated timelines.
            Here's the structured process I follow on every project.
          </p>
        </div>

        {/* Desktop: 4-column grid with connectors */}
        <div className="hidden md:grid md:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent transform translate-x-1/2 -z-10"></div>
              )}

              {/* Step card */}
              <div className="card flex flex-col h-full group">
                {/* Step number circle */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold gradient-text">{step.number}</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4 text-center">{step.icon}</div>

                {/* Title & Duration */}
                <h3 className="text-xl font-bold text-white mb-1 text-center">
                  {step.title}
                </h3>
                <p className="text-sm text-blue-400 text-center mb-6 font-medium">
                  {step.duration}
                </p>

                {/* Description */}
                <p className="text-sm text-zinc-300 mb-6 flex-grow">
                  {step.description}
                </p>

                {/* Points */}
                <ul className="space-y-2">
                  {step.points.map((point, j) => (
                    <li key={j} className="text-xs text-zinc-400 flex items-start">
                      <span className="text-blue-400 mr-2 mt-0.5">→</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Vertical stacked */}
        <div className="md:hidden space-y-6">
          {steps.map((step, i) => (
            <div key={i} className="card group">
              <div className="flex gap-6">
                {/* Left: Number & Icon */}
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
                    <span className="font-bold gradient-text">{step.number}</span>
                  </div>
                  <div className="text-2xl">{step.icon}</div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-12 bg-gradient-to-b from-blue-500/50 to-transparent mt-4"></div>
                  )}
                </div>

                {/* Right: Content */}
                <div className="pb-4 flex-grow">
                  <h3 className="text-lg font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-sm text-blue-400 mb-4 font-medium">
                    {step.duration}
                  </p>
                  <p className="text-sm text-zinc-300 mb-4">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.points.map((point, j) => (
                      <li key={j} className="text-xs text-zinc-400 flex items-start">
                        <span className="text-blue-400 mr-2 mt-0.5">✓</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-zinc-300 mb-6">
            Ready to start? Let's discuss your project.
          </p>
          <a href="mailto:mamcbt@gmail.com" className="btn-primary text-lg">
            Start a Project →
          </a>
        </div>
      </div>
    </section>
  );
}
