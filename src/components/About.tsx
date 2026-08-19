import React from 'react';
import { motion } from 'motion/react';
import { Shield, Activity, BarChart2, Cpu } from 'lucide-react';
import { ABOUT_TEXTS, PROFILE_FACTS } from '../data/portfolioData';

const icons = [Shield, Activity, BarChart2, Cpu];

export const About: React.FC = () => {
  return (
    <section id="about" aria-label="Sobre Mim" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#7C8793]/15">
      <div className="flex flex-col mb-14 sm:mb-20">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-3">
          <span className="font-mono-tech text-xs tracking-widest text-[#D4A017] uppercase">03 — TRAJETÓRIA & VISÃO</span>
          <div className="h-px w-12 bg-[#D4A017]/40" />
        </motion.div>
        <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#F5F7FA] tracking-tight uppercase">SOBRE MIM</motion.h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="lg:col-span-7">
          <p className="text-2xl sm:text-3xl md:text-4xl font-display font-medium text-[#F5F7FA] leading-tight border-l-2 border-[#D4A017] pl-5 mb-9">{ABOUT_TEXTS[0]}</p>
          <div className="space-y-6 max-w-2xl text-base sm:text-lg leading-relaxed font-light">
            <p className="text-[#9AA2AA]">{ABOUT_TEXTS[1]}</p>
            <p className="text-[#D7DADD]">{ABOUT_TEXTS[2]}</p>
            <p className="text-[#D4A017]">{ABOUT_TEXTS[3]}</p>
          </div>
          <div className="mt-12 pt-6 border-t border-[#F5F7FA]/10 flex flex-wrap gap-x-8 gap-y-3 font-mono-tech text-[10px] sm:text-xs uppercase tracking-widest text-[#7C8793]">
            <span>Brasília, DF</span><span>Basquete</span><span>Exército</span><span>Tecnologia</span><span>IA & Dados</span>
          </div>
        </motion.div>

        <motion.aside initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .12 }} className="lg:col-span-5 bg-[#111418] border border-[#F5F7FA]/10 p-7 sm:p-8 rounded-sm">
          <div className="flex items-center justify-between pb-5 mb-7 border-b border-[#F5F7FA]/10">
            <h3 className="font-display font-bold text-lg text-[#F5F7FA] uppercase tracking-wider">EM POUCAS LINHAS</h3>
            <span className="font-mono-tech text-[10px] text-[#D4A017] tracking-widest">JC / 2026</span>
          </div>
          <div className="space-y-7">
            {PROFILE_FACTS.map((fact, index) => {
              const Icon = icons[index] || Cpu;
              return <div key={fact.label} className="pb-6 border-b border-[#F5F7FA]/5 last:border-0 last:pb-0">
                <div className="flex items-center gap-2 mb-2"><Icon className="w-4 h-4 text-[#D4A017]" /><span className="font-mono-tech text-[10px] text-[#7C8793] tracking-widest uppercase">{fact.label}</span></div>
                <p className="text-sm font-semibold tracking-wide text-[#F5F7FA] uppercase mb-1">{fact.value}</p>
                {fact.subtext && <p className="text-xs text-[#7C8793] leading-relaxed">{fact.subtext}</p>}
              </div>;
            })}
          </div>
        </motion.aside>
      </div>
    </section>
  );
};
