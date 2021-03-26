// objeto é um tipo da dado estrutural

const person = { //declarando objeto
    name:"junior",
    age: 45,
    weight: 88.6,
    isBeautiful: false
}

const vazio = {} // criando objeto vezio

console.log(person);
console.log(person.name);
console.log(person.name,"é uma pessoa bonita: "+person.isBeautiful);
console.log(`${person.name} é uma pessoa bonita: ${person.isBeautiful}`);

//----------------------------------------------------------------------------------------------------------------------------//

// new cria um objeto
const name = new String("xande");
name.surName="nunes";
console.log(name);
const age = new Number(23);
console.log(age);