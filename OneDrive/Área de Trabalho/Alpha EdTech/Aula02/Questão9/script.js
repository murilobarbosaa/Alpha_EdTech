const btns = {
    pneuF: document.getElementById("pneuF"),
    pneu: document.getElementById("pneu"),
    bomba: document.querySelector(".img")
};

btns.bomba.addEventListener("click", function () {
    btns.pneuF.classList.toggle("apagado");
    btns.pneu.classList.toggle("apagado");
});

btns.pneuF.addEventListener("click", function () {
    alert('VROOOOM');
});

btns.bomba.click();
