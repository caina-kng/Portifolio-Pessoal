import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { NAVIGATION_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navOffset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0F12]/90 backdrop-blur-md border-b border-[#7C8793]/15 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Monogram */}
        <a
          id="nav-brand-logo"
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 text-left focus:outline-none focus:ring-1 focus:ring-[#D4A017]"
        >
          <div className="w-8 h-8 rounded-sm bg-[#13171D] border border-[#D4A017]/40 flex items-center justify-center text-[#D4A017] font-mono-tech text-xs font-bold transition-all group-hover:border-[#D4A017] group-hover:shadow-[0_0_12px_rgba(212,160,23,0.3)]">
            JC
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wider text-[#F5F7FA] group-hover:text-[#D4A017] transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] font-mono-tech tracking-widest text-[#7C8793] uppercase">
              Portfólio Pessoal
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-links" aria-label="Navegação Principal" className="hidden md:flex items-center gap-8">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                id={`nav-link-${item.id}`}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="group relative flex flex-col items-start py-1 text-xs tracking-wider transition-colors duration-200 focus:outline-none"
              >
                <span
                  className={`font-mono-tech text-[10px] transition-colors duration-200 ${
                    isActive
                      ? 'text-[#D4A017] font-semibold'
                      : 'text-[#7C8793] group-hover:text-[#D4A017]'
                  }`}
                >
                  {item.number}
                </span>
                <span
                  className={`transition-colors duration-200 font-semibold tracking-widest text-xs ${
                    isActive
                      ? 'text-[#F5F7FA]'
                      : 'text-[#7C8793] group-hover:text-[#F5F7FA]'
                  }`}
                >
                  {item.label}
                </span>

                {/* Subtle active underline indicator */}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-[#D4A017]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Technical Coordinate Tag & Quick Contact Button */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="text-right">
            <span className="text-[10px] font-mono-tech text-[#7C8793] tracking-tighter uppercase block">
              Brasília, DF // 15° 47' 38" S
            </span>
          </div>

          <a
            id="nav-cta-contact"
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-refined inline-flex items-center gap-2 px-4 py-2 text-xs font-mono-tech font-medium uppercase tracking-wider text-[#D4A017] border border-[#D4A017]/40 rounded-sm hover:bg-[#D4A017]/10 hover:border-[#D4A017] focus:outline-none focus:ring-1 focus:ring-[#D4A017]"
          >
            <span>Falar com João</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 ease-cinematic group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          id="mobile-menu-toggle"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menu de navegação"
          className="md:hidden p-2 rounded text-[#7C8793] hover:text-[#D4A017] focus:outline-none"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#0D0F12]/98 border-b border-[#7C8793]/20 px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between py-3 border-b border-[#7C8793]/10 text-sm tracking-wider ${
                      isActive ? 'text-[#D4A017]' : 'text-[#F5F7FA]'
                    }`}
                  >
                    <span className="font-medium">{item.label}</span>
                    <span className="font-mono-tech text-xs text-[#D4A017]">
                      {item.number}
                    </span>
                  </a>
                );
              })}
              <div className="pt-2">
                <a
                  id="mobile-nav-cta-contact"
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="w-full flex items-center justify-center gap-2 py-3 bg-[#D4A017] text-[#0D0F12] font-mono-tech font-bold text-xs uppercase tracking-wider rounded-sm"
                >
                  <span>Contato</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
