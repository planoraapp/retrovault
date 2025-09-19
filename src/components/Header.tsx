import { Upload } from 'lucide-react'

interface HeaderProps {
  onUploadClick: () => void
}

export default function Header({ onUploadClick }: HeaderProps) {
  return (
    <header className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold text-white">RetroVault</h1>
            <span className="text-gray-400 text-sm">Seus saves retrô merecem um cofre</span>
          </div>
          
          <button
            onClick={onUploadClick}
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <Upload size={20} />
            <span>Upload Save</span>
          </button>
        </div>
      </div>
    </header>
  )
}
