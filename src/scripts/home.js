window.addEventListener('DOMContentLoaded', (event) => {
    var start = document.getElementById('start');
    var crads = document.getElementById('crads');
    var configs = document.getElementById('configs');
    var studio = document.getElementById('logo');

    start.addEventListener('click', function() {
        window.location.href = './engine.html'; // Substitua 'pagina1.html' pela URL da sua primeira página
    });

    crads.addEventListener('click', function() {
        window.location.href = './cads.html'; // Substitua 'pagina2.html' pela URL da sua segunda página
    });

    configs.addEventListener('click', function() {
        window.location.href = './configs.html'; // Substitua 'pagina3.html' pela URL da sua terceira página
    });

    studio.addEventListener('click', function(){
        window.location.href = './studio.html';
    });
    
}); 

// Seleciona todos os botões
const buttons = document.querySelectorAll('.button');

// Carrega o efeito sonoro
const hoverSound = document.getElementById('hoverSound');

// Adiciona um evento de mouseover a cada botão
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        // Reproduz o efeito sonoro quando o mouse passa por cima do botão
        hoverSound.play();
    });
});

