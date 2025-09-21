import { Download, Calendar, Tag, FileText } from 'lucide-react'
import type { Save } from '../types'
import ConsoleIcon from './ConsoleIcon'
import GameCover from './GameCover'

interface SaveCardProps {
  save: Save
}

export default function SaveCard({ save }: SaveCardProps) {
  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  return (
    <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden hover:border-gray-600 transition-all duration-200 hover:transform hover:scale-105">
      {/* Capa do jogo */}
      <div className="h-48 relative">
        <GameCover 
          gameName={save.gameName} 
          size="xl" 
          className="w-full h-full"
          fallbackUrl={save.thumbnail}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white font-semibold text-lg mb-1">{save.gameName}</h3>
          <p className="text-gray-300 text-sm">{save.fileName}</p>
        </div>
      </div>
      
      <div className="p-4">
        
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <FileText size={16} />
            <span>{formatFileSize(save.fileSize)}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <Calendar size={16} />
            <span>{formatDate(save.uploadDate)}</span>
          </div>
          
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <ConsoleIcon consoleId={save.platform} size="sm" />
            <span>{save.platform}</span>
          </div>
          
          {save.tags.length > 0 && (
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Tag size={16} />
              <div className="flex flex-wrap gap-1">
                {save.tags.slice(0, 3).map((tag, index) => (
                  <span key={index} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                    {tag}
                  </span>
                ))}
                {save.tags.length > 3 && (
                  <span className="text-gray-500 text-xs">+{save.tags.length - 3}</span>
                )}
              </div>
            </div>
          )}
          
          {save.notes && (
            <p className="text-gray-400 text-sm line-clamp-2">{save.notes}</p>
          )}
        </div>
        
        <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2">
          <Download size={16} />
          Download
        </button>
      </div>
    </div>
  )
}
