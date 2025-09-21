// Serviços do Firebase para RetroVault
import { 
  collection, 
  doc, 
  addDoc, 
  getDoc, 
  getDocs, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy,
  limit 
} from 'firebase/firestore';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged,
  User 
} from 'firebase/auth';
import { db, auth } from '../config/firebase';

// Tipos para o RetroVault
export interface GameSave {
  id?: string;
  userId: string;
  gameTitle: string;
  platform: string;
  fileName: string;
  fileSize: number;
  uploadDate: Date;
  description?: string;
  tags?: string[];
  isPublic: boolean;
  downloadCount: number;
}

export interface UserProfile {
  id: string;
  email: string;
  displayName: string;
  createdAt: Date;
  totalSaves: number;
  totalDownloads: number;
}

// Serviços de Autenticação
export const authService = {
  // Login
  async signIn(email: string, password: string) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: result.user };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Registro
  async signUp(email: string, password: string, displayName: string) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      
      // Criar perfil do usuário
      await this.createUserProfile(result.user.uid, email, displayName);
      
      return { success: true, user: result.user };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Logout
  async signOut() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Observar mudanças de autenticação
  onAuthStateChange(callback: (user: User | null) => void) {
    return onAuthStateChanged(auth, callback);
  },

  // Criar perfil do usuário
  async createUserProfile(uid: string, email: string, displayName: string) {
    const userProfile: UserProfile = {
      id: uid,
      email,
      displayName,
      createdAt: new Date(),
      totalSaves: 0,
      totalDownloads: 0
    };

    await addDoc(collection(db, 'users'), userProfile);
  }
};

// Serviços de Game Saves
export const saveService = {
  // Upload de save
  async uploadSave(save: Omit<GameSave, 'id' | 'uploadDate' | 'downloadCount'>) {
    try {
      const saveData: Omit<GameSave, 'id'> = {
        ...save,
        uploadDate: new Date(),
        downloadCount: 0
      };

      const docRef = await addDoc(collection(db, 'gameSaves'), saveData);
      return { success: true, id: docRef.id };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Buscar saves do usuário
  async getUserSaves(userId: string) {
    try {
      const q = query(
        collection(db, 'gameSaves'),
        where('userId', '==', userId),
        orderBy('uploadDate', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      const saves: GameSave[] = [];
      
      querySnapshot.forEach((doc) => {
        saves.push({ id: doc.id, ...doc.data() } as GameSave);
      });
      
      return { success: true, saves };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Buscar saves públicos
  async getPublicSaves(limitCount: number = 20) {
    try {
      const q = query(
        collection(db, 'gameSaves'),
        where('isPublic', '==', true),
        orderBy('uploadDate', 'desc'),
        limit(limitCount)
      );
      
      const querySnapshot = await getDocs(q);
      const saves: GameSave[] = [];
      
      querySnapshot.forEach((doc) => {
        saves.push({ id: doc.id, ...doc.data() } as GameSave);
      });
      
      return { success: true, saves };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Buscar saves por plataforma
  async getSavesByPlatform(platform: string, limitCount: number = 20) {
    try {
      const q = query(
        collection(db, 'gameSaves'),
        where('platform', '==', platform),
        where('isPublic', '==', true),
        orderBy('uploadDate', 'desc'),
        limit(limitCount)
      );
      
      const querySnapshot = await getDocs(q);
      const saves: GameSave[] = [];
      
      querySnapshot.forEach((doc) => {
        saves.push({ id: doc.id, ...doc.data() } as GameSave);
      });
      
      return { success: true, saves };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Buscar saves por título do jogo
  async searchSavesByTitle(searchTerm: string, limitCount: number = 20) {
    try {
      const q = query(
        collection(db, 'gameSaves'),
        where('gameTitle', '>=', searchTerm),
        where('gameTitle', '<=', searchTerm + '\uf8ff'),
        where('isPublic', '==', true),
        orderBy('gameTitle'),
        limit(limitCount)
      );
      
      const querySnapshot = await getDocs(q);
      const saves: GameSave[] = [];
      
      querySnapshot.forEach((doc) => {
        saves.push({ id: doc.id, ...doc.data() } as GameSave);
      });
      
      return { success: true, saves };
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Incrementar contador de downloads
  async incrementDownloadCount(saveId: string) {
    try {
      const saveRef = doc(db, 'gameSaves', saveId);
      const saveDoc = await getDoc(saveRef);
      
      if (saveDoc.exists()) {
        const currentCount = saveDoc.data().downloadCount || 0;
        await updateDoc(saveRef, {
          downloadCount: currentCount + 1
        });
        return { success: true };
      } else {
        return { success: false, error: 'Save não encontrado' };
      }
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Deletar save
  async deleteSave(saveId: string, userId: string) {
    try {
      const saveRef = doc(db, 'gameSaves', saveId);
      const saveDoc = await getDoc(saveRef);
      
      if (saveDoc.exists() && saveDoc.data().userId === userId) {
        await deleteDoc(saveRef);
        return { success: true };
      } else {
        return { success: false, error: 'Não autorizado ou save não encontrado' };
      }
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
};

// Serviços de Perfil do Usuário
export const profileService = {
  // Buscar perfil do usuário
  async getUserProfile(userId: string) {
    try {
      const q = query(
        collection(db, 'users'),
        where('id', '==', userId)
      );
      
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        return { success: true, profile: { id: doc.id, ...doc.data() } as UserProfile };
      } else {
        return { success: false, error: 'Perfil não encontrado' };
      }
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  },

  // Atualizar perfil do usuário
  async updateUserProfile(userId: string, updates: Partial<UserProfile>) {
    try {
      const q = query(
        collection(db, 'users'),
        where('id', '==', userId)
      );
      
      const querySnapshot = await getDocs(q);
      
      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, updates);
        return { success: true };
      } else {
        return { success: false, error: 'Perfil não encontrado' };
      }
    } catch (error: any) {
      return { success: false, error: error.message };
    }
  }
};
