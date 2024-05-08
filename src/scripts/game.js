// game.js
import { fireCards, waterCards, earthCards, darknessCards, lightCards, airCards, electricityCards, arcanumCards, magicalCards, terrainCards } from '../scripts/database/database.js';

// Função auxiliar para obter uma carta aleatória de um conjunto de cartas
function getRandomCard(cards) {
    return cards[Math.floor(Math.random() * cards.length)];
}

// Função para iniciar o jogo
export function initializeGame() {
    // Distribuição de cartas para jogador e inimigo
    const playerCards = [];
    const enemyCards = [];

    // Exemplo de distribuição de cartas de fogo
    playerCards.push(getRandomCard(fireCards));
    enemyCards.push(getRandomCard(fireCards));

    // Retorne ou manipule as cartas como necessário para o jogo continuar
    console.log('Cartas do jogador:', playerCards);
    console.log('Cartas do inimigo:', enemyCards);
}
