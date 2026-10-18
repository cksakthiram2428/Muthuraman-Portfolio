import React from 'react';
import { philosophySteps } from '../data/portfolioData';
import { Lightbulb, CheckCircle2 } from 'lucide-react';

export const EditorialPhilosophy: React.FC = () => {
  const cardColors = [
    { bg: 'bg-blue-50/70', border: 'border-blue-200', num: 'text-blue-600', badge: 'bg-blue-100 text-blue-800' },
    { bg: 'bg-indigo-50/70', border: 'border-indigo-200', num: 'text-indigo-600', badge: 'bg-indigo-100 text-indigo-800' },
    { bg: 'bg-teal-50/70', border: 'border-teal-200', num: 'text-teal-600', badge: 'bg-teal-100 text-teal-800' },
    { bg: 'bg-amber-50/70', border: 'border-amber-200', num: 'text-amber-600', badge: 'bg-amber-100 text-amber-800' },
  ];

  return (
    <section id="philosophy" className="relative py-24 sm:py-32 bg-slate-50/85 backdrop-blur-xl border-t border-slate-200/80 font-hn text-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-mono uppercase tracking-[0.2em] mb-4 font-medium">
              <Lightbulb size={12} className="text-amber-600" />
              <span>06 &mdash; Engineering Discipline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              How I Build Software
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-mono">
            Four guiding rules that govern architecture modularity, code quality, and practical problem solving.
          </p>
        </div>

        {/* 4 Editorial Principle Columns with Distinct Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {philosophySteps.map((step, idx) => {
            const style = cardColors[idx % 4];
            return (
              <div 
                key={step.step}
                className={`p-6 sm:p-7 rounded-3xl ${style.bg} border ${style.border} shadow-xs flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow`}
              >
                <div className="space-y-4">
                  <span className={`text-3xl font-mono font-bold ${style.num} block`}>
                    {step.step}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 text-xs text-slate-700">
                    {step.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-1.5 leading-relaxed">
                        <span className="text-slate-400">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${style.badge}`}>
                    Execution Standard
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
