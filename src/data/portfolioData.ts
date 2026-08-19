import {
  NavItem,
  ProfileFact,
  SkillItem,
  SoftSkill,
  JourneyStep,
  SocialLink,
  ConnectionElement,
} from '../types';

/**
 * =========================================================================
 * DADOS PRINCIPAIS DO PORTFÓLIO — JOÃO CAINÃ
 * =========================================================================
 * Este arquivo centraliza todas as informações textuais, links e configurações.
 * Para personalizar qualquer informação, edite diretamente os campos abaixo.
 */

export const PERSONAL_INFO = {
  name: 'JOÃO CAINÃ',
  firstName: 'JOÃO',
  lastName: 'CAINÃ',
  currentRole: 'MILITAR DO EXÉRCITO BRASILEIRO',
  subHeading: 'TECNOLOGIA • INTELIGÊNCIA ARTIFICIAL • ESPORTE • DADOS',
  tagline: 'Disciplina para evoluir. Curiosidade para construir.',
  
  // Foto pessoal: Pode ser deixado como null para exibir o placeholder elegante
  // ou fornecer um caminho local em /public/joao.jpg ou URL de imagem.
  photoUrl: null as string | null,
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'hero', number: '01', label: 'INÍCIO', href: '#hero' },
  { id: 'about', number: '02', label: 'SOBRE MIM', href: '#about' },
  { id: 'skills', number: '03', label: 'HABILIDADES', href: '#skills' },
  { id: 'journey', number: '04', label: 'MINHA JORNADA', href: '#journey' },
  { id: 'contact', number: '05', label: 'CONTATO', href: '#contact' },
];

export const ABOUT_TEXTS = [
  'Sou João Cainã, militar do Exército Brasileiro, com uma trajetória que também passa pelo basquete e pela tecnologia.',
  'Já fui jogador federado de basquete em Brasília e realizei um curso de Estatística de Basquete pela Federação de Basquetebol do Distrito Federal (FBDF). Essas experiências despertaram meu interesse em entender como dados e tecnologia podem contribuir para o esporte.',
  'Atualmente, estou ampliando meus conhecimentos em tecnologia e Inteligência Artificial, explorando novas possibilidades para transformar ideias em soluções.',
  'Meu objetivo é continuar aprendendo e, no futuro, unir tecnologia, inteligência artificial, dados e minha experiência com o esporte para contribuir com projetos e soluções que façam sentido para essa área.',
];

export const PROFILE_FACTS: ProfileFact[] = [
  {
    label: 'ATUAÇÃO ATUAL',
    value: 'MILITAR DO EXÉRCITO BRASILEIRO',
    subtext: 'Disciplina, estratégia e liderança em prontidão operacional.',
  },
  {
    label: 'EXPERIÊNCIA',
    value: 'EX-JOGADOR FEDERADO',
    subtext: 'Trajetória nas quadras de Brasília com visão tática de jogo.',
  },
  {
    label: 'FORMAÇÃO COMPLEMENTAR',
    value: 'ESTATÍSTICA DE BASQUETE — FBDF',
    subtext: 'Análise quantitativa e scout técnico certificado.',
  },
  {
    label: 'ÁREAS DE INTERESSE',
    value: 'TECNOLOGIA • IA • DADOS • ESPORTE',
    subtext: 'Explorando novas fronteiras para soluções integradas.',
  },
];

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 'ai-studio',
    number: '01',
    title: 'GOOGLE AI STUDIO',
    description: 'Exploração de desenvolvimento de aplicações e soluções com Inteligência Artificial.',
  },
  {
    id: 'github',
    number: '02',
    title: 'GITHUB',
    description: 'Organização e versionamento de projetos.',
  },
  {
    id: 'vercel',
    number: '03',
    title: 'VERCEL',
    description: 'Publicação e hospedagem de projetos web.',
  },
  {
    id: 'prompt-eng',
    number: '04',
    title: 'ENGENHARIA DE PROMPT',
    description: 'Criação e estruturação de instruções para modelos de Inteligência Artificial.',
  },
  {
    id: 'design',
    number: '05',
    title: 'DESIGN GRÁFICO',
    description: 'Criação e desenvolvimento de soluções visuais.',
  },
];

export const SOFT_SKILLS: SoftSkill[] = [
  {
    title: 'Aprendizado contínuo',
    description: 'Busca constante por absorver novas ferramentas e paradigmas técnicos.',
  },
  {
    title: 'Criatividade',
    description: 'Pensamento lateral para transformar desafios em abordagens originais.',
  },
  {
    title: 'Pensamento analítico',
    description: 'Capacidade de decompor problemas complexos e interpretar métricas.',
  },
  {
    title: 'Trabalho em equipe',
    description: 'Espírito de corpo, comunicação clara e cooperação tática.',
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    id: 'j-01',
    number: '01',
    title: 'BASQUETE',
    description: 'Experiência e trajetória dentro do esporte.',
    tag: 'FUNDAMENTOS',
  },
  {
    id: 'j-02',
    number: '02',
    title: 'FEDERAÇÃO',
    description: 'Experiência anterior como jogador federado em Brasília.',
    tag: 'ALTO RENDIMENTO',
  },
  {
    id: 'j-03',
    number: '03',
    title: 'ESTATÍSTICA',
    description: 'Curso de Estatística de Basquete pela FBDF.',
    tag: 'DADOS & SCOUT',
  },
  {
    id: 'j-04',
    number: '04',
    title: 'EXÉRCITO',
    description: 'Minha atuação profissional atual.',
    tag: 'DISCIPLINA & ESTRATÉGIA',
  },
  {
    id: 'j-05',
    number: '05',
    title: 'TECNOLOGIA',
    description: 'Novo campo de aprendizado e desenvolvimento.',
    tag: 'EXPANSÃO',
  },
  {
    id: 'j-06',
    number: '06',
    title: 'INTELIGÊNCIA ARTIFICIAL',
    description: 'Explorando novas possibilidades através da tecnologia.',
    tag: 'INOVAÇÃO',
  },
  {
    id: 'j-07',
    number: '07',
    title: 'FUTURO',
    description: 'Unir esporte, dados, tecnologia e Inteligência Artificial.',
    tag: 'CONVERGÊNCIA',
  },
];

export const CONNECTION_ELEMENTS: ConnectionElement[] = [
  { id: 'sport', label: 'ESPORTE', sublabel: 'Visão de campo & disciplina' },
  { id: 'data', label: 'DADOS', sublabel: 'Métricas & precisão analítica' },
  { id: 'tech', label: 'TECNOLOGIA', sublabel: 'Estruturas & desenvolvimento' },
  { id: 'ai', label: 'IA', sublabel: 'Inteligência & automação' },
];

export const NEXT_STEPS = {
  number: '05',
  sectionTitle: 'PRÓXIMO PASSO',
  heading: 'O QUE VEM A SEGUIR?',
  pillars: [
    'Continuar aprendendo.',
    'Continuar experimentando.',
    'Continuar construindo.',
  ],
  vision:
    'Quero descobrir como tecnologia, dados e Inteligência Artificial podem se conectar ainda mais ao universo do esporte.',
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GITHUB',
    label: 'GitHub',
    url: 'https://github.com/caina-kng',
    displayValue: 'github.com/caina-kng',
    isExternal: true,
  },
  {
    name: 'LINKEDIN',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jo%C3%A3o-cain%C3%A3-',
    displayValue: 'linkedin.com/in/joão-cainã-',
    isExternal: true,
  },
  {
    name: 'INSTAGRAM',
    label: 'Instagram',
    url: 'https://www.instagram.com/og_castrin',
    displayValue: '@og_castrin',
    isExternal: true,
  },
  {
    name: 'E-MAIL',
    label: 'E-mail',
    url: 'mailto:joaocaina@gmail.com',
    displayValue: 'joaocaina@gmail.com',
    isExternal: false,
  },
];
