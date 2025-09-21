import type { Platform } from '../types'

export const platforms: Platform[] = [
  // --- 2ª Geração (8-bit) ---
  {
    id: 'atari-2600',
    name: 'Atari 2600',
    category: 'console',
    icon: 'atari-2600',
    color: '#ff6b6b',
    generation: '2nd',
    manufacturer: 'Atari',
    shortName: '2600',
    releaseYear: 1977
  },
  {
    id: 'atari-5200',
    name: 'Atari 5200',
    category: 'console',
    icon: 'atari-2600',
    color: '#ff8e8e',
    generation: '2nd',
    manufacturer: 'Atari',
    shortName: '5200',
    releaseYear: 1982
  },
  {
    id: 'atari-7800',
    name: 'Atari 7800',
    category: 'console',
    icon: 'atari-2600',
    color: '#ffa8a8',
    generation: '2nd',
    manufacturer: 'Atari',
    shortName: '7800',
    releaseYear: 1986
  },
  {
    id: 'colecovision',
    name: 'ColecoVision',
    category: 'console',
    icon: 'atari-2600',
    color: '#ffb3ba',
    generation: '2nd',
    manufacturer: 'Coleco',
    shortName: 'CV',
    releaseYear: 1982
  },
  {
    id: 'intellivision',
    name: 'Intellivision',
    category: 'console',
    icon: 'atari-2600',
    color: '#ffc2c7',
    generation: '2nd',
    manufacturer: 'Mattel',
    shortName: 'INTV',
    releaseYear: 1979
  },

  // --- 3ª Geração (8-bit) ---
  {
    id: 'nes',
    name: 'Nintendo Entertainment System',
    category: 'console',
    icon: 'nes',
    color: '#ff6b6b',
    generation: '3rd',
    manufacturer: 'Nintendo',
    shortName: 'NES',
    releaseYear: 1983
  },
  {
    id: 'master-system',
    name: 'Master System',
    category: 'console',
    icon: 'master-system',
    color: '#4ecdc4',
    generation: '3rd',
    manufacturer: 'Sega',
    shortName: 'MS',
    releaseYear: 1985
  },
  {
    id: 'atari-lynx',
    name: 'Atari Lynx',
    category: 'portable',
    icon: 'atari-2600',
    color: '#ffd1d4',
    generation: '3rd',
    manufacturer: 'Atari',
    shortName: 'Lynx',
    releaseYear: 1989
  },

  // --- 4ª Geração (16-bit) ---
  {
    id: 'snes',
    name: 'Super Nintendo Entertainment System',
    category: 'console',
    icon: 'snes',
    color: '#45b7d1',
    generation: '4th',
    manufacturer: 'Nintendo',
    shortName: 'SNES',
    releaseYear: 1990
  },
  {
    id: 'mega-drive',
    name: 'Mega Drive',
    category: 'console',
    icon: 'mega-drive',
    color: '#96ceb4',
    generation: '4th',
    manufacturer: 'Sega',
    shortName: 'MD',
    releaseYear: 1988
  },
  {
    id: 'turbografx-16',
    name: 'TurboGrafx-16',
    category: 'console',
    icon: 'atari-2600',
    color: '#a8e6cf',
    generation: '4th',
    manufacturer: 'NEC',
    shortName: 'TG16',
    releaseYear: 1987
  },
  {
    id: 'neo-geo',
    name: 'Neo Geo',
    category: 'console',
    icon: 'neo-geo',
    color: '#ffd93d',
    generation: '4th',
    manufacturer: 'SNK',
    shortName: 'NG',
    releaseYear: 1990
  },
  {
    id: 'game-boy',
    name: 'Game Boy',
    category: 'portable',
    icon: 'game-boy',
    color: '#4ade80',
    generation: '4th',
    manufacturer: 'Nintendo',
    shortName: 'GB',
    releaseYear: 1989
  },
  {
    id: 'game-gear',
    name: 'Game Gear',
    category: 'portable',
    icon: 'game-gear',
    color: '#06b6d4',
    generation: '4th',
    manufacturer: 'Sega',
    shortName: 'GG',
    releaseYear: 1990
  },

  // --- 5ª Geração (32/64-bit) ---
  {
    id: 'playstation',
    name: 'PlayStation',
    category: 'console',
    icon: 'playstation',
    color: '#feca57',
    generation: '5th',
    manufacturer: 'Sony',
    shortName: 'PS1',
    releaseYear: 1994
  },
  {
    id: 'n64',
    name: 'Nintendo 64',
    category: 'console',
    icon: 'n64',
    color: '#ff9ff3',
    generation: '5th',
    manufacturer: 'Nintendo',
    shortName: 'N64',
    releaseYear: 1996
  },
  {
    id: 'saturn',
    name: 'Sega Saturn',
    category: 'console',
    icon: 'saturn',
    color: '#c7ceea',
    generation: '5th',
    manufacturer: 'Sega',
    shortName: 'SS',
    releaseYear: 1994
  },
  {
    id: '3do',
    name: '3DO Interactive Multiplayer',
    category: 'console',
    icon: 'atari-2600',
    color: '#d4a5a5',
    generation: '5th',
    manufacturer: '3DO',
    shortName: '3DO',
    releaseYear: 1993
  },
  {
    id: 'atari-jaguar',
    name: 'Atari Jaguar',
    category: 'console',
    icon: 'atari-2600',
    color: '#e8a87c',
    generation: '5th',
    manufacturer: 'Atari',
    shortName: 'Jaguar',
    releaseYear: 1993
  },
  {
    id: 'virtual-boy',
    name: 'Virtual Boy',
    category: 'console',
    icon: 'virtual-boy',
    color: '#ff6b6b',
    generation: '5th',
    manufacturer: 'Nintendo',
    shortName: 'VB',
    releaseYear: 1995
  },

  // --- 6ª Geração (128-bit) ---
  {
    id: 'playstation-2',
    name: 'PlayStation 2',
    category: 'console',
    icon: 'playstation-2',
    color: '#ff7675',
    generation: '6th',
    manufacturer: 'Sony',
    shortName: 'PS2',
    releaseYear: 2000
  },
  {
    id: 'gamecube',
    name: 'Nintendo GameCube',
    category: 'console',
    icon: 'gamecube',
    color: '#74b9ff',
    generation: '6th',
    manufacturer: 'Nintendo',
    shortName: 'GCN',
    releaseYear: 2001
  },
  {
    id: 'dreamcast',
    name: 'Sega Dreamcast',
    category: 'console',
    icon: 'dreamcast',
    color: '#00b894',
    generation: '6th',
    manufacturer: 'Sega',
    shortName: 'DC',
    releaseYear: 1998
  },
  {
    id: 'xbox',
    name: 'Xbox',
    category: 'console',
    icon: 'atari-2600',
    color: '#6c5ce7',
    generation: '6th',
    manufacturer: 'Microsoft',
    shortName: 'Xbox',
    releaseYear: 2001
  },

  // --- Portáteis Avançados ---
  {
    id: 'game-boy-color',
    name: 'Game Boy Color',
    category: 'portable',
    icon: 'game-boy-color',
    color: '#00cec9',
    generation: '5th',
    manufacturer: 'Nintendo',
    shortName: 'GBC',
    releaseYear: 1998
  },
  {
    id: 'game-boy-advance',
    name: 'Game Boy Advance',
    category: 'portable',
    icon: 'game-boy-advance',
    color: '#55a3ff',
    generation: '6th',
    manufacturer: 'Nintendo',
    shortName: 'GBA',
    releaseYear: 2001
  },
  {
    id: 'wonderswan',
    name: 'WonderSwan',
    category: 'portable',
    icon: 'atari-2600',
    color: '#fd79a8',
    generation: '5th',
    manufacturer: 'Bandai',
    shortName: 'WS',
    releaseYear: 1999
  },
  {
    id: 'ngp',
    name: 'Neo Geo Pocket',
    category: 'portable',
    icon: 'neo-geo',
    color: '#fdcb6e',
    generation: '5th',
    manufacturer: 'SNK',
    shortName: 'NGP',
    releaseYear: 1998
  },

  // --- Arcade & Emuladores ---
  {
    id: 'arcade',
    name: 'Arcade',
    category: 'arcade',
    icon: 'arcade',
    color: '#e17055',
    generation: 'arcade',
    manufacturer: 'Various',
    shortName: 'Arcade',
    releaseYear: 1971
  },
  {
    id: 'mame',
    name: 'MAME',
    category: 'emulator',
    icon: 'mame',
    color: '#81ecec',
    generation: 'emulator',
    manufacturer: 'MAME Team',
    shortName: 'MAME',
    releaseYear: 1997
  },

  // --- Plataformas Modernas ---
  {
    id: 'windows',
    name: 'Windows',
    category: 'pc',
    icon: 'windows',
    color: '#00a8ff',
    generation: 'pc',
    manufacturer: 'Microsoft',
    shortName: 'Win',
    releaseYear: 1985
  },
  {
    id: 'mac',
    name: 'macOS',
    category: 'pc',
    icon: 'mac',
    color: '#2d3436',
    generation: 'pc',
    manufacturer: 'Apple',
    shortName: 'Mac',
    releaseYear: 1984
  },
  {
    id: 'linux',
    name: 'Linux',
    category: 'pc',
    icon: 'linux',
    color: '#00b894',
    generation: 'pc',
    manufacturer: 'Various',
    shortName: 'Linux',
    releaseYear: 1991
  },
  {
    id: 'android',
    name: 'Android',
    category: 'mobile',
    icon: 'android',
    color: '#00cec9',
    generation: 'mobile',
    manufacturer: 'Google',
    shortName: 'Android',
    releaseYear: 2008
  },
  {
    id: 'ios',
    name: 'iOS',
    category: 'mobile',
    icon: 'ios',
    color: '#636e72',
    generation: 'mobile',
    manufacturer: 'Apple',
    shortName: 'iOS',
    releaseYear: 2007
  },

  // --- Consoles Modernos Retrô ---
  {
    id: 'psp',
    name: 'PlayStation Portable',
    category: 'portable',
    icon: 'psp',
    color: '#a29bfe',
    generation: '7th',
    manufacturer: 'Sony',
    shortName: 'PSP',
    releaseYear: 2004
  },
  {
    id: 'nintendo-ds',
    name: 'Nintendo DS',
    category: 'portable',
    icon: 'nintendo-ds',
    color: '#fd79a8',
    generation: '7th',
    manufacturer: 'Nintendo',
    shortName: 'DS',
    releaseYear: 2004
  },
  {
    id: 'psvita',
    name: 'PlayStation Vita',
    category: 'portable',
    icon: 'psvita',
    color: '#6c5ce7',
    generation: '8th',
    manufacturer: 'Sony',
    shortName: 'Vita',
    releaseYear: 2011
  },
  {
    id: '3ds',
    name: 'Nintendo 3DS',
    category: 'portable',
    icon: '3ds',
    color: '#00b894',
    generation: '8th',
    manufacturer: 'Nintendo',
    shortName: '3DS',
    releaseYear: 2011
  }
]