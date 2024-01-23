let contador = 0;
const meuBotao = document.getElementById("botao");

meuBotao.addEventListener("click", contarCliques);

function contarCliques() {
    contador++;
    if (contador < 2) {
        meuBotao.textContent = `Clicou ${contador} vez`;
    }
    else if (contador <= 10) {
        meuBotao.textContent = `Clicou ${contador} vezes`;
    }
    else {
        meuBotao.textContent = "Ainda não enjoou?";
    }
}