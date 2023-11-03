
let listaNumerosSorteados = [];
let limiteNumero = 10;
let numeroSecreto = geradorNumero();
let tentativas = 1;
mensagemInicial();

function escreverMensagem(tag, texto){
    let tipo = document.querySelector(tag);
    tipo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    escreverMensagem('h1', 'Jogo do Número secreto');
    escreverMensagem('p', `Escolha um número de 1 a 10`);
}

function geradorNumero(){
    let  numeroEscolhido =  parseInt(Math.random() * limiteNumero + 1);
    let quantidadeNumeros = listaNumerosSorteados.lenght;
    if(quantidadeNumeros == limiteNumero){
        listaNumerosSorteados = [];
    }
    if(listaNumerosSorteados.includes(numeroEscolhido)){
        return geradorNumero();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = geradorNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

function verificarChute(){
    let chute = document.querySelector('input').value 

    if(chute == numeroSecreto){
        escreverMensagem('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentativas = `Você Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        escreverMensagem('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            escreverMensagem('p', 'O número secreto é menor');
        }else{
            escreverMensagem('p', 'O número secreto é maior');           
        }
        tentativas ++;
        limparCampo();
    }

}


