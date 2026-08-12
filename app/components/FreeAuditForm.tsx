'use client';

import { useState } from 'react';
import { trackAuditApplication } from '@/app/components/AnalyticsSetup';

interface FormData {
  name: string;
  email: string;
  company: string;
  projectType: string;
  description: string;
  currentStatus: string;
  challenges: string;
}

export default function FreeAuditForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
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

  if (isSubmitted) {
    return (
      <div className="p-8 bg-green-500/10 border border-green-500/20 rounded-lg">
        <h3 className="text-xl font-bold text-white mb-4">✅ Application Received!</h3>
        <p className="text-zinc-300 mb-4">
          Thank you for applying. I'll review your project and send you a detailed audit report with recommendations within 24 hours.
        </p>
        <p className="text-sm text-zinc-400">Check your email for next steps.</p>
      </div>
    );
  }

  return (
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
  );
}
