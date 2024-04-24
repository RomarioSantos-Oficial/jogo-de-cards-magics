window.addEventListener('DOMContentLoaded', (event) => {
    var start = document.getElementById('start');
    var crads = document.getElementById('crads');
    var configs = document.getElementById('configs');

    start.addEventListener('click', function() {
        window.location.href = './engine.html'; // Substitua 'pagina1.html' pela URL da sua primeira página
    });

    crads.addEventListener('click', function() {
        window.location.href = './cads.html'; // Substitua 'pagina2.html' pela URL da sua segunda página
    });

    configs.addEventListener('click', function() {
        window.location.href = './configs.html'; // Substitua 'pagina3.html' pela URL da sua terceira página
    });
});