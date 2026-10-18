import React from 'react';
import { GraduationCap, Award, School, ShieldCheck, CheckCircle2, Database, Terminal, Sparkles } from 'lucide-react';
import { educationList, certificationsList } from '../data/portfolioData';

const CERT_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Database,
  Terminal,
  Sparkles,
};

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase mb-2">
            05. Academic Foundation & Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & Certifications
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Formal engineering education in Computer Science accompanied by industry-verified technical credentials.
          </p>
        </div>

        {/* Education Institutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {educationList.map((edu, idx) => (
            <div
              key={edu.institution}
              className="rounded-2xl border border-slate-800/90 bg-[#0a101d]/90 p-6 sm:p-7 backdrop-blur-sm transition-all hover:border-slate-700 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/40 border border-cyan-800/60 flex items-center justify-center text-cyan-400">
                    {idx === 0 ? <GraduationCap className="w-5 h-5" /> : <School className="w-5 h-5" />}
                  </div>

                  {edu.cgpa && (
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                      <Award className="w-3.5 h-3.5 text-cyan-400" />
                      <span>CGPA: {edu.cgpa}</span>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {edu.institution}
                </h3>
                <p className="text-sm text-cyan-300 font-medium mt-1">
                  {edu.degree}
                </p>
                <p className="text-xs text-slate-400 mt-0.5">
                  {edu.field}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-850 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>{edu.year}</span>
                <span className="text-slate-500">{edu.location}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Certifications Strip */}
        <div className="rounded-2xl border border-slate-800/80 bg-[#070b14]/90 p-6 sm:p-7">
          <div className="flex items-center gap-2 mb-5">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-300">
              Verified Technical Certifications
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {certificationsList.map((cert) => {
              const Icon = CERT_ICONS[cert.icon] || ShieldCheck;
              return (
                <div
                  key={cert.name}
                  className="p-4 rounded-xl bg-slate-950/80 border border-slate-850 hover:border-cyan-500/40 transition-colors flex items-start gap-3.5 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-cyan-400 shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                      {cert.name}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                    <span className="inline-block mt-2 text-[10px] font-mono text-cyan-400/90 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-800/40">
                      {cert.level}
                    </span>
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
