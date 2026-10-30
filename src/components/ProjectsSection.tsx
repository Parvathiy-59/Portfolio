import { useState } from 'react';
import { Truck, BookOpen, Timer, Layers, ArrowUpRight, Filter, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'data-analytics' | 'bi-reporting' | 'web-development'>('all');
  const { projects } = PORTFOLIO_DATA;

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'data-analytics', label: 'Data Analytics & ML' },
    { id: 'bi-reporting', label: 'BI & Reporting' },
    { id: 'web-development', label: 'Web Applications' },
  ];

  const filteredProjects =
    selectedFilter === 'all'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'supply-chain':
        return <Truck className="w-6 h-6 text-cyan-400" />;
      case 'knowledgehub':
        return <BookOpen className="w-6 h-6 text-purple-400" />;
      case 'studysprint':
        return <Timer className="w-6 h-6 text-emerald-400" />;
      case 'spa-renderer':
      default:
        return <Layers className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Featured Portfolio Showcase
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Analytical & Engineering Projects
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Selected works showcasing end-to-end data pipeline construction, interactive dashboards, and responsive web applications.
        </p>

        {/* Filter Segmented Control */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id as any)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedFilter === filter.id
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-slate-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel glass-panel-hover p-6 sm:p-8 rounded-2xl flex flex-col justify-between space-y-6 group border border-white/5"
          >
            <div className="space-y-4">
              {/* Category & Icon row */}
              <div className="flex items-center justify-between">
                <div className="text-xs font-medium text-slate-400 flex items-center gap-2">
                  <span className="text-cyan-400 font-semibold">{project.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>Featured Case Study</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  {getProjectIcon(project.id)}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  {project.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.shortDescription}
              </p>

              {/* Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80">
                {project.impactMetrics.map((metric, mIdx) => (
                  <div key={mIdx} className="text-center">
                    <div className="text-sm sm:text-base font-bold font-mono text-cyan-400 tabular-nums">
                      {metric.value}
                    </div>
                    <div className="text-[10px] text-slate-400 font-medium truncate">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Technology tags */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <button
                onClick={() => onSelectProject(project)}
                className="gradient-btn px-4 py-2 rounded-xl text-xs font-semibold text-white flex items-center gap-2 shadow-sm hover:translate-y-[-1px] transition-transform"
              >
                <span>Project Breakdown & Architecture</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <span className="text-[11px] text-slate-500 font-mono">
                Case Study
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
