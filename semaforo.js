const img = document.getElementById ( 'img' );
const buttons = document.getElementById ('buttons');
let coresIndex = 0;
let intervalId = null;

const sinal = (event) => {
    stopAuto();
    turnOn[event.target.id]();
   
}

const nextIndex = () => {
    if (coresIndex < 2) {
        coresIndex++
    }else {
        coresIndex = 0;
    }
}

const mudarcor = () => {
    const cores = ['green','yellow','red']
    const cor = cores[ coresIndex ];
    turnOn[cor]();
    nextIndex();
}

const stopAuto = () => {
    clearInterval ( intervalId)
}

const turnOn = {
    'green':    () => img.src = './imagens/verde.png',
    'yellow':   () => img.src = './imagens/amarelo.png',
    'red':      () => img.src = './imagens/vermelho.png',
    'automatic': () => intervalId = setInterval (mudarcor, 1000)
}

buttons.addEventListener('click', sinal);
