import React from 'react'
import { getConsoleIcon, isImageUrl } from '../utils/consoleIcons'

interface ConsoleIconProps {
  consoleId: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-4',    // Logo horizontal pequeno
  md: 'w-12 h-6',   // Logo horizontal médio
  lg: 'w-16 h-8'    // Logo horizontal grande
}

const iconSizeClasses = {
  sm: 'w-10 h-6',   // Ícone levemente maior que o banner
  md: 'w-16 h-10',  // Ícone levemente maior que o banner
  lg: 'w-20 h-12'   // Ícone levemente maior que o banner
}

export default function ConsoleIcon({ consoleId, size = 'md', className = '' }: ConsoleIconProps) {
  const icon = getConsoleIcon(consoleId)
  const sizeClass = sizeClasses[size]
  const iconSizeClass = iconSizeClasses[size]
  
  // Mapeamento de emojis para fallback
  const emojiFallbacks: Record<string, string> = {
    'nes': '🎮',
    'snes': '🎮',
    'n64': '🎮',
    'game-boy': '🎮',
    'game-boy-color': '🎮',
    'game-boy-advance': '🎮',
    'gamecube': '🎮',
    'virtual-boy': '🎮',
    'master-system': '🎮',
    'mega-drive': '🎮',
    'saturn': '🎮',
    'dreamcast': '🎮',
    'game-gear': '🎮',
    'playstation': '🎮',
    'playstation-2': '🎮',
    'psp': '🎮',
    'atari-2600': '🎮',
    'atari-7800': '🎮',
    'atari-lynx': '🎮',
    'atari-jaguar': '🎮',
    'neo-geo': '🎮',
    'turbografx-16': '🎮',
    'pc-engine': '🎮',
    '3do': '🎮',
  }
  
  if (isImageUrl(icon)) {
    return (
      <div className={`${sizeClass} flex items-center justify-center ${className}`}>
        <img 
          src={icon} 
          alt={`${consoleId} console`}
          className={`${iconSizeClass} object-contain`}
          onError={(e) => {
            // Fallback para emoji se a imagem não carregar
            const target = e.target as HTMLImageElement
            target.style.display = 'none'
            const fallback = target.nextElementSibling as HTMLElement
            if (fallback) {
              fallback.style.display = 'flex'
            }
          }}
        />
        <span className="hidden text-2xl">{emojiFallbacks[consoleId] || '🎮'}</span>
      </div>
    )
  }
  
  // Se for emoji, exibe diretamente
  return (
    <span className={`${sizeClass} flex items-center justify-center text-2xl ${className}`}>
      {icon}
    </span>
  )
}
