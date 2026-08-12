import ProjectBriefForm from '@/app/components/ProjectBriefForm';
import Link from 'next/link';

export const metadata = {
  title: 'Project Brief - HODOPHILE',
  description: 'Share your project details and get a detailed proposal within 24 hours.',
};

export default function ProjectBriefPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container-max max-w-3xl">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Back to Home
          </Link>
          <div className="space-y-4">
            <div className="inline-block">
              <span className="badge">Project Inquiry</span>
            </div>
            <h1 className="heading-lg">Let's Discuss Your Project</h1>
            <p className="text-xl text-zinc-300">
              Share the details of what you're building. The more specific you are, the better proposal I can create.
            </p>
          </div>
        </div>

        {/* Timeline */}
        <div className="grid gap-6 md:grid-cols-4 mb-16 p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-lg">
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-2">1</div>
            <p className="text-sm text-zinc-400">You submit brief</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-2">2</div>
            <p className="text-sm text-zinc-400">I review (24h)</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-2">3</div>
            <p className="text-sm text-zinc-400">You get proposal</p>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold gradient-text mb-2">4</div>
            <p className="text-sm text-zinc-400">Kickoff call</p>
          </div>
        </div>

        {/* Form */}
        <ProjectBriefForm />

        {/* FAQ */}
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-bold text-white">FAQ</h3>

          {[
            {
              q: 'How long does it take to get a proposal?',
              a: 'I review every brief carefully and send a detailed proposal within 24 hours. If I have clarifying questions, I\'ll email or call first.',
            },
            {
              q: 'What if my project is vague or still in ideation?',
              a: 'That\'s fine. Describe the problem you\'re trying to solve, the users you want to help, and what success looks like. I can help shape the rest.',
            },
            {
              q: 'Is there a minimum project size?',
              a: 'No hard minimum. I work on projects ranging from landing pages ($5K) to full-stack products ($100K+). Every project matters.',
            },
            {
              q: 'Do you offer retainer or long-term support?',
              a: 'Yes. After launch, I offer retainer support ($15K-50K/month) for maintenance, scaling, and new features.',
            },
            {
              q: 'What if I\'m not sure if this is the right fit?',
              a: 'Schedule a free 15-minute call first (link in the Contact section). We can chat about your project and whether working together makes sense.',
            },
          ].map((item, i) => (
            <div key={i} className="space-y-3">
              <h4 className="font-semibold text-white text-lg">{item.q}</h4>
              <p className="text-zinc-400">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
