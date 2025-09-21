// Componente para testar a conexão com Firebase
import { useState, useEffect } from 'react';
import { db, auth } from '../config/firebase';
import { authService } from '../services/firebaseService';

export default function FirebaseTest() {
  const [connectionStatus, setConnectionStatus] = useState<string>('Testando...');
  const [user, setUser] = useState<any>(null);
  const [testResults, setTestResults] = useState<any>({});

  useEffect(() => {
    // Testar conexão com Firebase
    testFirebaseConnection();
    
    // Observar estado de autenticação
    const unsubscribe = authService.onAuthStateChange((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const testFirebaseConnection = async () => {
    try {
      // Teste 1: Verificar se Firebase está inicializado
      if (db && auth) {
        setConnectionStatus('✅ Firebase conectado com sucesso!');
        setTestResults(prev => ({
          ...prev,
          firebaseInit: '✅ OK'
        }));
      } else {
        setConnectionStatus('❌ Erro na inicialização do Firebase');
        setTestResults(prev => ({
          ...prev,
          firebaseInit: '❌ FALHOU'
        }));
      }

      // Teste 2: Verificar configuração
      const config = {
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? '✅ Definida' : '❌ Não definida'
      };

      setTestResults(prev => ({
        ...prev,
        config: config
      }));

    } catch (error) {
      setConnectionStatus('❌ Erro na conexão: ' + error);
      setTestResults(prev => ({
        ...prev,
        error: error
      }));
    }
  };

  const testAuth = async () => {
    try {
      // Teste de autenticação (sem fazer login real)
      const authState = auth.currentUser;
      setTestResults(prev => ({
        ...prev,
        auth: authState ? '✅ Usuário logado' : 'ℹ️ Nenhum usuário logado'
      }));
    } catch (error) {
      setTestResults(prev => ({
        ...prev,
        auth: '❌ Erro: ' + error
      }));
    }
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-white mb-4">🔥 Teste de Conexão Firebase</h2>
      
      <div className="mb-4">
        <p className="text-lg font-semibold text-green-400">{connectionStatus}</p>
      </div>

      <div className="space-y-3">
        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-white font-semibold mb-2">📊 Status dos Testes:</h3>
          <div className="space-y-2 text-sm">
            <div className="text-gray-300">
              <strong>Firebase Init:</strong> {testResults.firebaseInit || '⏳ Testando...'}
            </div>
            <div className="text-gray-300">
              <strong>API Key:</strong> {testResults.config?.apiKey || '⏳ Testando...'}
            </div>
            <div className="text-gray-300">
              <strong>Project ID:</strong> {testResults.config?.projectId || '⏳ Testando...'}
            </div>
            <div className="text-gray-300">
              <strong>Auth Domain:</strong> {testResults.config?.authDomain || '⏳ Testando...'}
            </div>
            <div className="text-gray-300">
              <strong>Auth Status:</strong> {testResults.auth || '⏳ Testando...'}
            </div>
          </div>
        </div>

        <div className="bg-gray-700 p-4 rounded">
          <h3 className="text-white font-semibold mb-2">👤 Estado da Autenticação:</h3>
          {user ? (
            <div className="text-green-400">
              <p><strong>Email:</strong> {user.email}</p>
              <p><strong>UID:</strong> {user.uid}</p>
              <p><strong>Email Verificado:</strong> {user.emailVerified ? '✅ Sim' : '❌ Não'}</p>
            </div>
          ) : (
            <p className="text-gray-400">Nenhum usuário logado</p>
          )}
        </div>

        <div className="flex space-x-4">
          <button
            onClick={testFirebaseConnection}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
          >
            🔄 Testar Conexão
          </button>
          <button
            onClick={testAuth}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
          >
            🔐 Testar Auth
          </button>
        </div>
      </div>

      <div className="mt-6 bg-blue-900 p-4 rounded">
        <h3 className="text-white font-semibold mb-2">📝 Próximos Passos:</h3>
        <ul className="text-gray-300 text-sm space-y-1">
          <li>• Configure as regras do Firestore no Firebase Console</li>
          <li>• Habilite Authentication (Email/Password) no Firebase Console</li>
          <li>• Teste upload/download de saves</li>
          <li>• Configure Storage para arquivos de save</li>
        </ul>
      </div>
    </div>
  );
}
