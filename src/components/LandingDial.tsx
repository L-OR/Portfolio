import React, { useState, useEffect, useLayoutEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';
import { useTheme } from '../context/ThemeContext';
import { triggerHapticTick, resumeAudioContext } from '../utils/haptics';

interface LandingDialProps {
  projects: Project[];
  activeProjectId: string;
  onSelectProject: (projectId: string) => void;
  onNavigateToProject: (projectId: string) => void;
}

export const LandingDial: React.FC<LandingDialProps> = ({
  projects,
  activeProjectId,
  onSelectProject,
  onNavigateToProject,
}) => {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const totalProjects = projects.length;
  const stepAngle = (2 * Math.PI) / totalProjects; // e.g. 72 deg for 5 projects

  // Find initial index
  const initialIndex = Math.max(
    0,
    projects.findIndex((p) => p.id === activeProjectId)
  );

  // Rotation angle in radians (0 means project 0 is aligned with horizontal right)
  // We align so that project `initialIndex` is at angle 0.
  const [rotation, setRotation] = useState<number>(-initialIndex * stepAngle);
  const rotationRef = useRef<number>(-initialIndex * stepAngle);
  rotationRef.current = rotation;
  const currentStepRef = useRef<number>(-initialIndex);

  // Dragging state refs for smooth requestAnimationFrame updates
  const isDragging = useRef<boolean>(false);
  const dragStartY = useRef<number>(0);
  const dragStartAngle = useRef<number>(0);
  const lastY = useRef<number>(0);
  const lastTime = useRef<number>(0);
  const velocity = useRef<number>(0);
  const animationFrameId = useRef<number | null>(null);
  const lastTickedIndex = useRef<number>(initialIndex);

  // Touch swipe horizontal detection
  const touchStartX = useRef<number>(0);
  const touchStartY = useRef<number>(0);

  // Dynamic radius based on container / window dimensions (increased by 32px per user request)
  const [radius, setRadius] = useState<number>(267);
  const [centerOffset, setCenterOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [screenSize, setScreenSize] = useState<{ isMobile: boolean; isTablet: boolean }>({
    isMobile: false,
    isTablet: false,
  });

  // Calculate active index from rotation (strictly synchronized with step snapping)
  const getActiveIndex = useCallback(
    (rot: number) => {
      const step = Math.round(rot / stepAngle);
      return ((-step % totalProjects) + totalProjects) % totalProjects;
    },
    [stepAngle, totalProjects]
  );

  // Sync active project state
  const currentIndex = getActiveIndex(rotation);
  const activeProject = projects[currentIndex] || projects[0];

  // Measure H2 title center to align it precisely with the red horizontal active line
  const contentContainerRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const [h2CenterOffset, setH2CenterOffset] = useState<number>(60);

  useLayoutEffect(() => {
    const updateH2Center = () => {
      if (h2Ref.current && contentContainerRef.current) {
        const containerRect = contentContainerRef.current.getBoundingClientRect();
        const h2Rect = h2Ref.current.getBoundingClientRect();
        const relativeCenter = (h2Rect.top + h2Rect.height / 2) - containerRect.top;
        if (relativeCenter > 0 && Math.abs(relativeCenter - h2CenterOffset) > 0.5) {
          setH2CenterOffset(relativeCenter);
        }
      }
    };

    updateH2Center();
    window.addEventListener('resize', updateH2Center);
    let ro: ResizeObserver | null = null;
    if (contentContainerRef.current) {
      ro = new ResizeObserver(updateH2Center);
      ro.observe(contentContainerRef.current);
    }
    return () => {
      window.removeEventListener('resize', updateH2Center);
      ro?.disconnect();
    };
  }, [activeProject.id, h2CenterOffset]);

  // Update layout geometry on resize with height and width awareness
  useEffect(() => {
    const updateDimensions = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      const isMobile = width < 640;
      const isTablet = width < 1024;
      setScreenSize({ isMobile, isTablet });

      // Max radius that fits comfortably vertically with clearance for top header & bottom controls
      const maxRByHeight = (height - 120) * 0.40 + 32;
      const baseCalcRadius = isMobile 
        ? Math.min(width * 0.34, (height - 100) * 0.38, 155) 
        : isTablet 
        ? Math.min(width * 0.28, maxRByHeight - 32, 235) 
        : Math.min(width * 0.18, maxRByHeight - 32, 235);
      // Increased size for tablet and mobile, keeping desktop intact
      const calcRadius = baseCalcRadius + 32;
        
      // Position dial center at left screen edge (x = 0) so the left half is out of screen
      const cx = 0;
      const cy = height / 2;

      setRadius(calcRadius);
      setCenterOffset({ x: cx, y: cy });
    };

    updateDimensions();

    const ro = new ResizeObserver(() => {
      updateDimensions();
    });

    if (containerRef.current) {
      ro.observe(containerRef.current);
    }

    window.addEventListener('resize', updateDimensions);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Snap to nearest target angle
  const snapToNearest = useCallback(
    (currentRot: number) => {
      const step = Math.round(currentRot / stepAngle);
      currentStepRef.current = step;
      const targetAngle = step * stepAngle;
      const targetIndex = ((-step % totalProjects) + totalProjects) % totalProjects;

      let startRot = currentRot;
      const startTime = performance.now();
      const duration = 380; // ms

      const animateSnap = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        // Quartic ease out for Swiss precision feel
        const ease = 1 - Math.pow(1 - progress, 4);
        const nextRot = startRot + (targetAngle - startRot) * ease;

        setRotation(nextRot);
        rotationRef.current = nextRot;

        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(animateSnap);
        } else {
          setRotation(targetAngle);
          rotationRef.current = targetAngle;
          onSelectProject(projects[targetIndex].id);
        }
      };

      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = requestAnimationFrame(animateSnap);
    },
    [onSelectProject, projects, stepAngle, totalProjects]
  );

  // Check and trigger haptics when crossing project boundary
  useEffect(() => {
    if (currentIndex !== lastTickedIndex.current) {
      triggerHapticTick('light');
      lastTickedIndex.current = currentIndex;
      onSelectProject(projects[currentIndex].id);
    }
  }, [currentIndex, onSelectProject, projects]);

  // Pointer Down (Mouse or Touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    resumeAudioContext();
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);

    isDragging.current = true;
    dragStartY.current = e.clientY;
    dragStartAngle.current = rotation;
    lastY.current = e.clientY;
    lastTime.current = performance.now();
    velocity.current = 0;

    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;

    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };

  // Pointer Move
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;

    const deltaY = e.clientY - dragStartY.current;
    // Map vertical pixel drag to dial rotation radians
    const angularDelta = (deltaY / (radius * 1.5));
    const newRotation = dragStartAngle.current + angularDelta;

    // Track instantaneous velocity
    const now = performance.now();
    const dt = now - lastTime.current;
    if (dt > 8) {
      velocity.current = (e.clientY - lastY.current) / (dt * radius * 1.5);
      lastY.current = e.clientY;
      lastTime.current = now;
    }

    setRotation(newRotation);
  };

  // Pointer Up
  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // Check for horizontal swipe left gesture (deltaX < -60)
    const deltaX = e.clientX - touchStartX.current;
    const deltaY = Math.abs(e.clientY - touchStartY.current);

    if (deltaX < -70 && deltaY < 80) {
      // User performed swipe left! Navigate to project page
      triggerHapticTick('medium');
      onNavigateToProject(activeProject.id);
      return;
    }

    // Apply inertia physics deceleration
    let currentVel = velocity.current * 140; // Scale momentum
    if (Math.abs(currentVel) > 0.005) {
      let currentRot = rotation;
      let lastAnimTime = performance.now();

      const animateMomentum = (now: number) => {
        const dt = (now - lastAnimTime) / 1000;
        lastAnimTime = now;

        currentRot += currentVel * dt;
        currentVel *= 0.90; // Friction decay

        setRotation(currentRot);

        if (Math.abs(currentVel) > 0.05) {
          animationFrameId.current = requestAnimationFrame(animateMomentum);
        } else {
          snapToNearest(currentRot);
        }
      };

      animationFrameId.current = requestAnimationFrame(animateMomentum);
    } else {
      snapToNearest(rotation);
    }
  };

  // Wheel / Trackpad listener
  const handleWheel = (e: React.WheelEvent) => {
    resumeAudioContext();
    if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);

    const delta = e.deltaY * 0.0016;
    const newRot = rotation - delta;
    setRotation(newRot);

    // Debounce snap after wheel stops
    window.clearTimeout((window as unknown as { wheelSnapTimeout?: number }).wheelSnapTimeout);
    (window as unknown as { wheelSnapTimeout?: number }).wheelSnapTimeout = window.setTimeout(() => {
      snapToNearest(newRot);
    }, 120);
  };

  // Direct click to rotate to a specific project
  const handleDotClick = useCallback(
    (index: number) => {
      resumeAudioContext();
      triggerHapticTick('medium');
      // Calculate shortest angular rotation
      const currentRot = rotationRef.current;
      const currentActiveIdx = getActiveIndex(currentRot);
      let diff = index - currentActiveIdx;

      if (diff > totalProjects / 2) diff -= totalProjects;
      if (diff < -totalProjects / 2) diff += totalProjects;

      const currentStep = Math.round(currentRot / stepAngle);
      const targetStep = currentStep - diff;
      currentStepRef.current = targetStep;
      const targetRot = targetStep * stepAngle;

      let startRot = currentRot;
      const startTime = performance.now();
      const duration = 380;

      const animateClick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        const ease = 1 - Math.pow(1 - progress, 3);
        const nextRot = startRot + (targetRot - startRot) * ease;

        setRotation(nextRot);
        rotationRef.current = nextRot;

        if (progress < 1) {
          animationFrameId.current = requestAnimationFrame(animateClick);
        } else {
          setRotation(targetRot);
          rotationRef.current = targetRot;
          onSelectProject(projects[index].id);
        }
      };

      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = requestAnimationFrame(animateClick);
    },
    [getActiveIndex, onSelectProject, projects, stepAngle, totalProjects]
  );

  // Keyboard navigation: Arrow Up/Down to spin, Right/Enter to view project
  // Down arrow moves to the following project (Case 01 -> Case 02 -> Case 03 -> Case 04 -> Case 01)
  // Up arrow moves to the previous project (Case 02 -> Case 01 -> Case 04 -> Case 03)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'Down') {
        e.preventDefault();
        resumeAudioContext();
        triggerHapticTick('medium');
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);

        // Advance to following project (e.g. Case 01 -> Case 02)
        const nextStep = currentStepRef.current - 1;
        currentStepRef.current = nextStep;
        const nextIndex = ((-nextStep % totalProjects) + totalProjects) % totalProjects;
        onSelectProject(projects[nextIndex].id);

        const startRot = rotationRef.current;
        const targetRot = nextStep * stepAngle;
        const startTime = performance.now();
        const duration = 380;

        const animateKey = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / duration);
          const ease = 1 - Math.pow(1 - progress, 3);
          const nextRot = startRot + (targetRot - startRot) * ease;

          setRotation(nextRot);
          rotationRef.current = nextRot;

          if (progress < 1) {
            animationFrameId.current = requestAnimationFrame(animateKey);
          } else {
            setRotation(targetRot);
            rotationRef.current = targetRot;
            onSelectProject(projects[nextIndex].id);
          }
        };

        animationFrameId.current = requestAnimationFrame(animateKey);
      } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        e.preventDefault();
        resumeAudioContext();
        triggerHapticTick('medium');
        if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);

        // Return to previous project (e.g. Case 02 -> Case 01)
        const prevStep = currentStepRef.current + 1;
        currentStepRef.current = prevStep;
        const prevIndex = ((-prevStep % totalProjects) + totalProjects) % totalProjects;
        onSelectProject(projects[prevIndex].id);

        const startRot = rotationRef.current;
        const targetRot = prevStep * stepAngle;
        const startTime = performance.now();
        const duration = 380;

        const animateKey = (now: number) => {
          const elapsed = now - startTime;
          const progress = Math.min(1, elapsed / duration);
          const ease = 1 - Math.pow(1 - progress, 3);
          const nextRot = startRot + (targetRot - startRot) * ease;

          setRotation(nextRot);
          rotationRef.current = nextRot;

          if (progress < 1) {
            animationFrameId.current = requestAnimationFrame(animateKey);
          } else {
            setRotation(targetRot);
            rotationRef.current = targetRot;
            onSelectProject(projects[prevIndex].id);
          }
        };

        animationFrameId.current = requestAnimationFrame(animateKey);
      } else if (e.key === 'ArrowRight' || e.key === 'Enter') {
        e.preventDefault();
        triggerHapticTick('medium');
        onNavigateToProject(activeProject.id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProject.id, onNavigateToProject, onSelectProject, projects, stepAngle, totalProjects]);

  return (
    <section
      id="landing-dial-container"
      ref={containerRef}
      tabIndex={0}
      onWheel={handleWheel}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      className="relative w-full h-[calc(100vh-4.5rem)] mt-18 overflow-hidden select-none touch-none flex items-center swiss-grid-overlay outline-none focus:outline-none"
    >
      {/* Background Swiss Grid Reference Marks */}
      <div className="absolute top-6 sm:top-8 right-4 sm:right-8 md:right-12 left-4 sm:left-8 md:left-12 font-mono-tech text-[9.5px] sm:text-[11px] lg:text-[10px] text-[#918c81] dark:text-[#787368] uppercase tracking-wider pointer-events-none z-10 truncate text-right">
        [↑ / ↓] SPIN DIAL &nbsp;•&nbsp; [SWIPE LEFT→ / ENTER] VIEW CASE STUDY
      </div>

      {/* SVG Radial Wheel & Integrated Precision Geometry */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
        aria-hidden="true"
      >
        <g transform={`translate(${centerOffset.x}, ${centerOffset.y})`}>
          {/* Inner concentric guide */}
          <circle
            cx={0}
            cy={0}
            r={radius * 0.82}
            fill="none"
            stroke={theme === 'dark' ? '#262420' : '#ece8df'}
            strokeWidth="1"
            strokeDasharray="2 3"
          />

          {/* Outer subtle guide */}
          <circle
            cx={0}
            cy={0}
            r={radius * 1.08}
            fill="none"
            stroke={theme === 'dark' ? '#1c1a17' : '#f0ece3'}
            strokeWidth="1"
          />

          {/* Main wheel circumference track line - 100% solid precision line */}
          <circle
            cx={0}
            cy={0}
            r={radius}
            fill="none"
            stroke={theme === 'dark' ? '#38352f' : '#d4cfc2'}
            strokeWidth="1.5"
          />

          {/* Decorative dial ticks along circumference */}
          {(() => {
            const isSmallScreen = screenSize.isMobile || screenSize.isTablet;
            return [...Array(36)].map((_, i) => {
              const angle = (i * (2 * Math.PI)) / 36;
              const isMajor = i % 3 === 0;
              const tickLen = isMajor ? (isSmallScreen ? 7.5 : 6) : (isSmallScreen ? 4.5 : 3.5);
              const x1 = Math.cos(angle) * (radius - tickLen);
              const y1 = Math.sin(angle) * (radius - tickLen);
              const x2 = Math.cos(angle) * (radius + tickLen);
              const y2 = Math.sin(angle) * (radius + tickLen);
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={
                    isMajor
                      ? theme === 'dark'
                        ? '#5a554a'
                        : '#b8b2a3'
                      : theme === 'dark'
                      ? '#2e2b24'
                      : '#dedad0'
                  }
                  strokeWidth={isMajor ? (isSmallScreen ? 1.5 : 1.2) : (isSmallScreen ? 1.0 : 0.8)}
                />
              );
            });
          })()}

          {/* Active Horizontal Precision Alignment Index Marker */}
          {(() => {
            const isSmallScreen = screenSize.isMobile || screenSize.isTablet;
            return (
              <line
                x1={radius - (isSmallScreen ? 13 : 10)}
                y1={0}
                x2={radius + (isSmallScreen ? 13 : 10)}
                y2={0}
                stroke={theme === 'dark' ? '#ff5442' : '#c83b2b'}
                strokeWidth={isSmallScreen ? '2' : '1.5'}
                strokeOpacity="0.6"
              />
            );
          })()}

          {/* SVG Visual Dots Rendered Directly on Circumference Track */}
          {(() => {
            const isSmallScreen = screenSize.isMobile || screenSize.isTablet;
            return projects.map((proj, idx) => {
              const theta = rotation + idx * stepAngle;
              const x = Math.cos(theta) * radius;
              const y = Math.sin(theta) * radius;

              const normAngle = Math.atan2(Math.sin(theta), Math.cos(theta));
              const angleDistance = Math.abs(normAngle);
              const isAligned = angleDistance < 0.08;
              const accentRed = theme === 'dark' ? '#ff5442' : '#c83b2b';
              const dotFill = isAligned
                ? accentRed
                : theme === 'dark'
                ? '#f4f1ea'
                : '#161513';
              const dotStroke = theme === 'dark' ? '#121110' : '#f9f7f2';

              return (
                <g key={`svg-dot-${proj.id}`}>
                  {/* Active glow ring */}
                  {isAligned && (
                    <circle
                      cx={x}
                      cy={y}
                      r={isSmallScreen ? 11 : 9}
                      fill={accentRed}
                      fillOpacity="0.22"
                      stroke={accentRed}
                      strokeWidth="1"
                      strokeOpacity="0.5"
                    />
                  )}
                  {/* Main dot circle anchored directly on the line */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isAligned ? (isSmallScreen ? 6 : 5) : (isSmallScreen ? 4.5 : 3.5)}
                    fill={dotFill}
                    stroke={dotStroke}
                    strokeWidth={isAligned ? (isSmallScreen ? 1.8 : 1.5) : 1}
                  />
                  {/* Center pip */}
                  <circle
                    cx={x}
                    cy={y}
                    r={isSmallScreen ? 1.5 : 1.2}
                    fill={dotStroke}
                  />
                </g>
              );
            });
          })()}
        </g>
      </svg>

      {/* Interactive Project Nodes & Dynamic Badges Overlay */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {projects.map((proj, idx) => {
          // Angle of this project with respect to current rotation
          const theta = rotation + idx * stepAngle;
          const x = Math.cos(theta) * radius;
          const y = Math.sin(theta) * radius;

          // Determine project position relative to active index
          const normAngle = Math.atan2(Math.sin(theta), Math.cos(theta));
          const angleDistance = Math.abs(normAngle);
          const isAligned = angleDistance < 0.08;
          const alignmentRatio = Math.max(0, 1 - angleDistance / (stepAngle * 0.45));
          
          // For previous & following projects, always keep labels 100% fully visible and clear on the dial
          const isNeighbor = Math.abs(normAngle) <= stepAngle * 1.35;
          const labelOpacity = isNeighbor ? Math.max(0, 1 - alignmentRatio) : 0;

          // Absolute position on screen without parent translate offset
          const posX = centerOffset.x + x;
          const posY = centerOffset.y + y;

          return (
            <div
              key={proj.id}
              className="absolute pointer-events-auto cursor-pointer group"
              style={{
                left: `${posX}px`,
                top: `${posY}px`,
                transform: 'translate(-50%, -50%)',
              }}
              onClick={(e) => {
                e.stopPropagation();
                handleDotClick(idx);
              }}
            >
              {/* Touch and Hover Hit Area */}
              <div className="relative flex items-center p-3.5 sm:p-3 lg:p-2.5">
                {/* Invisible hit area circle syncing with visual dot */}
                <div
                  className={`w-5 h-5 sm:w-5 sm:h-5 lg:w-4 lg:h-4 rounded-full flex items-center justify-center transition-transform duration-200 ${
                    isAligned ? 'scale-125' : 'group-hover:scale-125'
                  }`}
                />

                {/* Dot Label (Project Code & Mini Title) - Always Fully Visible for Neighboring Projects */}
                {labelOpacity > 0.02 && (
                  <div
                    className="absolute left-7 sm:left-7 lg:left-6 top-1/2 -translate-y-1/2 flex flex-col whitespace-nowrap pointer-events-auto cursor-pointer transition-all duration-200 z-10"
                    style={{ opacity: labelOpacity }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleDotClick(idx);
                    }}
                  >
                    <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-2 bg-[#fdfcf9] dark:bg-[#1a1916] px-3 py-1 sm:px-3 sm:py-1 lg:px-2.5 lg:py-1 rounded-xs border border-[#dedad0] dark:border-[#33302a] shadow-xs group-hover:border-[#c83b2b]/60 dark:group-hover:border-[#ff5442]/60 group-hover:bg-[#f9f7f2] dark:group-hover:bg-[#22201c] transition-all">
                      <span className="font-mono-tech text-[10.5px] sm:text-[11.5px] lg:text-[10px] tracking-wider uppercase font-semibold text-[#161513] dark:text-[#f4f1ea] group-hover:text-[#c83b2b] dark:group-hover:text-[#ff5442] transition-colors shrink-0">
                        {proj.code}
                      </span>
                      <span className="font-mono-tech text-[10.5px] sm:text-[12px] lg:text-[10.5px] tracking-tight font-medium text-[#161513] dark:text-[#f4f1ea] group-hover:text-[#c83b2b] dark:group-hover:text-[#ff5442] transition-colors whitespace-nowrap">
                        {proj.title}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Dynamic Measurements for Separation between Dial, Indicator Line, and Content */}
      {(() => {
        const dotX = centerOffset.x + radius;
        const lineWidth = screenSize.isMobile
          ? 18
          : screenSize.isTablet
          ? 26
          : radius < 272
          ? 20
          : radius < 352
          ? 32
          : 44;
        const contentGap = screenSize.isMobile
          ? 10
          : screenSize.isTablet
          ? 12
          : radius < 272
          ? 10
          : 16;
        const contentLeft = dotX + lineWidth + contentGap;

        return (
          <>
            {/* Horizontal Alignment Indicator Line - Locked strictly to the active dot and title */}
            <div
              id="dial-alignment-indicator"
              className="absolute pointer-events-none z-20 flex items-center"
              style={{
                left: `${dotX}px`,
                top: `${centerOffset.y}px`,
                transform: 'translateY(-50%)',
              }}
            >
              <motion.div
                key={`line-${activeProject.id}`}
                initial={{ width: 6, opacity: 0.4 }}
                animate={{ width: lineWidth, opacity: 1 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                className="h-[2px] lg:h-[1.5px] bg-[#c83b2b] dark:bg-[#ff5442] origin-left"
              />
              <div className="w-2.5 h-2.5 sm:w-2.5 sm:h-2.5 lg:w-2 lg:h-2 rounded-full bg-[#c83b2b] dark:bg-[#ff5442] -ml-1 shadow-xs animate-pulse" />
            </div>

            {/* Integrated Project Content Container - Aligned H2 Title Center to Dial Active Indicator Line */}
            <div
              ref={contentContainerRef}
              id="active-project-integrated-content"
              className="absolute z-30 pointer-events-auto pr-3 sm:pr-6 md:pr-10 lg:pr-16 max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl"
              style={{
                left: `${contentLeft}px`,
                top: `${centerOffset.y}px`,
                transform: `translateY(-${h2CenterOffset}px)`,
                right: '16px',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, x: -14, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: 14, filter: 'blur(4px)' }}
                  transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col"
                >
                  {/* 1. Top Metadata Line: CASE badge, with Client / Year below on mobile and beside on tablet/desktop */}
                  <div className="flex flex-col items-start gap-1.5 sm:flex-row sm:items-center sm:gap-3 mb-2.5 sm:mb-3.5 lg:mb-2.5">
                    <span className="font-mono-tech text-xs sm:text-[13px] lg:text-xs font-semibold px-3 py-1 sm:px-3 sm:py-0.5 lg:px-2.5 lg:py-0.5 rounded-xs bg-[#161513] dark:bg-[#f4f1ea] text-[#f9f7f2] dark:text-[#121110] tracking-wider shrink-0 shadow-2xs">
                      CASE {activeProject.code}
                    </span>

                    <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-2 font-mono-tech text-xs sm:text-[13px] lg:text-xs text-[#6b675e] dark:text-[#918c81]">
                      <span className="uppercase font-medium text-[#2c2a26] dark:text-[#e4e0d7]">
                        <span className="sm:hidden whitespace-nowrap">
                          {activeProject.client
                            .replace(/Personal Project/gi, 'PP')
                            .replace(/Institute/gi, 'Inst.')}
                        </span>
                        <span className="hidden sm:inline">{activeProject.client}</span>
                      </span>
                      <span className="text-[#a49e91] dark:text-[#6e6a60]">/</span>
                      <span className="text-[#847f73] dark:text-[#b2ada2]">{activeProject.year}</span>
                    </div>
                  </div>

                  {/* 2. Hero Project Title */}
                  <div className="flex items-center pb-2.5 sm:pb-3.5 lg:pb-3">
                    <motion.h2
                      ref={h2Ref}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.04, ease: [0.16, 1, 0.3, 1] }}
                      onClick={() => {
                        triggerHapticTick('medium');
                        onNavigateToProject(activeProject.id);
                      }}
                      className="font-serif-display text-[2.25rem] sm:text-5xl md:text-[3.25rem] lg:text-[3.5rem] xl:text-[4rem] tracking-tight text-[#161513] dark:text-[#f4f1ea] leading-[1.06] hover:text-[#c83b2b] dark:hover:text-[#ff5442] transition-colors cursor-pointer select-none"
                    >
                      {activeProject.title}
                    </motion.h2>
                  </div>

                  {/* 3. Project Discipline (Matches Project Page Red Tag) */}
                  <div className="pb-3.5 sm:pb-4.5 lg:pb-4 max-w-xl">
                    <p className="font-sans-swiss capitalize text-sm sm:text-base md:text-[15.5px] lg:text-[14.5px] text-[#423f39] dark:text-[#b5b0a5] leading-snug">
                      {activeProject.discipline}
                    </p>
                  </div>

                  {/* 4. Action Button */}
                  <div>
                    <button
                      id="view-active-project-btn"
                      onClick={() => {
                        triggerHapticTick('medium');
                        onNavigateToProject(activeProject.id);
                      }}
                      className="group inline-flex items-center gap-2.5 sm:gap-3 lg:gap-2.5 px-5 sm:px-6 lg:px-5 py-2.5 sm:py-3 lg:py-2.5 rounded-full bg-[#161513] dark:bg-[#f4f1ea] text-[#f9f7f2] dark:text-[#121110] hover:bg-[#c83b2b] dark:hover:bg-[#ff5442] dark:hover:text-[#f4f1ea] transition-all cursor-pointer font-sans-swiss text-xs sm:text-[13px] lg:text-xs tracking-wider uppercase font-semibold shadow-xs"
                    >
                      <span className="sm:hidden">Explore</span>
                      <span className="hidden sm:inline">Explore Case Study</span>
                      <span className="group-hover:translate-x-1 transition-transform text-xs sm:text-sm lg:text-xs">
                        →
                      </span>
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </>
        );
      })()}
    </section>
  );
};
