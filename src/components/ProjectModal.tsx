import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, ChevronRight, Layers, Lightbulb, Code2, ShieldAlert } from 'lucide-react';
import { FeaturedProject } from '../types';

interface ProjectModalProps {
  project: FeaturedProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#090e1a] border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 max-h-[92vh] flex flex-col z-10 overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#070b14]/90 backdrop-blur-sm shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
            <div>
              <span className="text-xs font-mono text-cyan-400 tracking-wide uppercase">{project.category}</span>
              <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-8 text-slate-300">
          {/* Top Banner & Overview */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-slate-200 font-medium leading-relaxed">
              {project.description}
            </p>

            {/* Media Image Showcase */}
            {project.image && (
              <div className="relative rounded-xl overflow-hidden border border-slate-800 aspect-video bg-slate-950">
                <img
                  src={project.image}
                  alt={`${project.title} interface architecture`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Fallback to stylized abstract container if image fails
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-slate-900">
                          <span class="text-cyan-400 font-mono text-xs mb-1">SYSTEM ARCHITECTURE</span>
                          <span class="text-white font-semibold text-lg">${project.title}</span>
                          <span class="text-slate-400 text-xs mt-2 max-w-sm">Interface preview & workflow specifications</span>
                        </div>
                      `;
                    }
                  }}
                />
                <div className="absolute bottom-3 left-3 px-3 py-1 rounded bg-slate-950/80 backdrop-blur-md border border-slate-800 text-[11px] font-mono text-slate-300">
                  {project.tagline}
                </div>
              </div>
            )}

            {/* Links and Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
                <Github className="w-3.5 h-3.5 text-slate-400" />
                <span>{project.githubUrl}</span>
              </span>

              {project.demoUrl && (
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs text-cyan-300 font-mono">
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{project.demoUrl}</span>
                </span>
              )}

              <span className="text-xs text-slate-500 font-mono ml-auto">
                Muthuraman C K · Project Deep-Dive
              </span>
            </div>
          </div>

          {/* 6-STEP TECHNICAL BREAKDOWN */}
          <div className="space-y-6 pt-4 border-t border-slate-800/80">
            <h3 className="text-sm font-mono text-cyan-400 uppercase tracking-wider">
              Engineering Architecture & Learnings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 01 - Problem */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300">
                  <span>01</span>
                  <span>·</span>
                  <span>The Problem</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.details.problem}
                </p>
              </div>

              {/* 02 - Approach */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300">
                  <span>02</span>
                  <span>·</span>
                  <span>Technical Approach</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.details.approach}
                </p>
              </div>

              {/* 03 - Technology Stack */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300">
                  <span>03</span>
                  <span>·</span>
                  <span>Technologies & Tools</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.details.technology.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* 05 - Result */}
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300">
                  <span>05</span>
                  <span>·</span>
                  <span>Deliverables & Outcome</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {project.details.result}
                </p>
              </div>
            </div>

            {/* 04 - Implementation Details */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-850 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300">
                <span>04</span>
                <span>·</span>
                <span>Implementation Execution</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.details.implementation.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 06 - What I Learned */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-950/30 to-blue-950/20 border border-cyan-800/40 space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-300">
                <Lightbulb className="w-3.5 h-3.5 text-cyan-400" />
                <span>06 · What I Learned as an Engineer</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {project.details.whatILearned}
              </p>
            </div>
          </div>

          {/* Subprojects for Project 4 (Python Project Collection) */}
          {project.isCollection && project.subProjects && (
            <div className="pt-4 border-t border-slate-800/80 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-white">
                  5 Internship Modules (VirtualWorks Lab)
                </h4>
                <span className="text-xs font-mono text-cyan-400">5 Deliverables</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.subProjects.map((sub, idx) => (
                  <div key={idx} className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                    <span className="text-xs font-semibold text-slate-200 block">{sub.title}</span>
                    <p className="text-[12px] text-slate-400 leading-relaxed">{sub.description}</p>
                    <div className="flex flex-wrap gap-1 pt-1">
                      {sub.tech.map((t) => (
                        <span key={t} className="text-[10px] font-mono text-cyan-300/80 bg-slate-900 px-1.5 py-0.5 rounded">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-slate-800 bg-[#070b14] flex items-center justify-between text-xs shrink-0">
          <span className="text-slate-500 font-mono">Press ESC or click outside to close</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
