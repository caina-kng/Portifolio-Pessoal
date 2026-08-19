import React from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { NAVIGATION_ITEMS } from '../data/portfolioData';

interface SideProgressProps {
  activeSection: string;
}

export const SideProgress: React.FC<SideProgressProps> = ({ activeSection }) => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 30,
    restDelta: 0.001,
  });

  const handlePointClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      id="side-progress-spine"
      aria-hidden="true"
      className="hidden xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center select-none pointer-events-auto"
    >
      {/* Top Coordinate marker */}
      <span className="font-mono-tech text-[9px] text-[#7C8793]/60 mb-3 tracking-widest">
        01
      </span>

      {/* Progress Track Container */}
      <div className="relative w-[1.5px] h-48 bg-[#7C8793]/15 rounded-full flex items-center justify-center">
        {/* Dynamic Golden Fill with gentle glow */}
        <motion.div
          className="absolute top-0 w-full bg-[#D4A017] rounded-full origin-top"
          style={{ scaleY, height: '100%' }}
        />

        {/* Section nodes along the spine */}
        <div className="absolute inset-0 flex flex-col justify-between items-center py-1">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`spine-node-${item.id}`}
                onClick={() => handlePointClick(item.href)}
                title={item.label}
                aria-label={`Ir para ${item.label}`}
                className="group relative -mx-2 p-1.5 flex items-center focus:outline-none"
              >
                {/* Node point with natural smooth transition */}
                <div
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ease-cinematic ${
                    isActive
                      ? 'bg-[#D4A017] scale-125 ring-2 ring-[#D4A017]/30 opacity-100'
                      : 'bg-[#7C8793]/40 opacity-60 hover:opacity-90 hover:bg-[#D4A017]/80'
                  }`}
                />

                {/* Hover Label to the left */}
                <span className="absolute right-6 opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 ease-cinematic pointer-events-none whitespace-nowrap font-mono-tech text-[10px] uppercase tracking-wider text-[#F5F7FA] bg-[#13171D] px-2.5 py-1 border border-[#F5F7FA]/10 rounded-xs shadow-md">
                  {item.number} • {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Coordinate marker */}
      <span className="font-mono-tech text-[9px] text-[#7C8793]/60 mt-3 tracking-widest">
        05
      </span>
    </aside>
  );
};
