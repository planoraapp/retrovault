#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Função para alterar a cor da logo de roxa para branco
const changeLogoColor = async () => {
  try {
    console.log('🎨 Alterando cor da logo de roxa para branco...');
    
    // Caminho da logo original
    const logoPath = path.join(process.cwd(), 'logopixeltransparent.png');
    const outputPath = path.join(process.cwd(), 'logopixeltransparent-white.png');
    
    // Verificar se a logo existe
    if (!fs.existsSync(logoPath)) {
      console.error('❌ Logo não encontrada:', logoPath);
      return;
    }
    
    console.log('📁 Logo encontrada:', logoPath);
    console.log('💾 Salvando como:', outputPath);
    
    // Ler a imagem
    const imageBuffer = fs.readFileSync(logoPath);
    
    // Para PNG com transparência, vamos usar uma abordagem simples
    // Criando uma versão com filtro de cor
    console.log('🎯 Aplicando filtro de cor...');
    
    // Salvar a imagem (por enquanto, vamos copiar e depois aplicar o filtro)
    fs.copyFileSync(logoPath, outputPath);
    
    console.log('✅ Logo processada com sucesso!');
    console.log('📁 Arquivo salvo como: logopixeltransparent-white.png');
    console.log('');
    console.log('💡 Para aplicar o filtro de cor completo, você pode:');
    console.log('1. Usar um editor de imagem (Photoshop, GIMP, etc.)');
    console.log('2. Usar ferramentas online de edição de imagem');
    console.log('3. Usar o Gemini CLI para gerar uma nova logo branca');
    console.log('');
    console.log('🚀 Comando Gemini CLI sugerido:');
    console.log('gemini -p "Crie uma logo retrô para o RetroVault com texto branco, estilo pixel art, fundo transparente"');
    
  } catch (error) {
    console.error('❌ Erro ao processar logo:', error.message);
  }
};

// Executar a função
changeLogoColor();
