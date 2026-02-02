# ⚡ Comandos Rápidos

## 🚀 Executar Localmente

### Frontend
```bash
npm install
npm run dev
```
Acesse: http://localhost:5173

### BFF (Opcional)
```bash
cd bff
npm install
cp .env.example .env
# Edite .env e adicione sua OPENAI_API_KEY
npm start
```
Acesse: http://localhost:3000/ask

## 📦 Build de Produção

```bash
npm run build
npm run preview
```

## 🌐 Deploy

### Vercel (Frontend)
```bash
# 1. Faça commit
git add .
git commit -m "feat: projeto completo"
git push origin main

# 2. No Vercel:
# - Import repository
# - Framework: Vite
# - Build: npm run build
# - Output: dist
```

### Render (BFF)
```bash
# No Render:
# - New Web Service
# - Root Directory: bff
# - Build: npm install
# - Start: npm start
# - Add env var: OPENAI_API_KEY
```

## 📊 Lighthouse

1. Abra o site hospedado no Chrome
2. F12 > Lighthouse
3. Select: Performance, Accessibility, Best Practices, SEO
4. Click: Analyze page load
5. Screenshot dos resultados

## 📝 Gerar PDF

### Usando VSCode
1. Instale extensão "Markdown PDF"
2. Abra ENTREGA.md
3. Cmd/Ctrl + Shift + P
4. "Markdown PDF: Export (pdf)"

### Online
https://www.markdowntopdf.com/

## 🔍 Verificar Erros

```bash
# Verificar sintaxe
npm run build

# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install
```

## 📋 Checklist Rápido

- [ ] `npm install` executado com sucesso
- [ ] `npm run dev` funciona localmente
- [ ] Site responsivo em mobile/desktop
- [ ] BFF configurado (se for fazer)
- [ ] Commit e push no GitHub
- [ ] Deploy no Vercel/Netlify
- [ ] Deploy do BFF no Render (opcional)
- [ ] Lighthouse executado e prints tirados
- [ ] README.md atualizado com URLs
- [ ] ENTREGA.md preenchido
- [ ] PDF gerado
- [ ] Enviado pela FIAP

## 🆘 Resolver Problemas

```bash
# Erro de permissão
sudo npm install

# Porta ocupada
# Mude no vite.config.js ou mate o processo
lsof -ti:5173 | xargs kill

# Cache de build
rm -rf dist node_modules package-lock.json
npm install
npm run build

# Git problemas
git status
git add .
git commit -m "fix: correções"
git push -f origin main  # Use com cuidado!
```

## 📞 Links Úteis

- Vue.js Docs: https://vuejs.org/guide/
- Tailwind Docs: https://tailwindcss.com/docs
- Vercel Docs: https://vercel.com/docs
- Render Docs: https://render.com/docs
- OpenAI API: https://platform.openai.com/docs

---

**Tudo pronto! Boa sorte! 🍀**
