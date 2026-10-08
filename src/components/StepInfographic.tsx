import React from 'react';
import { ProjectStep } from '../types';
import { MetricsInfographic } from './MetricsInfographic';
import { useLightbox } from '../context/LightboxContext';

interface StepInfographicProps {
  step: ProjectStep;
  accentColor?: string;
}

export const StepInfographic: React.FC<StepInfographicProps> = ({
  step,
  accentColor = '#c83b2b',
}) => {
  const { infographicType, graphicDetails, number, title } = step;
  const { openLightbox } = useLightbox();

  if (infographicType === 'none' || !infographicType) {
    return null;
  }

  if (infographicType === 'figma-embed' || step.embedUrl) {
    const embedSrc = step.embedUrl || (graphicDetails as { embedUrl?: string })?.embedUrl;
    if (embedSrc) {
      return (
        <div className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-[#ded8cb] dark:border-[#2e2b24] shadow-sm bg-[#f2eee5]/80 dark:bg-[#181715]/80 flex flex-col justify-between">
          <div className="relative overflow-hidden w-full flex-1">
            <iframe
              src={embedSrc}
              title={step.title}
              className="w-full h-full border-0 block"
              allowFullScreen
              allow="fullscreen; clipboard-read; clipboard-write"
              loading="lazy"
            />
          </div>
        </div>
      );
    }
  }

  if (infographicType === 'metrics') {
    return <MetricsInfographic step={step} accentColor={accentColor} />;
  }

  if (infographicType === 'image' || step.image || step.imagePlaceholder || step.additionalImages) {
    const imageList: { image: string; imageAlt?: string; caption?: string; tag?: string }[] = [];
    if (step.image) {
      imageList.push({
        image: step.image,
        imageAlt: step.imageAlt || step.title,
        caption: step.graphicDetails?.caption || step.imageAlt || 'Project Visual Artifact',
        tag: step.graphicDetails?.tag,
      });
    }
    if (step.additionalImages && step.additionalImages.length > 0) {
      imageList.push(...step.additionalImages);
    }

    if (imageList.length === 0) {
      const num = parseInt(step.number, 10) || 1;
      const fallbacks = [
        {
          image: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80',
          caption: 'Context & Problem Space Research Artifact',
        },
        {
          image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80',
          caption: 'Planning & Scope Architecture Matrix',
        },
        {
          image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
          caption: 'Review & Stakeholder Alignment Specimen',
        },
        {
          image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80',
          caption: 'Execution & Delivery System Implementation',
        },
        {
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
          caption: 'Release & Impact Adoption Telemetry',
        },
        {
          image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
          caption: 'Retrospective & Design Reflection Artifact',
        },
      ];
      const selected = fallbacks[(num - 1) % fallbacks.length] || fallbacks[0];
      imageList.push({
        image: selected.image,
        imageAlt: step.imageAlt || step.graphicDetails?.caption || `${step.title} Artifact`,
        caption: step.graphicDetails?.caption || step.imageAlt || selected.caption,
        tag: step.graphicDetails?.tag,
      });
    }

    return (
      <div className="flex flex-col gap-6 w-full">
        {imageList.map((imgItem, idx) => (
          <div
            key={idx}
            className="relative w-full aspect-4/3 rounded-2xl overflow-hidden border border-[#ded8cb] dark:border-[#2e2b24] shadow-sm bg-[#f2eee5]/80 dark:bg-[#181715]/80 flex flex-col justify-between group"
          >
            <div className="relative overflow-hidden w-full flex-1 p-0">
              <div
                className="relative w-full h-full min-h-[240px] sm:min-h-[300px] overflow-hidden group cursor-zoom-in"
                onClick={() => openLightbox(imgItem.image, imgItem.imageAlt || imgItem.caption || step.title)}
              >
                <img
                  src={imgItem.image}
                  alt={imgItem.imageAlt || imgItem.caption || step.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover block transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 backdrop-blur-xs text-white px-2.5 py-1 rounded-full font-mono-tech text-[9.5px] flex items-center gap-1.5 pointer-events-none shadow-sm">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                  </svg>
                  <span>Fullscreen</span>
                </div>
              </div>
            </div>
            <div className="px-4 sm:px-6 py-3 border-t border-[#ded8cb] dark:border-[#2e2b24] bg-[#f9f7f2]/95 dark:bg-[#161513]/95 flex flex-wrap items-center justify-between gap-2 font-mono-tech text-[10px] text-[#7a7670] dark:text-[#9e998e]">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c83b2b] dark:bg-[#ff5442]" />
                <span>{imgItem.caption || imgItem.imageAlt || 'Project Visual Artifact'}</span>
              </span>
              <button
                type="button"
                onClick={() => openLightbox(imgItem.image, imgItem.imageAlt || imgItem.caption || step.title)}
                className="inline-flex items-center gap-1 uppercase hover:text-[#c83b2b] dark:hover:text-[#ff5442] transition-colors cursor-pointer"
              >
                <span>Fullscreen</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  switch (infographicType) {
    case 'ambient-dial':
      return (
        <div className="relative w-full aspect-4/3 rounded-xl border border-[#e4e0d7] dark:border-[#2e2b24] bg-[#f4f1ea] dark:bg-[#191816] p-6 flex flex-col justify-between overflow-hidden shadow-xs">
          {/* Header metadata */}
          <div className="flex items-center justify-between z-10 border-b border-[#e2ded5] dark:border-[#2a2824] pb-2">
            <span className="font-mono-tech text-[10px] tracking-widest text-[#7a7670] dark:text-[#9e998e] uppercase">
              {graphicDetails?.tag || 'RADIAL TELEMETRY'}
            </span>
            <span className="font-mono-tech text-[10px] text-[#161513] dark:text-[#f4f1ea] font-medium">
              360° DIAL MATRIX
            </span>
          </div>

          {/* Radial visual preview inspired by Wove reference */}
          <div className="relative flex-1 flex items-center justify-center my-2">
            <div className="relative w-44 h-44 rounded-full border border-dashed border-[#cbc5b8] dark:border-[#38352f] flex items-center justify-center">
              {/* Inner concentric circles */}
              <div className="w-32 h-32 rounded-full border border-[#d8d3c7] dark:border-[#2e2b24] flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-[#b8b2a3] dark:border-[#3d3a33] flex flex-col items-center justify-center bg-[#eae6dc] dark:bg-[#22201d]">
                  <span className="font-serif-display text-2xl text-[#161513] dark:text-[#f4f1ea] italic font-bold">
                    {number}
                  </span>
                  <span className="font-mono-tech text-[9px] text-[#7a7670] dark:text-[#9e998e]">ACTIVE</span>
                </div>
              </div>

              {/* Orbiting ticks */}
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
                const isSelected = i === 2; // e.g. 90 deg
                return (
                  <div
                    key={deg}
                    className="absolute w-full h-full flex items-center justify-start pointer-events-none"
                    style={{ transform: `rotate(${deg}deg)` }}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full -ml-1 transition-all ${
                        isSelected
                          ? 'bg-[#c83b2b] dark:bg-[#ff5442] ring-4 ring-[#c83b2b]/20 dark:ring-[#ff5442]/20 scale-125'
                          : 'bg-[#8c877d] dark:bg-[#555148]'
                      }`}
                    />
                  </div>
                );
              })}

              {/* Center Alignment line indicator */}
              <div className="absolute right-0 top-1/2 w-16 h-[1px] bg-[#c83b2b] dark:bg-[#ff5442] translate-x-8" />
            </div>
          </div>

          {/* Metrics bar */}
          {graphicDetails?.metrics && (
            <div className="grid grid-cols-3 gap-2 pt-2 border-t border-[#e2ded5] dark:border-[#2a2824] z-10">
              {graphicDetails.metrics.map((m, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-mono-tech text-[9px] text-[#7a7670] dark:text-[#9e998e] uppercase">
                    {m.label}
                  </span>
                  <span className="font-sans-swiss text-xs font-semibold text-[#161513] dark:text-[#f4f1ea]">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          )}
          <div className="text-[10px] text-[#7a7670] dark:text-[#88837a] italic font-serif-display">
            {graphicDetails?.caption || 'Rotational step calibration diagram'}
          </div>
        </div>
      );

    case 'grid-taxonomy':
      return (
        <div className="relative w-full aspect-4/3 rounded-xl border border-[#e4e0d7] dark:border-[#2e2b24] bg-[#f4f1ea] dark:bg-[#191816] p-6 flex flex-col justify-between overflow-hidden shadow-xs">
          <div className="flex items-center justify-between border-b border-[#e2ded5] dark:border-[#2a2824] pb-2">
            <span className="font-mono-tech text-[10px] tracking-widest text-[#7a7670] dark:text-[#9e998e] uppercase">
              {graphicDetails?.tag || 'TAXONOMY MATRIX'}
            </span>
            <span className="font-mono-tech text-[10px] text-[#161513] dark:text-[#f4f1ea]">
              12-COL HARMONIC
            </span>
          </div>

          {/* Swiss Grid Diagram */}
          <div className="grid grid-cols-6 gap-2 my-auto py-3">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className={`h-12 border rounded-sm flex flex-col items-center justify-center p-1 transition-all ${
                  i === 2 || i === 7
                    ? 'border-[#c83b2b] dark:border-[#ff5442] bg-[#c83b2b]/10 dark:bg-[#ff5442]/10 text-[#c83b2b] dark:text-[#ff5442]'
                    : 'border-[#d8d3c7] dark:border-[#2e2b24] bg-[#ece8df] dark:bg-[#201f1c] text-[#7a7670] dark:text-[#9e998e]'
                }`}
              >
                <span className="font-mono-tech text-[9px]">G{i + 1}</span>
                <div
                  className={`w-full h-1 mt-1 rounded-full ${
                    i === 2 || i === 7 ? 'bg-[#c83b2b] dark:bg-[#ff5442]' : 'bg-[#cbc6bb] dark:bg-[#38352f]'
                  }`}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#e2ded5] dark:border-[#2a2824]">
            <span className="text-[10px] text-[#7a7670] dark:text-[#88837a] font-serif-display italic">
              {graphicDetails?.caption || 'Proportional modular subdivisions'}
            </span>
            <span className="font-mono-tech text-[10px] text-[#161513] dark:text-[#f4f1ea] font-medium">
              8PX BASELINE
            </span>
          </div>
        </div>
      );

    case 'patient-journey':
    case 'schematic-nodes':
      return (
        <div className="relative w-full aspect-4/3 rounded-xl border border-[#e4e0d7] dark:border-[#2e2b24] bg-[#f4f1ea] dark:bg-[#191816] p-6 flex flex-col justify-between overflow-hidden shadow-xs">
          <div className="flex items-center justify-between border-b border-[#e2ded5] dark:border-[#2a2824] pb-2">
            <span className="font-mono-tech text-[10px] tracking-widest text-[#7a7670] dark:text-[#9e998e] uppercase">
              {graphicDetails?.tag || 'CLINICAL S-CURVE'}
            </span>
            <span className="font-mono-tech text-[10px] text-[#161513] dark:text-[#f4f1ea]">
              REFERRAL FUNNEL
            </span>
          </div>

          {/* SVG S-Curve Path with numbered nodes like moodboard reference */}
          <div className="relative flex-1 flex items-center justify-center py-2">
            <svg
              className="w-full h-28 overflow-visible"
              viewBox="0 0 300 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Continuous S-curve */}
              <path
                d="M 20 20 C 100 20, 100 80, 160 80 C 220 80, 220 20, 280 20"
                stroke="#88837a"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <path
                d="M 20 20 C 100 20, 100 80, 160 80 C 220 80, 220 20, 280 20"
                stroke="#c83b2b"
                strokeWidth="1.5"
                strokeDashoffset="0"
              />

              {/* Node 1 */}
              <g transform="translate(30, 20)">
                <circle r="12" fill="#161513" />
                <text
                  x="0"
                  y="4"
                  fill="#f9f7f2"
                  fontSize="9"
                  fontFamily="var(--font-mono)"
                  textAnchor="middle"
                  fontWeight="600"
                >
                  1
                </text>
              </g>

              {/* Node 2 */}
              <g transform="translate(105, 50)">
                <circle r="10" fill="#f4f1ea" stroke="#161513" strokeWidth="1.5" />
                <text
                  x="0"
                  y="3.5"
                  fill="#161513"
                  fontSize="8"
                  fontFamily="var(--font-mono)"
                  textAnchor="middle"
                  fontWeight="600"
                >
                  2
                </text>
              </g>

              {/* Node 3 - Active Highlight */}
              <g transform="translate(160, 80)">
                <circle r="13" fill="#c83b2b" />
                <text
                  x="0"
                  y="4"
                  fill="#ffffff"
                  fontSize="10"
                  fontFamily="var(--font-mono)"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  3
                </text>
              </g>

              {/* Node 4 */}
              <g transform="translate(225, 50)">
                <circle r="10" fill="#f4f1ea" stroke="#161513" strokeWidth="1.5" />
                <text
                  x="0"
                  y="3.5"
                  fill="#161513"
                  fontSize="8"
                  fontFamily="var(--font-mono)"
                  textAnchor="middle"
                  fontWeight="600"
                >
                  4
                </text>
              </g>

              {/* Node 5 */}
              <g transform="translate(270, 20)">
                <circle r="12" fill="#161513" />
                <text
                  x="0"
                  y="4"
                  fill="#f9f7f2"
                  fontSize="9"
                  fontFamily="var(--font-mono)"
                  textAnchor="middle"
                  fontWeight="600"
                >
                  5
                </text>
              </g>
            </svg>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#e2ded5] dark:border-[#2a2824]">
            <span className="text-[10px] text-[#7a7670] dark:text-[#88837a] font-serif-display italic">
              {graphicDetails?.caption || 'Sequential client milestone protocol'}
            </span>
            <span className="font-mono-tech text-[10px] text-[#c83b2b] dark:text-[#ff5442] font-medium">
              VERIFIED
            </span>
          </div>
        </div>
      );

    case 'acoustic-wave':
      return (
        <div className="relative w-full aspect-4/3 rounded-xl border border-[#e4e0d7] dark:border-[#2e2b24] bg-[#f4f1ea] dark:bg-[#191816] p-6 flex flex-col justify-between overflow-hidden shadow-xs">
          <div className="flex items-center justify-between border-b border-[#e2ded5] dark:border-[#2a2824] pb-2">
            <span className="font-mono-tech text-[10px] tracking-widest text-[#7a7670] dark:text-[#9e998e] uppercase">
              {graphicDetails?.tag || 'FOURIER SPECTRUM'}
            </span>
            <span className="font-mono-tech text-[10px] text-[#161513] dark:text-[#f4f1ea]">
              96KHZ / 24-BIT
            </span>
          </div>

          {/* Waveform graphic bars */}
          <div className="flex items-end justify-between h-24 my-auto px-2 gap-1">
            {[
              18, 32, 45, 28, 62, 85, 95, 70, 48, 88, 100, 65, 42, 58, 80, 52,
              35, 60, 45, 22, 15,
            ].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-full rounded-t-sm transition-all ${
                    i >= 8 && i <= 12
                      ? 'bg-[#c83b2b] dark:bg-[#ff5442]'
                      : i % 2 === 0
                      ? 'bg-[#161513] dark:bg-[#f4f1ea]'
                      : 'bg-[#9f998d] dark:bg-[#48443d]'
                  }`}
                  style={{ height: `${height}%` }}
                />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#e2ded5] dark:border-[#2a2824]">
            <span className="text-[10px] text-[#7a7670] dark:text-[#88837a] font-serif-display italic">
              {graphicDetails?.caption || 'Harmonic resonance & frequency envelope'}
            </span>
            <span className="font-mono-tech text-[10px] text-[#161513] dark:text-[#f4f1ea]">
              +0.2 dB PEAK
            </span>
          </div>
        </div>
      );

    case 'horology-mesh':
      return (
        <div className="relative w-full aspect-4/3 rounded-xl border border-[#e4e0d7] dark:border-[#2e2b24] bg-[#f4f1ea] dark:bg-[#191816] p-6 flex flex-col justify-between overflow-hidden shadow-xs">
          <div className="flex items-center justify-between border-b border-[#e2ded5] dark:border-[#2a2824] pb-2">
            <span className="font-mono-tech text-[10px] tracking-widest text-[#7a7670] dark:text-[#9e998e] uppercase">
              {graphicDetails?.tag || 'KINEMATIC ESCAPEMENT'}
            </span>
            <span className="font-mono-tech text-[10px] text-[#161513] dark:text-[#f4f1ea]">
              28,800 VPH
            </span>
          </div>

          {/* Horological Gear Schematics */}
          <div className="relative flex-1 flex items-center justify-center my-2">
            <div className="relative w-36 h-36 border border-[#c2bcae] dark:border-[#38352f] rounded-full flex items-center justify-center">
              <div className="w-24 h-24 border border-dashed border-[#161513] dark:border-[#f4f1ea] rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite]">
                <div className="w-14 h-14 border border-[#c83b2b] dark:border-[#ff5442] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#c83b2b] dark:bg-[#ff5442]" />
                </div>
              </div>
              {/* Swiss crosses / calibration lines */}
              <div className="absolute w-full h-[1px] bg-[#d3cec2] dark:bg-[#2e2b24]" />
              <div className="absolute h-full w-[1px] bg-[#d3cec2] dark:bg-[#2e2b24]" />
            </div>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#e2ded5] dark:border-[#2a2824]">
            <span className="text-[10px] text-[#7a7670] dark:text-[#88837a] font-serif-display italic">
              {graphicDetails?.caption || 'Micro-mechanical torque distribution'}
            </span>
            <span className="font-mono-tech text-[10px] text-[#161513] dark:text-[#f4f1ea] font-medium">
              4.0 HZ
            </span>
          </div>
        </div>
      );

    case 'minimal-editorial':
    default:
      return (
        <div className="relative w-full aspect-4/3 rounded-xl border border-[#e4e0d7] dark:border-[#2e2b24] bg-[#f4f1ea] dark:bg-[#191816] p-6 flex flex-col justify-between overflow-hidden shadow-xs">
          <div className="flex items-center justify-between border-b border-[#e2ded5] dark:border-[#2a2824] pb-2">
            <span className="font-mono-tech text-[10px] tracking-widest text-[#7a7670] dark:text-[#9e998e] uppercase">
              {graphicDetails?.tag || 'EDITORIAL PLATE'}
            </span>
            <span className="font-mono-tech text-[10px] text-[#161513] dark:text-[#f4f1ea]">
              SPECIFICATION
            </span>
          </div>

          {/* Halftone / Swiss graphic plate inspired by the moodboard reference */}
          <div className="flex-1 flex flex-col items-center justify-center my-2 text-center p-4">
            <div className="w-16 h-16 rounded-full border border-[#161513] dark:border-[#f4f1ea] flex items-center justify-center mb-3">
              <span className="font-serif-display text-2xl font-bold text-[#161513] dark:text-[#f4f1ea]">
                {number}
              </span>
            </div>
            <p className="font-serif-display italic text-sm text-[#3c3a36] dark:text-[#cfc9be] max-w-[200px]">
              "{title}"
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#e2ded5] dark:border-[#2a2824]">
            <span className="text-[10px] text-[#7a7670] dark:text-[#88837a] font-serif-display italic">
              {graphicDetails?.caption || 'Design artifact documentation'}
            </span>
            <span className="font-mono-tech text-[10px] text-[#161513] dark:text-[#f4f1ea]">
              PLATE #{number}
            </span>
          </div>
        </div>
      );
  }
};
