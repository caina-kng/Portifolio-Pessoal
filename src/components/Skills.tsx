import React from 'react';
import { motion } from 'motion/react';
import { Code2, Sparkles, Terminal, Palette, GitBranch, Globe, CheckCircle2 } from 'lucide-react';
import { SKILLS_DATA, SOFT_SKILLS } from '../data/portfolioData';

const skillIcons: Record<string, React.ReactNode> = {
  frontend: <Code2 className="w-5 h-5" />,
  'ai-studio': <Sparkles className="w-5 h-5" />,
  'prompt-eng': <Terminal className="w-5 h-5" />,
  design: <Palette className="w-5 h-5" />,
  github: <GitBranch className="w-5 h-5" />,
  vercel: <Globe className="w-5 h-5" />,
};

export const Skills: React.FC = () => (
  <section id="skills" aria-label="Stack e competências" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#7C8793]/15">
    <div className="mb-14 sm:mb-20">
      <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-3">
        <span className="font-mono-tech text-xs tracking-widest text-[#D4A017] uppercase">04 — STACK & COMPETÊNCIAS</span><div className="h-px w-12 bg-[#D4A017]/40" />
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#F5F7FA] tracking-tight uppercase">O QUE EU USO PARA CONSTRUIR</motion.h2>
      <p className="text-sm text-[#7C8793] mt-4 max-w-2xl leading-relaxed">Uma stack em evolução, apresentada pelo papel que cada competência desempenha no processo — da ideia à interface publicada.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#F5F7FA]/10 border border-[#F5F7FA]/10 mb-14">
      {SKILLS_DATA.map((skill, index) => <motion.div key={skill.id} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .05 }} className="group bg-[#0E1114] p-7 sm:p-8 min-h-[230px] flex flex-col justify-between hover:bg-[#12161A] transition-colors">
        <div className="flex items-start justify-between"><span className="font-mono-tech text-xs text-[#7C8793]">{skill.number}</span><div className="text-[#7C8793] group-hover:text-[#D4A017] transition-colors">{skillIcons[skill.id]}</div></div>
        <div className="mt-10"><h3 className="font-display font-bold text-xl text-[#F5F7FA] uppercase tracking-wide mb-3">{skill.title}</h3><p className="text-sm text-[#7C8793] leading-relaxed">{skill.description}</p></div>
      </motion.div>)}
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {SOFT_SKILLS.map((soft) => <div key={soft.title} className="border border-[#F5F7FA]/10 p-5 bg-[#111418]/60"><div className="flex items-center gap-2 mb-2"><CheckCircle2 className="w-4 h-4 text-[#D4A017]"/><span className="font-display font-semibold text-sm text-[#F5F7FA] uppercase">{soft.title}</span></div><p className="text-xs text-[#7C8793] leading-relaxed pl-6">{soft.description}</p></div>)}
    </div>
  </section>
);
