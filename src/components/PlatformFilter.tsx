import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import type { Platform } from '../types'

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

  const getGenerationLabel = (generation: string) => {
    const labels: Record<string, string> = {
      '3rd': '3ª Geração (8-bit)',
      '4th': '4ª Geração (16-bit)',
      '5th': '5ª Geração (32/64-bit)',
      '6th': '6ª Geração (128-bit)',
      'portable': 'Portáteis',
      'arcade': 'Arcade',
      'computer': 'Computadores'
    }
    return labels[generation] || generation
  }

  const sortPlatformsByGeneration = (platforms: Platform[]) => {
    return platforms.sort((a, b) => {
      // Primeiro ordena por geração
      if (a.generation !== b.generation) {
        const generationOrder = ['3rd', '4th', '5th', '6th', 'portable', 'arcade', 'computer']
        return generationOrder.indexOf(a.generation) - generationOrder.indexOf(b.generation)
      }
      // Depois ordena por ano de lançamento
      return a.releaseYear - b.releaseYear
    })
  }

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
                {sortPlatformsByGeneration(groupedPlatforms[categoryKey] || []).map((platform) => (
                  <button
                    key={platform.id}
                    onClick={() => onPlatformSelect(platform)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                      selectedPlatform?.id === platform.id
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-400 hover:bg-gray-700 hover:text-gray-300'
                    }`}
                    title={`${platform.manufacturer} - ${platform.releaseYear}`}
                  >
                    <span>{platform.icon}</span>
                    <div className="flex flex-col">
                      <span className="text-sm">{platform.name}</span>
                      <span className="text-xs text-gray-500">
                        {getGenerationLabel(platform.generation)} ({platform.releaseYear})
                      </span>
                    </div>
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
