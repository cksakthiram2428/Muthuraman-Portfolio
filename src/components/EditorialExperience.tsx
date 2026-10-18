import React from 'react';
import { workExperienceList } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export const EditorialExperience: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-slate-50/85 backdrop-blur-xl border-t border-slate-200/80 font-hn text-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-mono uppercase tracking-[0.2em] mb-4 font-medium">
              <Briefcase size={12} className="text-blue-600" />
              <span>04 &mdash; Practical Trajectory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Industry Experience
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-mono">
            Direct production experience across structured remote internships and end-to-end full-stack systems engineering.
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {workExperienceList.map((exp, idx) => (
            <div 
              key={exp.company}
              className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-lg shadow-slate-900/5 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:border-slate-300 transition-all"
            >
              {/* Left Column: Organization, Role, Period */}
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200">
                    0{idx + 1} &mdash; {exp.mode}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
                  {exp.company}
                </h3>

                <div className="text-sm font-semibold text-blue-600">
                  {exp.role}
                </div>

                <div className="text-xs font-mono text-slate-500 space-y-1 pt-1">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={13} className="text-slate-400" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MapPin size={13} className="text-slate-400" />
                    <span>{exp.location || exp.mode}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Key Deliverables & Tech */}
              <div className="lg:col-span-7 space-y-5">
                <ul className="space-y-2.5 text-sm text-slate-600 leading-relaxed">
                  {exp.highlights.map((hl, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 size={15} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-mono rounded-md border border-slate-200 bg-slate-50 text-slate-700 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
