'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  projectDescription: string;
  industry: string;
}

export default function FreeAuditPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectDescription: '',
    industry: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-32 pb-16 section-padding">
        <div className="container-max max-w-2xl">
          <div className="text-center space-y-8">
            <div className="text-6xl mb-6">✅</div>
            <h1 className="heading-lg">Thanks for applying!</h1>
            <p className="text-xl text-zinc-300">
              I've received your submission. I'll review your project and send you an email within 24 hours with available time slots to schedule your 30-minute audit.
            </p>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mt-8">
              <p className="text-sm text-zinc-300 mb-4">
                <strong>What happens next:</strong>
              </p>
              <ul className="text-sm text-zinc-400 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">1.</span>
                  <span>I review your project details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">2.</span>
                  <span>You receive email with 5 available time slots</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">3.</span>
                  <span>30-minute video call (Zoom)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3">4.</span>
                  <span>3-5 actionable recommendations emailed within 24 hours</span>
                </li>
              </ul>
            </div>
            <div className="pt-8">
              <Link href="/" className="btn-primary text-lg">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="container-max max-w-2xl">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <div className="inline-block">
            <span className="badge">Free Assessment</span>
          </div>
          <h1 className="heading-lg">Free Project Audit</h1>
          <p className="text-xl text-zinc-300">
            Get a personalized 30-minute assessment of your project. I'll identify quick wins,
            recommend improvements, and help you understand next steps.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-6 md:grid-cols-2 mb-16 p-8 bg-zinc-900/50 border border-zinc-800/50 rounded-lg backdrop-blur">
          {[
            {
              icon: '🎯',
              title: 'Architecture Review',
              desc: 'Get feedback on your current tech stack and system design',
            },
            {
              icon: '⚡',
              title: 'Quick Wins',
              desc: '3-5 actionable improvements you can implement immediately',
            },
            {
              icon: '📈',
              title: 'Scaling Analysis',
              desc: 'Identify bottlenecks and recommend scaling strategies',
            },
            {
              icon: '🚀',
              title: 'Next Steps',
              desc: 'Clear roadmap for your project or product development',
            },
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <div className="text-2xl">{item.icon}</div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Perfect For */}
        <div className="mb-16 p-8 bg-blue-500/5 border border-blue-500/20 rounded-lg backdrop-blur">
          <h3 className="text-lg font-semibold text-white mb-6">Perfect For:</h3>
          <ul className="space-y-3 text-zinc-300">
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">✓</span>
              <span>Startups unsure about technical approach or architecture</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">✓</span>
              <span>Teams scaling an app and hitting performance issues</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">✓</span>
              <span>Founders considering hiring developers (get expert perspective first)</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-400 mr-3">✓</span>
              <span>Product teams wanting to add AI features (confused about approach)</span>
            </li>
          </ul>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-zinc-800/50 rounded-lg backdrop-blur bg-zinc-900/30">
          <h3 className="text-xl font-bold text-white mb-8">Tell Me About Your Project</h3>

          {/* Name */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white">
              Your Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition"
              placeholder="Azar"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition"
              placeholder="you@company.com"
            />
          </div>

          {/* Industry */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white">
              Industry / Domain
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition"
            >
              <option value="">Select an industry...</option>
              <option value="education">Education / EdTech</option>
              <option value="fintech">FinTech / Finance</option>
              <option value="ecommerce">E-Commerce</option>
              <option value="healthcare">Healthcare / MedTech</option>
              <option value="saas">SaaS / B2B</option>
              <option value="ai">AI / Machine Learning</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Project Description */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white">
              Project Description *
            </label>
            <p className="text-xs text-zinc-400 mb-2">
              Tell me about your project: What problem does it solve? What's your current tech stack?
              What's your biggest challenge?
            </p>
            <textarea
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition resize-none"
              placeholder="Describe your project, current architecture, and what you'd like feedback on..."
            />
          </div>

          {/* Disclaimer */}
          <div className="p-4 bg-zinc-900/50 border border-zinc-700/50 rounded-lg">
            <p className="text-xs text-zinc-400">
              💡 <strong>What to expect:</strong> This is a genuine audit—I'll spend 30 minutes reviewing
              your project, asking hard questions, and giving actionable advice. No sales pitch, just value.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full text-lg font-semibold"
          >
            {loading ? 'Submitting...' : 'Request Free Audit →'}
          </button>

          <p className="text-center text-xs text-zinc-400">
            I'll respond within 24 hours with available time slots.
          </p>
        </form>

        {/* FAQ */}
        <div className="mt-16 space-y-8">
          <h3 className="text-2xl font-bold text-white">FAQ</h3>
          {[
            {
              q: "How long is the audit?",
              a: "Exactly 30 minutes. I keep it focused and actionable.",
            },
            {
              q: "What if I need more time?",
              a: "If we need deeper work, we can discuss a full project engagement after the audit.",
            },
            {
              q: "Do you take notes?",
              a: "Yes. You'll receive a summary email within 24 hours with 3-5 specific recommendations and an action plan.",
            },
            {
              q: "What if I don't hire you after?",
              a: "That's totally fine. The goal is to give you genuine value—whether you work with me or not.",
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
