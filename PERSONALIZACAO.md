# 🎨 Como Personalizar o Projeto

## 📝 Informações Obrigatórias

### 1. Adicionar Integrantes

**Arquivo**: `README.md` e `ENTREGA.md`

Procure por:
```markdown
## 👥 Integrantes

- [Seu Nome Completo] - RM XXXXX
```

Substitua por:
```markdown
## 👥 Integrantes

- João Silva - RM 12345
- Maria Santos - RM 67890
- Pedro Oliveira - RM 11111
```

### 2. Adicionar URLs após Deploy

**Arquivo**: `README.md` e `ENTREGA.md`

Procure por:
```markdown
- **Site em Produção**: [URL do Vercel/Netlify após deploy]
```

Substitua por:
```markdown
- **Site em Produção**: https://seu-projeto.vercel.app
```

## 🎨 Personalizações Opcionais

### Mudar Cores do Tema

**Arquivo**: `tailwind.config.js`

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Altere estes valores para suas cores preferidas
        500: '#0ea5e9', // Cor principal
        600: '#0284c7', // Cor hover
      },
    },
  },
}
```

### Mudar Título e Descrição

**Arquivo**: `src/App.vue`

```vue
<h1 class="text-2xl font-bold...">
  Vocab Learning  <!-- Mude aqui -->
</h1>
<p class="text-sm text-gray-600">
  Aprenda inglês de forma inteligente  <!-- Mude aqui -->
</p>
```

**Arquivo**: `index.html`

```html
<title>Vocab Learning - Aprenda Inglês</title>  <!-- Mude aqui -->
```

### Mudar Rodapé

**Arquivo**: `src/App.vue`

```vue
<footer class="bg-white/80...">
  <p class="text-sm">
    Desenvolvido para FIAP - Front-end Engineering  <!-- Mude aqui -->
  </p>
</footer>
```

### Usar Seu Próprio BFF

**Arquivo**: `src/App.vue`

Linha ~141:
```javascript
const BFF_URL = 'https://fiap-bff-9aojr.onrender.com/ask'
```

Mude para:
```javascript
const BFF_URL = 'https://seu-bff.onrender.com/ask'
```

Ou para testar localmente:
```javascript
const BFF_URL = 'http://localhost:3000/ask'
```

### Adicionar Mais Funcionalidades

#### 1. Ordenação de Palavras

**Arquivo**: `src/App.vue`

No `<template>`, adicione antes do grid de palavras:
```vue
<div class="mb-4">
  <select v-model="sortBy" class="px-4 py-2 border rounded-lg">
    <option value="">Ordenar por...</option>
    <option value="word">Alfabética (A-Z)</option>
    <option value="word-desc">Alfabética (Z-A)</option>
  </select>
</div>
```

No `<script setup>`:
```javascript
const sortBy = ref('')

const filteredWords = computed(() => {
  let result = words.value.filter(/* filtro existente */)
  
  if (sortBy.value === 'word') {
    result.sort((a, b) => a.word.localeCompare(b.word))
  } else if (sortBy.value === 'word-desc') {
    result.sort((a, b) => b.word.localeCompare(a.word))
  }
  
  return result
})
```

#### 2. Salvar Favoritos no LocalStorage

```javascript
import { ref, computed, onMounted, watch } from 'vue'

// Carregar favoritos do localStorage
onMounted(() => {
  const saved = localStorage.getItem('favorites')
  if (saved) {
    const favorites = JSON.parse(saved)
    // Marcar favoritos nas palavras carregadas
    words.value.forEach(word => {
      if (favorites.includes(word.word)) {
        word.isFavorite = true
      }
    })
  }
})

// Salvar favoritos quando mudar
watch(words, (newWords) => {
  const favorites = newWords
    .filter(w => w.isFavorite)
    .map(w => w.word)
  localStorage.setItem('favorites', JSON.stringify(favorites))
}, { deep: true })
```

#### 3. Contador de Palavras Aprendidas

```javascript
const learnedCount = computed(() => 
  words.value.filter(w => w.isFavorite).length
)

// No template
<span class="px-3 py-1 bg-green-100 text-green-700 rounded-full">
  {{ learnedCount }} palavras aprendidas
</span>
```

## 🎯 Melhorias de Performance

### 1. Lazy Loading de Imagens (se adicionar)

```vue
<img loading="lazy" src="...">
```

### 2. Debounce na Busca

```javascript
import { ref, watch } from 'vue'

let searchTimeout
watch(searchQuery, (newValue) => {
  clearTimeout(searchTimeout)
  searchTimeout = setTimeout(() => {
    // Executar busca
  }, 300)
})
```

### 3. Virtualização (para muitas palavras)

Considere usar `vue-virtual-scroller` se tiver 100+ palavras.

## 🐛 Adicionar Tratamento de Erros Melhorado

```javascript
const fetchWords = async () => {
  loading.value = true
  error.value = null
  
  try {
    const response = await axios.get(BFF_URL, {
      timeout: 10000 // 10 segundos
    })
    
    if (!response.data || !Array.isArray(response.data)) {
      throw new Error('Formato de resposta inválido')
    }
    
    if (response.data.length === 0) {
      throw new Error('Nenhuma palavra retornada')
    }
    
    words.value = response.data.map(word => ({
      ...word,
      isFavorite: false
    }))
    
  } catch (err) {
    console.error('Erro:', err)
    
    if (err.code === 'ECONNABORTED') {
      error.value = 'Tempo de conexão esgotado. Tente novamente.'
    } else if (err.response?.status === 429) {
      error.value = 'Muitas requisições. Aguarde um momento.'
    } else {
      error.value = 'Erro ao carregar. Verifique sua conexão.'
    }
  } finally {
    loading.value = false
  }
}
```

## 📱 Melhorias de Acessibilidade

### Adicionar ARIA labels

```vue
<button
  aria-label="Carregar novas palavras"
  @click="fetchWords"
>
  Novas Palavras
</button>

<input
  aria-label="Buscar palavras"
  placeholder="Buscar palavras..."
  v-model="searchQuery"
/>
```

### Melhorar Contraste

Use ferramentas como:
- https://webaim.org/resources/contrastchecker/
- Chrome DevTools > Lighthouse > Accessibility

## 🔒 Segurança

### Sanitizar Entrada (se aceitar input do usuário)

```bash
npm install dompurify
```

```javascript
import DOMPurify from 'dompurify'

const clean = DOMPurify.sanitize(userInput)
```

## 📊 Analytics (Opcional)

### Google Analytics

```html
<!-- No index.html, antes de </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ⚠️ Importante

- Sempre teste após fazer mudanças
- Faça commit antes de grandes alterações
- Use branches para experimentar: `git checkout -b feature/nova-funcionalidade`
- Mantenha o código limpo e comentado

---

**Personalize com criatividade! 🚀**
