import type { Platform } from '../types'

export const platforms: Platform[] = [
  // --- 3ª Geração (8-bit) ---
  {
    id: 'nes',
    name: 'Nintendo Entertainment System',
    category: 'console',
    icon: '🎮',
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
    icon: '🎮',
    color: '#4ecdc4',
    generation: '3rd',
    manufacturer: 'Sega',
    shortName: 'MS',
    releaseYear: 1985
  },
  {
    id: 'atari-7800',
    name: 'Atari 7800',
    category: 'console',
    icon: '🎮',
    color: '#45b7d1',
    generation: '3rd',
    manufacturer: 'Atari',
    shortName: 'ATARI7800',
    releaseYear: 1986
  },

  // --- 4ª Geração (16-bit) ---
  {
    id: 'mega-drive',
    name: 'Mega Drive',
    category: 'console',
    icon: '🎮',
    color: '#96ceb4',
    generation: '4th',
    manufacturer: 'Sega',
    shortName: 'MD',
    releaseYear: 1988
  },
  {
    id: 'snes',
    name: 'Super Nintendo Entertainment System',
    category: 'console',
    icon: '🎮',
    color: '#feca57',
    generation: '4th',
    manufacturer: 'Nintendo',
    shortName: 'SNES',
    releaseYear: 1990
  },
  {
    id: 'turbografx-16',
    name: 'TurboGrafx-16 / PC Engine',
    category: 'console',
    icon: '🎮',
    color: '#ff9ff3',
    generation: '4th',
    manufacturer: 'NEC',
    shortName: 'TG16',
    releaseYear: 1987
  },
  {
    id: 'neo-geo-aes',
    name: 'Neo Geo AES',
    category: 'console',
    icon: '🎮',
    color: '#54a0ff',
    generation: '4th',
    manufacturer: 'SNK',
    shortName: 'NEOGEO',
    releaseYear: 1990
  },

  // --- 5ª Geração (32/64-bit) ---
  {
    id: 'ps1',
    name: 'PlayStation',
    category: 'console',
    icon: '🎮',
    color: '#5f27cd',
    generation: '5th',
    manufacturer: 'Sony',
    shortName: 'PS1',
    releaseYear: 1994
  },
  {
    id: 'saturn',
    name: 'Sega Saturn',
    category: 'console',
    icon: '🎮',
    color: '#00d2d3',
    generation: '5th',
    manufacturer: 'Sega',
    shortName: 'SATURN',
    releaseYear: 1994
  },
  {
    id: 'n64',
    name: 'Nintendo 64',
    category: 'console',
    icon: '🎮',
    color: '#ff6348',
    generation: '5th',
    manufacturer: 'Nintendo',
    shortName: 'N64',
    releaseYear: 1996
  },
  {
    id: 'atari-jaguar',
    name: 'Atari Jaguar',
    category: 'console',
    icon: '🎮',
    color: '#2ed573',
    generation: '5th',
    manufacturer: 'Atari',
    shortName: 'JAGUAR',
    releaseYear: 1993
  },
  {
    id: '3do',
    name: '3DO Interactive Multiplayer',
    category: 'console',
    icon: '🎮',
    color: '#1e90ff',
    generation: '5th',
    manufacturer: 'Panasonic/Sanyo/GoldStar',
    shortName: '3DO',
    releaseYear: 1993
  },

  // --- 6ª Geração (128-bit) ---
  {
    id: 'dreamcast',
    name: 'Sega Dreamcast',
    category: 'console',
    icon: '🎮',
    color: '#ff7675',
    generation: '6th',
    manufacturer: 'Sega',
    shortName: 'DC',
    releaseYear: 1998
  },
  {
    id: 'ps2',
    name: 'PlayStation 2',
    category: 'console',
    icon: '🎮',
    color: '#74b9ff',
    generation: '6th',
    manufacturer: 'Sony',
    shortName: 'PS2',
    releaseYear: 2000
  },
  {
    id: 'gamecube',
    name: 'Nintendo GameCube',
    category: 'console',
    icon: '🎮',
    color: '#a29bfe',
    generation: '6th',
    manufacturer: 'Nintendo',
    shortName: 'GC',
    releaseYear: 2001
  },
  {
    id: 'xbox',
    name: 'Xbox',
    category: 'console',
    icon: '🎮',
    color: '#fd79a8',
    generation: '6th',
    manufacturer: 'Microsoft',
    shortName: 'XBOX',
    releaseYear: 2001
  },

  // --- Consoles Portáteis ---
  {
    id: 'gb',
    name: 'Game Boy',
    category: 'portable',
    icon: '📱',
    color: '#fdcb6e',
    generation: 'portable',
    manufacturer: 'Nintendo',
    shortName: 'GB',
    releaseYear: 1989
  },
  {
    id: 'game-gear',
    name: 'Game Gear',
    category: 'portable',
    icon: '📱',
    color: '#6c5ce7',
    generation: 'portable',
    manufacturer: 'Sega',
    shortName: 'GG',
    releaseYear: 1990
  },
  {
    id: 'atari-lynx',
    name: 'Atari Lynx',
    category: 'portable',
    icon: '📱',
    color: '#00b894',
    generation: 'portable',
    manufacturer: 'Atari',
    shortName: 'LYNX',
    releaseYear: 1989
  },
  {
    id: 'gbc',
    name: 'Game Boy Color',
    category: 'portable',
    icon: '📱',
    color: '#e17055',
    generation: 'portable',
    manufacturer: 'Nintendo',
    shortName: 'GBC',
    releaseYear: 1998
  },
  {
    id: 'neo-geo-pocket-color',
    name: 'Neo Geo Pocket Color',
    category: 'portable',
    icon: '📱',
    color: '#f39c12',
    generation: 'portable',
    manufacturer: 'SNK',
    shortName: 'NGPC',
    releaseYear: 1999
  },
  {
    id: 'gba',
    name: 'Game Boy Advance',
    category: 'portable',
    icon: '📱',
    color: '#9b59b6',
    generation: 'portable',
    manufacturer: 'Nintendo',
    shortName: 'GBA',
    releaseYear: 2001
  },

  // --- Arcade ---
  {
    id: 'arcade',
    name: 'Arcade',
    category: 'arcade',
    icon: '🕹️',
    color: '#6c5ce7',
    generation: 'arcade',
    manufacturer: 'Various',
    shortName: 'ARCADE',
    releaseYear: 1970
  },

  // --- Computadores ---
  {
    id: 'dos',
    name: 'MS-DOS',
    category: 'computer',
    icon: '💻',
    color: '#00b894',
    generation: 'computer',
    manufacturer: 'Microsoft',
    shortName: 'DOS',
    releaseYear: 1981
  },
  {
    id: 'win95',
    name: 'Windows 95/98',
    category: 'computer',
    icon: '💻',
    color: '#e17055',
    generation: 'computer',
    manufacturer: 'Microsoft',
    shortName: 'WIN95',
    releaseYear: 1995
  },
  {
    id: 'amiga',
    name: 'Amiga',
    category: 'computer',
    icon: '💻',
    color: '#f39c12',
    generation: 'computer',
    manufacturer: 'Commodore',
    shortName: 'AMIGA',
    releaseYear: 1985
  },
  {
    id: 'c64',
    name: 'Commodore 64',
    category: 'computer',
    icon: '💻',
    color: '#9b59b6',
    generation: 'computer',
    manufacturer: 'Commodore',
    shortName: 'C64',
    releaseYear: 1982
  }
]
