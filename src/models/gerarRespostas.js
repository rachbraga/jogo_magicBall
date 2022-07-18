import {respostas} from "./respostas.js"

export class GerarRespostas {

    static respostasGeradas() {
        const layout = document.querySelector('.layout-jogo');
        const criarResposta = document.querySelector(".resposta");   
        criarResposta.innerText = ''
        criarResposta.style.background = "none"
        const pergunta = document.querySelector('.escrever-pergunta');
        
        let gerarIndice = Math.floor(Math.random() * (respostas.length));
        let respostaEscolhida = respostas[gerarIndice];    

        if(pergunta.value.indexOf("?") != -1){
        
        criarResposta.innerText = respostaEscolhida;         

        pergunta.value = "";

        const botao = document.querySelector(".botaoplay");
        botao.classList.add('denovo')

        pergunta.style.display = "block";
       
         botao.innerText = 'Faça outra pergunta'

        } else {
            criarResposta.innerText = `Uma pergunta deve conter "?"`
            criarResposta.style.background = "white";
        }

    }

   
}