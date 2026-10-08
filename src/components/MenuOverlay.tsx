import React, { useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';
import { triggerHapticTick } from '../utils/haptics';

interface MenuOverlayProps {
  isOpen: boolean;
  projects: Project[];
  activeProjectId: string;
  onClose: () => void;
  onSelectProject: (projectId: string) => void;
  onSelectAbout: (sectionId?: string) => void;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({
  isOpen,
  projects,
  activeProjectId,
  onClose,
  onSelectProject,
  onSelectAbout,
}) => {
  const { theme, toggleTheme } = useTheme();

  // Automatically sort projects chronologically (descending by year: newest to oldest)
  const sortedProjects = [...projects].sort((a, b) => {
    const yearA = parseInt(a.year, 10) || 0;
    const yearB = parseInt(b.year, 10) || 0;
    return yearB - yearA;
  });

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="portfolio-menu-overlay"
      className="fixed inset-0 z-40 bg-[#f9f7f2]/95 dark:bg-[#121110]/96 backdrop-blur-xl flex flex-col justify-between pt-24 pb-10 px-6 sm:px-12 md:px-20 overflow-y-auto animate-in fade-in duration-300 transition-colors"
    >
      <div className="max-w-5xl w-full mx-auto my-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 lg:gap-16 pt-4 pb-6">
        {/* Left Column: Case Studies Section */}
        <div className="md:col-span-7 lg:col-span-8 flex flex-col">
          {/* Header - Equal weight to ABOUT */}
          <div className="flex items-center justify-between border-b border-[#ded9ce] dark:border-[#2a2824] pb-3 mb-5">
            <span className="font-mono-tech text-xs tracking-widest text-[#161513] dark:text-[#f4f1ea] font-semibold uppercase">
              Case studies
            </span>
          </div>

          {/* Project List with Full Title Visibility & Dedicated Subtitle Row */}
          <div className="space-y-1 sm:space-y-2">
            {sortedProjects.map((proj, idx) => {
              const isSelected = proj.id === activeProjectId;
              const projectNumber = String(idx + 1).padStart(2, '0');
              return (
                <button
                  key={proj.id}
                  id={`menu-project-${proj.id}`}
                  onClick={() => {
                    triggerHapticTick('medium');
                    onSelectProject(proj.id);
                    onClose();
                  }}
                  onMouseEnter={() => triggerHapticTick('light')}
                  className={`group w-full flex items-start justify-between text-left py-2.5 sm:py-3 px-2.5 -mx-2.5 rounded-xs transition-all cursor-pointer border-b border-[#eae5dc]/60 dark:border-[#22201c] hover:border-[#ded9ce] dark:hover:border-[#38352f] ${
                    isSelected
                      ? 'bg-[#f0ece3]/70 dark:bg-[#1e1d1a]'
                      : 'hover:bg-[#f3efe7]/50 dark:hover:bg-[#1c1b18]'
                  }`}
                >
                  {/* Left: Code, Title, and Subtitle Column */}
                  <div className="flex items-start gap-3 sm:gap-4 min-w-0 pr-3 flex-1">
                    <span
                      className={`font-mono-tech text-[11px] sm:text-xs shrink-0 pt-0.5 sm:pt-1 transition-colors ${
                        isSelected
                          ? 'text-[#c83b2b] dark:text-[#ff5442] font-semibold'
                          : 'text-[#8c877d] dark:text-[#88837a] group-hover:text-[#c83b2b] dark:group-hover:text-[#ff5442]'
                      }`}
                    >
                      {projectNumber}
                    </span>
                    <div className="flex flex-col min-w-0">
                      <span
                        className={`font-serif-display text-lg sm:text-xl md:text-[22px] tracking-tight transition-all duration-200 leading-snug ${
                          isSelected
                            ? 'text-[#c83b2b] dark:text-[#ff5442] font-medium'
                            : 'text-[#161513] dark:text-[#f4f1ea] group-hover:translate-x-1'
                        }`}
                      >
                        {proj.title}
                      </span>
                      <span className="font-mono-tech text-[10px] sm:text-[11px] text-[#78746c] dark:text-[#9e998e] uppercase tracking-wider pt-0.5">
                        {proj.discipline}
                      </span>
                    </div>
                  </div>

                  {/* Right: Year and Arrow */}
                  <div className="flex items-center gap-2.5 sm:gap-4 shrink-0 pt-0.5 sm:pt-1">
                    <span className="font-mono-tech text-[10.5px] sm:text-[11px] text-[#a19c92] dark:text-[#78736a]">
                      {proj.year}
                    </span>
                    <span
                      className={`font-mono-tech text-xs transition-all duration-200 ${
                        isSelected
                          ? 'opacity-100 text-[#c83b2b] dark:text-[#ff5442]'
                          : 'opacity-0 group-hover:opacity-100 text-[#c83b2b] dark:text-[#ff5442] group-hover:translate-x-1'
                      }`}
                    >
                      →
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column: About Section & Appearance Controls */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col justify-between border-t md:border-t-0 md:border-l border-[#ded9ce] dark:border-[#2a2824] pt-8 md:pt-0 md:pl-10 lg:pl-12">
          <div className="space-y-6 sm:space-y-8">
            {/* Header for ABOUT Section */}
            <div>
              <div className="flex items-center justify-between border-b border-[#ded9ce] dark:border-[#2a2824] pb-3 mb-4">
                <span className="font-mono-tech text-xs tracking-widest text-[#161513] dark:text-[#f4f1ea] font-semibold uppercase">
                  ABOUT
                </span>
              </div>

              {/* Subtitles linking to specific sections on the About page */}
              <div className="space-y-1 sm:space-y-1.5">
                {/* 1. About Subtitle */}
                <button
                  id="menu-about-link"
                  onClick={() => {
                    triggerHapticTick('medium');
                    onSelectAbout('about-intro-section');
                    onClose();
                  }}
                  onMouseEnter={() => triggerHapticTick('light')}
                  className="group w-full flex items-start justify-between text-left py-2.5 px-2.5 -mx-2.5 rounded-xs transition-all cursor-pointer border-b border-[#eae5dc]/60 dark:border-[#22201c] hover:border-[#ded9ce] dark:hover:border-[#38352f] hover:bg-[#f3efe7]/50 dark:hover:bg-[#1c1b18]"
                >
                  <div className="flex items-start min-w-0 pr-3 flex-1">
                    <div className="flex flex-col min-w-0">
                      <span className="font-serif-display text-lg sm:text-xl tracking-tight text-[#161513] dark:text-[#f4f1ea] group-hover:text-[#c83b2b] dark:group-hover:text-[#ff5442] group-hover:translate-x-1 transition-all duration-200 leading-snug">
                        Profile
                      </span>
                      <span className="font-mono-tech text-[10px] text-[#78746c] dark:text-[#9e998e] uppercase tracking-wider pt-0.5">
                        Bio
                      </span>
                    </div>
                  </div>
                  <span className="font-mono-tech text-xs opacity-0 group-hover:opacity-100 text-[#c83b2b] dark:text-[#ff5442] group-hover:translate-x-1 transition-all duration-200 shrink-0 pt-0.5">
                    →
                  </span>
                </button>

                {/* 2. Resume Subtitle */}
                <button
                  id="menu-resume-link"
                  onClick={() => {
                    triggerHapticTick('medium');
                    onSelectAbout('about-resume-section');
                    onClose();
                  }}
                  onMouseEnter={() => triggerHapticTick('light')}
                  className="group w-full flex items-start justify-between text-left py-2.5 px-2.5 -mx-2.5 rounded-xs transition-all cursor-pointer border-b border-[#eae5dc]/60 dark:border-[#22201c] hover:border-[#ded9ce] dark:hover:border-[#38352f] hover:bg-[#f3efe7]/50 dark:hover:bg-[#1c1b18]"
                >
                  <div className="flex items-start min-w-0 pr-3 flex-1">
                    <div className="flex flex-col min-w-0">
                      <span className="font-serif-display text-lg sm:text-xl tracking-tight text-[#161513] dark:text-[#f4f1ea] group-hover:text-[#c83b2b] dark:group-hover:text-[#ff5442] group-hover:translate-x-1 transition-all duration-200 leading-snug">
                        Resume
                      </span>
                      <span className="font-mono-tech text-[10px] text-[#78746c] dark:text-[#9e998e] uppercase tracking-wider pt-0.5">
                        Career
                      </span>
                    </div>
                  </div>
                  <span className="font-mono-tech text-xs opacity-0 group-hover:opacity-100 text-[#c83b2b] dark:text-[#ff5442] group-hover:translate-x-1 transition-all duration-200 shrink-0 pt-0.5">
                    →
                  </span>
                </button>

                {/* 3. Skills Subtitle */}
                <button
                  id="menu-skills-link"
                  onClick={() => {
                    triggerHapticTick('medium');
                    onSelectAbout('about-skills-section');
                    onClose();
                  }}
                  onMouseEnter={() => triggerHapticTick('light')}
                  className="group w-full flex items-start justify-between text-left py-2.5 px-2.5 -mx-2.5 rounded-xs transition-all cursor-pointer border-b border-[#eae5dc]/60 dark:border-[#22201c] hover:border-[#ded9ce] dark:hover:border-[#38352f] hover:bg-[#f3efe7]/50 dark:hover:bg-[#1c1b18]"
                >
                  <div className="flex items-start min-w-0 pr-3 flex-1">
                    <div className="flex flex-col min-w-0">
                      <span className="font-serif-display text-lg sm:text-xl tracking-tight text-[#161513] dark:text-[#f4f1ea] group-hover:text-[#c83b2b] dark:group-hover:text-[#ff5442] group-hover:translate-x-1 transition-all duration-200 leading-snug">
                        Skills
                      </span>
                      <span className="font-mono-tech text-[10px] text-[#78746c] dark:text-[#9e998e] uppercase tracking-wider pt-0.5">
                        Competences
                      </span>
                    </div>
                  </div>
                  <span className="font-mono-tech text-xs opacity-0 group-hover:opacity-100 text-[#c83b2b] dark:text-[#ff5442] group-hover:translate-x-1 transition-all duration-200 shrink-0 pt-0.5">
                    →
                  </span>
                </button>

                {/* 4. Contact Subtitle */}
                <button
                  id="menu-contact-link"
                  onClick={() => {
                    triggerHapticTick('medium');
                    onSelectAbout('about-contact-section');
                    onClose();
                  }}
                  onMouseEnter={() => triggerHapticTick('light')}
                  className="group w-full flex items-start justify-between text-left py-2.5 px-2.5 -mx-2.5 rounded-xs transition-all cursor-pointer border-b border-[#eae5dc]/60 dark:border-[#22201c] hover:border-[#ded9ce] dark:hover:border-[#38352f] hover:bg-[#f3efe7]/50 dark:hover:bg-[#1c1b18]"
                >
                  <div className="flex items-start min-w-0 pr-3 flex-1">
                    <div className="flex flex-col min-w-0">
                      <span className="font-serif-display text-lg sm:text-xl tracking-tight text-[#161513] dark:text-[#f4f1ea] group-hover:text-[#c83b2b] dark:group-hover:text-[#ff5442] group-hover:translate-x-1 transition-all duration-200 leading-snug">
                        Contact
                      </span>
                      <span className="font-mono-tech text-[10px] text-[#78746c] dark:text-[#9e998e] uppercase tracking-wider pt-0.5">
                        Get in touch
                      </span>
                    </div>
                  </div>
                  <span className="font-mono-tech text-xs opacity-0 group-hover:opacity-100 text-[#c83b2b] dark:text-[#ff5442] group-hover:translate-x-1 transition-all duration-200 shrink-0 pt-0.5">
                    →
                  </span>
                </button>
              </div>
            </div>

            {/* Appearance & Dark Mode Toggle Section */}
            <div className="pt-6 border-t border-[#ded9ce] dark:border-[#2a2824] flex items-start">
              {/* Tactical Segmented Theme Toggle */}
              <div
                id="menu-theme-toggle"
                className="inline-flex items-center p-1 rounded-full border border-[#d8d3c7] dark:border-[#38352f] bg-[#eae5db] dark:bg-[#1d1c19] transition-all"
              >
                  <button
                    type="button"
                    id="theme-light-btn"
                    onClick={() => {
                      if (theme !== 'light') {
                        triggerHapticTick('medium');
                        toggleTheme();
                      }
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono-tech text-[10px] sm:text-[10.5px] uppercase tracking-wider transition-all cursor-pointer ${
                      theme === 'light'
                        ? 'bg-[#161513] text-[#f9f7f2] font-semibold shadow-xs'
                        : 'text-[#78746c] dark:text-[#8e897f] hover:text-[#161513] dark:hover:text-[#f4f1ea]'
                    }`}
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span>Light</span>
                  </button>

                  <button
                    type="button"
                    id="theme-dark-btn"
                    onClick={() => {
                      if (theme !== 'dark') {
                        triggerHapticTick('medium');
                        toggleTheme();
                      }
                    }}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full font-mono-tech text-[10px] sm:text-[10.5px] uppercase tracking-wider transition-all cursor-pointer ${
                      theme === 'dark'
                        ? 'bg-[#f4f1ea] text-[#121110] font-semibold shadow-xs'
                        : 'text-[#78746c] dark:text-[#8e897f] hover:text-[#161513] dark:hover:text-[#f4f1ea]'
                    }`}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    <span>Dark</span>
                  </button>
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="max-w-5xl w-full mx-auto pt-5 border-t border-[#ded9ce] dark:border-[#2a2824] flex flex-col sm:flex-row items-center justify-between text-[10.5px] font-mono-tech text-[#8c877d] dark:text-[#78736a] gap-2">
        <span>© {new Date().getFullYear()} LYNE OLMEDO-REVAZ</span>
        <span className="tracking-wider uppercase">Portfolio</span>
      </div>
    </div>
  );
};
