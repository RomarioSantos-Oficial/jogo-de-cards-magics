
const input = document.querySelector('.name');
const button = document.querySelector('#meuBotao');
const  form = document.querySelector('.login-form')

const validateInput = ({target})=> {
    if(target.value.length > 2){
        button.removeAttribute('disabled');
        return;
    }
    button.setAttribute('disabled', '');
}

const handleSubmit =(event) => {
    event.preventDefault();

    localStorage.setItem('player', input.value);
    window.location = './src/pages/home.html'
} 

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);
