function sum(n1,n2) {
    let total = n1+n2;
    return total;
}
console.log("a soma é: "+sum(1,3)); //imprimindo direto com a função
console.log(`a soma é: ${sum(1,5)}`);

//----------------------------------------------------------------------------------------------------------------------------//

let subject="estudar";
function pensamentos(subject) {
    subject="comer";
    return subject;
}
console.log(subject)
console.log(pensamentos(subject)) // a parementro faz um let dentro da função
console.log(subject)

function pensamentos2() {
    subject="comer";
    return subject;
}
console.log(subject)
console.log(pensamentos2())
console.log(subject) // quando nao coloco o tipo na variavel do escopo ela vira global

//----------------------------------------------------------------------------------------------------------------------------//

//formas de fazer função rapidas chamada tb de Arrow funcion

const sayMyName = (nome) => {
    return nome;
}
console.log(sayMyName("xande"));

console.log(sayMyName(pensamentos()));

//----------------------------------------------------------------------------------------------------------------------------//

//criando uma função contrutor
function Person(name,idade) {
    this.name=name;
    this.idade=idade-9;
    this.walk = function(){
        return this.name + " esta andando"
    }
}
//usando o construtor
const xande = new Person('xande',28);
const jucas = new Person('jucas',29);
console.log(xande);
console.log(jucas.walk());
//função construtoras ja existentes
const date = new Date("2021-03-24 16:38");
const name = new String("xande"); // varre o string e devolve saparado
console.log(name); 
console.log(name[0]); 
console.log(date);