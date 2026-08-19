/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * PORTFÓLIO PESSOAL — JOÃO CAINÃ
 */

import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { SideProgress } from './components/SideProgress';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Journey } from './components/Journey';
import { NextSteps } from './components/NextSteps';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sectionIds = ['hero', 'projects', 'about', 'skills', 'journey', 'contact'];
    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 200;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && scrollPosition >= section.offsetTop) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen bg-[#0B0D0F] text-[#F5F5F5] relative selection:bg-[#D4A017] selection:text-[#0B0D0F]">
      <div className="noise-overlay opacity-[0.015] pointer-events-none" />
      <div className="fixed -bottom-48 -left-48 w-[500px] h-[500px] bg-[#D4A017]/[0.012] rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="hidden 2xl:flex fixed top-0 right-0 h-screen w-[48px] border-l border-[#F5F5F5]/[0.03] flex-col justify-center items-center pointer-events-none z-20">
        <span className="vertical-rail font-mono-tech text-[8px] text-[#8C949D] tracking-[0.5em] uppercase opacity-25 select-none">DISCIPLINA × ESTRATÉGIA × EVOLUÇÃO</span>
      </div>
      <CustomCursor />
      <Navbar activeSection={activeSection} />
      <SideProgress activeSection={activeSection} />
      <main id="main-content" className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Journey />
        <NextSteps />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
