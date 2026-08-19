import React from 'react';
import { motion } from 'motion/react';

export const AbstractTacticalGraphic: React.FC = () => {
  return (
    <div
      id="tactical-matrix-visual"
      className="relative w-full aspect-square max-w-[420px] mx-auto rounded-sm border border-[#7C8793]/20 bg-[#13171D]/80 p-6 overflow-hidden flex items-center justify-center shadow-2xl"
    >
      {/* Background Coordinate grid texture */}
      <div className="absolute inset-0 bg-tactical-grid opacity-60" />

      {/* Technical corner coordinate badges */}
      <div className="absolute top-3 left-3 font-mono-tech text-[9px] text-[#7C8793]/60 tracking-widest">
        SYS.GEO // 15°47'S 47°52'W [BSB]
      </div>
      <div className="absolute top-3 right-3 font-mono-tech text-[9px] text-[#D4A017]/80 tracking-widest">
        DISCIPLINE::01
      </div>
      <div className="absolute bottom-3 left-3 font-mono-tech text-[9px] text-[#7C8793]/60 tracking-widest">
        METRICS::ANALYTICS
      </div>
      <div className="absolute bottom-3 right-3 font-mono-tech text-[9px] text-[#D4A017]/80 tracking-widest">
        STATUS // ACTIVE
      </div>

      {/* Center Tactical SVG Vector Matrix */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full relative z-10 select-none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Ring / Tactical Perimeter */}
        <circle
          cx="200"
          cy="200"
          r="160"
          stroke="#7C8793"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.3"
        />

        {/* Concentric Arc representing court/radar strategy */}
        <circle
          cx="200"
          cy="200"
          r="120"
          stroke="#D4A017"
          strokeWidth="1"
          strokeOpacity="0.4"
        />

        {/* 3-Point tactical arc representation (abstract) */}
        <path
          d="M 80 60 A 150 150 0 0 1 320 60"
          stroke="#7C8793"
          strokeWidth="1.5"
          strokeOpacity="0.35"
        />
        <path
          d="M 80 340 A 150 150 0 0 0 320 340"
          stroke="#7C8793"
          strokeWidth="1.5"
          strokeOpacity="0.35"
        />

        {/* Center Key Corridor / Golden Axis */}
        <line
          x1="200"
          y1="40"
          x2="200"
          y2="360"
          stroke="#D4A017"
          strokeWidth="1.5"
          strokeDasharray="8 4"
          strokeOpacity="0.6"
        />
        <line
          x1="40"
          y1="200"
          x2="360"
          y2="200"
          stroke="#7C8793"
          strokeWidth="1"
          strokeDasharray="2 4"
          strokeOpacity="0.3"
        />

        {/* Strategic Diamond / Node Geometry */}
        <polygon
          points="200,90 310,200 200,310 90,200"
          stroke="#D4A017"
          strokeWidth="1.2"
          strokeOpacity="0.3"
        />

        {/* Rotating subtle radar needle */}
        <motion.line
          x1="200"
          y1="200"
          x2="200"
          y2="55"
          stroke="#D4A017"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ rotate: 360 }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          style={{ originX: '200px', originY: '200px' }}
        />

        {/* Data Points / Pulsing Nodes */}
        {/* Node 1: Tactical top */}
        <circle cx="200" cy="90" r="4" fill="#D4A017" />
        <circle cx="200" cy="90" r="10" stroke="#D4A017" strokeWidth="1" strokeOpacity="0.4" />
        
        {/* Node 2: Analytics right */}
        <circle cx="310" cy="200" r="4" fill="#F5F7FA" />
        <circle cx="310" cy="200" r="8" stroke="#F5F7FA" strokeWidth="1" strokeOpacity="0.3" />

        {/* Node 3: Future bottom */}
        <circle cx="200" cy="310" r="4" fill="#D4A017" />
        
        {/* Node 4: Base left */}
        <circle cx="90" cy="200" r="4" fill="#7C8793" />

        {/* Central Core Point */}
        <circle cx="200" cy="200" r="6" fill="#D4A017" />
        <circle cx="200" cy="200" r="16" stroke="#D4A017" strokeWidth="1.5" strokeOpacity="0.5" />
        
        {/* Crosshair marks */}
        <path d="M 195 200 H 205 M 200 195 V 205" stroke="#0D0F12" strokeWidth="2" />

        {/* Micro coordinate typography within SVG */}
        <text x="210" y="85" fill="#D4A017" fontSize="8" fontFamily="monospace">PT_01::DISCIPLINE</text>
        <text x="210" y="195" fill="#F5F7FA" fontSize="8" fontFamily="monospace">NEXUS::EVOLUTION</text>
        <text x="210" y="325" fill="#D4A017" fontSize="8" fontFamily="monospace">OBJ::FUTURE</text>
      </svg>
    </div>
  );
};
