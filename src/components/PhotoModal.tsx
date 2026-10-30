import { useEffect } from 'react';
import { X, MapPin, Mail, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PhotoModal({ isOpen, onClose }: PhotoModalProps) {
  const { profile } = PORTFOLIO_DATA;

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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="glass-panel border border-cyan-500/30 max-w-lg w-full rounded-3xl overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors border border-white/20"
          aria-label="Close photo preview"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative aspect-[4/5] w-full bg-slate-900">
          <img
            src={profile.profilePic}
            alt="Portrait of Parvathiy A R"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none"></div>

          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/80 backdrop-blur-md border border-white/10 space-y-1">
            <h3 className="text-lg font-bold text-white tracking-tight">{profile.name}</h3>
            <p className="text-xs font-medium text-cyan-400">{profile.title}</p>
            <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-300">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-cyan-400" />
                {profile.location}
              </span>
              <span>·</span>
              <span className="text-emerald-400 font-mono">Anna Univ B.E. CSE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
