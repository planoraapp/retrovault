import { 
  collection, 
  doc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where
} from 'firebase/firestore'
import { db } from './firebase'
import type { Save, Platform } from '../types'

// Saves
export const saveService = {
  async getAllSaves(): Promise<Save[]> {
    try {
      const savesRef = collection(db, 'saves')
      const snapshot = await getDocs(savesRef)
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Save[]
    } catch (error) {
      console.error('Error getting saves:', error)
      throw error
    }
  },

  async getSavesByPlatform(platformId: string): Promise<Save[]> {
    try {
      const savesRef = collection(db, 'saves')
      const q = query(savesRef, where('platform', '==', platformId))
      const snapshot = await getDocs(q)
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Save[]
    } catch (error) {
      console.error('Error getting saves by platform:', error)
      throw error
    }
  },

  async addSave(save: Omit<Save, 'id' | 'uploadDate'>): Promise<string> {
    try {
      const savesRef = collection(db, 'saves')
      const docRef = await addDoc(savesRef, {
        ...save,
        uploadDate: new Date().toISOString()
      })
      return docRef.id
    } catch (error) {
      console.error('Error adding save:', error)
      throw error
    }
  },

  async updateSave(id: string, updates: Partial<Save>): Promise<void> {
    try {
      const saveRef = doc(db, 'saves', id)
      await updateDoc(saveRef, updates)
    } catch (error) {
      console.error('Error updating save:', error)
      throw error
    }
  },

  async deleteSave(id: string): Promise<void> {
    try {
      const saveRef = doc(db, 'saves', id)
      await deleteDoc(saveRef)
    } catch (error) {
      console.error('Error deleting save:', error)
      throw error
    }
  }
}

// Platforms
export const platformService = {
  async getAllPlatforms(): Promise<Platform[]> {
    try {
      const platformsRef = collection(db, 'platforms')
      const snapshot = await getDocs(platformsRef)
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Platform[]
    } catch (error) {
      console.error('Error getting platforms:', error)
      throw error
    }
  },

  async addPlatform(platform: Omit<Platform, 'id'>): Promise<string> {
    try {
      const platformsRef = collection(db, 'platforms')
      const docRef = await addDoc(platformsRef, platform)
      return docRef.id
    } catch (error) {
      console.error('Error adding platform:', error)
      throw error
    }
  }
}
