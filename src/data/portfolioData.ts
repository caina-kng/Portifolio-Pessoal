import {
  NavItem,
  ProfileFact,
  SkillItem,
  SoftSkill,
  JourneyStep,
  SocialLink,
  ConnectionElement,
  ProjectItem,
} from '../types';

export const PERSONAL_INFO = {
  name: 'JOÃO CAINÃ',
  firstName: 'JOÃO',
  lastName: 'CAINÃ',
  currentRole: 'MILITAR DO EXÉRCITO BRASILEIRO',
  subHeading: 'TECNOLOGIA • INTELIGÊNCIA ARTIFICIAL • DADOS • ESPORTE',
  tagline: 'Transformando curiosidade, disciplina e repertório em soluções digitais.',
  intro: 'Exploro tecnologia, inteligência artificial e dados para construir projetos com propósito — especialmente onde o digital encontra o esporte.',
  photoUrl: null as string | null,
};

export const NAVIGATION_ITEMS: NavItem[] = [
  { id: 'hero', number: '01', label: 'INÍCIO', href: '#hero' },
  { id: 'projects', number: '02', label: 'PROJETOS', href: '#projects' },
  { id: 'about', number: '03', label: 'SOBRE', href: '#about' },
  { id: 'skills', number: '04', label: 'STACK', href: '#skills' },
  { id: 'journey', number: '05', label: 'JORNADA', href: '#journey' },
  { id: 'contact', number: '06', label: 'CONTATO', href: '#contact' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'portfolio',
    number: '01',
    title: 'PORTFÓLIO PESSOAL',
    eyebrow: 'DESIGN & DESENVOLVIMENTO',
    description: 'Experiência web autoral criada para transformar minha trajetória entre esporte, disciplina e tecnologia em uma identidade digital coesa.',
    stack: ['React', 'TypeScript', 'Motion', 'Vercel'],
    status: 'EM EVOLUÇÃO',
    githubUrl: 'https://github.com/caina-kng/Portifolio-Pessoal',
  },
  {
    id: 'mastery',
    number: '02',
    title: 'MASTERY',
    eyebrow: 'EDTECH & INTELIGÊNCIA ARTIFICIAL',
    description: 'Conceito de plataforma de estudos que organiza curso, semestre e disciplinas para transformar materiais e PDFs em uma estrutura de aprendizagem assistida por IA.',
    stack: ['IA', 'Produto', 'UX', 'Dados'],
    status: 'EM DESENVOLVIMENTO',
  },
  {
    id: 'basketball-data',
    number: '03',
    title: 'BASKETBALL LAB',
    eyebrow: 'ESPORTE, DADOS & IA',
    description: 'Linha de projetos dedicada a explorar como dados, análise e inteligência artificial podem apoiar estudo de jogo, treino e tomada de decisão no basquete.',
    stack: ['Basquete', 'Dados', 'IA', 'Análise'],
    status: 'EM PESQUISA',
  },
];

export const ABOUT_TEXTS = [
  'Minha trajetória não começou na tecnologia — e é justamente isso que define a forma como eu construo.',
  'Passei pelo basquete federado em Brasília, estudei estatística aplicada ao jogo e hoje atuo no Exército Brasileiro. Esporte e ambiente militar fortaleceram disciplina, leitura de cenário, trabalho em equipe e tomada de decisão.',
  'Agora levo esse repertório para tecnologia, inteligência artificial e dados, criando projetos enquanto aprofundo minha capacidade técnica.',
  'Meu objetivo é transformar experiências de mundos diferentes em soluções digitais úteis, claras e com identidade.',
];

export const PROFILE_FACTS: ProfileFact[] = [
  { label: 'ATUAÇÃO ATUAL', value: 'EXÉRCITO BRASILEIRO', subtext: 'Disciplina, responsabilidade e trabalho em equipe.' },
  { label: 'ESPORTE', value: 'EX-JOGADOR FEDERADO', subtext: 'Experiência competitiva nas quadras de Brasília.' },
  { label: 'FORMAÇÃO COMPLEMENTAR', value: 'ESTATÍSTICA DE BASQUETE — FBDF', subtext: 'Contato prático com scout e leitura quantitativa do jogo.' },
  { label: 'FOCO ATUAL', value: 'TECNOLOGIA • IA • DADOS', subtext: 'Aprendizado aplicado através de projetos digitais.' },
];

export const SKILLS_DATA: SkillItem[] = [
  { id: 'frontend', number: '01', title: 'FRONT-END', description: 'Construção de interfaces responsivas e componentizadas com React, TypeScript, HTML e CSS.', category: 'core' },
  { id: 'ai-studio', number: '02', title: 'IA APLICADA', description: 'Experimentação com modelos generativos, Google AI Studio e fluxos assistidos por inteligência artificial.', category: 'core' },
  { id: 'prompt-eng', number: '03', title: 'ENGENHARIA DE PROMPT', description: 'Estruturação de contexto, instruções e iterações para obter resultados mais consistentes de modelos de IA.', category: 'methodology' },
  { id: 'design', number: '04', title: 'DESIGN & UI', description: 'Criação de identidades visuais e interfaces com atenção a hierarquia, composição e experiência.', category: 'core' },
  { id: 'github', number: '05', title: 'GIT & GITHUB', description: 'Versionamento, organização de código e evolução de projetos em repositórios.', category: 'tool' },
  { id: 'vercel', number: '06', title: 'DEPLOY & VERCEL', description: 'Publicação, validação e evolução contínua de experiências web.', category: 'tool' },
];

export const SOFT_SKILLS: SoftSkill[] = [
  { title: 'Disciplina', description: 'Consistência para aprender, executar e melhorar.' },
  { title: 'Pensamento analítico', description: 'Leitura de contexto, métricas e problemas antes da solução.' },
  { title: 'Criatividade', description: 'Conexão entre referências para criar abordagens próprias.' },
  { title: 'Trabalho em equipe', description: 'Comunicação, responsabilidade e cooperação.' },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  { id: 'j-01', number: '01', title: 'BASQUETE', description: 'O esporte como primeira escola de leitura de jogo, repetição e evolução.', tag: 'ORIGEM' },
  { id: 'j-02', number: '02', title: 'FEDERAÇÃO', description: 'Experiência competitiva como jogador federado em Brasília.', tag: 'COMPETIÇÃO' },
  { id: 'j-03', number: '03', title: 'ESTATÍSTICA', description: 'Curso de Estatística de Basquete pela FBDF e aproximação com dados.', tag: 'ANÁLISE' },
  { id: 'j-04', number: '04', title: 'EXÉRCITO', description: 'Atuação profissional marcada por disciplina, responsabilidade e equipe.', tag: 'DISCIPLINA' },
  { id: 'j-05', number: '05', title: 'TECNOLOGIA & IA', description: 'Construção de projetos para transformar aprendizado em experiência prática.', tag: 'PRESENTE' },
  { id: 'j-06', number: '06', title: 'CONVERGÊNCIA', description: 'Unir esporte, dados, design e inteligência artificial em soluções próprias.', tag: 'PRÓXIMO CAPÍTULO' },
];

export const CONNECTION_ELEMENTS: ConnectionElement[] = [
  { id: 'sport', label: 'ESPORTE', sublabel: 'Visão de jogo & repertório' },
  { id: 'data', label: 'DADOS', sublabel: 'Métricas & interpretação' },
  { id: 'tech', label: 'TECNOLOGIA', sublabel: 'Construção & produto' },
  { id: 'ai', label: 'IA', sublabel: 'Experimentação & automação' },
];

export const NEXT_STEPS = {
  number: '06',
  sectionTitle: 'DIREÇÃO',
  heading: 'O QUE VEM A SEGUIR?',
  pillars: ['Aprender com profundidade.', 'Construir para validar.', 'Conectar repertórios diferentes.'],
  vision: 'Quero criar soluções digitais em que tecnologia, dados e Inteligência Artificial encontrem problemas reais — com atenção especial ao universo do esporte.',
};

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GITHUB', label: 'GitHub', url: 'https://github.com/caina-kng', displayValue: 'github.com/caina-kng', isExternal: true },
  { name: 'LINKEDIN', label: 'LinkedIn', url: 'https://www.linkedin.com/in/jo%C3%A3o-cain%C3%A3-', displayValue: 'linkedin.com/in/joão-cainã-', isExternal: true },
  { name: 'INSTAGRAM', label: 'Instagram', url: 'https://www.instagram.com/og_castrin', displayValue: '@og_castrin', isExternal: true },
  { name: 'E-MAIL', label: 'E-mail', url: 'mailto:joaocaina@gmail.com', displayValue: 'joaocaina@gmail.com', isExternal: false },
];
