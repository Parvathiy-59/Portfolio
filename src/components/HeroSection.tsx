import { useState } from 'react';
import { ArrowRight, Mail, Copy, Check, ExternalLink, MapPin, Phone, Github, Linkedin, FileText, Maximize2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroSectionProps {
  onOpenResume: () => void;
  onCopyEmail: (email: string) => void;
  onPreviewPhoto: () => void;
}

export default function HeroSection({ onOpenResume, onCopyEmail, onPreviewPhoto }: HeroSectionProps) {
  const [copied, setCopied] = useState(false);
  const { profile, stats } = PORTFOLIO_DATA;

  const handleCopy = () => {
    onCopyEmail(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="hero" className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* 2-Column Split: Typographic Column + Visual Profile Column */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column (7 cols) */}
        <div className="lg:col-span-7 space-y-6 text-left">
          
          {/* Availability Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-cyan-500/30 text-xs font-medium text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>{profile.availability}</span>
          </div>

          {/* Main Title & Identity */}
          <div className="space-y-2">
            <p className="text-sm font-semibold tracking-wider uppercase text-cyan-400">
              Welcome to my portfolio
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="gradient-text">{profile.name}</span>
            </h1>
            <p className="text-lg sm:text-xl font-medium text-slate-300">
              Aspiring <span className="text-cyan-400 font-semibold">Data Analyst</span> & Software Engineer
            </p>
          </div>

          {/* Value Proposition */}
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            {profile.bio}
          </p>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#projects"
              className="gradient-btn px-6 py-3 rounded-xl font-semibold text-xs sm:text-sm text-white shadow-lg flex items-center gap-2 hover:translate-y-[-1px] transition-transform"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenResume}
              className="glass-panel hover:bg-slate-800/80 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm text-slate-200 border border-slate-700 hover:border-slate-500 flex items-center gap-2 transition-all"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>View Resume</span>
            </button>

            <a
              href="#contact"
              className="glass-panel hover:bg-slate-800/80 px-5 py-3 rounded-xl font-medium text-xs sm:text-sm text-slate-200 border border-slate-700 hover:border-slate-500 flex items-center gap-2 transition-all"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>Contact Me</span>
            </a>

            {/* Quick Copy Email Button */}
            <button
              onClick={handleCopy}
              className="glass-panel hover:border-cyan-500/50 p-3 rounded-xl text-slate-300 hover:text-white transition-colors"
              title="Copy Email address"
              aria-label="Copy Email address"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Quick Meta Row with Separators */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{profile.location}</span>
            </div>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <a href={`tel:${profile.phone}`} className="hover:text-cyan-300 transition-colors">
                {profile.phone}
              </a>
            </div>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
              <a href={`mailto:${profile.email}`} className="hover:text-cyan-300 transition-colors">
                {profile.email}
              </a>
            </div>
          </div>

          {/* Social Profiles Row */}
          <div className="flex items-center gap-3 pt-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-3.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:border-cyan-500/40 flex items-center gap-2 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-white" />
              <span>GitHub / Parvathiy-59</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel px-3.5 py-1.5 rounded-lg text-xs text-slate-300 hover:text-white hover:border-cyan-500/40 flex items-center gap-2 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>

        </div>

        {/* Right Column: High-Impact Profile Picture (5 cols) */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <div className="relative group max-w-sm sm:max-w-md w-full">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-indigo-500/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Main Picture Frame */}
            <div className="relative rounded-3xl overflow-hidden glass-panel border border-white/10 p-2 sm:p-3 shadow-2xl">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900">
                <img
                  src={profile.profilePic}
                  alt="Portrait photo of Parvathiy A R"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG avatar if path not found
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />

                {/* Subtle Gradient Scrim at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                {/* Zoom / Fullscreen Button */}
                <button
                  onClick={onPreviewPhoto}
                  className="absolute top-3 right-3 p-2 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-white/10 text-slate-200 hover:text-white transition-colors backdrop-blur-md shadow-lg"
                  title="Expand Profile Picture"
                  aria-label="Expand Profile Picture"
                >
                  <Maximize2 className="w-4 h-4 text-cyan-400" />
                </button>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 flex items-center justify-between">
                  <div>
                    <h3 className="text-xs font-bold text-white uppercase tracking-wider">{profile.name}</h3>
                    <p className="text-[11px] text-cyan-300">Data Analytics & Engineering</p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-300 border border-cyan-800/40">
                    B.E. CSE
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Accents */}
            <div className="absolute -bottom-4 -left-4 hidden sm:flex items-center gap-2 p-2.5 rounded-xl glass-panel border border-cyan-500/20 text-xs shadow-xl backdrop-blur-lg">
              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
              <span className="text-slate-300 font-medium">Anna University Scholar</span>
            </div>

            <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 p-2 rounded-xl glass-panel border border-purple-500/20 text-xs shadow-xl backdrop-blur-lg">
              <span className="text-purple-300 font-semibold font-mono">CGPA 8.18</span>
            </div>
          </div>
        </div>

      </div>

      {/* Full-Width Metric Proof Strip Below Split (§2.B) */}
      <div className="mt-16 pt-10 border-t border-slate-800/80">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel glass-panel-hover p-5 sm:p-6 rounded-2xl text-center space-y-1.5"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-mono tracking-tight text-cyan-400 tabular-nums">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {stat.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
