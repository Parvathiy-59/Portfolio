import { useState } from 'react';
import { Menu, X, FileText, Send, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  particlesEnabled: boolean;
  onToggleParticles: () => void;
}

export default function Navbar({ onOpenResume, particlesEnabled, onToggleParticles }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand title, one line */}
        <a href="#hero" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
          <span className="font-heading font-bold text-lg sm:text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            PARVATHIY A R
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]"></span>
        </a>

        {/* Zone 2: 5 clean nav links, single-line */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-cyan-400 transition-colors whitespace-nowrap shrink-0 py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary action + Utilities */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {/* Particle effect toggle */}
          <button
            onClick={onToggleParticles}
            className={`p-2 rounded-lg border text-xs transition-colors flex items-center gap-1.5 ${
              particlesEnabled
                ? 'border-cyan-500/40 text-cyan-300 bg-cyan-950/20'
                : 'border-slate-800 text-slate-500 hover:text-slate-300'
            }`}
            title={particlesEnabled ? 'Pause 3D Particles' : 'Enable 3D Particles'}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="text-[11px] font-mono">{particlesEnabled ? '3D Active' : '3D Paused'}</span>
          </button>

          {/* View Resume Button */}
          <button
            onClick={onOpenResume}
            className="px-3.5 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-xs font-medium text-slate-200 hover:text-white transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </button>

          {/* Primary CTA */}
          <a
            href="#contact"
            className="gradient-btn px-4 py-2 rounded-lg text-xs font-semibold text-white shadow-md hover:shadow-cyan-500/20 transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Hire Me</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenResume}
            className="px-2.5 py-1.5 rounded border border-slate-700 text-xs text-slate-200 flex items-center gap-1"
          >
            <FileText className="w-3 h-3 text-cyan-400" />
            <span>CV</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-t border-slate-800/80 px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-cyan-400 font-medium py-1.5 text-sm"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 rounded-lg border border-slate-700 text-xs font-medium text-slate-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>View Full Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="gradient-btn w-full py-2.5 rounded-lg text-xs font-semibold text-white text-center flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Contact / Hire Me</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
