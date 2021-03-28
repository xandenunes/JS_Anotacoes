
let a="3";
console.log(a + 3); // sai string
console.log(Number(a) + 4);// sai numero
console.log(String(Number(a)) + 4);// sai String


let b=11111111;
console.log(String(b).length); // ve quantos numeros tem ou letras


let c=965896.5478855;
console.log(c.toFixed(2));// limita as casas decimais aproximandos
console.log(String(c).replace("5","1")); // edita uma string
console.log(c.toFixed(2).replace("5","1"));

console.log("grita cmg".replace("grita","nao grita").toUpperCase()); // deixa tudo em CAPS
console.log("PAREI DE GRITAR".toLowerCase()+"BLZ ENTÃO".replace("BLZ",", ta nada blz,"));

let d="prefiro morrer do que";
console.log(d.includes("perder a vida"));// procura palvras na string e retorna true ou false
console.log(d.replace("que","que perder a vida").includes("perder a vida")); // edita uma string

let frase="eu odeio nao ter um cell bom";
let fraseModoArray=frase.split(" ");// split separa uma frase em vairias Strings tranformando em array obs: dentro do parenteses define onde vc vai dividir
console.log(frase);
console.log(fraseModoArray);
let juntandoArray=fraseModoArray.join("_");//join junto os arrays
console.log(juntandoArray);

