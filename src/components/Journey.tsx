import React from 'react';
import { motion } from 'motion/react';
import { JOURNEY_STEPS } from '../data/portfolioData';
import { ConnectionMatrix } from './ConnectionMatrix';

export const Journey: React.FC = () => {
  return (
    <section
      id="journey"
      aria-label="Minha Jornada"
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
            04 — LINHA DO TEMPO & EVOLUÇÃO
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
          MINHA JORNADA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="text-sm text-[#7C8793] mt-2 max-w-xl font-light"
        >
          Uma rota contínua de disciplina, aprendizado aplicado e expansão de horizontes.
        </motion.p>
      </div>

      {/* Vertical Interactive Timeline with Progressive Line Growth */}
      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-10 space-y-12 my-8">
        {/* Track Line Background & Animated Fill */}
        <div className="absolute left-0 top-3 bottom-3 w-[1.5px] bg-[#7C8793]/15">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-full bg-gradient-to-b from-[#D4A017] via-[#D4A017]/60 to-[#D4A017]/20 origin-top"
          />
        </div>

        {JOURNEY_STEPS.map((step, index) => {
          const isCurrent = step.number === '04'; // Exército atual
          const isFuture = step.number === '07'; // Futuro

          return (
            <motion.div
              key={step.id}
              id={`journey-step-${step.id}`}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.85, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="relative group"
            >
              {/* Timeline Golden Node on the line */}
              <div
                className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300 ease-cinematic ${
                  isCurrent
                    ? 'bg-[#D4A017] border-[#F5F7FA] shadow-[0_0_10px_#D4A017] scale-110'
                    : isFuture
                    ? 'bg-[#13171D] border-[#D4A017]'
                    : 'bg-[#0D0F12] border-[#7C8793]/50 group-hover:border-[#D4A017] group-hover:bg-[#D4A017]/80'
                }`}
              />

              {/* Step Card Container */}
              <div
                className={`p-6 sm:p-8 rounded-xs border card-hover-refined ${
                  isCurrent
                    ? 'bg-[#13171D] border-[#D4A017]/50 shadow-lg'
                    : isFuture
                    ? 'bg-[#13171D]/90 border-[#D4A017]/80'
                    : 'bg-[#13171D]/40 border-[#F5F7FA]/10 hover:border-[#F5F7FA]/25 hover:bg-[#13171D]/70'
                }`}
              >
                {/* Meta header */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-tech text-xs font-bold text-[#D4A017] tracking-widest">
                      {step.number} // ETAPA
                    </span>
                    <span className="font-mono-tech text-[10px] uppercase tracking-wider text-[#7C8793] bg-[#0D0F12] px-2 py-0.5 rounded-xs border border-[#7C8793]/20">
                      {step.tag}
                    </span>
                  </div>

                  {isCurrent && (
                    <span className="font-mono-tech text-[10px] text-[#0D0F12] bg-[#D4A017] px-2 py-0.5 font-bold uppercase tracking-wider rounded-xs">
                      ATUAÇÃO ATUAL
                    </span>
                  )}

                  {isFuture && (
                    <span className="font-mono-tech text-[10px] text-[#D4A017] border border-[#D4A017] px-2 py-0.5 uppercase tracking-wider rounded-xs">
                      VISÃO DE FUTURO
                    </span>
                  )}
                </div>

                {/* Step Title */}
                <h3 className="font-display font-black text-xl sm:text-2xl text-[#F5F7FA] tracking-wide uppercase mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[#7C8793] text-sm sm:text-base leading-relaxed font-light">
                  "{step.description}"
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* The Visual Connection Matrix */}
      <ConnectionMatrix />
    </section>
  );
};
