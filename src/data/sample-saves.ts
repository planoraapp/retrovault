import type { Save } from '../types'

export const sampleSaves: Save[] = [
  {
    id: 'nes-001',
    gameName: 'Super Mario Bros.',
    platform: 'nes',
    fileName: 'super_mario_bros_complete.sav',
    fileSize: 2048,
    uploadDate: '2025-01-15T10:30:00Z',
    tags: ['mario', 'plataforma', 'completo'],
    notes: 'Jogo completo com todas as fases',
    thumbnail: '/assets/3703556.jpg'
  },
  {
    id: 'snes-001',
    gameName: 'Chrono Trigger',
    platform: 'snes',
    fileName: 'chrono_trigger_final.sav',
    fileSize: 4096,
    uploadDate: '2025-01-14T15:45:00Z',
    tags: ['rpg', 'aventura', 'completo'],
    notes: 'Final verdadeiro com todos os personagens',
    thumbnail: '/assets/2945636.jpg'
  },
  {
    id: 'ps1-001',
    gameName: 'Final Fantasy VII',
    platform: 'playstation',
    fileName: 'ff7_disc3.sav',
    fileSize: 8192,
    uploadDate: '2025-01-13T20:15:00Z',
    tags: ['rpg', 'final fantasy', 'completo'],
    notes: 'Disco 3 - Próximo ao final',
    thumbnail: '/assets/242325.jpg'
  }
]
