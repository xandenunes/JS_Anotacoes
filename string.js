//string

let frase="sou uma frase lek";

frase += (", mt irado");
console.log(frase);

frase="sou uma frase lek"
console.log(frase + ", mt irado");


console.log(`posso
usar 
multiplas 
linhas
com a crase`);
console.log(frase.length);//para ver tamanho da string

console.log("sem estar na variavel".length);

console.log(frase.toLocaleUpperCase()); //convertendo pra maiusculo
console.log(frase.toLowerCase()); //convertendo pra minusculo

console.log(frase.indexOf("lek")); // procura algo dentro da string e retorna a posição da que inicia a frase
console.log(frase.indexOf('alek')); // se nao acha é -1

console.log(frase.replace("sou","nao sou"));//edita uma string

console.log(frase.slice(0,3)); // retorna somente a parte que esta dentro da posição

console.log("      queria estar no espaço    ".trim());// tira espaços iniciais e finais

console.log("to juntando string com variaveis pq " + frase.replace("sou","nao sou").toUpperCase() + ' mas bem que poderia ser');

console.log(`to juntando string com variaveis pq ${frase.replace("sou","nao sou").toUpperCase()} mas bem que poderia ser`) // forma mais simples