# 🔐 Sistema de Autenticação Firebase - RetroVault

## 🔧 **MODO DESENVOLVIMENTO ATIVO**

**Por padrão, o sistema está configurado em MODO DE DESENVOLVIMENTO.**

### ⚡ O que isso significa:
- ✅ **Login automático** com usuário mock
- ✅ **Acesso total** a todas as funcionalidades sem configurar Firebase
- ✅ **Sem necessidade de criar conta** para testar
- ✅ **Indicador visual** "🔧 Modo Desenvolvimento" na sidebar

### 🔄 Como desativar o Modo Dev (ativar autenticação real):

**No arquivo `.env` na raiz do projeto, mude:**
```bash
VITE_DEV_MODE=false  # ou remova esta linha
```

Depois reinicie o servidor:
```bash
npm run dev
```

---

## ✅ O que foi implementado:

### 1. **Configuração Firebase**
- ✅ Arquivo `.env` criado com credenciais
- ✅ Firebase inicializado (Firestore, Auth, Storage, Analytics)
- ✅ Configuração pronta para uso

### 2. **Context de Autenticação**
- ✅ `AuthContext` criado em `src/contexts/AuthContext.tsx`
- ✅ Gerenciamento global de estado de usuário
- ✅ Funções: `signIn`, `signUp`, `signOut`
- ✅ Hook customizado: `useAuth()`

### 3. **Componentes de UI**
- ✅ `AuthModal` - Modal de login/registro
- ✅ Integração no Sidebar (mostra usuário logado ou botão de login)
- ✅ Design consistente com o resto do site (roxo/indigo)

### 4. **Proteção de Rotas**
- ✅ Páginas protegidas: biblioteca, dashboard, jogos, saves, conquistas
- ✅ Redirecionamento automático para login se não autenticado
- ✅ Landing page (Dronefall) acessível sem login

### 5. **Serviços Backend**
- ✅ `firebaseService.ts` - Autenticação, saves, perfis
- ✅ `uploadService.ts` - Upload de jogos e saves
- ✅ Todas as funções CRUD implementadas

---

## 🎯 Como usar:

### **Para Usuários:**

1. **Acessar o site:** `http://localhost:5173/`
2. **Landing Page (Dronefall):** Visível para todos
3. **Clicar em "Começar Agora":** Abre modal de login/registro
4. **Criar conta:**
   - Email
   - Senha (mínimo 6 caracteres)
   - Nome de exibição
5. **Fazer login:** Use suas credenciais
6. **Acessar biblioteca:** Após login, acesso completo às funcionalidades

### **Sidebar:**
- **Usuário não logado:** Botão "Fazer Login"
- **Usuário logado:** 
  - Mostra email e avatar
  - Botão "Sair" para logout
  - Acesso a todas as páginas

---

## 🔧 Estrutura de Arquivos:

```
src/
├── contexts/
│   └── AuthContext.tsx          # Context de autenticação global
├── components/
│   ├── AuthModal.tsx             # Modal de login/registro
│   └── Sidebar.tsx               # Atualizado com auth
├── services/
│   ├── firebaseService.ts        # Serviços de auth e dados
│   └── uploadService.ts          # Upload de jogos
├── config/
│   └── firebase.ts               # Configuração Firebase
└── main.tsx                      # AuthProvider wrapper
```

---

## 🚀 Próximos Passos (Opcional):

### **1. Conectar GameLibrary ao Firebase Real**
Descomentar o código em `GameLibrary.tsx`:
```typescript
useEffect(() => {
  const fetchFirebaseGames = async () => {
    if (auth.currentUser) {
      const games = await UploadService.getUserGames(auth.currentUser.uid)
      if (games.length > 0) {
        setGames(games)
      }
    }
  }
  fetchFirebaseGames()
}, [])
```

### **2. Configurar Regras de Segurança no Firebase Console**

**Firestore Rules:**
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users collection
    match /users/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }
    
    // Game saves
    match /gameSaves/{saveId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == resource.data.userId;
    }
    
    // Games library
    match /games/{gameId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null;
    }
  }
}
```

**Storage Rules:**
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /saves/{userId}/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }
    
    match /covers/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### **3. Habilitar Authentication no Firebase Console**
1. Ir para: https://console.firebase.google.com/
2. Selecionar projeto: `retro-vaults`
3. Authentication → Sign-in method
4. Habilitar: **Email/Password**

### **4. Adicionar Funcionalidades Extras**
- [ ] Recuperação de senha (Forgot Password)
- [ ] Verificação de email
- [ ] Login com Google/GitHub
- [ ] Perfil de usuário editável
- [ ] Avatar personalizado

---

## 🐛 Troubleshooting:

### **Erro: "Firebase: Error (auth/invalid-api-key)"**
- Verificar arquivo `.env` na raiz do projeto
- Confirmar que as variáveis começam com `VITE_`
- Reiniciar o servidor: `npm run dev`

### **Modal não abre:**
- Verificar console do navegador
- Confirmar que `AuthProvider` está no `main.tsx`

### **Usuário não persiste após refresh:**
- Normal! Firebase mantém sessão automaticamente
- Se não funcionar, verificar configuração do Auth

---

## 📚 Documentação Útil:

- **Firebase Auth:** https://firebase.google.com/docs/auth
- **Firestore:** https://firebase.google.com/docs/firestore
- **Storage:** https://firebase.google.com/docs/storage
- **React Context:** https://react.dev/reference/react/useContext

---

## ✨ Features Implementadas:

| Feature | Status | Descrição |
|---------|--------|-----------|
| Login | ✅ | Email/senha |
| Registro | ✅ | Criar nova conta |
| Logout | ✅ | Sair da conta |
| Auth Modal | ✅ | Interface de login/registro |
| Proteção de Rotas | ✅ | Páginas protegidas |
| User Context | ✅ | Estado global do usuário |
| Sidebar Integration | ✅ | Mostra usuário logado |
| Firebase Services | ✅ | CRUD completo |
| Upload Service | ✅ | Upload de saves e jogos |
| Perfil de Usuário | ✅ | Estrutura criada |

---

**🎮 Sistema de autenticação 100% funcional! Pronto para uso em desenvolvimento e produção (após configurar regras de segurança).** ✨

---

*Desenvolvido para RetroVault - A plataforma definitiva de saves retrô*

