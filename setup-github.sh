#!/bin/bash

echo "🚀 SETUP GITHUB - Vocab Learning App"
echo "======================================"
echo ""
echo "📋 PASSO 1: Criar repositório no GitHub"
echo ""
echo "1. Abra seu navegador em: https://github.com/new"
echo "2. Preencha:"
echo "   - Repository name: fiap-vocab-learning"
echo "   - Description: App de vocabulário em inglês - FIAP Front-end Engineering"
echo "   - Visibilidade: ✅ Public"
echo "   - ❌ NÃO marque 'Add a README file'"
echo "   - ❌ NÃO adicione .gitignore"
echo "   - ❌ NÃO adicione license"
echo "3. Clique em 'Create repository'"
echo ""
echo "======================================"
read -p "✅ Já criou o repositório? Digite seu USUÁRIO do GitHub: " GITHUB_USER
echo ""

if [ -z "$GITHUB_USER" ]; then
    echo "❌ Usuário não pode estar vazio!"
    exit 1
fi

REPO_NAME="fiap-vocab-learning"
REPO_URL="https://github.com/$GITHUB_USER/$REPO_NAME.git"

echo "📤 Conectando ao repositório..."
echo "URL: $REPO_URL"
echo ""

# Remove remote se já existir
git remote remove origin 2>/dev/null

# Adiciona novo remote
git remote add origin "$REPO_URL"

echo "🔄 Fazendo push para GitHub..."
git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ SUCESSO! Projeto enviado para GitHub!"
    echo ""
    echo "🌐 URLs do seu projeto:"
    echo "   Repositório: https://github.com/$GITHUB_USER/$REPO_NAME"
    echo "   Clone URL: $REPO_URL"
    echo ""
    echo "📋 Próximos passos:"
    echo "   1. ✅ GitHub - CONCLUÍDO"
    echo "   2. ⏭️  Deploy do BFF no Render"
    echo "   3. ⏭️  Deploy do Frontend no Vercel"
    echo ""
    echo "👉 Siga o arquivo DEPLOY_RAPIDO.md para os próximos passos!"
else
    echo ""
    echo "❌ Erro ao fazer push!"
    echo ""
    echo "🔍 Possíveis causas:"
    echo "   - Usuário GitHub incorreto"
    echo "   - Repositório não foi criado"
    echo "   - Não tem permissão de push"
    echo ""
    echo "💡 Solução:"
    echo "   1. Verifique se criou o repositório no GitHub"
    echo "   2. Verifique se o nome do usuário está correto"
    echo "   3. Execute: git push -u origin main"
fi
