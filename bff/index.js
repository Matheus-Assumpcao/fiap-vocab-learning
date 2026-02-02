import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// Middlewares
app.use(cors());
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
  res.json({
    message: 'FIAP Vocab BFF - API de Vocabulário em Inglês',
    endpoints: {
      '/ask': 'GET - Retorna 10 palavras em inglês com descrição e exemplo de uso'
    }
  });
});

// Rota /ask - Retorna palavras em inglês
app.get('/ask', async (req, res) => {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `Você é um assistente especializado em ensinar inglês. 
          Retorne APENAS um array JSON válido com 10 objetos, cada um contendo:
          - word: uma palavra em inglês (nível intermediário/avançado)
          - description: explicação clara e concisa da palavra em português
          - useCase: uma frase de exemplo usando a palavra em inglês com contexto real
          
          Formato esperado:
          [{"word": "palavra", "description": "explicação", "useCase": "exemplo"}]
          
          Não inclua markdown, código ou texto adicional. APENAS o array JSON.`
        },
        {
          role: "user",
          content: "Gere 10 palavras em inglês com suas descrições e casos de uso."
        }
      ],
      temperature: 0.8,
      max_tokens: 1500
    });

    const content = completion.choices[0].message.content.trim();
    
    // Remove possíveis marcadores de código markdown
    const jsonContent = content
      .replace(/```json\n?/g, '')
      .replace(/```\n?/g, '')
      .trim();

    const words = JSON.parse(jsonContent);

    // Validação básica
    if (!Array.isArray(words)) {
      throw new Error('Resposta não é um array');
    }

    // Valida se cada palavra tem os campos necessários
    const validWords = words.filter(word => 
      word.word && word.description && word.useCase
    );

    if (validWords.length === 0) {
      throw new Error('Nenhuma palavra válida encontrada');
    }

    res.json(validWords);

  } catch (error) {
    console.error('Erro ao buscar palavras:', error);
    
    // Retorna dados de fallback em caso de erro
    res.json([
      {
        word: "Resilient",
        description: "Capaz de se recuperar rapidamente de dificuldades; resistente e flexível",
        useCase: "Despite facing many challenges, she remained resilient and never gave up on her dreams."
      },
      {
        word: "Serendipity",
        description: "Ocorrência de eventos por acaso de maneira feliz ou benéfica; uma coincidência agradável",
        useCase: "Finding that book was pure serendipity - it had exactly the information I needed for my research."
      },
      {
        word: "Eloquent",
        description: "Fluente e persuasivo ao falar ou escrever; expressivo e bem articulado",
        useCase: "The speaker was so eloquent that everyone in the audience was captivated by her words."
      },
      {
        word: "Endeavor",
        description: "Tentar arduamente alcançar ou fazer algo; esforço ou tentativa séria",
        useCase: "She will endeavor to finish the project before the deadline, despite the obstacles."
      },
      {
        word: "Pragmatic",
        description: "Prático e realista na abordagem de situações; focado em resultados práticos",
        useCase: "He took a pragmatic approach to solving the problem, focusing on what would actually work."
      },
      {
        word: "Ambiguous",
        description: "Que tem mais de um significado possível; não claro ou vago",
        useCase: "The instructions were ambiguous, leaving everyone confused about what to do next."
      },
      {
        word: "Meticulous",
        description: "Muito cuidadoso e preciso; atento aos detalhes",
        useCase: "Her meticulous attention to detail ensured that the report was perfect."
      },
      {
        word: "Inevitable",
        description: "Certo de acontecer; impossível de evitar ou prevenir",
        useCase: "Climate change is making extreme weather events increasingly inevitable."
      },
      {
        word: "Profound",
        description: "Muito profundo, intenso ou de grande significado; que vai além do superficial",
        useCase: "The book had a profound impact on how I view the world."
      },
      {
        word: "Versatile",
        description: "Capaz de se adaptar ou ser adaptado a muitas funções diferentes; flexível",
        useCase: "This tool is versatile and can be used for multiple purposes in the kitchen."
      }
    ]);
  }
});

// Tratamento de rotas não encontradas
app.use((req, res) => {
  res.status(404).json({
    error: 'Rota não encontrada',
    availableEndpoints: {
      '/': 'GET - Informações da API',
      '/ask': 'GET - Retorna palavras em inglês'
    }
  });
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 BFF rodando na porta ${PORT}`);
  console.log(`📚 Acesse: http://localhost:${PORT}`);
});
