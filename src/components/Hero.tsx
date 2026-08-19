import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section id="hero" aria-label="Apresentação Principal" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="relative z-10 w-full">
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="flex items-center gap-3 mb-8">
          <span className="font-mono-tech text-[10px] sm:text-xs tracking-[.28em] text-[#D4A017] uppercase">PORTFÓLIO // 2026</span>
          <div className="h-px w-10 bg-[#D4A017]/40" />
          <span className="font-mono-tech text-[10px] sm:text-xs tracking-wider text-[#7C8793] uppercase">BRASÍLIA, DF</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
          <div className="lg:col-span-8">
            <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .08 }} className="font-display text-2xl sm:text-3xl md:text-4xl text-[#7C8793] tracking-[.12em] uppercase mb-2">{PERSONAL_INFO.firstName}</motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .9, delay: .14 }} className="font-display font-black text-7xl sm:text-8xl md:text-9xl lg:text-[10.5rem] xl:text-[12rem] tracking-tighter text-[#F5F7FA] leading-[.78] uppercase">{PERSONAL_INFO.lastName}</motion.h1>
            <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: .9, delay: .3 }} className="w-32 sm:w-52 h-[2px] bg-[#D4A017] mt-8 origin-left" />
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .28 }} className="lg:col-span-4 lg:pb-2">
            <p className="font-mono-tech text-xs sm:text-sm text-[#D4A017] tracking-[.16em] uppercase leading-relaxed mb-5">{PERSONAL_INFO.subHeading}</p>
            <p className="text-lg sm:text-xl text-[#F5F7FA] leading-relaxed font-light mb-4">{PERSONAL_INFO.intro}</p>
            <p className="text-xs text-[#7C8793] font-mono-tech uppercase tracking-wider">{PERSONAL_INFO.currentRole}</p>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .8, delay: .48 }} className="mt-14 sm:mt-16 pt-7 border-t border-[#F5F7FA]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            <button onClick={() => scrollTo('projects')} className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#D4A017] text-[#0B0D0F] font-mono-tech font-bold text-xs uppercase tracking-widest rounded-sm hover:bg-[#E5B229] transition-colors">VER PROJETOS <ArrowDown className="w-4 h-4" /></button>
            <a href="https://github.com/caina-kng" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#F5F7FA]/15 text-[#F5F7FA] font-mono-tech text-xs uppercase tracking-widest rounded-sm hover:border-[#D4A017]/60 hover:text-[#D4A017] transition-colors">GITHUB <ArrowUpRight className="w-4 h-4" /></a>
          </div>
          <p className="max-w-sm text-sm text-[#7C8793] leading-relaxed">{PERSONAL_INFO.tagline}</p>
        </motion.div>
      </div>
    </section>
  );
};
