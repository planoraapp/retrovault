import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuração
const ICONS_DIR = path.join(__dirname, '../public/icons/consoles');
const BASE_URL = 'https://static.retroachievements.org/assets/images/system/';

// Mapeamento de consoles para arquivos do RetroAchievements
const consoleIcons = {
  '3do': '3do.png',
  'arcade': 'arc.png',
  'atari-2600': '2600.png',
  'atari-7800': '7800.png',
  'atari-jaguar': 'jag.png',
  'atari-lynx': 'lynx.png',
  'colecovision': 'cv.png',
  'dreamcast': 'dc.png',
  'game-boy': 'gb.png',
  'game-boy-advance': 'gba.png',
  'game-boy-color': 'gbc.png',
  'game-gear': 'gg.png',
  'gamecube': 'gc.png',
  'intellivision': 'intv.png',
  'master-system': 'sms.png',
  'mega-drive': 'md.png',
  'n64': 'n64.png',
  'nes': 'nes.png',
  'neo-geo': 'ngcd.png',
  'ngp': 'ngp.png',
  'nintendo-ds': 'ds.png',
  'playstation': 'ps1.png',
  'playstation-2': 'ps2.png',
  'psp': 'psp.png',
  'saturn': 'saturn.png',
  'snes': 'snes.png',
  'turbografx-16': 'pce.png',
  'virtual-boy': 'vb.png',
  'wonderswan': 'ws.png'
};

// Função para baixar um arquivo
function downloadFile(url, filepath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`HTTP ${response.statusCode}: ${response.statusMessage}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        resolve(filepath);
      });
      
      file.on('error', (err) => {
        fs.unlink(filepath, () => {}); // Remove arquivo parcial
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

// Função principal
async function downloadAllIcons() {
  console.log('🎮 Iniciando download dos ícones dos consoles...\n');
  
  // Criar diretório se não existir
  if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR, { recursive: true });
    console.log(`📁 Diretório criado: ${ICONS_DIR}`);
  }
  
  const results = {
    success: [],
    failed: []
  };
  
  // Baixar cada ícone
  for (const [consoleId, filename] of Object.entries(consoleIcons)) {
    const url = `${BASE_URL}${filename}`;
    const filepath = path.join(ICONS_DIR, `${consoleId}.png`);
    
    try {
      console.log(`⬇️  Baixando ${consoleId}...`);
      await downloadFile(url, filepath);
      results.success.push(consoleId);
      console.log(`✅ ${consoleId} baixado com sucesso!`);
    } catch (error) {
      results.failed.push({ consoleId, error: error.message });
      console.log(`❌ Erro ao baixar ${consoleId}: ${error.message}`);
    }
  }
  
  // Relatório final
  console.log('\n📊 Relatório Final:');
  console.log(`✅ Sucessos: ${results.success.length}`);
  console.log(`❌ Falhas: ${results.failed.length}`);
  
  if (results.success.length > 0) {
    console.log('\n🎉 Ícones baixados com sucesso:');
    results.success.forEach(consoleId => console.log(`   - ${consoleId}`));
  }
  
  if (results.failed.length > 0) {
    console.log('\n💥 Falhas:');
    results.failed.forEach(({ consoleId, error }) => 
      console.log(`   - ${consoleId}: ${error}`)
    );
  }
  
  console.log(`\n📁 Ícones salvos em: ${ICONS_DIR}`);
  console.log('\n🔄 Para usar os ícones locais, atualize o arquivo src/utils/consoleIcons.ts');
}

// Executar se chamado diretamente
if (import.meta.url === `file://${process.argv[1]}`) {
  downloadAllIcons().catch(console.error);
}

export { downloadAllIcons, consoleIcons };
