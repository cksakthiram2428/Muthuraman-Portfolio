import React, { useEffect } from 'react';
import { X, Calendar, MapPin, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { workExperienceList, educationList, certificationsList } from '../data/portfolioData';

interface ExperienceDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ExperienceDrawer: React.FC<ExperienceDrawerProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
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
      aria-labelledby="experience-drawer-title"
    >
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300"
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-2xl w-full bg-[#111111] border-l border-cream/20 shadow-2xl flex flex-col z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-cream/15 bg-black/40 shrink-0">
          <div>
            <span className="text-[11px] uppercase tracking-[0.2em] text-cream/50 block">
              Trajectory & Credentials
            </span>
            <h2 id="experience-drawer-title" className="text-2xl font-normal text-cream tracking-tight mt-1">
              Experience & Education
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-cream hover:opacity-60 transition-opacity cursor-pointer"
            aria-label="Close Experience Drawer"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-10">
          {/* Work Experience */}
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/50 block border-b border-cream/15 pb-2">
              01 / Practical Experience & Industry
            </span>

            <div className="space-y-8">
              {workExperienceList.map((exp, idx) => (
                <div key={exp.company} className="space-y-3">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h3 className="text-lg font-normal text-cream">{exp.company}</h3>
                      <p className="text-xs text-cream/70 mt-0.5">{exp.role}</p>
                    </div>
                    <div className="text-right text-xs font-mono text-cream/60">
                      <div>{exp.duration}</div>
                      <div>{exp.location || exp.mode}</div>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-cream/80 list-disc list-inside">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="leading-relaxed">{h}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 border border-cream/20 text-cream/70">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6 pt-4">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/50 block border-b border-cream/15 pb-2">
              02 / Academic Foundation
            </span>

            <div className="space-y-6">
              {educationList.map((edu) => (
                <div key={edu.institution} className="p-4 bg-black/40 border border-cream/15 space-y-1.5">
                  <div className="flex items-baseline justify-between">
                    <h4 className="text-base font-medium text-cream">{edu.institution}</h4>
                    {edu.cgpa && (
                      <span className="text-xs font-mono text-cream px-2 py-0.5 border border-cream/30">
                        CGPA: {edu.cgpa}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-cream/80">{edu.degree} — {edu.field}</div>
                  <div className="text-xs font-mono text-cream/50 flex items-center justify-between pt-1">
                    <span>{edu.year}</span>
                    <span>{edu.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-4 pt-4">
            <span className="text-xs uppercase tracking-[0.2em] text-cream/50 block border-b border-cream/15 pb-2">
              03 / Technical Credentials & Certifications
            </span>

            <div className="grid grid-cols-1 gap-2.5">
              {certificationsList.map((cert) => (
                <div key={cert.name} className="p-3 bg-black/60 border border-cream/15 flex items-center justify-between">
                  <div>
                    <h5 className="text-xs font-medium text-cream">{cert.name}</h5>
                    <span className="text-[11px] text-cream/50">{cert.issuer}</span>
                  </div>
                  <span className="text-[10px] font-mono text-cream/70 border border-cream/20 px-2 py-0.5">
                    {cert.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-cream/15 bg-black/40 flex items-center justify-between text-xs text-cream/50 shrink-0">
          <span>Hindusthan Institute of Technology · Class of 2027</span>
          <button
            onClick={onClose}
            className="text-cream hover:opacity-60 transition-opacity cursor-pointer uppercase tracking-wider text-[11px]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
