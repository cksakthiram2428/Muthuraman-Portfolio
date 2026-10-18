import React from 'react';
import { educationList, certificationsList } from '../data/portfolioData';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';

export const EditorialEducation: React.FC = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32 bg-white/80 backdrop-blur-xl border-t border-slate-200/80 font-hn text-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200/80 text-purple-700 text-xs font-mono uppercase tracking-[0.2em] mb-4 font-medium">
              <GraduationCap size={12} className="text-purple-600" />
              <span>05 &mdash; Academic Foundation</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Education & Certifications
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-mono">
            Formal computer science degree coupled with verified external technical credentials.
          </p>
        </div>

        {/* Education Blocks */}
        <div className="space-y-6">
          {educationList.map((edu, idx) => (
            <div 
              key={edu.institution}
              className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 sm:p-8 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline hover:border-slate-300 transition-all"
            >
              <div className="lg:col-span-2 text-xs font-mono text-slate-400 uppercase tracking-widest font-semibold">
                0{idx + 1} &mdash; {edu.year}
              </div>

              <div className="lg:col-span-7 space-y-1.5">
                <h3 className="text-2xl font-bold text-slate-900">
                  {edu.institution}
                </h3>
                <div className="text-sm font-semibold text-blue-600">
                  {edu.degree} &mdash; {edu.field}
                </div>
                <div className="text-xs font-mono text-slate-500 pt-0.5">
                  {edu.location}
                </div>
              </div>

              <div className="lg:col-span-3 flex items-center lg:justify-end">
                {edu.cgpa && (
                  <div className="px-4 py-2 rounded-xl bg-emerald-50 border border-emerald-300/80 font-mono text-xs text-emerald-900 font-bold shadow-xs">
                    Academic CGPA: <span className="text-emerald-700 text-sm font-extrabold">{edu.cgpa}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Technical Certifications */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold mb-6 flex items-center gap-2">
            <Award size={14} className="text-blue-600" />
            <span>Official Technical Credentials</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {certificationsList.map((cert, cIdx) => {
              const borderColors = [
                'border-emerald-200 hover:border-emerald-400 bg-emerald-50/50',
                'border-amber-200 hover:border-amber-400 bg-amber-50/50',
                'border-indigo-200 hover:border-indigo-400 bg-indigo-50/50'
              ];
              const tagColors = [
                'text-emerald-700 bg-emerald-100',
                'text-amber-800 bg-amber-100',
                'text-indigo-800 bg-indigo-100'
              ];

              return (
                <div 
                  key={cert.name}
                  className={`p-6 rounded-2xl border ${borderColors[cIdx % 3]} shadow-xs space-y-3 flex flex-col justify-between transition-all`}
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block font-semibold">
                      {cert.issuer}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 leading-snug">
                      {cert.name}
                    </h4>
                  </div>

                  <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] font-mono">
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${tagColors[cIdx % 3]}`}>
                      {cert.level}
                    </span>
                    <span className="text-emerald-600 font-bold flex items-center gap-1">
                      <CheckCircle2 size={12} />
                      <span>Verified</span>
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
