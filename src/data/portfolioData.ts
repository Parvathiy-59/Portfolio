export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'data-analytics' | 'bi-reporting' | 'web-development';
  categoryLabel: string;
  shortDescription: string;
  problem: string;
  solution: string;
  impactMetrics: { label: string; value: string }[];
  technologies: string[];
  keyHighlights: string[];
  demoFeatures?: string[];
  codeUrl?: string;
  demoUrl?: string;
}

export interface Internship {
  id: string;
  role: string;
  company: string;
  period: string;
  badgeColor: string;
  summary: string;
  keyContributions: string[];
  toolsUsed: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: string;
  description: string;
  skills: { name: string; level: number; note: string }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Parvathiy A R',
    title: 'Aspiring Data Analyst & Computer Science Engineer',
    bio: 'Detail-oriented Computer Science Engineering student passionate about transforming raw, messy datasets into strategic, high-impact business narratives. Hands-on experience across Python analytics, SQL relational querying, Power BI interactive dashboarding, and IBM Cognos reporting.',
    location: 'Nagercoil, Tamil Nadu, India',
    email: 'surthi158@gmail.com',
    phone: '+91 8015899379',
    github: 'https://github.com/Parvathiy-59',
    linkedin: 'https://linkedin.com/in/parvathiy-a-r-9ba37b2a1',
    profilePic: '/assets/aistudio/Parvathiy_photo_585c6633.jpeg',
    availability: 'Open for Data Analyst Internships & Entry-Level Roles',
    languages: [
      { name: 'Tamil', fluency: 'Native Speaker' },
      { name: 'English', fluency: 'Professional Working Proficiency' },
      { name: 'Malayalam', fluency: 'Conversational / Listening' },
    ],
  },

  stats: [
    { label: 'B.E. CSE CGPA', value: '8.18', note: 'Anna University (2023–2027)' },
    { label: 'SSLC Academic Score', value: '100%', note: "St. Joseph's Convent" },
    { label: 'Industry Internships', value: '2+', note: 'Femtosoft & IBM Virtual' },
    { label: 'NPTEL Certifications', value: 'Elite', note: 'Crypto, Cyber & Blockchain' },
  ],

  internships: [
    {
      id: 'femtosoft',
      role: 'AI & Data Science Intern',
      company: 'Femtosoft Technologies',
      period: 'June 2026 – July 2026',
      badgeColor: 'cyan',
      summary: 'Focused on applying artificial intelligence algorithms and exploratory data analytics to supply chain operations and transit predictability.',
      keyContributions: [
        'Engineered an end-to-end Supply Chain Logistics Dashboard with a predictive model for Delivery Delay probability.',
        'Cleaned, normalized, and pre-processed 10,000+ unstructured carrier records using Python (Pandas & NumPy).',
        'Built dynamic Power BI reports evaluating carrier delivery performance, SLA compliance rates, and geographic bottleneck clusters.',
        'Presented analytical findings to technical leads with actionable operational recommendations.',
      ],
      toolsUsed: ['Python', 'Pandas', 'NumPy', 'Power BI', 'Google Colab', 'Data Cleaning'],
    },
    {
      id: 'ibm',
      role: 'IBM Virtual Intern',
      company: 'IBM Cognos Analytics Program',
      period: 'March 2026 – April 2026',
      badgeColor: 'purple',
      summary: 'Completed intensive hands-on business intelligence training constructing enterprise reports and multi-branch dashboards.',
      keyContributions: [
        'Developed interactive multi-tab dashboards, drill-through reports, and parameterized queries using IBM Cognos Analytics.',
        'Authored conditional styling rules to automatically flag overdue books, peak reservation periods, and revenue shortfalls.',
        'Synthesized cross-branch operational datasets into executive-level summary presentations.',
        'Strengthened data modeling skills for relational and dimensional schemas.',
      ],
      toolsUsed: ['IBM Cognos Analytics', 'SQL Queries', 'Data Modeling', 'Business Intelligence', 'Reporting Prompts'],
    },
  ] as Internship[],

  projects: [
    {
      id: 'supply-chain',
      title: 'Supply Chain Logistics Dashboard',
      subtitle: 'Delivery Delay Prediction System',
      category: 'data-analytics',
      categoryLabel: 'Data Analytics & ML',
      shortDescription: 'A predictive analytical solution identifying transit bottlenecks, estimating delivery delay risks, and visualizing carrier SLAs.',
      problem: 'Logistics carriers often face unexpected shipment delays due to route distance, weather anomalies, and dispatch timing, causing SLA penalties and lost customer trust.',
      solution: 'Constructed an analytical workflow in Google Colab using Pandas for data wrangling and feature engineering, followed by training a classification model for delay risk assessment and visualizing all metrics via an interactive Power BI dashboard.',
      impactMetrics: [
        { label: 'Prediction Recall', value: '86%' },
        { label: 'Processed Records', value: '10,000+' },
        { label: 'SLA Risk Reduction', value: '23%' },
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'Power BI', 'Google Colab', 'Scikit-Learn'],
      keyHighlights: [
        'Analyzed multi-carrier logistical records across 14 transport corridors',
        'Implemented correlation heatmaps identifying key variables tied to late deliveries',
        'Created interactive Power BI drilldowns by carrier, region, and weather severity',
        'Generated automated alert flags for shipments exceeding 48h expected transit',
      ],
      demoFeatures: [
        'Carrier Performance Index Comparison',
        'Real-time Transit Delay Risk Estimator',
        'Route Variance & Bottleneck Heatmap',
      ],
    },
    {
      id: 'knowledgehub',
      title: 'KnowledgeHub Library Analytics',
      subtitle: 'Circulation & Membership Intelligence',
      category: 'bi-reporting',
      categoryLabel: 'BI & Reporting',
      shortDescription: 'Comprehensive circulation and member activity suite organizing issues, returns, overdue frequencies, and fine collections with conditional alerts.',
      problem: 'Branch library supervisors struggled with disjointed record-keeping, leading to uncollected fines, lost inventories, and unequal resource distribution.',
      solution: 'Designed and deployed multi-layered Cognos reports with parameter prompts, drill-through paths, and conditional threshold styling for real-time branch governance.',
      impactMetrics: [
        { label: 'Reporting Automation', value: '100%' },
        { label: 'Library Branches', value: '5 Branches' },
        { label: 'Drill-through Depth', value: '3 Levels' },
      ],
      technologies: ['IBM Cognos Analytics', 'Relational SQL', 'Dimensional Modeling', 'Data Visualization'],
      keyHighlights: [
        'Organized reports by branch, literary genre, member cohort, and borrowing tenure',
        'Constructed conditional highlighting for books overdue > 14 days',
        'Built automated monthly fine calculation and inventory restocking alerts',
      ],
      demoFeatures: [
        'Branch-wise Circulation Treemap',
        'Fine Recovery & Delinquency Tracker',
        'High-Demand Book Reservation Predictor',
      ],
    },
    {
      id: 'studysprint',
      title: 'StudySprint Progress Dashboard',
      subtitle: 'Student Goal & Milestone Tracker',
      category: 'web-development',
      categoryLabel: 'Web Application',
      shortDescription: 'Responsive productivity application assisting students to set exam sprint milestones, track daily targets, and visualize sprint completion.',
      problem: 'Students frequently struggle to measure revision progress across multi-subject engineering curricula with scattered deadlines.',
      solution: 'Built a lightweight, highly responsive client-side dashboard with Pomodoro session tracking, milestone burndown visualizers, and local persistence.',
      impactMetrics: [
        { label: 'Daily Task Completion', value: '+35%' },
        { label: 'Client-side Latency', value: '< 50ms' },
        { label: 'Mobile Compatibility', value: '100%' },
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'LocalStorage', 'Vercel'],
      keyHighlights: [
        'Custom interactive circular progress rings for subject readiness',
        'Integrated sprint target checklist with persistent browser storage',
        'Zero external heavy libraries, ensuring instant loading on mobile devices',
      ],
      demoFeatures: [
        'Milestone Target Planner',
        'Study Session Focus Timer',
        'Weekly Completion Bar Graph',
      ],
    },
    {
      id: 'spa-renderer',
      title: 'Dynamic Single Page Application',
      subtitle: 'Modular Content Engine',
      category: 'web-development',
      categoryLabel: 'Frontend Engineering',
      shortDescription: 'A modular single-page interface leveraging asynchronous JSON ingestion and responsive client-side state handling with zero page reloads.',
      problem: 'Legacy informational sites suffer from sluggish full-page reloads and rigid layouts.',
      solution: 'Architected a modular SPA structure parsing dynamic data endpoints, rendering rich UI components seamlessly.',
      impactMetrics: [
        { label: 'Page Reload Time', value: '0ms' },
        { label: 'Lighthouse Score', value: '98/100' },
        { label: 'Responsive Breakpoints', value: '4 Tiers' },
      ],
      technologies: ['JavaScript', 'JSON API', 'CSS Grid', 'Modular Architecture'],
      keyHighlights: [
        'Clean client-side routing and DOM manipulation',
        'Asynchronous JSON fetch with structured state feedback',
        'Graceful fallbacks and responsive layout adapting from mobile to widescreen',
      ],
      demoFeatures: [
        'Dynamic Content Switcher',
        'Instant Filter & Search',
        'Stateful Theme Adaptation',
      ],
    },
  ] as Project[],

  skillCategories: [
    {
      id: 'programming-sql',
      title: 'Programming & Databases',
      iconName: 'Code',
      description: 'Foundational programming and database management for structured data operations.',
      skills: [
        { name: 'Python', level: 90, note: 'Pandas, NumPy, Matplotlib, Data Cleaning' },
        { name: 'SQL', level: 88, note: 'Complex Joins, Aggregations, Subqueries, Group By' },
        { name: 'Relational Schemas', level: 85, note: 'Normalization, Foreign Keys, ER Diagrams' },
        { name: 'Basic Machine Learning', level: 75, note: 'Classification, Regression, Scikit-Learn' },
      ],
    },
    {
      id: 'bi-analytics',
      title: 'Data Analysis & BI Tools',
      iconName: 'BarChart3',
      description: 'Transforming raw business records into intuitive visual analytics and dashboards.',
      skills: [
        { name: 'Power BI', level: 88, note: 'DAX Expressions, Custom Reports, Interactive Dashboards' },
        { name: 'IBM Cognos Analytics', level: 86, note: 'Multi-tab Dashboards, Prompt Pages, Conditional Styling' },
        { name: 'Microsoft Excel', level: 92, note: 'Pivot Tables, VLOOKUP/XLOOKUP, Advanced Formulas' },
        { name: 'Exploratory Data Analysis (EDA)', level: 88, note: 'Outlier Detection, Trend Analysis, KPI Derivation' },
      ],
    },
    {
      id: 'web-tech',
      title: 'Web & Development Stack',
      iconName: 'Globe',
      description: 'Crafting responsive user interfaces and managing development lifecycle.',
      skills: [
        { name: 'HTML5 & CSS3', level: 85, note: 'Responsive Grids, Flexbox, Semantic Markup' },
        { name: 'JavaScript', level: 80, note: 'DOM, Asynchronous Fetch, Event Handling' },
        { name: 'Git & GitHub', level: 82, note: 'Version Control, Branching, Repository Management' },
        { name: 'Google Colab & Jupyter', level: 90, note: 'Interactive Notebooks, Cloud Execution' },
      ],
    },
  ] as SkillCategory[],

  education: [
    {
      id: 'be-cse',
      degree: 'B.E. Computer Science and Engineering',
      institution: 'University College of Engineering, Nagercoil (Anna University)',
      period: '2023 – 2027',
      score: 'CGPA: 8.18 / 10',
      description: 'Undergraduate study focused on computer architecture, database management systems, data structures, algorithms, and artificial intelligence.',
    },
    {
      id: 'hsc',
      degree: 'Higher Secondary Certificate (HSC)',
      institution: "St. Joseph's Convent Higher Secondary School",
      period: '2022 – 2023',
      score: 'Academic Score: 89%',
      description: 'Core focus in Mathematics, Physics, Chemistry, and Computer Science.',
    },
    {
      id: 'sslc',
      degree: 'Secondary School Leaving Certificate (SSLC)',
      institution: "St. Joseph's Convent Higher Secondary School",
      period: '2020 – 2021',
      score: 'Academic Score: 100% (Centum Distinction)',
      description: 'Completed secondary education with perfect academic marks across all curriculum subjects.',
    },
  ],

  certifications: [
    {
      title: 'NPTEL Elite Certification',
      issuer: 'National Programme on Technology Enhanced Learning (IITs)',
      topics: 'Cryptography & Network Security, Cybersecurity & Privacy, Blockchain Applications',
      tag: 'Elite Recognition',
    },
    {
      title: 'Introduction to IBM Cognos Analytics',
      issuer: 'IBM Academic Program',
      topics: 'Business Intelligence, Report Authoring, Dashboard Engineering, Prompt Filters',
      tag: 'Industry Verified',
    },
    {
      title: 'Infosys Springboard Certification',
      issuer: 'Infosys',
      topics: 'Agile Methodology, DevOps, Azure Cloud Computing, AI Fundamentals, Business Communication',
      tag: 'Professional Skills',
    },
    {
      title: 'Youth Employment Program (YEP)',
      issuer: 'Tata Consultancy Services (TCS)',
      topics: 'Corporate Readiness, Quantitative Aptitude, Workplace Communication',
      tag: 'Employability Training',
    },
  ],

  awards: [
    {
      title: '1st Prize – Idea Presentation',
      event: 'Digital Legacy Manager (Symposium)',
      description: 'Conceived and presented a secure architecture for managing and transferring digital assets posthumously using verifiable cryptographic guarantees.',
    },
    {
      title: '1st Prize – Detectives & Chronicles',
      event: 'College Technical Symposium 2026',
      description: 'Recognized for analytical problem-solving, clue correlation, and algorithmic deduction under timed pressure.',
    },
    {
      title: 'Institution’s Innovation Council (IIC) Workshop',
      event: 'Lean Start-Up & Minimum Viable Product (MVP)',
      description: 'Participated in entrepreneurship and product design mentoring sessions to validate viable data solutions.',
    },
  ],
};
