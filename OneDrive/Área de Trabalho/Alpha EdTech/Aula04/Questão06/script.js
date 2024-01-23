// Inicializa um objeto para armazenar os produtos
const produtos = {};

function cadastrarProduto(event) {
    event.preventDefault();

    // Obtém os dados do formulário
    const nome = document.querySelector("input[name='nome']").value;
    const imagem = document.querySelector("input[name='imagem']").value;

    // Cria um objeto Produto
    const novoProduto = {
        nome: nome,
        imagem: imagem,
    };

    // Adiciona o produto ao objeto de produtos
    produtos[novoProduto.nome] = novoProduto;

    // Adiciona o produto à lista de produtos no select
    const produtosSelect = document.querySelector("select[name='produto']");
    const novaOpcao = new Option(novoProduto.nome);
    produtosSelect.add(novaOpcao);

    // Limpa os campos de input
    document.querySelector("input[name='nome']").value = "";
    document.querySelector("input[name='imagem']").value = "";
}

function exibirProduto() {
    // Obtém o nome do produto selecionado
    const produtoSelecionado = document.querySelector("select[name='produto']").value;

    // Obtém o produto a partir do objeto de produtos
    const produto = produtos[produtoSelecionado];

    // Obtém o nome do produto
    const nomeProduto = document.querySelector("#nome-produto");
    nomeProduto.textContent = produto.nome;

    // Obtém a imagem do produto
    const imagemProduto = document.querySelector("#imagem-produto");
    imagemProduto.src = produto.imagem;
}

// Adiciona o event listener para o formulário
document.querySelector("form").addEventListener("submit", function(event) {
    cadastrarProduto(event);
    exibirProduto(); // Automaticamente exibe o produto ao cadastrar
});

// Adiciona o event listener para o botão "Exibir"
document.querySelector("button[type='submit']").addEventListener("click", exibirProduto);
