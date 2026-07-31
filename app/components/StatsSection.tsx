'use client';

import { useState, useEffect } from 'react';

export default function StatsSection() {
  const [stats, setStats] = useState([
    { label: 'Projects Built', value: 0, target: 8, suffix: '' },
    { label: 'Years Experience', value: 0, target: 3, suffix: '+' },
    { label: 'Technologies', value: 0, target: 20, suffix: '+' },
    { label: 'Satisfied Clients', value: 0, target: 100, suffix: '%' },
  ]);

  useEffect(() => {
    const intervals = stats.map((stat, idx) => {
      return setInterval(() => {
        setStats((prev) => {
          const newStats = [...prev];
          if (newStats[idx].value < newStats[idx].target) {
            newStats[idx].value += Math.ceil(newStats[idx].target / 20);
            if (newStats[idx].value > newStats[idx].target) {
              newStats[idx].value = newStats[idx].target;
            }
          }
          return newStats;
        });
      }, 50);
    });

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <section className="relative section-padding border-b border-zinc-800/50 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-md">Impact & Expertise</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-4 sm:grid-cols-2">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="card animated-border text-center group hover:scale-105 transition-transform duration-300 flex flex-col items-center justify-center"
              style={{ animationDelay: `${i * 0.1}s`, minHeight: '140px' }}
            >
              <div className="stat-number mb-3 text-3xl font-bold">
                {stat.value}
                <span className="text-lg ml-1">{stat.suffix}</span>
              </div>
              <p className="text-zinc-400 font-medium group-hover:text-zinc-300 transition-colors">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
