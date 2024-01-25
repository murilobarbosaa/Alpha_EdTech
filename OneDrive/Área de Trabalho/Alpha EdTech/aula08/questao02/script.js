const input = document.getElementById("entrada-imagem");
const buttonAdicionar = document.getElementById("botao-adicionar");
const buttonAnterior = document.getElementById("botao-anterior");
const buttonProximo = document.getElementById("botao-proximo");
const buttonExcluir = document.getElementById("botao-excluir");
const imagem = document.getElementById("imagem-exibida");

const currentIndexLocalStorage = localStorage.getItem("currentIndex");
let currentIndex = currentIndexLocalStorage === null ? 0 : Number(currentIndexLocalStorage);

const imagensLocalStorage = localStorage.getItem("imagens");
const imagens = imagensLocalStorage === null ? [] : JSON.parse(imagensLocalStorage);

function atualizarExibicao() {
    const linkImagem = imagens[currentIndex];
    imagem.src = linkImagem || "";
    localStorage.setItem("currentIndex", currentIndex);
}

if (imagens.length !== 0) {
    atualizarExibicao();
}

buttonAdicionar.addEventListener("click", function () {
    const linkImagem = input.value;
    if (linkImagem.trim() !== "") {
        imagens.push(linkImagem);
        currentIndex = imagens.length - 1;
        atualizarExibicao();
        localStorage.setItem("imagens", JSON.stringify(imagens));
    }
});

buttonAnterior.addEventListener("click", function () {
    currentIndex = currentIndex === 0 ? imagens.length - 1 : currentIndex - 1;
    atualizarExibicao();
});

buttonProximo.addEventListener("click", function () {
    currentIndex = currentIndex === imagens.length - 1 ? 0 : currentIndex + 1;
    atualizarExibicao();
});

buttonExcluir.addEventListener("click", function () {
    if (imagens.length > 0) {
        imagens.splice(currentIndex, 1);
        currentIndex = currentIndex === 0 ? imagens.length - 1 : currentIndex - 1;
        atualizarExibicao();
        localStorage.setItem("imagens", JSON.stringify(imagens));
    }
});
