window.addEventListener('DOMContentLoaded', (event) => {
    var musica = document.getElementById('musica');
    musica.volume = 0.1; // Define o volume para 50% (0.0 a 1.0)
    musica.play();
});

window.addEventListener('DOMContentLoaded', (event) => {
    var botao = document.getElementById('meuBotao');
    botao.addEventListener('click', function() {
        window.location.href = '/src/html/home.html'; // Substitua 'outra_pagina.html' pelo nome da sua página de destino
    });
});
