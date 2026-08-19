import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Github, Layers3 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" aria-label="Projetos selecionados" className="relative py-24 sm:py-32 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-[#7C8793]/15">
      <div className="mb-14 sm:mb-20">
        <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-3 mb-3">
          <span className="font-mono-tech text-xs tracking-widest text-[#D4A017] uppercase">02 — TRABALHO SELECIONADO</span>
          <div className="h-px w-12 bg-[#D4A017]/40" />
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .08 }} className="grid lg:grid-cols-2 gap-6 items-end">
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-[#F5F7FA] tracking-tight uppercase">PROJETOS</h2>
          <p className="text-[#7C8793] text-sm sm:text-base leading-relaxed lg:justify-self-end lg:max-w-md">Mais do que listar ferramentas, esta área mostra onde aprendizado, repertório e execução se encontram.</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {PROJECTS_DATA.map((project, index) => {
          const featured = index === 0;
          return (
            <motion.article key={project.id} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: .75, delay: index * .08 }} className={`${featured ? 'lg:col-span-12 min-h-[420px]' : 'lg:col-span-6 min-h-[350px]'} group relative overflow-hidden bg-[#111418] border border-[#F5F7FA]/10 hover:border-[#D4A017]/50 rounded-sm p-7 sm:p-9 transition-colors flex flex-col justify-between`}>
              <div className="absolute inset-0 pointer-events-none opacity-60">
                <div className="absolute -right-20 -top-20 w-72 h-72 border border-[#D4A017]/10 rounded-full" />
                <div className="absolute -right-8 -top-8 w-44 h-44 border border-[#F5F7FA]/5 rounded-full" />
              </div>

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4 mb-14">
                  <div>
                    <span className="font-mono-tech text-[10px] sm:text-xs tracking-[.22em] text-[#D4A017] uppercase">{project.number} / {project.eyebrow}</span>
                    <p className="font-mono-tech text-[10px] tracking-widest text-[#7C8793] mt-2 uppercase">{project.status}</p>
                  </div>
                  <Layers3 className="w-5 h-5 text-[#7C8793] group-hover:text-[#D4A017] transition-colors" />
                </div>

                <h3 className={`${featured ? 'text-4xl sm:text-6xl md:text-7xl' : 'text-3xl sm:text-4xl'} font-display font-black text-[#F5F7FA] tracking-tight uppercase mb-5`}>{project.title}</h3>
                <p className={`${featured ? 'max-w-2xl text-base sm:text-lg' : 'max-w-xl text-sm sm:text-base'} text-[#9AA2AA] leading-relaxed`}>{project.description}</p>
              </div>

              <div className="relative z-10 mt-10 pt-6 border-t border-[#F5F7FA]/10 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="px-3 py-1.5 border border-[#F5F7FA]/10 bg-[#0B0D0F] text-[10px] font-mono-tech tracking-wider text-[#B4BAC0] uppercase">{item}</span>)}
                </div>
                <div className="flex items-center gap-4">
                  {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#F5F7FA] hover:text-[#D4A017] uppercase tracking-wider"><Github className="w-4 h-4" /> GitHub</a>}
                  {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-mono-tech text-[#D4A017] uppercase tracking-wider">Ver projeto <ArrowUpRight className="w-4 h-4" /></a>}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
