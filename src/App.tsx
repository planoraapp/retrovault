// RetroVault App - Version 0.0.1 - Force Deploy
import { useState, useMemo, useEffect } from 'react'
import Layout from './components/Layout'
import DashboardRankings from './components/DashboardRankings'
import DronefallPage from './pages/DronefallPage'
import AchievementsSection from './components/AchievementsSection'
import AuthModal from './components/AuthModal'
import { useAuth } from './contexts/AuthContext'
import SearchBar from './components/SearchBar'
import PlatformFilter from './components/PlatformFilter'
import SaveGrid from './components/SaveGrid'
import UploadModal from './components/UploadModal'
import FolderUploadModal from './components/FolderUploadModal'
import GameLibrary from './components/GameLibrary'
import FirebaseTest from './components/FirebaseTest'
import { platforms } from './data/platforms'
import { sampleSaves } from './data/sample-saves'
import type { Save, Platform, UploadFormData, GameLibraryItem } from './types'

function App() {
  const [currentPage, setCurrentPage] = useState('dronefall')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null)
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false)
  const [isFolderUploadModalOpen, setIsFolderUploadModalOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [saves, setSaves] = useState<Save[]>(sampleSaves)
  const [gameLibrary, setGameLibrary] = useState<GameLibraryItem[]>([])
  
  const { user } = useAuth()
  
  // Debug: Log quando a página mudar
  useEffect(() => {
    console.log('📄 Página atual:', currentPage);
  }, [currentPage])

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

  const handleGameLibraryUpload = (games: GameLibraryItem[]) => {
    setGameLibrary(prev => [...prev, ...games])
    setIsFolderUploadModalOpen(false)
  }

  const handleEnterDashboard = () => {
    // MODO DESENVOLVIMENTO: Desabilitado temporariamente
    // Acesso direto ao dashboard para testes
    console.log('🚀 Navegando para dashboard');
    setCurrentPage('dashboard')
  }
  
  const handlePageChange = (page: string) => {
    // MODO DESENVOLVIMENTO: Acesso livre a todas as páginas
    console.log('🚀 Navegando para:', page);
    setCurrentPage(page)
  }

  const renderPageContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return (
          <DashboardRankings 
            onUploadClick={() => setIsUploadModalOpen(true)}
            onLibraryClick={() => setCurrentPage('library')}
          />
        )
      case 'library':
        return (
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Biblioteca</h1>
                <p className="text-gray-400">Organize e gerencie todos os seus saves retrô</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsFolderUploadModalOpen(true)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6H12L10 4Z" fill="currentColor"/>
                  </svg>
                  Upload Pasta
                </button>
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
            </div>
            
            <GameLibrary 
              platforms={platforms} 
              onFolderUploadClick={() => setIsFolderUploadModalOpen(true)}
            />
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
            
            {/* Background granular */}
            <div className="noise-block"></div>
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
            
            {/* Background granular */}
            <div className="noise-block"></div>
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
            
            {/* Background granular */}
            <div className="noise-block"></div>
          </div>
        )
      case 'achievements':
        return (
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">🏆 Conquistas</h1>
            <p className="text-gray-400 mb-6">Conecte-se com a comunidade RetroAchievements</p>
            <AchievementsSection />
          </div>
        )
      case 'firebase-test':
        return (
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">🔥 Firebase Test</h1>
            <p className="text-gray-400 mb-6">Teste a conexão com Firebase</p>
            <FirebaseTest />
          </div>
        )
      case 'dronefall':
        return <DronefallPage />
      default:
        return <DashboardRankings />
    }
  }

  // Se estiver na dronefall page (landing page), não usar o Layout
  if (currentPage === 'dronefall') {
    return (
      <>
        <DronefallPage onEnterDashboard={handleEnterDashboard} />
        <AuthModal 
          isOpen={isAuthModalOpen}
          onClose={() => setIsAuthModalOpen(false)}
        />
      </>
    )
  }

  return (
    <>
      <Layout currentPage={currentPage} onPageChange={handlePageChange}>
        {renderPageContent()}
        <UploadModal
          isOpen={isUploadModalOpen}
          onClose={() => setIsUploadModalOpen(false)}
          onSave={handleSaveUpload}
          platforms={platforms}
        />
        <FolderUploadModal
          isOpen={isFolderUploadModalOpen}
          onClose={() => setIsFolderUploadModalOpen(false)}
          onUploadComplete={handleGameLibraryUpload}
          platforms={platforms}
        />
      </Layout>
      <AuthModal 
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </>
  )
}

export default App
