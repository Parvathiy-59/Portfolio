import { Briefcase, Calendar, CheckCircle, ChevronRight, Building } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ExperienceSectionProps {
  onSelectProjectByTitle: (titleKeyword: string) => void;
}

export default function ExperienceSection({ onSelectProjectByTitle }: ExperienceSectionProps) {
  const { internships } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Career Milestone & Hands-On Work
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Internship Experience
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Real-world data science and business intelligence engagements applying analytical models to tangible industry datasets.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="max-w-4xl mx-auto space-y-8">
        {internships.map((internship, index) => {
          const isCyan = internship.badgeColor === 'cyan';
          return (
            <div
              key={internship.id}
              className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl space-y-6 relative border-t-2"
              style={{
                borderTopColor: isCyan ? '#06b6d4' : '#a855f7',
              }}
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Building className={`w-4 h-4 ${isCyan ? 'text-cyan-400' : 'text-purple-400'}`} />
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      {internship.role}
                    </h3>
                  </div>
                  <p className={`text-sm font-semibold ${isCyan ? 'text-cyan-300' : 'text-purple-300'}`}>
                    {internship.company}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium font-mono glass-panel border border-slate-700 text-slate-300">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{internship.period}</span>
                  </span>
                </div>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-300 leading-relaxed">
                {internship.summary}
              </p>

              {/* Key Contributions */}
              <div className="space-y-3 pt-2 border-t border-slate-800/80">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Key Accomplishments & Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {internship.keyContributions.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-normal">
                      <CheckCircle className={`w-4 h-4 mt-0.5 shrink-0 ${isCyan ? 'text-cyan-400' : 'text-purple-400'}`} />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tools & Associated Project Link */}
              <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs text-slate-400 font-medium mr-1">Tools Utilized:</span>
                  {internship.toolsUsed.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-slate-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() =>
                    onSelectProjectByTitle(
                      isCyan ? 'Supply Chain Logistics' : 'KnowledgeHub Library'
                    )
                  }
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                >
                  <span>View Project Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
