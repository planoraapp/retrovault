// Sistema de eventos para seleção de boxes
class BoxSelectionManager {
  private listeners: Array<(boxId: string, type: 'hero' | 'stats' | 'content' | 'title' | 'text' | 'button' | 'card' | 'image') => void> = []
  private currentSelection: { boxId: string; type: 'hero' | 'stats' | 'content' | 'title' | 'text' | 'button' | 'card' | 'image' } | null = null

  // Registrar listener para eventos de seleção
  addListener(callback: (boxId: string, type: 'hero' | 'stats' | 'content' | 'title' | 'text' | 'button' | 'card' | 'image') => void) {
    this.listeners.push(callback)
  }

  // Remover listener
  removeListener(callback: (boxId: string, type: 'hero' | 'stats' | 'content' | 'title' | 'text' | 'button' | 'card' | 'image') => void) {
    this.listeners = this.listeners.filter(listener => listener !== callback)
  }

  // Notificar todos os listeners sobre uma seleção
  selectBox(boxId: string, type: 'hero' | 'stats' | 'content' | 'title' | 'text' | 'button' | 'card' | 'image') {
    this.currentSelection = { boxId, type }
    this.listeners.forEach(listener => listener(boxId, type))
  }

  // Obter seleção atual
  getCurrentSelection() {
    return this.currentSelection
  }

  // Limpar seleção
  clearSelection() {
    this.currentSelection = null
  }
}

// Instância global do gerenciador
export const boxSelectionManager = new BoxSelectionManager()

// Hook para usar o gerenciador de seleção
export const useBoxSelection = () => {
  return {
    selectBox: (boxId: string, type: 'hero' | 'stats' | 'content' | 'title' | 'text' | 'button' | 'card' | 'image') => {
      boxSelectionManager.selectBox(boxId, type)
    },
    addListener: (callback: (boxId: string, type: 'hero' | 'stats' | 'content' | 'title' | 'text' | 'button' | 'card' | 'image') => void) => {
      boxSelectionManager.addListener(callback)
    },
    removeListener: (callback: (boxId: string, type: 'hero' | 'stats' | 'content' | 'title' | 'text' | 'button' | 'card' | 'image') => void) => {
      boxSelectionManager.removeListener(callback)
    },
    getCurrentSelection: () => boxSelectionManager.getCurrentSelection(),
    clearSelection: () => boxSelectionManager.clearSelection()
  }
}
