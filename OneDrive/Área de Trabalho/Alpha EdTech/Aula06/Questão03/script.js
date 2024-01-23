document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.getElementById("addButton");
    const counterList = document.getElementById("counterList");

    addButton.addEventListener("click", function () {
        createCounter();
    });

    function createCounter() {
        const li = document.createElement("li");
        li.style.display = "flex";
        li.style.alignItems = "center";

        const buttonMinus = document.createElement("button");
        const buttonPlus = document.createElement("button");

        buttonMinus.innerText = "-";
        buttonPlus.innerText = "+";

        const span = document.createElement("span");
        span.innerText = "0";

        buttonMinus.classList.add("counterButton", "minus");
        buttonPlus.classList.add("counterButton", "plus");

        buttonMinus.addEventListener("click", function () {
            updateCounter(span, -1);
        });

        buttonPlus.addEventListener("click", function () {
            updateCounter(span, 1);
        });

        li.appendChild(buttonMinus);
        li.appendChild(span);
        li.appendChild(buttonPlus);

        counterList.appendChild(li);
    }

    function updateCounter(span, value) {
        let currentCount = parseInt(span.innerText);
        currentCount += value;
        span.innerText = currentCount;
    }
});
