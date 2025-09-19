#!/bin/bash

# Script de configuração do RetroVault
echo "🎮 Configurando RetroVault..."

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Verificar se o projeto está configurado corretamente
echo "🔍 Verificando configuração..."
npm run lint

echo "✅ RetroVault configurado com sucesso!"
echo "🚀 Execute 'npm run dev' para iniciar o servidor de desenvolvimento"
