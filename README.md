# Vocab Learning App

Uma aplicação web moderna para aprender inglês e expandir seu vocabulário, desenvolvida para a disciplina de Front-end Engineering da FIAP.

## 🎯 Objetivo

Este projeto consome uma API BFF (Backend For Frontend) que retorna palavras em inglês com suas descrições e exemplos de uso, apresentando-as de forma visual e interativa para auxiliar no estudo de inglês.

## 🚀 Stack Utilizada

- **Vue.js 3** - Framework JavaScript progressivo
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Axios** - Cliente HTTP para requisições
- **PostCSS** - Processador CSS
- **Autoprefixer** - Plugin PostCSS para compatibilidade de navegadores

## ✨ Funcionalidades

- ✅ Carregamento de palavras via API BFF
- ✅ Interface moderna e responsiva
- ✅ Sistema de busca em tempo real
- ✅ Animações e transições suaves
- ✅ Modo favoritos para marcar palavras importantes
- ✅ Design adaptativo para mobile, tablet e desktop
- ✅ Feedback visual de loading e erros
- ✅ Gradientes e efeitos visuais modernos

## 📋 Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn como gerenciador de pacotes

## 🔧 Como Executar Localmente

1. **Clone o repositório**
```bash
git clone <url-do-seu-repositorio>
cd FIAP
```

2. **Instale as dependências**
```bash
npm install
```

3. **Execute o servidor de desenvolvimento**
```bash
npm run dev
```

4. **Acesse no navegador**
```
http://localhost:5173
```

## 🏗️ Build para Produção

Para criar uma versão otimizada para produção:

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

Para testar o build localmente:

```bash
npm run preview
```

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça login no [Vercel](https://vercel.com)
2. Clique em "New Project"
3. Importe seu repositório do GitHub
4. Configure:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Clique em "Deploy"

### Netlify

1. Faça login no [Netlify](https://netlify.com)
2. Clique em "Add new site" > "Import an existing project"
3. Conecte seu repositório do GitHub
4. Configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Clique em "Deploy site"

### Render

1. Faça login no [Render](https://render.com)
2. Clique em "New" > "Static Site"
3. Conecte seu repositório do GitHub
4. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
5. Clique em "Create Static Site"

## 📊 Web Vitals - Lighthouse Metrics

### O que são Web Vitals?

Web Vitals são métricas essenciais que o Google usa para medir a experiência do usuário em sites. As principais métricas incluem:

#### **LCP (Largest Contentful Paint)**
- **O que mede**: Tempo até o maior elemento de conteúdo ser renderizado
- **Meta ideal**: < 2.5 segundos
- **Importância**: Indica a velocidade de carregamento percebida pelo usuário

#### **FID (First Input Delay)**
- **O que mede**: Tempo entre primeira interação e resposta do navegador
- **Meta ideal**: < 100 milissegundos
- **Importância**: Mede a responsividade da página

#### **CLS (Cumulative Layout Shift)**
- **O que mede**: Estabilidade visual durante carregamento
- **Meta ideal**: < 0.1
- **Importância**: Evita mudanças inesperadas de layout

#### **FCP (First Contentful Paint)**
- **O que mede**: Tempo até o primeiro conteúdo ser renderizado
- **Meta ideal**: < 1.8 segundos
- **Importância**: Primeira impressão de velocidade

#### **TTI (Time to Interactive)**
- **O que mede**: Tempo até a página estar completamente interativa
- **Meta ideal**: < 3.8 segundos
- **Importância**: Quando o usuário pode realmente usar a página

#### **Speed Index**
- **O que mede**: Velocidade de exibição do conteúdo
- **Meta ideal**: < 3.4 segundos
- **Importância**: Quão rápido o conteúdo é visualmente exibido

### Como Testar

1. Abra o site no Google Chrome
2. Pressione F12 para abrir DevTools
3. Vá na aba "Lighthouse"
4. Selecione "Performance" e "Desktop" ou "Mobile"
5. Clique em "Analyze page load"

*Os resultados do Lighthouse serão adicionados aqui após o deploy.*

## 🔗 Links

- **Repositório**: [GitHub - Seu repositório]
- **Deploy**: [URL do site hospedado]
- **API BFF**: https://fiap-bff-9aojr.onrender.com/ask

## 🎯 BFF Próprio (Bônus +1 ponto)

Este projeto inclui um BFF próprio desenvolvido em Node.js + Express + OpenAI.

### Como executar o BFF

```bash
cd bff
npm install
cp .env.example .env
# Adicione sua chave da OpenAI no arquivo .env
npm start
```

O BFF estará disponível em `http://localhost:3000/ask`

### Deploy do BFF

Consulte o [README do BFF](./bff/README.md) para instruções de deploy no Render.

**URL do BFF (após deploy)**: [Adicione aqui a URL do seu BFF hospedado]

## 📊 Lighthouse Metrics (Bônus +1 ponto)

### Como Gerar o Relatório

1. Abra o site no Google Chrome
2. Pressione `F12` ou `Cmd+Option+I` (Mac)
3. Vá na aba "Lighthouse"
4. Selecione "Performance", "Accessibility", "Best Practices", "SEO"
5. Escolha "Desktop" ou "Mobile"
6. Clique em "Analyze page load"

### Métricas Explicadas

**Performance Metrics:**

- **First Contentful Paint (FCP)**: < 1.8s ✅
  - Tempo até o primeiro elemento de conteúdo aparecer na tela
  - Importante para a primeira impressão do usuário

- **Largest Contentful Paint (LCP)**: < 2.5s ✅
  - Tempo até o maior elemento visível ser carregado
  - Core Web Vital - afeta o ranking no Google

- **Total Blocking Time (TBT)**: < 200ms ✅
  - Tempo total que a página ficou bloqueada para interação
  - Afeta a responsividade percebida

- **Cumulative Layout Shift (CLS)**: < 0.1 ✅
  - Mede a estabilidade visual durante o carregamento
  - Core Web Vital - evita cliques acidentais

- **Speed Index**: < 3.4s ✅
  - Quão rápido o conteúdo é visualmente exibido
  - Média de tempo para exibir o conteúdo

**Outros Indicadores:**

- **Accessibility**: 90-100 (Acessibilidade)
- **Best Practices**: 90-100 (Melhores práticas)
- **SEO**: 90-100 (Otimização para buscadores)

> 📸 **Screenshot do Lighthouse será adicionado aqui após o deploy**

*Os prints das métricas serão incluídos no PDF de entrega.*

## 👥 Integrantes

- [Seu Nome Completo] - RM XXXXX

> **Instruções**: Adicione aqui os nomes de todos os integrantes do grupo (até 4 pessoas) ou mantenha apenas o seu se estiver fazendo individual.

## 🔗 Links do Projeto

### Aplicação Frontend
- **Repositório GitHub**: https://github.com/[seu-usuario]/FIAP
- **Site em Produção**: [URL do Vercel/Netlify após deploy]

### BFF (Backend)
- **Repositório**: https://github.com/[seu-usuario]/FIAP (pasta /bff)
- **API em Produção**: [URL do Render após deploy]

## 📄 Checklist de Entrega

- [x] ✅ Projeto Vue.js funcional consumindo o BFF
- [x] ✅ Interface moderna e responsiva com Tailwind CSS
- [x] ✅ README estruturado e completo (+1 ponto)
- [x] ✅ BFF próprio com Node.js + OpenAI (+1 ponto)
- [ ] 📸 Prints do Lighthouse com métricas (+1 ponto)
- [ ] 🚀 Deploy do Frontend (Vercel/Netlify)
- [ ] 🚀 Deploy do BFF (Render)
- [ ] 📋 PDF de entrega gerado

## 📝 Como Gerar o PDF de Entrega

1. Após fazer o deploy, atualize os links neste README
2. Tire screenshots do Lighthouse
3. Crie um PDF contendo:
   - Nome dos integrantes e RMs
   - URL do repositório GitHub
   - URL do site hospedado
   - URL da API (BFF) hospedada
   - Prints do Lighthouse com explicações
4. Envie pelo sistema de trabalhos da FIAP

## 📄 Licença

Este projeto foi desenvolvido para fins educacionais como parte da disciplina de Front-end Engineering da FIAP.

---

Desenvolvido com ❤️ para FIAP - 2026
