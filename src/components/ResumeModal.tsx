import React, { useEffect } from 'react';
import { X, Printer, Download, Mail, ExternalLink, GraduationCap, Briefcase, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import { personalInfo, educationList, workExperienceList, skillsData, featuredProjects, certificationsList } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
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

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadText = () => {
    const resumeText = `
================================================================================
MUTHURAMAN C K
ckmr2007@gmail.com | https://www.linkedin.com/in/muthuraman-c-k-3533053b3
GitHub: https://github.com/${personalInfo.githubUsername} | https://github.com/${personalInfo.githubSecondaryUsername}
================================================================================

SUMMARY
I am a student majoring in Computer Science Engineering and have practical experience in full-stack development as well as in AI/ML and UI/UX design. I am skilled in using Python, Java, JavaScript, React.js, Node.js and other modern web technologies. I have experience in developing web applications, AI-based projects and solutions created during hackathons, and I possess strong abilities in problem solving, working as part of a team and in carrying out project development.

TECHNICAL SKILLS
- Programming Languages: Python, JavaScript, Java, SQL, HTML, CSS
- Frontend Technologies: React.js, Next.js, Tailwind CSS
- Backend Technologies: Node.js, Express.js, REST APIs
- Databases: MongoDB, MySQL, Firebase, Supabase, SQLite
- Tools: Git, GitHub, VS Code, Kaggle

PROJECTS
1. AI-Powered Supply Chain Risk Intelligence Platform
   React.js, Vite, Tailwind CSS, Node.js, Express.js, SQLite, D3.js | 2026
   • Built the AI-Powered Supply Chain Risk Intelligence Platform to examine supplier reliability and spot supply-chain risks.
   • Created a network graph with D3.js to show multi-tier supplier relationships and risk links.
   • Added supplier create-read-update-delete operations, REST APIs, authentication, Trust Scores, analytics and downloadable reports to the platform.

2. Satellite Imagery Cloud Removal and Reconstruction System
   React, TypeScript, Tailwind CSS, FastAPI, PyTorch, SQLite, GDAL, Rasterio, OpenCV | 2026
   • Built the Satellite Imagery Cloud Removal System to clear cloud cover from LISS-IV satellite images and rebuild areas.
   • Used a CNN-Transformer design with image preprocessing, cloud masking and GeoTIFF processing.
   • Set up PSNR, SSIM, MAE and RMSE checks with FastAPI, for image processing and job management.

3. Authenticity Validator for Academia
   Python, OCR (Tesseract/OpenCV), SQL, Cryptographic Hashing, JavaScript, HTML/CSS | 2026
   • Automated academic certificate verification pipeline with OCR credential extraction.
   • Digital fingerprinting and cryptographic tamper-detection algorithms.

4. Python Project Collection (VirtualWorks Lab Full Stack Internship)
   Python, SQLite/JSON, REST APIs, Pillow, Datetime Logic | 2026
   • Coffee Rating Application (acidity, roast, aroma evaluation & reviews)
   • Team Availability Tracker (timezones, remote availability & scheduling)
   • Python Quote Generator (curated quotes & dynamic retrieval)
   • User Profile Card Generator (automated badge/profile card synthesis)
   • Quick Notes App (tagging, keyword search & persistent local storage)

EXPERIENCE
1. Full Stack & AI Developer (Personal Projects & Hackathons) | 2025 – Present | Tamil Nadu, India
   • Created full stack applications with React.js, Node.js, Express.js, REST APIs and contemporary web technologies.
   • Managed AI projects such as Trust Graph AI for supply chain risk analytics and Pixel Orbit AI for satellite image cloud removal.
   • Developed UI, backend services, database integration, AI/ML workflows.
   • Version control and project development with Git and GitHub.

2. Full Stack Development Intern (VirtualWorks Lab) | 19 May 2026 – 18 June 2026 | Remote
   • Built 5 distinct Python-based projects tackling data handling, automation, and backend utilities.
   • Gained experience with development workflows, version control, and modular architecture.
   • Improved practical programming, testing discipline, and problem-solving skills under structured timelines.

EDUCATION
- Hindusthan Institute of Technology, Coimbatore, Tamil Nadu
  B.E. Computer Science Engineering | Aug 2024 – Present (CGPA: 8.5)

- E.B.G Matric Higher Secondary School, Madurai, Tamil Nadu
  8 – 12 Std | 2018 – 2024

CERTIFICATIONS
→ MongoDB Basics For Students Certificate
→ HackerRank SQL Basic to Advanced
→ Google Generative AI Learning - Basic
================================================================================
`;
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Muthuraman_CK_Resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-6 overflow-y-auto font-hn select-text"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity no-print"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white border border-slate-200 rounded-3xl shadow-2xl flex flex-col z-10 max-h-[92vh] overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200 text-slate-900">
        {/* Top Action Bar (hidden in print) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/90 shrink-0 no-print">
          <div className="flex items-center gap-2">
            <h2 id="resume-title" className="text-sm font-bold text-slate-900 tracking-tight">
              Curriculum Vitae &mdash; Muthuraman C K
            </h2>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
              8.5 CGPA
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 hover:bg-slate-200/70 border border-slate-300 rounded-lg transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer size={14} className="text-blue-600" />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>

            <button
              onClick={handleDownloadText}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors cursor-pointer shadow-xs"
              title="Download text resume"
            >
              <Download size={14} />
              <span>Download File</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-800 rounded-lg hover:bg-slate-200/60 transition-colors ml-1 cursor-pointer"
              aria-label="Close resume preview"
            >
              <X size={18} strokeWidth={2} />
            </button>
          </div>
        </div>

        {/* Printable ATS-Friendly Resume Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-slate-900 font-hn space-y-7 print:p-0">
          {/* Header Block */}
          <div className="border-b border-slate-200 pb-5 text-center sm:text-left space-y-2">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {personalInfo.name}
            </h1>
            <div className="text-xs font-mono text-slate-600 flex flex-wrap items-center gap-y-1 gap-x-3">
              <a href={`mailto:${personalInfo.email}`} className="text-blue-600 underline font-medium">{personalInfo.email}</a>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <a href={personalInfo.linkedinUrl} target="_blank" rel="noreferrer" className="underline text-slate-700 font-medium">{personalInfo.linkedinDisplay}</a>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <a href={personalInfo.githubUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline font-medium">github.com/{personalInfo.githubUsername}</a>
              <span aria-hidden="true" className="text-slate-300">|</span>
              <a href={personalInfo.githubSecondaryUrl} target="_blank" rel="noreferrer" className="text-blue-600 underline font-medium">github.com/{personalInfo.githubSecondaryUsername}</a>
            </div>
          </div>

          {/* Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-500 border-b border-slate-200 pb-1">
              Summary
            </h2>
            <p className="text-xs text-slate-700 leading-relaxed">
              {personalInfo.bio}
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-500 border-b border-slate-200 pb-1">
              Technical Skills
            </h2>
            <div className="space-y-1.5 text-xs text-slate-700 font-mono">
              <div><strong className="text-slate-900 font-hn">Programming Languages:</strong> Python, JavaScript, Java, SQL, HTML, CSS, C, C++</div>
              <div><strong className="text-slate-900 font-hn">Frontend Technologies:</strong> React.js, Next.js, Tailwind CSS, D3.js</div>
              <div><strong className="text-slate-900 font-hn">Backend Technologies:</strong> Node.js, Express.js, FastAPI, REST APIs</div>
              <div><strong className="text-slate-900 font-hn">Databases:</strong> MongoDB (Certified), MySQL, Firebase, Supabase, SQLite</div>
              <div><strong className="text-slate-900 font-hn">Tools &amp; Workflows:</strong> Git, GitHub, VS Code, Kaggle</div>
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-500 border-b border-slate-200 pb-1">
              Projects
            </h2>

            {/* Project 1 */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-900">
                <span className="text-blue-700">AI-Powered Supply Chain Risk Intelligence Platform</span>
                <span className="font-mono text-[11px] text-slate-500 font-normal">React.js, Vite, Tailwind CSS, Node.js, Express.js, SQLite, D3.js | 2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5">
                <li>Built the AI-Powered Supply Chain Risk Intelligence Platform to examine supplier reliability and spot supply-chain risks.</li>
                <li>Created a network graph with D3.js to show multi-tier supplier relationships and risk links.</li>
                <li>Added supplier create-read-update-delete operations, REST APIs, authentication, Trust Scores, analytics and downloadable reports to the platform.</li>
              </ul>
            </div>

            {/* Project 2 */}
            <div className="space-y-1 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-900">
                <span className="text-teal-700">Satellite Imagery Cloud Removal and Reconstruction System</span>
                <span className="font-mono text-[11px] text-slate-500 font-normal">React, TypeScript, Tailwind CSS, FastAPI, PyTorch, SQLite, GDAL, Rasterio, OpenCV | 2026</span>
              </div>
              <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5">
                <li>Built the Satellite Imagery Cloud Removal System to clear cloud cover from LISS-IV satellite images and rebuild areas.</li>
                <li>Used a CNN-Transformer design with image preprocessing, cloud masking and GeoTIFF processing.</li>
                <li>Set up PSNR, SSIM, MAE and RMSE checks with FastAPI, for image processing and job management.</li>
              </ul>
            </div>

            {/* Project 3 */}
            <div className="space-y-1 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-900">
                <span className="text-amber-700">Python Project Collection (VirtualWorks Lab)</span>
                <span className="font-mono text-[11px] text-slate-500 font-normal">Python 3, Data Persistence, REST APIs, Automation | 2026</span>
              </div>
              <p className="text-xs text-slate-700">
                Engineered 5 practical modules: <em>Coffee Rating Application</em>, <em>Team Availability Tracker</em>, <em>Python Quote Generator</em>, <em>User Profile Card Generator</em>, and <em>Quick Notes App</em>.
              </p>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-500 border-b border-slate-200 pb-1">
              Experience
            </h2>

            {workExperienceList.map((exp) => (
              <div key={exp.company} className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-bold text-slate-900">
                  <span>{exp.company} &mdash; <span className="font-medium text-blue-600">{exp.role}</span></span>
                  <span className="text-xs font-mono text-slate-500 font-normal">{exp.duration} | {exp.location || exp.mode}</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-700 space-y-0.5">
                  {exp.highlights.map((h, hIdx) => (
                    <li key={hIdx}>{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-500 border-b border-slate-200 pb-1">
              Education
            </h2>
            {educationList.map((edu) => (
              <div key={edu.institution} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-900">
                <div>
                  <strong className="text-slate-900">{edu.institution}</strong> &mdash; <span className="text-blue-700 font-medium">{edu.degree}</span>
                </div>
                <div className="font-mono text-[11px] text-slate-500">
                  {edu.location} | {edu.year} {edu.cgpa ? `(CGPA: ${edu.cgpa})` : ''}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-slate-500 border-b border-slate-200 pb-1">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs text-slate-700 font-mono">
              {certificationsList.map((c) => (
                <div key={c.name} className="flex items-center gap-1.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>{c.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer info (hidden in print) */}
        <div className="px-6 py-3.5 border-t border-slate-200 bg-slate-50/90 flex items-center justify-between text-xs text-slate-500 shrink-0 no-print font-mono text-[11px]">
          <span>Full Stack, AI &amp; Systems Development</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white transition-colors cursor-pointer uppercase font-semibold"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
