//operadores matematicos

console.log(5+5);

console.log(10-2);

console.log(10*2);

console.log(10**2); //exponencial

console.log(10/2);

console.log(10%3); //resto 

var a =0;
console.log(++a); // incrementa primeiro e dps imprime
var a =0;
console.log(a++); // imprime primeiro e dps incrementa
console.log(a);

//----------------------------------------------------------------------------------------------------------------------------//

// "==" compara somente valor
// "===" e "!==" compara valor e tipo

//negando
var b=true
var c=false

console.log(!b);
console.log(!c);
console.log(!10);
console.log(!"texto");

console.log(!!b);
console.log(!!c);

//----------------------------------------------------------------------------------------------------------------------------//

//se nega duas vezes para transformar null ,undefined,'',0 em false

console.log(null);
console.log(undefined);
console.log('');
console.log(0);

console.log(!!null);
console.log(!!undefined);
console.log(!!'');
console.log(!!0);

//----------------------------------------------------------------------------------------------------------------------------//

//operadoes unarios (typeof e delete)
//delete : deleta uma propriedade

const person = {
    name:"xande",
    age:23,
    amigos:0,
}
console.log(person);
console.log(typeof person.name);
delete person.amigos; // retorna true deletando ou nao deletando
console.log(person);

//----------------------------------------------------------------------------------------------------------------------------//

// operadores de atribuição
let number=2;
number += 3;// number = number + 3
console.log (number);

number=2;
number -= 3;// number = number - 3
console.log (number);

number=2;
number *= 3;// number = number * 3
console.log (number);

number=3;
number /= 3;// number = number / 3
console.log (number);

number=10;
number %=3; // number = number % 3
console.log (number);

number=10;
number **=3; // number = number ** 3
console.log (number);

//----------------------------------------------------------------------------------------------------------------------------//

//operador condicional ternario
//esqueleto: condição ? valor1 : valor2

let arvores = true;
let fogo = true;
const floresta = arvores && !fogo ? "ai nao mano" : "floresta irada meu";
console.log(floresta)

//----------------------------------------------------------------------------------------------------------------------------//

// FALSY é quando um valor é considerado falso onde um booleano é obrigatorio (condicionais e loop)

console.log( false ? "true" : "false");
console.log( 0 ? "true" : "false");
console.log( -0 ? "true" : "false");
console.log( '' ? "true" : "false");
console.log( null ? "true" : "false");
console.log( undefined ? "true" : "false");
console.log( NaN ? "true" : "false");

//TRUTHY é quando um valor é consederado verdadeiro onde um booleano é obrigatorio (condicionais e loop)

console.log( true ? "true" : "false");
console.log( [] ? "true" : "false");
console.log( {} ? "true" : "false");
console.log( 1 ? "true" : "false");
console.log( 10 ? "true" : "false");
console.log( 5.6 ? "true" : "false"); // qualquer numero
console.log( -1 ? "true" : "false");
console.log( "0" ? "true" : "false");
console.log( "false" ? "true" : "false"); //qual que string
console.log( Infinity ? "true" : "false");
console.log( -Infinity ? "true" : "false");