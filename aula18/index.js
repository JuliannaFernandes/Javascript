/* // Objetos

const pessoa1 = {
  nome: "João",
  sobrenome: "Pereira",
  idade: 19,
};

console.log(pessoa1.nome);
 */
// criando uma function para criar o objeto

function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  
fala(){
  console.log(`a minha idade atual é ${this.idade}.`);
},

incrementaIdade(){
  this.idade++;
}
}
};

const pessoa1 = criaPessoa('João', "Fernandes", 18) // Os dados enviados para os parâmetros são chamados de argumetos.

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();