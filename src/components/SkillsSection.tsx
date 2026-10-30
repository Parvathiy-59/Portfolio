import { useState } from 'react';
import { Code2, BarChart2, Globe, Database, Cpu, CheckCircle2, Sliders, Activity } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Mini Interactive Transit Delay Simulator (proves the Femtosoft project logic live)
  const [distance, setDistance] = useState<number>(380);
  const [weather, setWeather] = useState<'clear' | 'rain' | 'storm'>('rain');
  const [carrierTier, setCarrierTier] = useState<'express' | 'standard'>('standard');
  const [dispatchPeak, setDispatchPeak] = useState<boolean>(true);

  // Calculate dynamic delay probability
  const calculateDelayProbability = () => {
    let score = 15;
    // Distance factor
    score += Math.min(distance / 25, 30);
    // Weather
    if (weather === 'rain') score += 20;
    if (weather === 'storm') score += 38;
    // Carrier
    if (carrierTier === 'express') score -= 12;
    // Dispatch peak
    if (dispatchPeak) score += 15;

    return Math.min(Math.max(Math.round(score), 8), 98);
  };

  const delayRisk = calculateDelayProbability();

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'programming-sql', label: 'Programming & SQL' },
    { id: 'bi-analytics', label: 'Data Analysis & BI' },
    { id: 'web-tech', label: 'Web & Tools' },
  ];

  const filteredCategories =
    selectedCategory === 'all'
      ? PORTFOLIO_DATA.skillCategories
      : PORTFOLIO_DATA.skillCategories.filter((cat) => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Analytical & Technical Stack
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Skills & Core Competencies
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          From relational data wrangling in SQL and Python to dynamic dashboard reporting in Power BI and IBM Cognos.
        </p>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'glass-panel text-slate-300 hover:text-white hover:border-slate-600'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat) => {
          let IconComponent = Code2;
          if (cat.id === 'bi-analytics') IconComponent = BarChart2;
          if (cat.id === 'web-tech') IconComponent = Globe;

          return (
            <div
              key={cat.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-400 line-clamp-1">{cat.description}</p>
                  </div>
                </div>

                {/* Individual Skill Items with Progress Bars */}
                <div className="space-y-4 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="font-mono text-cyan-400 tabular-nums">{skill.level}%</span>
                      </div>
                      
                      {/* Progress Track */}
                      <div className="h-1.5 w-full bg-slate-800/80 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-700"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>

                      <p className="text-[11px] text-slate-400">{skill.note}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Applied in real internship workflows</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Feature: Mini Logistics Delay Predictor Sandbox */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">
              <Sliders className="w-4 h-4" />
              <span>Interactive Analytics Playground</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              Transit Delay Probability Simulator
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Interactive demonstration of the analytical predictive logic developed during my Femtosoft Technologies internship.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-auto p-3 rounded-xl bg-slate-950/60 border border-slate-800">
            <Activity className="w-5 h-5 text-cyan-400 animate-pulse" />
            <div>
              <div className="text-[10px] text-slate-400 uppercase">Estimated Delay Risk</div>
              <div className={`text-xl font-mono font-bold tabular-nums ${
                delayRisk > 60 ? 'text-rose-400' : delayRisk > 35 ? 'text-amber-400' : 'text-emerald-400'
              }`}>
                {delayRisk}% Probability
              </div>
            </div>
          </div>
        </div>

        {/* Simulator Controls Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
          {/* Distance Slider */}
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <label htmlFor="distance-slider" className="text-slate-300 font-medium">Transit Distance</label>
              <span className="font-mono text-cyan-400 tabular-nums">{distance} km</span>
            </div>
            <input
              id="distance-slider"
              type="range"
              min="50"
              max="1200"
              step="10"
              value={distance}
              onChange={(e) => setDistance(Number(e.target.value))}
              className="w-full accent-cyan-400 bg-slate-800 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-500">
              <span>Local (50km)</span>
              <span>Interstate (1200km)</span>
            </div>
          </div>

          {/* Weather Condition */}
          <div className="space-y-2">
            <label className="text-xs text-slate-300 font-medium block">Weather Conditions</label>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-950/60 rounded-xl border border-slate-800">
              {(['clear', 'rain', 'storm'] as const).map((w) => (
                <button
                  key={w}
                  onClick={() => setWeather(w)}
                  className={`py-1.5 text-xs capitalize rounded-lg transition-all ${
                    weather === w
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {w}
                </button>
              ))}
            </div>
          </div>

          {/* Carrier Tier */}
          <div className="space-y-2">
            <label className="text-xs text-slate-300 font-medium block">Carrier Service Level</label>
            <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-950/60 rounded-xl border border-slate-800">
              <button
                onClick={() => setCarrierTier('standard')}
                className={`py-1.5 text-xs rounded-lg transition-all ${
                  carrierTier === 'standard'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Standard Tier
              </button>
              <button
                onClick={() => setCarrierTier('express')}
                className={`py-1.5 text-xs rounded-lg transition-all ${
                  carrierTier === 'express'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Express SLA
              </button>
            </div>
          </div>

          {/* Dispatch Timing */}
          <div className="space-y-2">
            <label className="text-xs text-slate-300 font-medium block">Peak Window Dispatch</label>
            <button
              onClick={() => setDispatchPeak(!dispatchPeak)}
              className={`w-full py-2 px-3 text-xs rounded-xl border transition-all flex items-center justify-between ${
                dispatchPeak
                  ? 'border-amber-500/40 bg-amber-950/20 text-amber-300'
                  : 'border-slate-800 bg-slate-950/40 text-slate-400'
              }`}
            >
              <span>{dispatchPeak ? 'Peak Traffic Hours' : 'Off-Peak Offload'}</span>
              <span className={`w-2 h-2 rounded-full ${dispatchPeak ? 'bg-amber-400' : 'bg-emerald-400'}`}></span>
            </button>
          </div>
        </div>

        {/* Prediction Output & Recommendation */}
        <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="space-y-0.5">
            <div className="font-semibold text-slate-200">
              {delayRisk > 60
                ? 'High Risk Alert: Immediate carrier rerouting or buffer alert advised.'
                : delayRisk > 35
                ? 'Moderate Variance: SLA compliance achievable with automated dispatch notification.'
                : 'Optimal Conditions: High confidence in on-time arrival within expected SLA.'}
            </div>
            <p className="text-slate-400 text-[11px]">
              Trained on multi-carrier historical performance using feature sets of route distance, weather, and peak windows.
            </p>
          </div>
          <span className="px-3 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 font-mono shrink-0">
            Feature Weight: Weather (0.38) · Dist (0.30)
          </span>
        </div>
      </div>
    </section>
  );
}
