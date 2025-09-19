import type { Save } from '../types'

export const sampleSaves: Save[] = [
  // === 3ª GERAÇÃO (8-bit) ===
  
  // NES
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
    id: 'nes-002',
    gameName: 'The Legend of Zelda',
    platform: 'nes',
    fileName: 'zelda_nes_100percent.sav',
    fileSize: 2048,
    uploadDate: '2025-01-14T15:45:00Z',
    tags: ['zelda', 'aventura', '100%'],
    notes: 'Todos os corações e itens coletados',
    thumbnail: '/assets/3703560.jpg'
  },
  {
    id: 'nes-003',
    gameName: 'Metroid',
    platform: 'nes',
    fileName: 'metroid_nes_speedrun.sav',
    fileSize: 2048,
    uploadDate: '2025-01-13T09:20:00Z',
    tags: ['metroid', 'speedrun', 'exploração'],
    notes: 'Speedrun em menos de 1 hora',
    thumbnail: '/assets/2945636.jpg'
  },
  {
    id: 'nes-004',
    gameName: 'Castlevania',
    platform: 'nes',
    fileName: 'castlevania_complete.sav',
    fileSize: 2048,
    uploadDate: '2025-01-12T20:15:00Z',
    tags: ['castlevania', 'action', 'completo'],
    notes: 'Dracula derrotado - jogo completo',
    thumbnail: '/assets/savebg.png'
  },

  // Master System
  {
    id: 'ms-001',
    gameName: 'Sonic the Hedgehog',
    platform: 'master-system',
    fileName: 'sonic_ms_complete.sav',
    fileSize: 2048,
    uploadDate: '2025-01-11T14:30:00Z',
    tags: ['sonic', 'plataforma', 'sega'],
    notes: 'Todos os anéis coletados',
    thumbnail: '/assets/savebg.png'
  },
  {
    id: 'ms-002',
    gameName: 'Alex Kidd in Miracle World',
    platform: 'master-system',
    fileName: 'alex_kidd_complete.sav',
    fileSize: 2048,
    uploadDate: '2025-01-10T11:45:00Z',
    tags: ['alex kidd', 'plataforma', 'completo'],
    notes: 'Jogo completo com todos os itens',
    thumbnail: '/assets/242325.jpg'
  },

  // === 4ª GERAÇÃO (16-bit) ===
  
  // SNES
  {
    id: 'snes-001',
    gameName: 'Chrono Trigger',
    platform: 'snes',
    fileName: 'chrono_trigger_100percent.srm',
    fileSize: 32768,
    uploadDate: '2025-01-15T10:30:00Z',
    tags: ['100%', 'completo', 'rpg'],
    notes: 'Save com todos os itens e finais desbloqueados',
    thumbnail: '/assets/3703556.jpg'
  },
  {
    id: 'snes-002',
    gameName: 'Super Metroid',
    platform: 'snes',
    fileName: 'super_metroid_speedrun.srm',
    fileSize: 32768,
    uploadDate: '2025-01-14T15:45:00Z',
    tags: ['speedrun', '100%', 'metroidvania'],
    notes: 'Speedrun em 1:23:45 - todos os itens coletados',
    thumbnail: '/assets/2945636.jpg'
  },
  {
    id: 'snes-003',
    gameName: 'The Legend of Zelda: A Link to the Past',
    platform: 'snes',
    fileName: 'zelda_alttp_100percent.srm',
    fileSize: 32768,
    uploadDate: '2025-01-11T14:30:00Z',
    tags: ['zelda', '100%', 'aventura'],
    notes: 'Completo com todos os corações e itens',
    thumbnail: '/assets/3703560.jpg'
  },
  {
    id: 'snes-004',
    gameName: 'Super Mario World',
    platform: 'snes',
    fileName: 'super_mario_world_100.srm',
    fileSize: 32768,
    uploadDate: '2025-01-09T16:20:00Z',
    tags: ['mario', '100%', 'plataforma'],
    notes: 'Todos os 96 níveis completados',
    thumbnail: '/assets/3703556.jpg'
  },
  {
    id: 'snes-005',
    gameName: 'Final Fantasy VI',
    platform: 'snes',
    fileName: 'ff6_complete.srm',
    fileSize: 32768,
    uploadDate: '2025-01-08T12:15:00Z',
    tags: ['final fantasy', 'rpg', 'completo'],
    notes: 'Todos os personagens e magias',
    thumbnail: '/assets/242325.jpg'
  },
  {
    id: 'snes-006',
    gameName: 'Donkey Kong Country',
    platform: 'snes',
    fileName: 'dkc_complete.srm',
    fileSize: 32768,
    uploadDate: '2025-01-07T18:30:00Z',
    tags: ['donkey kong', 'plataforma', 'completo'],
    notes: 'Todos os Kongs desbloqueados',
    thumbnail: '/assets/savebg.png'
  },

  // Mega Drive
  {
    id: 'md-001',
    gameName: 'Sonic 3 & Knuckles',
    platform: 'mega-drive',
    fileName: 'sonic3_knuckles_complete.sav',
    fileSize: 16384,
    uploadDate: '2025-01-13T09:20:00Z',
    tags: ['completo', 'plataforma', 'sonic'],
    notes: 'Jogo completo com todos os emeralds do caos',
    thumbnail: '/assets/savebg.png'
  },
  {
    id: 'md-002',
    gameName: 'Streets of Rage 2',
    platform: 'mega-drive',
    fileName: 'streets_rage2_beatemup.sav',
    fileSize: 16384,
    uploadDate: '2025-01-10T11:45:00Z',
    tags: ['beat em up', 'sega', 'coop'],
    notes: 'Jogo completo no modo difícil',
    thumbnail: '/assets/savebg.png'
  },
  {
    id: 'md-003',
    gameName: 'Sonic the Hedgehog 2',
    platform: 'mega-drive',
    fileName: 'sonic2_complete.sav',
    fileSize: 16384,
    uploadDate: '2025-01-06T14:45:00Z',
    tags: ['sonic', 'plataforma', 'completo'],
    notes: 'Tails desbloqueado - jogo completo',
    thumbnail: '/assets/savebg.png'
  },
  {
    id: 'md-004',
    gameName: 'Golden Axe',
    platform: 'mega-drive',
    fileName: 'golden_axe_complete.sav',
    fileSize: 16384,
    uploadDate: '2025-01-05T20:10:00Z',
    tags: ['beat em up', 'fantasia', 'completo'],
    notes: 'Todos os personagens desbloqueados',
    thumbnail: '/assets/242325.jpg'
  },

  // TurboGrafx-16
  {
    id: 'tg16-001',
    gameName: 'Castlevania: Rondo of Blood',
    platform: 'turbografx-16',
    fileName: 'rondo_blood_complete.pce',
    fileSize: 32768,
    uploadDate: '2025-01-04T13:25:00Z',
    tags: ['castlevania', 'action', 'completo'],
    notes: 'Maria desbloqueada - jogo completo',
    thumbnail: '/assets/3703560.jpg'
  },

  // Neo Geo AES
  {
    id: 'neo-001',
    gameName: 'Metal Slug',
    platform: 'neo-geo-aes',
    fileName: 'metal_slug_complete.sav',
    fileSize: 16384,
    uploadDate: '2025-01-03T17:40:00Z',
    tags: ['metal slug', 'run and gun', 'completo'],
    notes: 'Todos os power-ups coletados',
    thumbnail: '/assets/savebg.png'
  },

  // === 5ª GERAÇÃO (32/64-bit) ===
  
  // PlayStation
  {
    id: 'ps1-001',
    gameName: 'Final Fantasy VII',
    platform: 'ps1',
    fileName: 'ff7_materia_max.srm',
    fileSize: 131072,
    uploadDate: '2025-01-12T20:15:00Z',
    tags: ['rpg', 'final fantasy', 'materia'],
    notes: 'Save com todas as materias no nível máximo',
    thumbnail: '/assets/242325.jpg'
  },
  {
    id: 'ps1-002',
    gameName: 'Metal Gear Solid',
    platform: 'ps1',
    fileName: 'mgs_complete.srm',
    fileSize: 131072,
    uploadDate: '2025-01-02T15:30:00Z',
    tags: ['metal gear', 'stealth', 'completo'],
    notes: 'Big Boss rank alcançado',
    thumbnail: '/assets/3703556.jpg'
  },
  {
    id: 'ps1-003',
    gameName: 'Castlevania: Symphony of the Night',
    platform: 'ps1',
    fileName: 'sotn_200percent.srm',
    fileSize: 131072,
    uploadDate: '2025-01-01T11:20:00Z',
    tags: ['castlevania', 'metroidvania', '200%'],
    notes: 'Mapa 200% completo - todos os itens',
    thumbnail: '/assets/2945636.jpg'
  },
  {
    id: 'ps1-004',
    gameName: 'Resident Evil 2',
    platform: 'ps1',
    fileName: 're2_leon_a.srm',
    fileSize: 131072,
    uploadDate: '2024-12-31T19:45:00Z',
    tags: ['resident evil', 'survival horror', 'completo'],
    notes: 'Cenário A do Leon completo',
    thumbnail: '/assets/savebg.png'
  },

  // Saturn
  {
    id: 'saturn-001',
    gameName: 'Nights into Dreams',
    platform: 'saturn',
    fileName: 'nights_complete.sav',
    fileSize: 131072,
    uploadDate: '2024-12-30T16:15:00Z',
    tags: ['nights', 'sonic team', 'completo'],
    notes: 'Todos os níveis A+ completados',
    thumbnail: '/assets/3703560.jpg'
  },

  // Nintendo 64
  {
    id: 'n64-001',
    gameName: 'Super Mario 64',
    platform: 'n64',
    fileName: 'sm64_120_stars.sav',
    fileSize: 32768,
    uploadDate: '2024-12-29T14:20:00Z',
    tags: ['mario', '3d platform', '120 stars'],
    notes: 'Todas as 120 estrelas coletadas',
    thumbnail: '/assets/3703556.jpg'
  },
  {
    id: 'n64-002',
    gameName: 'The Legend of Zelda: Ocarina of Time',
    platform: 'n64',
    fileName: 'oot_100percent.sav',
    fileSize: 32768,
    uploadDate: '2024-12-28T12:10:00Z',
    tags: ['zelda', 'aventura', '100%'],
    notes: 'Todos os corações e skulltulas',
    thumbnail: '/assets/3703560.jpg'
  },
  {
    id: 'n64-003',
    gameName: 'GoldenEye 007',
    platform: 'n64',
    fileName: 'goldeneye_007.sav',
    fileSize: 32768,
    uploadDate: '2024-12-27T18:30:00Z',
    tags: ['goldeneye', 'fps', 'completo'],
    notes: 'Todos os níveis no modo 00 Agent',
    thumbnail: '/assets/242325.jpg'
  },

  // === 6ª GERAÇÃO (128-bit) ===
  
  // Dreamcast
  {
    id: 'dc-001',
    gameName: 'Sonic Adventure',
    platform: 'dreamcast',
    fileName: 'sonic_adventure_complete.sav',
    fileSize: 131072,
    uploadDate: '2024-12-26T15:45:00Z',
    tags: ['sonic', '3d platform', 'completo'],
    notes: 'Todos os personagens desbloqueados',
    thumbnail: '/assets/savebg.png'
  },
  {
    id: 'dc-002',
    gameName: 'Shenmue',
    platform: 'dreamcast',
    fileName: 'shenmue_complete.sav',
    fileSize: 131072,
    uploadDate: '2024-12-25T20:15:00Z',
    tags: ['shenmue', 'aventura', 'completo'],
    notes: 'Capítulo 1 completo',
    thumbnail: '/assets/3703560.jpg'
  },

  // PlayStation 2
  {
    id: 'ps2-001',
    gameName: 'Final Fantasy X',
    platform: 'ps2',
    fileName: 'ffx_complete.sav',
    fileSize: 131072,
    uploadDate: '2024-12-24T17:30:00Z',
    tags: ['final fantasy', 'rpg', 'completo'],
    notes: 'Todos os aeons e esferas',
    thumbnail: '/assets/242325.jpg'
  },
  {
    id: 'ps2-002',
    gameName: 'Metal Gear Solid 2: Sons of Liberty',
    platform: 'ps2',
    fileName: 'mgs2_complete.sav',
    fileSize: 131072,
    uploadDate: '2024-12-23T14:20:00Z',
    tags: ['metal gear', 'stealth', 'completo'],
    notes: 'Big Boss rank - jogo completo',
    thumbnail: '/assets/3703556.jpg'
  },

  // GameCube
  {
    id: 'gc-001',
    gameName: 'The Legend of Zelda: The Wind Waker',
    platform: 'gamecube',
    fileName: 'ww_complete.sav',
    fileSize: 131072,
    uploadDate: '2024-12-22T16:40:00Z',
    tags: ['zelda', 'aventura', 'completo'],
    notes: 'Todos os corações e figurinhas',
    thumbnail: '/assets/3703560.jpg'
  },
  {
    id: 'gc-002',
    gameName: 'Metroid Prime',
    platform: 'gamecube',
    fileName: 'metroid_prime_100.sav',
    fileSize: 131072,
    uploadDate: '2024-12-21T13:25:00Z',
    tags: ['metroid', 'fps', '100%'],
    notes: '100% de itens coletados',
    thumbnail: '/assets/2945636.jpg'
  },

  // Xbox
  {
    id: 'xbox-001',
    gameName: 'Halo: Combat Evolved',
    platform: 'xbox',
    fileName: 'halo_ce_complete.sav',
    fileSize: 131072,
    uploadDate: '2024-12-20T19:15:00Z',
    tags: ['halo', 'fps', 'completo'],
    notes: 'Campanha completa no Legendary',
    thumbnail: '/assets/savebg.png'
  },

  // === PORTÁTEIS ===
  
  // Game Boy
  {
    id: 'gb-001',
    gameName: 'Pokémon Red',
    platform: 'gb',
    fileName: 'pokemon_red_complete.sav',
    fileSize: 32768,
    uploadDate: '2024-12-19T12:30:00Z',
    tags: ['pokemon', 'rpg', 'completo'],
    notes: 'Pokédex completa - todos os 151',
    thumbnail: '/assets/3703556.jpg'
  },
  {
    id: 'gb-002',
    gameName: 'The Legend of Zelda: Link\'s Awakening',
    platform: 'gb',
    fileName: 'links_awakening.sav',
    fileSize: 32768,
    uploadDate: '2024-12-18T15:45:00Z',
    tags: ['zelda', 'aventura', 'completo'],
    notes: 'Todos os corações coletados',
    thumbnail: '/assets/3703560.jpg'
  },

  // Game Boy Color
  {
    id: 'gbc-001',
    gameName: 'Pokémon Crystal',
    platform: 'gbc',
    fileName: 'pokemon_crystal_complete.sav',
    fileSize: 32768,
    uploadDate: '2024-12-17T18:20:00Z',
    tags: ['pokemon', 'rpg', 'completo'],
    notes: 'Johto e Kanto completos',
    thumbnail: '/assets/3703556.jpg'
  },

  // Game Boy Advance
  {
    id: 'gba-001',
    gameName: 'The Legend of Zelda: The Minish Cap',
    platform: 'gba',
    fileName: 'minish_cap_complete.sav',
    fileSize: 32768,
    uploadDate: '2024-12-16T14:10:00Z',
    tags: ['zelda', 'aventura', 'completo'],
    notes: 'Todos os corações e figurinhas',
    thumbnail: '/assets/3703560.jpg'
  },
  {
    id: 'gba-002',
    gameName: 'Metroid: Zero Mission',
    platform: 'gba',
    fileName: 'zero_mission_100.sav',
    fileSize: 32768,
    uploadDate: '2024-12-15T16:35:00Z',
    tags: ['metroid', 'metroidvania', '100%'],
    notes: '100% de itens coletados',
    thumbnail: '/assets/2945636.jpg'
  },
  {
    id: 'gba-003',
    gameName: 'Castlevania: Aria of Sorrow',
    platform: 'gba',
    fileName: 'aria_sorrow_complete.sav',
    fileSize: 32768,
    uploadDate: '2024-12-14T11:50:00Z',
    tags: ['castlevania', 'metroidvania', 'completo'],
    notes: 'Todas as almas coletadas',
    thumbnail: '/assets/242325.jpg'
  },

  // Game Gear
  {
    id: 'gg-001',
    gameName: 'Sonic the Hedgehog',
    platform: 'game-gear',
    fileName: 'sonic_gg_complete.sav',
    fileSize: 16384,
    uploadDate: '2024-12-13T13:25:00Z',
    tags: ['sonic', 'plataforma', 'completo'],
    notes: 'Versão portátil completa',
    thumbnail: '/assets/savebg.png'
  },

  // === COMPUTADORES ===
  
  // MS-DOS
  {
    id: 'dos-001',
    gameName: 'Doom',
    platform: 'dos',
    fileName: 'doom_complete.sav',
    fileSize: 16384,
    uploadDate: '2024-12-12T17:40:00Z',
    tags: ['doom', 'fps', 'completo'],
    notes: 'Todos os níveis completados',
    thumbnail: '/assets/savebg.png'
  },
  {
    id: 'dos-002',
    gameName: 'Commander Keen',
    platform: 'dos',
    fileName: 'keen_complete.sav',
    fileSize: 16384,
    uploadDate: '2024-12-11T15:15:00Z',
    tags: ['commander keen', 'plataforma', 'completo'],
    notes: 'Série completa jogada',
    thumbnail: '/assets/3703556.jpg'
  },

  // Windows 95/98
  {
    id: 'win95-001',
    gameName: 'Half-Life',
    platform: 'win95',
    fileName: 'half_life_complete.sav',
    fileSize: 131072,
    uploadDate: '2024-12-10T20:30:00Z',
    tags: ['half-life', 'fps', 'completo'],
    notes: 'Campanha completa',
    thumbnail: '/assets/savebg.png'
  },

  // Amiga
  {
    id: 'amiga-001',
    gameName: 'Lemmings',
    platform: 'amiga',
    fileName: 'lemmings_complete.sav',
    fileSize: 16384,
    uploadDate: '2024-12-09T14:45:00Z',
    tags: ['lemmings', 'puzzle', 'completo'],
    notes: 'Todos os níveis completados',
    thumbnail: '/assets/242325.jpg'
  },

  // Commodore 64
  {
    id: 'c64-001',
    gameName: 'Impossible Mission',
    platform: 'c64',
    fileName: 'impossible_mission.sav',
    fileSize: 8192,
    uploadDate: '2024-12-08T12:20:00Z',
    tags: ['impossible mission', 'action', 'completo'],
    notes: 'Missão impossível completada!',
    thumbnail: '/assets/3703560.jpg'
  },

  // === ARCADE ===
  {
    id: 'arcade-001',
    gameName: 'Pac-Man',
    platform: 'arcade',
    fileName: 'pacman_high_score.sav',
    fileSize: 1024,
    uploadDate: '2024-12-07T16:55:00Z',
    tags: ['pac-man', 'arcade', 'high score'],
    notes: 'Recorde pessoal: 999,999 pontos',
    thumbnail: '/assets/savebg.png'
  },
  {
    id: 'arcade-002',
    gameName: 'Street Fighter II',
    platform: 'arcade',
    fileName: 'sf2_complete.sav',
    fileSize: 2048,
    uploadDate: '2024-12-06T18:10:00Z',
    tags: ['street fighter', 'fighting', 'completo'],
    notes: 'Todos os personagens desbloqueados',
    thumbnail: '/assets/242325.jpg'
  }
]
