const senha = "114241";
let sequencia = "";

const quadradoAzul = document.querySelector("#azul");
const quadradoVermelho = document.querySelector("#vermelho");
const quadradoVerde = document.querySelector("#verde");
const quadradoAmarelo = document.querySelector("#amarelo");

quadradoAzul.addEventListener("click", () => {
  sequencia += "1";
});

quadradoVermelho.addEventListener("click", () => {
  sequencia += "2";
});

quadradoVerde.addEventListener("click", () => {
  sequencia += "3";
});

quadradoAmarelo.addEventListener("click", () => {
  sequencia += "4";
});

const botaoDesarme = document.getElementById("desarme");

botaoDesarme.addEventListener("click", () => {
  if (sequencia == senha) {
    alert("Alarme desarmado");
    sequencia = "";
  } 
  else {
    alert("Senha incorreta");
    sequencia = "";
  }
});
