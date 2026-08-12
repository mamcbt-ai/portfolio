import Link from 'next/link';
import FreeAuditForm from '@/app/components/FreeAuditForm';

export const metadata = {
  title: 'Free Technical Audit - HODOPHILE',
  description: 'Get a 30-minute free technical audit of your project with 3-5 actionable recommendations.',
};

export default function FreeAuditPage() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container-max max-w-3xl">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <Link href="/" className="text-blue-400 hover:text-blue-300 text-sm">
            ← Back to Home
          </Link>

          <div className="space-y-4">
            <h1 className="heading-lg">Free 30-Minute Technical Audit</h1>
            <p className="text-xl text-zinc-300">
              I'll review your project and provide 3-5 actionable recommendations to improve performance, scalability, or architecture.
            </p>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-3">
          {/* Form */}
          <div className="md:col-span-2">
            <FreeAuditForm />
          </div>

          {/* Sidebar Info */}
          <div className="space-y-6">
            {/* What's Included */}
            <div className="p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-lg">
              <h3 className="font-semibold text-white mb-4">What's Included</h3>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>30-minute technical review</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>3-5 actionable recommendations</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Prioritized action plan</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400">✓</span>
                  <span>Next steps to implement</span>
                </li>
              </ul>
            </div>

            {/* Timeline */}
            <div className="p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-lg">
              <h3 className="font-semibold text-white mb-4">Timeline</h3>
              <div className="space-y-3 text-sm text-zinc-400">
                <div>
                  <div className="font-medium text-white">Within 24 hours</div>
                  <div>Detailed audit report delivered</div>
                </div>
                <div>
                  <div className="font-medium text-white">Then</div>
                  <div>Discuss next steps or improvements</div>
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div className="p-6 bg-zinc-900/50 border border-zinc-800/50 rounded-lg">
              <h3 className="font-semibold text-white mb-4">Who Should Apply</h3>
              <ul className="space-y-2 text-sm text-zinc-400">
                <li>✓ Early-stage founders</li>
                <li>✓ Product teams evaluating tech</li>
                <li>✓ Projects needing second opinion</li>
                <li>✓ Teams scaling rapidly</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Back */}
        <div className="mt-16 pt-16 border-t border-zinc-800 text-center">
          <p className="text-zinc-400 mb-6">Not ready for audit? Explore other options:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/project-brief" className="btn-secondary">
              Send Project Brief
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
