import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, GitBranch, Globe, Terminal, Palette, CheckCircle2 } from 'lucide-react';
import { SKILLS_DATA, SOFT_SKILLS } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);

  const getSkillIcon = (id: string) => {
    switch (id) {
      case 'ai-studio':
        return <Sparkles className="w-5 h-5" />;
      case 'github':
        return <GitBranch className="w-5 h-5" />;
      case 'vercel':
        return <Globe className="w-5 h-5" />;
      case 'prompt-eng':
        return <Terminal className="w-5 h-5" />;
      case 'design':
        return <Palette className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <section
      id="skills"
      aria-label="Habilidades Técnicas e Interpessoais"
      className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#7C8793]/15"
    >
      {/* Section Header */}
      <div className="flex flex-col mb-16 sm:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-3"
        >
          <span className="font-mono-tech text-xs tracking-widest text-[#D4A017] uppercase">
            03 — COMPETÊNCIAS REAIS
          </span>
          <div className="h-[1px] w-12 bg-[#D4A017]/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#F5F7FA] tracking-tight uppercase"
        >
          HABILIDADES
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm text-[#7C8793] mt-2 max-w-xl font-light"
        >
          Conhecimentos práticos e em desenvolvimento contínuo aplicados à criação de soluções digitais.
        </motion.p>
      </div>

      {/* Main Technical Skills Grid / List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {SKILLS_DATA.map((skill, index) => {
          const isSelected = activeSkillId === skill.id;
          return (
            <motion.div
              key={skill.id}
              id={`skill-card-${skill.id}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.85, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setActiveSkillId(skill.id)}
              onMouseLeave={() => setActiveSkillId(null)}
              onClick={() => setActiveSkillId(isSelected ? null : skill.id)}
              className={`group relative bg-[#13171D] border card-hover-refined rounded-xs p-6 sm:p-8 cursor-pointer flex flex-col justify-between overflow-hidden ${
                isSelected
                  ? 'border-[#D4A017] shadow-[0_0_25px_rgba(212,160,23,0.18)] -translate-y-1'
                  : 'border-[#F5F7FA]/10 hover:border-[#D4A017]/60 hover:-translate-y-1'
              }`}
            >
              {/* Subtle accent corner bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-[1.5px] transition-all duration-300 ease-cinematic ${
                  isSelected
                    ? 'bg-[#D4A017] opacity-100'
                    : 'bg-[#D4A017] opacity-0 group-hover:opacity-70'
                }`}
              />

              {/* Card Header: Number & Icon */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`font-mono-tech text-xs font-bold tracking-widest transition-colors duration-250 ease-micro ${
                      isSelected
                        ? 'text-[#D4A017]'
                        : 'text-[#7C8793] group-hover:text-[#D4A017]'
                    }`}
                  >
                    {skill.number}
                  </span>
                  
                  <div
                    className={`p-2.5 rounded-xs transition-colors duration-250 ease-micro ${
                      isSelected
                        ? 'bg-[#D4A017] text-[#0D0F12]'
                        : 'bg-[#0D0F12] text-[#7C8793] group-hover:text-[#D4A017] group-hover:border group-hover:border-[#D4A017]/40'
                    }`}
                  >
                    {getSkillIcon(skill.id)}
                  </div>
                </div>

                {/* Skill Title */}
                <h3 className="font-display font-bold text-lg sm:text-xl text-[#F5F7FA] tracking-wide uppercase mb-3 group-hover:text-[#D4A017] transition-colors duration-250 ease-micro">
                  {skill.title}
                </h3>

                {/* Skill Description */}
                <p className="text-[#7C8793] text-sm leading-relaxed font-light group-hover:text-[#F5F7FA]/90 transition-colors duration-250 ease-micro">
                  "{skill.description}"
                </p>
              </div>

              {/* Card Footer Micro indicator */}
              <div className="mt-8 pt-4 border-t border-[#F5F7FA]/5 flex items-center justify-between text-[11px] font-mono-tech text-[#7C8793]/70">
                <span>STATUS: ATIVO</span>
                <span className="text-[#D4A017] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  INTERAÇÃO →
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ALÉM DA TECNOLOGIA (Habilidades Interpessoais) */}
      <motion.div
        id="section-alem-da-tecnologia"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="bg-[#13171D]/80 border border-[#F5F7FA]/10 rounded-xs p-6 sm:p-8 backdrop-blur-sm card-hover-refined"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#7C8793]/15">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D4A017] rounded-full" />
            <h3 className="font-display font-bold text-base sm:text-lg text-[#F5F7FA] tracking-wider uppercase">
              ALÉM DA TECNOLOGIA
            </h3>
          </div>
          <span className="font-mono-tech text-xs text-[#7C8793] tracking-widest uppercase">
            ATRIBUTOS HUMANOS & CONDUTA
          </span>
        </div>

        {/* Soft Skills Badges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SOFT_SKILLS.map((soft, index) => (
            <div
              key={index}
              id={`soft-skill-${index}`}
              className="bg-[#0D0F12] border border-[#7C8793]/15 rounded-xs p-4 flex flex-col gap-2 hover:border-[#D4A017]/40 transition-colors"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4A017] shrink-0" />
                <span className="font-display font-semibold text-sm text-[#F5F7FA] uppercase tracking-wide">
                  {soft.title}
                </span>
              </div>
              {soft.description && (
                <span className="text-xs text-[#7C8793] font-light leading-snug pl-6">
                  {soft.description}
                </span>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
