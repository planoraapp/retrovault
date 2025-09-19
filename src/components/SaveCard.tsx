import { Download, Calendar, Tag, FileText } from 'lucide-react'
import type { Save } from '../types'

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
    <div className="bg-gray-800 rounded-lg overflow-hidden border border-gray-700 hover:border-gray-600 transition-colors">
      {save.thumbnail && (
        <div 
          className="h-32 bg-cover bg-center relative"
          style={{ backgroundImage: `url(${save.thumbnail})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <span className="text-white font-semibold text-lg text-center px-2">
              {save.gameName}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-white font-semibold text-lg mb-1">
              {save.gameName}
            </h3>
            <p className="text-gray-400 text-sm">{save.fileName}</p>
          </div>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-400 text-sm">
            <Calendar size={14} className="mr-2" />
            {formatDate(save.uploadDate)}
          </div>
          
          <div className="flex items-center text-gray-400 text-sm">
            <FileText size={14} className="mr-2" />
            {formatFileSize(save.fileSize)}
          </div>
        </div>

        {save.tags.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center text-gray-400 text-sm mb-2">
              <Tag size={14} className="mr-2" />
              Tags:
            </div>
            <div className="flex flex-wrap gap-1">
              {save.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {save.notes && (
          <div className="mb-4">
            <p className="text-gray-300 text-sm italic">
              "{save.notes}"
            </p>
          </div>
        )}

        <button className="w-full flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors">
          <Download size={16} />
          <span>Download</span>
        </button>
      </div>
    </div>
  )
}
