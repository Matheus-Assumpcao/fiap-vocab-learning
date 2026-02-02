# TEMPLATE PDF DE ENTREGA

Use este template para criar seu PDF de entrega.

---

# FIAP - FRONT-END ENGINEERING
## TRABALHO FINAL - VOCAB LEARNING APP

---

## 👥 INTEGRANTES

- **[Seu Nome Completo]** - RM [XXXXX]
- **[Nome do Colega 2]** - RM [XXXXX] *(se houver)*
- **[Nome do Colega 3]** - RM [XXXXX] *(se houver)*
- **[Nome do Colega 4]** - RM [XXXXX] *(se houver)*

---

## 🔗 LINKS DO PROJETO

### Aplicação Frontend
- **Repositório GitHub**: https://github.com/[seu-usuario]/fiap-vocab-learning
- **Site em Produção**: https://[seu-projeto].vercel.app

### API (BFF)
- **Código no GitHub**: https://github.com/[seu-usuario]/fiap-vocab-learning/tree/main/bff
- **API em Produção**: https://[seu-bff].onrender.com/ask

---

## 🚀 TECNOLOGIAS UTILIZADAS

### Frontend
- **Vue.js 3** - Framework JavaScript progressivo
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS utilitário
- **Axios** - Cliente HTTP para requisições

### Backend (BFF)
- **Node.js** - Runtime JavaScript
- **Express** - Framework web
- **OpenAI API** - Integração com GPT-3.5
- **CORS** - Middleware para permitir requisições cross-origin

### Deploy
- **Vercel** - Hospedagem do frontend
- **Render** - Hospedagem do BFF

---

## ✨ FUNCIONALIDADES IMPLEMENTADAS

✅ **Interface Moderna e Responsiva**
- Design adaptativo para mobile, tablet e desktop
- Gradientes e efeitos visuais modernos
- Animações e transições suaves

✅ **Integração com BFF**
- Consumo da API própria
- Tratamento de erros
- Fallback com dados de exemplo

✅ **Funcionalidades de UX**
- Sistema de busca em tempo real
- Modo favoritos para marcar palavras
- Feedback visual de loading e erros
- Estados vazios e de erro bem definidos

✅ **Performance**
- Carregamento otimizado
- Build otimizado com Vite
- Assets minificados

---

## 📊 WEB VITALS - LIGHTHOUSE METRICS

### Desktop Performance

**[COLE AQUI O SCREENSHOT DO LIGHTHOUSE DESKTOP]**

#### Métricas Principais:
- **Performance**: [XX]/100
- **Accessibility**: [XX]/100
- **Best Practices**: [XX]/100
- **SEO**: [XX]/100

#### Core Web Vitals:
- **FCP (First Contentful Paint)**: [X.X]s - Tempo até o primeiro conteúdo aparecer
- **LCP (Largest Contentful Paint)**: [X.X]s - Tempo até o maior elemento ser carregado
- **TBT (Total Blocking Time)**: [XXX]ms - Tempo total bloqueado para interação
- **CLS (Cumulative Layout Shift)**: [0.XXX] - Estabilidade visual durante carregamento
- **Speed Index**: [X.X]s - Velocidade de exibição do conteúdo

---

### Mobile Performance

**[COLE AQUI O SCREENSHOT DO LIGHTHOUSE MOBILE]**

#### Métricas Principais:
- **Performance**: [XX]/100
- **Accessibility**: [XX]/100
- **Best Practices**: [XX]/100
- **SEO**: [XX]/100

---

## 📖 EXPLICAÇÃO DAS MÉTRICAS

### Performance Metrics

**First Contentful Paint (FCP)**
- **O que mede**: Tempo até o primeiro elemento de conteúdo aparecer na tela
- **Meta ideal**: < 1.8 segundos
- **Importância**: Primeira impressão de velocidade para o usuário

**Largest Contentful Paint (LCP)**
- **O que mede**: Tempo até o maior elemento visível ser carregado
- **Meta ideal**: < 2.5 segundos
- **Importância**: Core Web Vital que afeta o ranking no Google

**Total Blocking Time (TBT)**
- **O que mede**: Tempo total que a página ficou bloqueada para interação
- **Meta ideal**: < 200 milissegundos
- **Importância**: Afeta a responsividade percebida pelo usuário

**Cumulative Layout Shift (CLS)**
- **O que mede**: Estabilidade visual durante o carregamento
- **Meta ideal**: < 0.1
- **Importância**: Core Web Vital que evita cliques acidentais

**Speed Index**
- **O que mede**: Quão rápido o conteúdo é visualmente exibido
- **Meta ideal**: < 3.4 segundos
- **Importância**: Média de tempo para exibir todo o conteúdo

---

## 🎯 ATIVIDADES REALIZADAS

### Para Nota 7 (Base)
✅ Projeto publicado no GitHub em repositório público
✅ Nomes dos participantes adicionados no README
✅ Deploy realizado em ambiente de cloud (Vercel)

### Para Nota 10 (Completo)
✅ **+1 ponto**: README estruturado explicando:
  - Finalidade do projeto
  - Stack utilizada
  - Como executar localmente
  - Como realizar o deploy
  
✅ **+1 ponto**: BFF próprio deployado:
  - API desenvolvida em Node.js + Express
  - Integração com OpenAI
  - Deploy no Render
  - URL pública funcional

✅ **+1 ponto**: Métricas do Lighthouse:
  - Análise completa de Performance
  - Screenshots incluídos
  - Explicação de cada métrica

---

## 📝 COMO EXECUTAR O PROJETO

### Frontend
```bash
# Clone o repositório
git clone https://github.com/[seu-usuario]/fiap-vocab-learning
cd fiap-vocab-learning

# Instale as dependências
npm install

# Execute em modo desenvolvimento
npm run dev

# Build para produção
npm run build
```

### BFF
```bash
# Entre na pasta do BFF
cd bff

# Instale as dependências
npm install

# Configure a variável de ambiente
# Crie um arquivo .env com:
# OPENAI_API_KEY=sua-chave-aqui

# Execute o servidor
npm start
```

---

## 🎓 CONSIDERAÇÕES FINAIS

Este projeto foi desenvolvido como trabalho final da disciplina de **Front-end Engineering** da FIAP, com o objetivo de aplicar os conhecimentos adquiridos em:

- Desenvolvimento de SPAs com Vue.js
- Consumo de APIs REST
- Estilização moderna com Tailwind CSS
- Deploy e hospedagem em cloud
- Otimização de performance
- Boas práticas de desenvolvimento

A aplicação permite que usuários aprendam novas palavras em inglês de forma interativa e visual, consumindo uma API própria que utiliza inteligência artificial (OpenAI) para gerar vocabulário relevante e contextualizado.

---

**Desenvolvido com ❤️ para FIAP - 2026**

---

## 📸 COMO USAR ESTE TEMPLATE

1. **Copie este conteúdo** para um documento do Word ou Google Docs
2. **Preencha todas as informações** entre colchetes [...]
3. **Cole os screenshots** do Lighthouse nos locais indicados
4. **Preencha as métricas** com os valores reais obtidos
5. **Revise** todo o conteúdo
6. **Exporte como PDF**
7. **Nomeie** o arquivo: `FIAP_Frontend_VocabLearning_RM[XXXXX].pdf`
8. **Envie** pelo sistema de trabalhos da FIAP

---

**DICA**: Use um design clean e profissional. Você pode adicionar:
- Logo da FIAP no cabeçalho
- Cores institucionais
- Índice no início
- Quebras de página entre seções
