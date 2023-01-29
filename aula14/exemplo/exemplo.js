const number = Number(prompt('Digite um número:'));

const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML=number;
texto.innerHTML =`<p>Seu número + 2 é ${number + 2}.</p>`;

