const botaoBackground = {
    rosa: document.querySelector("#fundoRosa"),
    verde: document.querySelector("#fundoVerde"),
    azul: document.querySelector("#fundoAzul"),
    marrom: document.querySelector("#fundoMarrom")
};

const botaoTexto = {
    rosa: document.querySelector("#textoRosa"),
    verde: document.querySelector("#textoVerde"),
    azul: document.querySelector("#textoAzul"),
    marrom: document.querySelector("#textoMarrom")
};

const background = document.querySelector("#lorem");
const title = document.querySelector("h1");
const p = document.querySelector("p");

// Event listeners para os botões de background
botaoBackground.rosa.addEventListener("click", function () {
    background.style.backgroundColor = "pink";
});

botaoBackground.verde.addEventListener("click", function () {
    background.style.backgroundColor = "rgb(131, 218, 131)";
});

botaoBackground.azul.addEventListener("click", function () {
    background.style.backgroundColor = "rgb(88, 188, 210)";
});

botaoBackground.marrom.addEventListener("click", function () {
    background.style.backgroundColor = "brown";
});

// Event listeners para os botões de texto
botaoTexto.rosa.addEventListener("click", function () {
    title.style.color = "pink";
    p.style.color = "pink";
});

botaoTexto.verde.addEventListener("click", function () {
    title.style.color = "rgb(131, 218, 131)";
    p.style.color = "rgb(131, 218, 131)";
});

botaoTexto.azul.addEventListener("click", function () {
    title.style.color = "rgb(88, 188, 210)";
    p.style.color = "rgb(88, 188, 210)";
});

botaoTexto.marrom.addEventListener("click", function () {
    title.style.color = "brown";
    p.style.color = "brown";
});
