import { useState } from 'react'
import { X, Upload, Tag } from 'lucide-react'
import type { Platform, UploadFormData } from '../types'

interface UploadModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (save: Omit<UploadFormData, 'file'> & { file: File }) => void
  platforms: Platform[]
}

export default function UploadModal({ isOpen, onClose, onSave, platforms }: UploadModalProps) {
  const [formData, setFormData] = useState<UploadFormData>({
    gameName: '',
    platform: '',
    file: null as any,
    tags: [],
    notes: ''
  })
  const [tagInput, setTagInput] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.gameName && formData.platform && formData.file) {
      onSave(formData)
      setFormData({
        gameName: '',
        platform: '',
        file: null as any,
        tags: [],
        notes: ''
      })
      setTagInput('')
    }
  }

  const addTag = () => {
    if (tagInput.trim() && !formData.tags.includes(tagInput.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, tagInput.trim()]
      }))
      setTagInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTag()
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-xl font-semibold text-white">Upload de Save</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nome do Jogo
            </label>
            <input
              type="text"
              value={formData.gameName}
              onChange={(e) => setFormData(prev => ({ ...prev, gameName: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Chrono Trigger"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Plataforma
            </label>
            <select
              value={formData.platform}
              onChange={(e) => setFormData(prev => ({ ...prev, platform: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Selecione uma plataforma</option>
              {platforms.map((platform) => (
                <option key={platform.id} value={platform.id}>
                  {platform.icon} {platform.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Arquivo de Save
            </label>
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
              <input
                type="file"
                accept=".sav,.srm,.state,.dat,.mem"
                onChange={(e) => setFormData(prev => ({ ...prev, file: e.target.files?.[0] || null as any }))}
                className="hidden"
                id="file-upload"
                required
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                <Upload className="mx-auto mb-2 text-gray-400" size={32} />
                <p className="text-gray-300 mb-1">Clique para selecionar o arquivo</p>
                <p className="text-gray-500 text-sm">
                  Formatos suportados: .sav, .srm, .state, .dat, .mem
                </p>
              </label>
              {formData.file && (
                <p className="text-green-400 text-sm mt-2">
                  {formData.file.name}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Tags
            </label>
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: 100%, speedrun, completo"
              />
              <button
                type="button"
                onClick={addTag}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Tag size={16} />
              </button>
            </div>
            {formData.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-blue-600 text-white text-sm rounded-full flex items-center space-x-1"
                  >
                    <span>{tag}</span>
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="text-blue-200 hover:text-white"
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Notas (opcional)
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ex: Save antes do chefe final, 100% completo..."
              rows={3}
            />
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors"
            >
              Upload Save
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
