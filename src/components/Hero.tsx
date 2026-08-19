import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      aria-label="Apresentação Principal"
      className="relative min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      <div className="relative z-10 flex flex-col items-start w-full max-w-4xl">
        {/* Editorial Top Identification */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 sm:mb-6"
        >
          <span className="font-mono-tech text-xs tracking-[0.3em] text-[#8C949D] uppercase">
            PORTFÓLIO PESSOAL // 2026
          </span>
        </motion.div>

        {/* 01. NAME COMPOSITION — High-Contrast Editorial Hierarchy */}
        <div className="relative select-none w-full mb-6 sm:mb-8">
          <div className="flex flex-col items-start">
            {/* JOÃO — Introdução elegante (mais leve e claramente legível) */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="font-display font-medium text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0.2em] sm:tracking-[0.25em] text-[#8C949D] uppercase leading-none">
                {PERSONAL_INFO.firstName}
              </h2>
            </motion.div>

            {/* CAINÃ — Protagonista Visual Supremo (grande, forte, dominante) */}
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mt-1 sm:mt-2"
            >
              <h1 className="font-display font-black text-6xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[12rem] tracking-tight sm:tracking-tighter text-[#F5F5F5] leading-[0.82] uppercase">
                {PERSONAL_INFO.lastName}
              </h1>
            </motion.div>
          </div>

          {/* 02. GOLDEN SIGNATURE LINE — Fine, precise, 120px to 220px */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="w-32 sm:w-44 md:w-52 h-[1.5px] bg-[#D4A017] mt-6 sm:mt-8 origin-left"
          />
        </div>

        {/* 03. PRIMARY INFORMATIONS — Clear, Elegant & Objective */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-2.5 mb-8 sm:mb-10"
        >
          <div className="flex items-center gap-3">
            <span className="font-display font-semibold text-sm sm:text-base md:text-lg tracking-wider text-[#F5F5F5] uppercase">
              MILITAR DO EXÉRCITO BRASILEIRO
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs sm:text-sm font-mono-tech text-[#8C949D] tracking-wide">
            <span>Tecnologia • Inteligência Artificial</span>
            <span className="hidden sm:inline text-[#D4A017]/50">•</span>
            <span>Esporte • Dados</span>
          </div>
        </motion.div>

        {/* 04. CARD "TRAJETÓRIA" — Minimalist, Sophisticated & Spacious */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl mb-10 sm:mb-12"
        >
          <div className="relative p-6 sm:p-8 bg-[#121519]/90 border border-[#F5F5F5]/10 rounded-sm card-hover-refined backdrop-blur-xs">
            {/* Subtle Gold Accent on Left Border */}
            <div className="absolute left-0 top-6 bottom-6 w-[2px] bg-[#D4A017] rounded-full" />

            <div className="pl-3 sm:pl-4">
              <span className="block font-mono-tech text-[10px] sm:text-xs text-[#D4A017] uppercase tracking-[0.25em] mb-3">
                TRAJETÓRIA
              </span>
              <p className="font-display text-lg sm:text-xl md:text-2xl text-[#F5F5F5] font-medium leading-relaxed tracking-tight">
                "Disciplina para evoluir.<br className="hidden sm:block" />
                Curiosidade para construir."
              </p>
            </div>
          </div>
        </motion.div>

        {/* 05. ACTIONS — Gold Button & Smooth Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-row items-center justify-between sm:justify-start gap-6 sm:gap-12 w-full max-w-2xl"
        >
          {/* Main Gold Action Button */}
          <button
            id="hero-btn-explore"
            type="button"
            onClick={() => handleScrollToSection('about')}
            className="btn-refined inline-flex items-center justify-center px-7 py-3.5 sm:px-8 sm:py-4 bg-[#D4A017] text-[#0B0D0F] font-mono-tech font-bold text-xs sm:text-sm uppercase tracking-widest rounded-sm hover:bg-[#E5B229] focus:outline-none focus:ring-1 focus:ring-[#D4A017]"
          >
            <span>EXPLORAR TRAJETÓRIA</span>
          </button>

          {/* Discreet Scroll Indicator */}
          <button
            id="hero-scroll-indicator"
            type="button"
            onClick={() => handleScrollToSection('about')}
            className="group inline-flex items-center gap-2 text-xs font-mono-tech text-[#8C949D] hover:text-[#F5F5F5] transition-colors focus:outline-none cursor-pointer select-none"
          >
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-[#D4A017]" />
            </motion.div>
            <span className="tracking-widest uppercase">ROLAR</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
