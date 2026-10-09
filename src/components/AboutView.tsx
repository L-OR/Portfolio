import React, { useEffect } from 'react';
import { AboutData } from '../types';
import { triggerHapticTick } from '../utils/haptics';
import { useLightbox } from '../context/LightboxContext';
import lynePortrait from '../assets/images/Lyne_Image_lnc3x7.jpeg';

interface AboutViewProps {
  data: AboutData;
  targetSection?: string | null;
  onBackToLanding: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  data,
  targetSection,
  onBackToLanding,
}) => {
  const { openLightbox } = useLightbox();

  // Left arrow or Esc to return (unless lightbox is open)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.querySelector('#lightbox-close-button')) return;
      if (e.key === 'ArrowLeft' || e.key === 'Escape') {
        e.preventDefault();
        triggerHapticTick('light');
        onBackToLanding();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBackToLanding]);

  useEffect(() => {
    if (targetSection) {
      const timer = setTimeout(() => {
        const el = document.getElementById(targetSection);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [targetSection]);

  return (
    <div
      id="about-view-container"
      className="min-h-screen pt-24 pb-20 px-6 sm:px-12 md:px-16 swiss-grid-overlay animate-in fade-in duration-400"
    >
      <div className="max-w-5xl mx-auto">
        {/* Top Breadcrumbs */}
        <div className="flex items-center justify-between border-b border-[#e2ded5] dark:border-[#2a2824] pb-4 mb-12">
          <button
            id="about-back-btn"
            onClick={() => {
              triggerHapticTick('light');
              onBackToLanding();
            }}
            className="group flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider text-[#63605a] dark:text-[#9e998e] hover:text-[#c83b2b] dark:hover:text-[#ff5442] cursor-pointer"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>BACK</span>
          </button>

          <span className="font-mono-tech text-[11px] text-[#858076] dark:text-[#78736a] uppercase">
            Profile - About
          </span>
        </div>

        {/* 1. SHORT DESCRIPTIVE TEXT & SWISS EDITORIAL MANIFESTO */}
        <div id="about-intro-section" className="mb-20 scroll-mt-28">
          {/* Bio text and Portrait card side-by-side (Card top aligned with Title top) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 lg:gap-12 items-start">
            {/* Left Column: Composed Title with Overlapping Pill & Bio Text */}
            <div className="md:col-span-7 lg:col-span-8">
              {/* Composed Headline + Overlapping Badge anchored directly to About */}
              <div className="relative inline-block mb-10 select-none">
                <h1 className="font-serif-display text-7xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[104px] font-normal tracking-tight text-[#161513] dark:text-[#f4f1ea] leading-[0.98]">
                  <span className="inline-flex items-baseline">
                    <span>About me</span>
                    {/* Anchor wrapper for overlapping pill badge */}
                    <span className="relative inline-block">
                      {/* Overlapping Pill Badge with -10deg rotation angle */}
                      <span
                        className="absolute top-[28px] sm:top-[27px] md:top-[29px] -left-[88px] -translate-y-full z-10 origin-top transform -rotate-[10deg] hover:-rotate-[6deg] transition-transform duration-300 shadow-sm border border-[#d8d3c7] dark:border-[#38352f] bg-[#ede8df] dark:bg-[#24221e] rounded-full inline-flex items-center justify-center px-4.5 py-1.5 sm:px-5 sm:py-1 md:px-6 md:py-1.5 font-mono-tech text-[13.5px] sm:text-sm md:text-[14px] font-medium text-[#161513] dark:text-[#f4f1ea] tracking-wider whitespace-nowrap cursor-default pointer-events-auto"
                        style={{ transformOrigin: 'top center' }}
                      >
                        Hi, I'm Lyne!
                      </span>
                    </span>
                  </span>
                </h1>
              </div>

              <div className="space-y-5 font-sans-swiss text-base sm:text-lg md:text-[18px] lg:text-[19px] text-[#36342f] dark:text-[#cfc9be] leading-relaxed max-w-2xl font-normal">
                {data.bioParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Portrait Card next to the text on the right */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col items-center md:items-end">
              <div className="relative w-full max-w-[260px] sm:max-w-[280px] md:max-w-[270px] lg:max-w-[300px] rounded-2xl overflow-hidden border border-[#ded8cc] dark:border-[#38352f] bg-[#eae5db] dark:bg-[#1c1b18] shadow-xs group">
                <div
                  className="relative aspect-3/4 w-full overflow-hidden bg-[#e0dbce] dark:bg-[#1f1d1a] cursor-zoom-in"
                  onClick={() => openLightbox(lynePortrait, 'Lyne Olmedo with a deer in Nara')}
                >
                  <img
                    src={lynePortrait}
                    alt="Lyne Olmedo with a deer in Nara"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Status metadata badge */}
                  <div className="absolute top-3 right-3 flex items-center pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#161513]/80 dark:bg-[#121110]/85 backdrop-blur-xs font-mono-tech text-[9.5px] font-medium text-[#f4f1ea] tracking-wide shadow-xs">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span>available for hire</span>
                    </span>
                  </div>
                </div>

                {/* Card footer details */}
                <div className="px-4 py-3 border-t border-[#ded8cc] dark:border-[#2e2b24] bg-[#f5f2eb] dark:bg-[#191816] flex flex-col justify-center gap-0.5">
                  <div className="font-sans-swiss text-[13px] font-semibold tracking-tight text-[#161513] dark:text-[#f4f1ea] leading-tight">
                    {data.name}
                  </div>
                  <div className="font-mono-tech text-[10.5px] text-[#6e695f] dark:text-[#9e988d] leading-normal tracking-tight">
                    {data.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. CAREER TIMELINE INFOGRAPHIC (Resume) */}
        <div id="about-resume-section" className="my-20 scroll-mt-28">
          <div className="flex items-center justify-between border-b border-[#e2ded5] dark:border-[#2a2824] pb-3 mb-12">
            <span className="font-mono-tech text-xs tracking-widest text-[#78746c] dark:text-[#9e998e] uppercase">
              Resume
            </span>
            <span className="font-mono-tech text-[10px] text-[#9a958a] dark:text-[#78736a]">
              2019 — PRESENT
            </span>
          </div>

          <div className="relative border-l border-[#dcd6c8] dark:border-[#2e2b24] ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
            {data.timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline node dot on hairline */}
                <div
                  className={`absolute -left-[41px] sm:-left-[57px] top-1.5 w-4 h-4 rounded-full border-2 transition-all ${
                    idx === 0
                      ? 'bg-[#c83b2b] dark:bg-[#ff5442] border-[#c83b2b] dark:border-[#ff5442] ring-4 ring-[#c83b2b]/20 dark:ring-[#ff5442]/20'
                      : 'bg-[#f9f7f2] dark:bg-[#121110] border-[#161513] dark:border-[#f4f1ea] group-hover:border-[#c83b2b] dark:group-hover:border-[#ff5442] group-hover:bg-[#c83b2b] dark:group-hover:bg-[#ff5442]'
                  }`}
                />

                <div className="mb-1">
                  <span className="font-mono-tech text-xs font-semibold text-[#161513] dark:text-[#f4f1ea]">
                    {item.yearRange}
                  </span>
                </div>

                <h3 className="font-serif-display text-2xl sm:text-3xl text-[#161513] dark:text-[#f4f1ea] mb-1">
                  {item.role}
                </h3>

                <div className="flex flex-wrap items-baseline gap-3 mb-2">
                  <span className="font-mono-tech text-xs text-[#c83b2b] dark:text-[#ff5442] uppercase tracking-wider">
                    {item.company}
                  </span>
                  <span className="font-mono-tech text-xs text-[#8c877d] dark:text-[#78736a]">
                    {item.location}
                  </span>
                </div>

                <p className="font-sans-swiss text-sm text-[#46433e] dark:text-[#b5b0a5] max-w-2xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 3. SKILLS SECTION */}
        <div id="about-skills-section" className="my-20 scroll-mt-28">
          <div className="flex items-center justify-between border-b border-[#e2ded5] dark:border-[#2a2824] pb-3 mb-10">
            <span className="font-mono-tech text-xs tracking-widest text-[#78746c] dark:text-[#9e998e] uppercase">
              Skills
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {(data.skillItems || []).map((skill, idx) => (
              <div
                key={idx}
                className="group relative p-6 sm:p-7 rounded-xl bg-[#f2eee5]/70 dark:bg-[#181715]/75 border border-[#ded8cb] dark:border-[#282622] hover:border-[#161513] dark:hover:border-[#f4f1ea] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono-tech text-xs font-semibold text-[#c83b2b] dark:text-[#ff5442] tracking-wider">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#dcd7cb] dark:bg-[#33302a] group-hover:bg-[#c83b2b] dark:group-hover:bg-[#ff5442] transition-colors" />
                  </div>
                  <h3 className="font-serif-display text-xl sm:text-[22px] text-[#161513] dark:text-[#f4f1ea] leading-snug mb-2.5">
                    {skill.title}
                  </h3>
                  <p className="font-sans-swiss text-sm text-[#46433e] dark:text-[#b5b0a5] leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. EXTERNAL LINKS & DIRECT CONTACT (Contact & Inquiries) */}
        <div id="about-contact-section" className="mt-20 p-8 sm:p-12 rounded-2xl bg-[#f2eee5] dark:bg-[#1a1917] border border-[#ded8cb] dark:border-[#2e2b24] scroll-mt-28">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="font-mono-tech text-[10px] tracking-widest text-[#78746c] dark:text-[#9e998e] uppercase block mb-1">
                Contact & Inquiries
              </span>
              <h3 className="font-serif-display text-3xl sm:text-4xl text-[#161513] dark:text-[#f4f1ea] mb-2">
                Let's talk!
              </h3>
              <p className="font-sans-swiss text-xs sm:text-sm text-[#5a574f] dark:text-[#a8a398] max-w-xl">
                Have a project in mind? Send me an email.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                id="about-linkedin-link"
                href={data.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#161513] dark:bg-[#f4f1ea] text-[#f9f7f2] dark:text-[#121110] hover:bg-[#c83b2b] dark:hover:bg-[#ff5442] dark:hover:text-[#f4f1ea] transition-all font-sans-swiss text-xs font-semibold uppercase tracking-wider cursor-pointer shadow-xs"
              >
                <span>LinkedIn</span>
                <span className="group-hover:translate-x-1 transition-transform">↗</span>
              </a>

              <a
                id="about-email-link"
                href={`mailto:${data.links.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#161513] dark:border-[#f4f1ea] text-[#161513] dark:text-[#f4f1ea] hover:bg-[#161513] dark:hover:bg-[#f4f1ea] hover:text-[#f9f7f2] dark:hover:text-[#121110] transition-all font-sans-swiss text-xs font-semibold uppercase tracking-wider cursor-pointer"
              >
                <span>Email Me</span>
                <span>✉</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
