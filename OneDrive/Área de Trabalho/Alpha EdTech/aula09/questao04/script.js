const productForm = document.getElementById('product-form');
const productNameInput = document.getElementById('product-name');
const productDescriptionInput = document.getElementById('product-description');
const productValueInput = document.getElementById('product-value');
const productTableBody = document.getElementById('product-table-body');
const productDetailsModal = document.getElementById('product-details-modal');
const editProductModal = document.getElementById('edit-product-modal');
const editProductForm = document.getElementById('edit-product-form');

let products = [];

// Load products from local storage
if (localStorage.getItem('products')) {
    products = JSON.parse(localStorage.getItem('products'));
    renderProducts();
}

productForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const productName = productNameInput.value.trim();
    const productDescription = productDescriptionInput.value.trim();
    const productValue = parseFloat(productValueInput.value);

    if (productName !== '' && productDescription !== '' && !isNaN(productValue) && productValue > 0) {
        const productId = Date.now().toString();
        const newProduct = {
            id: productId,
            name: productName,
            description: productDescription,
            value: productValue
        };

        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));

        renderProducts();

        productNameInput.value = '';
        productDescriptionInput.value = '';
        productValueInput.value = '';

        alert(`Produto ${newProduct.name} incluído com sucesso!`);
    } else {
        alert('Falha no cadastro do produto! Preencha todos os campos corretamente.');
    }
});

function renderProducts() {
    productTableBody.innerHTML = '';

    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
                <td>${product.name}</td>
                <td>R$ ${product.value.toFixed(2)}</td>
                <td><img src="Images/lapis.png" alt="Editar" class="edit-product" data-id="${product.id}"></td>
                <td><img src="Images/lixeira.png" alt="Apagar" class="delete-product" data-id="${product.id}"></td>
            `;
        productTableBody.appendChild(row);
    });
}

productTableBody.addEventListener('click', function (e) {
    if (e.target.classList.contains('edit-product')) {
        const productId = e.target.getAttribute('data-id');
        const product = products.find(p => p.id === productId);
        if (product) {
            editProductForm['edit-product-id'].value = product.id;
            editProductForm['edit-product-name'].value = product.name;
            editProductForm['edit-product-description'].value = product.description;
            editProductForm['edit-product-value'].value = product.value;

            editProductModal.style.display = 'block';
        }
    } else if (e.target.classList.contains('delete-product')) {
        const productId = e.target.getAttribute('data-id');
        const index = products.findIndex(p => p.id === productId);
        if (index !== -1) {
            products.splice(index, 1);
            localStorage.setItem('products', JSON.stringify(products));
            renderProducts();
        }
    }
});

// Modal close functionality
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Edit Product Form Submission
editProductForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const productId = editProductForm['edit-product-id'].value;
    const productName = editProductForm['edit-product-name'].value.trim();
    const productDescription = editProductForm['edit-product-description'].value.trim();
    const productValue = parseFloat(editProductForm['edit-product-value'].value);

    if (productName !== '' && productDescription !== '' && !isNaN(productValue) && productValue > 0) {
        const index = products.findIndex(p => p.id === productId);
        if (index !== -1) {
            products[index].name = productName;
            products[index].description = productDescription;
            products[index].value = productValue;
            localStorage.setItem('products', JSON.stringify(products));
            renderProducts();
            editProductModal.style.display = 'none';
        }
    } else {
        alert('Falha na edição do produto! Preencha todos os campos corretamente.');
    }
});
