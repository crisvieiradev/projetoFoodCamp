
let contador = 0;


function selecionarPrato(ospratoss) {
    const selecionado = document.querySelector(".pratos .selecionado");

    if(selecionado !== null) {
        selecionado.classList.remove('selecionado')
    } else {
        contador = contador +1;
    }

    const opcao = document.querySelector(ospratoss);
    opcao.classList.add('selecionado');

    habilitarBotaoSePedidoCompleto();
}

function SelecionarBebida(bebiidas) {
    const selecionado = document.querySelector(".bebidas .selecionado");

    if(selecionado !== null) {
        selecionado.classList.remove('selecionado')
    } else {
        contador = contador +1;
    }

    const opcao = document.querySelector(bebiidas);
    opcao.classList.add('selecionado');

    habilitarBotaoSePedidoCompleto();
}

function SelecionarSobremesa(sobremesaa) {
    const selecionado = document.querySelector(".sobremesas .selecionado");

    if(selecionado !== null) {
        selecionado.classList.remove('selecionado')
    } else {
        contador = contador +1;
    }

    const opcao = document.querySelector(sobremesaa);
    opcao.classList.add('selecionado');

    habilitarBotaoSePedidoCompleto();
}

function habilitarBotaoSePedidoCompleto() {
    if(contador === 3) {
    const botao = document.querySelector(".continuar");
    botao.classList.add('botao-selecionado');
    botao.innerHTML = "Fechar pedido";

    const url ="https://api.whatsapp.com/send?phone=5521997715356&text=obrigado%20por%20testar%20minha%20aplica%C3%A7%C3%A3o";
    botao.setAttribute("href", url);
    }
}