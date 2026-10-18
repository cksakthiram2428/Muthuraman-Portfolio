import React, { useEffect } from 'react';
import { X, ExternalLink, Github, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

interface ProjectsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectsDrawer: React.FC<ProjectsDrawerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden font-hn select-text"
      role="dialog"
      aria-modal="true"
      aria-labelledby="projects-drawer-title"
    >
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Drawer Panel */}
      <div className="fixed inset-y-0 right-0 max-w-2xl w-full bg-[#111111] border-l border-cream/20 shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-cream/15 bg-black/40 shrink-0">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-cream/50 block font-hn">
              Curated Works · 2025–2026
            </span>
            <h2 id="projects-drawer-title" className="text-2xl font-normal text-cream tracking-tight font-hn mt-1">
              Engineering Projects
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-cream hover:opacity-60 transition-opacity cursor-pointer"
            aria-label="Close Projects Drawer"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Scrollable Project List */}
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-12">
          {featuredProjects.map((project, idx) => (
            <article 
              key={project.id} 
              className="space-y-5 border-b border-cream/15 pb-10 last:border-b-0"
            >
              <div className="flex items-baseline justify-between text-xs text-cream/60">
                <span className="uppercase tracking-[0.2em]">0{idx + 1} / {project.category}</span>
                <span>2026</span>
              </div>

              {/* Visual Thumbnail */}
              <div className="relative aspect-[16/9] w-full overflow-hidden border border-cream/20 bg-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-normal text-cream font-hn leading-snug">
                  {project.title}
                </h3>
                <p className="text-xs text-cream/70 font-mono">
                  {project.tagline}
                </p>
                <p className="text-sm text-cream/80 leading-relaxed pt-1">
                  {project.description}
                </p>
              </div>

              {/* Problem & Solution Breakdown */}
              <div className="space-y-3 pt-2 text-xs text-cream/70 leading-relaxed bg-black/40 p-4 border border-cream/10">
                <div>
                  <strong className="text-cream block mb-0.5">Problem Solved:</strong>
                  {project.problem}
                </div>
                <div>
                  <strong className="text-cream block mb-0.5">Engineered Solution:</strong>
                  {project.solution}
                </div>
              </div>

              {/* Sub-projects list for Python Internship Collection */}
              {project.isCollection && project.subProjects && (
                <div className="space-y-3 pt-2">
                  <span className="text-xs uppercase tracking-[0.15em] text-cream/60 block">
                    5 Practical Modules Delivered:
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    {project.subProjects.map((sp) => (
                      <div key={sp.title} className="p-3 bg-black/60 border border-cream/15 text-xs space-y-1">
                        <div className="font-medium text-cream">{sp.title}</div>
                        <p className="text-cream/70 text-[11px] leading-relaxed">{sp.description}</p>
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {sp.tech.map((t) => (
                            <span key={t} className="text-[10px] px-1.5 py-0.5 border border-cream/20 text-cream/80">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features */}
              <div className="space-y-1.5 pt-1">
                <span className="text-xs uppercase tracking-[0.15em] text-cream/60 block">
                  Core Implementation Highlights:
                </span>
                <ul className="space-y-1 text-xs text-cream/75">
                  {project.keyFeatures.map((kf, kIdx) => (
                    <li key={kIdx} className="flex items-start gap-2">
                      <span className="text-cream/40">—</span>
                      <span>{kf}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Tags & GitHub Link */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono border border-cream/20 text-cream/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-cream underline hover:opacity-60 transition-opacity"
                >
                  <Github size={14} />
                  <span>Inspect on GitHub</span>
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-cream/15 bg-black/40 flex items-center justify-between text-xs text-cream/50 shrink-0">
          <span>All repositories open on GitHub</span>
          <button
            onClick={onClose}
            className="text-cream hover:opacity-60 transition-opacity cursor-pointer uppercase tracking-wider text-[11px]"
          >
            Close Index
          </button>
        </div>
      </div>
    </div>
  );
};
