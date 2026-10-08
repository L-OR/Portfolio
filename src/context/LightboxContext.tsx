import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { triggerHapticTick } from '../utils/haptics';

interface LightboxContextType {
  openLightbox: (src: string, alt?: string) => void;
  closeLightbox: () => void;
}

const LightboxContext = createContext<LightboxContextType | undefined>(undefined);

export const LightboxProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeImage, setActiveImage] = useState<{ src: string; alt?: string } | null>(null);
  const [scale, setScale] = useState<number>(1);
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  // Touch gesture tracker ref for 2-finger pinch-to-zoom and 1-finger pan
  const touchTracker = useRef<{
    initialDist: number;
    initialScale: number;
    initialCenter: { x: number; y: number };
    initialPos: { x: number; y: number };
    lastTouch: { x: number; y: number };
    lastTapTime: number;
    isPinching: boolean;
    isPanning: boolean;
  }>({
    initialDist: 0,
    initialScale: 1,
    initialCenter: { x: 0, y: 0 },
    initialPos: { x: 0, y: 0 },
    lastTouch: { x: 0, y: 0 },
    lastTapTime: 0,
    isPinching: false,
    isPanning: false,
  });

  const openLightbox = useCallback((src: string, alt?: string) => {
    triggerHapticTick('light');
    setActiveImage({ src, alt });
    setScale(1);
    setPosition({ x: 0, y: 0 });
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    triggerHapticTick('light');
    setActiveImage(null);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    document.body.style.overflow = '';
  }, []);

  // Keyboard navigation (Escape to close, + / - to zoom)
  useEffect(() => {
    if (!activeImage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === '+' || e.key === '=') {
        handleZoomIn();
      } else if (e.key === '-' || e.key === '_') {
        handleZoomOut();
      } else if (e.key === '0') {
        handleResetZoom();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImage, closeLightbox]);

  const handleZoomIn = () => {
    triggerHapticTick('light');
    setScale((prev) => Math.min(prev + 0.5, 4.5));
  };

  const handleZoomOut = () => {
    triggerHapticTick('light');
    setScale((prev) => {
      const next = Math.max(prev - 0.5, 1);
      if (next === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return next;
    });
  };

  const handleResetZoom = () => {
    triggerHapticTick('light');
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleToggleZoom = (e: React.MouseEvent) => {
    // If not dragging, toggle zoom
    if (scale > 1) {
      handleResetZoom();
    } else {
      triggerHapticTick('light');
      setScale(2);
    }
  };

  // Mouse wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    setScale((prev) => {
      const next = Math.min(Math.max(prev + delta, 1), 4.5);
      if (next === 1) {
        setPosition({ x: 0, y: 0 });
      }
      return Number(next.toFixed(2));
    });
  };

  // Mouse drag handlers for panning when zoomed in
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch gesture handlers (2-finger pinch zoom, 1-finger pan, double-tap zoom)
  const getTouchDistance = (t1: React.Touch, t2: React.Touch) => {
    return Math.hypot(t2.clientX - t1.clientX, t2.clientY - t1.clientY);
  };

  const getTouchCenter = (t1: React.Touch, t2: React.Touch) => {
    return {
      x: (t1.clientX + t2.clientX) / 2,
      y: (t1.clientY + t2.clientY) / 2,
    };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      // 2-finger pinch-to-zoom start
      const dist = getTouchDistance(e.touches[0], e.touches[1]);
      const center = getTouchCenter(e.touches[0], e.touches[1]);
      touchTracker.current.initialDist = dist;
      touchTracker.current.initialScale = scale;
      touchTracker.current.initialCenter = center;
      touchTracker.current.initialPos = { ...position };
      touchTracker.current.isPinching = true;
      touchTracker.current.isPanning = false;
    } else if (e.touches.length === 1) {
      // 1-finger touch: check double-tap
      const now = Date.now();
      if (now - touchTracker.current.lastTapTime < 300) {
        // Double-tap detected
        if (scale > 1) {
          handleResetZoom();
        } else {
          triggerHapticTick('light');
          setScale(2.5);
        }
        touchTracker.current.lastTapTime = 0;
        return;
      }
      touchTracker.current.lastTapTime = now;

      if (scale > 1) {
        touchTracker.current.isPanning = true;
        touchTracker.current.lastTouch = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
        };
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchTracker.current.isPinching) {
      if (e.cancelable) e.preventDefault();

      const currentDist = getTouchDistance(e.touches[0], e.touches[1]);
      if (touchTracker.current.initialDist > 0) {
        const factor = currentDist / touchTracker.current.initialDist;
        const newScale = Math.min(Math.max(touchTracker.current.initialScale * factor, 0.9), 4.5);
        setScale(Number(newScale.toFixed(2)));

        // Follow pinch midpoint
        const currentCenter = getTouchCenter(e.touches[0], e.touches[1]);
        const deltaX = currentCenter.x - touchTracker.current.initialCenter.x;
        const deltaY = currentCenter.y - touchTracker.current.initialCenter.y;
        setPosition({
          x: touchTracker.current.initialPos.x + deltaX,
          y: touchTracker.current.initialPos.y + deltaY,
        });
      }
    } else if (e.touches.length === 1 && touchTracker.current.isPanning && scale > 1) {
      if (e.cancelable) e.preventDefault();
      const currentX = e.touches[0].clientX;
      const currentY = e.touches[0].clientY;
      const deltaX = currentX - touchTracker.current.lastTouch.x;
      const deltaY = currentY - touchTracker.current.lastTouch.y;
      touchTracker.current.lastTouch = { x: currentX, y: currentY };

      setPosition((prev) => ({
        x: prev.x + deltaX,
        y: prev.y + deltaY,
      }));
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (e.touches.length < 2) {
      touchTracker.current.isPinching = false;
      // Gently snap back if pinched smaller than 1x
      if (scale < 1) {
        setScale(1);
        setPosition({ x: 0, y: 0 });
      }
    }
    if (e.touches.length === 0) {
      touchTracker.current.isPanning = false;
      if (scale <= 1) {
        setPosition({ x: 0, y: 0 });
      }
    }
  };

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[999] bg-[#0c0b0a]/95 backdrop-blur-md flex flex-col justify-between select-none overflow-hidden touch-none"
            onWheel={handleWheel}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            {/* Top Bar: Caption + Cross (Exit) button */}
            <div className="relative z-20 flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#0c0b0a]/80 backdrop-blur-xs">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-[#c83b2b] dark:bg-[#ff5442]" />
                <span className="font-mono-tech text-xs tracking-wider text-white/80 uppercase font-medium truncate max-w-[280px] sm:max-w-md">
                  {activeImage.alt || 'Full View Artifact'}
                </span>
              </div>

              {/* Cross (Exit) Button */}
              <button
                type="button"
                id="lightbox-close-button"
                onClick={closeLightbox}
                className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all cursor-pointer font-mono-tech text-xs uppercase tracking-wider"
                aria-label="Exit fullscreen mode"
              >
                <span className="text-[11px] font-semibold text-white/70 group-hover:text-white transition-colors">
                  Exit
                </span>
                <svg
                  className="w-4 h-4 text-white group-hover:rotate-90 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main Stage: Zoomable & Pannable Image with full touch gesture support */}
            <div
              className={`relative flex-1 flex items-center justify-center p-4 sm:p-8 overflow-hidden touch-none ${
                scale > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-zoom-in'
              }`}
              onClick={(e) => {
                if (e.target === e.currentTarget && scale === 1) {
                  closeLightbox();
                }
              }}
            >
              <div
                style={{
                  transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                  transition: isDragging || touchTracker.current.isPinching || touchTracker.current.isPanning ? 'none' : 'transform 0.15s ease-out',
                  touchAction: 'none',
                }}
                className="max-w-full max-h-full flex items-center justify-center select-none"
                onMouseDown={handleMouseDown}
                onDoubleClick={handleToggleZoom}
              >
                <img
                  src={activeImage.src}
                  alt={activeImage.alt || 'Artifact detail view'}
                  referrerPolicy="no-referrer"
                  className="max-h-[82vh] max-w-[92vw] object-contain rounded-lg shadow-2xl pointer-events-auto select-none"
                  draggable={false}
                />
              </div>
            </div>

            {/* Bottom Floating Bar: Zoom in, Zoom out, Reset & Level */}
            <div className="relative z-20 flex items-center justify-between px-6 py-3.5 border-t border-white/10 bg-[#0c0b0a]/80 backdrop-blur-xs font-mono-tech text-xs text-white/80">
              <span className="hidden sm:inline text-white/50 text-[11px]">
                {scale > 1 ? 'Drag to pan · Pinch or scroll to zoom' : 'Pinch or double-tap to zoom'}
              </span>

              {/* Controls Toolbar */}
              <div className="flex items-center gap-2 mx-auto sm:mx-0">
                {/* Zoom Out (−) */}
                <button
                  type="button"
                  id="lightbox-zoom-out"
                  onClick={handleZoomOut}
                  disabled={scale <= 1}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer disabled:cursor-not-allowed border border-white/15"
                  aria-label="Zoom out"
                >
                  <span className="text-base font-bold leading-none">−</span>
                </button>

                {/* Current Zoom Percentage Pill */}
                <button
                  type="button"
                  id="lightbox-reset-zoom"
                  onClick={handleResetZoom}
                  className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 transition-all text-[11px] font-semibold cursor-pointer"
                  title="Reset zoom to 100%"
                >
                  {Math.round(scale * 100)}%
                </button>

                {/* Zoom In (+) */}
                <button
                  type="button"
                  id="lightbox-zoom-in"
                  onClick={handleZoomIn}
                  disabled={scale >= 4.5}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer disabled:cursor-not-allowed border border-white/15"
                  aria-label="Zoom in"
                >
                  <span className="text-base font-bold leading-none">+</span>
                </button>
              </div>

              <span className="text-white/50 text-[11px]">
                ESC TO EXIT
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
};

export const useLightbox = (): LightboxContextType => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};

