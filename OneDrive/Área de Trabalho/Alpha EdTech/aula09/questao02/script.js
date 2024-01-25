document.getElementById("listButton").addEventListener("click", function () {
    const nameList = document.getElementById("nameList").value.trim();
    const names = nameList.split(",");

    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";

    const table = document.createElement("table");
    const tableHeader = document.createElement("tr");

    const indexHeader = document.createElement("th");
    indexHeader.textContent = "Índice";
    tableHeader.appendChild(indexHeader);

    const nameHeader = document.createElement("th");
    nameHeader.textContent = "Nome";
    tableHeader.appendChild(nameHeader);

    table.appendChild(tableHeader);

    for (let i = 0; i < names.length; i++) {
        const row = document.createElement("tr");

        const indexCell = document.createElement("td");
        indexCell.textContent = i;
        row.appendChild(indexCell);

        const nameCell = document.createElement("td");
        nameCell.textContent = names[i];
        row.appendChild(nameCell);

        table.appendChild(row);
    }

    tableContainer.appendChild(table);
});
