# Portfólio Pessoal — João Cainã

> **"Disciplina para evoluir. Curiosidade para construir."**  
> *Conceito Central:* **DISCIPLINA × ESTRATÉGIA × EVOLUÇÃO**

Portfólio pessoal premium desenvolvido sob medida para **João Cainã**, conectando a trajetória no Exército Brasileiro, a experiência no basquete, a análise de dados e a constante exploração de tecnologia e Inteligência Artificial.

---

## 1. Estrutura do Projeto

O projeto foi construído em arquitetura modular e escalável:

```text
├── index.html                     # Entry point HTML com fontes Syne, Plus Jakarta Sans e JetBrains Mono + SEO
├── metadata.json                  # Metadados e título da aplicação
├── package.json                   # Dependências e scripts de build
├── src/
│   ├── types.ts                   # Definições de tipos TypeScript
│   ├── data/
│   │   └── portfolioData.ts       # ⭐️ ARQUIVO PRINCIPAL DE DADOS (Edite textos, links e foto aqui)
│   ├── components/
│   │   ├── CustomCursor.tsx       # Cursor customizado sutil em dourado para desktop
│   │   ├── Navbar.tsx             # Navegação minimalista com indicador ativo e menu mobile
│   │   ├── SideProgress.tsx       # Linha de progresso vertical lateral sincronizada ao scroll
│   │   ├── Hero.tsx               # Primeira tela com tipografia editorial marcante e status militar
│   │   ├── About.tsx              # Biografia precisa, painel de Perfil e espaço reservado para foto
│   │   ├── AbstractTacticalGraphic.tsx # Gráfico tático vetorial abstrato (quadra + estratégia + dados)
│   │   ├── Skills.tsx             # Habilidades reais sem porcentagens + Além da Tecnologia
│   │   ├── Journey.tsx            # Linha do tempo vertical em 7 etapas
│   │   ├── ConnectionMatrix.tsx   # Composição visual da fórmula (Esporte × Dados × Tecnologia × IA)
│   │   ├── NextSteps.tsx          # Seção "O que vem a seguir?" com pilares de evolução
│   │   ├── Contact.tsx            # Canais de contato estáticos (GitHub, LinkedIn, Instagram, E-mail)
│   │   └── Footer.tsx             # Rodapé minimalista com copyright e frase da identidade
│   ├── App.tsx                    # Componente raiz que orquestra as seções e o scroll spy
│   ├── index.css                  # Estilos globais Tailwind CSS e texturas de grade tática
│   └── main.tsx                   # Ponto de entrada React
```

---

## 2. Como Alterar Seus Dados

Todas as informações pessoais, textos, biografias, links e habilidades estão centralizadas no arquivo:

📁 **`src/data/portfolioData.ts`**

Para alterar qualquer informação:
1. Abra `src/data/portfolioData.ts`.
2. Modifique os valores nos objetos exportados (`PERSONAL_INFO`, `ABOUT_TEXTS`, `PROFILE_FACTS`, `SKILLS_DATA`, `JOURNEY_STEPS`, `SOCIAL_LINKS`).
3. O site atualizará automaticamente mantendo toda a formatação e estilo.

---

## 3. Como Adicionar Sua Foto Pessoal

O site já possui um espaço de layout preparado com elegância:

1. Coloque a sua imagem na pasta pública (por exemplo: `public/joao-caina.jpg`).
2. Abra `src/data/portfolioData.ts`.
3. Altere a linha:
   ```typescript
   photoUrl: '/joao-caina.jpg',
   ```
4. A foto substituirá instantaneamente o quadro reservado, com enquadramento refinado e borda dourada.

---

## 4. Como Testar Localmente

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Abra `http://localhost:3000` no seu navegador.
4. Para validar a compilação de produção:
   ```bash
   npm run build
   ```

---

## 5. Como Publicar na Vercel

O projeto foi preparado especificamente para deploy estático imediato e gratuito na Vercel:

### Opção 1: Via GitHub (Recomendado)
1. Crie um repositório no seu GitHub (`https://github.com/caina-kng/portfolio`).
2. Envie os arquivos do projeto para o repositório:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio João Cainã"
   git branch -M main
   git remote add origin https://github.com/caina-kng/portfolio.git
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com) e conecte sua conta do GitHub.
4. Clique em **Add New Project** e selecione o repositório do portfólio.
5. A Vercel detectará automaticamente o framework **Vite**.
6. Clique em **Deploy**. Em menos de 1 minuto seu site estará online com HTTPS gratuito e performance máxima!

### Opção 2: Via Vercel CLI
```bash
npm i -g vercel
vercel
```
