import React, { useState, useEffect } from 'react';
import { EditorialHeader } from './components/EditorialHeader';
import { EditorialHero } from './components/EditorialHero';
import { EditorialAbout } from './components/EditorialAbout';
import { EditorialProjects } from './components/EditorialProjects';
import { EditorialSkills } from './components/EditorialSkills';
import { EditorialExperience } from './components/EditorialExperience';
import { EditorialEducation } from './components/EditorialEducation';
import { EditorialPhilosophy } from './components/EditorialPhilosophy';
import { EditorialContact } from './components/EditorialContact';
import { EditorialFooter } from './components/EditorialFooter';
import { ResumeModal } from './components/ResumeModal';
import { PrivacyModal } from './components/PrivacyModal';
import { TermsModal } from './components/TermsModal';
import { PerformanceDrawer } from './components/PerformanceDrawer';
import { CookieBanner } from './components/CookieBanner';
import { NotFoundView } from './components/NotFoundView';
import { PhotoUploadModal } from './components/PhotoUploadModal';
import { trackEvent } from './utils/analytics';
import { getActivePhoto } from './utils/photoManager';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPerformanceOpen, setIsPerformanceOpen] = useState(false);
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    trackEvent('page_view', { path: window.location.hash || '#hero' });

    const checkHash = () => {
      if (window.location.hash === '#404' || window.location.hash === '#not-found') {
        setIsNotFound(true);
      } else if (window.location.hash === '#privacy') {
        setIsPrivacyOpen(true);
      } else if (window.location.hash === '#terms') {
        setIsTermsOpen(true);
      } else {
        setIsNotFound(false);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => window.removeEventListener('hashchange', checkHash);
  }, []);

  const handleBackHome = () => {
    window.location.hash = '#hero';
    setIsNotFound(false);
  };

  return (
    <div className="relative min-h-screen bg-slate-50 font-hn text-slate-900 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* 
        Feature: Fixed translucent ambient hero backdrop layer
        This allows the main hero section image to remain subtly visible and translucent 
        behind all sections as the user scrolls down through the page.
      */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 overflow-hidden" 
        aria-hidden="true"
      >
        <img
          src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260729_022513_486985a2-ac8c-4278-91a8-071dcd9fcaff.png&w=1280&q=85"
          alt=""
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-100/40 via-slate-50/70 to-slate-100/90 backdrop-blur-[2px]" />
      </div>

      {/* Sticky Translucent Header */}
      <EditorialHeader 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenPhotoModal={() => setIsPhotoOpen(true)}
      />

      {/* Main Content Sections or Feature 15 404 View */}
      <main className="flex-1">
        {isNotFound ? (
          <NotFoundView onBackHome={handleBackHome} />
        ) : (
          <>
            {/* Editorial Hero Section */}
            <EditorialHero onOpenPhotoModal={() => setIsPhotoOpen(true)} />

            {/* Profile & Narrative Statement (Translucent glass surface) */}
            <EditorialAbout />

            {/* Curated Engineering Works (Translucent glass surface) */}
            <EditorialProjects />

            {/* Technical Stack & Capabilities (Translucent glass surface) */}
            <EditorialSkills />

            {/* Practical Industry Trajectory (Translucent glass surface) */}
            <EditorialExperience />

            {/* Academic Credentials & Certifications (Translucent glass surface) */}
            <EditorialEducation />

            {/* How I Build Software (Translucent glass surface) */}
            <EditorialPhilosophy />

            {/* Direct Dialogue & Form (Translucent glass surface) */}
            <EditorialContact />
          </>
        )}
      </main>

      {/* Editorial Footer */}
      <EditorialFooter
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
        onOpenTerms={() => setIsTermsOpen(true)}
        onOpenPerformance={() => setIsPerformanceOpen(true)}
      />

      {/* Real Face & Photo Customizer Modal */}
      <PhotoUploadModal
        isOpen={isPhotoOpen}
        onClose={() => setIsPhotoOpen(false)}
        currentPhoto={getActivePhoto()}
      />

      {/* ATS Printable / Text Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Feature 01: Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyOpen}
        onClose={() => setIsPrivacyOpen(false)}
      />

      {/* Feature 02: Terms & Conditions Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
      />

      {/* Feature 12: Site Vitals Audit Drawer */}
      <PerformanceDrawer
        isOpen={isPerformanceOpen}
        onClose={() => setIsPerformanceOpen(false)}
      />

      {/* Feature 05: Cookie Consent Banner */}
      <CookieBanner
        onOpenPrivacy={() => setIsPrivacyOpen(true)}
      />
    </div>
  );
}
