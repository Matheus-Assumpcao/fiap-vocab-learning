import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do OpenAI (só inicializa se a chave existir)
let openai = null;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
  console.log('✅ OpenAI configurada com sucesso');
} else {
  console.log('⚠️  OpenAI API Key não encontrada - usando dados de fallback');
}

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
    // Se não tiver OpenAI configurada, retorna fallback direto
    if (!openai) {
      return res.json(getFallbackWords());
    }

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
    res.json(getFallbackWords());
  }
});

// Função auxiliar para retornar palavras de fallback (embaralhadas)
function getFallbackWords() {
  const allWords = [
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
      description: "Muito cuidadoso e preciso; atento aos mínimos detalhes",
      useCase: "Her meticulous attention to detail ensured that the report was absolutely perfect."
    },
    {
      word: "Inevitable",
      description: "Certo de acontecer; impossível de evitar ou prevenir",
      useCase: "Climate change is making extreme weather events increasingly inevitable."
    },
    {
      word: "Profound",
      description: "Muito profundo, intenso ou de grande significado; que vai além do superficial",
      useCase: "The book had a profound impact on how I view the world and my place in it."
    },
    {
      word: "Versatile",
      description: "Capaz de se adaptar ou ser adaptado a muitas funções diferentes; flexível e multifuncional",
      useCase: "This tool is versatile and can be used for multiple purposes in the kitchen."
    },
    {
      word: "Innovative",
      description: "Que apresenta novas ideias; criativo e original",
      useCase: "The company's innovative approach to marketing helped them stand out from competitors."
    },
    {
      word: "Diligent",
      description: "Que trabalha com cuidado e persistência; dedicado e esforçado",
      useCase: "She was diligent in her studies and always completed her homework on time."
    },
    {
      word: "Ephemeral",
      description: "Que dura muito pouco tempo; passageiro e transitório",
      useCase: "The beauty of cherry blossoms is ephemeral, lasting only a few weeks each spring."
    },
    {
      word: "Tenacious",
      description: "Que não desiste facilmente; persistente e determinado",
      useCase: "His tenacious spirit helped him overcome every obstacle in his path."
    },
    {
      word: "Conscientious",
      description: "Que age de acordo com a consciência; cuidadoso e responsável",
      useCase: "As a conscientious employee, he always double-checked his work before submitting it."
    },
    {
      word: "Ubiquitous",
      description: "Que está presente em toda parte; onipresente",
      useCase: "Smartphones have become ubiquitous in modern society, found in nearly everyone's pocket."
    },
    {
      word: "Candid",
      description: "Franco e honesto; direto e sincero",
      useCase: "I appreciate your candid feedback about my presentation."
    },
    {
      word: "Benevolent",
      description: "Que deseja fazer o bem aos outros; bondoso e generoso",
      useCase: "The benevolent billionaire donated millions to charity every year."
    },
    {
      word: "Astute",
      description: "Que demonstra perspicácia e inteligência; sagaz e perspicaz",
      useCase: "Her astute observations about market trends helped the company avoid losses."
    },
    {
      word: "Prudent",
      description: "Que age com cautela e bom senso; cauteloso e sensato",
      useCase: "It would be prudent to save some money for emergencies."
    },
    {
      word: "Articulate",
      description: "Que se expressa claramente; eloquente e claro",
      useCase: "The professor was very articulate and made complex concepts easy to understand."
    },
    {
      word: "Coherent",
      description: "Que é lógico e faz sentido; consistente e compreensível",
      useCase: "Please try to give a more coherent explanation of what happened."
    },
    {
      word: "Obsolete",
      description: "Que não é mais usado ou útil; ultrapassado e antiquado",
      useCase: "Floppy disks became obsolete with the advent of USB drives and cloud storage."
    },
    {
      word: "Perseverance",
      description: "Persistência em fazer algo apesar das dificuldades; determinação",
      useCase: "With perseverance and hard work, she finally achieved her dream of becoming a doctor."
    },
    {
      word: "Intricate",
      description: "Muito complicado ou detalhado; complexo e elaborado",
      useCase: "The watch had an intricate mechanism with hundreds of tiny moving parts."
    },
    {
      word: "Compelling",
      description: "Que é convincente ou fascinante; persuasivo e cativante",
      useCase: "The documentary presented a compelling argument for renewable energy."
    },
    {
      word: "Nuance",
      description: "Diferença ou variação sutil; sutileza",
      useCase: "Understanding the nuances of a language takes years of practice."
    },
    {
      word: "Exemplary",
      description: "Que serve de exemplo; modelo e admirável",
      useCase: "Her exemplary behavior earned her the respect of everyone in the office."
    },
    {
      word: "Skeptical",
      description: "Que duvida ou questiona; cético e desconfiado",
      useCase: "I'm skeptical about claims that sound too good to be true."
    },
    {
      word: "Abundant",
      description: "Que existe em grande quantidade; abundante e farto",
      useCase: "The region has abundant natural resources, including oil and minerals."
    },
    {
      word: "Deliberate",
      description: "Feito intencionalmente; intencional e proposital",
      useCase: "It was a deliberate choice to pursue a career in teaching rather than medicine."
    },
    {
      word: "Substantial",
      description: "De grande importância, tamanho ou valor; considerável e significativo",
      useCase: "The company made substantial improvements to its customer service this year."
    },
    {
      word: "Transparent",
      description: "Claro e fácil de entender; honesto e aberto",
      useCase: "The government promised to be more transparent about its spending decisions."
    },
    {
      word: "Conducive",
      description: "Que contribui para tornar algo possível; favorável",
      useCase: "A quiet environment is conducive to studying and concentration."
    },
    {
      word: "Arbitrary",
      description: "Baseado em escolha aleatória ou pessoal, não em razão; aleatório",
      useCase: "The decision seemed arbitrary and lacked any logical explanation."
    },
    {
      word: "Advocate",
      description: "Defender ou apoiar uma causa publicamente; defender",
      useCase: "She advocates for environmental protection and sustainable living."
    },
    {
      word: "Mitigate",
      description: "Tornar menos severo ou grave; amenizar e reduzir",
      useCase: "The company took steps to mitigate the environmental impact of its operations."
    },
    {
      word: "Comprehensive",
      description: "Completo e abrangente; que inclui tudo",
      useCase: "The report provides a comprehensive analysis of the market situation."
    },
    {
      word: "Facilitate",
      description: "Tornar mais fácil; facilitar e auxiliar",
      useCase: "Technology can facilitate communication between people across the globe."
    },
    {
      word: "Adhere",
      description: "Seguir ou obedecer; aderir e cumprir",
      useCase: "All employees must adhere to the company's safety regulations."
    }
  ];
  
  // Embaralha o array e retorna 10 palavras aleatórias
  return allWords.sort(() => Math.random() - 0.5).slice(0, 10);
}

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
