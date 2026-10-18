import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name.toLowerCase()) {
    case 'python':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Python logo">
          <defs>
            <linearGradient id="pyGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#387eb8" />
              <stop offset="100%" stopColor="#366994" />
            </linearGradient>
            <linearGradient id="pyGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffe873" />
              <stop offset="100%" stopColor="#ffd43b" />
            </linearGradient>
          </defs>
          <path
            fill="url(#pyGrad1)"
            d="M63.3 3.5C31.5 3.5 33.5 17.3 33.5 17.3l.03 14.3h30.4v4.3H21.5S3.5 33.9 3.5 65.7c0 31.8 15.6 30.7 15.6 30.7h9.3v-13s-.5-15.6 15.3-15.6h26.4s14.8.2 14.8-14.4V18.1s2.2-14.6-21.6-14.6zm-17.1 9.4c2.9 0 5.2 2.3 5.2 5.2 0 2.9-2.3 5.2-5.2 5.2s-5.2-2.3-5.2-5.2c0-2.9 2.3-5.2 5.2-5.2z"
          />
          <path
            fill="url(#pyGrad2)"
            d="M64.7 124.5c31.8 0 29.8-13.8 29.8-13.8l-.03-14.3H64.1V92.1h42.4s18 2 18-29.8c0-31.8-15.6-30.7-15.6-30.7h-9.3v13s.5 15.6-15.3 15.6H57.9s-14.8-.2-14.8 14.4v35.3s-2.2 14.6 21.6 14.6zm17.1-9.4c-2.9 0-5.2-2.3-5.2-5.2 0-2.9 2.3-5.2 5.2-5.2s5.2 2.3 5.2 5.2c0 2.9-2.3 5.2-5.2 5.2z"
          />
        </svg>
      );

    case 'javascript':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="JavaScript logo">
          <rect width="128" height="128" rx="16" fill="#f7df1e" />
          <path
            fill="#000000"
            d="M78.6 100.8c3.5 5.8 8.1 10.1 16.3 10.1 6.8 0 11.2-3.4 11.2-8.1 0-5.7-4.5-7.8-12.2-11.1l-4.2-1.8c-12-5.1-20-11.6-20-25.2 0-12.6 9.6-22.1 24.6-22.1 10.7 0 18.5 4.3 23.9 13.7l-11.4 7.3c-2.6-4.7-5.5-6.6-12.2-6.6-5.3 0-8.9 3.4-8.9 7.4 0 5.1 3.5 7.2 10.7 10.3l4.2 1.8c14.2 6.1 21.8 12.4 21.8 26.6 0 15.2-11.9 23.3-27.1 23.3-15.1 0-24.5-7.3-29.2-17.7l12.5-7.7zm-46.7-.4c2.4 4.2 5.6 7.7 11.3 7.7 5.8 0 9.5-2.7 9.5-13.4V43.8h15.2v51.5c0 18.7-10.9 26.7-25.7 26.7-11.6 0-18.4-5.9-22.3-14.4l12-7.2z"
          />
        </svg>
      );

    case 'java':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Java logo">
          <path
            fill="#5382a1"
            d="M48.2 88.5c0 0-5.7 3.4 4.1 4.6 11.8 1.4 18-1.3 32.1-4.7 0 0-4.1 2.3-10.4 4.1-13.8 3.9-33.8 2.5-25.8-4z"
          />
          <path
            fill="#e76f00"
            d="M44.5 73.1c0 0-6.4 4.8 3.7 6 12.3 1.5 21-1.6 37.6-5.6 0 0-4.8 2.7-12.2 4.9-16.1 4.7-39.2 3.2-29.1-5.3zm4.5-15.2c0 0-6 4.3 4.2 5.5 12.3 1.4 23.6-1.5 40.7-6 0 0-5.2 2.8-13.2 5.1-17.3 4.8-42.3 3.6-31.7-4.6z"
          />
          <path
            fill="#5382a1"
            d="M72.2 47.9c4.2 4.9-1.1 9.4-1.1 9.4s9.8-5.1 5.3-13.3c-4.4-8.1-15.5-12.2-21.2-24 0 0-1.8 8.4 6.7 15.6 10.3 8.8 6.1 7.4 10.3 12.3zm20.8 45.4s4.2 3.4-3.8 6c-15.2 4.9-39.7 5.3-53.5.3-5-1.8 3.9-4.8 7.3-5.5 13.9-2.7 20-2.4 34.6-5.1 0 0-3.6 1.7-8.9 3.2-13.8 3.9-30.8 3.5-30.8 3.5s21.7 4 45.7-1.4c6.3-1.4 9.4-1 9.4-1z"
          />
          <path
            fill="#e76f00"
            d="M84.2 108.6s-19.1 8.2-46.7 0c-8-2.4 1.3-4.6 4.6-5.2 13.2-2.3 20.3-2.1 33.3-4.3 0 0-4.1 1.7-9.5 3-13.7 3.5-29.7 2.9-29.7 2.9s18.2 3.2 40.4-1.4c6.8-1.4 7.6 5 7.6 5z"
          />
        </svg>
      );

    case 'react.js':
    case 'react':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="React logo">
          <ellipse cx="64" cy="64" rx="13" ry="13" fill="#61dafb" />
          <g stroke="#61dafb" strokeWidth="6" fill="none">
            <ellipse cx="64" cy="64" rx="54" ry="20" />
            <ellipse cx="64" cy="64" rx="54" ry="20" transform="rotate(60 64 64)" />
            <ellipse cx="64" cy="64" rx="54" ry="20" transform="rotate(120 64 64)" />
          </g>
        </svg>
      );

    case 'next.js':
    case 'next':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Next.js logo">
          <circle cx="64" cy="64" r="64" fill="#000000" />
          <path
            fill="#ffffff"
            d="M106.8 110.4L51.9 40H38.5v48.1h8.8V49.7l48.2 61.6c3.8-1.5 7.6-3.2 11.3-4.9z"
          />
          <path fill="#ffffff" d="M80.6 40h8.8v34.4h-8.8z" />
        </svg>
      );

    case 'node.js':
    case 'node':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Node.js logo">
          <path
            fill="#539e43"
            d="M64 4.8L8.6 36.8v64L64 132.8l55.4-32V36.8L64 4.8zm33.5 83.4c-2.3 3.6-5.8 6.4-10.4 8.4-4.6 2-10.2 3-16.7 3-10.4 0-18.3-2.6-23.7-7.9-5.4-5.3-8.1-13-8.1-23.2 0-9.9 2.8-17.6 8.3-23.1 5.5-5.5 13.5-8.3 23.9-8.3 6.3 0 11.7.9 16.2 2.8 4.5 1.9 8.1 4.5 10.7 7.9l-9.2 6.8c-3.6-4.6-9-6.9-16.1-6.9-6.2 0-11 1.8-14.4 5.3s-5.1 8.8-5.1 15.6c0 6.9 1.7 12.1 5.1 15.6 3.4 3.5 8.2 5.3 14.4 5.3 7.3 0 12.9-2.3 16.7-7l8.4 6.7z"
          />
        </svg>
      );

    case 'express.js':
    case 'express':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Express logo">
          <circle cx="64" cy="64" r="62" fill="#1e293b" stroke="#475569" strokeWidth="4" />
          <text
            x="64"
            y="74"
            textAnchor="middle"
            fill="#f8fafc"
            fontSize="32"
            fontFamily="monospace"
            fontWeight="bold"
          >
            ex
          </text>
        </svg>
      );

    case 'fastapi':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="FastAPI logo">
          <circle cx="64" cy="64" r="62" fill="#009688" />
          <path
            fill="#ffffff"
            d="M68 20L34 72h24l-8 36 38-52H64l8-36z"
          />
        </svg>
      );

    case 'mongodb':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="MongoDB logo">
          <path
            fill="#47a248"
            d="M63.8 2.2C63 3.6 50.8 23.3 50.8 46.8c0 23.8 11.5 40.5 13 42.6 1.5-2.1 13-18.8 13-42.6 0-23.5-12.2-43.2-13-44.6z"
          />
          <path
            fill="#499d4a"
            d="M63.8 2.2v87.2c1.5-2.1 13-18.8 13-42.6 0-23.5-12.2-43.2-13-44.6z"
          />
          <path
            fill="#3fa037"
            d="M63.8 89.4c-1.3 0-2.4 1.1-2.4 2.4 0 5.6 1.9 14.8 2.4 17.5.5-2.7 2.4-11.9 2.4-17.5 0-1.3-1.1-2.4-2.4-2.4z"
          />
        </svg>
      );

    case 'mysql / sqlite':
    case 'mysql':
    case 'sql':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Database SQL logo">
          <ellipse cx="64" cy="28" rx="48" ry="18" fill="#38bdf8" />
          <path
            fill="#0284c7"
            d="M16 28v36c0 9.9 21.5 18 48 18s48-8.1 48-18V28c0 9.9-21.5 18-48 18S16 37.9 16 28z"
          />
          <path
            fill="#0369a1"
            d="M16 64v36c0 9.9 21.5 18 48 18s48-8.1 48-18V64c0 9.9-21.5 18-48 18S16 73.9 16 64z"
          />
        </svg>
      );

    case 'firebase':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Firebase logo">
          <path
            fill="#ffa000"
            d="M20.2 97.4L44.8 19.3c.7-2.3 3.9-2.6 5.1-.5l15.5 28.5L20.2 97.4z"
          />
          <path
            fill="#f57c00"
            d="M74.8 45.4L64.2 25.6c-1-1.9-3.7-2-4.9-.1L20.2 97.4l54.6-52z"
          />
          <path
            fill="#ffca28"
            d="M107.8 97.4l-14-87.3c-.4-2.4-3.4-3.3-5-1.5L20.2 97.4l43.8 24.6c2.5 1.4 5.5 1.4 8 0l35.8-24.6z"
          />
        </svg>
      );

    case 'supabase':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Supabase logo">
          <path
            fill="#3ecf8e"
            d="M69.8 124.9c-2.4 3.1-7.5 1.8-8-2.1L51.2 59.5h48.3c4.7 0 7.4 5.3 4.6 9L69.8 124.9z"
          />
          <path
            fill="#249361"
            d="M58.2 3.1c2.4-3.1 7.5-1.8 8 2.1l10.6 63.3H28.5c-4.7 0-7.4-5.3-4.6-9L58.2 3.1z"
          />
        </svg>
      );

    case 'pytorch':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="PyTorch logo">
          <path
            fill="#ee4c2c"
            d="M64 12C35.3 12 12 35.3 12 64c0 14.3 5.8 27.3 15.2 36.8l10.6-10.6c-6.8-6.7-11-16-11-26.2 0-20.4 16.6-37 37.2-37 20.6 0 37.2 16.6 37.2 37 0 10.2-4.2 19.5-11 26.2l10.6 10.6c9.4-9.5 15.2-22.5 15.2-36.8 0-28.7-23.3-52-52-52z"
          />
          <circle cx="86" cy="42" r="6" fill="#ee4c2c" />
        </svg>
      );

    case 'tailwind css':
    case 'tailwind':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Tailwind CSS logo">
          <path
            fill="#38bdf8"
            d="M64 32c-17.7 0-28.8 8.8-33.2 26.5 6.6-8.8 14.4-12.2 23.2-9.9 5.1 1.3 8.7 5 12.7 9.1 6.5 6.6 14.1 14.3 30.5 14.3 17.7 0 28.8-8.8 33.2-26.5-6.6 8.8-14.4 12.2-23.2 9.9-5.1-1.3-8.7-5-12.7-9.1-6.5-6.6-14.1-14.3-30.5-14.3zM30.8 64c-17.7 0-28.8 8.8-33.2 26.5 6.6-8.8 14.4-12.2 23.2-9.9 5.1 1.3 8.7 5 12.7 9.1 6.5 6.6 14.1 14.3 30.5 14.3 17.7 0 28.8-8.8 33.2-26.5-6.6 8.8-14.4 12.2-23.2 9.9-5.1-1.3-8.7-5-12.7-9.1-6.5-6.6-14.1-14.3-30.5-14.3z"
          />
        </svg>
      );

    case 'd3.js':
    case 'd3':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="D3.js logo">
          <rect width="128" height="128" rx="20" fill="#f9a03f" />
          <path
            fill="#ffffff"
            d="M32 36h28c17.7 0 32 14.3 32 32s-14.3 32-32 32H32V36zm14 50h14c9.9 0 18-8.1 18-18s-8.1-18-18-18H46v36z"
          />
          <circle cx="96" cy="46" r="8" fill="#ffffff" />
          <circle cx="96" cy="82" r="8" fill="#ffffff" />
        </svg>
      );

    case 'computer vision & opencv':
    case 'opencv':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="OpenCV logo">
          <circle cx="64" cy="38" r="24" fill="#ee2222" />
          <circle cx="38" cy="84" r="24" fill="#22aa22" />
          <circle cx="90" cy="84" r="24" fill="#2266ee" />
          <circle cx="64" cy="38" r="10" fill="#070b14" />
          <circle cx="38" cy="84" r="10" fill="#070b14" />
          <circle cx="90" cy="84" r="10" fill="#070b14" />
        </svg>
      );

    case 'git & github':
    case 'git':
    case 'github':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Git logo">
          <path
            fill="#f05032"
            d="M124.7 57.2L70.8 3.3c-4.4-4.4-11.5-4.4-15.9 0L3.3 54.9c-4.4 4.4-4.4 11.5 0 15.9l53.9 53.9c4.4 4.4 11.5 4.4 15.9 0l51.6-51.6c4.4-4.4 4.4-11.5 0-15.9z"
          />
          <circle cx="48" cy="64" r="8" fill="#ffffff" />
          <circle cx="80" cy="48" r="8" fill="#ffffff" />
          <circle cx="80" cy="80" r="8" fill="#ffffff" />
          <path stroke="#ffffff" strokeWidth="6" d="M48 64h16v16h16M64 64V48h16" fill="none" />
        </svg>
      );

    case 'vs code':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="VS Code logo">
          <path
            fill="#0065a9"
            d="M94.6 123.6l28.6-13.8c3.2-1.5 4.8-4.7 4.8-8.2V26.4c0-3.5-1.6-6.7-4.8-8.2L94.6 4.4c-3.1-1.5-6.7-.9-9.2 1.6L37.8 49.3 15.2 32.2c-2.4-1.8-5.8-1.7-8 .3L2.3 37c-2.5 2.3-2.5 6.1-.1 8.5l26.2 24.3L2.2 94.2c-2.4 2.4-2.4 6.2.1 8.5l4.9 4.5c2.3 2 5.6 2.1 8 .3l22.6-17.1 47.6 43.3c2.5 2.5 6.1 3.1 9.2 1.6z"
          />
          <path
            fill="#007acc"
            d="M94.6 4.4L45.4 50.8l49.2 46.4V4.4z"
          />
          <path
            fill="#1f9cf0"
            d="M94.6 123.6V30.8L45.4 77.2l49.2 46.4z"
          />
        </svg>
      );

    case 'kaggle':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Kaggle logo">
          <circle cx="64" cy="64" r="62" fill="#20beff" />
          <path
            fill="#ffffff"
            d="M40 28h14v72H40V28zm48 72L62 67.5 86 28H70L50 61v13l21 26h17z"
          />
        </svg>
      );

    case 'google generative ai':
    case 'gemini':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="Google AI logo">
          <defs>
            <linearGradient id="gaiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4285f4" />
              <stop offset="35%" stopColor="#9b72cb" />
              <stop offset="70%" stopColor="#d96570" />
              <stop offset="100%" stopColor="#fbbc05" />
            </linearGradient>
          </defs>
          <path
            fill="url(#gaiGrad)"
            d="M64 4c0 33.1 26.9 60 60 60-33.1 0-60 26.9-60 60 0-33.1-26.9-60-60-60 33.1 0 60-26.9 60-60z"
          />
        </svg>
      );

    case 'c / c++':
    case 'c++':
    case 'c':
      return (
        <svg viewBox="0 0 128 128" className={className} role="img" aria-label="C++ logo">
          <polygon points="64,8 116,36 116,92 64,120 12,92 12,36" fill="#00599c" />
          <polygon points="64,18 106,41 106,87 64,110 22,87 22,41" fill="#004482" />
          <text
            x="52"
            y="76"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="46"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            C
          </text>
          <text
            x="88"
            y="62"
            textAnchor="middle"
            fill="#659ad2"
            fontSize="26"
            fontFamily="sans-serif"
            fontWeight="bold"
          >
            ++
          </text>
        </svg>
      );

    default:
      return (
        <div className={`${className} rounded-lg bg-cyan-950/60 border border-cyan-800/80 flex items-center justify-center font-mono font-bold text-xs text-cyan-300`}>
          {name.slice(0, 2).toUpperCase()}
        </div>
      );
  }
};
