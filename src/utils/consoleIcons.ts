// Mapeamento de logos de consoles retrô usando ícones locais
export const consoleIcons: Record<string, string> = {
  // ===== CONSOLES COM ÍCONES ESPECÍFICOS (ORDENADOS ALFABETICAMENTE) =====
  '3do': '/icons/consoles/3do.png',
  'arcade': '/icons/consoles/arcade.png',
  'atari-2600': '/icons/consoles/atari-2600.png',
  'atari-7800': '/icons/consoles/atari-7800.png',
  'atari-jaguar': '/icons/consoles/atari-jaguar.png',
  'atari-lynx': '/icons/consoles/atari-lynx.png',
  'colecovision': '/icons/consoles/colecovision.png',
  'dreamcast': '/icons/consoles/dreamcast.png',
  'game-boy': '/icons/consoles/game-boy.png',
  'game-boy-advance': '/icons/consoles/game-boy-advance.png',
  'game-boy-color': '/icons/consoles/game-boy-color.png',
  'game-gear': '/icons/consoles/game-gear.png',
  'gamecube': '/icons/consoles/gamecube.png',
  'intellivision': '/icons/consoles/intellivision.png',
  'master-system': '/icons/consoles/master-system.png',
  'mega-drive': '/icons/consoles/mega-drive.png',
  'n64': '/icons/consoles/n64.png',
  'nes': '/icons/consoles/nes.png',
  'neo-geo': '/icons/consoles/neo-geo.png',
  'ngp': '/icons/consoles/ngp.png',
  'nintendo-ds': '/icons/consoles/nintendo-ds.png',
  'playstation': '/icons/consoles/playstation.png',
  'playstation-2': '/icons/consoles/playstation-2.png',
  'psp': '/icons/consoles/psp.png',
  'saturn': '/icons/consoles/saturn.png',
  'snes': '/icons/consoles/snes.png',
  'turbografx-16': '/icons/consoles/turbografx-16.png',
  'virtual-boy': '/icons/consoles/virtual-boy.png',
  'wonderswan': '/icons/consoles/wonderswan.png',

  // ===== CONSOLES SEM ÍCONES ESPECÍFICOS (EMOJIS PADRÃO - ORDENADOS ALFABETICAMENTE) =====
  '3ds': '🎮',
  'android': '🤖',
  'atari-5200': '🎮',
  'ios': '📱',
  'linux': '🐧',
  'mac': '🍎',
  'mame': '🎮',
  'psvita': '🎮',
  'windows': '🪟',
  'xbox': '🎮',

  // ===== FALLBACKS =====
  'all': '🎮'
}

// Função para obter o ícone de um console
export const getConsoleIcon = (consoleId: string): string => {
  return consoleIcons[consoleId] || '🎮'
}

// Função para verificar se é uma URL de imagem
export const isImageUrl = (icon: string): boolean => {
  return icon.startsWith('http') || icon.startsWith('/')
}