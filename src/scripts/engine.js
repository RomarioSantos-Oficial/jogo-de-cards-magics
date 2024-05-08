import { initializeGame } from "../scripts/game.js";

// Criando um canvas programaticamente
const canvas = document.createElement('canvas');
canvas.width = 1590;
canvas.height = 890;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const slotWidth = 100;
const slotHeight = 160;
const largeSlotWidth = 200; // Largura dos slots maiores
const largeSlotHeight = 320; // Altura dos slots maiores
const margin = 10;

const playerSlots = [];
const enemySlots = [];
const battlefieldSlots = [];

// Centralizar os slots do jogador
const playerStartX = (canvas.width - 10 * (slotWidth + margin)) / 2;
const playerStartY = canvas.height - slotHeight - margin;
for (let i = 0; i < 10; i++) {
    const x = playerStartX + i * (slotWidth + margin);
    const y = playerStartY;
    playerSlots.push({ x, y });
}

// Centralizar os slots do inimigo
const enemyStartX = (canvas.width - 10 * (slotWidth + margin)) / 2;
const enemyStartY = margin;
for (let i = 0; i < 10; i++) {
    const x = enemyStartX + i * (slotWidth + margin);
    const y = enemyStartY;
    enemySlots.push({ x, y });
}

// Criar slots para o campo de batalha
const battlefieldStartX = (canvas.width - 5 * (slotWidth + margin) - 30 * margin) / 2;
const battlefieldStartY = (canvas.height - 3 * (slotHeight + margin)) / 2;
const rows = [5, 8, 5];
let rowCounter = 0;
const maxRowSlots = Math.max(...rows);
rows.forEach(row => {
    const extraMargin = (maxRowSlots - row) * (slotWidth + margin) / 2;
    for (let i = 0; i < row; i++) {
        const x = battlefieldStartX + extraMargin + i * (slotWidth + margin);
        const y = battlefieldStartY + rowCounter * (slotHeight + margin);
        battlefieldSlots.push({ x, y });
    }
    rowCounter++;
});

// Posicionamento dos slots maiores
const largeSlotMargin = 20; // Margem entre a borda e os slots maiores
const largeSlotX = largeSlotMargin; // Posição horizontal fixa
const largeSlotY = 40; // Margem superior

// Adicionar slots maiores separados
const largeSlotsDiv1 = {
    x: largeSlotX, // Posicionamento à esquerda
    y: largeSlotY, // Posicionamento na primeira linha
    width: largeSlotWidth,
    height: largeSlotHeight
};
const largeSlotsDiv2 = {
    x: largeSlotX, // Posicionamento à esquerda
    y: largeSlotY + largeSlotHeight + margin, // Posicionamento na segunda linha
    width: largeSlotWidth,
    height: largeSlotHeight
};

// Posicionamento do relógio e do card rectangular
const clockWidth = 150; // Largura do relógio
const clockHeight = 150; // Altura do relógio
const clockX = canvas.width - largeSlotMargin - clockWidth; // Posição horizontal fixa
const clockY = largeSlotY + (largeSlotHeight - clockHeight) / 2; // Centralizando verticalmente
const cardWidth = 160; // Largura do card rectangular
const cardHeight = 200; // Altura do card rectangular
const cardX = clockX; // Posição horizontal igual à do relógio
const cardY = clockY + clockHeight + margin; // Abaixo do relógio

// Configurações do relógio
let countdown = 30; // Contagem regressiva em segundos
let intervalId; // ID do intervalo

// Iniciar contagem regressiva
intervalId = setInterval(updateCountdown, 1000);

// Desenhar os slots do jogador
drawSlots(playerSlots, 'green');

// Desenhar os slots do inimigo
drawSlots(enemySlots, 'black');

// Desenhar os slots do campo de batalha
drawSlots(battlefieldSlots, 'red');

// Desenhar os slots maiores com fundo cinza e borda laranja
drawLargeSlots([largeSlotsDiv1, largeSlotsDiv2], 'orange', 'lightgray');

// Desenhar o relógio
drawClock(clockX, clockY, clockWidth, clockHeight, 'blue');

// Desenhar o card rectangular
drawCard(cardX, cardY, cardWidth, cardHeight, 'purple', countdown);

function drawSlots(slots, borderColor) {
    slots.forEach(slot => {
        ctx.fillStyle = 'transparent'; // Cor de fundo transparente
        ctx.fillRect(slot.x, slot.y, slotWidth, slotHeight);
        ctx.strokeStyle = borderColor;
        ctx.strokeRect(slot.x, slot.y, slotWidth, slotHeight);
    });
}

function drawLargeSlots(slots, borderColor, backgroundColor) {
    ctx.fillStyle = backgroundColor; // Cor de fundo cinza
    slots.forEach(slot => {
        ctx.fillRect(slot.x, slot.y, slot.width, slot.height);
        ctx.strokeStyle = borderColor;
        ctx.strokeRect(slot.x, slot.y, slot.width, slot.height);
    });
}

function drawClock(x, y, width, height, color) {
    const radius = width / 2; // Raio do relógio
    ctx.beginPath();
    ctx.arc(x + radius, y + radius, radius, 0, Math.PI * 2); // Desenhar o círculo do relógio
    ctx.fillStyle = color;
    ctx.fill();
    ctx.closePath();
    ctx.font = '400 80px "Jaro", sans-serif'; // Fonte personalizada
    ctx.fillStyle = 'white'; // Cor do texto
    ctx.textAlign = 'center'; // Alinhamento horizontal do texto
    ctx.textBaseline = 'middle'; // Alinhamento vertical do texto
    ctx.fillText(countdown.toString(), x + radius, y + radius); // Desenhar texto do contador
}


function drawCard(x, y, width, height, color, countdown) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, width, height);

    // Definir fonte para o texto
    ctx.font = '400 50px "Jaro", sans-serif';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Desenhar texto "Roda:"
    ctx.fillText('Rodada:', x + width / 2, y + height / 4);

    // Desenhar contador de rodadas
    ctx.fillText('0 ', x + width / 2, y + 3 * height / 4);
}


function updateCountdown() {
    countdown--;
    if (countdown < 0) {
        clearInterval(intervalId); // Parar a contagem regressiva quando chegar a zero
    } else {
        // Redesenhar o relógio com o novo valor da contagem regressiva
        drawClock(clockX, clockY, clockWidth, clockHeight, 'blue');
        // Redesenhar o card com o novo valor da contagem regressiva
        drawCard(cardX, cardY, cardWidth, cardHeight, 'purple', countdown);
    }
}

initializeGame()