# 🔧 TROUBLESHOOTING - Problemas e Soluções

## ❌ Problema: Tela do Vite/Vue padrão aparece

### Sintomas:
- Vê logos do Vite + Vue
- Texto "count is 0"
- "Edit components/HelloWorld.vue to test HMR"

### Causa:
O projeto não está usando o arquivo `App.vue` correto ou as dependências não foram instaladas.

### Solução:

**1. Pare o servidor**
```bash
# macOS/Linux
pkill -f vite

# Ou Ctrl+C no terminal
```

**2. Limpe e reinstale**
```bash
cd /Users/matheusassumpcao/Documents/GitHub/FIAP
rm -rf node_modules package-lock.json
npm install
```

**3. Verifique se os arquivos estão corretos**
```bash
ls -la src/
# Deve mostrar: App.vue, main.js, style.css
```

**4. Execute novamente**
```bash
npm run dev
```

**5. Abra no navegador**
```
http://localhost:5173
```

---

## ❌ Problema: Erro "Cannot find module 'vue'"

### Solução:
```bash
npm install vue axios
```

---

## ❌ Problema: Tailwind não está funcionando

### Solução:
```bash
npm install -D tailwindcss postcss autoprefixer
```

Verifique se `src/style.css` tem:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## ❌ Problema: Porta 5173 em uso

### Solução:
```bash
# Mate o processo
lsof -ti:5173 | xargs kill

# Ou mude a porta no vite.config.js
```

---

## ❌ Problema: Build falha

### Solução:
```bash
# Teste o build
npm run build

# Se der erro, veja os logs e corrija
```

---

## ❌ Problema: API não retorna dados

### Sintomas:
- Clica em "Novas Palavras"
- Fica carregando forever
- Ou aparece erro

### Solução:

**1. Teste a API diretamente**
```bash
curl https://fiap-bff-9aojr.onrender.com/ask
```

**2. Se não funcionar, a API do professor está offline**

Use dados de fallback. Edite `src/App.vue`:

```javascript
const fetchWords = async () => {
  loading.value = true
  error.value = null

  try {
    const response = await axios.get(BFF_URL, { timeout: 10000 })
    words.value = response.data.map(word => ({
      ...word,
      isFavorite: false
    }))
  } catch (err) {
    // FALLBACK DATA
    words.value = [
      {
        word: "Resilient",
        description: "Capaz de se recuperar rapidamente de dificuldades",
        useCase: "Despite facing many challenges, she remained resilient.",
        isFavorite: false
      },
      {
        word: "Serendipity",
        description: "Ocorrência de eventos por acaso de maneira feliz",
        useCase: "Finding that book was pure serendipity.",
        isFavorite: false
      },
      // ... adicione mais palavras
    ]
  } finally {
    loading.value = false
  }
}
```

---

## ❌ Problema: CORS Error

### Sintomas:
```
Access to XMLHttpRequest at '...' has been blocked by CORS policy
```

### Solução:
O BFF deve ter CORS habilitado. Se estiver usando seu próprio BFF, adicione em `bff/index.js`:

```javascript
import cors from 'cors'
app.use(cors())
```

---

## ❌ Problema: CSS não carrega

### Solução:

**1. Verifique import em main.js**
```javascript
import './style.css'
```

**2. Limpe cache e rebuild**
```bash
rm -rf dist node_modules
npm install
npm run dev
```

---

## ❌ Problema: Deploy falha no Vercel

### Solução:

**1. Verifique configuração**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

**2. Teste build localmente**
```bash
npm run build
npm run preview
```

**3. Veja logs do Vercel**
- Vá no dashboard
- Clique no deployment
- Veja "Build Logs"

---

## ❌ Problema: Deploy do BFF falha no Render

### Solução:

**1. Verifique configuração**
- Root Directory: `bff`
- Build Command: `npm install`
- Start Command: `npm start`

**2. Adicione variável de ambiente**
- OPENAI_API_KEY=sua-chave

**3. Veja logs**
- Dashboard do Render
- Clique no serviço
- Aba "Logs"

---

## ❌ Problema: Git push rejeitado

### Solução:
```bash
# Pull primeiro
git pull origin main

# Resolve conflitos se houver

# Push novamente
git push origin main

# Se necessário (cuidado!)
git push -f origin main
```

---

## ❌ Problema: npm install muito lento

### Solução:
```bash
# Limpe cache
npm cache clean --force

# Use yarn (mais rápido)
npm install -g yarn
yarn install
```

---

## ✅ Checklist de Verificação

Quando algo não funcionar:

- [ ] Node.js instalado? (`node -v`)
- [ ] npm instalado? (`npm -v`)
- [ ] Está na pasta correta? (`pwd`)
- [ ] node_modules existe? (`ls node_modules`)
- [ ] package.json existe? (`cat package.json`)
- [ ] src/App.vue existe? (`cat src/App.vue`)
- [ ] Porta 5173 livre? (`lsof -ti:5173`)
- [ ] Internet funcionando?
- [ ] API acessível? (`curl <url-api>`)

---

## 🆘 Reset Completo (Última Opção)

Se nada funcionar:

```bash
# 1. Pare tudo
pkill -f vite
pkill -f node

# 2. Limpe TUDO
cd /Users/matheusassumpcao/Documents/GitHub/FIAP
rm -rf node_modules package-lock.json dist .vite

# 3. Reinstale
npm install

# 4. Execute
npm run dev
```

---

## 📞 Ainda com problemas?

1. Veja os logs do terminal
2. Veja o console do navegador (F12)
3. Leia a mensagem de erro completa
4. Procure no Google: "vite + [sua mensagem de erro]"
5. Consulte professor/monitores

---

**Lembre-se**: 90% dos problemas se resolvem com:
```bash
rm -rf node_modules package-lock.json
npm install
```

🍀 Boa sorte!
