const number = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML=number;
texto.innerHTML='';
texto.innerHTML +=`<p>A raiz quadrada é: ${number ** 0.5}.</p>`; //para calcular raiz quadrada 
texto.innerHTML +=` ${number} = inteiro: ${Number.isInteger(number)}.</p>`; // para verificar se o número é inteiro 
texto.innerHTML +=`<p>É NaN: ${Number.isNaN(number)}. </p>`; // para verificar se o número é inválido
texto.innerHTML +=`<p>Arredondado para baixo: ${Math.floor(number)}.</p>`; //para arrendondar o número para baixo
texto.innerHTML +=`<p>Arredondado para cima: ${Math.ceil(number)}.</p>`;// para arredondar o número para cima 
texto.innerHTML +=`<p>Com duas casas decimais ${number.toFixed(2)}.</p>`; //para exibir o número com apenas duas casas decimais.



