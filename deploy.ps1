# Script para deploy automático
Write-Host "🚀 Iniciando deploy automático..." -ForegroundColor Green

# Verificar status
Write-Host "📋 Verificando status do Git..." -ForegroundColor Yellow
git status

# Adicionar arquivos
Write-Host "📁 Adicionando arquivos..." -ForegroundColor Yellow
git add .

# Commit
Write-Host "💾 Fazendo commit..." -ForegroundColor Yellow
git commit -m "fix: Correção final automática para deploy no Vercel

- vercel.json com JSON válido e bem formatado
- Firebase.ts com aspas corrigidas
- Build funcionando perfeitamente
- Deploy automático funcionando"

# Push
Write-Host "🚀 Fazendo push para GitHub..." -ForegroundColor Yellow
git push origin main

Write-Host "✅ Deploy automático concluído!" -ForegroundColor Green
Write-Host "🌐 Vercel deve fazer deploy automático em 2-3 minutos" -ForegroundColor Cyan
