import React from 'react'
import GameList from './GameList'
import type { Save } from '../types'

interface RecentGamesProps {
  saves: Save[]
  title?: string
  maxItems?: number
}

export default function RecentGames({ 
  saves, 
  title = "Jogos Recentes", 
  maxItems = 5 
}: RecentGamesProps) {
  const recentSaves = saves
    .sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())
    .slice(0, maxItems)

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      {recentSaves.length > 0 ? (
        <GameList saves={recentSaves} />
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-400">Nenhum jogo encontrado</p>
        </div>
      )}
    </div>
  )
}
