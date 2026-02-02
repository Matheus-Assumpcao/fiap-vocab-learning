# 🚀 GUIA COMPLETO - PASSO A PASSO

Este guia vai te ajudar a executar, testar e fazer deploy de todo o projeto.

## 📦 PARTE 1: Instalar e Executar Localmente

### Frontend (Aplicação Web)

1. **Instale as dependências**
```bash
npm install
```

2. **Execute o projeto**
```bash
npm run dev
```

3. **Abra no navegador**
```
http://localhost:5173
```

4. **Teste a aplicação**
- Clique em "Novas Palavras" para carregar palavras da API
- Use a busca para filtrar palavras
- Marque favoritos clicando na estrela
- Teste em diferentes tamanhos de tela (responsividade)

### Backend (BFF - Opcional para +1 ponto)

1. **Entre na pasta do BFF**
```bash
cd bff
```

2. **Instale as dependências**
```bash
npm install
```

3. **Configure as variáveis de ambiente**
```bash
cp .env.example .env
```

4. **Edite o arquivo .env e adicione sua chave da OpenAI**
```
OPENAI_API_KEY=sk-sua-chave-aqui
```

> Para obter uma chave da OpenAI:
> 1. Acesse https://platform.openai.com/
> 2. Faça login ou crie uma conta
> 3. Vá em "API Keys"
> 4. Clique em "Create new secret key"
> 5. Copie a chave e cole no arquivo .env

5. **Execute o BFF**
```bash
npm start
```

6. **Teste o BFF**
```
http://localhost:3000/ask
```

7. **Atualize o frontend para usar seu BFF**

Edite o arquivo `src/App.vue` e altere a linha:
```javascript
const BFF_URL = 'https://fiap-bff-9aojr.onrender.com/ask'
```

Para:
```javascript
const BFF_URL = 'http://localhost:3000/ask'
```

---

## 🌐 PARTE 2: Deploy do Frontend

### Opção A: Vercel (Recomendado)

1. **Crie uma conta no Vercel**
   - Acesse https://vercel.com
   - Clique em "Sign Up"
   - Use sua conta do GitHub

2. **Faça commit e push do projeto**
```bash
git add .
git commit -m "feat: projeto completo vocab learning"
git push origin main
```

3. **Importe o projeto no Vercel**
   - No dashboard do Vercel, clique em "Add New Project"
   - Clique em "Import Git Repository"
   - Selecione seu repositório FIAP
   - Configure:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Clique em "Deploy"

4. **Aguarde o deploy**
   - O Vercel vai buildar e fazer deploy automaticamente
   - Você receberá uma URL tipo: `https://fiap-xxxx.vercel.app`

5. **Teste o site hospedado**
   - Acesse a URL fornecida
   - Teste todas as funcionalidades

### Opção B: Netlify

1. **Crie uma conta no Netlify**
   - Acesse https://netlify.com
   - Clique em "Sign Up" e use sua conta do GitHub

2. **Faça commit e push do projeto**
```bash
git add .
git commit -m "feat: projeto completo vocab learning"
git push origin main
```

3. **Importe o projeto**
   - No dashboard, clique em "Add new site"
   - Escolha "Import an existing project"
   - Conecte com GitHub e selecione o repositório
   - Configure:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Clique em "Deploy site"

4. **Aguarde o deploy e teste**

---

## 🚀 PARTE 3: Deploy do BFF (Opcional +1 ponto)

### Deploy no Render

1. **Crie uma conta no Render**
   - Acesse https://render.com
   - Clique em "Get Started" e use sua conta do GitHub

2. **Faça commit do BFF**
```bash
git add .
git commit -m "feat: adiciona BFF próprio"
git push origin main
```

3. **Crie um novo Web Service**
   - No dashboard do Render, clique em "New +"
   - Selecione "Web Service"
   - Conecte com GitHub e selecione seu repositório

4. **Configure o serviço**
   - **Name**: `fiap-vocab-bff`
   - **Environment**: `Node`
   - **Region**: `Oregon (US West)` ou mais próximo
   - **Branch**: `main`
   - **Root Directory**: `bff`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

5. **Adicione variáveis de ambiente**
   - Clique em "Advanced"
   - Adicione:
     - **Key**: `OPENAI_API_KEY`
     - **Value**: sua chave da OpenAI

6. **Deploy**
   - Clique em "Create Web Service"
   - Aguarde o deploy (pode levar alguns minutos)
   - Você receberá uma URL tipo: `https://fiap-vocab-bff.onrender.com`

7. **Atualize o frontend**
   - Edite `src/App.vue`
   - Altere `BFF_URL` para a URL do seu BFF no Render
   - Faça commit e push
   - O Vercel/Netlify vai fazer redeploy automaticamente

---

## 📊 PARTE 4: Lighthouse Metrics (+1 ponto)

1. **Acesse seu site hospedado**
   - Use a URL do Vercel/Netlify

2. **Abra o DevTools**
   - No Chrome, pressione `F12` ou `Cmd+Option+I` (Mac)

3. **Vá na aba Lighthouse**
   - Se não aparecer, clique nas setas `>>` e selecione "Lighthouse"

4. **Configure a análise**
   - Marque: Performance, Accessibility, Best Practices, SEO
   - Escolha: Desktop (ou teste ambos Desktop e Mobile)
   - Clique em "Analyze page load"

5. **Aguarde a análise**
   - O Lighthouse vai carregar a página várias vezes
   - Não interaja com a página durante a análise

6. **Capture os resultados**
   - Tire um screenshot completo dos resultados
   - Ou clique no ícone de download para salvar o relatório em HTML

7. **Adicione ao README**
   - Edite o `README.md`
   - Adicione os prints na seção de Web Vitals
   - As explicações das métricas já estão lá!

---

## 📝 PARTE 5: Preparar Entrega

1. **Atualize o README.md**
   - Preencha a seção "Integrantes" com nomes e RMs
   - Adicione as URLs do projeto hospedado
   - Adicione a URL do BFF (se fez)
   - Adicione os prints do Lighthouse

2. **Preencha o ENTREGA.md**
   - Substitua os `[placeholders]` com suas informações
   - Adicione os prints do Lighthouse
   - Adicione observações se necessário

3. **Converta ENTREGA.md para PDF**

   **Opção 1: VSCode com extensão**
   - Instale a extensão "Markdown PDF"
   - Abra `ENTREGA.md`
   - Pressione `Ctrl+Shift+P` (ou `Cmd+Shift+P` no Mac)
   - Digite "Markdown PDF: Export (pdf)"
   - Salve como `ENTREGA_FIAP_FRONTEND.pdf`

   **Opção 2: Online**
   - Acesse https://www.markdowntopdf.com/
   - Cole o conteúdo do ENTREGA.md
   - Faça download do PDF

   **Opção 3: Pandoc (se tiver instalado)**
   ```bash
   pandoc ENTREGA.md -o ENTREGA_FIAP_FRONTEND.pdf
   ```

4. **Revise o PDF**
   - Verifique se todas as informações estão corretas
   - Verifique se os prints estão visíveis
   - Verifique a formatação

5. **Envie pelo sistema da FIAP**
   - Acesse o sistema de trabalhos da FIAP
   - Faça upload do PDF
   - Confirme o envio

---

## ✅ Checklist Final

Antes de entregar, verifique:

### Requisitos Básicos (7 pontos)
- [ ] Projeto no GitHub público
- [ ] Site funcionando (Vercel/Netlify)
- [ ] Consumindo a API BFF corretamente
- [ ] Interface visual agradável
- [ ] Responsivo (mobile, tablet, desktop)
- [ ] README com nome dos integrantes

### Bônus (+3 pontos)
- [ ] README estruturado completo (+1)
- [ ] BFF próprio deployado (+1)
- [ ] Lighthouse com prints e explicações (+1)

### Entrega
- [ ] PDF gerado com todas as informações
- [ ] URLs testadas e funcionando
- [ ] Informações dos integrantes corretas
- [ ] Enviado pelo sistema da FIAP

---

## 🆘 Problemas Comuns

### Erro ao instalar dependências
```bash
# Limpe o cache e tente novamente
rm -rf node_modules package-lock.json
npm install
```

### Build falha no Vercel/Netlify
- Verifique se o `package.json` está correto
- Verifique se não há erros no código
- Verifique os logs de build na plataforma

### BFF não funciona após deploy
- Verifique se adicionou a variável `OPENAI_API_KEY`
- Verifique os logs no Render
- Teste a rota `/ask` diretamente no navegador

### CORS error ao chamar o BFF
- Certifique-se que o BFF tem `cors` configurado
- No Render, pode demorar alguns minutos para iniciar

### Lighthouse com notas baixas
- Execute em modo anônimo
- Feche outras abas
- Teste com uma boa conexão de internet
- O site do BFF original pode estar lento, use o seu próprio

---

## 📞 Suporte

Se tiver dúvidas:
1. Releia este guia com atenção
2. Consulte a documentação oficial das ferramentas
3. Procure o professor ou monitores da FIAP

---

**Boa sorte! 🍀**
