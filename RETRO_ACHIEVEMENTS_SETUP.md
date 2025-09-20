# 🏆 Configuração RetroAchievements.org

## 📋 Como configurar a integração com RetroAchievements.org

### **1. Obter Chave API**
1. Acesse: https://retroachievements.org/APIDemo.php
2. Faça login na sua conta
3. Copie sua chave API

### **2. Configurar Variável de Ambiente**

#### **Opção A: Arquivo .env (Recomendado)**
Crie um arquivo `.env` na raiz do projeto:

```bash
# Configuração da API RetroAchievements.org
REACT_APP_RETRO_ACHIEVEMENTS_API_KEY=sua_chave_api_aqui
```

#### **Opção B: Variável de Sistema**
```bash
# Windows
set REACT_APP_RETRO_ACHIEVEMENTS_API_KEY=sua_chave_api_aqui

# Linux/Mac
export REACT_APP_RETRO_ACHIEVEMENTS_API_KEY=sua_chave_api_aqui
```

### **3. Reiniciar o Servidor**
```bash
npm run dev
```

## 🎯 Funcionalidades Disponíveis

### **✅ Conquistas Recentes**
- Últimas conquistas da comunidade
- Badges e pontos
- Jogos e consoles

### **✅ Jogos Populares**
- Jogos mais jogados
- Estatísticas de conquistas
- Ícones dos jogos

### **✅ Estatísticas Globais**
- Dados da comunidade
- Métricas de engajamento

### **✅ Busca de Jogos**
- Pesquisar por título
- Filtros por console
- Informações detalhadas

## 🔧 Endpoints da API

| Endpoint | Descrição | Parâmetros |
|----------|-----------|------------|
| `/API_GetUserInfo.php` | Informações do usuário | `u` (username) |
| `/API_GetRecentAchievements.php` | Conquistas recentes | `minutes`, `count` |
| `/API_GetGameInfoAndUserProgress.php` | Conquistas do jogo | `g` (gameId), `u` (username) |
| `/API_GetMostPopularGames.php` | Jogos populares | `count` |
| `/API_SearchGames.php` | Buscar jogos | `y` (query) |

## 🚨 Troubleshooting

### **Erro: "Chave API inválida"**
- Verifique se a chave está correta
- Confirme se a variável de ambiente está definida
- Reinicie o servidor

### **Erro: "CORS"**
- A API do RetroAchievements não suporta CORS
- Use um proxy ou servidor backend

### **Erro: "Rate Limit"**
- A API tem limite de requisições
- Implemente cache ou delay entre requests

## 📚 Exemplos de Uso

### **Buscar informações do usuário**
```typescript
import { AchievementsService } from './services/achievementsService';

const userInfo = await AchievementsService.getUserInfo('username');
console.log(userInfo.totalPoints);
```

### **Buscar conquistas recentes**
```typescript
const recentAchievements = await AchievementsService.getRecentAchievements(10);
console.log(recentAchievements);
```

### **Buscar jogos populares**
```typescript
const popularGames = await AchievementsService.getPopularGames(20);
console.log(popularGames);
```

## 🌐 Links Úteis

- **API Documentation**: https://retroachievements.org/APIDemo.php
- **Site Oficial**: https://retroachievements.org/
- **Discord**: https://discord.gg/retroachievements
- **GitHub**: https://github.com/RetroAchievements

## 🎮 Próximos Passos

1. **Configurar chave API**
2. **Testar integração**
3. **Personalizar interface**
4. **Adicionar mais funcionalidades**

---

**Desenvolvido para a comunidade RetroAchievements** 🏆✨
