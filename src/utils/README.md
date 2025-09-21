# Console Icons & Game Covers

Este diretório contém utilitários para gerenciar ícones de consoles retrô e capas de jogos.

## Arquivos

- `consoleIcons.ts` - Mapeamento de URLs de imagens para cada console
- `gameCovers.ts` - Mapeamento de capas de jogos retrô populares
- `ConsoleIcon.tsx` - Componente React reutilizável para exibir ícones de console
- `GameCover.tsx` - Componente React reutilizável para exibir capas de jogos

## Como usar

### 1. Ícones de Console

```tsx
import ConsoleIcon from './ConsoleIcon'

// Tamanhos disponíveis: 'sm', 'md', 'lg'
<ConsoleIcon consoleId="nes" size="md" />
```

### 2. Capas de Jogos

```tsx
import GameCover from './GameCover'

// Tamanhos disponíveis: 'sm', 'md', 'lg', 'xl'
<GameCover gameName="Super Mario Bros" size="lg" />
```

### 3. Adicionar novo console

Edite `consoleIcons.ts` e adicione uma nova entrada:

```typescript
export const consoleIcons: Record<string, string> = {
  'novo-console': 'https://url-da-imagem.com/imagem.jpg',
  // ... outros consoles
}
```

### 4. Adicionar nova capa de jogo

Edite `gameCovers.ts` e adicione uma nova entrada:

```typescript
export const gameCovers: Record<string, string> = {
  'nome-do-jogo': 'https://url-da-capa.com/capa.jpg',
  // ... outros jogos
}
```

## Consoles suportados

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

## Jogos com capas disponíveis

### NES
- Super Mario Bros, Super Mario Bros 2, Super Mario Bros 3
- The Legend of Zelda, Zelda II: The Adventure of Link
- Metroid, Castlevania, Mega Man, Contra
- Ninja Gaiden, Double Dragon, Bubble Bobble
- Kirby's Adventure, Donkey Kong, Pac-Man

### SNES
- Super Mario World, Super Mario World 2: Yoshi's Island
- Super Mario Kart, The Legend of Zelda: A Link to the Past
- Chrono Trigger, Final Fantasy VI, Super Metroid
- Street Fighter II, Mortal Kombat
- Donkey Kong Country (1, 2, 3)
- Star Fox, F-Zero, Super Mario All-Stars

### PlayStation
- Final Fantasy VII, VIII, IX
- Resident Evil (1, 2, 3)
- Metal Gear Solid, Castlevania: Symphony of the Night
- Crash Bandicoot, Spyro the Dragon
- Gran Turismo, Tekken, Tomb Raider
- Silent Hill, Parasite Eve

### Nintendo 64
- Super Mario 64, The Legend of Zelda: Ocarina of Time
- The Legend of Zelda: Majora's Mask, Mario Kart 64
- GoldenEye 007, Perfect Dark
- Banjo-Kazooie, Donkey Kong 64
- Star Fox 64, F-Zero X, Wave Race 64
- 1080° Snowboarding, Mario Party
- Super Smash Bros, Pokémon Snap

### Sega Genesis/Mega Drive
- Sonic the Hedgehog (1, 2, 3)
- Streets of Rage (1, 2)
- Golden Axe, Altered Beast
- Phantasy Star, Shining Force
- Comix Zone, Gunstar Heroes
- Ranger X, Ecco the Dolphin
- ToeJam & Earl, Vector Man

## Fallback automático

Se uma imagem não carregar, os componentes automaticamente exibem:
- **ConsoleIcon**: Emoji 🎮 como fallback
- **GameCover**: Placeholder genérico de jogo retrô

## Performance

- Imagens são carregadas sob demanda
- Fallback robusto para evitar quebras
- Tamanhos otimizados para diferentes contextos
- Cache do navegador para melhor performance