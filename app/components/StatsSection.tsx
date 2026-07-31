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

        <div className="grid gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="animated-border rounded-xl p-8 text-center hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              <div className="stat-number mb-3">
                {stat.value}
                <span className="text-2xl">{stat.suffix}</span>
              </div>
              <p className="text-zinc-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
