import React from 'react'
import { getGameCoverWithFallback } from '../utils/gameCovers'

interface GameCoverProps {
  gameName: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  fallbackUrl?: string
}

const sizeClasses = {
  sm: 'w-16 h-20',    // 64x80px - para listas pequenas
  md: 'w-24 h-32',    // 96x128px - para cards médios
  lg: 'w-32 h-40',    // 128x160px - para cards grandes
  xl: 'w-48 h-64'     // 192x256px - para capas grandes
}

export default function GameCover({ 
  gameName, 
  size = 'md', 
  className = '',
  fallbackUrl 
}: GameCoverProps) {
  const coverUrl = getGameCoverWithFallback(gameName, fallbackUrl)
  const sizeClass = sizeClasses[size]
  
  return (
    <div className={`${sizeClass} ${className} relative overflow-hidden rounded-lg shadow-lg`}>
      <img 
        src={coverUrl} 
        alt={`${gameName} cover`}
        className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
        onError={(e) => {
          // Fallback para placeholder se a imagem não carregar
          const target = e.target as HTMLImageElement
          target.src = 'https://via.placeholder.com/300x400/1f2937/ffffff?text=Retro+Game'
        }}
      />
      {/* Overlay sutil para melhorar legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </div>
  )
}
