import { Compass, Lightbulb, Database, Award, Languages, MapPin, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function AboutSection() {
  const { profile } = PORTFOLIO_DATA;

  const coreStrengths = [
    {
      title: 'Data Storytelling & Visualization',
      description: 'Designing intuitive, executive-ready dashboards in Power BI and IBM Cognos Analytics that surface anomalies and operational risks immediately.',
      icon: Database,
    },
    {
      title: 'Exploratory & Predictive Modeling',
      description: 'Applying Python (Pandas, NumPy, Scikit-Learn) to cleanse noisy datasets, engineer features, and train delay prediction models.',
      icon: Lightbulb,
    },
    {
      title: 'Relational Schemas & SQL Querying',
      description: 'Writing structured queries, multi-table joins, subqueries, and grouping logic to pull precise analytical subsets with performance in mind.',
      icon: Compass,
    },
    {
      title: 'Continuous Rigor & Execution',
      description: 'Demonstrated academic excellence (100% SSLC score, 8.18 B.E. CGPA) and elite-level NPTEL certifications in cryptography and network security.',
      icon: Award,
    },
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Background & Perspective
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          About Parvathiy A R
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Bridging computer science fundamentals with analytical reasoning to transform complex data into clear decisions.
        </p>
      </div>

      {/* Main Grid: Narrative Column + Key Pillars */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Personal Story & Language Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-7 rounded-2xl space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <span>My Analytical Journey</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              I am currently in my Bachelor of Engineering in Computer Science and Engineering (2023–2027) at University College of Engineering, Nagercoil (Anna University).
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              During my industry internships at Femtosoft Technologies and the IBM Cognos Virtual Program, I discovered my passion for working with real-world logistical datasets—handling missing values, structuring relational dimensions, and synthesizing disparate numbers into clean KPI dashboards.
            </p>
            <p className="text-sm text-slate-300 leading-relaxed">
              I thrive on uncovering why a delivery got delayed, which routes pose the highest variance, or how a branch library can optimize its book rotation through automated business intelligence.
            </p>

            {/* Quick Location & Origin */}
            <div className="pt-3 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Based in Nagercoil, Tamil Nadu, India · Open to Relocation & Remote</span>
            </div>
          </div>

          {/* Languages Section */}
          <div className="glass-panel p-6 rounded-2xl space-y-4">
            <div className="flex items-center gap-2">
              <Languages className="w-4 h-4 text-emerald-400" />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">Languages Known</h4>
            </div>
            <div className="space-y-3">
              {profile.languages.map((lang, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs py-1.5 border-b border-slate-800/60 last:border-0">
                  <span className="font-semibold text-slate-200">{lang.name}</span>
                  <span className="text-slate-400">{lang.fluency}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: 4 Strengths Grid (7 cols) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {coreStrengths.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-cyan-300 pt-2">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Experience</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
