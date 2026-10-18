import React, { useState } from 'react';
import { Github, ArrowUpRight, ChevronDown, ChevronUp, FolderGit2, CheckCircle2 } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

export const EditorialProjects: React.FC = () => {
  const [expandedCollection, setExpandedCollection] = useState(false);

  // Distinct theme badges for each project
  const getBadgeColors = (idx: number) => {
    switch (idx) {
      case 0:
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 1:
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 2:
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-amber-100 text-amber-800 border-amber-200';
    }
  };

  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-slate-50/85 backdrop-blur-xl border-t border-slate-200/80 font-hn text-slate-900">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/80 text-indigo-700 text-xs font-mono uppercase tracking-[0.2em] mb-4 font-medium">
              <FolderGit2 size={12} className="text-indigo-600" />
              <span>02 &mdash; Selected Works & Systems</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
              Engineering Projects
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-mono">
            Practical systems addressing supply chain transparency, remote sensing reconstruction, and automated data pipelines.
          </p>
        </div>

        {/* Project Editorial Articles */}
        <div className="space-y-16">
          {featuredProjects.map((project, idx) => (
            <article 
              key={project.id}
              className="bg-white/90 backdrop-blur-md border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-lg shadow-slate-900/5 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start hover:border-slate-300 transition-all"
            >
              {/* Left Column: Number, Title, Overview */}
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-baseline justify-between text-xs font-mono">
                  <span className="uppercase tracking-[0.18em] font-semibold text-slate-500">
                    System 0{idx + 1}
                  </span>
                  <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-medium ${getBadgeColors(idx)}`}>
                    {project.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                    {project.title}
                  </h3>
                  <div className="text-xs font-mono text-blue-600 font-semibold">
                    {project.tagline}
                  </div>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.description}
                </p>

                {/* Problem & Solution Callout */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs text-slate-700">
                  <div>
                    <strong className="text-slate-900 font-semibold block font-mono text-[11px] uppercase mb-1 text-rose-700">
                      Operational Problem:
                    </strong>
                    <p className="leading-relaxed">{project.problem}</p>
                  </div>

                  <div className="border-t border-slate-200/80 pt-2.5">
                    <strong className="text-slate-900 font-semibold block font-mono text-[11px] uppercase mb-1 text-emerald-700">
                      Engineered Solution:
                    </strong>
                    <p className="leading-relaxed">{project.solution}</p>
                  </div>
                </div>

                {/* Implementation Features */}
                <div className="space-y-2 pt-1">
                  <span className="text-xs font-mono uppercase tracking-[0.15em] text-slate-500 font-semibold block">
                    Key Architectural Features:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {project.keyFeatures.map((kf, kIdx) => (
                      <li key={kIdx} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-blue-600 shrink-0 mt-0.5" />
                        <span>{kf}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Collection Toggle for VirtualWorks Lab */}
                {project.isCollection && project.subProjects && (
                  <div className="pt-2">
                    <button
                      onClick={() => setExpandedCollection(!expandedCollection)}
                      className="text-xs font-mono uppercase tracking-wider text-amber-700 font-semibold flex items-center gap-1.5 underline cursor-pointer hover:text-amber-800"
                    >
                      <span>{expandedCollection ? 'Hide 5 Sub-Projects' : 'Inspect 5 Sub-Projects Delivered'}</span>
                      {expandedCollection ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>

                    {expandedCollection && (
                      <div className="grid grid-cols-1 gap-2.5 mt-4 animate-in fade-in duration-300">
                        {project.subProjects.map((sp) => (
                          <div key={sp.title} className="p-3.5 rounded-xl bg-amber-50/60 border border-amber-200/70 text-xs space-y-1.5">
                            <div className="font-semibold text-amber-950">{sp.title}</div>
                            <p className="text-slate-600 text-[11px] leading-relaxed">{sp.description}</p>
                            <div className="flex flex-wrap gap-1.5 pt-1">
                              {sp.tech.map((t) => (
                                <span key={t} className="text-[10px] px-2 py-0.5 rounded bg-white border border-amber-200 text-amber-900 font-mono">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Technologies & GitHub CTA */}
                <div className="pt-4 border-t border-slate-200 space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-slate-100 border border-slate-200 text-slate-700 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-700 hover:text-white bg-blue-50 hover:bg-blue-600 border border-blue-200 hover:border-blue-600 px-4 py-2.5 rounded-xl transition-all shadow-xs group font-semibold"
                    >
                      <Github size={15} />
                      <span>Inspect Repository on GitHub</span>
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: High-Res Vibrant Visual Preview */}
              <div className="lg:col-span-6 w-full">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-md group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-mono font-semibold text-slate-800 border border-slate-200 shadow-xs">
                    {project.category}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
