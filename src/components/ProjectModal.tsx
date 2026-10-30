import { useEffect, useState } from 'react';
import { X, CheckCircle, BarChart3, Database, Layers, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'simulation'>('overview');

  // Study sprint simulation state
  const [sprintTasks, setSprintTasks] = useState<{ id: number; text: string; done: boolean }[]>([
    { id: 1, text: 'Clean Python shipment missing values (Pandas)', done: true },
    { id: 2, text: 'Construct Power BI DAX formula for carrier SLA', done: true },
    { id: 3, text: 'Compute route distance correlation matrix', done: false },
    { id: 4, text: 'Deploy model weights to API endpoint', done: false },
  ]);

  // KnowledgeHub library simulation filter
  const [activeBranch, setActiveBranch] = useState<string>('Central');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="glass-panel border border-cyan-500/30 max-w-3xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pr-10">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
            <span>{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>{project.subtitle}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeTab === 'overview'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            Case Study Overview
          </button>
          <button
            onClick={() => setActiveTab('simulation')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
              activeTab === 'simulation'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800/40'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive KPI Demo</span>
          </button>
        </div>

        {/* Tab 1: Case Study Overview */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-in fade-in">
            {/* Impact Metrics Row */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
              {project.impactMetrics.map((metric, idx) => (
                <div key={idx} className="text-center space-y-1">
                  <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400 tabular-nums">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">
                  The Problem & Bottleneck
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  The Analytical Solution
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Key Technical Highlights */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Engineering Highlights & Pipeline Steps
              </h3>
              <ul className="space-y-2">
                {project.keyHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="space-y-2 pt-2 border-t border-slate-800">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Technologies & Tools Applied
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Interactive KPI Demo */}
        {activeTab === 'simulation' && (
          <div className="space-y-6 animate-in fade-in">
            {project.id === 'supply-chain' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <span className="text-xs font-mono text-cyan-400">Power BI Model Simulator</span>
                  <h4 className="text-sm font-bold text-white">Carrier Transit Variance Analysis</h4>
                  <p className="text-xs text-slate-400">
                    Below is a simulated snapshot of the dispatch variance table generated from the cleaned Python dataset.
                  </p>
                </div>

                <div className="overflow-x-auto rounded-xl border border-slate-800">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-900 text-slate-300 uppercase font-mono text-[11px]">
                      <tr>
                        <th className="p-3">Route Corridor</th>
                        <th className="p-3">Carrier</th>
                        <th className="p-3">Avg Transit</th>
                        <th className="p-3">SLA Compliance</th>
                        <th className="p-3">Delay Risk</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                      <tr>
                        <td className="p-3 text-white font-sans font-medium">Chennai → Nagercoil</td>
                        <td className="p-3">SpeedWay Express</td>
                        <td className="p-3 tabular-nums">18.4 hrs</td>
                        <td className="p-3 text-emerald-400 tabular-nums">94.2%</td>
                        <td className="p-3 text-emerald-400 font-semibold">Low (8%)</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-white font-sans font-medium">Bangalore → Madurai</td>
                        <td className="p-3">Apex Freight</td>
                        <td className="p-3 tabular-nums">26.1 hrs</td>
                        <td className="p-3 text-amber-400 tabular-nums">81.5%</td>
                        <td className="p-3 text-amber-400 font-semibold">Med (28%)</td>
                      </tr>
                      <tr>
                        <td className="p-3 text-white font-sans font-medium">Coimbatore → Kochi</td>
                        <td className="p-3">Coastal Cargo</td>
                        <td className="p-3 tabular-nums">39.8 hrs</td>
                        <td className="p-3 text-rose-400 tabular-nums">68.3%</td>
                        <td className="p-3 text-rose-400 font-semibold">High (62%)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="p-3 rounded-lg bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>Interactive drill-downs built in Power BI with DAX conditional measures.</span>
                </div>
              </div>
            )}

            {project.id === 'knowledgehub' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 rounded-xl bg-slate-950/70 border border-slate-800">
                  <div>
                    <h4 className="text-sm font-bold text-white">Branch Circulation Drill-Through</h4>
                    <p className="text-xs text-slate-400">Select branch to view Cognos automated KPIs</p>
                  </div>
                  <div className="flex gap-1.5 bg-slate-900 p-1 rounded-lg border border-slate-800">
                    {['Central', 'North Wing', 'East Suburb'].map((b) => (
                      <button
                        key={b}
                        onClick={() => setActiveBranch(b)}
                        className={`px-3 py-1 text-xs rounded transition-all ${
                          activeBranch === b
                            ? 'bg-cyan-500 text-slate-950 font-bold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {b}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-xs text-slate-400">Total Borrowed</div>
                    <div className="text-lg font-mono font-bold text-cyan-400 tabular-nums">
                      {activeBranch === 'Central' ? '1,420' : activeBranch === 'North Wing' ? '890' : '650'}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-xs text-slate-400">Overdue &gt; 14 Days</div>
                    <div className="text-lg font-mono font-bold text-rose-400 tabular-nums">
                      {activeBranch === 'Central' ? '42 books' : activeBranch === 'North Wing' ? '18 books' : '9 books'}
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-center">
                    <div className="text-xs text-slate-400">Fine Recovered</div>
                    <div className="text-lg font-mono font-bold text-emerald-400 tabular-nums">
                      {activeBranch === 'Central' ? '₹8,450' : activeBranch === 'North Wing' ? '₹3,200' : '₹1,900'}
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-400">
                  Conditional formatting rules trigger automatic warning notices when overdue counts exceed 30 volumes.
                </div>
              </div>
            )}

            {project.id === 'studysprint' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <h4 className="text-sm font-bold text-white">Interactive Study Target Checklist</h4>
                  <p className="text-xs text-slate-400">
                    Click items to toggle task completion and view client-side reactivity:
                  </p>
                </div>

                <div className="space-y-2">
                  {sprintTasks.map((task) => (
                    <button
                      key={task.id}
                      onClick={() =>
                        setSprintTasks((prev) =>
                          prev.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t))
                        )
                      }
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between text-xs text-left hover:border-cyan-500/40 transition-colors"
                    >
                      <span className={task.done ? 'line-through text-slate-500' : 'text-slate-200'}>
                        {task.text}
                      </span>
                      <div
                        className={`w-4 h-4 rounded flex items-center justify-center border ${
                          task.done
                            ? 'bg-cyan-500 border-cyan-500 text-slate-950'
                            : 'border-slate-700'
                        }`}
                      >
                        {task.done && <CheckCircle className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="text-xs text-slate-400 font-mono">
                  Sprint Completion: {Math.round((sprintTasks.filter((t) => t.done).length / sprintTasks.length) * 100)}%
                </div>
              </div>
            )}

            {project.id === 'spa-renderer' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-1">
                  <h4 className="text-sm font-bold text-white">Modular REST Endpoint Simulator</h4>
                  <p className="text-xs text-slate-400">
                    Simulated client-side JSON ingestion pipeline response:
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-cyan-300 overflow-x-auto">
                  <pre>{`{
  "status": 200,
  "route": "/api/v1/projects",
  "clientRenderTime": "12ms",
  "payload": {
    "title": "Dynamic Single Page Application",
    "zeroReload": true,
    "caching": "localStorage + memoryStore"
  }
}`}</pre>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl border border-slate-700 text-xs font-medium text-slate-300 hover:text-white transition-colors"
          >
            Close Breakdown
          </button>

          <a
            href="#contact"
            onClick={onClose}
            className="gradient-btn px-5 py-2.5 rounded-xl text-xs font-semibold text-white flex items-center gap-2"
          >
            <span>Inquire About This Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
