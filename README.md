# 🎮 RetroVault

Um cofre digital para saves e arquivos de retrogames, desenvolvido para preservar e compartilhar memórias dos jogos clássicos.

## 🚀 Características

* **Upload de Saves**: Faça upload de seus saves de retrogames
* **Categorização por Plataforma**: Organize por consoles, portáteis, arcade e computadores
* **Sistema de Busca Avançada**: Encontre saves por jogo, plataforma, tags ou tamanho
* **Interface Retro**: Design inspirado nos jogos clássicos
* **Responsivo**: Funciona perfeitamente em desktop e mobile

## 🎯 Plataformas Suportadas

### Consoles

* Nintendo Entertainment System (NES)
* Super Nintendo Entertainment System (SNES)
* Nintendo 64
* Nintendo GameCube
* Nintendo Wii
* Sega Genesis/Mega Drive
* Sega Saturn
* Sega Dreamcast
* PlayStation
* PlayStation 2
* Xbox
* Xbox 360

### Portáteis

* Game Boy
* Game Boy Color
* Game Boy Advance
* Nintendo DS
* PlayStation Portable

### Arcade

* Máquinas de arcade

### Computadores

* MS-DOS
* Windows 95/98
* Amiga
* Commodore 64

## 🛠️ Tecnologias

* **React 18** com TypeScript
* **Vite** para build e desenvolvimento
* **Tailwind CSS** para estilização
* **Lucide React** para ícones

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/planoraapp/retrovault.git
cd retrovault
```

2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto em modo de desenvolvimento:

```bash
npm run dev
```

4. Abra http://localhost:5173 no seu navegador.

## 🔥 Configuração Firebase

### 1. Criar Projeto Firebase
1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Crie um novo projeto
3. Habilite o Firestore Database
4. Obtenha a configuração do projeto

### 2. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:
```env
VITE_FIREBASE_API_KEY=sua_api_key_aqui
VITE_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=seu_projeto_id
VITE_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abcdef123456
```

## 🚀 Deploy no Vercel

### 1. Fazer Push para GitHub
```bash
git add .
git commit -m "Adicionar integração Firebase"
git push origin main
```

### 2. Deploy no Vercel
1. Acesse [Vercel](https://vercel.com/)
2. Importe seu repositório GitHub
3. Adicione as variáveis de ambiente no dashboard do Vercel:
   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
4. Faça o deploy!

### 3. Configurar Coleções Firestore
Após o deploy, crie estas coleções no Firestore:
- `saves` - para saves de jogos
- `platforms` - para plataformas de console

## 🏗️ Scripts Disponíveis

* `npm run dev` - Inicia o servidor de desenvolvimento
* `npm run build` - Cria a build de produção
* `npm run preview` - Visualiza a build de produção
* `npm run lint` - Executa o linter

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho da aplicação
│   ├── SearchBar.tsx   # Barra de busca e filtros
│   ├── PlatformFilter.tsx # Filtro por plataformas
│   ├── SaveGrid.tsx    # Grid de saves
│   ├── SaveCard.tsx    # Card individual de save
│   └── UploadModal.tsx # Modal de upload
├── data/               # Dados estáticos
│   ├── platforms.ts    # Lista de plataformas
│   └── sample-saves.ts # Saves de exemplo
├── types/              # Definições TypeScript
│   └── index.ts        # Interfaces e tipos
├── utils/              # Funções utilitárias
├── App.tsx             # Componente principal
└── main.tsx            # Ponto de entrada
```

## 🎨 Personalização

O projeto usa Tailwind CSS com uma paleta de cores personalizada chamada "retro". Você pode modificar as cores em `tailwind.config.js`:

```javascript
colors: {
  retro: {
    50: '#f0f9ff',
    // ... outras variações
    900: '#0c4a6e',
  }
}
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🎮 Como Usar

1. **Navegar**: Use os filtros laterais para navegar por categorias de plataformas
2. **Buscar**: Digite na barra de busca para encontrar saves específicos
3. **Filtrar**: Use os filtros avançados para refinar sua busca
4. **Upload**: Clique em "Upload Save" para adicionar novos saves
5. **Download**: Clique em "Download" nos cards dos saves para baixar

---

Feito com ❤️ para a comunidade retrogaming! 🎮
