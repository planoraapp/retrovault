export interface Platform {
  id: string
  name: string
  category: 'console' | 'portable' | 'arcade' | 'computer'
  icon: string
  color: string
  generation: string
  manufacturer: string
  shortName: string
  releaseYear: number
}

export interface Save {
  id: string
  gameName: string
  platform: string
  fileName: string
  fileSize: number
  uploadDate: string
  tags: string[]
  notes?: string
  thumbnail?: string
}

export interface UploadFormData {
  gameName: string
  platform: string
  file: File | null
  tags: string[]
  notes: string
}

// === NOVOS TIPOS PARA BIBLIOTECA DE JOGOS ===

export interface GameLibraryItem {
  id: string
  gameName: string
  cleanName: string
  platform: string
  saveFiles: SaveFile[]
  coverImage?: string
  metadata?: GameMetadata
  lastPlayed?: string
  playTime?: number
  tags: string[]
  notes?: string
}

export interface SaveFile {
  id: string
  fileName: string
  fileSize: number
  uploadDate: string
  fileContent?: ArrayBuffer
  downloadUrl?: string
}

export interface GameMetadata {
  title: string
  description?: string
  releaseDate?: string
  genre?: string[]
  developer?: string
  publisher?: string
  coverUrl?: string
  rating?: number
  platforms?: string[]
}

export interface FileAnalysisResult {
  saves: AnalyzedSave[]
  covers: AnalyzedCover[]
  gameNames: string[]
  errors: string[]
  totalFiles: number
  processedFiles: number
}

export interface AnalyzedSave {
  file: File
  platform: string
  gameName: string
  cleanName: string
  fileSize: number
}

export interface AnalyzedCover {
  file: File
  gameName: string
  cleanName: string
  fileSize: number
}

export interface GameLibraryUploadData {
  platform: string
  saves: AnalyzedSave[]
  covers: AnalyzedCover[]
  gameNames: string[]
}

export interface FolderUploadProgress {
  stage: 'analyzing' | 'uploading' | 'processing' | 'complete'
  progress: number
  message: string
  errors: string[]
}