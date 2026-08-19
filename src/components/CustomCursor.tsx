import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const rawMouseX = useMotionValue(-100);
  const rawMouseY = useMotionValue(-100);

  // Ultra-smooth spring physics for cinematic lag effect
  const springConfig = { damping: 30, stiffness: 350, mass: 0.4 };
  const smoothX = useSpring(rawMouseX, springConfig);
  const smoothY = useSpring(rawMouseY, springConfig);

  useEffect(() => {
    // Check if device has touch screen or pointer is coarse
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      rawMouseX.set(e.clientX);
      rawMouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('a, button, input, textarea, [role="button"], .card-hover-refined, select')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible, rawMouseX, rawMouseY]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer subtle ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#D4A017]/30 pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: isHovered ? -20 : -14,
          translateY: isHovered ? -20 : -14,
          width: isHovered ? 40 : 28,
          height: isHovered ? 40 : 28,
          backgroundColor: isHovered ? 'rgba(212, 160, 23, 0.06)' : 'transparent',
          borderColor: isHovered ? 'rgba(212, 160, 23, 0.6)' : 'rgba(212, 160, 23, 0.25)',
        }}
        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      />
      {/* Center pinpoint */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-[#D4A017] pointer-events-none"
        style={{
          x: rawMouseX,
          y: rawMouseY,
          translateX: -3,
          translateY: -3,
          scale: isHovered ? 0.7 : 1,
        }}
      />
    </div>
  );
};

