
for (let index = 10; index > 0; index--) {
    if (index==5) {
        continue; //pula a execução do momento
    }
    if (index==2) {
        break; // para o for
    }
    console.log(index)
}

//----------------------------------------------------------------------------------------------------------------------------//

let i=999
while (i>10) {
    console.log(i)
    i /= 3
}

//----------------------------------------------------------------------------------------------------------------------------//

//for...of bom pra ser usado em Strings e arrays

let nome = 'jucas';
let nomes = ["ale","lucas","malik"];

for (let char of nome) {
    console.log(char);
}

for (let char of nomes) {
    console.log(char);
}

//----------------------------------------------------------------------------------------------------------------------------//

//for...in cria um looping em cima de um objeto

let Estojo={
    borracha:2,
    lapis:5,
    canetas:4,
}
for (const propriedade in Estojo) {
    console.log(propriedade);

    //formas de acessar os esta dentro das propriedades
    console.log(Estojo["borracha"]);
    console.log(Estojo[propriedade]); //mostra os 3
    console.log(Estojo.lapis);
}