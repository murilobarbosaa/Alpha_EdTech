const button = document.getElementById("add");

button.addEventListener("click", function () {
    const listaTarefas = document.getElementById("listaTarefas");
    const input = document.getElementById("tarefaInput").value;
    const texto = input.trim().toLowerCase();

    const li = document.createElement("li");
    li.textContent = texto;
    listaTarefas.appendChild(li);

    document.getElementById("tarefaInput").value = '';
});
