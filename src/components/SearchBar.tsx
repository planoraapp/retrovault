import { Search, Upload } from 'lucide-react'

interface SearchBarProps {
  searchTerm: string
  onSearchChange: (term: string) => void
  onUploadClick: () => void
}

export default function SearchBar({ searchTerm, onSearchChange, onUploadClick }: SearchBarProps) {
  return (
    <div className="mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Buscar por jogo, plataforma ou tags..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={onUploadClick}
          className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors whitespace-nowrap"
        >
          <Upload size={20} />
          <span>Novo Upload</span>
        </button>
      </div>
    </div>
  )
}
