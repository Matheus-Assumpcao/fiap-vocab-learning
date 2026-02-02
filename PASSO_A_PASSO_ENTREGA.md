# 📋 PASSO A PASSO PARA ENTREGA - FIAP

## ✅ Status Atual do Projeto

### O que você JÁ TEM pronto:
- ✅ Aplicação Vue.js funcional
- ✅ Interface moderna com Tailwind CSS
- ✅ BFF próprio com Node.js + OpenAI
- ✅ README completo e estruturado
- ✅ Código organizado e comentado

### O que FALTA fazer:
- [ ] Deploy do Frontend (Vercel/Netlify)
- [ ] Deploy do BFF (Render)
- [ ] Screenshots do Lighthouse
- [ ] Atualizar README com URLs
- [ ] Adicionar integrantes do grupo
- [ ] Gerar PDF de entrega

---

## 🚀 PASSO 1: Deploy do Frontend (Vercel - Recomendado)

### 1.1. Fazer push do código para o GitHub
```bash
git add .
git commit -m "Preparando para deploy"
git push origin main
```

### 1.2. Deploy no Vercel
1. Acesse: https://vercel.com
2. Faça login com sua conta do GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório: `fiap-vocab-learning`
5. Configure:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `./` (raiz)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
6. Clique em **"Deploy"**
7. Aguarde o deploy finalizar
8. **COPIE A URL** (ex: `https://seu-projeto.vercel.app`)

### 1.3. Atualizar README com a URL do Frontend
- Abra o arquivo `README.md`
- Procure por `[URL do Vercel/Netlify após deploy]`
- Substitua pela URL real do seu site

---

## 🔧 PASSO 2: Deploy do BFF no Render

### 2.1. Criar conta no Render
1. Acesse: https://render.com
2. Faça login com sua conta do GitHub

### 2.2. Criar Web Service
1. Clique em **"New +"** → **"Web Service"**
2. Conecte seu repositório do GitHub: `fiap-vocab-learning`
3. Configure:
   - **Name**: `fiap-vocab-bff` (ou o nome que preferir)
   - **Region**: `Oregon (US West)`
   - **Branch**: `main`
   - **Root Directory**: `bff`
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

### 2.3. Configurar Variável de Ambiente
1. Na seção **"Environment Variables"**, clique em **"Add Environment Variable"**
2. Adicione:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: Sua chave da OpenAI (comece com `sk-...`)
     - Para obter: https://platform.openai.com/api-keys
3. Clique em **"Create Web Service"**
4. Aguarde o deploy (pode levar 5-10 minutos)
5. **COPIE A URL** (ex: `https://fiap-vocab-bff.onrender.com`)

### 2.4. Testar o BFF
1. Abra no navegador: `https://sua-url.onrender.com/ask`
2. Deve retornar um JSON com 10 palavras

### 2.5. Atualizar o Frontend para usar seu BFF
1. Abra `src/App.vue`
2. Procure por `apiUrl` (linha ~180)
3. Troque de:
   ```javascript
   const apiUrl = 'https://fiap-bff-9aojr.onrender.com/ask'
   ```
   Para:
   ```javascript
   const apiUrl = 'https://SUA-URL-DO-RENDER.onrender.com/ask'
   ```
4. Salve, faça commit e push:
   ```bash
   git add src/App.vue
   git commit -m "Atualizar URL do BFF"
   git push origin main
   ```
5. O Vercel vai fazer o redeploy automaticamente

### 2.6. Atualizar README com a URL do BFF
- Abra o arquivo `README.md`
- Procure por `[URL do Render após deploy]`
- Substitua pela URL real do seu BFF

---

## 📊 PASSO 3: Gerar Screenshots do Lighthouse

### 3.1. Rodar o Lighthouse
1. Abra seu site no **Google Chrome**: `https://seu-projeto.vercel.app`
2. Pressione `F12` ou `Cmd+Option+I` (Mac) para abrir o DevTools
3. Clique na aba **"Lighthouse"** (pode estar em ">>")
4. Selecione:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
5. Escolha **"Desktop"**
6. Clique em **"Analyze page load"**
7. Aguarde a análise (1-2 minutos)

### 3.2. Capturar Screenshots
1. Quando o relatório aparecer, tire um **screenshot completo** (Cmd+Shift+4 no Mac)
2. Salve como: `lighthouse-desktop.png`
3. Repita o processo selecionando **"Mobile"**
4. Salve como: `lighthouse-mobile.png`

### 3.3. Adicionar no README
1. Crie uma pasta `docs` na raiz do projeto:
   ```bash
   mkdir docs
   ```
2. Mova os screenshots para lá:
   ```bash
   mv lighthouse-*.png docs/
   ```
3. No README, procure por `📸 **Screenshot do Lighthouse será adicionado aqui após o deploy**`
4. Substitua por:
   ```markdown
   ### Resultados Desktop
   ![Lighthouse Desktop](./docs/lighthouse-desktop.png)
   
   ### Resultados Mobile
   ![Lighthouse Mobile](./docs/lighthouse-mobile.png)
   ```

---

## 👥 PASSO 4: Adicionar Integrantes no README

1. Abra `README.md`
2. Procure por `## 👥 Integrantes`
3. Substitua `[Seu Nome Completo] - RM XXXXX` pelos dados reais:
   ```markdown
   ## 👥 Integrantes
   
   - Matheus Assumpção - RM 123456
   - [Nome do Colega 2] - RM 234567 (se houver)
   - [Nome do Colega 3] - RM 345678 (se houver)
   - [Nome do Colega 4] - RM 456789 (se houver)
   ```

---

## 📄 PASSO 5: Gerar PDF de Entrega

### 5.1. Criar documento com as informações
Crie um documento (Word, Google Docs, etc.) contendo:

```
FIAP - FRONT-END ENGINEERING
TRABALHO FINAL - VOCAB LEARNING APP

INTEGRANTES:
- Matheus Assumpção - RM 123456
- [Nome 2] - RM [número]
- [Nome 3] - RM [número]
- [Nome 4] - RM [número]

LINKS DO PROJETO:

1. Repositório GitHub:
   https://github.com/[seu-usuario]/fiap-vocab-learning

2. Site em Produção (Frontend):
   https://[seu-projeto].vercel.app

3. API BFF em Produção:
   https://[seu-bff].onrender.com

STACK UTILIZADA:
- Frontend: Vue.js 3 + Vite + Tailwind CSS
- Backend: Node.js + Express + OpenAI API
- Deploy: Vercel (Frontend) + Render (Backend)

FUNCIONALIDADES IMPLEMENTADAS:
✅ Interface moderna e responsiva
✅ Consumo da API BFF
✅ Sistema de busca em tempo real
✅ Modo favoritos
✅ Feedback visual de loading/erros
✅ Animações e transições suaves

ATIVIDADES EXTRAS (para nota 10):
✅ README estruturado (+1 ponto)
✅ BFF próprio com Node.js + OpenAI (+1 ponto)
✅ Lighthouse Metrics incluídas (+1 ponto)
```

### 5.2. Adicionar Screenshots do Lighthouse
1. Cole os screenshots do Lighthouse no documento
2. Adicione as explicações das métricas (já estão no README)

### 5.3. Exportar como PDF
1. Salve o documento como PDF
2. Nomeie: `FIAP_Frontend_VocabLearning_RM123456.pdf`

---

## 📤 PASSO 6: Enviar pelo Sistema da FIAP

1. Acesse o sistema de trabalhos da FIAP
2. Localize a tarefa "Front-end Engineering - App Lite"
3. Faça upload do PDF
4. Data limite: **12/02/2026**
5. Clique em **"Enviar"**

---

## ✅ CHECKLIST FINAL

Antes de enviar, verifique:

- [ ] ✅ Frontend deployado e funcionando
- [ ] ✅ BFF deployado e funcionando
- [ ] ✅ Frontend consumindo SEU BFF (não o da aula)
- [ ] ✅ README atualizado com todas as URLs
- [ ] ✅ Integrantes adicionados no README
- [ ] ✅ Screenshots do Lighthouse tirados
- [ ] ✅ Screenshots adicionados no README e no PDF
- [ ] ✅ PDF criado com todas as informações
- [ ] ✅ PDF enviado pelo sistema da FIAP

---

## 🆘 ATALHOS E DICAS

### Se o BFF no Render demorar para responder
O plano gratuito do Render "dorme" após 15 minutos de inatividade. A primeira requisição pode levar 30-60 segundos. Isso é normal!

### Se o Lighthouse der nota baixa
- Remova console.logs do código
- Otimize imagens (se houver)
- Minimize o CSS/JS (o Vite já faz isso no build)

### Se esquecer a chave da OpenAI
1. Acesse: https://platform.openai.com/api-keys
2. Crie uma nova chave
3. Atualize no Render em "Environment" → "OPENAI_API_KEY"

### Para testar localmente antes do deploy
```bash
# Frontend
npm run dev

# BFF (em outro terminal)
cd bff
npm run dev
```

---

## 🎉 Pronto!

Seguindo esses passos, você terá **NOTA 10** garantida! 🚀

Boa sorte! 💪
