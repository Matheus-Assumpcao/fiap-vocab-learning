# ✅ CHECKLIST COMPLETO - VOCAB LEARNING APP

Use este checklist para garantir que fez tudo certo!

---

## 📦 FASE 1: PREPARAÇÃO LOCAL

### Configuração Inicial
- [ ] Abri a pasta do projeto no VSCode
- [ ] Li o arquivo `COMECE_AQUI.md`
- [ ] Li o arquivo `RESUMO.md`
- [ ] Entendi a estrutura do projeto

### Instalação e Teste
- [ ] Executei `npm install` com sucesso
- [ ] Executei `npm run dev`
- [ ] Abri http://localhost:5173 no navegador
- [ ] Cliquei em "Novas Palavras" e funcionou
- [ ] Testei a busca
- [ ] Testei marcar favoritos
- [ ] Testei em mobile (DevTools F12 > Toggle Device)
- [ ] Não há erros no console

---

## 🎯 FASE 2: BFF PRÓPRIO (Opcional +1 ponto)

### Configuração do BFF
- [ ] Entrei na pasta `cd bff`
- [ ] Executei `npm install`
- [ ] Copiei `.env.example` para `.env`
- [ ] Obtive uma API key da OpenAI
- [ ] Adicionei a key no arquivo `.env`
- [ ] Executei `npm start`
- [ ] Testei http://localhost:3000/ask no navegador
- [ ] Recebi um array de palavras

### Integração Frontend + BFF
- [ ] Alterei `BFF_URL` em `src/App.vue` para `http://localhost:3000/ask`
- [ ] Reiniciei o frontend (`npm run dev`)
- [ ] Testei se as palavras carregam do meu BFF
- [ ] Funciona perfeitamente

---

## 🌐 FASE 3: DEPLOY

### Git e GitHub
- [ ] Criei repositório no GitHub (público)
- [ ] Executei `git init` (se necessário)
- [ ] Executei `git add .`
- [ ] Executei `git commit -m "feat: projeto completo vocab learning"`
- [ ] Conectei ao GitHub: `git remote add origin <url>`
- [ ] Executei `git push -u origin main`
- [ ] Confirmei que apareceu no GitHub

### Deploy do Frontend (Vercel)
- [ ] Acessei https://vercel.com
- [ ] Fiz login com GitHub
- [ ] Cliquei em "New Project"
- [ ] Importei meu repositório
- [ ] Configurei:
  - Framework: Vite
  - Build Command: `npm run build`
  - Output Directory: `dist`
- [ ] Cliquei em "Deploy"
- [ ] Deploy completou com sucesso
- [ ] Anotei a URL: `https://_________________.vercel.app`
- [ ] Testei a URL e funciona

### Deploy do BFF - Render (Opcional)
- [ ] Antes de fazer deploy, alterei `BFF_URL` para a URL do BFF do professor OU aguardo URL do Render
- [ ] Fiz commit: `git commit -am "fix: ajusta URL do BFF"`
- [ ] Push: `git push`
- [ ] Acessei https://render.com
- [ ] Fiz login com GitHub
- [ ] "New" > "Web Service"
- [ ] Selecionei meu repositório
- [ ] Configurei:
  - Name: `fiap-vocab-bff`
  - Root Directory: `bff`
  - Build Command: `npm install`
  - Start Command: `npm start`
- [ ] Adicionei variável de ambiente `OPENAI_API_KEY`
- [ ] Deploy completou
- [ ] Testei a URL do BFF: `https://________.onrender.com/ask`
- [ ] Recebi JSON com palavras

### Atualizar Frontend com BFF do Render
- [ ] Alterei `BFF_URL` em `src/App.vue` para URL do Render
- [ ] Commit: `git commit -am "feat: conecta com BFF em produção"`
- [ ] Push: `git push`
- [ ] Vercel fez redeploy automaticamente
- [ ] Testei e funciona

---

## 📊 FASE 4: LIGHTHOUSE

### Executar Lighthouse
- [ ] Abri o site hospedado no Chrome
- [ ] Pressionei F12
- [ ] Cliquei na aba "Lighthouse"
- [ ] Selecionei:
  - ✅ Performance
  - ✅ Accessibility
  - ✅ Best Practices
  - ✅ SEO
- [ ] Escolhi "Desktop"
- [ ] Cliquei em "Analyze page load"
- [ ] Aguardei a análise completar
- [ ] Tirei screenshot completo
- [ ] Salvei como `lighthouse-desktop.png`

### Lighthouse Mobile (Opcional)
- [ ] Repeti o processo com "Mobile"
- [ ] Tirei screenshot
- [ ] Salvei como `lighthouse-mobile.png`

### Documentar Resultados
- [ ] Anotei os scores:
  - Performance: ___/100
  - Accessibility: ___/100
  - Best Practices: ___/100
  - SEO: ___/100
- [ ] Anotei as métricas principais:
  - FCP: ___s
  - LCP: ___s
  - TBT: ___ms
  - CLS: ___
  - Speed Index: ___s

---

## 📝 FASE 5: DOCUMENTAÇÃO

### Atualizar README.md
- [ ] Adicionei nomes dos integrantes e RMs
- [ ] Adicionei URL do site hospedado
- [ ] Adicionei URL do BFF (se fiz)
- [ ] Adicionei prints do Lighthouse (ou coloquei link)
- [ ] Revisei toda a documentação
- [ ] Está tudo correto e atualizado

### Preencher ENTREGA.md
- [ ] Preenchi seção "Integrantes"
- [ ] Preenchi URL do repositório
- [ ] Preenchi URL do site hospedado
- [ ] Preenchi URL do BFF (se fiz)
- [ ] Adicionei scores do Lighthouse
- [ ] Marquei todos os checkboxes completados
- [ ] Adicionei prints do Lighthouse
- [ ] Revisei tudo

### Gerar PDF
- [ ] Instalei extensão "Markdown PDF" no VSCode (ou uso online)
- [ ] Abri `ENTREGA.md`
- [ ] Gerei PDF via extensão ou https://www.markdowntopdf.com
- [ ] Salvei como `ENTREGA_FIAP_FRONTEND.pdf`
- [ ] Abri o PDF e revisei
- [ ] Todas as informações visíveis
- [ ] Prints legíveis
- [ ] Formatação OK

---

## 🚀 FASE 6: ENTREGA

### Commit Final
- [ ] Executei `git add .`
- [ ] Commit: `git commit -m "docs: finaliza documentação"`
- [ ] Push: `git push`
- [ ] Confirmei no GitHub

### Teste Final
- [ ] Abri o site hospedado em modo anônimo
- [ ] Cliquei em "Novas Palavras"
- [ ] Palavras carregaram
- [ ] Busca funciona
- [ ] Favoritos funcionam
- [ ] Responsivo funciona (testei no celular)
- [ ] Sem erros no console

### Upload na FIAP
- [ ] Acessei o sistema de trabalhos da FIAP
- [ ] Encontrei a tarefa "Front-end Engineering - App"
- [ ] Fiz upload do PDF
- [ ] Confirmei o envio
- [ ] Recebi confirmação

---

## 🎯 PONTUAÇÃO FINAL

### Requisitos Básicos (7 pontos)
- [ ] Projeto Vue.js funcional ✅
- [ ] Consome BFF ✅
- [ ] Exibe word, description, useCase ✅
- [ ] Interface moderna (Tailwind) ✅
- [ ] Responsivo ✅
- [ ] GitHub público ✅
- [ ] Deploy em cloud ✅

**Subtotal: 7 pontos**

### Requisitos Extras
- [ ] README estruturado completo (+1) ✅
- [ ] BFF próprio deployado (+1) ✅/❌
- [ ] Lighthouse com prints (+1) ✅

**Subtotal extras: __/3 pontos**

---

## 🎉 TOTAL ESPERADO: __/10 pontos

---

## ✅ VALIDAÇÃO FINAL

Antes de entregar, confirme:

- [ ] ✅ Todos os links funcionam
- [ ] ✅ PDF está completo e legível
- [ ] ✅ Informações dos integrantes corretas
- [ ] ✅ Screenshots de qualidade
- [ ] ✅ Sem erros de digitação
- [ ] ✅ Repositório público
- [ ] ✅ Código comentado e limpo
- [ ] ✅ README atualizado

---

## 🎊 PARABÉNS!

Se marcou todos os itens relevantes, você está pronto para entregar!

**Data de conclusão**: ___/___/2026

**Nota esperada**: 10/10 🌟

---

## 📌 LEMBRETES IMPORTANTES

⚠️ **Prazo**: 12/02/2026  
⚠️ **Formato**: PDF via sistema FIAP  
⚠️ **Repositório**: Deve estar público  
⚠️ **Deploy**: Deve estar acessível  

---

**Boa sorte! Você consegue! 💪🚀**
