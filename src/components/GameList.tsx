import React from 'react'
import GameCover from './GameCover'
import ConsoleIcon from './ConsoleIcon'
import type { Save } from '../types'

interface GameListProps {
  saves: Save[]
  className?: string
}

export default function GameList({ saves, className = '' }: GameListProps) {
  return (
    <div className={`space-y-3 ${className}`}>
      {saves.map((save) => (
        <div 
          key={save.id}
          className="flex items-center gap-3 p-3 bg-gray-800 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
        >
          {/* Capa pequena */}
          <GameCover 
            gameName={save.gameName} 
            size="sm" 
            fallbackUrl={save.thumbnail}
          />
          
          {/* Informações do jogo */}
          <div className="flex-1 min-w-0">
            <h4 className="text-white font-medium text-sm truncate">
              {save.gameName}
            </h4>
            <p className="text-gray-400 text-xs truncate">
              {save.fileName}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <ConsoleIcon consoleId={save.platform} size="sm" />
              <span className="text-gray-500 text-xs">
                {new Date(save.uploadDate).toLocaleDateString('pt-BR')}
              </span>
            </div>
          </div>
          
          {/* Tags */}
          {save.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {save.tags.slice(0, 2).map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs"
                >
                  {tag}
                </span>
              ))}
              {save.tags.length > 2 && (
                <span className="text-gray-500 text-xs">
                  +{save.tags.length - 2}
                </span>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
