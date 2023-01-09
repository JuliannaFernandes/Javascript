let testeString = "Um \"texto\" bem grande"; // barra invertida para colocar aspas duplas no meio do texto mesmo quando se abre com elas.

console.log(testeString);

//concatenando strings

console.log(testeString.concat(' em um lindo dia'));
console.log(testeString + ' em um lindo dia');
console.log(`${testeString} em um lindo dia `);

// descobrir indice 

console.log(testeString.indexOf('texto'));

console.log(testeString.indexOf('o',3));  

console.log(testeString.lastIndexOf('texto'));  // procura de trás para frente

//descobrindo o tamanho da string
console.log(testeString.length); 

console.log(testeString.slice(2,6)); 




//substituir palavras ou letras

console.log(testeString.replace('texto', 'passarinho')); 

console.log(testeString.replace(/e/g, '#')); // todas que contém 




