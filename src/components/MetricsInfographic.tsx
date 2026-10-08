import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, animate } from 'motion/react';
import { ProjectStep } from '../types';
import { triggerHapticTick } from '../utils/haptics';

interface MetricsInfographicProps {
  step: ProjectStep;
  accentColor?: string;
}

export const MetricsInfographic: React.FC<MetricsInfographicProps> = ({
  step,
  accentColor = '#c83b2b',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-40px' });

  // Animated numerical states
  const [platformCount, setPlatformCount] = useState<number>(0);
  const [countryCount, setCountryCount] = useState<number>(0);
  const [feedbackPercent, setFeedbackPercent] = useState<number>(0);

  // Trigger smooth numerical counter animations when elements appear for the first time
  useEffect(() => {
    if (isInView) {
      triggerHapticTick('light');

      // 1. Counter for 82% feedback
      const controlsFeedback = animate(0, 82, {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setFeedbackPercent(Math.round(latest)),
      });

      // 2. Counter for 13 platforms
      const controlsPlatforms = animate(0, 13, {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setPlatformCount(Math.round(latest)),
      });

      // 3. Counter for 6 countries
      const controlsCountries = animate(0, 6, {
        duration: 1.4,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (latest) => setCountryCount(Math.round(latest)),
      });

      return () => {
        controlsFeedback.stop();
        controlsPlatforms.stop();
        controlsCountries.stop();
      };
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-2xl overflow-hidden border border-[#ded8cb] dark:border-[#2e2b24] shadow-sm bg-[#f4f1ea]/90 dark:bg-[#181715]/90 backdrop-blur-xs p-6 sm:p-8 md:p-10 flex flex-col justify-center gap-7 sm:gap-9 select-none"
    >
      {/* Metric 1: 82% positive consumer feedback */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => triggerHapticTick('light')}
        className="flex items-baseline gap-3 sm:gap-4 flex-wrap group cursor-default"
      >
        <span className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#161513] dark:text-[#f4f1ea] group-hover:text-[#c83b2b] dark:group-hover:text-[#ff5442] transition-colors">
          {feedbackPercent}%
        </span>
        <span className="font-sans-swiss text-base sm:text-lg md:text-xl font-semibold text-[#161513] dark:text-[#f4f1ea]">
          positive consumer feedback
        </span>
      </motion.div>

      {/* Metric 2: 13 platforms */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => triggerHapticTick('light')}
        className="flex items-baseline gap-3 sm:gap-4 flex-wrap group cursor-default"
      >
        <span className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#161513] dark:text-[#f4f1ea] group-hover:text-[#c83b2b] dark:group-hover:text-[#ff5442] transition-colors">
          {platformCount}
        </span>
        <span className="font-sans-swiss text-base sm:text-lg md:text-xl font-semibold text-[#161513] dark:text-[#f4f1ea]">
          platforms
        </span>
      </motion.div>

      {/* Metric 3: 6 countries */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => triggerHapticTick('light')}
        className="flex items-baseline gap-3 sm:gap-4 flex-wrap group cursor-default"
      >
        <span className="font-serif-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#161513] dark:text-[#f4f1ea] group-hover:text-[#c83b2b] dark:group-hover:text-[#ff5442] transition-colors">
          {countryCount}
        </span>
        <span className="font-sans-swiss text-base sm:text-lg md:text-xl font-semibold text-[#161513] dark:text-[#f4f1ea]">
          countries
        </span>
      </motion.div>
    </div>
  );
};
