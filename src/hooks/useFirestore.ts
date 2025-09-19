import { useState, useEffect } from 'react'
import { saveService, platformService } from '../services/firestoreService'
import type { Save, Platform } from '../types'

export const useSaves = () => {
  const [saves, setSaves] = useState<Save[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchSaves = async () => {
    try {
      setLoading(true)
      const data = await saveService.getAllSaves()
      setSaves(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar saves')
    } finally {
      setLoading(false)
    }
  }

  const addSave = async (save: Omit<Save, 'id' | 'uploadDate'>) => {
    try {
      const id = await saveService.addSave(save)
      const newSave: Save = {
        ...save,
        id,
        uploadDate: new Date().toISOString()
      }
      setSaves(prev => [newSave, ...prev])
      return id
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao adicionar save')
      throw err
    }
  }

  const updateSave = async (id: string, updates: Partial<Save>) => {
    try {
      await saveService.updateSave(id, updates)
      setSaves(prev => prev.map(save => 
        save.id === id ? { ...save, ...updates } : save
      ))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao atualizar save')
      throw err
    }
  }

  const deleteSave = async (id: string) => {
    try {
      await saveService.deleteSave(id)
      setSaves(prev => prev.filter(save => save.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao deletar save')
      throw err
    }
  }

  useEffect(() => {
    fetchSaves()
  }, [])

  return {
    saves,
    loading,
    error,
    addSave,
    updateSave,
    deleteSave,
    refetch: fetchSaves
  }
}

export const usePlatforms = () => {
  const [platforms, setPlatforms] = useState<Platform[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPlatforms = async () => {
    try {
      setLoading(true)
      const data = await platformService.getAllPlatforms()
      setPlatforms(data)
      setError(null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao carregar plataformas')
    } finally {
      setLoading(false)
    }
  }

  const addPlatform = async (platform: Omit<Platform, 'id'>) => {
    try {
      const id = await platformService.addPlatform(platform)
      const newPlatform: Platform = {
        ...platform,
        id
      }
      setPlatforms(prev => [...prev, newPlatform])
      return id
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao adicionar plataforma')
      throw err
    }
  }

  useEffect(() => {
    fetchPlatforms()
  }, [])

  return {
    platforms,
    loading,
    error,
    addPlatform,
    refetch: fetchPlatforms
  }
}
