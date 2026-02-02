# 📸 PREVIEW DO PROJETO

## 🎨 Interface Visual

Este arquivo descreve como o projeto se parece quando executado.

---

## 🏠 Página Principal

### Header (Cabeçalho)
```
┌─────────────────────────────────────────────────────────┐
│  📚 Vocab Learning                    [6 palavras]      │
│     Aprenda inglês de forma inteligente                 │
└─────────────────────────────────────────────────────────┘
```

**Características:**
- Fundo branco translúcido com efeito blur
- Ícone de livro em gradiente azul-indigo
- Título em gradiente
- Contador de palavras carregadas
- Sticky (fixo no topo ao rolar)

---

### Área de Busca e Controles
```
┌─────────────────────────────────────────────────────────┐
│  [🔍 Buscar palavras...]         [↻ Novas Palavras]    │
└─────────────────────────────────────────────────────────┘
```

**Características:**
- Campo de busca com ícone de lupa
- Botão com gradiente azul-indigo
- Animação de loading (spinner quando carregando)
- Efeito hover com scale

---

### Grid de Palavras (3 colunas no desktop)

```
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Resilient    ⭐ │  │ Serendipity  ☆  │  │ Eloquent     ☆  │
│                  │  │                  │  │                  │
│ Descrição:       │  │ Descrição:       │  │ Descrição:       │
│ Capaz de se      │  │ Ocorrência de    │  │ Fluente e        │
│ recuperar...     │  │ eventos por...   │  │ persuasivo...    │
│                  │  │                  │  │                  │
│ Exemplo de uso:  │  │ Exemplo de uso:  │  │ Exemplo de uso:  │
│ ┌──────────────┐ │  │ ┌──────────────┐ │  │ ┌──────────────┐ │
│ │Despite facing│ │  │ │Finding that  │ │  │ │The speaker   │ │
│ │challenges... │ │  │ │book was...   │ │  │ │was so...     │ │
│ └──────────────┘ │  │ └──────────────┘ │  │ └──────────────┘ │
└──────────────────┘  └──────────────────┘  └──────────────────┘
```

**Características de cada card:**
- Fundo branco com sombra
- Hover: sombra aumenta + move para cima
- Título da palavra em negrito (tamanho grande)
- Estrela de favorito (clicável)
- Descrição em português
- Exemplo de uso em fundo azul claro
- Borda superior ao passar o mouse
- Totalmente responsivo

---

### Responsividade

**Desktop (> 1024px):** 3 colunas
```
[Card] [Card] [Card]
[Card] [Card] [Card]
```

**Tablet (768px - 1024px):** 2 colunas
```
[Card] [Card]
[Card] [Card]
```

**Mobile (< 768px):** 1 coluna
```
[Card]
[Card]
[Card]
```

---

### Estados da Aplicação

#### 1. **Estado Inicial (Vazio)**
```
       📚
   Comece a aprender!
   
Clique no botão "Novas Palavras"
       para começar
```

#### 2. **Estado de Loading**
```
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ ░░░░░░░░░░░░ │  │ ░░░░░░░░░░░░ │  │ ░░░░░░░░░░░░ │
│ ░░░░░░░░     │  │ ░░░░░░░░     │  │ ░░░░░░░░     │
│ ░░░░░░░░░░   │  │ ░░░░░░░░░░   │  │ ░░░░░░░░░░   │
│ ░░░░░░░░░░░░ │  │ ░░░░░░░░░░░░ │  │ ░░░░░░░░░░░░ │
└──────────────┘  └──────────────┘  └──────────────┘
```
(Skeleton loading com animação pulse)

#### 3. **Estado de Erro**
```
┌─────────────────────────────────────────┐
│ ⚠️ Erro ao carregar palavras            │
│ Não foi possível carregar as palavras.  │
│ Tente novamente.                        │
└─────────────────────────────────────────┘
```

#### 4. **Nenhum Resultado (Busca)**
```
       🔍
Nenhum resultado encontrado

Tente buscar por outra palavra
```

---

### Footer (Rodapé)
```
┌─────────────────────────────────────────────────────────┐
│           Desenvolvido para FIAP - Front-end Engineering│
│              Powered by Vue.js + Tailwind CSS           │
└─────────────────────────────────────────────────────────┘
```

---

## 🎨 Paleta de Cores

### Cores Principais
- **Azul Primary**: #0ea5e9
- **Azul Hover**: #0284c7
- **Indigo**: #6366f1
- **Fundo**: Gradiente de blue-50 via indigo-50 to purple-50

### Cores de Estado
- **Sucesso**: Verde (#10b981)
- **Erro**: Vermelho (#ef4444)
- **Warning**: Amarelo (#f59e0b)
- **Info**: Azul (#3b82f6)

### Cores de Texto
- **Primário**: #1f2937 (gray-800)
- **Secundário**: #6b7280 (gray-600)
- **Terciário**: #9ca3af (gray-400)

---

## ✨ Animações e Efeitos

### Hover nos Cards
- Sombra: `shadow-md` → `shadow-xl`
- Transformação: `translateY(0)` → `translateY(-4px)`
- Duração: 300ms
- Easing: ease-in-out

### Botão "Novas Palavras"
- Hover: Escala 105%
- Gradiente mais escuro
- Sombra aumentada
- Cursor pointer

### Loading Spinner
- Rotação contínua (360°)
- Duração: 1s
- Linear timing

### Cards aparecem
- Transição suave de opacidade
- Aparecem de baixo para cima

---

## 📱 Funcionalidades Interativas

### ⭐ Favoritos
- Click na estrela: vazia → preenchida (amarela)
- Click novamente: preenchida → vazia
- Transição de cor suave

### 🔍 Busca
- Digitação: filtro em tempo real
- Busca em: word, description, useCase
- Case insensitive
- Highlight visual não implementado (mas pode adicionar!)

### 🔄 Recarregar Palavras
- Click no botão
- Loading state ativo
- Requisição à API
- Cards atualizam
- Loading desativa

---

## 🎯 Diferenciais Visuais

1. **Glassmorphism** no header
2. **Gradientes** em títulos e botões
3. **Skeleton loading** profissional
4. **Micro-interações** em todos os elementos
5. **Responsividade** perfeita
6. **Espaçamento** consistente
7. **Tipografia** hierárquica clara
8. **Contraste** adequado (accessibility)
9. **Icons** SVG inline
10. **Smooth scrolling**

---

## 🖼️ Como Tirar Screenshots

### Para o Lighthouse
1. Chrome DevTools (F12)
2. Aba Lighthouse
3. Esperar análise completa
4. Screenshot da tela inteira
5. Incluir scores e métricas visíveis

### Para Documentação
1. Tela inteira do site
2. Versão desktop
3. Versão mobile (DevTools)
4. Card individual (zoom)
5. Estados diferentes (loading, erro, etc)

---

## 📊 Exemplo de Lighthouse Score Esperado

```
Performance:     ████████░░ 85-95
Accessibility:   ██████████ 95-100
Best Practices:  ██████████ 95-100
SEO:            ██████████ 90-100
```

### Métricas Esperadas
- FCP: 0.5s - 1.5s ✅
- LCP: 1.0s - 2.0s ✅
- TBT: 50ms - 150ms ✅
- CLS: 0.00 - 0.05 ✅
- SI: 1.5s - 2.5s ✅

---

## 🎨 Temas e Variações (Ideias)

Se quiser personalizar, você pode:

1. **Trocar cores** para verde, roxo, laranja
2. **Adicionar dark mode**
3. **Mudar fonte** (Google Fonts)
4. **Adicionar ilustrações**
5. **Criar animações** de entrada
6. **Background patterns**
7. **Glow effects** nos cards
8. **Confetti** ao marcar favorito
9. **Sound effects** (opcional)
10. **Modo de quiz** interativo

---

## ✅ Conclusão

O design é:
- ✅ Moderno
- ✅ Limpo
- ✅ Profissional
- ✅ Responsivo
- ✅ Acessível
- ✅ Performático
- ✅ Intuitivo
- ✅ Agradável aos olhos

**Perfeito para nota máxima!** 🌟

---

*Este é o visual do seu projeto. Impressionante, não? 🚀*
