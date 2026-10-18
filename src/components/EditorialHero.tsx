import React, { useState, useEffect, useRef } from 'react';
import { ArrowDown, Upload, RefreshCw } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const EditorialHero: React.FC = () => {
  const [heroImage, setHeroImage] = useState<string>('/muthuraman.png');
  const [isCustomUpload, setIsCustomUpload] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Migrate from old storage key and load valid v2 custom image if present
    localStorage.removeItem('muthuraman_hero_custom_image');
    const savedCustomImg = localStorage.getItem('muthuraman_hero_custom_image_v2');
    if (savedCustomImg) {
      setHeroImage(savedCustomImg);
      setIsCustomUpload(true);
    } else {
      setHeroImage('/muthuraman.png');
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setHeroImage(result);
          setIsCustomUpload(true);
          try {
            localStorage.setItem('muthuraman_hero_custom_image_v2', result);
          } catch (err) {
            console.warn('LocalStorage limit reached for custom image', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    localStorage.removeItem('muthuraman_hero_custom_image_v2');
    localStorage.removeItem('muthuraman_hero_custom_image');
    setHeroImage('/muthuraman.png');
    setIsCustomUpload(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result) {
          setHeroImage(result);
          setIsCustomUpload(true);
          try {
            localStorage.setItem('muthuraman_hero_custom_image', result);
          } catch (err) {
            console.warn('LocalStorage limit reached', err);
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#7e8084] font-hn text-white select-none flex flex-col justify-between pt-24 pb-8 sm:pb-12"
      style={{
        background: 'radial-gradient(ellipse at 50% 50%, #909296 0%, #808286 55%, #727478 100%)'
      }}
    >
      {/* Hidden File Input for uploading raw original photo */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
        aria-label="Upload exact photo"
      />

      {/* 
        1. Giant Centered Typography Layer (z-10)
        Big bold white letters MUTHURAMAN — C K centered horizontally across the viewport,
        sitting directly behind the subject's head and shoulders.
      */}
      <div
        className="absolute inset-x-0 top-[20vh] sm:top-[18vh] z-10 overflow-hidden pointer-events-none anim-fade-up select-none"
        style={{ animationDelay: '400ms' }}
      >
        <div className="marquee flex w-max whitespace-nowrap font-hn text-[20vh] sm:text-[30vh] font-bold leading-none tracking-tight text-white/90 drop-shadow-sm">
          <span className="pr-[8vw]">
            MUTHURAMAN &mdash; C K&nbsp;
          </span>
          <span className="pr-[8vw]">
            MUTHURAMAN &mdash; C K&nbsp;
          </span>
        </div>
      </div>

      {/* 
        2. Exact Photo Cutout Placed in the Middle (z-20)
        Subject cutout with background removed, letting the marquee typography flow behind him.
      */}
      <div className="absolute inset-0 z-20 flex items-end sm:items-center justify-center pointer-events-none anim-rise-in pb-10 sm:pb-0">
        <div className="relative h-[68vh] sm:h-[78vh] aspect-square sm:aspect-[4/5] max-w-[90vw] flex items-end sm:items-center justify-center">
          <img
            src={heroImage}
            alt="MUTHURAMAN — C K"
            className="h-full w-auto object-contain object-bottom sm:object-center drop-shadow-[0_25px_40px_rgba(0,0,0,0.55)] transition-all duration-300"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* 3. Horizontal White Hairline Rule (z-25, above bottom footer) */}
      <div
        className="absolute inset-x-6 sm:inset-x-10 bottom-[5.5rem] sm:bottom-24 z-25 h-[1px] bg-white/70 anim-line pointer-events-none"
      />

      {/* Discreet Photo File Action Bar (z-30) */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-10 w-full flex justify-end">
        <div className="inline-flex items-center gap-2 bg-black/40 hover:bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-[11px] font-mono transition-all text-white/90">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-1.5 hover:text-white cursor-pointer"
            title="Upload your exact original photo file directly"
          >
            <Upload size={12} />
            <span>{isCustomUpload ? 'Replace Exact Photo' : 'Upload Exact Photo'}</span>
          </button>
          {isCustomUpload && (
            <button
              onClick={handleResetImage}
              className="pl-2 border-l border-white/20 hover:text-white cursor-pointer"
              title="Reset to default photo"
            >
              <RefreshCw size={11} />
            </button>
          )}
        </div>
      </div>

      {/* 4. Bottom Footer Strip (z-30) */}
      <div className="relative z-30 max-w-7xl mx-auto px-6 sm:px-10 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 text-xs sm:text-sm font-hn">
        {/* Left Stacked 3 Lines */}
        <div 
          className="anim-fade-up flex flex-col text-white/90 leading-relaxed font-normal"
          style={{ animationDelay: '1200ms' }}
        >
          <span className="font-medium text-white">Full Stack &amp; AI Developer</span>
          <span className="text-white/80">Computer Science Engineering · 8.5 CGPA</span>
          <span className="text-white/70">Hindusthan Institute of Technology</span>
        </div>

        {/* Center: Scroll down prompt */}
        <button
          onClick={scrollToAbout}
          className="hidden md:flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors cursor-pointer anim-fade-up pb-0.5"
          style={{ animationDelay: '1300ms' }}
        >
          <span>Scroll to Explore</span>
          <ArrowDown size={14} className="text-white animate-bounce" />
        </button>

        {/* Right Stacked 2 Lines */}
        <div 
          className="anim-fade-up flex flex-col text-left sm:text-right text-white/90 leading-relaxed font-normal"
          style={{ animationDelay: '1400ms' }}
        >
          <span className="text-white/70">Tamil Nadu, India</span>
          <a 
            href={`mailto:${personalInfo.email}`} 
            className="text-white underline hover:opacity-75 transition-opacity font-mono text-xs sm:text-sm"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
};
