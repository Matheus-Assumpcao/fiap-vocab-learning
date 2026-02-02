<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <!-- Header -->
    <header class="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div class="container mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center space-x-3">
            <div class="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <h1 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Vocab Learning
              </h1>
              <p class="text-sm text-gray-600">Aprenda inglês de forma inteligente</p>
            </div>
          </div>
          <div class="hidden md:flex items-center space-x-2 text-sm">
            <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">
              {{ words.length }} palavras carregadas
            </span>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8">
      <!-- Search and Controls -->
      <div class="mb-8 space-y-4">
        <div class="flex flex-col md:flex-row gap-4">
          <div class="flex-1">
            <div class="relative">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Buscar palavras..."
                class="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              />
              <svg class="w-5 h-5 text-gray-400 absolute left-4 top-1/2 transform -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <button
            @click="fetchWords"
            :disabled="loading"
            class="px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
          >
            <span v-if="!loading" class="flex items-center justify-center space-x-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Novas Palavras</span>
            </span>
            <span v-else class="flex items-center justify-center space-x-2">
              <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span>Carregando...</span>
            </span>
          </button>
        </div>
      </div>

      <!-- Error Message -->
      <div v-if="error" class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start space-x-3">
        <svg class="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <div>
          <h3 class="font-semibold text-red-800">Erro ao carregar palavras</h3>
          <p class="text-sm text-red-600">{{ error }}</p>
        </div>
      </div>

      <!-- Loading State -->
      <div v-if="loading && words.length === 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="n in 6" :key="n" class="bg-white rounded-xl shadow-md p-6 animate-pulse">
          <div class="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div class="h-4 bg-gray-200 rounded w-full mb-2"></div>
          <div class="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
          <div class="h-20 bg-gray-200 rounded w-full"></div>
        </div>
      </div>

      <!-- Words Grid -->
      <div v-else-if="filteredWords.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(word, index) in filteredWords"
          :key="index"
          class="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
        >
          <div class="p-6">
            <!-- Word Header -->
            <div class="flex items-start justify-between mb-4">
              <h3 class="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {{ word.word }}
              </h3>
              <button
                @click="toggleFavorite(index)"
                class="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  class="w-6 h-6 transition-colors"
                  :class="word.isFavorite ? 'text-yellow-500 fill-current' : 'text-gray-400'"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </button>
            </div>

            <!-- Description -->
            <div class="mb-4">
              <p class="text-sm font-semibold text-gray-600 mb-1">Descrição:</p>
              <p class="text-gray-700 leading-relaxed">{{ word.description }}</p>
            </div>

            <!-- Use Case -->
            <div class="pt-4 border-t border-gray-100">
              <p class="text-sm font-semibold text-gray-600 mb-2">Exemplo de uso:</p>
              <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg">
                <p class="text-gray-700 italic text-sm leading-relaxed">{{ word.useCase }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Empty State -->
      <div v-else-if="!loading && words.length === 0" class="text-center py-16">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-6">
          <svg class="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">Comece a aprender!</h3>
        <p class="text-gray-600 mb-6">Clique no botão "Novas Palavras" para começar</p>
      </div>

      <!-- No Results State -->
      <div v-else-if="filteredWords.length === 0 && searchQuery" class="text-center py-16">
        <div class="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full mb-6">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-gray-800 mb-2">Nenhum resultado encontrado</h3>
        <p class="text-gray-600">Tente buscar por outra palavra</p>
      </div>
    </main>

    <!-- Footer -->
    <footer class="bg-white/80 backdrop-blur-md mt-16 border-t border-gray-200">
      <div class="container mx-auto px-4 py-6">
        <div class="text-center text-gray-600">
          <p class="text-sm">
            Desenvolvido para FIAP - Front-end Engineering
          </p>
          <p class="text-xs mt-2">
            Powered by <span class="font-semibold text-blue-600">Vue.js</span> + <span class="font-semibold text-blue-600">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

export default {
  name: 'App',
  setup() {
    const words = ref([])
    const loading = ref(false)
    const error = ref(null)
    const searchQuery = ref('')

    // API URL - Configurável via variável de ambiente
    // Em desenvolvimento: usa o BFF local (localhost:3000)
    // Em produção: usa o BFF deployado no Render (você configurará depois do deploy)
    // Para configurar sua URL em produção, crie um arquivo .env com: VITE_BFF_URL=https://seu-bff.onrender.com/ask
    const BFF_URL = import.meta.env.VITE_BFF_URL || 'http://localhost:3000/ask'

    const fetchWords = async () => {
      console.log('🔄 Buscando palavras da API:', BFF_URL)
      loading.value = true
      error.value = null

      try {
        const response = await axios.get(BFF_URL, { timeout: 10000 })
        console.log('✅ Resposta recebida:', response.data)
        
        if (Array.isArray(response.data)) {
          words.value = response.data.map(word => ({
            ...word,
            isFavorite: false
          }))
        } else {
          throw new Error('Formato de resposta inválido')
        }
      } catch (err) {
        console.error('Erro ao buscar palavras:', err)
        
        // FALLBACK: Se a API falhar, usa dados pré-definidos
        words.value = [
          {
            word: "Resilient",
            description: "Capaz de se recuperar rapidamente de dificuldades; resistente e flexível diante de adversidades",
            useCase: "Despite facing many challenges, she remained resilient and never gave up on her dreams.",
            isFavorite: false
          },
          {
            word: "Serendipity",
            description: "Ocorrência de eventos por acaso de maneira feliz ou benéfica; uma coincidência agradável",
            useCase: "Finding that book was pure serendipity - it had exactly the information I needed for my research.",
            isFavorite: false
          },
          {
            word: "Eloquent",
            description: "Fluente e persuasivo ao falar ou escrever; expressivo e bem articulado",
            useCase: "The speaker was so eloquent that everyone in the audience was captivated by her words.",
            isFavorite: false
          },
          {
            word: "Endeavor",
            description: "Tentar arduamente alcançar ou fazer algo; esforço ou tentativa séria",
            useCase: "She will endeavor to finish the project before the deadline, despite the obstacles.",
            isFavorite: false
          },
          {
            word: "Pragmatic",
            description: "Prático e realista na abordagem de situações; focado em resultados práticos",
            useCase: "He took a pragmatic approach to solving the problem, focusing on what would actually work.",
            isFavorite: false
          },
          {
            word: "Ambiguous",
            description: "Que tem mais de um significado possível; não claro ou vago",
            useCase: "The instructions were ambiguous, leaving everyone confused about what to do next.",
            isFavorite: false
          },
          {
            word: "Meticulous",
            description: "Muito cuidadoso e preciso; atento aos mínimos detalhes",
            useCase: "Her meticulous attention to detail ensured that the report was absolutely perfect.",
            isFavorite: false
          },
          {
            word: "Inevitable",
            description: "Certo de acontecer; impossível de evitar ou prevenir",
            useCase: "Climate change is making extreme weather events increasingly inevitable.",
            isFavorite: false
          },
          {
            word: "Profound",
            description: "Muito profundo, intenso ou de grande significado; que vai além do superficial",
            useCase: "The book had a profound impact on how I view the world and my place in it.",
            isFavorite: false
          },
          {
            word: "Versatile",
            description: "Capaz de se adaptar ou ser adaptado a muitas funções diferentes; flexível e multifuncional",
            useCase: "This tool is versatile and can be used for multiple purposes in the kitchen.",
            isFavorite: false
          }
        ]
        
        error.value = 'API temporariamente indisponível. Mostrando palavras de exemplo.'
      } finally {
        loading.value = false
      }
    }

    const filteredWords = computed(() => {
      if (!searchQuery.value) {
        return words.value
      }

      const query = searchQuery.value.toLowerCase()
      return words.value.filter(word => 
        word.word.toLowerCase().includes(query) ||
        word.description.toLowerCase().includes(query) ||
        word.useCase.toLowerCase().includes(query)
      )
    })

    const toggleFavorite = (index) => {
      words.value[index].isFavorite = !words.value[index].isFavorite
    }

    onMounted(() => {
      fetchWords()
    })

    return {
      words,
      loading,
      error,
      searchQuery,
      filteredWords,
      fetchWords,
      toggleFavorite
    }
  }
}
</script>
