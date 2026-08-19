import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Instagram, ArrowUpRight, Send, CheckCircle, Copy, Check } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'GITHUB':
        return <Github className="w-5 h-5" />;
      case 'LINKEDIN':
        return <Linkedin className="w-5 h-5" />;
      case 'INSTAGRAM':
        return <Instagram className="w-5 h-5" />;
      case 'E-MAIL':
        return <Mail className="w-5 h-5" />;
      default:
        return <Mail className="w-5 h-5" />;
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      return;
    }
    // Local demonstrative handling (Strictly NO APIs / NO backend / NO fetch)
    setFormSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('joaocaina@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="contact"
      aria-label="Contato e Conexão"
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
            05 — CANAIS DE CONTATO
          </span>
          <div className="h-[1px] w-12 bg-[#D4A017]/40" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-black text-5xl sm:text-6xl md:text-7xl text-[#F5F7FA] tracking-tight uppercase"
        >
          VAMOS CONVERSAR.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.85, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#7C8793] text-base sm:text-lg mt-4 max-w-2xl leading-relaxed font-light"
        >
          Se quiser trocar uma ideia sobre tecnologia, Inteligência Artificial, esporte ou projetos, entre em contato.
        </motion.p>
      </div>

      {/* Grid: Direct Social Channels & Demonstrative Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Static Links */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex flex-col gap-6"
        >
          <div className="bg-[#13171D] border border-[#F5F7FA]/10 rounded-xs p-6 sm:p-8 card-hover-refined backdrop-blur-sm">
            <h3 className="font-display font-bold text-lg text-[#F5F7FA] uppercase tracking-wider mb-6 pb-3 border-b border-[#7C8793]/15 flex items-center justify-between">
              <span>CANAIS DIRETOS</span>
              <span className="font-mono-tech text-[10px] text-[#D4A017]">LINKS OFICIAIS</span>
            </h3>

            <div className="space-y-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  id={`social-link-${link.name.toLowerCase()}`}
                  href={link.url}
                  target={link.isExternal ? '_blank' : undefined}
                  rel={link.isExternal ? 'noopener noreferrer' : undefined}
                  className="group flex items-center justify-between p-4 bg-[#0D0F12] border border-[#F5F7FA]/10 rounded-xs hover:border-[#D4A017]/60 transition-colors duration-250 ease-micro"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xs bg-[#13171D] text-[#D4A017] group-hover:bg-[#D4A017] group-hover:text-[#0D0F12] transition-colors duration-250 ease-micro">
                      {getSocialIcon(link.name)}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-display font-bold text-sm text-[#F5F7FA] tracking-wide">
                        {link.name}
                      </span>
                      <span className="font-mono-tech text-xs text-[#7C8793] group-hover:text-[#D4A017] transition-colors duration-250 ease-micro">
                        {link.displayValue}
                      </span>
                    </div>
                  </div>

                  <ArrowUpRight className="w-4 h-4 text-[#7C8793] group-hover:text-[#D4A017] transition-transform duration-250 ease-cinematic group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              ))}
            </div>

            {/* Quick Copy Action for Email */}
            <div className="mt-6 pt-6 border-t border-[#7C8793]/10 flex items-center justify-between">
              <span className="font-mono-tech text-xs text-[#7C8793]">
                Copiar e-mail direto:
              </span>
              <button
                id="btn-copy-email"
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#0D0F12] border border-[#7C8793]/30 text-xs font-mono-tech text-[#F5F7FA] rounded-xs hover:border-[#D4A017] hover:text-[#D4A017] transition-colors duration-200 ease-micro focus:outline-none"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#D4A017]" />
                    <span className="text-[#D4A017]">Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Demonstrative Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7"
        >
          <div className="bg-[#13171D] border border-[#F5F7FA]/10 rounded-xs p-6 sm:p-8 shadow-xl relative backdrop-blur-sm card-hover-refined">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#7C8793]/15">
              <div className="flex items-center gap-2">
                <Send className="w-4 h-4 text-[#D4A017]" />
                <h3 className="font-display font-bold text-lg text-[#F5F7FA] uppercase tracking-wider">
                  MENSAGEM RÁPIDA
                </h3>
              </div>
              <span className="font-mono-tech text-[10px] text-[#7C8793] uppercase tracking-widest bg-[#0D0F12] px-2 py-1 border border-[#7C8793]/20 rounded-xs">
                FORMULÁRIO DEMONSTRATIVO
              </span>
            </div>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#0D0F12] border border-[#D4A017]/40 p-8 rounded-xs text-center flex flex-col items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-[#D4A017]/10 border border-[#D4A017] flex items-center justify-center text-[#D4A017]">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-lg text-[#F5F7FA] uppercase mb-1">
                    Mensagem preparada
                  </h4>
                  <p className="text-xs sm:text-sm text-[#7C8793] max-w-md font-light leading-relaxed">
                    Este formulário é apenas demonstrativo para o trabalho acadêmico. Para entrar em contato real com João Cainã, utilize os links diretos ou envie um e-mail para <code className="text-[#D4A017] font-mono-tech">joaocaina@gmail.com</code>.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3 mt-2">
                  <a
                    href={`mailto:joaocaina@gmail.com?subject=Contato%20de%20${encodeURIComponent(
                      formData.nome
                    )}&body=${encodeURIComponent(formData.mensagem)}`}
                    className="btn-refined inline-flex items-center gap-2 px-5 py-2.5 bg-[#D4A017] text-[#0D0F12] font-mono-tech font-bold text-xs uppercase tracking-wider rounded-xs hover:bg-[#F3C644]"
                  >
                    <span>Abrir no seu E-mail</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ nome: '', email: '', mensagem: '' });
                    }}
                    className="btn-refined px-4 py-2.5 bg-[#13171D] border border-[#7C8793]/30 text-xs font-mono-tech text-[#F5F7FA] rounded-xs hover:border-[#D4A017]"
                  >
                    Nova Mensagem
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="form-nome"
                    className="block font-mono-tech text-xs tracking-widest text-[#7C8793] uppercase mb-2"
                  >
                    NOME *
                  </label>
                  <input
                    id="form-nome"
                    type="text"
                    required
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    placeholder="Seu nome completo"
                    className="w-full bg-[#0D0F12] border border-[#7C8793]/30 rounded-xs px-4 py-3 text-sm text-[#F5F7FA] placeholder-[#7C8793]/50 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] transition-colors duration-200 ease-micro"
                  />
                </div>

                <div>
                  <label
                    htmlFor="form-email"
                    className="block font-mono-tech text-xs tracking-widest text-[#7C8793] uppercase mb-2"
                  >
                    E-MAIL *
                  </label>
                  <input
                    id="form-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="seu.email@exemplo.com"
                    className="w-full bg-[#0D0F12] border border-[#7C8793]/30 rounded-xs px-4 py-3 text-sm text-[#F5F7FA] placeholder-[#7C8793]/50 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] transition-colors duration-200 ease-micro"
                  />
                </div>

                <div>
                  <label
                    htmlFor="form-mensagem"
                    className="block font-mono-tech text-xs tracking-widest text-[#7C8793] uppercase mb-2"
                  >
                    MENSAGEM *
                  </label>
                  <textarea
                    id="form-mensagem"
                    required
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Escreva sua mensagem ou proposta de conversa..."
                    className="w-full bg-[#0D0F12] border border-[#7C8793]/30 rounded-xs px-4 py-3 text-sm text-[#F5F7FA] placeholder-[#7C8793]/50 focus:outline-none focus:border-[#D4A017] focus:ring-1 focus:ring-[#D4A017] transition-colors duration-200 ease-micro resize-none"
                  />
                </div>

                <button
                  id="btn-submit-contact"
                  type="submit"
                  className="w-full group btn-refined inline-flex items-center justify-center gap-2 py-4 bg-[#D4A017] text-[#0D0F12] font-mono-tech font-bold text-xs sm:text-sm uppercase tracking-widest rounded-xs hover:bg-[#F3C644] focus:outline-none focus:ring-1 focus:ring-[#D4A017]"
                >
                  <span>ENVIAR MENSAGEM</span>
                  <Send className="w-4 h-4 transition-transform duration-300 ease-cinematic group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
