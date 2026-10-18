import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, ChevronDown, ChevronUp, Layers, CheckCircle2 } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';
import { FeaturedProject } from '../types';
import { ProjectModal } from './ProjectModal';

export const FeaturedProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<FeaturedProject | null>(null);
  const [expandedCollection, setExpandedCollection] = useState<boolean>(false);

  return (
    <section id="projects" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-mono font-medium text-cyan-400 tracking-wider uppercase mb-2">
            03. Core Work & Systems
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Applied software engineering projects designed to solve practical problems across supply chain intelligence, document verification, audio processing, and Python systems automation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {featuredProjects.map((project, index) => {
            const isCollection = project.isCollection;

            return (
              <div
                key={project.id}
                className="rounded-2xl border border-slate-800/80 bg-[#0a101d]/90 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-slate-700 hover:shadow-2xl hover:shadow-black/50"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Visual Preview Side (Desktop 5 cols) */}
                  <div className="lg:col-span-5 relative bg-slate-950 flex flex-col justify-between p-6 border-b lg:border-b-0 lg:border-r border-slate-800/80 overflow-hidden group">
                    {/* Project visual thumbnail */}
                    <div className="relative rounded-xl overflow-hidden border border-slate-800/90 aspect-[16/10] bg-slate-900 mb-4">
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                      
                      <div className="absolute bottom-2.5 left-3 text-[11px] font-mono text-cyan-300">
                        {project.tagline}
                      </div>
                    </div>

                    {/* Left side tech list */}
                    <div className="space-y-3">
                      <span className="text-xs font-mono text-slate-400 block">Technologies Utilized:</span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-300 bg-slate-900 border border-slate-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Deep-Dive Button */}
                    <button
                      onClick={() => setActiveProject(project)}
                      className="mt-6 w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/60 border border-cyan-800/50 hover:border-cyan-500/50 transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Explore 6-Step Technical Breakdown</span>
                      <ArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                    </button>
                  </div>

                  {/* Details Side (Desktop 7 cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Category and Index (clean unboxed text) */}
                      <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
                        <span>Project 0{index + 1}</span>
                        <span aria-hidden="true" className="text-slate-700">·</span>
                        <span className="text-slate-400">{project.category}</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-3">
                        {project.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Problem & Solution Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-800/80">
                        <div className="space-y-1">
                          <span className="text-xs font-mono text-rose-400 block">The Challenge</span>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {project.problem}
                          </p>
                        </div>
                        <div className="space-y-1">
                          <span className="text-xs font-mono text-emerald-400 block">The Solution</span>
                          <p className="text-xs text-slate-400 leading-relaxed">
                            {project.solution}
                          </p>
                        </div>
                      </div>

                      {/* My Contribution */}
                      <div className="mt-4 pt-3 border-t border-slate-800/80">
                        <span className="text-xs font-mono text-cyan-300 block mb-1">My Engineering Contribution</span>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.myContribution}
                        </p>
                      </div>

                      {/* Key Features Bullet Points */}
                      <div className="mt-5 space-y-2">
                        <span className="text-xs font-mono text-slate-400 block">Key Implementation Highlights:</span>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {project.keyFeatures.slice(0, 4).map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Expandable subprojects for Project 4 */}
                      {isCollection && project.subProjects && (
                        <div className="mt-5 pt-4 border-t border-slate-800/80">
                          <button
                            onClick={() => setExpandedCollection(!expandedCollection)}
                            className="flex items-center justify-between w-full p-2.5 rounded-lg bg-slate-950 border border-slate-800 hover:border-slate-700 text-xs font-medium text-slate-200 transition-colors"
                          >
                            <span>View 5 Python Internship Projects (VirtualWorks Lab)</span>
                            {expandedCollection ? <ChevronUp className="w-4 h-4 text-cyan-400" /> : <ChevronDown className="w-4 h-4 text-cyan-400" />}
                          </button>

                          {expandedCollection && (
                            <div className="mt-3 grid grid-cols-1 gap-2.5 pl-2 animate-in fade-in duration-200">
                              {project.subProjects.map((sub, sIdx) => (
                                <div key={sIdx} className="p-3 rounded-lg bg-[#070b14] border border-slate-800/90 text-xs space-y-1">
                                  <div className="flex items-center justify-between font-semibold text-slate-200">
                                    <span>{sub.title}</span>
                                    <span className="text-[10px] font-mono text-slate-500">Module 0{sIdx + 1}</span>
                                  </div>
                                  <p className="text-slate-400 text-[11px] leading-relaxed">{sub.description}</p>
                                  <div className="flex flex-wrap gap-1 pt-1">
                                    {sub.tech.map((t) => (
                                      <span key={t} className="text-[10px] font-mono text-cyan-400/90 bg-slate-900 px-1.5 py-0.2 rounded">
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
                    </div>

                    {/* Bottom Actions Row */}
                    <div className="pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex items-center gap-1.5 text-slate-400 font-mono">
                          <Github className="w-4 h-4 text-slate-500" />
                          <span>{project.githubUrl}</span>
                        </span>

                        {project.demoUrl && (
                          <span className="inline-flex items-center gap-1.5 text-cyan-400 font-mono">
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>{project.demoUrl}</span>
                          </span>
                        )}
                      </div>

                      <button
                        onClick={() => setActiveProject(project)}
                        className="text-cyan-400 hover:text-cyan-300 font-medium inline-flex items-center gap-1 group cursor-pointer"
                      >
                        <span>Detailed Architecture & Outcomes</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Project Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
