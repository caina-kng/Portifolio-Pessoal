import React from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="main-footer"
      aria-label="Rodapé"
      className="relative bg-[#090B0D] border-t border-[#7C8793]/15 py-12 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        {/* Top Tier: Identity & Back to top */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-[#7C8793]/10">
          <div className="flex flex-col">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-sm bg-[#13171D] border border-[#D4A017]/40 flex items-center justify-center text-[#D4A017] font-mono-tech text-[10px] font-bold">
                JC
              </div>
              <span className="font-display font-black text-lg text-[#F5F7FA] tracking-wider uppercase">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <span className="text-xs font-mono-tech text-[#7C8793] uppercase tracking-widest mt-1">
              PORTFÓLIO PESSOAL • 2026
            </span>
          </div>

          <button
            id="footer-back-to-top"
            type="button"
            onClick={handleScrollTop}
            className="self-start sm:self-auto btn-refined inline-flex items-center gap-2 px-4 py-2 bg-[#13171D] border border-[#7C8793]/20 rounded-xs text-xs font-mono-tech text-[#7C8793] hover:text-[#D4A017] hover:border-[#D4A017] focus:outline-none"
          >
            <span>VOLTAR AO TOPO</span>
            <ArrowUp className="w-3.5 h-3.5 transition-transform duration-300 ease-cinematic group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Middle Tier: Identity Phrase & System Status */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-2">
          <p className="font-display text-sm sm:text-base text-[#D4A017] tracking-wider italic font-medium">
            "{PERSONAL_INFO.tagline}"
          </p>

          {/* System Status from Elegant Dark design */}
          <div className="flex items-center gap-4 self-end md:self-auto">
            <div className="text-right">
              <span className="block text-[10px] font-mono-tech text-[#D4A017] uppercase tracking-wider">
                STATUS DE SISTEMA
              </span>
              <span className="text-[9px] font-mono-tech text-[#7C8793] uppercase tracking-tighter">
                Operacional // Prontidão & Aprendizado
              </span>
            </div>
            <div className="w-8 h-8 border border-[#F5F7FA]/15 rounded-full flex items-center justify-center bg-[#13171D]">
              <div className="w-1.5 h-1.5 bg-[#D4A017] rounded-full animate-pulse shadow-[0_0_8px_#D4A017]" />
            </div>
          </div>
        </div>

        {/* Bottom Tier: Copyright & Social Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#7C8793]">
          <div>
            © 2026 {PERSONAL_INFO.name}. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target={link.isExternal ? '_blank' : undefined}
                rel={link.isExternal ? 'noopener noreferrer' : undefined}
                className="hover:text-[#D4A017] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
