const buttons = {
    btn1: document.querySelector("#btn1"),
    btn2: document.querySelector("#btn2"),
    btn3: document.querySelector("#btn3"),
    btn4: document.querySelector("#btn4")
}

let selected = document.querySelector(".selecionado");

function selectLanche(btn) {
    selected && selected.classList.remove('selecionado');
    btn.classList.add('selecionado');
    selected = btn;
}

selectLanche(buttons.btn1);

buttons.btn1.addEventListener("click", function () {
    selectLanche(buttons.btn1);
});

buttons.btn2.addEventListener("click", function () {
    selectLanche(buttons.btn2);
});

buttons.btn3.addEventListener("click", function () {
    selectLanche(buttons.btn3);
});

buttons.btn4.addEventListener("click", function () {
    selectLanche(buttons.btn4);
});
