import type { 
  FileAnalysisResult, 
  AnalyzedSave, 
  AnalyzedCover, 
  Platform 
} from '../types'

export class FileAnalysisService {
  // Extensões de saves por plataforma
  private static readonly SAVE_EXTENSIONS = {
    'nes': ['.sav', '.srm', '.state'],
    'snes': ['.srm', '.sav', '.state'],
    'mega-drive': ['.srm', '.sav', '.state'],
    'playstation': ['.mcr', '.srm', '.state'],
    'n64': ['.eep', '.sra', '.fla', '.state'],
    'game-boy': ['.sav', '.srm', '.state'],
    'game-gear': ['.sav', '.srm', '.state'],
    'master-system': ['.sav', '.srm', '.state']
  }

  // Extensões de ROMs (para identificação, não upload)
  private static readonly ROM_EXTENSIONS = {
    'nes': ['.nes', '.fds'],
    'snes': ['.smc', '.sfc'],
    'mega-drive': ['.md', '.gen', '.smd'],
    'playstation': ['.iso', '.bin', '.img', '.cue'],
    'n64': ['.n64', '.v64', '.z64'],
    'game-boy': ['.gb', '.gbc'],
    'game-gear': ['.gg'],
    'master-system': ['.sms']
  }

  // Extensões de imagens
  private static readonly IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp']

  /**
   * Analisa uma lista de arquivos e categoriza saves, capas e ROMs
   */
  static async analyzeFolder(files: FileList): Promise<FileAnalysisResult> {
    const result: FileAnalysisResult = {
      saves: [],
      covers: [],
      gameNames: [],
      errors: [],
      totalFiles: files.length,
      processedFiles: 0
    }

    for (const file of Array.from(files)) {
      try {
        const extension = this.getFileExtension(file.name)
        const platform = this.detectPlatform(file.name, extension)
        
        if (this.isSaveFile(extension, platform)) {
          const gameName = this.extractGameName(file.name)
          result.saves.push({
            file,
            platform,
            gameName,
            cleanName: this.cleanGameName(gameName),
            fileSize: file.size
          })
        } else if (this.isImageFile(extension)) {
          const gameName = this.extractGameName(file.name)
          result.covers.push({
            file,
            gameName,
            cleanName: this.cleanGameName(gameName),
            fileSize: file.size
          })
        } else if (this.isRomFile(extension, platform)) {
          const gameName = this.extractGameName(file.name)
          result.gameNames.push(this.cleanGameName(gameName))
        }

        result.processedFiles++
      } catch (error) {
        result.errors.push(`Erro ao processar ${file.name}: ${error}`)
      }
    }

    return result
  }

  /**
   * Extrai a extensão do arquivo
   */
  private static getFileExtension(fileName: string): string {
    return fileName.toLowerCase().substring(fileName.lastIndexOf('.'))
  }

  /**
   * Detecta a plataforma baseada no nome do arquivo e extensão
   */
  private static detectPlatform(fileName: string, extension: string): string {
    const lowerFileName = fileName.toLowerCase()
    
    // Verifica extensões específicas de ROMs
    for (const [platform, extensions] of Object.entries(this.ROM_EXTENSIONS)) {
      if (extensions.includes(extension)) {
        return platform
      }
    }

    // Verifica extensões específicas de saves
    for (const [platform, extensions] of Object.entries(this.SAVE_EXTENSIONS)) {
      if (extensions.includes(extension)) {
        return platform
      }
    }

    // Fallback: tenta detectar pela pasta ou nome do arquivo
    if (lowerFileName.includes('nes') || lowerFileName.includes('nintendo')) return 'nes'
    if (lowerFileName.includes('snes') || lowerFileName.includes('super')) return 'snes'
    if (lowerFileName.includes('mega') || lowerFileName.includes('genesis')) return 'mega-drive'
    if (lowerFileName.includes('ps1') || lowerFileName.includes('playstation')) return 'playstation'
    if (lowerFileName.includes('n64') || lowerFileName.includes('nintendo64')) return 'n64'
    if (lowerFileName.includes('gb') || lowerFileName.includes('gameboy')) return 'game-boy'
    if (lowerFileName.includes('gg') || lowerFileName.includes('gamegear')) return 'game-gear'
    if (lowerFileName.includes('sms') || lowerFileName.includes('mastersystem')) return 'master-system'

    return 'unknown'
  }

  /**
   * Verifica se é um arquivo de save
   */
  private static isSaveFile(extension: string, platform: string): boolean {
    const saveExtensions = this.SAVE_EXTENSIONS[platform as keyof typeof this.SAVE_EXTENSIONS]
    return saveExtensions ? saveExtensions.includes(extension) : false
  }

  /**
   * Verifica se é um arquivo de imagem
   */
  private static isImageFile(extension: string): boolean {
    return this.IMAGE_EXTENSIONS.includes(extension)
  }

  /**
   * Verifica se é um arquivo de ROM
   */
  private static isRomFile(extension: string, platform: string): boolean {
    const romExtensions = this.ROM_EXTENSIONS[platform as keyof typeof this.ROM_EXTENSIONS]
    return romExtensions ? romExtensions.includes(extension) : false
  }

  /**
   * Extrai o nome do jogo do arquivo
   */
  private static extractGameName(fileName: string): string {
    // Remove a extensão
    let name = fileName.substring(0, fileName.lastIndexOf('.'))
    
    // Remove caracteres especiais comuns
    name = name.replace(/[._-]/g, ' ')
    
    // Remove números de versão no final
    name = name.replace(/\s+\d+$/, '')
    
    // Remove palavras comuns de emuladores
    name = name.replace(/\b(usa|eur|jap|rev|v\d+|\(.*?\))\b/gi, '')
    
    return name.trim()
  }

  /**
   * Limpa o nome do jogo para busca
   */
  private static cleanGameName(gameName: string): string {
    return gameName
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .replace(/\s+/g, ' ')
      .trim()
  }

  /**
   * Obtém estatísticas da análise
   */
  static getAnalysisStats(result: FileAnalysisResult) {
    return {
      totalFiles: result.totalFiles,
      savesFound: result.saves.length,
      coversFound: result.covers.length,
      gamesIdentified: result.gameNames.length,
      errors: result.errors.length,
      successRate: result.totalFiles > 0 ? 
        ((result.processedFiles - result.errors.length) / result.totalFiles * 100).toFixed(1) : 0
    }
  }
}
