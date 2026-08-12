'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackAuditApplication } from '@/app/components/AnalyticsSetup';

export default function FreeAuditPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'web',
    description: '',
    currentStatus: 'idea',
    challenges: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/audit-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        trackAuditApplication();
        setIsSubmitted(true);
        setFormData({ name: '', email: '', company: '', projectType: 'web', description: '', currentStatus: 'idea', challenges: '' });
      }
    } catch (error) {
      console.error('Error submitting audit application:', error);
    } finally {
      setIsLoading(false);
    }
  };

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

        {isSubmitted ? (
          // Success Screen
          <div className="space-y-8 mb-16 p-12 bg-green-500/10 border border-green-500/20 rounded-lg">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">✅ Application Received</h2>
              <p className="text-zinc-300 mb-6">
                Thank you for applying! I'll review your project and send you a detailed audit report with recommendations within 24 hours.
              </p>

              <div className="space-y-4 text-sm text-zinc-400">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">→</span>
                  <span>Check your email <strong>{formData.email}</strong> for next steps</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">→</span>
                  <span>Audit will include 3-5 specific recommendations tailored to your project</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 font-bold">→</span>
                  <span>You'll receive an action plan with priority levels and implementation tips</span>
                </div>
              </div>

              <div className="pt-6">
                <Link href="/" className="btn-primary inline-block">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-12 md:grid-cols-3">
            {/* Form */}
            <div className="md:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Your Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder-zinc-600 focus:border-blue-500 outline-none"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder-zinc-600 focus:border-blue-500 outline-none"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Company / Project Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder-zinc-600 focus:border-blue-500 outline-none"
                    placeholder="My Startup"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Project Type *</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white focus:border-blue-500 outline-none"
                  >
                    <option value="web">Web Application</option>
                    <option value="backend">Backend/API</option>
                    <option value="mobile">Mobile App</option>
                    <option value="ai">AI/ML System</option>
                    <option value="data">Data Pipeline</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Current Status */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Current Status *</label>
                  <select
                    name="currentStatus"
                    value={formData.currentStatus}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white focus:border-blue-500 outline-none"
                  >
                    <option value="idea">Idea Stage</option>
                    <option value="prototype">Prototype</option>
                    <option value="beta">Beta/MVP</option>
                    <option value="live">Live in Production</option>
                  </select>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Brief Project Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder-zinc-600 focus:border-blue-500 outline-none resize-none"
                    placeholder="What does your project do? What problem does it solve?"
                  />
                </div>

                {/* Challenges */}
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Current Challenges (Optional)</label>
                  <textarea
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded text-white placeholder-zinc-600 focus:border-blue-500 outline-none resize-none"
                    placeholder="Performance issues? Scaling concerns? Architecture questions?"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full btn-primary py-3 disabled:opacity-50"
                >
                  {isLoading ? 'Submitting...' : 'Request Free Audit'}
                </button>
              </form>
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
        )}

        {/* CTA Back */}
        {!isSubmitted && (
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
        )}
      </div>
    </div>
  );
}
