import { GraduationCap, Award, Trophy, CheckCircle, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function EducationSection() {
  const { education, certifications, awards } = PORTFOLIO_DATA;

  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Academic Foundations & Honors
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Education, Certifications & Awards
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          A track record of consistent academic distinction, verified certifications, and symposium accolades.
        </p>
      </div>

      {/* 3-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        
        {/* Column 1: Formal Education */}
        <div className="glass-panel p-6 sm:p-7 rounded-2xl space-y-6 flex flex-col justify-between border-t-2 border-t-cyan-400">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Formal Education</h3>
                <p className="text-xs text-slate-400">Academic Degrees & Schools</p>
              </div>
            </div>

            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.id} className="space-y-1.5 border-b border-slate-800/60 pb-4 last:border-0 last:pb-0">
                  <div className="flex justify-between items-start gap-2">
                    <h4 className="text-sm font-bold text-white">{item.degree}</h4>
                    <span className="text-[11px] font-mono text-cyan-400 shrink-0">{item.period}</span>
                  </div>
                  <p className="text-xs text-slate-300">{item.institution}</p>
                  <p className="text-xs font-semibold text-emerald-400">{item.score}</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Anna University Affiliation</span>
          </div>
        </div>

        {/* Column 2: Certifications */}
        <div className="glass-panel p-6 sm:p-7 rounded-2xl space-y-6 flex flex-col justify-between border-t-2 border-t-purple-400">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Certifications</h3>
                <p className="text-xs text-slate-400">Industry & Academic Badges</p>
              </div>
            </div>

            <div className="space-y-3.5">
              {certifications.map((cert, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 space-y-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-xs font-bold text-white">{cert.title}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950/60 text-purple-300 border border-purple-800/40 shrink-0">
                      {cert.tag}
                    </span>
                  </div>
                  <p className="text-[11px] text-cyan-400 font-medium">{cert.issuer}</p>
                  <p className="text-[11px] text-slate-400">{cert.topics}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
            <CheckCircle className="w-3.5 h-3.5 text-purple-400" />
            <span>Includes NPTEL Elite distinction</span>
          </div>
        </div>

        {/* Column 3: Awards & Workshops */}
        <div className="glass-panel p-6 sm:p-7 rounded-2xl space-y-6 flex flex-col justify-between border-t-2 border-t-emerald-400">
          <div className="space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Awards & Workshops</h3>
                <p className="text-xs text-slate-400">Symposium Honors & Mentorship</p>
              </div>
            </div>

            <div className="space-y-4">
              {awards.map((award, idx) => (
                <div key={idx} className="space-y-1.5 border-b border-slate-800/60 pb-3 last:border-0 last:pb-0">
                  <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold">
                    <Award className="w-3.5 h-3.5 shrink-0" />
                    <span>{award.title}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-200">{award.event}</p>
                  <p className="text-[11px] text-slate-400 leading-relaxed">{award.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Active IIC & Hackathon Contributor</span>
          </div>
        </div>

      </div>
    </section>
  );
}
