import {GerarRespostas} from "./gerarRespostas.js"

const button = document.querySelector('.botaoplay');
const texto = document.querySelector('.escrever-pergunta');

button.addEventListener('click', GerarRespostas.respostasGeradas);

texto.addEventListener('click',zerarTexto);

function zerarTexto(){
    let newText = ''
    texto.value = newText
}



