import { useState } from 'react'
import { Download, Eye, Trash2, Calendar, HardDrive, MoreVertical } from 'lucide-react'
import ConsoleIcon from './ConsoleIcon'
import type { GameLibraryItem } from '../types'

interface GameCardProps {
  game: GameLibraryItem
  viewMode: 'grid' | 'list'
  onDownloadSave: (game: GameLibraryItem, saveFile: any) => void
  onDeleteGame: (gameId: string) => void
}

export default function GameCard({ game, viewMode, onDownloadSave, onDeleteGame }: GameCardProps) {
  const [showActions, setShowActions] = useState(false)

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / 1024 / 1024).toFixed(1)} MB`
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR')
  }

  const getTotalSaveSize = () => {
    return game.saveFiles.reduce((sum, file) => sum + file.fileSize, 0)
  }

  if (viewMode === 'list') {
    return (
      <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 hover:border-gray-600 transition-colors">
        <div className="flex items-center gap-4">
          {/* Capa */}
          <div className="flex-shrink-0">
            {game.coverImage ? (
              <img
                src={game.coverImage}
                alt={game.gameName}
                className="w-12 h-12 rounded-lg object-cover"
              />
            ) : (
              <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                <ConsoleIcon consoleId={game.platform} size="sm" />
              </div>
            )}
          </div>

          {/* Informações do Jogo */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-lg font-semibold text-white truncate">{game.gameName}</h3>
              <ConsoleIcon consoleId={game.platform} size="sm" />
            </div>
            
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-1">
                <HardDrive size={14} />
                <span>{game.saveFiles.length} save{game.saveFiles.length !== 1 ? 's' : ''}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span>{game.lastPlayed ? formatDate(game.lastPlayed) : 'Nunca jogado'}</span>
              </div>
              <span>{formatFileSize(getTotalSaveSize())}</span>
            </div>

            {/* Tags */}
            {game.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {game.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
                {game.tags.length > 3 && (
                  <span className="text-gray-400 text-xs">+{game.tags.length - 3}</span>
                )}
              </div>
            )}
          </div>

          {/* Ações */}
          <div className="flex-shrink-0">
            <div className="relative">
              <button
                onClick={() => setShowActions(!showActions)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
              >
                <MoreVertical size={16} />
              </button>

              {showActions && (
                <div className="absolute right-0 top-full mt-1 bg-gray-700 rounded-lg shadow-lg border border-gray-600 z-10">
                  <div className="py-1">
                    {game.saveFiles.map((saveFile) => (
                      <button
                        key={saveFile.id}
                        onClick={() => onDownloadSave(game, saveFile)}
                        className="w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-600 flex items-center gap-2"
                      >
                        <Download size={14} />
                        {saveFile.fileName}
                      </button>
                    ))}
                    <button
                      onClick={() => onDeleteGame(game.id)}
                      className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-gray-600 flex items-center gap-2"
                    >
                      <Trash2 size={14} />
                      Deletar Jogo
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Modo Grid
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors group">
      {/* Capa do Jogo */}
      <div className="aspect-[4/3] relative overflow-hidden">
        {game.coverImage ? (
          <img
            src={game.coverImage}
            alt={game.gameName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 flex flex-col items-center justify-center">
            <ConsoleIcon consoleId={game.platform} size="lg" />
            <div className="mt-2 text-xs text-gray-400 text-center px-2">
              {game.gameName}
            </div>
          </div>
        )}

        {/* Overlay com informações */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
          <div className="p-2 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
            <div className="flex items-center justify-between mb-1">
              <ConsoleIcon consoleId={game.platform} size="sm" />
              <div className="flex items-center gap-1 text-white text-xs">
                <HardDrive size={12} />
                <span>{game.saveFiles.length}</span>
              </div>
            </div>
            
            {game.lastPlayed && (
              <div className="text-white text-xs flex items-center gap-1">
                <Calendar size={12} />
                <span>{formatDate(game.lastPlayed)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Botão de ações */}
        <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="relative">
            <button
              onClick={() => setShowActions(!showActions)}
              className="p-1.5 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-70 transition-colors"
            >
              <MoreVertical size={14} />
            </button>

            {showActions && (
              <div className="absolute right-0 top-full mt-1 bg-gray-700 rounded-lg shadow-lg border border-gray-600 z-10 min-w-32">
                <div className="py-1">
                  {game.saveFiles.map((saveFile) => (
                    <button
                      key={saveFile.id}
                      onClick={() => onDownloadSave(game, saveFile)}
                      className="w-full px-4 py-2 text-left text-sm text-white hover:bg-gray-600 flex items-center gap-2"
                    >
                      <Download size={14} />
                      {saveFile.fileName}
                    </button>
                  ))}
                  <button
                    onClick={() => onDeleteGame(game.id)}
                    className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-gray-600 flex items-center gap-2"
                  >
                    <Trash2 size={14} />
                    Deletar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Informações do Jogo */}
      <div className="p-3">
        <h3 className="text-sm font-semibold text-white mb-2 truncate">{game.gameName}</h3>
        
        <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
          <span>{formatFileSize(getTotalSaveSize())}</span>
          <span>{game.saveFiles.length} save{game.saveFiles.length !== 1 ? 's' : ''}</span>
        </div>

        {/* Tags */}
        {game.tags.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {game.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="bg-blue-600 text-white px-1.5 py-0.5 rounded text-xs"
              >
                {tag}
              </span>
            ))}
            {game.tags.length > 2 && (
              <span className="text-gray-400 text-xs">+{game.tags.length - 2}</span>
            )}
          </div>
        )}

        {/* Notas */}
        {game.notes && (
          <p className="text-gray-400 text-xs mt-1 line-clamp-1">{game.notes}</p>
        )}
      </div>
    </div>
  )
}
