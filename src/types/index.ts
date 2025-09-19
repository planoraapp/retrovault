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
