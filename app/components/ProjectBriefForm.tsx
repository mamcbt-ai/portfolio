'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';

interface BriefFormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
  budget: string;
  timeline: string;
  currentStatus: string;
  challenges: string;
  phone: string;
}

export default function ProjectBriefForm() {
  const [formData, setFormData] = useState<BriefFormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
    currentStatus: '',
    challenges: '',
    phone: '',
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

    try {
      const response = await fetch('/api/project-brief', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="space-y-8 text-center py-16">
        <div className="text-6xl mb-6">✅</div>
        <h2 className="heading-md">Brief Received</h2>
        <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
          Thanks for the project brief. I've received your details and will review them carefully.
        </p>
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-sm text-zinc-300 mb-4">
            <strong>Next steps:</strong>
          </p>
          <ul className="text-sm text-zinc-400 space-y-2">
            <li>✓ I'll review your project details (within 24 hours)</li>
            <li>✓ Clarify any requirements or constraints</li>
            <li>✓ Send you a detailed proposal with timeline & cost</li>
            <li>✓ Schedule a kickoff call if everything aligns</li>
          </ul>
        </div>
        <p className="text-sm text-zinc-400">
          Expect an email from me within 24 hours at <strong>{formData.email}</strong>
        </p>
        <Link href="/" className="btn-primary text-lg inline-block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="heading-md mb-6">Project Brief</h2>
        <p className="text-lg text-zinc-300 mb-8">
          Help me understand your project. The more detail you provide, the more accurate my proposal will be.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 p-8 border border-zinc-800/50 rounded-lg backdrop-blur bg-zinc-900/30">
        {/* Row 1: Name & Email */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white">Your Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition"
              placeholder="John Doe"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white">Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition"
              placeholder="john@company.com"
            />
          </div>
        </div>

        {/* Row 2: Company & Phone */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white">Company / Startup</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition"
              placeholder="Your company name"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white">Phone (Optional)</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition"
              placeholder="+91 98765 43210"
            />
          </div>
        </div>

        {/* Project Type */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-white">What are you building? *</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition"
          >
            <option value="">Select project type...</option>
            <option value="landing-page">Landing Page / Portfolio</option>
            <option value="web-app">Web Application (SaaS, Dashboard)</option>
            <option value="mobile-app">Mobile App</option>
            <option value="backend-api">Backend / API System</option>
            <option value="ai-feature">AI Feature Integration</option>
            <option value="mvp">MVP / Full Product</option>
            <option value="other">Other</option>
          </select>
        </div>

        {/* Project Description */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-white">Project Description *</label>
          <p className="text-xs text-zinc-400 mb-2">What problem does it solve? Who are your users?</p>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition resize-none"
            placeholder="Describe your project, target users, and core features..."
          />
        </div>

        {/* Current Status */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-white">Current Status</label>
          <select
            name="currentStatus"
            value={formData.currentStatus}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition"
          >
            <option value="">Select status...</option>
            <option value="idea">Just an idea</option>
            <option value="design">Design ready</option>
            <option value="partial">Partially built</option>
            <option value="needs-refactor">Needs refactoring / scaling</option>
            <option value="ready-to-launch">Ready to launch</option>
          </select>
        </div>

        {/* Budget & Timeline */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white">Budget Range</label>
            <select
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition"
            >
              <option value="">Select budget...</option>
              <option value="5-25k">₹5,000 - ₹25,000</option>
              <option value="25-50k">₹25,000 - ₹50,000</option>
              <option value="50-100k">₹50,000 - ₹1,00,000</option>
              <option value="100k+">₹1,00,000+</option>
              <option value="flexible">Flexible / TBD</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-white">Timeline</label>
            <select
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white focus:border-blue-500 focus:outline-none transition"
            >
              <option value="">Select timeline...</option>
              <option value="urgent">Urgent (2-4 weeks)</option>
              <option value="normal">Normal (1-3 months)</option>
              <option value="flexible">Flexible (4+ months)</option>
            </select>
          </div>
        </div>

        {/* Key Challenges */}
        <div className="space-y-2">
          <label className="block text-sm font-semibold text-white">Key Challenges (Optional)</label>
          <p className="text-xs text-zinc-400 mb-2">What's blocking you right now? Tech stack uncertainty, scaling issues, architectural decisions?</p>
          <textarea
            name="challenges"
            value={formData.challenges}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:border-blue-500 focus:outline-none transition resize-none"
            placeholder="Tell me about your biggest technical challenges..."
          />
        </div>

        {/* Disclaimer */}
        <div className="p-4 bg-zinc-900/50 border border-zinc-700/50 rounded-lg">
          <p className="text-xs text-zinc-400">
            💡 <strong>How I use this:</strong> I review every brief carefully and send a detailed proposal within 24 hours. This brief helps me understand scope, timeline, and fit before we schedule a call.
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full text-lg font-semibold"
        >
          {loading ? 'Submitting...' : 'Send Project Brief →'}
        </button>

        <p className="text-center text-xs text-zinc-400">
          I'll review this and send you a proposal within 24 hours.
        </p>
      </form>
    </div>
  );
}
