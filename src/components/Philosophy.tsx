import React from 'react';
import { Search, Compass, Hammer, Rocket, ArrowRight } from 'lucide-react';
import { philosophySteps } from '../data/portfolioData';

const STEP_ICONS = [Search, Compass, Hammer, Rocket];

export const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Personal Philosophy Quote */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase mb-2">
            06. Engineering Methodology
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            How I Build
          </h2>

          <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-slate-900 to-[#0a101d] border-l-2 border-cyan-400 border-y border-r border-slate-800/80">
            <blockquote className="text-base sm:text-lg text-slate-200 font-medium italic">
              "I prefer projects that begin with a real problem rather than simply choosing a technology first."
            </blockquote>
            <span className="block text-xs font-mono text-cyan-400 mt-2">
              — Muthuraman C K · Problem-First Mindset
            </span>
          </div>
        </div>

        {/* 4-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {philosophySteps.map((step, idx) => {
            const Icon = STEP_ICONS[idx % STEP_ICONS.length];

            return (
              <div
                key={step.step}
                className="relative rounded-2xl border border-slate-800/90 bg-[#0a101d]/90 p-6 flex flex-col justify-between transition-all duration-200 hover:border-slate-700 hover:bg-[#0d1424] group"
              >
                <div>
                  {/* Step Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black font-mono text-cyan-400/90 tabular-nums">
                      {step.step}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white tracking-tight mb-2 group-hover:text-cyan-200 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {step.description}
                  </p>
                </div>

                {/* Bullets */}
                <div className="pt-3 border-t border-slate-850 space-y-1.5">
                  {step.bullets.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2 text-[11px] text-slate-300">
                      <span className="text-cyan-400 mt-0.5">·</span>
                      <span className="leading-snug">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
