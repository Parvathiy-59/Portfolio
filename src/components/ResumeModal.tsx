import { useEffect, useState } from 'react';
import { X, Printer, Copy, Check, ExternalLink, Download, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);
  const { profile, education, internships, projects, skillCategories, certifications, awards } = PORTFOLIO_DATA;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopySummary = () => {
    const text = `
PARVATHIY A R
Aspiring Data Analyst & Computer Science Engineer
Email: ${profile.email} | Phone: ${profile.phone}
Location: ${profile.location}
LinkedIn: ${profile.linkedin} | GitHub: ${profile.github}

EDUCATION:
- B.E. Computer Science & Engineering | University College of Engineering, Nagercoil (Anna Univ) | CGPA: 8.18 / 10 (2023–2027)
- Higher Secondary Certificate (HSC) | St. Joseph's Convent | 89% (2022–2023)
- Secondary School (SSLC) | St. Joseph's Convent | 100% Distinction (2020–2021)

INTERNSHIPS:
- AI & Data Science Intern | Femtosoft Technologies (June 2026 - July 2026)
  * Developed Supply Chain Logistics Dashboard with Delivery Delay Prediction
  * Prepared and wrangled 10,000+ logistics shipment records using Python (Pandas/NumPy)
- IBM Virtual Intern | IBM Cognos Analytics Program (March 2026 - April 2026)
  * Designed KnowledgeHub multi-tab operational dashboards and conditional automated reports

TECHNICAL SKILLS:
- Languages & Data: Python (Pandas, NumPy, Scikit-learn), SQL, Relational Database Modeling
- BI & Analytics: Power BI, Microsoft Excel (Advanced), IBM Cognos Analytics
- Web & Tools: Git, GitHub, HTML5, CSS3, JavaScript, Google Colab

CERTIFICATIONS:
- NPTEL Elite Certification (Cryptography & Network Security, Cybersecurity & Privacy, Blockchain Applications)
- IBM Certified: Introduction to IBM Cognos Analytics
- Infosys Springboard & TCS Youth Employment Program (YEP)
    `.trim();

    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in">
      <div
        className="glass-panel border border-slate-700 max-w-4xl w-full max-h-[92vh] overflow-y-auto rounded-3xl p-6 sm:p-10 space-y-8 shadow-2xl relative bg-[#0b0e14]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Actions Bar */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
            <h2 className="text-sm sm:text-base font-bold text-white uppercase tracking-wider font-mono">
              Curriculum Vitae / Resume
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopySummary}
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              title="Copy Resume Plaintext"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-900 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close resume modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document Container */}
        <div className="bg-[#0f141f] border border-slate-800/90 rounded-2xl p-6 sm:p-8 space-y-7 text-slate-200 text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-5 space-y-2 text-center sm:text-left sm:flex sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {profile.name}
              </h1>
              <p className="text-cyan-400 font-semibold text-sm">
                {profile.title}
              </p>
            </div>
            <div className="text-xs text-slate-400 space-y-1 sm:text-right pt-2 sm:pt-0">
              <p>{profile.location}</p>
              <p>{profile.phone} · {profile.email}</p>
              <p>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">LinkedIn</a>
                {' · '}
                <a href={profile.github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">GitHub</a>
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-1.5">
            <h3 className="font-bold text-xs uppercase tracking-wider text-cyan-300 border-b border-slate-800/60 pb-1">
              Professional Summary
            </h3>
            <p className="text-slate-300 leading-relaxed text-xs">
              Computer Science Engineering undergraduate with an 8.18 CGPA at Anna University. Hands-on internship experience in data analytics, exploratory modeling, and executive business reporting using Python, SQL, Power BI, and IBM Cognos Analytics. Track record of academic precision (100% SSLC distinction) and recognized symposium achievements.
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-cyan-300 border-b border-slate-800/60 pb-1">
              Education
            </h3>
            <div className="space-y-3">
              {education.map((edu) => (
                <div key={edu.id} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-xs">
                  <div>
                    <span className="font-bold text-white">{edu.degree}</span>
                    <p className="text-slate-400">{edu.institution}</p>
                  </div>
                  <div className="sm:text-right font-mono text-[11px]">
                    <span className="text-emerald-400 font-semibold">{edu.score}</span>
                    <p className="text-slate-500">{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Internship Experience */}
          <div className="space-y-4">
            <h3 className="font-bold text-xs uppercase tracking-wider text-cyan-300 border-b border-slate-800/60 pb-1">
              Industry Internships
            </h3>
            <div className="space-y-4">
              {internships.map((intern) => (
                <div key={intern.id} className="space-y-1.5 text-xs">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <span className="font-bold text-white">{intern.role} – <span className="text-cyan-300">{intern.company}</span></span>
                    <span className="font-mono text-slate-400 text-[11px]">{intern.period}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                    {intern.keyContributions.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-cyan-300 border-b border-slate-800/60 pb-1">
              Key Projects
            </h3>
            <div className="space-y-3">
              {projects.map((proj) => (
                <div key={proj.id} className="space-y-1 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white">{proj.title}</span>
                    <span className="text-[10px] font-mono text-slate-400">{proj.technologies.slice(0, 3).join(', ')}</span>
                  </div>
                  <p className="text-slate-300 text-[11px]">{proj.shortDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h3 className="font-bold text-xs uppercase tracking-wider text-cyan-300 border-b border-slate-800/60 pb-1">
              Technical Stack & Toolkit
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div>
                <span className="font-semibold text-slate-200">Programming & Data:</span>{' '}
                <span className="text-slate-400">Python (Pandas, NumPy, Scikit-learn), SQL, Relational DBs</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">BI & Analytics:</span>{' '}
                <span className="text-slate-400">Power BI (DAX, Modeling), IBM Cognos Analytics, MS Excel</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Web & Tools:</span>{' '}
                <span className="text-slate-400">HTML5, CSS3, JavaScript, Git & GitHub, Google Colab</span>
              </div>
              <div>
                <span className="font-semibold text-slate-200">Languages:</span>{' '}
                <span className="text-slate-400">Tamil (Native), English (Fluent), Malayalam</span>
              </div>
            </div>
          </div>

          {/* Certifications & Honors */}
          <div className="space-y-2">
            <h3 className="font-bold text-xs uppercase tracking-wider text-cyan-300 border-b border-slate-800/60 pb-1">
              Certifications & Honors
            </h3>
            <ul className="list-disc list-inside space-y-1 text-[11px] text-slate-300">
              <li><strong>NPTEL Elite Certification:</strong> Cryptography & Network Security, Cybersecurity, Blockchain</li>
              <li><strong>IBM Certified:</strong> Introduction to IBM Cognos Analytics</li>
              <li><strong>Infosys Springboard & TCS YEP:</strong> Agile, DevOps, Cloud Computing, Professional Readiness</li>
              <li><strong>1st Prize – Idea Presentation:</strong> Digital Legacy Manager (College Symposium)</li>
              <li><strong>1st Prize:</strong> Detectives & Chronicles Event (Symposium 2026)</li>
            </ul>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-2">
          <p className="text-xs text-slate-500">
            Parvathiy A R · B.E. Computer Science and Engineering
          </p>
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-700 bg-slate-900 text-xs font-semibold text-white hover:bg-slate-800 transition-colors"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
}
