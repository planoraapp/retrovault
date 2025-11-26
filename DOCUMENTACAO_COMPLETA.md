# 📚 Documentação Completa - RetroVault

**Seus Saves Retrô Merecem um Cofre**

Uma aplicação moderna para organizar, gerenciar e armazenar seus saves de jogos retrô de forma elegante e eficiente.

---

## 📑 Índice

1. [Visão Geral do Projeto](#visão-geral-do-projeto)
2. [Instalação e Configuração](#instalação-e-configuração)
3. [Sistema de Autenticação Firebase](#sistema-de-autenticação-firebase)
4. [Modo de Desenvolvimento](#modo-de-desenvolvimento)
5. [Integração RetroAchievements](#integração-retroachievements)
6. [Deploy e Produção](#deploy-e-produção)
7. [Planejamento: Sincronização em Nuvem](#planejamento-sincronização-em-nuvem)
8. [Upload de Saves - Abordagem Segura](#upload-de-saves---abordagem-segura)
9. [Referências e Recursos](#referências-e-recursos)
10. [Estrutura do Projeto](#estrutura-do-projeto)

---

## 🎮 Visão Geral do Projeto

### ✨ Características

- 🎯 **Interface Moderna**: Design limpo e responsivo com Tailwind CSS
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🔍 **Busca Inteligente**: Encontre seus saves por jogo, plataforma ou tags
- 🏷️ **Sistema de Tags**: Organize seus saves com tags personalizadas
- 📊 **Dashboard Completo**: Visão geral da sua coleção com estatísticas
- 🎮 **Múltiplas Plataformas**: Suporte para consoles de 3ª a 6ª geração
- 💾 **Upload Fácil**: Interface intuitiva para upload de saves
- 🌙 **Tema Escuro**: Interface otimizada para longas sessões de gaming

### 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - JavaScript com tipagem estática
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utility-first
- **Firebase** - Backend como serviço (Auth, Firestore, Storage)
- **Lucide React** - Ícones modernos e consistentes

### 🎮 Plataformas Suportadas

#### Consoles
- **3ª Geração**: NES, Master System, Atari 7800
- **4ª Geração**: SNES, Mega Drive, TurboGrafx-16, Neo Geo AES
- **5ª Geração**: PlayStation, Nintendo 64, Sega Saturn, Atari Jaguar, 3DO
- **6ª Geração**: PlayStation 2, Nintendo GameCube, Xbox, Sega Dreamcast

#### Portáteis
- Game Boy, Game Boy Color, Game Boy Advance
- Game Gear, Atari Lynx, Neo Geo Pocket Color

#### Arcade e Computadores
- Máquinas de arcade clássicas
- Commodore 64, Amiga, Atari ST

---

## 📦 Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/planoraapp/retrovault.git
cd retrovault
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```bash
# Modo de Desenvolvimento (true = ativo, false = desativado)
VITE_DEV_MODE=true

# Firebase Configuration
VITE_FIREBASE_API_KEY=sua_api_key_aqui
VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu_projeto_id
VITE_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
VITE_FIREBASE_APP_ID=seu_app_id

# RetroAchievements API (Opcional)
VITE_RETRO_ACHIEVEMENTS_API_KEY=sua_chave_api_aqui
```

### 4. Execute o servidor de desenvolvimento

```bash
npm run dev
```

### 5. Acesse `http://localhost:5173` no seu navegador

### 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

---

## 🔐 Sistema de Autenticação Firebase

### 🔧 **MODO DESENVOLVIMENTO ATIVO**

**Por padrão, o sistema está configurado em MODO DE DESENVOLVIMENTO.**

#### ⚡ O que isso significa:
- ✅ **Login automático** com usuário mock
- ✅ **Acesso total** a todas as funcionalidades sem configurar Firebase
- ✅ **Sem necessidade de criar conta** para testar
- ✅ **Indicador visual** "🔧 Modo Desenvolvimento" na sidebar

#### 🔄 Como desativar o Modo Dev (ativar autenticação real):

**No arquivo `.env` na raiz do projeto, mude:**
```bash
VITE_DEV_MODE=false  # ou remova esta linha
```

Depois reinicie o servidor:
```bash
npm run dev
```

---

### ✅ O que foi implementado:

#### 1. **Configuração Firebase**
- ✅ Arquivo `.env` criado com credenciais
- ✅ Firebase inicializado (Firestore, Auth, Storage, Analytics)
- ✅ Configuração pronta para uso

#### 2. **Context de Autenticação**
- ✅ `AuthContext` criado em `src/contexts/AuthContext.tsx`
- ✅ Gerenciamento global de estado de usuário
- ✅ Funções: `signIn`, `signUp`, `signOut`
- ✅ Hook customizado: `useAuth()`

#### 3. **Componentes de UI**
- ✅ `AuthModal` - Modal de login/registro
- ✅ Integração no Sidebar (mostra usuário logado ou botão de login)
- ✅ Design consistente com o resto do site (roxo/indigo)

#### 4. **Proteção de Rotas**
- ✅ Páginas protegidas: biblioteca, dashboard, jogos, saves, conquistas
- ✅ Redirecionamento automático para login se não autenticado
- ✅ Landing page (Dronefall) acessível sem login

#### 5. **Serviços Backend**
- ✅ `firebaseService.ts` - Autenticação, saves, perfis
- ✅ `uploadService.ts` - Upload de jogos e saves
- ✅ Todas as funções CRUD implementadas

---

### 🎯 Como usar:

#### **Para Usuários:**

1. **Acessar o site:** `http://localhost:5173/`
2. **Landing Page (Dronefall):** Visível para todos
3. **Clicar em "Começar Agora":** Abre modal de login/registro
4. **Criar conta:**
   - Email
   - Senha (mínimo 6 caracteres)
   - Nome de exibição
5. **Fazer login:** Use suas credenciais
6. **Acessar biblioteca:** Após login, acesso completo às funcionalidades

#### **Sidebar:**
- **Usuário não logado:** Botão "Fazer Login"
- **Usuário logado:** 
  - Mostra email e avatar
  - Botão "Sair" para logout
  - Acesso a todas as páginas

---

### 🔧 Estrutura de Arquivos:

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

### 🚀 Próximos Passos (Opcional):

#### **1. Conectar GameLibrary ao Firebase Real**
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

#### **2. Configurar Regras de Segurança no Firebase Console**

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

#### **3. Habilitar Authentication no Firebase Console**
1. Ir para: https://console.firebase.google.com/
2. Selecionar projeto: `retro-vaults`
3. Authentication → Sign-in method
4. Habilitar: **Email/Password**

#### **4. Adicionar Funcionalidades Extras**
- [ ] Recuperação de senha (Forgot Password)
- [ ] Verificação de email
- [ ] Login com Google/GitHub
- [ ] Perfil de usuário editável
- [ ] Avatar personalizado

---

### 🐛 Troubleshooting:

#### **Erro: "Firebase: Error (auth/invalid-api-key)"**
- Verificar arquivo `.env` na raiz do projeto
- Confirmar que as variáveis começam com `VITE_`
- Reiniciar o servidor: `npm run dev`

#### **Modal não abre:**
- Verificar console do navegador
- Confirmar que `AuthProvider` está no `main.tsx`

#### **Usuário não persiste após refresh:**
- Normal! Firebase mantém sessão automaticamente
- Se não funcionar, verificar configuração do Auth

---

### ✨ Features Implementadas:

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

## 🔧 Modo de Desenvolvimento

### 📋 Status Atual

✅ **Modo de Desenvolvimento ATIVO**

Você pode usar o RetroVault **SEM precisar configurar Firebase ou criar contas!**

---

### 🎯 O que o Modo Dev faz:

#### ✅ Funcionalidades Habilitadas:
- **Login automático** - Você já está "logado" como usuário de desenvolvimento
- **Acesso completo** - Todas as páginas e funcionalidades disponíveis
- **Sem barreiras** - Não precisa criar conta ou fazer login
- **Indicador visual** - Badge "🔧 Modo Desenvolvimento" na sidebar

#### 🔒 Desabilitado em Modo Dev:
- ❌ Necessidade de login real
- ❌ Criação de contas
- ❌ Modal de autenticação
- ❌ Botão "Sair" (não é necessário)

---

### 🚀 Como usar:

1. **Acesse o site:** `http://localhost:5173/`
2. **Navegue livremente:**
   - Clique em "Começar Agora" → Vai direto para a biblioteca
   - Use a sidebar normalmente
   - Todas as páginas estão acessíveis

3. **Identifique o modo dev:**
   - Na sidebar, você verá um badge amarelo "🔧 Modo Desenvolvimento"
   - O email do usuário mock é: `dev@retrovault.local`

---

### 🔄 Como desativar o Modo Dev:

#### Quando quiser usar autenticação real:

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

### 🛠️ Configuração Técnica:

#### Arquivo `.env`:
```bash
# Modo de Desenvolvimento (true = ativo, false = desativado)
VITE_DEV_MODE=true
```

#### Usuário Mock (Modo Dev):
```javascript
{
  uid: 'dev-user-123',
  email: 'dev@retrovault.local',
  displayName: 'Developer',
  emailVerified: true
}
```

#### Arquivos Modificados:
- `src/contexts/AuthContext.tsx` - Lógica de modo dev
- `src/App.tsx` - Bypass de autenticação
- `src/components/Sidebar.tsx` - Indicador visual
- `.env` - Configuração

---

### 📝 Notas Importantes:

#### ⚠️ Para Testes Locais:
- **Modo Dev é perfeito** para testar funcionalidades
- **Não precisa configurar Firebase** agora
- **Dados não são salvos** no Firebase (ainda)

#### 🚀 Para Produção:
- **Desabilite o Modo Dev** (`VITE_DEV_MODE=false`)
- **Configure Firebase Console:**
  - Habilitar Authentication (Email/Password)
  - Configurar regras de Firestore
  - Configurar regras de Storage

#### 🔒 Segurança:
- Modo Dev **NÃO deve ser usado em produção**
- Sempre desabilite antes de fazer deploy
- Credenciais reais são necessárias para produção

---

### 🎮 Fluxo de Uso:

#### Com Modo Dev (ATUAL):
```
1. Acessa o site
2. Já está "logado" automaticamente
3. Clica em qualquer página
4. Acesso imediato ✅
```

#### Sem Modo Dev (Produção):
```
1. Acessa o site
2. Clica em "Começar Agora"
3. Modal de login/registro abre
4. Cria conta ou faz login
5. Acesso liberado após autenticação ✅
```

---

### 🐛 Troubleshooting:

#### Modo Dev não está funcionando:
1. Verificar se `.env` existe na raiz do projeto
2. Confirmar que `VITE_DEV_MODE=true`
3. Reiniciar o servidor: `npm run dev`
4. Limpar cache do navegador (Ctrl+Shift+R)

#### Badge "Modo Desenvolvimento" não aparece:
1. Verificar se o servidor foi reiniciado após mudar `.env`
2. Verificar console do navegador por erros
3. Limpar cache e recarregar

#### Quer voltar para autenticação real:
1. Mudar `.env`: `VITE_DEV_MODE=false`
2. Reiniciar servidor
3. Modal de login deve aparecer

---

## 🏆 Integração RetroAchievements

### 📋 Como configurar a integração com RetroAchievements.org

#### **1. Obter Chave API**
1. Acesse: https://retroachievements.org/APIDemo.php
2. Faça login na sua conta
3. Copie sua chave API

#### **2. Configurar Variável de Ambiente**

##### **Opção A: Arquivo .env (Recomendado)**
Crie um arquivo `.env` na raiz do projeto:

```bash
# Configuração da API RetroAchievements.org
VITE_RETRO_ACHIEVEMENTS_API_KEY=sua_chave_api_aqui
```

##### **Opção B: Variável de Sistema**
```bash
# Windows
set VITE_RETRO_ACHIEVEMENTS_API_KEY=sua_chave_api_aqui

# Linux/Mac
export VITE_RETRO_ACHIEVEMENTS_API_KEY=sua_chave_api_aqui
```

#### **3. Reiniciar o Servidor**
```bash
npm run dev
```

---

### 🎯 Funcionalidades Disponíveis

#### **✅ Conquistas Recentes**
- Últimas conquistas da comunidade
- Badges e pontos
- Jogos e consoles

#### **✅ Jogos Populares**
- Jogos mais jogados
- Estatísticas de conquistas
- Ícones dos jogos

#### **✅ Estatísticas Globais**
- Dados da comunidade
- Métricas de engajamento

#### **✅ Busca de Jogos**
- Pesquisar por título
- Filtros por console
- Informações detalhadas

---

### 🔧 Endpoints da API

| Endpoint | Descrição | Parâmetros |
|----------|-----------|------------|
| `/API_GetUserInfo.php` | Informações do usuário | `u` (username) |
| `/API_GetRecentAchievements.php` | Conquistas recentes | `minutes`, `count` |
| `/API_GetGameInfoAndUserProgress.php` | Conquistas do jogo | `g` (gameId), `u` (username) |
| `/API_GetMostPopularGames.php` | Jogos populares | `count` |
| `/API_SearchGames.php` | Buscar jogos | `y` (query) |

---

### 🚨 Troubleshooting

#### **Erro: "Chave API inválida"**
- Verifique se a chave está correta
- Confirme se a variável de ambiente está definida
- Reinicie o servidor

#### **Erro: "CORS"**
- A API do RetroAchievements não suporta CORS
- Use um proxy ou servidor backend

#### **Erro: "Rate Limit"**
- A API tem limite de requisições
- Implemente cache ou delay entre requests

---

### 📚 Exemplos de Uso

#### **Buscar informações do usuário**
```typescript
import { AchievementsService } from './services/achievementsService';

const userInfo = await AchievementsService.getUserInfo('username');
console.log(userInfo.totalPoints);
```

#### **Buscar conquistas recentes**
```typescript
const recentAchievements = await AchievementsService.getRecentAchievements(10);
console.log(recentAchievements);
```

#### **Buscar jogos populares**
```typescript
const popularGames = await AchievementsService.getPopularGames(20);
console.log(popularGames);
```

---

### 🌐 Links Úteis

- **API Documentation**: https://retroachievements.org/APIDemo.php
- **Site Oficial**: https://retroachievements.org/
- **Discord**: https://discord.gg/retroachievements
- **GitHub**: https://github.com/RetroAchievements

---

## 🚀 Deploy e Produção

### ✅ Correções Aplicadas

#### 📄 Arquivos Atualizados:
- `vercel.json` - Configuração otimizada para Vite
- `vite.config.ts` - Build otimizado com chunks
- `.vercelignore` - Arquivos desnecessários ignorados

---

### 🔧 Configurações do Vercel:

#### 1. **Framework Detection**
- ✅ Framework: `vite`
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`
- ✅ Install Command: `npm install`

#### 2. **Environment Variables**
Configure no painel do Vercel:
```
VITE_RETRO_ACHIEVEMENTS_API_KEY=your_api_key_here
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_FIREBASE_AUTH_DOMAIN=your_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_DEV_MODE=false
```

#### 3. **Build Settings**
- ✅ Node.js Version: `18.x`
- ✅ Build Command: `npm run build`
- ✅ Output Directory: `dist`

---

### 🔍 Verificações Necessárias

#### 1. **No Painel do Vercel:**
1. Acesse [vercel.com/dashboard](https://vercel.com/dashboard)
2. Selecione seu projeto `retrovault`
3. Vá em **Settings** → **General**
4. Verifique se:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

#### 2. **Environment Variables:**
1. Vá em **Settings** → **Environment Variables**
2. Adicione todas as variáveis necessárias (veja acima)
3. Defina os valores corretos

#### 3. **Git Integration:**
1. Vá em **Settings** → **Git**
2. Verifique se está conectado ao repositório correto:
   ```
   https://github.com/planoraapp/retrovault
   ```
3. Confirme que está usando a branch `main`

#### 4. **Deploy Settings:**
1. Vá em **Settings** → **Deployments**
2. Verifique se:
   - **Production Branch**: `main`
   - **Auto Deploy**: `Enabled`

---

### 🚨 Possíveis Problemas e Soluções

#### Problema 1: Build Falha
**Solução**: 
- Verifique se todas as dependências estão no `package.json`
- Confirme que o Node.js version está em `18.x`

#### Problema 2: Assets não carregam
**Solução**:
- Verifique se os ícones estão na pasta `public/icons/consoles/`
- Confirme que o `.vercelignore` não está ignorando arquivos necessários

#### Problema 3: Firebase não funciona
**Solução**:
- Verifique se as configurações do Firebase estão corretas
- Confirme que as variáveis de ambiente estão definidas

---

### 📊 Build Local Testado

```bash
npm run build
✓ 1287 modules transformed.
dist/index.html                     0.84 kB │ gzip:   0.47 kB
dist/assets/index-C5zODV7F.css     39.06 kB │ gzip:   7.25 kB
dist/assets/ui-Blv9MNKD.js          4.49 kB │ gzip:   1.77 kB
dist/assets/index-qRL6qb1r.js     118.60 kB │ gzip:  28.06 kB
dist/assets/vendor-C8w-UNLI.js    141.74 kB │ gzip:  45.48 kB
dist/assets/firebase-B_zoEo0p.js  506.07 kB │ gzip: 119.57 kB
✓ built in 4.09s
```

---

### 🎯 Próximos Passos

1. **Verifique** as configurações no painel do Vercel
2. **Configure** as variáveis de ambiente
3. **Faça** um novo deploy manual se necessário
4. **Teste** a aplicação em produção

---

### 📞 Suporte

Se ainda houver problemas:
1. Verifique os logs de build no Vercel
2. Confirme que o repositório está sincronizado
3. Teste o build local com `npm run build`
4. Verifique se todas as dependências estão instaladas

---

## ☁️ Planejamento: Sincronização em Nuvem

### 📋 Contexto da Plataforma

O RetroVault visa se tornar uma solução universal de sincronização de saves de emuladores retro, permitindo que usuários continuem seus jogos em diferentes dispositivos (PC, Android, consoles portáteis) de forma transparente e simples.

---

### 🔍 Análise do Cenário Atual

#### 1. O que as Plataformas Oferecem Nativamente?

Atualmente, os emuladores em si raramente oferecem um serviço de nuvem próprio (backend proprietário), pois isso custa dinheiro de servidor. Eles geralmente oferecem ferramentas para conectar a serviços de terceiros.

##### RetroArch (Versão Steam)
- **Prós**: Utiliza Steam Cloud - transparente e automático
- **Contras**: Só funciona se você estiver jogando pelo Steam. Se você jogar no Steam Deck e quiser continuar no seu celular Android (versão APK), a sincronização não acontece nativamente

##### RetroArch (Versão Standalone)
- **Funcionalidade**: Recentemente introduziu suporte básico a WebDAV
- **Como funciona**: O usuário precisa ter seu próprio servidor de nuvem (como um Nextcloud pessoal) e configurar manualmente a URL, usuário e senha dentro do RetroArch
- **Veredito**: É excelente para usuários avançados (TI/Devs), mas complexo demais para o usuário casual

##### PPSSPP / Dolphin / DuckStation
- A maioria desses emuladores foca na emulação local
- Não possuem nuvem nativa
- O PPSSPP, por exemplo, permite navegar pastas, o que facilita o uso de ferramentas externas, mas não "resolve" o problema sozinho

---

#### 2. As Alternativas "Manuais" (O que os usuários fazem hoje)

Como não existe uma solução universal, a comunidade criou várias "gambiarras" e métodos criativos. É aqui que o RetroVault pode encontrar espaço para melhorar a UX (Experiência do Usuário).

##### A. Sincronização de Pastas (Google Drive/Dropbox/OneDrive)
- **Método mais comum**: O usuário redireciona a pasta de saves do emulador para uma pasta monitorada pela nuvem
- **No PC**: Usam Links Simbólicos (mklink) para enganar o emulador, fazendo-o salvar dentro da pasta do Dropbox
- **No Android**: Usam aplicativos de terceiros como DriveSync ou FolderSync. Esses apps monitoram a pasta /RetroArch/saves e sobem para o Google Drive a cada alteração
- **Problema**: Requer configuração manual em cada dispositivo. Conflitos de versão são comuns se você esquecer de sincronizar antes de jogar

##### B. Syncthing
- **Solução favorita** entre entusiastas de portáteis (como Miyoo Mini, Anbernic, Steam Deck)
- **Como funciona**: Cria uma nuvem P2P (ponto a ponto) entre seus dispositivos, sem passar por um servidor central (Google/Amazon)
- **Problema**: Precisa que os dois dispositivos estejam ligados ao mesmo tempo para sincronizar, ou que você tenha um servidor "sempre ligado" em casa

##### C. Ecosistemas Fechados
- Sistemas operacionais dedicados à emulação, como Batocera ou ArkOS, possuem scripts embutidos para facilitar o uso do Rclone (ferramenta de linha de comando para nuvem)
- **Problema**: Ainda exigem que o usuário saiba configurar arquivos de texto ou chaves de API

---

### 💡 Análise de Viabilidade do RetroVault

#### Existe mercado?
**Com certeza.** O mercado de consoles portáteis chineses (Anbernic, Powkiddy, Miyoo) explodiu. O usuário médio desses consoles quer jogar no ônibus (portátil) e continuar no PC de casa, mas desiste devido à complexidade de mover os saves.

#### Onde está a oportunidade (O "Pulo do Gato")

##### 1. Simplicidade (Plug & Play)
Se criarmos um plugin ou aplicativo que rode em background e exija apenas "Login e Senha" para funcionar, ganhamos o usuário. Ninguém quer configurar WebDAV ou caminhos de diretórios.

##### 2. Cross-Platform Real
O desafio é fazer o save sair de um Android (sistema de arquivos Linux) e funcionar num PC (Windows) sem corromper, lidando com caminhos diferentes.

##### 3. Save State vs. Save Game (Battery Save)

**Battery Save (.srm, .sav)**
- É o save que você faz dentro do jogo (no Checkpoint ou Save Point)
- Altamente compatíveis entre emuladores diferentes
- **Prioridade**: Alta - foco principal do RetroVault

**Save State (.state)**
- É o "congelamento" do emulador
- Não costumam ser compatíveis se a versão do emulador for diferente (ex: RetroArch 1.9 vs 1.10)
- **Ação necessária**: Avisar o usuário sobre isso ou focar apenas em Battery Saves

---

### 📊 Resumo Comparativo

| Solução | Prós | Contras |
|---------|------|---------|
| **Steam Cloud** | Automático e seguro | Preso ao ecossistema Steam |
| **Syncthing** | Gratuito, privado, sem servidor central | Complexo de configurar; exige dispositivos ligados |
| **Google Drive + Apps** | Usa nuvem que você já tem | "Gambiarra" técnica; propenso a conflitos |
| **RetroVault** | Potencial de ser o "Spotify dos Saves" | Custo de servidor; necessidade de plugins para cada emulador |

---

### 🎯 Próximos Passos Técnicos

#### Para refinar a viabilidade técnica, precisamos definir:

1. **Arquitetura do Sistema**
   - API backend (Firebase/Node.js?)
   - Armazenamento de saves (Firebase Storage?)
   - Cliente local (plugin/extensão)

2. **Escopo Inicial**
   - Quais emuladores priorizar? (RetroArch, PPSSPP, Dolphin?)
   - Quais plataformas suportar primeiro? (Windows, Android, Linux?)
   - Tipos de save: apenas Battery Saves ou incluir Save States?

3. **Modelo de Negócio**
   - Gratuito com limites? (ex: 100 saves)
   - Premium com armazenamento ilimitado?
   - Freemium com funcionalidades extras?

---

### 📚 Referências e Projetos Similares

#### Ludusavi
- Projeto de código aberto que foca em backup de saves para PC
- Mais focado em backup do que em sincronização contínua cross-platform para emuladores portáteis
- **Diferencial do RetroVault**: Foco em sincronização contínua e cross-platform (não apenas backup)

---

### 🔄 Status do Planejamento

- [x] Análise de mercado e concorrência
- [x] Identificação de oportunidades
- [ ] Definição de arquitetura técnica
- [ ] Prototipagem de plugin/extensão
- [ ] Testes de compatibilidade cross-platform
- [ ] Modelo de negócio e pricing

---

## 📤 Upload de Saves - Abordagem Segura

### ⚠️ Os Desafios da Abordagem "Copiar Tudo"

#### Desafios Técnicos:

##### Volume de Upload
Pastas de "memory card" de emuladores modernos (como os de um Raspberry Pi ou PC) contêm não apenas os saves (que são minúsculos, em kilobytes), mas também os próprios arquivos dos jogos (as ROMs/ISOs). Um único jogo de PlayStation pode ter 700MB, e um de GameCube, 1.4GB. Fazer o upload de gigabytes de dados através de um navegador é extremamente lento, propenso a falhas e consumiria uma quantidade enorme da sua banda de internet e armazenamento no servidor.

##### Processamento Intenso no Servidor
Após receber dezenas de gigabytes de dados, seu servidor teria que descompactar (se aplicável) e rodar um script para analisar milhares de arquivos, identificar as extensões, mover os saves para um lado, as capas para outro, e deletar os gigantescos arquivos de jogos. Isso é computacionalmente caro e complexo de gerenciar.

---

### 🚨 O Alerta Legal (MUITO IMPORTANTE)

Este é o ponto mais crítico. Armazenar ou permitir o upload de arquivos de jogos (ROMs/ISOs) é legalmente muito perigoso.

#### Direitos Autorais
Os jogos, mesmo os antigos, são propriedade intelectual de empresas como Nintendo, SEGA, Sony, etc. Elas não permitem a distribuição ou armazenamento não autorizado de suas cópias.

#### Risco para o Seu Site
No momento em que um arquivo de ROM (.smc, .iso, .nes, etc.) é salvo no seu servidor, mesmo que por um segundo antes de ser deletado, seu site pode ser considerado um distribuidor de conteúdo pirata. Isso pode levar a processos legais caríssimos e ao fechamento do seu serviço. A "Steam" funciona porque ela tem acordos de licença para distribuir os jogos; ela não permite que usuários subam seus próprios jogos.

---

### ✅ A Solução: Leitura Inteligente no Navegador (Client-Side)

Felizmente, existe uma maneira muito mais elegante, segura e eficiente de fazer exatamente o que você quer, sem nunca tocar nos arquivos de jogos. A "mágica" acontece no navegador do usuário antes do upload.

#### Veja o fluxo de trabalho revisado:

##### 1. Seleção da Pasta
O usuário ainda clica em "Adicionar meus jogos" e seleciona a pasta inteira, como você imaginou.

##### 2. Análise Local (A Mágica)
Em vez de fazer o upload de tudo, um script JavaScript rodando na página lê a lista de arquivos e suas características DENTRO da pasta selecionada, sem enviá-los para o servidor.

##### 3. Filtragem Inteligente
O script percorre a lista de arquivos e faz o seguinte:

- **Vê um arquivo chrono_trigger.srm?** Opa, isso é um save. Ele lê o conteúdo desse pequeno arquivo e o prepara para upload.
- **Vê um arquivo chrono_trigger.smc?** Opa, isso é um jogo (ROM). O script NÃO lê o conteúdo do arquivo. Ele apenas anota o nome: "chrono_trigger".
- **Vê um arquivo chrono_trigger.jpg?** Opa, isso parece uma capa. Ele lê o conteúdo desse pequeno arquivo e o prepara para upload como a capa do jogo "chrono_trigger".

##### 4. Upload Seletivo e Mínimo
Após analisar tudo, o navegador envia para o seu servidor apenas o essencial:

- Os arquivos de save (kilobytes).
- Os arquivos de imagem/capa que encontrou (alguns megabytes, no máximo).
- Uma lista de nomes dos jogos que ele encontrou (apenas texto).

##### 5. Construção da Biblioteca
Seu servidor recebe essa informação mínima e segura. Ele usa a lista de nomes dos jogos para buscar metadados (capa oficial, descrição, etc.) em APIs externas, caso o usuário não tenha uma capa local, e associa tudo aos saves recebidos.

---

### 💻 Como Orientar a Implementação

#### Prompt para a Lógica no Navegador (Client-Side):

```
Usando JavaScript, crie um seletor de pastas. Ao selecionar uma pasta, não faça o upload de tudo. Em vez disso, percorra a lista de arquivos localmente. Crie três grupos: 1) arquivos de save (extensões .srm, .sav, .mcr), 2) arquivos de imagem (extensões .jpg, .png), e 3) os nomes dos arquivos de jogos (extensões .smc, .sfc, .md, .iso). Faça o upload do conteúdo dos arquivos dos grupos 1 e 2, e apenas da lista de nomes do grupo 3.
```

#### Prompt para o Backend:

```
Crie uma API que recebe: uma coleção de arquivos de save, uma coleção de arquivos de imagem e uma lista de nomes de jogos. Salve os arquivos no armazenamento do usuário. Para cada jogo, verifique se uma imagem foi enviada. Se não, use o nome do jogo para buscar a capa em uma API externa como a RAWG.io. Construa a biblioteca do usuário com essas informações.
```

---

### ✨ Benefícios desta Abordagem

- ✅ **Segurança Legal**: Nunca armazena ROMs/ISOs
- ✅ **Eficiência**: Upload apenas de arquivos pequenos (saves e capas)
- ✅ **Velocidade**: Processamento rápido no cliente
- ✅ **Economia**: Menor uso de banda e armazenamento
- ✅ **UX Simples**: Usuário ainda seleciona a pasta inteira
- ✅ **Conformidade**: Evita riscos legais de direitos autorais

---

## 📚 Referências e Recursos

### 🎮 Referência de Jogos - RetroAchievements

Todos os jogos abaixo utilizam imagens oficiais do **RetroAchievements.org**

#### Jogos Utilizados no Dashboard

##### 1. **Super Mario World**
- **ID RA:** 228
- **Console:** SNES/Super Famicom
- **Total de Conquistas:** 89
- **Box Art:** `https://retroachievements.org/Images/109856.png`
- **Icon:** `https://retroachievements.org/Images/112443.png`
- **Status no Dashboard:** 90% Completo (45/50 conquistas)

##### 2. **The Legend of Zelda: A Link to the Past**
- **ID RA:** 355
- **Console:** SNES/Super Famicom
- **Total de Conquistas:** 109
- **Box Art:** `https://retroachievements.org/Images/022504.png`
- **Icon:** `https://retroachievements.org/Images/059119.png`
- **Status no Dashboard:** Em Progresso - 25% (15/60 conquistas)

##### 3. **Chrono Trigger**
- **ID RA:** 319
- **Console:** SNES/Super Famicom
- **Total de Conquistas:** 77
- **Box Art:** `https://retroachievements.org/Images/000222.png`
- **Icon:** `https://retroachievements.org/Images/093950.png`
- **Status no Dashboard:** Em Progresso - 75% (48/64 conquistas)

##### 4. **Final Fantasy VII**
- **ID RA:** 11240
- **Console:** PlayStation
- **Total de Conquistas:** Variável
- **Box Art:** `https://retroachievements.org/Images/072390.png`
- **Icon:** `https://retroachievements.org/Images/085764.png`
- **Status no Dashboard:** 35% Completo (28/80 conquistas)

##### 5. **Sonic the Hedgehog 2**
- **ID RA:** 2
- **Console:** Genesis/Mega Drive
- **Total de Conquistas:** Variável
- **Box Art:** `https://retroachievements.org/Images/051848.png`
- **Icon:** `https://retroachievements.org/Images/061384.png`
- **Status no Dashboard:** 60% Completo (18/30 conquistas)

##### 6. **Pokémon Red Version**
- **ID RA:** 724
- **Console:** Game Boy
- **Total de Conquistas:** Variável
- **Box Art:** `https://retroachievements.org/Images/117104.png`
- **Icon:** `https://retroachievements.org/Images/117113.png`
- **Status no Dashboard:** 15% Completo (23/150 conquistas)

##### 7. **Street Fighter II**
- **ID RA:** 337
- **Console:** SNES/Super Famicom
- **Total de Conquistas:** Variável
- **Box Art:** `https://retroachievements.org/Images/060824.png`
- **Icon:** `https://retroachievements.org/Images/113279.png`
- **Status no Dashboard:** 50% Completo (25/50 conquistas)

##### 8. **Metroid**
- **ID RA:** 1446
- **Console:** NES/Famicom
- **Total de Conquistas:** Variável
- **Box Art:** `https://retroachievements.org/Images/013238.png`
- **Icon:** `https://retroachievements.org/Images/036035.png`
- **Status no Dashboard:** 40% Completo (12/30 conquistas)

##### 9. **Castlevania**
- **ID RA:** 1462
- **Console:** NES/Famicom
- **Total de Conquistas:** Variável
- **Box Art:** `https://retroachievements.org/Images/071768.png`
- **Icon:** `https://retroachievements.org/Images/070132.png`
- **Status no Dashboard:** 80% Completo (32/40 conquistas)

---

### 📝 Padrões de URL

#### Imagens do RetroAchievements:
```
https://retroachievements.org/Images/[ID].png
```

#### Tipos de imagem disponíveis:
- **Box Art** - Capa completa do jogo
- **Icon** - Ícone pequeno do jogo
- **Title** - Imagem de título
- **Ingame** - Screenshot do jogo

---

### 🔧 Implementação

#### No código (RankingsContent.tsx):
```tsx
<img 
  src="https://retroachievements.org/Images/109856.png" 
  className="w-full h-full object-contain p-4" 
  alt="Capa do jogo" 
/>
```

#### Características:
- ✅ Imagens PNG de alta qualidade
- ✅ Hospedadas nos servidores do RA
- ✅ Carregamento rápido
- ✅ Sempre disponíveis
- ✅ Oficiais e verificadas pela comunidade

---

### 🎨 Estilo Aplicado

#### Container das imagens:
```tsx
<div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
  <img 
    src="[URL_DA_IMAGEM]" 
    className="w-full h-full object-contain p-4" 
  />
</div>
```

#### Características do design:
- **Fundo gradiente** (gray-700 → gray-900)
- **Padding de 4** para espaçamento
- **object-contain** para manter proporções
- **height fixo** de 48 (192px)

---

### 🚀 Próximos Passos

#### Integração Dinâmica:
1. Usar `AchievementsService.searchGames()` para buscar jogos
2. Obter IDs automaticamente
3. Construir URLs dinamicamente
4. Cache local das imagens

#### Exemplo de integração:
```typescript
const game = await AchievementsService.searchGames("Super Mario World");
const imageUrl = `https://retroachievements.org/Images/${game[0].ImageIcon}`;
```

---

### 🛠️ Utilitários - Console Icons & Game Covers

Este diretório contém utilitários para gerenciar ícones de consoles retrô e capas de jogos.

#### Arquivos

- `consoleIcons.ts` - Mapeamento de URLs de imagens para cada console
- `gameCovers.ts` - Mapeamento de capas de jogos retrô populares
- `ConsoleIcon.tsx` - Componente React reutilizável para exibir ícones de console
- `GameCover.tsx` - Componente React reutilizável para exibir capas de jogos

---

#### Como usar

##### 1. Ícones de Console

```tsx
import ConsoleIcon from './ConsoleIcon'

// Tamanhos disponíveis: 'sm', 'md', 'lg'
<ConsoleIcon consoleId="nes" size="md" />
```

##### 2. Capas de Jogos

```tsx
import GameCover from './GameCover'

// Tamanhos disponíveis: 'sm', 'md', 'lg', 'xl'
<GameCover gameName="Super Mario Bros" size="lg" />
```

##### 3. Adicionar novo console

Edite `consoleIcons.ts` e adicione uma nova entrada:

```typescript
export const consoleIcons: Record<string, string> = {
  'novo-console': 'https://url-da-imagem.com/imagem.jpg',
  // ... outros consoles
}
```

##### 4. Adicionar nova capa de jogo

Edite `gameCovers.ts` e adicione uma nova entrada:

```typescript
export const gameCovers: Record<string, string> = {
  'nome-do-jogo': 'https://url-da-capa.com/capa.jpg',
  // ... outros jogos
}
```

---

#### Consoles suportados

- NES (Nintendo Entertainment System)
- Master System (Sega)
- SNES (Super Nintendo Entertainment System)
- Mega Drive (Sega)
- PlayStation (Sony)
- Nintendo 64 (Nintendo)
- Game Boy (Nintendo)
- Game Gear (Sega)
- Atari 2600 (Atari)
- Dreamcast (Sega)

---

#### Jogos com capas disponíveis

##### NES
- Super Mario Bros, Super Mario Bros 2, Super Mario Bros 3
- The Legend of Zelda, Zelda II: The Adventure of Link
- Metroid, Castlevania, Mega Man, Contra
- Ninja Gaiden, Double Dragon, Bubble Bobble
- Kirby's Adventure, Donkey Kong, Pac-Man

##### SNES
- Super Mario World, Super Mario World 2: Yoshi's Island
- Super Mario Kart, The Legend of Zelda: A Link to the Past
- Chrono Trigger, Final Fantasy VI, Super Metroid
- Street Fighter II, Mortal Kombat
- Donkey Kong Country (1, 2, 3)
- Star Fox, F-Zero, Super Mario All-Stars

##### PlayStation
- Final Fantasy VII, VIII, IX
- Resident Evil (1, 2, 3)
- Metal Gear Solid, Castlevania: Symphony of the Night
- Crash Bandicoot, Spyro the Dragon
- Gran Turismo, Tekken, Tomb Raider
- Silent Hill, Parasite Eve

##### Nintendo 64
- Super Mario 64, The Legend of Zelda: Ocarina of Time
- The Legend of Zelda: Majora's Mask, Mario Kart 64
- GoldenEye 007, Perfect Dark
- Banjo-Kazooie, Donkey Kong 64
- Star Fox 64, F-Zero X, Wave Race 64
- 1080° Snowboarding, Mario Party
- Super Smash Bros, Pokémon Snap

##### Sega Genesis/Mega Drive
- Sonic the Hedgehog (1, 2, 3)
- Streets of Rage (1, 2)
- Golden Axe, Altered Beast
- Phantasy Star, Shining Force
- Comix Zone, Gunstar Heroes
- Ranger X, Ecco the Dolphin
- ToeJam & Earl, Vector Man

---

#### Fallback automático

Se uma imagem não carregar, os componentes automaticamente exibem:
- **ConsoleIcon**: Emoji 🎮 como fallback
- **GameCover**: Placeholder genérico de jogo retrô

---

#### Performance

- Imagens são carregadas sob demanda
- Fallback robusto para evitar quebras
- Tamanhos otimizados para diferentes contextos
- Cache do navegador para melhor performance

---

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Dashboard.tsx    # Página principal
│   ├── Layout.tsx       # Layout principal
│   ├── Sidebar.tsx     # Navegação lateral
│   ├── SearchBar.tsx   # Barra de busca
│   ├── PlatformFilter.tsx # Filtro de plataformas
│   ├── SaveGrid.tsx    # Grid de saves
│   ├── SaveCard.tsx    # Card individual de save
│   ├── UploadModal.tsx # Modal de upload
│   ├── AuthModal.tsx   # Modal de autenticação
│   └── ...
├── contexts/           # Contexts React
│   └── AuthContext.tsx # Context de autenticação
├── data/               # Dados estáticos
│   ├── platforms.ts    # Lista de plataformas
│   └── sample-saves.ts # Saves de exemplo
├── services/           # Serviços e APIs
│   ├── firebaseService.ts # Serviços Firebase
│   ├── uploadService.ts   # Upload de arquivos
│   ├── achievementsService.ts # API RetroAchievements
│   └── ...
├── types/              # Definições TypeScript
│   └── index.ts       # Interfaces principais
├── utils/              # Utilitários
│   ├── consoleIcons.ts # Ícones de consoles
│   ├── gameCovers.ts   # Capas de jogos
│   └── ...
├── config/             # Configurações
│   ├── firebase.ts     # Config Firebase
│   └── api.ts          # Config API
├── pages/              # Páginas
│   └── DronefallPage.tsx # Landing page
├── App.tsx            # Componente principal
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais
```

---

## 🔧 Personalização

### Adicionando Novas Plataformas

Edite `src/data/platforms.ts` para adicionar novas plataformas:

```typescript
{
  id: 'nova-plataforma',
  name: 'Nome da Plataforma',
  category: 'console' | 'portable' | 'arcade' | 'computer',
  icon: '🎮',
  color: '#ff6b6b',
  generation: '5th',
  manufacturer: 'Fabricante',
  shortName: 'NP',
  releaseYear: 1995
}
```

### Modificando Cores

Edite `tailwind.config.js` para personalizar o tema:

```javascript
theme: {
  extend: {
    colors: {
      retro: {
        primary: '#007bff',
        secondary: '#6f42c1',
        // ... outras cores
      }
    }
  }
}
```

---

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

## 🙏 Agradecimentos

- Comunidade React por criar uma biblioteca incrível
- Tailwind CSS pela abordagem utility-first
- Firebase pela infraestrutura robusta
- RetroAchievements.org pela API e comunidade
- Todos os desenvolvedores que contribuíram para as bibliotecas utilizadas

---

## 📞 Links Úteis

### Documentação
- **Firebase Auth:** https://firebase.google.com/docs/auth
- **Firestore:** https://firebase.google.com/docs/firestore
- **Storage:** https://firebase.google.com/docs/storage
- **React Context:** https://react.dev/reference/react/useContext
- **Vite:** https://vitejs.dev/
- **Tailwind CSS:** https://tailwindcss.com/

### APIs e Serviços
- **RetroAchievements API:** https://retroachievements.org/APIDemo.php
- **RetroAchievements Site:** https://retroachievements.org/
- **RAWG.io (Metadados de jogos):** https://rawg.io/apidocs

### Deploy
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Firebase Console:** https://console.firebase.google.com/

---

**🎮 Sistema completo documentado! Pronto para desenvolvimento e produção.** ✨

---

*Desenvolvido com ❤️ para a comunidade retrô gaming*

**Última atualização**: 2024

