# 🚀 DEPLOY RÁPIDO - BFF no Render

## ✅ PRÉ-REQUISITOS
- [ ] Código no GitHub (push feito)
- [ ] Conta no Render criada

---

## 📋 PASSO A PASSO

### 1. Acesse o Render
https://render.com

### 2. Faça Login com GitHub
- Clique em "Get Started for Free"
- Conecte com sua conta GitHub

### 3. Criar Web Service
- Dashboard > "New +" > "Web Service"

### 4. Conectar Repositório
- Clique em "Connect account" (se necessário)
- Procure: `fiap-vocab-learning`
- Clique em "Connect"

### 5. Configurar o BFF

**Name:** `fiap-vocab-bff`

**Region:** Oregon (US West) - ou o mais próximo

**Branch:** main

**Root Directory:** `bff` ⚠️ IMPORTANTE!

**Runtime:** Node

**Build Command:** `npm install`

**Start Command:** `npm start`

**Instance Type:** Free

### 6. Environment Variables (OPCIONAL)

Se você tem uma chave OpenAI:

- Click "Add Environment Variable"
- **Key:** `OPENAI_API_KEY`
- **Value:** `sk-sua-chave-aqui`

Se NÃO tem:
- **Pule este passo!** O BFF já tem fallback de 10 palavras

### 7. Deploy!

- Clique em "Create Web Service"
- Aguarde 2-5 minutos
- Status: "Live" ✅

### 8. Copiar URL

Exemplo: `https://fiap-vocab-bff.onrender.com`

**IMPORTANTE:** Copie esta URL!

### 9. Testar o BFF

Abra no navegador:
```
https://sua-url.onrender.com/ask
```

Deve retornar um JSON com 10 palavras!

---

## 🔗 CONECTAR FRONTEND COM SEU BFF

### 1. Edite `src/App.vue`

Procure a linha (~188):
```javascript
const BFF_URL = 'https://fiap-bff-9aojr.onrender.com/ask'
```

Substitua por:
```javascript
const BFF_URL = 'https://fiap-vocab-bff.onrender.com/ask'
```

### 2. Commit e Push

```bash
git add src/App.vue
git commit -m "fix: atualiza URL do BFF"
git push
```

### 3. Deploy Frontend (Vercel)

1. Acesse: https://vercel.com
2. Login com GitHub
3. "New Project"
4. Selecione `fiap-vocab-learning`
5. Framework: Vite
6. Build: `npm run build`
7. Output: `dist`
8. Deploy!

---

## ✅ CHECKLIST FINAL

- [ ] BFF deployado no Render
- [ ] BFF testado (abre /ask e retorna JSON)
- [ ] Frontend atualizado com nova URL
- [ ] Frontend deployado no Vercel
- [ ] Testado site final funcionando

---

## 🎯 URLs para o PDF de Entrega

**Repositório GitHub:**
```
https://github.com/SEU_USUARIO/fiap-vocab-learning
```

**Site (Frontend):**
```
https://seu-projeto.vercel.app
```

**API (BFF):**
```
https://fiap-vocab-bff.onrender.com
```

---

## 🆘 Problemas?

### BFF não inicia
- Veja os logs no Render (aba "Logs")
- Verifique se Root Directory é `bff`
- Verifique Build/Start commands

### Frontend não encontra BFF
- Teste URL do BFF no navegador
- Verifique se atualizou `src/App.vue`
- CORS pode levar 1-2 min para funcionar

### Deploy lento
- Render free tier pode demorar
- Primeira vez: 3-5 minutos
- Próximas: 1-2 minutos

---

**Boa sorte! 🚀**
