/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import PhotoModal from './components/PhotoModal';
import { PORTFOLIO_DATA, Project } from './data/portfolioData';
import { Check } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [photoOpen, setPhotoOpen] = useState(false);
  const [particlesEnabled, setParticlesEnabled] = useState(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleCopyEmail = (email: string) => {
    navigator.clipboard?.writeText(email);
    showToast(`Email (${email}) copied to clipboard!`);
  };

  const handleSelectProjectByTitle = (titleKeyword: string) => {
    const found = PORTFOLIO_DATA.projects.find((p) =>
      p.title.toLowerCase().includes(titleKeyword.toLowerCase())
    );
    if (found) {
      setSelectedProject(found);
    } else {
      const projEl = document.getElementById('projects');
      projEl?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080a0f] text-slate-100 relative selection:bg-cyan-500 selection:text-black">
      {/* Three.js Interactive Particle Background */}
      {particlesEnabled && <ParticleBackground interactive={true} />}

      {/* Navigation Bar */}
      <Navbar
        onOpenResume={() => setResumeOpen(true)}
        particlesEnabled={particlesEnabled}
        onToggleParticles={() => setParticlesEnabled(!particlesEnabled)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        <HeroSection
          onOpenResume={() => setResumeOpen(true)}
          onCopyEmail={handleCopyEmail}
          onPreviewPhoto={() => setPhotoOpen(true)}
        />

        <AboutSection />

        <SkillsSection />

        <ExperienceSection onSelectProjectByTitle={handleSelectProjectByTitle} />

        <ProjectsSection onSelectProject={(p) => setSelectedProject(p)} />

        <EducationSection />

        <ContactSection onCopyEmail={handleCopyEmail} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Complete Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />

      {/* Full Resolution Profile Photo Modal */}
      <PhotoModal
        isOpen={photoOpen}
        onClose={() => setPhotoOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 glass-panel border border-cyan-400/80 px-5 py-3 rounded-2xl text-xs sm:text-sm text-cyan-200 shadow-2xl flex items-center gap-2.5 animate-in slide-in-from-bottom-4 duration-200"
        >
          <div className="w-5 h-5 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center shrink-0">
            <Check className="w-3.5 h-3.5" />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
