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
  // --- 4ª Geração (16-bit) ---
  {
    id: 'snes',
    name: 'Super Nintendo Entertainment System',
    category: 'console',
    icon: '🎮',
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
    icon: '🎮',
    color: '#96ceb4',
    generation: '4th',
    manufacturer: 'Sega',
    shortName: 'MD',
    releaseYear: 1988
  },
  // --- 5ª Geração (32/64-bit) ---
  {
    id: 'playstation',
    name: 'PlayStation',
    category: 'console',
    icon: '🎮',
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
    icon: '🎮',
    color: '#ff9ff3',
    generation: '5th',
    manufacturer: 'Nintendo',
    shortName: 'N64',
    releaseYear: 1996
  }
]
