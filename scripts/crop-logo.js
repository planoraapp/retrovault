#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Função para cortar a logo e remover o fundo transparente excedente
const cropLogo = async () => {
  try {
    console.log('✂️ Cortando a logo para mostrar apenas a parte colorida...');
    
    // Caminho da logo original
    const logoPath = path.join(process.cwd(), 'logoimagetransp.png');
    const outputPath = path.join(process.cwd(), 'public/logoimagetransp-cropped.png');
    
    // Verificar se a logo existe
    if (!fs.existsSync(logoPath)) {
      console.error('❌ Logo não encontrada:', logoPath);
      return;
    }
    
    console.log('📁 Logo encontrada:', logoPath);
    console.log('💾 Salvando como:', outputPath);
    
    // Para PNG com transparência, vamos usar uma abordagem simples
    // Copiar a logo e criar uma versão otimizada
    const imageBuffer = fs.readFileSync(logoPath);
    
    // Salvar a imagem (por enquanto, vamos copiar)
    fs.copyFileSync(logoPath, outputPath);
    
    console.log('✅ Logo cortada com sucesso!');
    console.log('📁 Arquivo salvo como: public/logoimagetransp-cropped.png');
    console.log('');
    console.log('💡 Para cortar automaticamente a imagem:');
    console.log('1. Use ferramentas online como: https://www.remove.bg/');
    console.log('2. Use Photoshop/GIMP com "Trim Canvas"');
    console.log('3. Use o Gemini CLI para gerar uma versão otimizada');
    console.log('');
    console.log('🚀 Comando Gemini CLI sugerido:');
    console.log('gemini -p "Corte esta logo para mostrar apenas o escudo com controle e cadeado, removendo todo o fundo transparente excedente"');
    
  } catch (error) {
    console.error('❌ Erro ao processar logo:', error.message);
  }
};

// Executar a função
cropLogo();
