# 🎮 RetroVault

**Seus Saves Retrô Merecem um Cofre**

Uma aplicação moderna para organizar, gerenciar e armazenar seus saves de jogos retrô de forma elegante e eficiente.

## ✨ Características

- 🎯 **Interface Moderna**: Design limpo e responsivo com Tailwind CSS
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- 🔍 **Busca Inteligente**: Encontre seus saves por jogo, plataforma ou tags
- 🏷️ **Sistema de Tags**: Organize seus saves com tags personalizadas
- 📊 **Dashboard Completo**: Visão geral da sua coleção com estatísticas
- 🎮 **Múltiplas Plataformas**: Suporte para consoles de 3ª a 6ª geração
- 💾 **Upload Fácil**: Interface intuitiva para upload de saves
- 🌙 **Tema Escuro**: Interface otimizada para longas sessões de gaming

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces de usuário
- **TypeScript** - JavaScript com tipagem estática
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Ícones modernos e consistentes

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

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse `http://localhost:5173` no seu navegador

## 🛠️ Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run preview` - Visualiza o build de produção
- `npm run lint` - Executa o linter ESLint

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
│   └── UploadModal.tsx # Modal de upload
├── data/               # Dados estáticos
│   ├── platforms.ts    # Lista de plataformas
│   └── sample-saves.ts # Saves de exemplo
├── types/              # Definições TypeScript
│   └── index.ts       # Interfaces principais
├── App.tsx            # Componente principal
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## 🎮 Plataformas Suportadas

### Consoles
- **3ª Geração**: NES, Master System, Atari 7800
- **4ª Geração**: SNES, Mega Drive, TurboGrafx-16, Neo Geo AES
- **5ª Geração**: PlayStation, Nintendo 64, Sega Saturn, Atari Jaguar, 3DO
- **6ª Geração**: PlayStation 2, Nintendo GameCube, Xbox, Sega Dreamcast

### Portáteis
- Game Boy, Game Boy Color, Game Boy Advance
- Game Gear, Atari Lynx, Neo Geo Pocket Color

### Arcade e Computadores
- Máquinas de arcade clássicas
- Commodore 64, Amiga, Atari ST

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

## 🚀 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub ao Vercel
2. Configure as variáveis de ambiente se necessário
3. Deploy automático a cada push para `main`

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte aplicações React estáticas:
- Netlify
- GitHub Pages
- Firebase Hosting
- AWS S3 + CloudFront

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- Comunidade React por criar uma biblioteca incrível
- Tailwind CSS pela abordagem utility-first
- Todos os desenvolvedores que contribuíram para as bibliotecas utilizadas

---

**Desenvolvido com ❤️ para a comunidade retrô gaming**