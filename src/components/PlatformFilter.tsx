import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import type { Platform } from '../types'
import ConsoleIcon from './ConsoleIcon'

interface PlatformFilterProps {
  platforms: Platform[]
  selectedPlatform: Platform | null
  onPlatformSelect: (platform: Platform | null) => void
}

export default function PlatformFilter({ platforms, selectedPlatform, onPlatformSelect }: PlatformFilterProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['console']))

  const toggleCategory = (category: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(category)) {
      newExpanded.delete(category)
    } else {
      newExpanded.add(category)
    }
    setExpandedCategories(newExpanded)
  }

  const categories = {
    console: 'Consoles',
    portable: 'Portáteis',
    arcade: 'Arcade',
    computer: 'Computadores'
  }

  const groupedPlatforms = platforms.reduce((acc, platform) => {
    if (!acc[platform.category]) {
      acc[platform.category] = []
    }
    acc[platform.category].push(platform)
    return acc
  }, {} as Record<string, Platform[]>)

  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Filtrar por Plataforma</h3>
      
      <div className="space-y-2">
        <button
          onClick={() => onPlatformSelect(null)}
          className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
            !selectedPlatform 
              ? 'bg-blue-600 text-white' 
              : 'text-gray-300 hover:bg-gray-700'
          }`}
        >
          Todas as Plataformas
        </button>

        {Object.entries(categories).map(([categoryKey, categoryName]) => (
          <div key={categoryKey}>
            <button
              onClick={() => toggleCategory(categoryKey)}
              className="w-full flex items-center justify-between px-3 py-2 text-gray-300 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <span>{categoryName}</span>
              {expandedCategories.has(categoryKey) ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>
            
            {expandedCategories.has(categoryKey) && (
              <div className="ml-4 space-y-1">
                {(groupedPlatforms[categoryKey] || []).map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => onPlatformSelect(platform)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                      selectedPlatform?.id === platform.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:bg-gray-700 hover:text-gray-300'
                    }`}
                  >
                    <ConsoleIcon consoleId={platform.icon} size="sm" />
                    <span className="text-sm">{platform.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
