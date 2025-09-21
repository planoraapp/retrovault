// Configuração do Firebase
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyC7Z6ZCCBwNsV_r7IegpfFFDbnLmaGbMME',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'retro-vaults.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'retro-vaults',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'retro-vaults.firebasestorage.app',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '12438475934',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:12438475934:web:7ecfc094cf0d37b06c978f',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || 'G-Y3CTTT41VB'
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export const analytics = typeof window !== 'undefined' && import.meta.env.PROD ? getAnalytics(app) : null;

export default app;
