import React, { useEffect, useRef } from 'react';
import { Project } from '../types';
import { StepInfographic } from './StepInfographic';
import { CreativeProcessThread } from './CreativeProcessThread';
import { triggerHapticTick } from '../utils/haptics';

interface ProjectDetailProps {
  project: Project;
  onBackToLanding: () => void;
  onNavigateNextProject?: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({
  project,
  onBackToLanding,
  onNavigateNextProject,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const processSectionRef = useRef<HTMLDivElement>(null);
  const processHeaderRef = useRef<HTMLDivElement>(null);
  const stepElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bottomCtaRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  // Swipe right gesture detection to return to landing page
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = Math.abs(e.changedTouches[0].clientY - touchStartY.current);

    // Swipe right (deltaX > 70) and horizontal
    if (deltaX > 70 && deltaY < 80) {
      triggerHapticTick('medium');
      onBackToLanding();
    }
  };

  // Keyboard navigation: Left Arrow or Escape to return to landing
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' || e.key === 'Escape') {
        e.preventDefault();
        triggerHapticTick('light');
        onBackToLanding();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBackToLanding]);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  return (
    <div
      id="project-detail-view"
      ref={containerRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="min-h-screen pt-24 pb-20 px-6 sm:px-12 md:px-16 swiss-grid-overlay animate-in slide-in-from-right duration-400"
    >
      <div className="max-w-5xl mx-auto">
        {/* Top Breadcrumbs & Back Affordance */}
        <div className="flex items-center justify-between border-b border-[#e2ded5] dark:border-[#2a2824] pb-4 mb-10">
          <button
            id="back-to-landing-btn"
            onClick={() => {
              triggerHapticTick('light');
              onBackToLanding();
            }}
            className="group flex items-center gap-2 font-mono-tech text-xs uppercase tracking-wider text-[#63605a] dark:text-[#9e998e] hover:text-[#c83b2b] dark:hover:text-[#ff5442] cursor-pointer"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            <span>BACK</span>
          </button>

          <div className="flex items-center gap-3 font-mono-tech text-[11px] text-[#858076] dark:text-[#78736a]">
            <span>CASE {project.code}</span>
            <span>•</span>
            <span className="uppercase">{project.year}</span>
          </div>
        </div>

        {/* Project Header Overview */}
        <div className="mb-16">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-mono-tech text-xs tracking-widest uppercase px-2.5 py-1 rounded-sm bg-[#c83b2b]/10 dark:bg-[#ff5442]/10 text-[#c83b2b] dark:text-[#ff5442] font-semibold">
              {project.discipline}
            </span>
          </div>

          <h1 className="font-serif-display text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#161513] dark:text-[#f4f1ea] leading-none mb-6">
            {project.title}
          </h1>

          <p className="font-serif-display italic text-lg sm:text-2xl text-[#3d3a34] dark:text-[#cfc9be] max-w-3xl leading-relaxed mb-6">
            {project.tagline}
          </p>

          <p className="font-sans-swiss text-sm sm:text-base text-[#524f48] dark:text-[#b5b0a5] max-w-3xl leading-relaxed mb-8">
            {project.overview}
          </p>

          {/* Top Hero Image Banner */}
          {project.image && (
            <div
              id="project-top-hero-image-container"
              className="my-10 relative w-full rounded-2xl overflow-hidden border border-[#ded8cb] dark:border-[#2e2b24] shadow-sm bg-[#f2eee5]/80 dark:bg-[#181715]/80"
            >
              <div className="relative overflow-hidden w-full">
                <img
                  id="project-top-hero-image"
                  src={project.image}
                  alt={project.imageAlt || project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-contain max-h-[640px] mx-auto block"
                />
              </div>
              <div className="px-4 sm:px-6 py-3 border-t border-[#ded8cb] dark:border-[#2e2b24] bg-[#f9f7f2]/95 dark:bg-[#161513]/95 flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[10px] text-[#7a7670] dark:text-[#9e998e]">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c83b2b] dark:bg-[#ff5442]" />
                  <span>{project.imageAlt || 'Project Visual Artifact'}</span>
                </span>
              </div>
            </div>
          )}

          {/* Project Details Matrix (My Role, Timeline, Tool, Team) matching Phase 1 system state box style */}
          <div
            id="project-spec-details-box"
            className="relative w-full rounded-xl border border-[#e4e0d7] dark:border-[#2e2b24] bg-[#f4f1ea] dark:bg-[#191816] p-6 flex flex-col justify-between overflow-hidden shadow-xs"
          >
            {/* Header metadata */}
            <div className="flex items-center justify-between border-b border-[#e2ded5] dark:border-[#2a2824] pb-2 mb-5">
              <span className="font-mono-tech text-[10px] tracking-widest text-[#7a7670] dark:text-[#9e998e] uppercase">
                PROJECT SPECIFICATION
              </span>
              <span className="font-mono-tech text-[10px] text-[#161513] dark:text-[#f4f1ea] font-medium uppercase">
                {project.code}
              </span>
            </div>

            {/* Metrics & Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:items-start lg:justify-between gap-4 sm:gap-6 lg:gap-0 w-full">
              {/* 1. My Role */}
              <div className="flex flex-col lg:max-w-[260px]">
                <span className="font-mono-tech text-[9px] text-[#7a7670] dark:text-[#9e998e] uppercase tracking-wider mb-1">
                  My Role
                </span>
                <span className="font-sans-swiss text-xs sm:text-sm font-semibold text-[#161513] dark:text-[#f4f1ea] leading-snug">
                  {project.role || 'Lead Product Designer'}
                </span>
              </div>

              {/* 2. Timeline / Duration */}
              <div className="flex flex-col lg:min-w-[90px]">
                <span className="font-mono-tech text-[9px] text-[#7a7670] dark:text-[#9e998e] uppercase tracking-wider mb-1">
                  Duration
                </span>
                <span className="font-sans-swiss text-xs sm:text-sm font-semibold text-[#161513] dark:text-[#f4f1ea] leading-snug">
                  {project.timeline || project.year}
                </span>
              </div>

              {/* 3. Tools */}
              <div className="flex flex-col lg:max-w-[250px]">
                <span className="font-mono-tech text-[9px] text-[#7a7670] dark:text-[#9e998e] uppercase tracking-wider mb-1">
                  Tools
                </span>
                <span className="font-sans-swiss text-xs sm:text-sm font-semibold text-[#161513] dark:text-[#f4f1ea] leading-snug">
                  {Array.isArray(project.tools)
                    ? project.tools.join(', ')
                    : project.tools || 'Figma, Design Systems'}
                </span>
              </div>

              {/* 4. Team */}
              <div className="flex flex-col lg:max-w-[260px]">
                <span className="font-mono-tech text-[9px] text-[#7a7670] dark:text-[#9e998e] uppercase tracking-wider mb-1">
                  Team
                </span>
                <span className="font-sans-swiss text-xs sm:text-sm font-semibold text-[#161513] dark:text-[#f4f1ea] leading-snug">
                  {project.team || 'Cross-Functional Team'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION: CONTINUOUS WINDING S-CURVE PROCESS ROADMAP (THE CREATIVE THREAD) */}
        <div ref={processSectionRef} className="relative my-20">
          {/* Creative Process Background Winding Thread */}
          <CreativeProcessThread
            stepCount={project.steps.length}
            containerRef={processSectionRef}
            stepRefs={stepElementsRef}
            headerRef={processHeaderRef}
            bottomCtaRef={bottomCtaRef}
          />

          <div
            ref={processHeaderRef}
            className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#ded9ce] dark:border-[#2a2824] pb-3 mb-16 gap-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#c83b2b] dark:bg-[#ff5442] animate-pulse" />
              <span className="font-mono-tech text-xs tracking-widest text-[#55524c] dark:text-[#cfc9be] font-semibold uppercase">
                PROJECT PROCESS
              </span>
            </div>
            <div className="flex items-center gap-2 font-mono-tech text-[10.5px] text-[#8c877d] dark:text-[#78736a] uppercase">
              <span>PHASES 01 — 0{project.steps.length}</span>
            </div>
          </div>

          {/* Step Blocks Connected by the Winding Ribbon */}
          <div className="relative z-10 space-y-24 sm:space-y-32">
            {project.steps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              const hasInfographic = Boolean(step.infographicType && step.infographicType !== 'none');

              return (
                <div
                  key={step.number}
                  id={`step-block-${step.number}`}
                  ref={(el) => {
                    stepElementsRef.current[idx] = el;
                  }}
                  className={`relative ${
                    hasInfographic
                      ? `grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                          isEven ? '' : 'lg:flex-row-reverse'
                        }`
                      : 'grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12'
                  }`}
                >
                  {/* Step Content Column */}
                  <div
                    className={`flex flex-col bg-[#f9f7f2]/90 dark:bg-[#181715]/90 backdrop-blur-xs p-6 sm:p-8 rounded-xl border border-[#ded9ce]/80 dark:border-[#2e2b24]/80 shadow-xs hover:border-[#c83b2b]/40 dark:hover:border-[#ff5442]/40 transition-colors ${
                      hasInfographic
                        ? `lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`
                        : 'lg:col-span-12'
                    }`}
                  >
                    {/* Step Number Anchor (Swiss Bold Numeral) */}
                    <div className="flex items-center gap-4 mb-3">
                      <span className="font-mono-tech text-3xl sm:text-4xl font-bold text-[#161513] dark:text-[#f4f1ea] tracking-tighter">
                        {step.number}
                      </span>
                      <div className="h-[1.5px] flex-1 bg-[#ded9ce] dark:bg-[#2e2b24]" />
                      <span className="font-mono-tech text-[10px] uppercase text-[#c83b2b] dark:text-[#ff5442] font-semibold tracking-widest px-2 py-0.5 rounded-xs bg-[#c83b2b]/10 dark:bg-[#ff5442]/10">
                        {step.phaseLabel || `PHASE ${step.number}`}
                      </span>
                    </div>

                    {/* Step Title & Subtitle */}
                    <h3 className="font-serif-display text-2xl sm:text-3xl text-[#161513] dark:text-[#f4f1ea] mb-2 leading-snug">
                      {step.title}
                    </h3>

                    {step.subtitle && (
                      <p className="font-mono-tech text-xs text-[#7d786f] dark:text-[#9e998e] uppercase tracking-wider mb-4">
                        {step.subtitle}
                      </p>
                    )}

                    {/* Body Copy / Structured Breakdown */}
                    {step.breakdown && step.breakdown.length > 0 ? (
                      <div className="space-y-3 pt-1">
                        {step.breakdown.map((item, bIdx) => (
                          <div key={bIdx} className="leading-relaxed">
                            <span className="font-mono-tech text-xs font-semibold text-[#161513] dark:text-[#f4f1ea] tracking-wider uppercase mr-2">
                              {item.label}
                            </span>
                            <span className="font-sans-swiss text-sm text-[#46433e] dark:text-[#b5b0a5] whitespace-pre-line">
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="font-sans-swiss text-sm text-[#46433e] dark:text-[#b5b0a5] leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>

                  {/* Step Infographic Column */}
                  {hasInfographic && (
                    <div
                      className={`lg:col-span-6 ${
                        isEven ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <StepInfographic step={step} accentColor={project.themeAccent} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* BOTTOM CTA: LINK TO LIVE APP / WEB PAGE */}
          <div
            ref={bottomCtaRef}
            className="relative z-10 mt-28 p-8 sm:p-12 rounded-2xl bg-[#f2eee5]/95 dark:bg-[#1c1a17]/95 backdrop-blur-xs border border-[#ded8cb] dark:border-[#2e2b24] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs"
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c83b2b] dark:bg-[#ff5442]" />
                <span className="font-mono-tech text-[10px] tracking-widest text-[#78746c] dark:text-[#9e998e] uppercase font-semibold">
                  FINAL DESTINATION // DEPLOYED SYSTEM
                </span>
              </div>
              <h4 className="font-serif-display text-2xl sm:text-3xl text-[#161513] dark:text-[#f4f1ea] mb-1">
                {project.title}
              </h4>
              <p className="font-sans-swiss text-xs sm:text-sm text-[#5f5c54] dark:text-[#a8a398]">
                Explore the live product, interactive documentation, and full design specification.
              </p>
            </div>

            <a
              id="project-live-external-link"
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#161513] dark:bg-[#f4f1ea] text-[#f9f7f2] dark:text-[#121110] hover:bg-[#c83b2b] dark:hover:bg-[#ff5442] dark:hover:text-[#f4f1ea] transition-all font-sans-swiss text-xs font-semibold uppercase tracking-wider whitespace-nowrap cursor-pointer shadow-xs"
            >
              <span>{project.liveUrlLabel || 'Launch Live Application'}</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </a>
          </div>
        </div>

        {/* Bottom Pagination & Return */}
        <div className="mt-16 pt-8 border-t border-[#e2ded5] dark:border-[#2a2824] flex items-center justify-between">
          <button
            onClick={() => {
              triggerHapticTick('light');
              onBackToLanding();
            }}
            className="font-mono-tech text-xs uppercase tracking-wider text-[#63605a] dark:text-[#9e998e] hover:text-[#c83b2b] dark:hover:text-[#ff5442] cursor-pointer"
          >
            ← BACK
          </button>

          <span className="font-mono-tech text-[10px] text-[#9a958a] dark:text-[#78736a]">
            SWIPE RIGHT FOR INDEX
          </span>
        </div>
      </div>
    </div>
  );
};
