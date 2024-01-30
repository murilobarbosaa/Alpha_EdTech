document.addEventListener('DOMContentLoaded', () => {
    const filtrarButton = document.getElementById('filtrarButton');
    filtrarButton.addEventListener('click', () => {
        filtrarFilmes();
    });

    const ordenarPorBudgetAscButton = document.getElementById('ordenarPorBudgetAsc');
    ordenarPorBudgetAscButton.addEventListener('click', () => {
        ordenarFilmes('asc');
    });

    const ordenarPorBudgetDescButton = document.getElementById('ordenarPorBudgetDesc');
    ordenarPorBudgetDescButton.addEventListener('click', () => {
        ordenarFilmes('desc');
    });
});

async function carregarFilmes() {
    try {
        const response = await fetch('movie_metadata.json');
        const data = await response.json();
        // Filtrar filmes com orçamento válido
        filmes = data.filter(filme => filme.budget);
        exibirFilmes(filmes);
    } catch (error) {
        console.error('Erro ao carregar filmes:', error);
    }
}

function filtrarFilmes() {
    const minBudget = parseFloat(document.getElementById('minBudget').value);
    const maxBudget = parseFloat(document.getElementById('maxBudget').value);

    let filmesFiltrados = filmes;

    if (!isNaN(minBudget) && !isNaN(maxBudget)) {
        filmesFiltrados = filmes.filter(filme => {
            const budget = parseFloat(filme.budget);
            return budget >= minBudget && budget <= maxBudget;
        });
    } else if (!isNaN(minBudget)) {
        filmesFiltrados = filmes.filter(filme => parseFloat(filme.budget) >= minBudget);
    } else if (!isNaN(maxBudget)) {
        filmesFiltrados = filmes.filter(filme => parseFloat(filme.budget) <= maxBudget);
    }

    exibirFilmes(filmesFiltrados);
}

function ordenarFilmes(order) {
    let filmesOrdenados = filmes.slice(); // Faz uma cópia dos filmes para não alterar o array original

    filmesOrdenados.sort((a, b) => {
        const budgetA = parseFloat(a.budget);
        const budgetB = parseFloat(b.budget);
        if (order === 'asc') {
            return budgetA - budgetB;
        } else {
            return budgetB - budgetA;
        }
    });

    exibirFilmes(filmesOrdenados);
}

function exibirFilmes(filmes) {
    const corpoTabela = document.getElementById('corpo-tabela');
    corpoTabela.innerHTML = '';

    filmes.forEach(filme => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${filme.movie_title}</td>
            <td>${filme.genres}</td>
            <td>${filme.title_year}</td>
            <td>${filme.director_name}</td>
            <td>${filme.budget}</td>
        `;
        corpoTabela.appendChild(tr);
    });

    // Mostrar a tabela de filmes
    const tabelaFilmes = document.getElementById('tabela-filmes');
    tabelaFilmes.style.display = 'table';
}
