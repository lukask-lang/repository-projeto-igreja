/*
    ❔ O que precisamos fazer? 🎀✨

        🔰Quando clicar no botão da "Seção" em meio áquela Lista, temos que que marcar o botão selecionado e apresentar as Informações correspondentes. 

        📌OBJETIVO 1 --> Ao clicar no botão da "Seção", marcá-lo como Selecionado.
            Passo 1: pegar os botôes no JS pra poder verificar quando o usuário clicar em um deles;
            Passo 2: adicionar a classe "Selecionada" no botão em que o usuário clicou;
            Passo 3: verificar se já exite um botão selecionado, se sim, devemos revomer a seleção dele. 

        📌OBJETIVO 2 --> Ao clicar no botão da "Seção", mostrar as informações necessárias daquela Seção.
            Passo 1: pegar as "Seções" no JS para poder Mostrar ou Esconder elas.
            Passo 2: adicionar a classe "Selecionada" na "Seção" em que o usuário selecionou.
            Passo 3: verificar se já existe uma "Seção" selecionada, se sim, devemos remover a Seleção dela.
*/

const botoes = document.querySelectorAll(".botao");
const secoes = document.querySelectorAll(".secao");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarSecao();

        botao.classList.add("selecionado");
        secoes[indice].classList.add("selecionada");
    });
});

function desselecionarSecao() {
    const secaoSelecionada = document.querySelector(".secao.selecionada");
    secaoSelecionada.classList.remove("selecionada");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}