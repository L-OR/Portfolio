import React, { useEffect, useState, useRef } from 'react';

interface CreativeProcessThreadProps {
  stepCount: number;
  containerRef: React.RefObject<HTMLDivElement | null>;
  stepRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  headerRef?: React.RefObject<HTMLDivElement | null>;
  bottomCtaRef?: React.RefObject<HTMLDivElement | null>;
}

interface NodePoint {
  x: number;
  y: number;
  radius: number;
  stepNumber: string;
}

export const CreativeProcessThread: React.FC<CreativeProcessThreadProps> = ({
  stepCount,
  containerRef,
  stepRefs,
  headerRef,
  bottomCtaRef,
}) => {
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({
    width: 1000,
    height: 1600,
  });
  const [nodes, setNodes] = useState<NodePoint[]>([]);
  const [headerY, setHeaderY] = useState<number>(48);
  const [bottomPoint, setBottomPoint] = useState<{ x: number; y: number } | null>(null);

  // Recalculate node coordinates based on actual DOM elements within the container
  const updateLayout = () => {
    if (!containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    if (width === 0 || height === 0) return;

    const isDesktop = width >= 1024;
    const isTablet = width >= 640 && width < 1024;

    // Calculate exact Y position of the gray horizontal line under the title
    let calculatedHeaderY = 48;
    if (headerRef?.current) {
      const headerRect = headerRef.current.getBoundingClientRect();
      calculatedHeaderY = Math.max(0, headerRect.bottom - containerRect.top);
    }

    const calculatedNodes: NodePoint[] = [];

    for (let i = 0; i < stepCount; i++) {
      const el = stepRefs.current[i];
      const stepNum = (i + 1).toString().padStart(2, '0');

      if (el) {
        const elRect = el.getBoundingClientRect();
        const relativeY = elRect.top - containerRect.top + elRect.height / 2;

        let relativeX: number;
        if (isDesktop) {
          // On desktop, align with alternating left (22%) and right (78%) columns
          const isEven = i % 2 === 0;
          relativeX = isEven ? width * 0.22 : width * 0.78;
        } else if (isTablet) {
          const isEven = i % 2 === 0;
          relativeX = isEven ? width * 0.28 : width * 0.72;
        } else {
          // On mobile, create a soft graceful wave passing through the blocks
          const isEven = i % 2 === 0;
          relativeX = isEven ? width * 0.2 : width * 0.8;
        }

        const discRadius = isDesktop ? 68 : isTablet ? 54 : 42;

        calculatedNodes.push({
          x: relativeX,
          y: relativeY,
          radius: discRadius,
          stepNumber: stepNum,
        });
      } else {
        // Fallback mathematical distribution if DOM nodes aren't mounted yet
        const relativeY = (height / (stepCount + 1)) * (i + 1);
        const isEven = i % 2 === 0;
        const relativeX = isDesktop
          ? isEven
            ? width * 0.22
            : width * 0.78
          : isEven
          ? width * 0.22
          : width * 0.78;

        calculatedNodes.push({
          x: relativeX,
          y: relativeY,
          radius: isDesktop ? 68 : 46,
          stepNumber: stepNum,
        });
      }
    }

    // Calculate Bottom CTA anchor point
    let ctaPoint: { x: number; y: number } | null = null;
    if (bottomCtaRef?.current) {
      const ctaRect = bottomCtaRef.current.getBoundingClientRect();
      ctaPoint = {
        x: ctaRect.left - containerRect.left + ctaRect.width / 2,
        y: ctaRect.top - containerRect.top + 30,
      };
    } else {
      ctaPoint = {
        x: width / 2,
        y: height - 40,
      };
    }

    setDimensions({ width, height });
    setHeaderY(calculatedHeaderY);
    setNodes(calculatedNodes);
    setBottomPoint(ctaPoint);
  };

  useEffect(() => {
    updateLayout();

    // ResizeObserver for dynamic, responsive updates
    if (!containerRef.current) return;
    const observer = new ResizeObserver(() => {
      updateLayout();
    });

    observer.observe(containerRef.current);
    window.addEventListener('resize', updateLayout);

    // Minor delay to ensure all child components and fonts have laid out
    const timeout = setTimeout(updateLayout, 150);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateLayout);
      clearTimeout(timeout);
    };
  }, [stepCount, containerRef]);

  // Construct continuous winding S-curve SVG path passing through all nodes
  const buildThreadPath = (): string => {
    if (nodes.length === 0) return '';

    const firstNode = nodes[0];
    const topEntryX = firstNode.x;
    const topEntryY = headerY; // Start strictly at the gray horizontal line under the title

    let path = `M ${topEntryX} ${topEntryY}`;

    // 1. Line from gray header line down to first node
    path += ` L ${firstNode.x} ${firstNode.y}`;

    // 2. Smooth S-curves weaving chronologically from node to node
    for (let i = 0; i < nodes.length - 1; i++) {
      const current = nodes[i];
      const next = nodes[i + 1];

      const midY = (current.y + next.y) / 2;
      const dx = next.x - current.x;

      // Cubic Bézier control points creating a graceful serpentine wave
      const cp1X = current.x + dx * 0.15;
      const cp1Y = midY;
      const cp2X = next.x - dx * 0.15;
      const cp2Y = midY;

      path += ` C ${cp1X} ${cp1Y}, ${cp2X} ${cp2Y}, ${next.x} ${next.y}`;
    }

    // 3. Winding down to the bottom CTA / terminal milestone
    if (bottomPoint && nodes.length > 0) {
      const lastNode = nodes[nodes.length - 1];
      const midY = (lastNode.y + bottomPoint.y) / 2;
      const dx = bottomPoint.x - lastNode.x;

      path += ` C ${lastNode.x + dx * 0.1} ${midY}, ${bottomPoint.x - dx * 0.1} ${midY}, ${bottomPoint.x} ${bottomPoint.y}`;
    }

    return path;
  };

  const pathD = buildThreadPath();

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-0 overflow-visible select-none"
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle gradient along the thread line */}
          <linearGradient id="thread-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c83b2b" stopOpacity="0.18" />
            <stop offset="15%" stopColor="#c83b2b" stopOpacity="0.32" />
            <stop offset="85%" stopColor="#c83b2b" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#c83b2b" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        {/* Continuous Creative Process Thread Line (Low opacity red, waving from phase to phase) */}
        {pathD && (
          <>
            {/* Soft background glow line */}
            <path
              d={pathD}
              stroke="#c83b2b"
              strokeWidth="6"
              strokeOpacity="0.07"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Primary crisp thread line */}
            <path
              d={pathD}
              stroke="url(#thread-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Subtle dashed cadence line */}
            <path
              d={pathD}
              stroke="#c83b2b"
              strokeWidth="1"
              strokeDasharray="4 8"
              strokeOpacity="0.25"
            />
          </>
        )}
      </svg>
    </div>
  );
};
