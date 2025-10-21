# 🎮 Referência de Jogos - RetroAchievements

## Jogos Utilizados no Dashboard

Todos os jogos abaixo utilizam imagens oficiais do **RetroAchievements.org**

---

### 1. **Super Mario World**
- **ID RA:** 228
- **Console:** SNES/Super Famicom
- **Total de Conquistas:** 89
- **Box Art:** `https://retroachievements.org/Images/109856.png`
- **Icon:** `https://retroachievements.org/Images/112443.png`
- **Status no Dashboard:** 90% Completo (45/50 conquistas)

---

### 2. **The Legend of Zelda: A Link to the Past**
- **ID RA:** 355
- **Console:** SNES/Super Famicom
- **Total de Conquistas:** 109
- **Box Art:** `https://retroachievements.org/Images/022504.png`
- **Icon:** `https://retroachievements.org/Images/059119.png`
- **Status no Dashboard:** Em Progresso - 25% (15/60 conquistas)

---

### 3. **Chrono Trigger**
- **ID RA:** 319
- **Console:** SNES/Super Famicom
- **Total de Conquistas:** 77
- **Box Art:** `https://retroachievements.org/Images/000222.png`
- **Icon:** `https://retroachievements.org/Images/093950.png`
- **Status no Dashboard:** Em Progresso - 75% (48/64 conquistas)

---

### 4. **Final Fantasy VII**
- **ID RA:** 11240
- **Console:** PlayStation
- **Total de Conquistas:** Variável
- **Box Art:** `https://retroachievements.org/Images/072390.png`
- **Icon:** `https://retroachievements.org/Images/085764.png`
- **Status no Dashboard:** 35% Completo (28/80 conquistas)

---

### 5. **Sonic the Hedgehog 2**
- **ID RA:** 2
- **Console:** Genesis/Mega Drive
- **Total de Conquistas:** Variável
- **Box Art:** `https://retroachievements.org/Images/051848.png`
- **Icon:** `https://retroachievements.org/Images/061384.png`
- **Status no Dashboard:** 60% Completo (18/30 conquistas)

---

### 6. **Pokémon Red Version**
- **ID RA:** 724
- **Console:** Game Boy
- **Total de Conquistas:** Variável
- **Box Art:** `https://retroachievements.org/Images/117104.png`
- **Icon:** `https://retroachievements.org/Images/117113.png`
- **Status no Dashboard:** 15% Completo (23/150 conquistas)

---

### 7. **Street Fighter II**
- **ID RA:** 337
- **Console:** SNES/Super Famicom
- **Total de Conquistas:** Variável
- **Box Art:** `https://retroachievements.org/Images/060824.png`
- **Icon:** `https://retroachievements.org/Images/113279.png`
- **Status no Dashboard:** 50% Completo (25/50 conquistas)

---

### 8. **Metroid**
- **ID RA:** 1446
- **Console:** NES/Famicom
- **Total de Conquistas:** Variável
- **Box Art:** `https://retroachievements.org/Images/013238.png`
- **Icon:** `https://retroachievements.org/Images/036035.png`
- **Status no Dashboard:** 40% Completo (12/30 conquistas)

---

### 9. **Castlevania**
- **ID RA:** 1462
- **Console:** NES/Famicom
- **Total de Conquistas:** Variável
- **Box Art:** `https://retroachievements.org/Images/071768.png`
- **Icon:** `https://retroachievements.org/Images/070132.png`
- **Status no Dashboard:** 80% Completo (32/40 conquistas)

---

## 📝 Padrões de URL

### Imagens do RetroAchievements:
```
https://retroachievements.org/Images/[ID].png
```

### Tipos de imagem disponíveis:
- **Box Art** - Capa completa do jogo
- **Icon** - Ícone pequeno do jogo
- **Title** - Imagem de título
- **Ingame** - Screenshot do jogo

---

## 🔧 Implementação

### No código (RankingsContent.tsx):
```tsx
<img 
  src="https://retroachievements.org/Images/109856.png" 
  className="w-full h-full object-contain p-4" 
  alt="Capa do jogo" 
/>
```

### Características:
- ✅ Imagens PNG de alta qualidade
- ✅ Hospedadas nos servidores do RA
- ✅ Carregamento rápido
- ✅ Sempre disponíveis
- ✅ Oficiais e verificadas pela comunidade

---

## 🎨 Estilo Aplicado

### Container das imagens:
```tsx
<div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-700 to-gray-900">
  <img 
    src="[URL_DA_IMAGEM]" 
    className="w-full h-full object-contain p-4" 
  />
</div>
```

### Características do design:
- **Fundo gradiente** (gray-700 → gray-900)
- **Padding de 4** para espaçamento
- **object-contain** para manter proporções
- **height fixo** de 48 (192px)

---

## 🚀 Próximos Passos

### Integração Dinâmica:
1. Usar `AchievementsService.searchGames()` para buscar jogos
2. Obter IDs automaticamente
3. Construir URLs dinamicamente
4. Cache local das imagens

### Exemplo de integração:
```typescript
const game = await AchievementsService.searchGames("Super Mario World");
const imageUrl = `https://retroachievements.org/Images/${game[0].ImageIcon}`;
```

---

## 📚 Documentação

- **API Docs:** https://api-docs.retroachievements.org/
- **Obter API Key:** https://retroachievements.org/APIDemo.php
- **Game List:** https://retroachievements.org/gameList.php

---

**✨ Todas as imagens agora são oficiais do RetroAchievements!** 🎮

