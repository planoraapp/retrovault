import { useState, useEffect } from 'react'
import { Search, Grid, List } from 'lucide-react'
import GameCard from './GameCard'
import ConsoleIcon from './ConsoleIcon'
import type { GameLibraryItem, Platform } from '../types'

interface GameLibraryProps {
  platforms: Platform[]
  onFolderUploadClick?: () => void
}

export default function GameLibrary({ platforms, onFolderUploadClick }: GameLibraryProps) {
  const [games, setGames] = useState<GameLibraryItem[]>([])
  const [filteredGames, setFilteredGames] = useState<GameLibraryItem[]>([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState<string>('')
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    loadGames()
  }, [])
  
  // Placeholder: conectar com Firebase quando usuário estiver logado
  // useEffect(() => {
  //   const fetchFirebaseGames = async () => {
  //     if (auth.currentUser) {
  //       const games = await UploadService.getUserGames(auth.currentUser.uid)
  //       if (games.length > 0) {
  //         setGames(games)
  //       }
  //     }
  //   }
  //   fetchFirebaseGames()
  // }, [])

  useEffect(() => {
    filterGames()
  }, [games, searchTerm, selectedPlatform, selectedTag])

  const loadGames = async () => {
    setIsLoading(true)
    try {
      // Dados mock realistas para demonstração
      const mockGames: GameLibraryItem[] = [
        {
          id: 'snes_chrono_trigger',
          gameName: 'Chrono Trigger',
          cleanName: 'chrono trigger',
          platform: 'snes',
          saveFiles: [{
            id: 'save_1',
            fileName: 'chrono_trigger.srm',
            fileSize: 32768,
            uploadDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
            downloadUrl: '#'
          }],
          coverImage: 'https://retroachievements.org/Images/000222.png',
          lastPlayed: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
          tags: ['RPG', 'Time Travel', 'Square'],
          notes: 'Meu jogo favorito! História incrível e gameplay perfeito.'
        },
        {
          id: 'snes_super_metroid',
          gameName: 'Super Metroid',
          cleanName: 'super metroid',
          platform: 'snes',
          saveFiles: [{
            id: 'save_2',
            fileName: 'metroid.srm',
            fileSize: 16384,
            uploadDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
            downloadUrl: '#'
          }],
          coverImage: 'https://retroachievements.org/Images/054708.png',
          lastPlayed: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          tags: ['Metroidvania', 'Sci-Fi', 'Nintendo'],
          notes: 'O melhor Metroidvania já feito!'
        },
        {
          id: 'nes_super_mario_bros_3',
          gameName: 'Super Mario Bros 3',
          cleanName: 'super mario bros 3',
          platform: 'nes',
          saveFiles: [{
            id: 'save_3',
            fileName: 'mario3.sav',
            fileSize: 2048,
            uploadDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
            downloadUrl: '#'
          }],
          coverImage: 'https://retroachievements.org/Images/007559.png',
          lastPlayed: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
          tags: ['Platform', 'Classic', 'Nintendo'],
          notes: 'Jogando com meu filho!'
        },
        {
          id: 'mega_drive_sonic_2',
          gameName: 'Sonic the Hedgehog 2',
          cleanName: 'sonic the hedgehog 2',
          platform: 'mega-drive',
          saveFiles: [{
            id: 'save_4',
            fileName: 'sonic2.srm',
            fileSize: 16384,
            uploadDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
            downloadUrl: '#'
          }],
          coverImage: 'https://retroachievements.org/Images/051848.png',
          lastPlayed: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
          tags: ['Platform', 'Speed', 'Sega'],
          notes: 'Clássico do Sonic com Tails!'
        },
        {
          id: 'playstation_final_fantasy_vii',
          gameName: 'Final Fantasy VII',
          cleanName: 'final fantasy vii',
          platform: 'playstation',
          saveFiles: [{
            id: 'save_5',
            fileName: 'ff7.mcr',
            fileSize: 131072,
            uploadDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
            downloadUrl: '#'
          }],
          coverImage: 'https://retroachievements.org/Images/072390.png',
          lastPlayed: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          tags: ['RPG', 'Fantasy', 'Square'],
          notes: 'Replay do clássico!'
        },
        {
          id: 'n64_zelda_ocarina',
          gameName: 'The Legend of Zelda: Ocarina of Time',
          cleanName: 'the legend of zelda ocarina of time',
          platform: 'n64',
          saveFiles: [{
            id: 'save_6',
            fileName: 'zelda.sra',
            fileSize: 32768,
            uploadDate: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
            downloadUrl: '#'
          }],
          coverImage: 'https://retroachievements.org/Images/043749.png',
          lastPlayed: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
          tags: ['Adventure', 'Fantasy', 'Nintendo'],
          notes: 'O melhor jogo de todos os tempos!'
        },
        {
          id: 'game_boy_pokemon_red',
          gameName: 'Pokémon Red',
          cleanName: 'pokemon red',
          platform: 'game-boy',
          saveFiles: [{
            id: 'save_7',
            fileName: 'pokemon.sav',
            fileSize: 8192,
            uploadDate: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
            downloadUrl: '#'
          }],
          coverImage: 'https://retroachievements.org/Images/117104.png',
          lastPlayed: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
          tags: ['RPG', 'Pokémon', 'Nintendo'],
          notes: 'Nostalgia pura!'
        },
        {
          id: 'snes_street_fighter_2',
          gameName: 'Street Fighter II: The World Warrior',
          cleanName: 'street fighter ii the world warrior',
          platform: 'snes',
          saveFiles: [{
            id: 'save_8',
            fileName: 'sf2.srm',
            fileSize: 8192,
            uploadDate: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
            downloadUrl: '#'
          }],
          coverImage: 'https://retroachievements.org/Images/060824.png',
          lastPlayed: new Date(Date.now() - 21 * 24 * 60 * 60 * 1000).toISOString(),
          tags: ['Fighting', 'Arcade', 'Capcom'],
          notes: 'Clássico dos arcades!'
        },
        {
          id: 'mega_drive_streets_of_rage_2',
          gameName: 'Streets of Rage 2',
          cleanName: 'streets of rage 2',
          platform: 'mega-drive',
          saveFiles: [{
            id: 'save_9',
            fileName: 'sor2.srm',
            fileSize: 16384,
            uploadDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
            downloadUrl: '#'
          }],
          coverImage: 'https://retroachievements.org/Images/006154.png',
          lastPlayed: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
          tags: ['Beat em up', 'Action', 'Sega'],
          notes: 'Melhor beat em up do Mega Drive!'
        },
        {
          id: 'nes_contra',
          gameName: 'Contra',
          cleanName: 'contra',
          platform: 'nes',
          saveFiles: [{
            id: 'save_10',
            fileName: 'contra.sav',
            fileSize: 2048,
            uploadDate: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
            downloadUrl: '#'
          }],
          coverImage: 'https://retroachievements.org/Images/003949.png',
          lastPlayed: new Date(Date.now() - 45 * 24 * 60 * 60 * 1000).toISOString(),
          tags: ['Run and Gun', 'Action', 'Konami'],
          notes: 'Up, Up, Down, Down, Left, Right, Left, Right, B, A!'
        }
      ]
      
      setGames(mockGames)
    } catch (error) {
      console.error('Erro ao carregar jogos:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const filterGames = () => {
    let filtered = games

    if (selectedPlatform) {
      filtered = filtered.filter(game => game.platform === selectedPlatform)
    }

    if (selectedTag) {
      filtered = filtered.filter(game => 
        game.tags.some(tag => tag.toLowerCase() === selectedTag.toLowerCase())
      )
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase()
      filtered = filtered.filter(game =>
        game.gameName.toLowerCase().includes(lowerCaseSearchTerm) ||
        game.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm))
      )
    }

    setFilteredGames(filtered)
  }

  const handleDownloadSave = async (_game: GameLibraryItem, saveFile: any) => {
    try {
      // TODO: Implementar download real
      console.log('Downloading save:', saveFile.fileName)
      // Simular download
      const link = document.createElement('a')
      link.href = saveFile.downloadUrl || '#'
      link.download = saveFile.fileName
      link.click()
    } catch (error) {
      console.error('Erro ao baixar save:', error)
    }
  }

  const handleDeleteGame = async (gameId: string) => {
    if (confirm('Tem certeza que deseja deletar este jogo?')) {
      try {
        // TODO: Implementar deleção real
        setGames(games.filter(game => game.id !== gameId))
      } catch (error) {
        console.error('Erro ao deletar jogo:', error)
      }
    }
  }

  const getStats = () => {
    const totalGames = games.length
    const totalSaves = games.reduce((sum, game) => sum + game.saveFiles.length, 0)
    const platformsUsed = [...new Set(games.map(game => game.platform))].length
    const totalSize = games.reduce((sum, game) => 
      sum + game.saveFiles.reduce((fileSum, file) => fileSum + file.fileSize, 0), 0
    )

    return { totalGames, totalSaves, platformsUsed, totalSize }
  }

  const stats = getStats()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando biblioteca...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Barra lateral com filtros */}
      <div className="w-full lg:w-64 flex-shrink-0">
        <div className="rounded-lg border border-gray-500 lg:sticky lg:top-4 h-[calc(100vh-2rem)] flex flex-col" style={{backgroundColor: '#1a1a1a'}}>
          <div className="p-4 border-b border-gray-700 flex-shrink-0">
            <h3 className="text-lg font-semibold text-white">Filtros</h3>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-hide">
          
            {/* Busca */}
            <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Buscar</label>
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Nome do jogo..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-gray-700 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-gray-400 text-sm"
              />
            </div>
          </div>

            {/* Filtro de plataforma */}
            <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Plataforma</label>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedPlatform('')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                  selectedPlatform === '' 
                    ? 'bg-gray-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                Todas as plataformas
              </button>
              {platforms.map(platform => (
                <button
                  key={platform.id}
                  onClick={() => setSelectedPlatform(platform.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm flex items-center gap-2 ${
                    selectedPlatform === platform.id 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  <ConsoleIcon consoleId={platform.id} size="sm" />
                  {platform.name}
                </button>
              ))}
            </div>
          </div>

            {/* Filtro por tags */}
            <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Tags</label>
            <div className="space-y-2">
              <button
                onClick={() => setSelectedTag('')}
                className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                  selectedTag === '' 
                    ? 'bg-gray-600 text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
                }`}
              >
                Todas as tags
              </button>
              {Array.from(new Set(games.flatMap(game => game.tags))).map(tag => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                    selectedTag === tag 
                      ? 'bg-indigo-600 text-white' 
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

            {/* Controles de visualização */}
            <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Visualização</label>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex-1 p-2 rounded-lg transition-colors text-sm ${
                  viewMode === 'grid' 
                    ? 'bg-gray-600 text-white' 
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white'
                }`}
              >
                <Grid size={16} className="mx-auto" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex-1 p-2 rounded-lg transition-colors text-sm ${
                  viewMode === 'list' 
                    ? 'bg-gray-600 text-white' 
                    : 'bg-gray-700 text-gray-400 hover:bg-gray-600 hover:text-white'
                }`}
              >
                <List size={16} className="mx-auto" />
              </button>
            </div>
          </div>

            {/* Botão limpar filtros */}
            <div>
            <button
              onClick={() => {
                setSearchTerm('')
                setSelectedPlatform('')
                setSelectedTag('')
              }}
              className="w-full px-3 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-lg transition-colors text-sm"
            >
              Limpar Filtros
            </button>
          </div>

            {/* Estatísticas */}
            <div className="border-t border-gray-700 pt-4">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Estatísticas</h4>
            <div className="space-y-1 text-xs text-gray-400">
              <div className="flex justify-between">
                <span>Total de jogos:</span>
                <span className="text-white">{stats.totalGames}</span>
              </div>
              <div className="flex justify-between">
                <span>Exibindo:</span>
                <span className="text-white">{filteredGames.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Plataformas:</span>
                <span className="text-white">{stats.platformsUsed}</span>
              </div>
              <div className="flex justify-between">
                <span>Armazenamento:</span>
                <span className="text-white">{(stats.totalSize / 1024 / 1024).toFixed(1)}MB</span>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="flex-1 space-y-6">
        {/* Header */}
        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Minha Biblioteca</h1>
              <p className="text-gray-400">Gerencie sua coleção de jogos</p>
            </div>
            {onFolderUploadClick && (
              <button
                onClick={onFolderUploadClick}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" fill="currentColor"/>
                </svg>
                Upload Pasta
              </button>
            )}
          </div>
        </div>


        {/* Lista de Jogos */}
      {filteredGames.length === 0 ? (
        <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
          <div className="text-6xl mb-4">🎮</div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {games.length === 0 ? 'Nenhum jogo encontrado' : 'Nenhum jogo corresponde aos filtros'}
          </h3>
          <p className="text-gray-400">
            {games.length === 0 
              ? 'Comece fazendo upload de seus jogos usando o botão "Upload Save" acima.'
              : 'Tente ajustar os filtros de busca.'
            }
          </p>
        </div>
      ) : (
        <div className={`${
          viewMode === 'grid' 
            ? 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4' 
            : 'space-y-4'
        }`}>
          {filteredGames.map(game => (
            <GameCard
              key={game.id}
              game={game}
              viewMode={viewMode}
              onDownloadSave={handleDownloadSave}
              onDeleteGame={handleDeleteGame}
            />
          ))}
        </div>
      )}
      </div>
      
      {/* Background granular */}
      <div className="noise-block"></div>
    </div>
  )
}
