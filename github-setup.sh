#!/bin/bash

# SCRIPT PARA CONECTAR AO GITHUB
# 
# 1. Crie o repositório no GitHub primeiro: https://github.com/new
# 2. Substitua SEU_USUARIO pelo seu usuário do GitHub
# 3. Execute este script: bash github-setup.sh

# SUBSTITUA AQUI:
GITHUB_USER="SEU_USUARIO_AQUI"
REPO_NAME="fiap-vocab-learning"

# Comandos
git branch -M main
git remote add origin "https://github.com/$GITHUB_USER/$REPO_NAME.git"
git push -u origin main

echo "✅ Projeto enviado para GitHub!"
echo "🌐 URL: https://github.com/$GITHUB_USER/$REPO_NAME"
