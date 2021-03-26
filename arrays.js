// arrays

const animais = [
    "leão",
    "dinosauro",
    {
        nome:"Gato",
        idade:"2"
    }
]
console.log(animais[1])
console.log(animais)
console.log(animais.length)
console.log(animais[2].nome) // acessando um objeto dentro do array

//----------------------------------------------------------------------------------------------------------------------------//

//criando arrays de forma rapida
let arrays=new Array("a","s","a")
console.log(arrays);

//criando array vazia
let arrayVazio=new Array(10)
console.log(arrayVazio);

//elementos no arrays
console.log(arrays.length);

//tranformando uma palavra em varios arrays
let palavra="manipulação"
console.log(Array.from(palavra));

//----------------------------------------------------------------------------------------------------------------------------//

let myArray=new Array("caneta","papel","lapis","borracha")
console.log(myArray);

//add item no fim
myArray.push("note 10");
console.log(myArray);

//add item no começo
myArray.unshift("caderno");
console.log(myArray);

//remover do fim
myArray.pop();
console.log(myArray);

//remover do começo
myArray.shift();
console.log(myArray);

//pegar somente alguns elementos
console.log(myArray.slice(0,2)); // nao modifica o arrays apenas da o retorno

//remover 1 ou mais em qualquer posição
myArray.splice(0,1)//splice(*numero inicial*,*quantidade*)
console.log(myArray);

//encontrar a posição de um elemnto
let index = myArray.indexOf("lapis")
console.log(index);// retorna a posição dele
myArray.splice(index,1)//combando
console.log(myArray);