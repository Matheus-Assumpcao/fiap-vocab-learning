# ❓ FAQ - Perguntas Frequentes

## 📚 Sobre o Projeto

### Q: O que é este projeto?
**A:** É uma aplicação web em Vue.js que consome uma API (BFF) para exibir palavras em inglês com descrições e exemplos, ajudando no aprendizado de vocabulário. Desenvolvido para a disciplina Front-end Engineering da FIAP.

### Q: Qual nota posso conseguir?
**A:** 
- **7 pontos**: Requisitos básicos (projeto funcionando + deploy)
- **+1 ponto**: README estruturado ✅ (já incluído)
- **+1 ponto**: BFF próprio deployado (opcional)
- **+1 ponto**: Lighthouse com análise (fácil de fazer)
- **Total possível**: 10 pontos 🌟

### Q: É obrigatório fazer o BFF?
**A:** Não! O BFF é opcional e vale +1 ponto extra. Você pode usar apenas o BFF fornecido pelo professor (`https://fiap-bff-9aojr.onrender.com/ask`) e ainda assim conseguir 9 pontos.

---

## 💻 Instalação e Execução

### Q: Como instalo o projeto?
**A:** 
```bash
npm install
npm run dev
```
Acesse: http://localhost:5173

### Q: Dá erro ao executar `npm install`?
**A:** Tente:
```bash
# Limpar cache
rm -rf node_modules package-lock.json
npm cache clean --force
npm install

# Se ainda der erro, tente com sudo (macOS/Linux)
sudo npm install
```

### Q: A porta 5173 já está em uso!
**A:** 
Opção 1: Mate o processo
```bash
lsof -ti:5173 | xargs kill
```

Opção 2: Mude a porta no `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000 // ou outra porta
  }
})
```

### Q: Está carregando muito devagar!
**A:** 
- O BFF do professor pode estar lento (no Render free tier)
- Aguarde uns 30 segundos
- Ou use seu próprio BFF (deploy no Render)

---

## 🔧 Desenvolvimento

### Q: Como mudo as cores do tema?
**A:** Edite `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#SEU_COR_AQUI',
      },
    },
  },
}
```

### Q: Como adiciono mais funcionalidades?
**A:** Veja o arquivo `PERSONALIZACAO.md` com várias ideias e exemplos de código!

### Q: Posso usar React ao invés de Vue?
**A:** Sim! O enunciado diz "pode utilizar HTML/JS vanilla, VueJS (preferencial) ou React". Mas este projeto já está pronto em Vue.js.

### Q: Preciso usar Tailwind?
**A:** Não é obrigatório, mas é recomendado. O enunciado diz "para isso pode utilizar Tailwind ou algum outro framework visual à sua escolha". Este projeto já usa Tailwind.

---

## 🌐 Deploy

### Q: Qual plataforma de deploy devo usar?
**A:** Recomendamos:
- **Frontend**: Vercel (mais fácil e rápido)
- **BFF**: Render (tem plano free)

Mas você pode usar Netlify, Railway, Fly.io, etc.

### Q: O deploy falhou no Vercel!
**A:** Verifique:
1. O build funciona localmente? (`npm run build`)
2. Tem erros no código?
3. As configurações estão corretas?
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

### Q: O site está no ar mas não carrega palavras!
**A:** 
1. Verifique a URL do BFF em `src/App.vue`
2. Teste a URL do BFF diretamente no navegador
3. Veja o console do navegador (F12) para erros
4. O BFF do professor pode estar offline (use o seu!)

### Q: Como faço deploy do BFF no Render?
**A:** Siga o `GUIA_PASSO_A_PASSO.md` seção "Deploy do BFF". Resumo:
1. Render > New Web Service
2. Root Directory: `bff`
3. Build: `npm install`
4. Start: `npm start`
5. Add env var: `OPENAI_API_KEY`

---

## 🔑 OpenAI API

### Q: Preciso pagar pela OpenAI API?
**A:** Não necessariamente! A OpenAI oferece créditos gratuitos para novos usuários. Mas se acabar, você pode:
- Usar o BFF do professor (sem custo)
- Adicionar créditos (mínimo ~$5)

### Q: Onde pego a chave da OpenAI?
**A:** 
1. Acesse https://platform.openai.com/
2. Faça login ou crie conta
3. Vá em "API Keys"
4. "Create new secret key"
5. Copie a chave (só mostra uma vez!)

### Q: Minha chave OpenAI não funciona!
**A:** Verifique:
1. A chave está correta no `.env`?
2. O formato é: `OPENAI_API_KEY=sk-...`
3. Você tem créditos na conta OpenAI?
4. Reiniciou o servidor após adicionar?

### Q: Não quero usar OpenAI, posso fazer diferente?
**A:** Sim! Use o BFF do professor ou crie uma API simples que retorna palavras fixas (sem IA).

---

## 📊 Lighthouse

### Q: Como faço a análise Lighthouse?
**A:** 
1. Abra o site HOSPEDADO (não localhost!) no Chrome
2. F12 > Lighthouse
3. Marque Performance, Accessibility, Best Practices, SEO
4. "Analyze page load"
5. Screenshot dos resultados

### Q: Meu Lighthouse score está baixo!
**A:** Dicas:
- Execute em modo anônimo
- Feche outras abas
- Use boa conexão de internet
- Teste desktop e mobile separadamente
- O BFF lento pode afetar o score

### Q: Preciso otimizar para 100 em tudo?
**A:** Não! Scores acima de 90 são excelentes. O importante é:
- Ter os prints
- Entender as métricas
- Documentar no README

---

## 📝 Entrega

### Q: Como gero o PDF?
**A:** 
**Opção 1** (VSCode):
1. Instale extensão "Markdown PDF"
2. Abra `ENTREGA.md`
3. Cmd+Shift+P > "Markdown PDF: Export"

**Opção 2** (Online):
- https://www.markdowntopdf.com/
- Cole o conteúdo do ENTREGA.md
- Download PDF

**Opção 3** (Comando):
```bash
pandoc ENTREGA.md -o ENTREGA.pdf
```

### Q: O que devo incluir no PDF?
**A:** Veja o `ENTREGA.md`:
- Nomes e RMs dos integrantes
- URLs (GitHub, site, BFF)
- Prints do Lighthouse
- Stack utilizada
- Funcionalidades implementadas

### Q: Posso fazer em grupo ou individual?
**A:** Ambos! Grupos de até 4 pessoas OU individual.

### Q: Qual o prazo de entrega?
**A:** 12/02/2026 (você tem 10 dias a partir de hoje!)

---

## 🐛 Problemas Comuns

### Q: Erro "Cannot find module 'vue'"
**A:** 
```bash
npm install vue
```

### Q: Erro de CORS ao chamar a API
**A:** 
- O BFF deve ter CORS habilitado (já tem!)
- Teste a URL da API diretamente no navegador
- Verifique se a URL está correta

### Q: Tailwind não está funcionando!
**A:** 
1. Verifique se importou no `src/style.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. Reinicie o dev server:
```bash
npm run dev
```

### Q: Build dá erro mas dev funciona
**A:** 
```bash
# Teste o build localmente
npm run build

# Veja os erros e corrija
# Depois teste o preview
npm run preview
```

### Q: Git push rejeitado
**A:** 
```bash
# Puxe as mudanças primeiro
git pull origin main

# Resolva conflitos se houver
# Depois push novamente
git push origin main
```

---

## 🎓 Conceitos e Dúvidas Técnicas

### Q: O que é BFF?
**A:** Backend For Frontend - uma API intermediária entre o frontend e outros serviços (como OpenAI). Facilita a integração e melhora a segurança.

### Q: Por que usar Vite ao invés de webpack?
**A:** Vite é mais rápido, moderno e simples. Perfeito para projetos Vue.js.

### Q: O que é Composition API?
**A:** É o novo estilo de escrever componentes Vue 3, usando `setup()` e hooks como `ref`, `computed`, etc. Mais moderno que Options API.

### Q: Preciso entender tudo para entregar?
**A:** Não! O importante é:
- O projeto funcionar
- Estar deployado
- Ter documentação
- Fazer a entrega

Você pode aprender os detalhes depois!

---

## 🚀 Otimizações e Melhorias

### Q: Como adiciono mais palavras?
**A:** A API retorna 10 palavras por padrão. Você pode:
- Chamar múltiplas vezes
- Modificar o BFF para retornar mais
- Implementar paginação

### Q: Como salvo os favoritos?
**A:** Use localStorage! Veja `PERSONALIZACAO.md` para código exemplo.

### Q: Posso adicionar autenticação?
**A:** Pode, mas não é necessário para a tarefa. Foque no essencial primeiro!

### Q: Como adiciono modo dark?
**A:** Com Tailwind:
```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  // ...
}
```

Mas não é obrigatório!

---

## 📚 Recursos e Ajuda

### Q: Onde aprendo mais sobre Vue.js?
**A:** 
- Documentação oficial: https://vuejs.org/
- Vue Mastery: https://www.vuemastery.com/
- YouTube: Traversy Media, Net Ninja

### Q: Onde aprendo Tailwind?
**A:** 
- Docs oficiais: https://tailwindcss.com/docs
- Tailwind UI: https://tailwindui.com/
- YouTube: Tailwind Labs

### Q: Tenho dúvida que não está aqui!
**A:** 
1. Leia o `GUIA_PASSO_A_PASSO.md`
2. Leia o `COMANDOS_RAPIDOS.md`
3. Consulte a documentação oficial
4. Procure o professor/monitores da FIAP

---

## ✅ Checklist Rápido

Antes de entregar, confirme:

- [ ] ✅ Projeto roda localmente
- [ ] ✅ Está no GitHub (público)
- [ ] ✅ Está deployado e acessível
- [ ] ✅ Lighthouse executado
- [ ] ✅ README atualizado
- [ ] ✅ PDF gerado e revisado
- [ ] ✅ Enviado pelo sistema FIAP

---

## 🎉 Mensagem Final

Não se preocupe! O projeto está **completo e funcional**. 

Você só precisa:
1. Executar localmente para testar
2. Fazer deploy
3. Gerar Lighthouse
4. Preencher PDF
5. Entregar

**Tudo vai dar certo! Você consegue! 💪🚀**

---

*Última atualização: 02/02/2026*
