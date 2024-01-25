const input = document.getElementById("entrada-imagem");
const buttonAdicionar = document.getElementById("botao-adicionar");
const buttonAnterior = document.getElementById("botao-anterior");
const buttonProximo = document.getElementById("botao-proximo");
const buttonExcluir = document.getElementById("botao-excluir");
const imagem = document.getElementById("imagem-exibida");

// Carregar currentIndex do localStorage
const currentIndexLocalStorage = localStorage.getItem("currentIndex");
let currentIndex = currentIndexLocalStorage === null ? 0 : Number(currentIndexLocalStorage);

// Carregar array de imagens do localStorage
const imagensLocalStorage = localStorage.getItem("imagens");
const imagens = imagensLocalStorage === null ? [] : JSON.parse(imagensLocalStorage);

// Função para atualizar a imagem exibida
function atualizarExibicao() {
    const linkImagem = imagens[currentIndex];
    imagem.src = linkImagem || ""; // Define src como string vazia se linkImagem for indefinido
    localStorage.setItem("currentIndex", currentIndex);
}

// Verificar se há imagens para exibir
if (imagens.length !== 0) {
    atualizarExibicao();
}

// Evento para adicionar imagem
buttonAdicionar.addEventListener("click", function () {
    const linkImagem = input.value;
    if (linkImagem.trim() !== "") {
        imagens.push(linkImagem);
        currentIndex = imagens.length - 1;
        atualizarExibicao();
        // Salvar imagens no localStorage
        localStorage.setItem("imagens", JSON.stringify(imagens));
    }
});

// Evento para exibir imagem anterior
buttonAnterior.addEventListener("click", function () {
    currentIndex = currentIndex === 0 ? imagens.length - 1 : currentIndex - 1;
    atualizarExibicao();
});

// Evento para exibir próxima imagem
buttonProximo.addEventListener("click", function () {
    currentIndex = currentIndex === imagens.length - 1 ? 0 : currentIndex + 1;
    atualizarExibicao();
});

// Evento para excluir imagem
buttonExcluir.addEventListener("click", function () {
    if (imagens.length > 0) {
        imagens.splice(currentIndex, 1);
        currentIndex = currentIndex === 0 ? imagens.length - 1 : currentIndex - 1;
        atualizarExibicao();
        // Salvar imagens no localStorage
        localStorage.setItem("imagens", JSON.stringify(imagens));
    }
});
