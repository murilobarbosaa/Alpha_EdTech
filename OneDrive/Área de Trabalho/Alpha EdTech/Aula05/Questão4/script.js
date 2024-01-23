function validarTelefone() {
    const telefoneInput = document.getElementById('telefone');
    const telefone = telefoneInput.value.trim();
  
    const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
  
    const telefoneValido = regexTelefone.test(telefone);
  
    const errorMessage = document.getElementById('error-message');
  
    if (telefone === '') {
      telefoneInput.classList.remove('error-input');
      errorMessage.style.display = 'none';
    } else if (telefoneValido) {
      telefoneInput.classList.remove('error-input');
      errorMessage.style.display = 'none';
    } else {
      telefoneInput.classList.add('error-input');
      errorMessage.style.display = 'block';
    }
  
    const cadastrarButton = document.getElementById('cadastrar');
  
    cadastrarButton.disabled = !telefoneValido;
  }
  