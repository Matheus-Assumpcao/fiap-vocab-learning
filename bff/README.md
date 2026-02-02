# FIAP Vocab BFF

Backend For Frontend (BFF) para a aplicação de vocabulário em inglês.

## 🚀 Tecnologias

- Node.js
- Express
- OpenAI API
- CORS

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Chave de API da OpenAI

## 🔧 Configuração

1. **Instale as dependências**
```bash
cd bff
npm install
```

2. **Configure as variáveis de ambiente**

Crie um arquivo `.env` baseado no `.env.example`:
```bash
cp .env.example .env
```

Edite o arquivo `.env` e adicione sua chave da OpenAI:
```
OPENAI_API_KEY=sk-sua-chave-aqui
PORT=3000
```

3. **Execute o servidor**

Modo desenvolvimento (com auto-reload):
```bash
npm run dev
```

Modo produção:
```bash
npm start
```

## 📡 Endpoints

### GET /
Retorna informações sobre a API

### GET /ask
Retorna um array de 10 palavras em inglês com:
- `word`: Palavra em inglês
- `description`: Explicação em português
- `useCase`: Exemplo de uso em inglês

**Exemplo de resposta:**
```json
[
  {
    "word": "Resilient",
    "description": "Capaz de se recuperar rapidamente de dificuldades",
    "useCase": "Despite challenges, she remained resilient."
  }
]
```

## 🌐 Deploy no Render

1. Faça login no [Render](https://render.com)
2. Clique em "New" > "Web Service"
3. Conecte seu repositório do GitHub
4. Configure:
   - **Name**: fiap-vocab-bff
   - **Environment**: Node
   - **Build Command**: `cd bff && npm install`
   - **Start Command**: `cd bff && npm start`
   - **Root Directory**: deixe em branco
5. Adicione a variável de ambiente:
   - **Key**: `OPENAI_API_KEY`
   - **Value**: sua chave da OpenAI
6. Clique em "Create Web Service"

## 📝 Notas

- A API possui fallback com 10 palavras pré-definidas caso a OpenAI falhe
- CORS está habilitado para aceitar requisições de qualquer origem
- Em produção, considere adicionar rate limiting e autenticação
