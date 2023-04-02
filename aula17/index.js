// Criando Funções com paâmetros

//escopo é o corpo da function

function cumprimento(nome) {
  console.log(`Eai mano ${nome}, tá de boas?`);
}

cumprimento("João");

function soma(x, y) {
  const resultado = x + y;
  return resultado; // exixbir resultado e encerra a função
}

console.log(soma(2, 2)); //exibindo function soma

//Variável recebendo function

/* const raiz = function (n) {
  return n ** 0.5;
}; // neste caso utilizar ponto e vírgula.

console.log(raiz(9));
 */

// nova maneira de criar funtion: ArrowFunction, criada para simplificar
const raiz = (n) => n ** 0.5;

console.log(raiz(9));
