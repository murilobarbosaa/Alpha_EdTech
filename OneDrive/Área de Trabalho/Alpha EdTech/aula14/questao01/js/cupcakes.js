import navigate from './navigate.js';

export default function cupcakes() {
    const div = document.createElement('div');
    div.innerHTML = `
        <h1>Cupcakes</h1>
        <p>Cupcakes coloridos e saborosos para alegrar sua festa.</p>
        <button class="button" id="voltar">Voltar</button>
    `;
    div.querySelector('#voltar').addEventListener('click', () => navigate('/'));
    return div;
}
