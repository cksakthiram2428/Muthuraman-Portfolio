import { FeaturedProject, SkillItem, WorkExperience, EducationInfo, PhilosophyStep, RepositoryItem, CertificationItem } from '../types';

export const personalInfo = {
  name: 'Muthuraman C K',
  title: 'Computer Science Engineering Student',
  roles: ['Full Stack & AI Developer', 'Software Engineer', 'Problem Solver'],
  headline: 'Computer Science Engineering Student building practical software for real-world problems.',
  bio: 'I am a student majoring in Computer Science Engineering and have practical experience in full-stack development as well as in AI/ML and UI/UX design. I am skilled in using Python, Java, JavaScript, React.js, Node.js and other modern web technologies. I have experience in developing web applications, AI-based projects and solutions created during hackathons, and I possess strong abilities in problem solving, working as part of a team and in carrying out project development.',
  heroDescription: 'I build software projects across full-stack development, AI, backend systems and databases, with a focus on turning real-world problems into practical solutions.',
  status: 'Open to Software Development & AI Opportunities',
  email: 'ckmr2007@gmail.com',
  githubUrl: 'https://github.com/cksakthiram2428',
  githubSecondaryUrl: 'https://github.com/ckmr27',
  githubUsername: 'cksakthiram2428',
  githubSecondaryUsername: 'ckmr27',
  linkedinUrl: 'https://www.linkedin.com/in/muthuraman-c-k-3533053b3',
  linkedinDisplay: 'linkedin.com/in/muthuraman-c-k-3533053b3',
  location: 'Tamil Nadu, India',
};

export const quickStats = [
  { label: 'Academic Standing', value: '8.5 CGPA', caption: 'Hindusthan Institute of Tech' },
  { label: 'Current Degree', value: '3rd Year CSE', caption: 'B.E. Computer Science' },
  { label: 'Internship Work', value: '5 Python Systems', caption: 'VirtualWorks Lab' },
  { label: 'AI & Full Stack', value: 'Hackathon & Lab', caption: 'TrustGraph & Pixel Orbit AI' },
];

export const skillsData: SkillItem[] = [
  // Programming Languages
  {
    name: 'Python',
    category: 'Programming Languages',
    level: 'Experienced',
    iconName: 'Terminal',
    focusArea: 'FastAPI, PyTorch, GeoTIFF processing, automation scripts & backend APIs',
    appliedIn: 'Pixel Orbit AI & VirtualWorks Lab (5 Python systems)',
    coreCapabilities: ['FastAPI REST APIs', 'PyTorch Tensors', 'Data Pipelines', 'Automation Scripts'],
    experienceDuration: 'Primary Language'
  },
  {
    name: 'JavaScript',
    category: 'Programming Languages',
    level: 'Experienced',
    iconName: 'Braces',
    focusArea: 'ES6+ async runtime, DOM manipulation, full-stack client-server interaction',
    appliedIn: 'Trust Graph AI (React frontend & D3 graph interactions)',
    coreCapabilities: ['Async/Await & Promises', 'Event-Driven Architectures', 'D3.js Data Binding', 'Client-Side Routing'],
    experienceDuration: 'Core Web Stack'
  },
  {
    name: 'Java',
    category: 'Programming Languages',
    level: 'Experienced',
    iconName: 'Coffee',
    focusArea: 'Object-Oriented Programming, data structures, algorithms & modular design',
    appliedIn: 'Core Computer Science Systems & Algorithmic Foundations',
    coreCapabilities: ['OOP Paradigms', 'Collections Framework', 'Algorithmic Optimization', 'Design Patterns'],
    experienceDuration: 'University Curriculum'
  },
  {
    name: 'SQL',
    category: 'Programming Languages',
    level: 'Experienced',
    iconName: 'Database',
    focusArea: 'Relational querying, multi-table joins, indexing & ACID compliance',
    appliedIn: 'Trust Graph AI & HackerRank SQL Gold Credential',
    coreCapabilities: ['Complex Analytical Joins', 'Aggregations & Grouping', 'Schema Normalization', 'Query Tuning'],
    certificationBadge: 'HackerRank SQL Gold',
    experienceDuration: 'Certified'
  },
  {
    name: 'C / C++',
    category: 'Programming Languages',
    level: 'Working Knowledge',
    iconName: 'Cpu',
    focusArea: 'Low-level memory management, pointers, STL containers & algorithmic efficiency',
    appliedIn: 'Operating Systems & Design and Analysis of Algorithms',
    coreCapabilities: ['Pointers & Memory Control', 'STL Algorithms', 'Complexity Analysis (Big-O)'],
    experienceDuration: 'Coursework Foundation'
  },
  {
    name: 'HTML & CSS',
    category: 'Programming Languages',
    level: 'Experienced',
    iconName: 'Layout',
    focusArea: 'Semantic web structure, modern responsive design, accessibility & Flexbox/Grid',
    appliedIn: 'Trust Graph AI, Pixel Orbit AI & Developer Portfolio',
    coreCapabilities: ['Semantic HTML5', 'Responsive CSS3', 'WCAG AA Accessibility', 'Design System Alignment'],
    experienceDuration: 'Daily Use'
  },

  // Frontend & UI/UX
  {
    name: 'React.js',
    category: 'Frontend & UI/UX',
    level: 'Experienced',
    iconName: 'Globe',
    focusArea: 'Component architecture, custom hooks, state management & SPAs',
    appliedIn: 'Trust Graph AI & Pixel Orbit AI Frontends',
    coreCapabilities: ['Custom Hooks', 'State Management', 'Tailwind Integration', 'Component Composition'],
    experienceDuration: 'Primary UI Framework'
  },
  {
    name: 'Next.js',
    category: 'Frontend & UI/UX',
    level: 'Working Knowledge',
    iconName: 'Layers',
    focusArea: 'Server-side rendering, App Router, metadata SEO & optimized web delivery',
    appliedIn: 'Personal Full-Stack Applications & Prototyping',
    coreCapabilities: ['App Router', 'Server Components', 'SEO & OpenGraph Optimization'],
    experienceDuration: 'Modern Web Stack'
  },
  {
    name: 'Tailwind CSS',
    category: 'Frontend & UI/UX',
    level: 'Experienced',
    iconName: 'Layout',
    focusArea: 'Utility-first modern styling, responsive breakpoints, dark theme architectures',
    appliedIn: 'Trust Graph AI, Pixel Orbit AI & Developer Portfolio',
    coreCapabilities: ['Dark Theme Systems', 'Responsive Breakpoints', 'Design Tokens', 'Micro-Interactions'],
    experienceDuration: 'Production Standard'
  },
  {
    name: 'D3.js',
    category: 'Frontend & UI/UX',
    level: 'Working Knowledge',
    iconName: 'Sparkles',
    focusArea: 'Data-driven DOM manipulation, force-directed graphs & dynamic SVG topologies',
    appliedIn: 'Trust Graph AI (Supplier Dependency & Risk Network)',
    coreCapabilities: ['Force-Directed Network Graphs', 'SVG Node Binding', 'Dynamic Zoom & Drag Behaviors'],
    experienceDuration: 'Applied in Project'
  },

  // Backend & Architecture
  {
    name: 'Node.js',
    category: 'Backend & Architecture',
    level: 'Experienced',
    iconName: 'Server',
    focusArea: 'Event-driven server architecture, asynchronous I/O & npm ecosystem tooling',
    appliedIn: 'Trust Graph AI & Full-Stack Application Backends',
    coreCapabilities: ['Asynchronous Event Loop', 'REST Service Execution', 'Environment & Dependency Config'],
    experienceDuration: 'Full-Stack Workflow'
  },
  {
    name: 'Express.js',
    category: 'Backend & Architecture',
    level: 'Experienced',
    iconName: 'Workflow',
    focusArea: 'RESTful API routing, middleware integration, error handling & authentication',
    appliedIn: 'Trust Graph AI Backend Service',
    coreCapabilities: ['RESTful Routing', 'Custom Middleware', 'Authentication Guards', 'CRUD Endpoints'],
    experienceDuration: 'Production Backend'
  },
  {
    name: 'FastAPI',
    category: 'Backend & Architecture',
    level: 'Working Knowledge',
    iconName: 'Zap',
    focusArea: 'Asynchronous Python web framework, Pydantic type validation & job queues',
    appliedIn: 'Pixel Orbit AI (Satellite Image Processing & Metric Jobs)',
    coreCapabilities: ['Async Endpoints', 'Pydantic Data Contracts', 'Background Job Processing', 'Deep Learning Model Serving'],
    experienceDuration: 'AI Serving Stack'
  },

  // Databases & Cloud Stores
  {
    name: 'MongoDB',
    category: 'Databases & Cloud Stores',
    level: 'Experienced',
    iconName: 'Database',
    focusArea: 'Document-oriented schema design, CRUD operations, BSON structures & aggregation',
    appliedIn: 'Certified by MongoDB University for Students',
    coreCapabilities: ['Document Schemas', 'Aggregation Pipelines', 'Indexing Strategies', 'NoSQL Design'],
    certificationBadge: 'MongoDB University Certified',
    experienceDuration: 'Certified Credential'
  },
  {
    name: 'MySQL / SQLite',
    category: 'Databases & Cloud Stores',
    level: 'Experienced',
    iconName: 'Database',
    focusArea: 'Relational data modeling, foreign keys, transaction handling & query tuning',
    appliedIn: 'Trust Graph AI, Pixel Orbit AI & Python Internship',
    coreCapabilities: ['Schema Normalization', 'Foreign Key Constraints', 'Embedded DB Management', 'Transaction Safety'],
    experienceDuration: 'Primary Relational DB'
  },
  {
    name: 'Firebase',
    category: 'Databases & Cloud Stores',
    level: 'Working Knowledge',
    iconName: 'Flame',
    focusArea: 'Cloud Firestore, real-time synchronization, user authentication & security rules',
    appliedIn: 'Rapid Cloud Prototyping & Authentication',
    coreCapabilities: ['Cloud Firestore', 'Realtime Sync', 'Authentication Integration'],
    experienceDuration: 'Cloud BaaS'
  },
  {
    name: 'Supabase',
    category: 'Databases & Cloud Stores',
    level: 'Working Knowledge',
    iconName: 'Layers',
    focusArea: 'PostgreSQL-backed BaaS, row-level security policies & instant REST endpoints',
    appliedIn: 'Full-Stack Personal Projects',
    coreCapabilities: ['Postgres BaaS', 'Row-Level Security', 'Edge API Integration'],
    experienceDuration: 'Cloud Postgres'
  },

  // AI, ML & Vision
  {
    name: 'PyTorch',
    category: 'AI, ML & Vision',
    level: 'Working Knowledge',
    iconName: 'BrainCircuit',
    focusArea: 'Tensor manipulation, neural network training loops & CNN-Transformer designs',
    appliedIn: 'Pixel Orbit AI (LISS-IV Satellite Cloud Removal)',
    coreCapabilities: ['Tensors & Autograd', 'CNN-Transformer Design', 'Custom Loss Functions', 'Inference Optimization'],
    experienceDuration: 'Deep Learning Projects'
  },
  {
    name: 'Computer Vision & OpenCV',
    category: 'AI, ML & Vision',
    level: 'Working Knowledge',
    iconName: 'Eye',
    focusArea: 'Image preprocessing, masking, GDAL/Rasterio GeoTIFF parsing & OCR extraction',
    appliedIn: 'Pixel Orbit AI & Academic Authenticity Validator',
    coreCapabilities: ['Cloud Masking', 'GeoTIFF & Radiometric Handling', 'OCR & Adaptive Thresholding', 'PSNR / SSIM Metric Evaluation'],
    experienceDuration: 'Vision Systems'
  },
  {
    name: 'Google Generative AI',
    category: 'AI, ML & Vision',
    level: 'Working Knowledge',
    iconName: 'Sparkles',
    focusArea: 'Prompt engineering, multimodal model understanding & intelligent workflows',
    appliedIn: 'Google Cloud Skills Boost Certified',
    coreCapabilities: ['LLM System Prompting', 'Multimodal Ingestion', 'AI Application Design'],
    certificationBadge: 'Google GenAI Certified',
    experienceDuration: 'Certified'
  },

  // Dev Tools & Platforms
  {
    name: 'Git & GitHub',
    category: 'Dev Tools & Platforms',
    level: 'Experienced',
    iconName: 'GitBranch',
    focusArea: 'Branching models, atomic commit etiquette, pull requests & collaborative repos',
    appliedIn: 'All projects across github.com/cksakthiram2428 & ckmr27',
    coreCapabilities: ['Branching & Merging', 'Conflict Resolution', 'GitHub Releases', 'Version Tagging'],
    experienceDuration: 'Daily Workflow'
  },
  {
    name: 'VS Code',
    category: 'Dev Tools & Platforms',
    level: 'Experienced',
    iconName: 'FileCode',
    focusArea: 'Integrated debugging, linting environments, extensions & remote development',
    appliedIn: 'Primary Daily Development Environment',
    coreCapabilities: ['Breakpoints & Debugging', 'Workspace Configurations', 'Integrated Terminal Workflows'],
    experienceDuration: 'Primary IDE'
  },
  {
    name: 'Kaggle',
    category: 'Dev Tools & Platforms',
    level: 'Working Knowledge',
    iconName: 'Code',
    focusArea: 'Data exploration, GPU notebook environments & model benchmark analysis',
    appliedIn: 'Machine Learning Experiments & Datasets',
    coreCapabilities: ['Jupyter Notebooks', 'Dataset Preprocessing', 'Model Benchmarking'],
    experienceDuration: 'Platform User'
  }
];

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'supply-chain-risk-platform',
    title: 'AI-Powered Supply Chain Risk Intelligence Platform',
    category: 'Full Stack / AI / Graph Analytics',
    tagline: 'Trust Graph AI — Multi-Tier Supplier Reliability & Risk Network',
    description: 'An AI-powered supply chain risk intelligence platform built to examine supplier reliability, uncover hidden dependencies, and spot multi-tier supply-chain vulnerabilities in real time.',
    problem: 'Modern enterprise supply chains face opaque multi-tier dependencies where unforeseen supplier disruptions cascade across production lines without prior notice.',
    solution: 'Engineered an interactive risk intelligence platform featuring dynamic D3.js network graphs, automated Trust Scores, full CRUD operations, and exportable procurement risk reports.',
    technologies: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'SQLite', 'D3.js'],
    myContribution: 'Architected the full-stack system end-to-end: created the D3.js multi-tier supplier relationship network graph, implemented REST APIs with Express & SQLite, and developed Trust Score calculation algorithms.',
    keyFeatures: [
      'Examines supplier reliability and spots supply-chain vulnerabilities dynamically',
      'Interactive D3.js network graph visualizing multi-tier supplier relationships and risk links',
      'Complete supplier CRUD operations, authentication, and REST API endpoints',
      'Calibrated supplier Trust Scores and risk category summaries',
      'Downloadable risk analytics reports for procurement and executive review',
    ],
    githubUrl: 'https://github.com/cksakthiram2428',
    demoUrl: '[Add Live Demo URL]',
    image: '/src/assets/images/trustgraph_ai_preview_1791121519202.jpg',
    details: {
      problem: 'Enterprise supply chains frequently suffer from hidden tier-2 and tier-3 vendor dependencies. Traditional spreadsheets fail to capture ripple effects when one supplier encounters regulatory or operational friction.',
      approach: 'Modeled suppliers and logistics paths as an interconnected network. Developed heuristic scoring models that combine historical reliability, geographic risk indexes, and fulfillment latency into a standardized trust metric (0–100).',
      technology: ['React.js', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'SQLite', 'D3.js Graph Engine'],
      implementation: [
        'Built full-stack web application with React.js and Vite frontend communicating with Express.js backend.',
        'Created a dynamic force-directed network graph in D3.js to model multi-tier supplier dependencies and risk paths.',
        'Implemented supplier CRUD operations, secure authentication, and relational SQLite schema.',
        'Engineered an exportable audit report generator for procurement reviews.'
      ],
      result: 'Delivers a transparent visual paradigm for evaluating vendor reliability, cutting down supplier evaluation turnaround and preventing cascading supply shocks.',
      whatILearned: 'Gained deep practical mastery in building custom D3.js interactive graphs in React, designing RESTful APIs with Express, and optimizing relational queries in SQLite.'
    }
  },
  {
    id: 'satellite-imagery-cloud-removal',
    title: 'Satellite Imagery Cloud Removal and Reconstruction System',
    category: 'AI / Computer Vision / Remote Sensing',
    tagline: 'Pixel Orbit AI — Deep Learning Cloud Masking & Surface Reconstruction',
    description: 'A deep-learning satellite image reconstruction system designed to detect and clear cloud cover from LISS-IV remote sensing images and reconstruct ground surfaces with high radiometric fidelity.',
    problem: 'Cloud obstruction frequently compromises Earth observation imagery from satellites like LISS-IV, hindering agricultural forecasting, disaster assessment, and spatial analysis.',
    solution: 'Built an end-to-end cloud removal pipeline utilizing a CNN-Transformer architecture, GeoTIFF spatial data preprocessing with GDAL and Rasterio, and FastAPI job management.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'PyTorch', 'SQLite', 'GDAL', 'Rasterio', 'OpenCV'],
    myContribution: 'Implemented the CNN-Transformer design, cloud masking algorithms, GeoTIFF processing with GDAL/Rasterio, and configured quantitative metric checks (PSNR, SSIM, MAE, RMSE) in FastAPI.',
    keyFeatures: [
      'Clears dense and cirrus cloud cover from LISS-IV satellite imagery and reconstructs ground surfaces',
      'CNN-Transformer hybrid architecture combining local feature extraction with long-range context',
      'Advanced GeoTIFF spatial processing, cloud masking, and radiometric calibration with GDAL & Rasterio',
      'Automated reconstruction validation checks using PSNR, SSIM, MAE, and RMSE metrics',
      'FastAPI async backend managing image processing queues and job states',
    ],
    githubUrl: 'https://github.com/cksakthiram2428',
    demoUrl: '[Add Live Demo URL]',
    image: '/src/assets/images/pixel_orbit_ai_preview_1791122403933.jpg',
    details: {
      problem: 'Optical satellite sensors cannot penetrate dense cloud cover. Traditional interpolation techniques produce blurry artifacts that distort multi-spectral satellite reflectance data.',
      approach: 'Combined convolutional neural networks (for fine spatial detail) with visual Transformers (for contextual attention across multi-spectral bands), using spatio-temporal reference frames to reconstruct missing land surface pixels.',
      technology: ['PyTorch', 'FastAPI', 'React & TypeScript', 'GDAL', 'Rasterio', 'OpenCV', 'SQLite'],
      implementation: [
        'Built preprocessing pipelines with GDAL and Rasterio to parse multi-band GeoTIFF spatial coordinates and radiometric values.',
        'Trained and evaluated CNN-Transformer reconstruction models with customized loss functions.',
        'Engineered an automated quantitative evaluation harness measuring PSNR, SSIM, MAE, and RMSE against cloud-free validation scenes.',
        'Constructed a modern React/TypeScript control interface connected to an asynchronous FastAPI processing queue.'
      ],
      result: 'Achieved high reconstruction quality with realistic texture synthesis and minimal spectral distortion, enabling reliable remote sensing analysis over previously obscured regions.',
      whatILearned: 'Mastered high-dimensional geospatial data formats (GeoTIFF, GDAL), PyTorch deep learning pipelines, and quantitative image evaluation standards.'
    }
  },
  {
    id: 'authenticity-validator',
    title: 'Authenticity Validator for Academia',
    category: 'Document Verification / AI / Security',
    tagline: 'Academic Certificate Anti-Fraud & OCR Verification Engine',
    description: 'A document verification system designed to help identify and validate academic certificates, extract critical credentials via OCR, and reduce manual verification overhead for educational institutions.',
    problem: 'Academic credential forgery and certificate tampering pose severe administrative burdens on universities and employers, requiring lengthy manual verification cycles.',
    solution: 'Developed an automated pipeline combining optical character recognition (OCR) with structural document fingerprinting and cryptographic hash cross-referencing to validate institutional credentials.',
    technologies: ['Python', 'OCR Engine (Tesseract/OpenCV)', 'SQL', 'Cryptographic Hashing', 'JavaScript', 'HTML/CSS'],
    myContribution: 'Engineered the OCR preprocessing and text extraction pipeline, implemented cryptographic certificate fingerprinting, and designed the institutional validation workflow UI.',
    keyFeatures: [
      'Automated OCR text and field extraction for student ID, GPA, degree, and issue date',
      'Digital certificate fingerprinting and cryptographic integrity verification',
      'Multi-stage verification workflow (Upload → Scan → Extract → Cross-verify)',
      'Tamper detection alerts for mismatched layout structures or altered typography',
      'Audit log tracking verification history and institutional issuer signatures',
    ],
    githubUrl: 'https://github.com/ckmr27',
    demoUrl: '[Add Live Demo URL]',
    image: '/src/assets/images/authenticity_validator_preview_1791121537451.jpg',
    details: {
      problem: 'Verifying student diplomas and transcripts manually takes days or weeks. Fraudulent modifications to printed or scanned certificates are difficult to spot with the naked eye.',
      approach: 'Built a multi-tiered pipeline: image normalization and denoising -> OCR text extraction -> regex entity matching -> hash validation against authorized institutional records.',
      technology: ['Python', 'OpenCV / Image Preprocessing', 'OCR Framework', 'SQL Database', 'REST Services'],
      implementation: [
        'Created preprocessing scripts in Python using grayscale conversion, adaptive thresholding, and perspective correction.',
        'Wrote custom regex parsers to reliably identify student roll numbers, graduation years, and credential types.',
        'Constructed a verification status engine returning clear authenticity confidence flags.',
        'Built a clean user interface where administrative staff can drag-and-drop certificate scans and receive instant verification summaries.'
      ],
      result: 'Significantly streamlined the document intake process, demonstrating how computer vision and hashing algorithms can defend institutional credibility.',
      whatILearned: 'Deepened practical knowledge in handling noisy real-world image inputs, tuning OCR accuracy, and designing secure verification architectures.'
    }
  },
  {
    id: 'python-internship-collection',
    title: 'Python Project Collection',
    category: 'Python / Systems & Automation / VirtualWorks Lab',
    tagline: '5 Practical Python Systems Engineered During Full Stack Internship',
    description: 'A suite of 5 production-style Python projects engineered during the Full Stack Development internship at VirtualWorks Lab, focusing on scheduling, rating algorithms, quote engines, digital profile cards, and quick notes.',
    problem: 'Hands-on software development requires reliable utility tools, clean data structures, resilient state persistence, and modular code architecture.',
    solution: 'Designed and implemented 5 discrete Python applications tackling diverse real-world software needs: Coffee Rating Application, Team Availability Tracker, Python Quote Generator, User Profile Card Generator, and Quick Notes App.',
    technologies: ['Python 3', 'File I/O & Serialization', 'SQLite / JSON', 'REST APIs', 'Pillow / Graphics', 'Datetime Logic'],
    myContribution: 'Independently designed, coded, tested, and documented all 5 internship projects, ensuring clean code conventions and full reproducibility.',
    keyFeatures: [
      '5 distinct software solutions engineered during internship at VirtualWorks Lab',
      'Coffee Rating Application with multi-criteria sensory evaluation and analytics',
      'Team Availability Tracker with timezone math and meeting window coordination',
      'Python Quote Generator with dynamic API retrieval and category filtering',
      'User Profile Card Generator with dynamic text/badge layout rendering',
      'Quick Notes App with search indexing, tags, and persistent storage',
    ],
    githubUrl: 'https://github.com/ckmr27',
    image: '/src/assets/images/trustgraph_ai_preview_1791121519202.jpg',
    isCollection: true,
    subProjects: [
      {
        title: 'Coffee Rating Application',
        description: 'A structured evaluation and review platform to score, catalog, and analyze coffee flavor profiles (acidity, roast level, aroma notes) with persistent rating storage and summaries.',
        tech: ['Python', 'Data Persistence', 'Analytical Scoring', 'Evaluation Logic']
      },
      {
        title: 'Team Availability Tracker',
        description: 'A remote collaboration utility designed to track team member working hours, active shift statuses, and meeting availability across distributed time zones.',
        tech: ['Python', 'Datetime & Timezones', 'JSON/CSV Storage', 'Scheduling Logic']
      },
      {
        title: 'Python Quote Generator',
        description: 'A dynamic quotation engine featuring curated inspirational and engineering quotes with topic filtering, randomizer algorithms, and automated formatting.',
        tech: ['Python', 'REST APIs / JSON', 'Text Processing', 'Automation']
      },
      {
        title: 'User Profile Card Generator',
        description: 'An automated digital card generator that ingests user credentials, bio parameters, and skill metadata to render formatted profile badges and cards.',
        tech: ['Python', 'Image/Card Rendering', 'Template Parsing', 'Data Validation']
      },
      {
        title: 'Quick Notes App',
        description: 'A lightweight and responsive desktop utility for rapid note capture, tag-based indexing, timestamped logs, and resilient local data persistence.',
        tech: ['Python', 'File I/O & Serialization', 'State Management', 'Search Filtering']
      }
    ],
    details: {
      problem: 'Hands-on software development requires bridging the gap between classroom theory and production-oriented code organization, exception handling, and code reusability.',
      approach: 'Tackled 5 discrete functional specifications sequentially during the VirtualWorks Lab internship, emphasizing clean modular design, error resilience, and thorough Git version control.',
      technology: ['Python 3.x', 'Standard Library (os, sys, json, csv, re)', 'SQL', 'Git & GitHub'],
      implementation: [
        'Structured each module with separate data layers, business logic, and CLI/API interfaces.',
        'Wrote defensive validation routines to prevent unhandled crashes on malformed inputs.',
        'Implemented unified logging patterns for debugging and traceability.',
        'Conducted code reviews and iterated on performance benchmarks.'
      ],
      result: 'Successfully completed and delivered all 5 project modules during the internship duration, receiving commendation for disciplined code organization.',
      whatILearned: 'Sharpened real-world debugging intuition, learned professional version control etiquette, and gained confidence in building production-ready Python utilities.'
    }
  }
];

export const workExperienceList: WorkExperience[] = [
  {
    company: 'Full Stack & AI Developer',
    role: 'Personal Projects & Hackathons',
    duration: '2025 – Present',
    mode: 'In-Person & Remote',
    location: 'Tamil Nadu, India',
    highlights: [
      'Created full stack applications with React.js, Node.js, Express.js, REST APIs and contemporary web technologies.',
      'Managed and engineered AI projects including Trust Graph AI for supply chain risk analytics and Pixel Orbit AI for satellite image cloud removal.',
      'Developed responsive UI components, backend microservices, database schemas, and AI/ML workflows.',
      'Maintained version control, branching strategies, and project development cycles with Git and GitHub.'
    ],
    technologies: ['React.js', 'Node.js', 'Express.js', 'FastAPI', 'PyTorch', 'D3.js', 'REST APIs', 'Git & GitHub']
  },
  {
    company: 'VirtualWorks Lab',
    role: 'Full Stack Development Intern',
    duration: '19 May 2026 – 18 June 2026',
    mode: 'Remote',
    location: 'Remote',
    highlights: [
      'Worked on practical software development tasks across the complete application development lifecycle.',
      'Engineered 5 distinct Python-based systems: Coffee Rating Application, Team Availability Tracker, Quote Generator, User Profile Card Generator, and Quick Notes App.',
      'Gained direct hands-on experience with modern development workflows, version control, and modular architecture.',
      'Improved practical programming, testing discipline, and problem-solving skills under structured timelines.'
    ],
    technologies: ['Python', 'Full Stack Development', 'Git & GitHub', 'SQL', 'Software Architecture', 'Data Processing']
  }
];

export const educationList: EducationInfo[] = [
  {
    institution: 'Hindusthan Institute of Technology',
    degree: 'B.E. Computer Science Engineering',
    field: 'Computer Science and Engineering',
    year: 'Aug 2024 – Present (3rd Year)',
    cgpa: '8.5 / 10.0',
    location: 'Coimbatore, Tamil Nadu',
    keyCoursework: [
      'Data Structures & Algorithms',
      'Database Management Systems (DBMS)',
      'Object-Oriented Programming (Java/C++)',
      'Operating Systems & System Architecture',
      'Computer Networks',
      'Software Engineering & System Design',
      'Design & Analysis of Algorithms',
      'Theory of Computation'
    ]
  },
  {
    institution: 'E.B.G Matric Higher Secondary School',
    degree: 'Higher Secondary & Secondary Education',
    field: '8th – 12th Standard',
    year: '2018 – 2024',
    location: 'Madurai, Tamil Nadu',
    keyCoursework: [
      'Mathematics',
      'Physics',
      'Chemistry',
      'Computer Science',
      'English'
    ]
  }
];

export const certificationsList: CertificationItem[] = [
  {
    name: 'MongoDB Basics For Students Certificate',
    issuer: 'MongoDB University',
    level: 'Verified Student Credential',
    icon: 'Database'
  },
  {
    name: 'HackerRank SQL (Basic to Advanced)',
    issuer: 'HackerRank',
    level: 'Gold / Advanced Proficiency',
    icon: 'Terminal'
  },
  {
    name: 'Google Generative AI Learning - Basic',
    issuer: 'Google Cloud Skills Boost',
    level: 'Foundational AI & LLMs',
    icon: 'Sparkles'
  }
];

export const philosophySteps: PhilosophyStep[] = [
  {
    step: '01',
    title: 'Understand the Problem',
    description: 'Before writing a single line of code, dissect the core friction. What are the constraints, user pain points, and boundary conditions?',
    bullets: [
      'Define clear input/output requirements',
      'Identify edge cases and constraints early',
      'Ensure the solution addresses root causes rather than symptoms'
    ]
  },
  {
    step: '02',
    title: 'Design the Solution',
    description: 'Plan the architecture, data models, and component boundaries. Select the right tool for the job based on requirements, not hype.',
    bullets: [
      'Draft relational schema and data contracts',
      'Choose minimal, dependable technology stacks',
      'Map data flow and API boundaries'
    ]
  },
  {
    step: '03',
    title: 'Build & Test',
    description: 'Implement incrementally with clean, readable code. Write modular functions and verify each layer thoroughly.',
    bullets: [
      'Follow clean code principles and consistent naming',
      'Test edge cases, erroneous inputs, and exceptions',
      'Maintain disciplined Git commit history'
    ]
  },
  {
    step: '04',
    title: 'Improve & Deploy',
    description: 'Refactor for clarity and efficiency. Review feedback, document setup steps, and ensure the project is easy to run and extend.',
    bullets: [
      'Optimize algorithmic complexity and database queries',
      'Write comprehensive setup documentation and READMEs',
      'Package for reliable execution and evaluation'
    ]
  }
];

export const publicRepositories: RepositoryItem[] = [
  {
    name: 'AI-Supply-Chain-Risk-Platform',
    description: 'AI-Powered Supply Chain Risk Intelligence Platform with D3.js multi-tier network graphs, supplier trust scores, and report generation.',
    language: 'JavaScript / Python',
    languageColor: '#f7df1e',
    stars: 15,
    forks: 4,
    url: 'https://github.com/cksakthiram2428',
    topics: ['supply-chain', 'd3js', 'react', 'risk-intelligence', 'nodejs', 'sqlite']
  },
  {
    name: 'Satellite-Image-Cloud-Removal',
    description: 'Pixel Orbit AI — Satellite Imagery Cloud Removal & Reconstruction with CNN-Transformer, GeoTIFF processing, and FastAPI metric monitors.',
    language: 'Python',
    languageColor: '#38bdf8',
    stars: 18,
    forks: 5,
    url: 'https://github.com/cksakthiram2428',
    topics: ['satellite-imagery', 'pytorch', 'gdal', 'fastapi', 'computer-vision', 'remote-sensing']
  },
  {
    name: 'academic-authenticity-validator',
    description: 'Document verification and OCR extraction system for institutional credentials and anti-tamper security.',
    language: 'Python',
    languageColor: '#38bdf8',
    stars: 9,
    forks: 2,
    url: 'https://github.com/ckmr27',
    topics: ['ocr', 'document-verification', 'cryptography', 'security', 'opencv']
  },
  {
    name: 'python-internship-lab-suites',
    description: 'Suite of 5 Python systems: Coffee Rating Application, Team Availability Tracker, Quote Generator, Profile Card Generator, Quick Notes App.',
    language: 'Python',
    languageColor: '#38bdf8',
    stars: 14,
    forks: 4,
    url: 'https://github.com/ckmr27',
    topics: ['automation', 'internship', 'coffee-rating', 'availability-tracker', 'python']
  }
];
