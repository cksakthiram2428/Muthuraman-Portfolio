import React from 'react';
import { Award, GraduationCap, Code2, Layers, CheckCircle2 } from 'lucide-react';
import { quickStats, personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase mb-2">
            01. Background & Perspective
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-[16px]">
            <p className="text-slate-200 font-medium text-lg leading-snug">
              I am a Computer Science Engineering student with a strong interest in software development, AI, backend systems and real-world problem solving. I enjoy building projects that go beyond simple demonstrations and attempt to solve practical problems.
            </p>

            <p className="text-slate-400">
              Throughout my academic journey and practical internship at VirtualWorks Lab, I have worked across multiple programming languages—including Python, Java, C, and C++—alongside relational databases and web technologies. Rather than chasing fleeting trends, I prioritize software fundamentals: structured schemas, algorithmic clarity, defensible security, and maintainable architectures.
            </p>

            <p className="text-slate-400">
              My hands-on experience includes engineering satellite imagery cloud removal systems using CNN-Transformers and GeoTIFF processing (Pixel Orbit AI), architecting supply-chain risk intelligence models with interactive D3.js network graphs (Trust Graph AI), and building 5 practical Python systems during my internship. I am eager to contribute to collaborative engineering teams where I can build reliable software that delivers genuine real-world impact.
            </p>

            {/* Core highlights */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Strong foundational CS & Algorithms</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Hands-on Python & Backend tooling</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Internship & Project execution</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Problem-first engineering mindset</span>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Stat Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {quickStats.map((stat, idx) => {
              const icons = [Award, GraduationCap, Code2, Layers];
              const Icon = icons[idx % icons.length];

              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-slate-800/80 bg-[#0a101d]/80 p-5 backdrop-blur-sm transition-all duration-200 hover:border-slate-700 hover:bg-[#0d1424] group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono text-slate-500">{stat.label}</span>
                    <Icon className="w-4 h-4 text-cyan-400/80 group-hover:text-cyan-300 transition-colors" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight tabular-nums mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 line-clamp-1">
                    {stat.caption}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
