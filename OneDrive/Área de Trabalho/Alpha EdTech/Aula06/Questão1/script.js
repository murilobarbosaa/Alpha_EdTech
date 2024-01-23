const titulo = document.querySelector("#titulo");
const link = document.querySelector("#link");
const galeria = document.querySelector(".galeria");
const adicionarBotao = document.querySelector("#adicionar");

function adicionarImagem() {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = link.value;
    img.alt = titulo.value;

    const tituloCard = document.createElement("p"); // Adiciona um parágrafo para o título
    tituloCard.textContent = titulo.value;

    card.appendChild(tituloCard); // Adiciona o título ao card
    card.appendChild(img);
    galeria.appendChild(card);
    
    // Adiciona um evento de clique para remover o card
    card.addEventListener("click", function () {
        card.remove();
    });

    // Limpa os campos após adicionar a imagem
    titulo.value = "";
    link.value = "";
}

adicionarBotao.addEventListener("click", function () {
    adicionarImagem();
});