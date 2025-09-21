import { useState, useRef } from 'react'
import { X, Upload, FolderOpen, CheckCircle, AlertCircle, Loader } from 'lucide-react'
import { FileAnalysisService } from '../services/fileAnalysisService'
import { UploadService } from '../services/uploadService'
import { GameMetadataService } from '../services/gameMetadataService'
import type { 
  Platform, 
  FileAnalysisResult, 
  FolderUploadProgress,
  GameLibraryItem 
} from '../types'

interface FolderUploadModalProps {
  isOpen: boolean
  onClose: () => void
  onUploadComplete: (games: GameLibraryItem[]) => void
  platforms: Platform[]
}

export default function FolderUploadModal({ 
  isOpen, 
  onClose, 
  onUploadComplete, 
  platforms 
}: FolderUploadModalProps) {
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [analysisResult, setAnalysisResult] = useState<FileAnalysisResult | null>(null)
  const [selectedPlatform, setSelectedPlatform] = useState('')
  const [uploadProgress, setUploadProgress] = useState<FolderUploadProgress | null>(null)
  const [uploadedGames, setUploadedGames] = useState<GameLibraryItem[]>([])
  
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFolderSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (!files || files.length === 0) return

    setIsAnalyzing(true)
    setAnalysisResult(null)
    
    try {
      const result = await FileAnalysisService.analyzeFolder(files)
      setAnalysisResult(result)
    } catch (error) {
      console.error('Erro na análise:', error)
    } finally {
      setIsAnalyzing(false)
    }
  }

  const handleUpload = async () => {
    if (!analysisResult || !selectedPlatform) return

    setIsUploading(true)
    setUploadProgress({
      stage: 'uploading',
      progress: 0,
      message: 'Iniciando upload...',
      errors: []
    })

    try {
      const uploadData = {
        platform: selectedPlatform,
        saves: analysisResult.saves,
        covers: analysisResult.covers,
        gameNames: analysisResult.gameNames
      }

      const games = await UploadService.uploadGameLibrary(
        uploadData,
        (progress) => setUploadProgress(progress)
      )

      setUploadedGames(games)
      onUploadComplete(games)
    } catch (error) {
      console.error('Erro no upload:', error)
      setUploadProgress(prev => prev ? {
        ...prev,
        errors: [...prev.errors, `Erro no upload: ${error}`]
      } : null)
    } finally {
      setIsUploading(false)
    }
  }

  const handleClose = () => {
    setAnalysisResult(null)
    setSelectedPlatform('')
    setUploadProgress(null)
    setUploadedGames([])
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    onClose()
  }

  const getProgressIcon = () => {
    if (isAnalyzing || isUploading) {
      return <Loader className="w-5 h-5 animate-spin" />
    }
    if (uploadProgress?.stage === 'complete') {
      return <CheckCircle className="w-5 h-5 text-green-500" />
    }
    return <Upload className="w-5 h-5" />
  }

  const getProgressColor = () => {
    if (uploadProgress?.stage === 'complete') return 'bg-green-500'
    if (uploadProgress?.stage === 'uploading') return 'bg-blue-500'
    return 'bg-gray-500'
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Upload de Biblioteca de Jogos</h2>
          <button
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Seleção de Pasta */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Selecione a pasta com seus jogos
            </label>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center hover:border-blue-500 transition-colors">
              <input
                ref={fileInputRef}
                type="file"
                multiple
                onChange={handleFolderSelect}
                className="hidden"
                accept=".sav,.srm,.state,.mcr,.eep,.sra,.fla,.jpg,.jpeg,.png,.gif,.bmp,.webp,.nes,.smc,.sfc,.md,.gen,.iso,.bin,.img,.n64,.v64,.z64,.gb,.gbc,.gg,.sms"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center gap-4 text-gray-400 hover:text-white transition-colors"
                disabled={isAnalyzing}
              >
                <FolderOpen size={48} />
                <div>
                  <div className="text-lg font-medium">Clique para selecionar arquivos</div>
                  <div className="text-sm">Suporta saves, capas e ROMs de todos os consoles</div>
                </div>
              </button>
            </div>
          </div>

          {/* Análise em Progresso */}
          {isAnalyzing && (
            <div className="bg-blue-900/20 border border-blue-500 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <Loader className="w-5 h-5 animate-spin text-blue-500" />
                <span className="text-blue-400">Analisando arquivos...</span>
              </div>
            </div>
          )}

          {/* Resultado da Análise */}
          {analysisResult && (
            <div className="space-y-4">
              <div className="bg-gray-700 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white mb-3">Resultado da Análise</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{analysisResult.saves.length}</div>
                    <div className="text-sm text-gray-400">Saves</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{analysisResult.covers.length}</div>
                    <div className="text-sm text-gray-400">Capas</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">{analysisResult.gameNames.length}</div>
                    <div className="text-sm text-gray-400">Jogos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-400">{analysisResult.totalFiles}</div>
                    <div className="text-sm text-gray-400">Total</div>
                  </div>
                </div>
              </div>

              {/* Seleção de Plataforma */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Plataforma Principal
                </label>
                <select
                  value={selectedPlatform}
                  onChange={(e) => setSelectedPlatform(e.target.value)}
                  className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Selecione a plataforma</option>
                  {platforms.map(platform => (
                    <option key={platform.id} value={platform.id}>
                      {platform.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preview dos Arquivos */}
              <div className="space-y-3">
                <h4 className="text-md font-semibold text-white">Arquivos Encontrados</h4>
                
                {analysisResult.saves.length > 0 && (
                  <div>
                    <h5 className="text-sm font-medium text-blue-400 mb-2">Saves ({analysisResult.saves.length})</h5>
                    <div className="bg-gray-700 rounded p-3 max-h-32 overflow-y-auto">
                      {analysisResult.saves.map((save, index) => (
                        <div key={index} className="text-sm text-gray-300">
                          {save.gameName} ({save.platform})
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {analysisResult.covers.length > 0 && (
                  <div>
                    <h5 className="text-sm font-medium text-green-400 mb-2">Capas ({analysisResult.covers.length})</h5>
                    <div className="bg-gray-700 rounded p-3 max-h-32 overflow-y-auto">
                      {analysisResult.covers.map((cover, index) => (
                        <div key={index} className="text-sm text-gray-300">
                          {cover.gameName}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Progresso do Upload */}
          {uploadProgress && (
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                {getProgressIcon()}
                <span className="text-white font-medium">{uploadProgress.message}</span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${getProgressColor()}`}
                  style={{ width: `${uploadProgress.progress}%` }}
                />
              </div>

              {uploadProgress.errors.length > 0 && (
                <div className="bg-red-900/20 border border-red-500 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                    <span className="text-red-400 font-medium">Erros encontrados:</span>
                  </div>
                  <ul className="text-sm text-red-300 space-y-1">
                    {uploadProgress.errors.map((error, index) => (
                      <li key={index}>• {error}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Resultado Final */}
          {uploadedGames.length > 0 && (
            <div className="bg-green-900/20 border border-green-500 rounded-lg p-4">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-green-400 font-medium">Upload Concluído!</span>
              </div>
              <p className="text-green-300">
                {uploadedGames.length} jogos foram adicionados à sua biblioteca.
              </p>
            </div>
          )}

          {/* Botões de Ação */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={handleClose}
              className="flex-1 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            >
              {uploadedGames.length > 0 ? 'Fechar' : 'Cancelar'}
            </button>
            
            {analysisResult && selectedPlatform && !isUploading && uploadedGames.length === 0 && (
              <button
                onClick={handleUpload}
                className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <Upload size={16} />
                Fazer Upload
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
