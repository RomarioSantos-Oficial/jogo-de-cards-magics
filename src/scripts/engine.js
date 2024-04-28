// Função para criar os cards dinamicamente
function createCards(containerId, numCards) {
    // Seleciona o elemento pai onde os cards serão adicionados
    var cardsContainer = document.getElementById(containerId);
    
    // Loop para criar as cartas
    for (var i = 0; i < numCards; i++) {
        // Cria um elemento div para representar o card
        var card = document.createElement('div');
        
        // Adiciona a classe "card" ao elemento div
        card.classList.add('card');
        
        // Adiciona o elemento div ao elemento pai
        cardsContainer.appendChild(card);
    }
}

// Chama a função para criar os cards originais superiores
document.addEventListener('DOMContentLoaded', function() {
    createCards('topCards', 5); // Cria 5 cartas na parte superior
});

// Chama a função para criar os cards originais inferiores
document.addEventListener('DOMContentLoaded', function() {
    createCards('bottomCards', 5); // Cria 5 cartas na parte inferior
});

// Chama a função para criar os novos cards no lado esquerdo
document.addEventListener('DOMContentLoaded', function() {
    // Cria 3 divs dentro de leftCards
    var leftCardsContainer = document.getElementById('leftCards');
    for (var i = 0; i < 3; i++) {
        var div = document.createElement('div');
        div.classList.add('subCards');
        leftCardsContainer.appendChild(div);
    }

    // Adiciona os cartões nas divs dentro de leftCards
    var subCards = document.querySelectorAll('#leftCards .subCards');
    var numCardsToAdd = [5, 4, 3];
    for (var j = 0; j < subCards.length; j++) {
        createCards(subCards[j].id, numCardsToAdd[j]);
    }
});

// Chama a função para criar os novos cards no lado direito
document.addEventListener('DOMContentLoaded', function() {
    // Cria 3 divs dentro de rightCards
    var rightCardsContainer = document.getElementById('rightCards');
    for (var i = 0; i < 3; i++) {
        var div = document.createElement('div');
        div.classList.add('subCards');
        rightCardsContainer.appendChild(div);
    }

    // Adiciona os cartões nas divs dentro de rightCards
    var subCards = document.querySelectorAll('#rightCards .subCards');
    var numCardsToAdd = [5, 4, 3];
    for (var j = 0; j < subCards.length; j++) {
        createCards(subCards[j].id, numCardsToAdd[j]);
    }
});
