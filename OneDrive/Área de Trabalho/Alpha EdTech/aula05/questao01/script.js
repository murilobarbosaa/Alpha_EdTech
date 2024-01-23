document.addEventListener('DOMContentLoaded', function () {
    const produtoSelect = document.getElementById('produtoSelect');
    const imagemProduto = document.querySelector('#imagemProduto img');

    produtoSelect.addEventListener('change', function () {
        const selectedProduct = produtoSelect.value;

        const imagePath = 'Images/';
        const imageFileName = {
            cafe: 'cafe.jpg',
            cha: 'cha.jpg',
            suco: 'suco.jpg'
        };

        imagemProduto.src = imagePath + imageFileName[selectedProduct];
    });
});
