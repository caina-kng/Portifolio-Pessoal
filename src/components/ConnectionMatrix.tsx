import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Activity, Database, Terminal, Sparkles, ArrowRight } from 'lucide-react';
import { CONNECTION_ELEMENTS } from '../data/portfolioData';

export const ConnectionMatrix: React.FC = () => {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  const getElementIcon = (id: string) => {
    switch (id) {
      case 'sport':
        return <Activity className="w-5 h-5" />;
      case 'data':
        return <Database className="w-5 h-5" />;
      case 'tech':
        return <Terminal className="w-5 h-5" />;
      case 'ai':
        return <Sparkles className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div
      id="connection-matrix-block"
      className="my-20 p-8 sm:p-12 bg-[#13171D] border border-[#D4A017]/30 rounded-sm shadow-2xl relative overflow-hidden"
    >
      {/* Background texture & ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#D4A017]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10 pb-6 border-b border-[#7C8793]/15">
        <div>
          <span className="font-mono-tech text-xs tracking-widest text-[#D4A017] uppercase block mb-1">
            VISÃO ESTRATÉGICA // A CONEXÃO
          </span>
          <h3 className="font-display font-black text-2xl sm:text-3xl text-[#F5F7FA] uppercase tracking-wide">
            A FÓRMULA DE EVOLUÇÃO
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono-tech text-[#7C8793]">
          <span className="w-2 h-2 rounded-full bg-[#D4A017] animate-ping" />
          <span>CONVERGÊNCIA ATIVA</span>
        </div>
      </div>

      {/* Interactive Formula Diagram */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6">
        {CONNECTION_ELEMENTS.map((el, index) => {
          const isSelected = activeNode === el.id;
          return (
            <React.Fragment key={el.id}>
              {/* Element Card */}
              <div
                id={`connection-node-${el.id}`}
                onMouseEnter={() => setActiveNode(el.id)}
                onMouseLeave={() => setActiveNode(null)}
                className={`flex-1 w-full lg:w-auto p-5 rounded-xs border card-hover-refined flex flex-col items-center text-center cursor-default ${
                  isSelected
                    ? 'bg-[#1E232B] border-[#D4A017] shadow-[0_0_20px_rgba(212,160,23,0.3)] -translate-y-1'
                    : 'bg-[#0D0F12] border-[#F5F7FA]/10 hover:border-[#D4A017]/60 hover:-translate-y-1'
                }`}
              >
                <div
                  className={`p-3 rounded-full mb-3 transition-colors duration-250 ease-micro ${
                    isSelected
                      ? 'bg-[#D4A017] text-[#0D0F12]'
                      : 'bg-[#13171D] text-[#D4A017] border border-[#D4A017]/30'
                  }`}
                >
                  {getElementIcon(el.id)}
                </div>
                
                <span className="font-display font-black text-sm sm:text-base text-[#F5F7FA] tracking-wider uppercase mb-1">
                  {el.label}
                </span>

                <span className="text-[11px] font-mono-tech text-[#7C8793] leading-snug">
                  {el.sublabel}
                </span>
              </div>

              {/* Operator Multiply Icon */}
              {index < CONNECTION_ELEMENTS.length - 1 && (
                <div className="hidden lg:flex items-center justify-center font-display font-black text-xl text-[#D4A017]/70 select-none">
                  ×
                </div>
              )}
            </React.Fragment>
          );
        })}

        {/* Equals Sign */}
        <div className="flex items-center justify-center font-display font-black text-2xl text-[#D4A017] py-2 lg:py-0 select-none">
          =
        </div>

        {/* Result Node */}
        <div
          id="connection-result-node"
          className="flex-1 w-full lg:w-auto p-5 rounded-xs bg-[#D4A017]/10 border border-[#D4A017] shadow-[0_0_25px_rgba(212,160,23,0.25)] flex flex-col items-center text-center cursor-default card-hover-refined hover:-translate-y-1"
        >
          <div className="p-3 rounded-full bg-[#D4A017] text-[#0D0F12] mb-3">
            <ArrowRight className="w-5 h-5" />
          </div>
          <span className="font-display font-black text-sm sm:text-base text-[#D4A017] tracking-wider uppercase mb-1">
            NOVAS POSSIBILIDADES
          </span>
          <span className="text-[11px] font-mono-tech text-[#F5F7FA]/80 leading-snug">
            Soluções de alto impacto
          </span>
        </div>
      </div>

      {/* Narrative caption */}
      <div className="mt-8 pt-6 border-t border-[#7C8793]/15 text-center sm:text-left text-xs sm:text-sm text-[#7C8793] leading-relaxed">
        <span className="text-[#F5F7FA] font-medium">Objetivo de Convergência:</span> Combinar os fundamentos de disciplina e estratégia com a precisão dos dados e a velocidade da tecnologia para criar projetos originais.
      </div>
    </div>
  );
};
