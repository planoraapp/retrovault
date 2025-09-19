import { useState, useMemo } from 'react'
import Layout from './components/Layout'
import Dashboard from './components/Dashboard'
import SearchBar from './components/SearchBar'
import PlatformFilter from './components/PlatformFilter'
import SaveGrid from './components/SaveGrid'
import UploadModal from './components/UploadModal'
import { platforms } from './data/platforms'
import { sampleSaves } from './data/sample-saves'
import type { Save, Platform, UploadFormData } from './types'

function App() {
  const [currentPage, setCurrentPage] = useState('library')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [saves, setSaves] = useState<Save[]>(sampleSaves)

  const filteredSaves = useMemo(() => {
    let filtered = saves

    if (selectedPlatform) {
      filtered = filtered.filter(save => save.platform === selectedPlatform.id)
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase()
      filtered = filtered.filter(
        save =>
          save.gameName.toLowerCase().includes(lowerCaseSearchTerm) ||
          save.tags.some(tag => tag.toLowerCase().includes(lowerCaseSearchTerm)) ||
          platforms.find(p => p.id === save.platform)?.name.toLowerCase().includes(lowerCaseSearchTerm)
      )
    }
    return filtered
  }, [saves, selectedPlatform, searchTerm])

  const handleSaveUpload = (uploadData: Omit<UploadFormData, 'file'> & { file: File }) => {
    const save: Save = {
      id: Date.now().toString(),
      gameName: uploadData.gameName,
      platform: uploadData.platform,
      fileName: uploadData.file.name,
      fileSize: uploadData.file.size,
      uploadDate: new Date().toISOString(),
      tags: uploadData.tags,
      notes: uploadData.notes
    }
    setSaves(prev => [save, ...prev])
    setIsUploadModalOpen(false)
  }

  const renderPageContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />
      case 'library':
        return (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Biblioteca</h1>
                <p className="text-gray-400">Organize e gerencie todos os seus saves retrô</p>
              </div>
              <button
                onClick={() => setIsUploadModalOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 3H4V21H20V9L14 3ZM12 19H8V15H12V19ZM14 10H6V5H14V10Z" fill="currentColor"/>
                </svg>
                Upload Save
              </button>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6">
              <aside className="lg:w-80">
                <PlatformFilter
                  platforms={platforms}
                  selectedPlatform={selectedPlatform}
                  onPlatformSelect={setSelectedPlatform}
                />
              </aside>
              <main className="flex-1">
                <SearchBar
                  searchTerm={searchTerm}
                  onSearchChange={setSearchTerm}
                  onUploadClick={() => setIsUploadModalOpen(true)}
                />
                <SaveGrid saves={filteredSaves} />
              </main>
            </div>
          </div>
        )
      case 'games':
        return (
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Jogos</h1>
            <p className="text-gray-400 mb-6">Explore sua coleção de jogos retrô</p>
            <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
              <div className="text-6xl mb-4">🕹️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Lista de jogos será implementada em breve</h3>
              <p className="text-gray-400">Esta seção mostrará todos os jogos da sua coleção organizados por plataforma.</p>
            </div>
          </div>
        )
      case 'saves':
        return (
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Saves</h1>
            <p className="text-gray-400 mb-6">Gerencie todos os seus arquivos de save</p>
            <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
              <div className="text-6xl mb-4">💾</div>
              <h3 className="text-xl font-semibold text-white mb-2">Lista de saves será implementada em breve</h3>
              <p className="text-gray-400">Esta seção mostrará todos os seus saves organizados por data, plataforma e jogo.</p>
            </div>
          </div>
        )
      case 'settings':
        return (
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Configurações</h1>
            <p className="text-gray-400 mb-6">Configure suas preferências e conta</p>
            <div className="bg-gray-800 rounded-lg p-8 text-center border border-gray-700">
              <div className="text-6xl mb-4">⚙️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Configurações serão implementadas em breve</h3>
              <p className="text-gray-400">Esta seção permitirá configurar preferências de conta, notificações e sincronização.</p>
            </div>
          </div>
        )
      default:
        return <Dashboard />
    }
  }

  return (
    <Layout currentPage={currentPage} onPageChange={setCurrentPage}>
      {renderPageContent()}
      <UploadModal
        isOpen={isUploadModalOpen}
        onClose={() => setIsUploadModalOpen(false)}
        onSave={handleSaveUpload}
        platforms={platforms}
      />
    </Layout>
  )
}

export default App
