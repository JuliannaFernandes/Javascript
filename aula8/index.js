const nome = 'Julianna';
const sobrenome = 'Fernandes';

const idade  = 18;

const peso = 62;

const alturaEmM = 1.64 //altura em metros 

let indiceMassaCorporal;

let anoNascimento;

const dataAtual = new Date();
const anoAtual = dataAtual. getFullYear();

indiceMassaCorporal = peso / (alturaEmM*alturaEmM);
anoNascimento = anoAtual - idade;

// template strings

console.log(`${nome} ${sobrenome} tem ${idade} anos de idade, ele pesa ${peso} Kg`);
console.log(`tem ${alturaEmM} de altura e seu IMC é de: ${indiceMassaCorporal}`);
console.log (`${nome} nasceu em ${anoNascimento}.`);