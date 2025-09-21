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
  },
  {
    id: 'n64-001',
    gameName: 'Super Mario 64',
    platform: 'n64',
    fileName: 'mario_64_120_stars.sav',
    fileSize: 4096,
    uploadDate: '2025-01-12T14:20:00Z',
    tags: ['mario', 'plataforma', '3d'],
    notes: '120 estrelas coletadas - 100% completo',
    thumbnail: ''
  },
  {
    id: 'n64-002',
    gameName: 'The Legend of Zelda: Ocarina of Time',
    platform: 'n64',
    fileName: 'zelda_ocarina_complete.sav',
    fileSize: 8192,
    uploadDate: '2025-01-11T09:15:00Z',
    tags: ['zelda', 'aventura', 'rpg'],
    notes: 'Jogo completo com todas as máscaras',
    thumbnail: ''
  },
  {
    id: 'snes-002',
    gameName: 'Super Mario World',
    platform: 'snes',
    fileName: 'mario_world_96_exits.sav',
    fileSize: 2048,
    uploadDate: '2025-01-10T16:30:00Z',
    tags: ['mario', 'plataforma', 'yoshi'],
    notes: 'Todos os 96 exits encontrados',
    thumbnail: ''
  },
  {
    id: 'genesis-001',
    gameName: 'Sonic the Hedgehog',
    platform: 'mega-drive',
    fileName: 'sonic_1_all_emeralds.sav',
    fileSize: 1024,
    uploadDate: '2025-01-09T11:45:00Z',
    tags: ['sonic', 'plataforma', 'velocidade'],
    notes: 'Todas as esmeraldas do caos coletadas',
    thumbnail: ''
  },
  {
    id: 'ps1-002',
    gameName: 'Metal Gear Solid',
    platform: 'playstation',
    fileName: 'mgs_big_boss_rank.sav',
    fileSize: 16384,
    uploadDate: '2025-01-08T20:00:00Z',
    tags: ['stealth', 'ação', 'solid snake'],
    notes: 'Rank Big Boss - Sem alertas',
    thumbnail: ''
  }
]
