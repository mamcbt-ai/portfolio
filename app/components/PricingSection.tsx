'use client';

export default function PricingSection() {
  const packages = [
    {
      title: "AI Feature Integration",
      icon: "💡",
      startPrice: "$2.5K",
      endPrice: "$5K",
      timeline: "2-3 weeks",
      features: [
        "LLM/RAG integration consultation",
        "Architecture & implementation",
        "Testing & deployment",
        "2 weeks of post-launch support",
      ],
      cta: "Start Project",
      ctaColor: "btn-primary",
    },
    {
      title: "Backend & API Systems",
      icon: "⚙️",
      startPrice: "$3K",
      endPrice: "$8K",
      timeline: "3-4 weeks",
      features: [
        "Requirements & architecture design",
        "FastAPI/database implementation",
        "API documentation & testing",
        "Deployment & monitoring setup",
      ],
      cta: "Start Project",
      ctaColor: "btn-primary",
    },
    {
      title: "Full-Stack Product Build",
      icon: "🚀",
      startPrice: "$5K",
      endPrice: "$15K+",
      timeline: "Custom",
      features: [
        "End-to-end product development",
        "Frontend + backend + deployment",
        "Design collaboration included",
        "30-day post-launch support",
      ],
      cta: "Schedule Call",
      ctaColor: "btn-secondary",
    },
  ];

  return (
    <section className="relative section-padding border-b border-zinc-800/50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="container-max">
        <div className="max-w-2xl mb-16">
          <h2 className="heading-md mb-6">Flexible Engagement Options</h2>
          <p className="text-lg text-zinc-300">
            I work with startups and teams on three main engagement models. Each includes consultation,
            architecture review, testing, and post-launch support.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className="card flex flex-col h-full group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="text-4xl">{pkg.icon}</div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {pkg.title}
              </h3>

              {/* Pricing */}
              <div className="mb-6 pb-6 border-b border-zinc-700/50">
                <p className="text-sm text-zinc-400 mb-2">Starting at</p>
                <p className="text-2xl font-bold gradient-text">
                  {pkg.startPrice}
                </p>
                <p className="text-xs text-zinc-500 mt-2">up to {pkg.endPrice}</p>
                <p className="text-xs text-zinc-400 mt-3 font-medium">{pkg.timeline}</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8 flex-grow">
                {pkg.features.map((feature, j) => (
                  <li key={j} className="flex items-start text-sm text-zinc-300">
                    <span className="text-blue-400 mr-3 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="mailto:mamcbt@gmail.com?subject=Project%20Inquiry"
                className={`${pkg.ctaColor} w-full text-center`}
              >
                {pkg.cta}
              </a>

              {/* Subtext */}
              <p className="text-xs text-zinc-500 text-center mt-4">
                Not sure which fits? <a href="mailto:mamcbt@gmail.com" className="text-blue-400 hover:text-blue-300">Let's talk</a>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
