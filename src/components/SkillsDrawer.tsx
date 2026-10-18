import React, { useEffect, useState } from 'react';
import { X, Award, Briefcase, Search } from 'lucide-react';
import { skillsData, certificationsList } from '../data/portfolioData';
import { TechLogo } from './TechLogos';

interface SkillsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SkillsDrawer: React.FC<SkillsDrawerProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [search, setSearch] = useState<string>('');

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

  const categories = ['All', 'Programming Languages', 'Frontend & UI/UX', 'Backend & Architecture', 'Databases & Cloud Stores', 'AI, ML & Vision', 'Dev Tools & Platforms'];

  const filtered = skillsData.filter((s) => {
    const matchCat = activeCategory === 'All' || s.category === activeCategory;
    const matchSearch =
      search === '' ||
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.appliedIn.toLowerCase().includes(search.toLowerCase()) ||
      s.coreCapabilities.some((c) => c.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div 
      className="fixed inset-0 z-50 overflow-hidden font-hn select-text"
      role="dialog"
      aria-modal="true"
      aria-labelledby="skills-drawer-title"
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
              Capabilities · Recruiter Evidence
            </span>
            <h2 id="skills-drawer-title" className="text-2xl font-normal text-cream tracking-tight mt-1">
              Technical Stack & Skills
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-cream hover:opacity-60 transition-opacity cursor-pointer"
            aria-label="Close Skills Drawer"
          >
            <X size={24} strokeWidth={1.5} />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="px-8 py-4 border-b border-cream/10 space-y-3 bg-black/20 shrink-0">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 whitespace-nowrap border transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'border-cream bg-cream text-black font-medium'
                    : 'border-cream/20 text-cream/70 hover:border-cream/50 hover:text-cream'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search technologies, tools or frameworks..."
              className="w-full bg-black/60 border border-cream/20 px-3.5 py-2 text-xs text-cream placeholder:text-cream/40 focus:outline-none focus:border-cream transition-colors"
            />
          </div>
        </div>

        {/* Scrollable Skills Grid */}
        <div className="flex-1 overflow-y-auto px-8 py-6 space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {filtered.map((skill) => (
              <div 
                key={skill.name}
                className="p-4 bg-black/50 border border-cream/15 hover:border-cream/40 transition-colors space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 flex items-center justify-center p-1 bg-black border border-cream/20 shrink-0">
                      <TechLogo name={skill.name} className="w-5 h-5 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-cream">{skill.name}</h3>
                      <span className="text-[10px] text-cream/50 block font-mono">{skill.category}</span>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 border border-cream/20 text-cream/80">
                    {skill.level}
                  </span>
                </div>

                <p className="text-[11px] text-cream/70 leading-relaxed">
                  {skill.focusArea}
                </p>

                {/* Recruiter Proof */}
                <div className="p-2 bg-black/80 border border-cream/10 text-[10px] space-y-0.5">
                  <span className="text-cream/50 uppercase font-mono block">Applied In:</span>
                  <span className="text-cream/90">{skill.appliedIn}</span>
                </div>

                {/* Core Capabilities */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {skill.coreCapabilities.map((cap) => (
                    <span key={cap} className="text-[9px] px-1.5 py-0.5 bg-cream/5 text-cream/70 font-mono">
                      {cap}
                    </span>
                  ))}
                </div>

                {skill.certificationBadge && (
                  <div className="flex items-center gap-1.5 text-[10px] text-cream font-mono pt-1">
                    <Award size={12} />
                    <span>{skill.certificationBadge}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Footer with Verified Certifications */}
        <div className="px-8 py-4 border-t border-cream/15 bg-black/40 space-y-2 shrink-0">
          <span className="text-[10px] uppercase tracking-[0.2em] text-cream/50 block">
            Verified Certifications:
          </span>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-cream/80">
            {certificationsList.map((c) => (
              <span key={c.name} className="flex items-center gap-1 font-mono text-[11px]">
                <span>✓</span>
                <span>{c.name}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
