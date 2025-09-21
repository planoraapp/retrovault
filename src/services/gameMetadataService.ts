import type { GameMetadata } from '../types'

export class GameMetadataService {
  private static readonly RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY
  private static readonly RAWG_BASE_URL = 'https://api.rawg.io/api/games'

  /**
   * Busca metadados de um jogo na API RAWG
   */
  static async getGameMetadata(gameName: string, platform?: string): Promise<GameMetadata | null> {
    if (!this.RAWG_API_KEY) {
      console.warn('RAWG API key não configurada')
      return null
    }

    try {
      const searchQuery = this.buildSearchQuery(gameName, platform)
      const response = await fetch(`${this.RAWG_BASE_URL}?${searchQuery}`)
      
      if (!response.ok) {
        throw new Error(`RAWG API error: ${response.status}`)
      }

      const data = await response.json()
      
      if (data.results && data.results.length > 0) {
        const game = data.results[0]
        return this.mapRawgToMetadata(game)
      }

      return null
    } catch (error) {
      console.error('Erro ao buscar metadados do jogo:', error)
      return null
    }
  }

  /**
   * Busca metadados para múltiplos jogos
   */
  static async getMultipleGameMetadata(
    gameNames: string[], 
    platform?: string
  ): Promise<Map<string, GameMetadata>> {
    const metadataMap = new Map<string, GameMetadata>()
    
    // Processar em lotes para evitar rate limiting
    const batchSize = 5
    for (let i = 0; i < gameNames.length; i += batchSize) {
      const batch = gameNames.slice(i, i + batchSize)
      
      const promises = batch.map(async (gameName) => {
        const metadata = await this.getGameMetadata(gameName, platform)
        if (metadata) {
          metadataMap.set(gameName, metadata)
        }
      })

      await Promise.all(promises)
      
      // Delay entre lotes para respeitar rate limits
      if (i + batchSize < gameNames.length) {
        await new Promise(resolve => setTimeout(resolve, 1000))
      }
    }

    return metadataMap
  }

  /**
   * Constrói query de busca para RAWG API
   */
  private static buildSearchQuery(gameName: string, platform?: string): string {
    const params = new URLSearchParams({
      key: this.RAWG_API_KEY,
      search: gameName,
      page_size: '1'
    })

    if (platform) {
      const platformId = this.mapPlatformToRawgId(platform)
      if (platformId) {
        params.append('platforms', platformId)
      }
    }

    return params.toString()
  }

  /**
   * Mapeia dados da RAWG para nossa interface
   */
  private static mapRawgToMetadata(rawgGame: any): GameMetadata {
    return {
      title: rawgGame.name,
      description: rawgGame.description_raw || rawgGame.description,
      releaseDate: rawgGame.released,
      genre: rawgGame.genres?.map((g: any) => g.name) || [],
      developer: rawgGame.developers?.[0]?.name,
      publisher: rawgGame.publishers?.[0]?.name,
      coverUrl: rawgGame.background_image,
      rating: rawgGame.rating,
      platforms: rawgGame.platforms?.map((p: any) => p.platform.name) || []
    }
  }

  /**
   * Mapeia nossas plataformas para IDs da RAWG
   */
  private static mapPlatformToRawgId(platform: string): string | null {
    const platformMap: Record<string, string> = {
      'nes': '18',
      'snes': '19',
      'mega-drive': '29',
      'playstation': '27',
      'n64': '4',
      'game-boy': '3',
      'game-gear': '77',
      'master-system': '64'
    }

    return platformMap[platform] || null
  }

  /**
   * Busca capa alternativa se não encontrou na pasta
   */
  static async getAlternativeCover(gameName: string, platform?: string): Promise<string | null> {
    try {
      const metadata = await this.getGameMetadata(gameName, platform)
      return metadata?.coverUrl || null
    } catch (error) {
      console.error('Erro ao buscar capa alternativa:', error)
      return null
    }
  }

  /**
   * Limpa nome do jogo para busca mais eficaz
   */
  static cleanGameNameForSearch(gameName: string): string {
    return gameName
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\b(the|a|an|and|or|but|in|on|at|to|for|of|with|by)\b/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  }
}
