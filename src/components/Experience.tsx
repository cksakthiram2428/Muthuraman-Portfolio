import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Terminal } from 'lucide-react';
import { workExperienceList } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase mb-2">
            04. Industry Experience & Engineering
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Practical Experience
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Hands-on software development across hackathons, production-style projects, and full-stack internship deliverables.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-10">
          {workExperienceList.map((exp, idx) => (
            <div key={exp.company} className="relative group">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              </div>

              {/* Experience Card */}
              <div className="rounded-2xl border border-slate-800/90 bg-[#0a101d]/90 p-6 sm:p-8 backdrop-blur-sm transition-all duration-200 hover:border-slate-700 hover:bg-[#0d1424]">
                {/* Header Info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.company}
                      </span>
                      <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 border border-cyan-800/50 px-2 py-0.5 rounded">
                        {idx === 0 ? 'Engineering & Hackathons' : 'Internship'}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-slate-200 mt-1">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.duration}</span>
                    </div>
                    <span aria-hidden="true" className="text-slate-700">·</span>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{exp.location || exp.mode}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities & Achievements */}
                <div className="space-y-3 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-mono text-slate-400 block uppercase tracking-wider">
                    Key Deliverables & Responsibilities:
                  </span>
                  <ul className="space-y-2.5 text-sm text-slate-300">
                    {exp.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono text-slate-500">Technologies:</span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-xs font-mono text-cyan-300 bg-slate-900 border border-slate-800"
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
