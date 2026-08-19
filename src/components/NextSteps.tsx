import React from 'react';
import { motion } from 'motion/react';
import { NEXT_STEPS } from '../data/portfolioData';
import { Compass, Check } from 'lucide-react';

export const NextSteps: React.FC = () => {
  return (
    <section
      id="next-steps"
      aria-label="O que vem a seguir"
      className="relative py-20 sm:py-28 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#7C8793]/15"
    >
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#13171D] border border-[#F5F7FA]/10 rounded-xs p-8 sm:p-12 relative overflow-hidden shadow-2xl card-hover-refined"
      >
        {/* Subtle decorative background */}
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-[#D4A017]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0D0F12] border border-[#D4A017]/30 rounded-xs mb-4">
            <Compass className="w-3.5 h-3.5 text-[#D4A017]" />
            <span className="font-mono-tech text-[11px] text-[#D4A017] tracking-widest uppercase font-semibold">
              {NEXT_STEPS.number} — {NEXT_STEPS.sectionTitle}
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-display font-black text-3xl sm:text-4xl md:text-5xl text-[#F5F7FA] tracking-tight uppercase mb-8">
            {NEXT_STEPS.heading}
          </h2>

          {/* Three Key Action Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mb-10">
            {NEXT_STEPS.pillars.map((pillar, idx) => (
              <div
                key={idx}
                id={`next-step-pillar-${idx}`}
                className="p-5 bg-[#0D0F12] border border-[#F5F7FA]/10 rounded-xs flex items-center justify-center gap-3 text-center card-hover-refined hover:border-[#D4A017]/40"
              >
                <div className="w-5 h-5 rounded-full bg-[#D4A017]/10 border border-[#D4A017]/50 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[#D4A017]" />
                </div>
                <span className="font-display font-bold text-sm sm:text-base text-[#F5F7FA] uppercase tracking-wide">
                  {pillar}
                </span>
              </div>
            ))}
          </div>

          {/* Golden Highlighted Vision Statement */}
          <div className="bg-[#0D0F12]/80 border-l-2 border-[#D4A017] p-6 sm:p-8 rounded-xs text-left max-w-3xl card-hover-refined">
            <p className="text-base sm:text-lg md:text-xl text-[#F5F7FA] leading-relaxed font-light">
              "Quero descobrir como <span className="text-[#D4A017] font-medium">tecnologia</span>, <span className="text-[#D4A017] font-medium">dados</span> e <span className="text-[#D4A017] font-medium">Inteligência Artificial</span> podem se conectar ainda mais ao universo do <span className="text-[#D4A017] font-medium">esporte</span>."
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
