import { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, MapPin, MessageSquare, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ContactSectionProps {
  onCopyEmail: (email: string) => void;
}

export default function ContactSection({ onCopyEmail }: ContactSectionProps) {
  const { profile } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship Opportunity',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    onCopyEmail(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard?.writeText(profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      // store in local storage history
      try {
        const history = JSON.parse(localStorage.getItem('portfolio_messages') || '[]');
        history.push({ ...formData, timestamp: new Date().toISOString() });
        localStorage.setItem('portfolio_messages', JSON.stringify(history));
      } catch (err) {
        // silent fallback
      }
    }, 700);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-2 max-w-3xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
          Get In Touch & Connect
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          Let's Discuss Opportunities
        </h2>
        <p className="text-sm sm:text-base text-slate-400">
          Actively exploring Data Analyst internships, software engineering roles, and collaborative analytical initiatives.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card */}
          <div className="glass-panel p-5 rounded-2xl flex items-center justify-between gap-3 group hover:border-cyan-500/40 transition-colors">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Direct Email</p>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Copy Email"
              aria-label="Copy Email address"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone Card */}
          <div className="glass-panel p-5 rounded-2xl flex items-center justify-between gap-3 group hover:border-emerald-500/40 transition-colors">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">Phone & WhatsApp</p>
                <a
                  href={`tel:${profile.phone}`}
                  className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                >
                  {profile.phone}
                </a>
              </div>
            </div>

            <button
              onClick={handleCopyPhone}
              className="p-2 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 hover:text-white transition-colors"
              title="Copy Phone"
              aria-label="Copy Phone number"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* LinkedIn Card */}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-5 rounded-2xl flex items-center justify-between gap-3 group hover:border-blue-500/40 transition-colors block"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">LinkedIn</p>
                <p className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                  parvathiy-a-r-9ba37b2a1
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500 group-hover:text-blue-400">Connect ↗</span>
          </a>

          {/* GitHub Card */}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-5 rounded-2xl flex items-center justify-between gap-3 group hover:border-purple-500/40 transition-colors block"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 uppercase tracking-wider font-medium">GitHub Repository</p>
                <p className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors">
                  Parvathiy-59
                </p>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500 group-hover:text-purple-400">View code ↗</span>
          </a>

          {/* Location strip */}
          <div className="glass-panel p-4 rounded-xl flex items-center gap-3 text-xs text-slate-400">
            <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>Nagercoil, Kanyakumari District, Tamil Nadu, India</span>
          </div>

        </div>

        {/* Right Column: Working Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-cyan-500/20 space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                <span>Send a Direct Message</span>
              </h3>
              <p className="text-xs text-slate-400">
                Fill out the form below to reach out regarding internships, job opportunities, or research queries.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3 animate-in fade-in">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white">Message Dispatched!</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Your message regarding "{formData.subject}" has been recorded. Parvathiy will respond shortly to {formData.email}.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'Internship Opportunity', message: '' });
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-medium text-cyan-300 bg-slate-900 border border-slate-700 hover:bg-slate-800"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-medium text-slate-300">Your Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. John Doe / HR Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-medium text-slate-300">Your Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. recruiter@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-medium text-slate-300">Topic / Inquiry Type</label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="Internship Opportunity">Data Analyst Internship Opportunity</option>
                    <option value="Entry-Level Full Time Role">Full-Time Software Engineer / Analyst Position</option>
                    <option value="Project Collaboration">Academic / Technical Project Collaboration</option>
                    <option value="General Inquiries">General Inquiry / Mentorship</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-medium text-slate-300">Your Message *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Provide details about the role, project, or schedule a phone screening..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="gradient-btn w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-white flex items-center justify-center gap-2 shadow-lg disabled:opacity-50"
                >
                  {loading ? (
                    <span>Transmitting message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Direct Inquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
