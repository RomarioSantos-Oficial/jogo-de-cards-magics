window.addEventListener('DOMContentLoaded', (event) => {
    var musica = document.getElementById('musica');
    musica.volume = 0.0; // Define o volume para 10% (0.0 a 1.0)
    musica.play();

    var botao = document.getElementById('meuBotao');
    botao.addEventListener('click', function() {
        window.location.href = './src/pages/home.html'; // Substitua 'outra_pagina.html' pelo nome da sua página de destino
    });
});
