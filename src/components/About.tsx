import React from 'react';
import { motion } from 'motion/react';
import { User, Shield, Activity, BarChart2, Cpu, Camera } from 'lucide-react';
import { ABOUT_TEXTS, PROFILE_FACTS, PERSONAL_INFO } from '../data/portfolioData';
import { AbstractTacticalGraphic } from './AbstractTacticalGraphic';

export const About: React.FC = () => {
  const getFactIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Shield className="w-4 h-4 text-[#D4A017]" />;
      case 1:
        return <Activity className="w-4 h-4 text-[#D4A017]" />;
      case 2:
        return <BarChart2 className="w-4 h-4 text-[#D4A017]" />;
      case 3:
        return <Cpu className="w-4 h-4 text-[#D4A017]" />;
      default:
        return <User className="w-4 h-4 text-[#D4A017]" />;
    }
  };

  return (
    <section
      id="about"
      aria-label="Sobre Mim"
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
            02 — BIOGRAFIA & VISÃO
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
          SOBRE MIM
        </motion.h2>
      </div>

      {/* Main 2-Column Editorial Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Human Narrative & Photo Frame */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 flex flex-col gap-8"
        >
          {/* Paragraphs with editorial typography */}
          <div className="space-y-6 text-[#F5F7FA]/90 text-base sm:text-lg leading-relaxed font-light">
            <p className="text-xl sm:text-2xl font-normal text-[#F5F7FA] leading-snug border-l-2 border-[#D4A017] pl-4">
              {ABOUT_TEXTS[0]}
            </p>
            
            <p className="text-[#7C8793] leading-relaxed">
              {ABOUT_TEXTS[1]}
            </p>
            
            <p className="text-[#F5F7FA] leading-relaxed">
              {ABOUT_TEXTS[2]}
            </p>
            
            <p className="text-[#D4A017] font-medium leading-relaxed bg-[#D4A017]/5 p-5 border border-[#D4A017]/20 rounded-xs">
              "{ABOUT_TEXTS[3]}"
            </p>
          </div>

          {/* Reserved Photo Space Placeholder */}
          <div
            id="photo-placeholder-frame"
            className="relative rounded-sm border border-dashed border-[#7C8793]/40 bg-[#13171D]/60 p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 mt-4 hover:border-[#D4A017]/60 transition-colors duration-300 ease-cinematic"
          >
            {PERSONAL_INFO.photoUrl ? (
              <img
                src={PERSONAL_INFO.photoUrl}
                alt="Fotografia de João Cainã"
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-xs object-cover border border-[#D4A017]/40"
              />
            ) : (
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xs bg-[#0D0F12] border border-[#7C8793]/30 flex flex-col items-center justify-center text-[#7C8793] shrink-0">
                <Camera className="w-7 h-7 text-[#D4A017]/70 mb-1" />
                <span className="font-mono-tech text-[9px] text-[#7C8793]">FOTO</span>
              </div>
            )}

            <div className="flex flex-col text-center sm:text-left">
              <span className="font-mono-tech text-xs tracking-widest text-[#D4A017] uppercase font-semibold">
                ESPAÇO RESERVADO PARA FOTO DE JOÃO CAINÃ
              </span>
              <p className="text-xs text-[#7C8793] mt-1 leading-relaxed">
                Área preparada para inclusão de fotografia pessoal. Para adicionar sua foto, basta inserir o arquivo na pasta <code className="text-[#F5F7FA] font-mono-tech">/public/</code> e atualizar a constante <code className="text-[#D4A017] font-mono-tech">photoUrl</code> no arquivo de dados.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: PERFIL Panel & Tactical Matrix Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.985 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          {/* Profile Card */}
          <div
            id="panel-perfil"
            className="bg-[#13171D] border border-[#F5F7FA]/10 rounded-xs p-6 sm:p-8 shadow-xl relative overflow-hidden backdrop-blur-sm card-hover-refined"
          >
            {/* Corner precision mark from Elegant Dark theme */}
            <div className="absolute top-0 right-0 p-2">
              <div className="w-2 h-2 border-t border-r border-[#D4A017]" />
            </div>
            
            <div className="flex items-center justify-between border-b border-[#F5F7FA]/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#D4A017] rounded-full" />
                <h3 className="font-display font-bold text-lg text-[#F5F7FA] tracking-wider uppercase">
                  PERFIL
                </h3>
              </div>
              <span className="font-mono-tech text-[10px] text-[#7C8793] uppercase tracking-widest">
                VERIFICADO // 2026
              </span>
            </div>

            {/* Structured Facts */}
            <div className="space-y-6">
              {PROFILE_FACTS.map((fact, index) => (
                <div
                  key={index}
                  id={`profile-fact-${index}`}
                  className="group flex flex-col gap-1 pb-4 border-b border-[#F5F7FA]/5 last:border-none last:pb-0"
                >
                  <div className="flex items-center gap-2">
                    {getFactIcon(index)}
                    <span className="font-mono-tech text-[10px] text-[#7C8793] tracking-widest uppercase">
                      {fact.label}
                    </span>
                  </div>
                  
                  <p className="text-xs sm:text-sm font-semibold tracking-wide border-l-2 border-[#D4A017] pl-3 text-[#F5F7FA] group-hover:text-[#D4A017] transition-colors uppercase">
                    {fact.value}
                  </p>

                  {fact.subtext && (
                    <span className="text-xs text-[#7C8793]/80 pl-3 leading-normal font-light">
                      {fact.subtext}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Abstract Tactical & Strategy Graphic Component */}
          <div className="flex flex-col gap-2">
            <AbstractTacticalGraphic />
            <div className="flex justify-between items-center text-[10px] font-mono-tech text-[#7C8793] px-1">
              <span>CONCEITO: MAPA × ESTRATÉGIA × DADOS</span>
              <span className="text-[#D4A017]">PRECISÃO // 100%</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
