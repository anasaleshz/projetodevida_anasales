const botoes = document.querySelectorAll("botao");
const texto = document.querySelectorAll(".aba-conteudo");

for (let i = 0; <botoes.length; i++) {
    botoes[i].onclik = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}