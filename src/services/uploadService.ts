import { 
  collection, 
  doc, 
  setDoc, 
  getDocs, 
  query, 
  where,
  writeBatch,
  serverTimestamp 
} from 'firebase/firestore'
import { 
  ref, 
  uploadBytes, 
  getDownloadURL 
} from 'firebase/storage'
import { db, storage } from '../config/firebase'
import type { 
  GameLibraryUploadData, 
  GameLibraryItem, 
  AnalyzedSave, 
  AnalyzedCover,
  FolderUploadProgress 
} from '../types'

export class UploadService {
  /**
   * Faz upload de uma biblioteca de jogos completa
   */
  static async uploadGameLibrary(
    data: GameLibraryUploadData,
    onProgress?: (progress: FolderUploadProgress) => void
  ): Promise<GameLibraryItem[]> {
    const uploadedGames: GameLibraryItem[] = []
    const batch = writeBatch(db)

    try {
      // Fase 1: Upload de arquivos de save
      onProgress?.({
        stage: 'uploading',
        progress: 0,
        message: 'Fazendo upload dos saves...',
        errors: []
      })

      for (let i = 0; i < data.saves.length; i++) {
        const save = data.saves[i]
        const progress = (i / data.saves.length) * 50
        
        onProgress?.({
          stage: 'uploading',
          progress,
          message: `Uploading save: ${save.gameName}`,
          errors: []
        })

        try {
          // Upload do arquivo de save
          const saveRef = ref(storage, `saves/${data.platform}/${save.cleanName}/${save.file.name}`)
          const uploadResult = await uploadBytes(saveRef, save.file)
          const downloadUrl = await getDownloadURL(uploadResult.ref)

          // Preparar dados do jogo
          const gameId = `${data.platform}_${save.cleanName}`
          const gameDoc = doc(db, 'games', gameId)
          
          const gameData: GameLibraryItem = {
            id: gameId,
            gameName: save.gameName,
            cleanName: save.cleanName,
            platform: data.platform,
            saveFiles: [{
              id: `${gameId}_${Date.now()}`,
              fileName: save.file.name,
              fileSize: save.fileSize,
              uploadDate: new Date().toISOString(),
              downloadUrl
            }],
            lastPlayed: new Date().toISOString(),
            tags: [],
            notes: ''
          }

          batch.set(gameDoc, {
            ...gameData,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          })

          uploadedGames.push(gameData)
        } catch (error) {
          console.error(`Erro ao fazer upload do save ${save.gameName}:`, error)
        }
      }

      // Fase 2: Upload de capas
      onProgress?.({
        stage: 'uploading',
        progress: 50,
        message: 'Fazendo upload das capas...',
        errors: []
      })

      for (let i = 0; i < data.covers.length; i++) {
        const cover = data.covers[i]
        const progress = 50 + (i / data.covers.length) * 30
        
        onProgress?.({
          stage: 'uploading',
          progress,
          message: `Uploading cover: ${cover.gameName}`,
          errors: []
        })

        try {
          // Upload da capa
          const coverRef = ref(storage, `covers/${data.platform}/${cover.cleanName}/${cover.file.name}`)
          const uploadResult = await uploadBytes(coverRef, cover.file)
          const coverUrl = await getDownloadURL(uploadResult.ref)

          // Atualizar o jogo correspondente
          const gameId = `${data.platform}_${cover.cleanName}`
          const existingGame = uploadedGames.find(g => g.id === gameId)
          
          if (existingGame) {
            existingGame.coverImage = coverUrl
          } else {
            // Criar novo jogo se não existir
            const gameDoc = doc(db, 'games', gameId)
            const gameData: GameLibraryItem = {
              id: gameId,
              gameName: cover.gameName,
              cleanName: cover.cleanName,
              platform: data.platform,
              saveFiles: [],
              coverImage: coverUrl,
              tags: [],
              notes: ''
            }

            batch.set(gameDoc, {
              ...gameData,
              createdAt: serverTimestamp(),
              updatedAt: serverTimestamp()
            })

            uploadedGames.push(gameData)
          }
        } catch (error) {
          console.error(`Erro ao fazer upload da capa ${cover.gameName}:`, error)
        }
      }

      // Fase 3: Processar jogos sem saves (apenas ROMs identificadas)
      onProgress?.({
        stage: 'processing',
        progress: 80,
        message: 'Processando jogos identificados...',
        errors: []
      })

      for (const gameName of data.gameNames) {
        const gameId = `${data.platform}_${gameName}`
        const existingGame = uploadedGames.find(g => g.id === gameId)
        
        if (!existingGame) {
          const gameDoc = doc(db, 'games', gameId)
          const gameData: GameLibraryItem = {
            id: gameId,
            gameName,
            cleanName: gameName,
            platform: data.platform,
            saveFiles: [],
            tags: [],
            notes: ''
          }

          batch.set(gameDoc, {
            ...gameData,
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
          })

          uploadedGames.push(gameData)
        }
      }

      // Commit todas as operações
      await batch.commit()

      onProgress?.({
        stage: 'complete',
        progress: 100,
        message: `Upload concluído! ${uploadedGames.length} jogos processados.`,
        errors: []
      })

      return uploadedGames
    } catch (error) {
      console.error('Erro no upload da biblioteca:', error)
      throw error
    }
  }

  /**
   * Busca jogos do usuário
   */
  static async getUserGames(userId: string): Promise<GameLibraryItem[]> {
    try {
      const gamesRef = collection(db, 'games')
      const q = query(gamesRef, where('userId', '==', userId))
      const querySnapshot = await getDocs(q)
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as GameLibraryItem[]
    } catch (error) {
      console.error('Erro ao buscar jogos do usuário:', error)
      return []
    }
  }

  /**
   * Busca jogos por plataforma
   */
  static async getGamesByPlatform(platform: string): Promise<GameLibraryItem[]> {
    try {
      const gamesRef = collection(db, 'games')
      const q = query(gamesRef, where('platform', '==', platform))
      const querySnapshot = await getDocs(q)
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as GameLibraryItem[]
    } catch (error) {
      console.error('Erro ao buscar jogos por plataforma:', error)
      return []
    }
  }
}
