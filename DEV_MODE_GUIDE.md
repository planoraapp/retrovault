# 🔧 Guia do Modo de Desenvolvimento

## 📋 Status Atual

✅ **Modo de Desenvolvimento ATIVO**

Você pode usar o RetroVault **SEM precisar configurar Firebase ou criar contas!**

---

## 🎯 O que o Modo Dev faz:

### ✅ Funcionalidades Habilitadas:
- **Login automático** - Você já está "logado" como usuário de desenvolvimento
- **Acesso completo** - Todas as páginas e funcionalidades disponíveis
- **Sem barreiras** - Não precisa criar conta ou fazer login
- **Indicador visual** - Badge "🔧 Modo Desenvolvimento" na sidebar

### 🔒 Desabilitado em Modo Dev:
- ❌ Necessidade de login real
- ❌ Criação de contas
- ❌ Modal de autenticação
- ❌ Botão "Sair" (não é necessário)

---

## 🚀 Como usar:

1. **Acesse o site:** `http://localhost:5173/`
2. **Navegue livremente:**
   - Clique em "Começar Agora" → Vai direto para a biblioteca
   - Use a sidebar normalmente
   - Todas as páginas estão acessíveis

3. **Identifique o modo dev:**
   - Na sidebar, você verá um badge amarelo "🔧 Modo Desenvolvimento"
   - O email do usuário mock é: `dev@retrovault.local`

---

## 🔄 Como desativar o Modo Dev:

### Quando quiser usar autenticação real:

1. **Abra o arquivo `.env` na raiz do projeto**

2. **Mude a linha:**
   ```bash
   # De:
   VITE_DEV_MODE=true
   
   # Para:
   VITE_DEV_MODE=false
   ```

3. **Reinicie o servidor:**
   ```bash
   # Pare o servidor (Ctrl+C) e reinicie:
   npm run dev
   ```

4. **Agora o sistema usará:**
   - Login real com Firebase
   - Modal de autenticação
   - Criação de contas
   - Proteção de rotas

---

## 🛠️ Configuração Técnica:

### Arquivo `.env`:
```bash
# Modo de Desenvolvimento (true = ativo, false = desativado)
VITE_DEV_MODE=true
```

### Usuário Mock (Modo Dev):
```javascript
{
  uid: 'dev-user-123',
  email: 'dev@retrovault.local',
  displayName: 'Developer',
  emailVerified: true
}
```

### Arquivos Modificados:
- `src/contexts/AuthContext.tsx` - Lógica de modo dev
- `src/App.tsx` - Bypass de autenticação
- `src/components/Sidebar.tsx` - Indicador visual
- `.env` - Configuração

---

## 📝 Notas Importantes:

### ⚠️ Para Testes Locais:
- **Modo Dev é perfeito** para testar funcionalidades
- **Não precisa configurar Firebase** agora
- **Dados não são salvos** no Firebase (ainda)

### 🚀 Para Produção:
- **Desabilite o Modo Dev** (`VITE_DEV_MODE=false`)
- **Configure Firebase Console:**
  - Habilitar Authentication (Email/Password)
  - Configurar regras de Firestore
  - Configurar regras de Storage

### 🔒 Segurança:
- Modo Dev **NÃO deve ser usado em produção**
- Sempre desabilite antes de fazer deploy
- Credenciais reais são necessárias para produção

---

## 🎮 Fluxo de Uso:

### Com Modo Dev (ATUAL):
```
1. Acessa o site
2. Já está "logado" automaticamente
3. Clica em qualquer página
4. Acesso imediato ✅
```

### Sem Modo Dev (Produção):
```
1. Acessa o site
2. Clica em "Começar Agora"
3. Modal de login/registro abre
4. Cria conta ou faz login
5. Acesso liberado após autenticação ✅
```

---

## 🐛 Troubleshooting:

### Modo Dev não está funcionando:
1. Verificar se `.env` existe na raiz do projeto
2. Confirmar que `VITE_DEV_MODE=true`
3. Reiniciar o servidor: `npm run dev`
4. Limpar cache do navegador (Ctrl+Shift+R)

### Badge "Modo Desenvolvimento" não aparece:
1. Verificar se o servidor foi reiniciado após mudar `.env`
2. Verificar console do navegador por erros
3. Limpar cache e recarregar

### Quer voltar para autenticação real:
1. Mudar `.env`: `VITE_DEV_MODE=false`
2. Reiniciar servidor
3. Modal de login deve aparecer

---

## 📚 Documentação Relacionada:

- **Configuração Firebase:** `FIREBASE_AUTH_SETUP.md`
- **Integração RetroAchievements:** `RETRO_ACHIEVEMENTS_SETUP.md`
- **README Principal:** `README.md`

---

**🎮 Aproveite o Modo Dev para testar todas as funcionalidades do RetroVault sem complicações!** ✨

---

*Modo de Desenvolvimento criado especialmente para facilitar testes e desenvolvimento local.*

