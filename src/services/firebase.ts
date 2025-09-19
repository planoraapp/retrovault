import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Configuração do Firebase
const firebaseConfig = {
  apiKey: (import.meta as any).env?.VITE_FIREBASE_API_KEY || "demo-api-key",
  authDomain: (import.meta as any).env?.VITE_FIREBASE_AUTH_DOMAIN || "demo-project.firebaseapp.com",
  projectId: (import.meta as any).env?.VITE_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: (import.meta as any).env?.VITE_FIREBASE_STORAGE_BUCKET || "demo-project.appspot.com",
  messagingSenderId: (import.meta as any).env?.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: (import.meta as any).env?.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef123456"
}

// Inicializar Firebase
const app = initializeApp(firebaseConfig)

// Inicializar Firestore
export const db = getFirestore(app)

export default app
