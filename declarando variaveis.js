//declarando variavel
// var e let pode mudar o tipo quando a const nao pode mudar


// var é global e local

console.log("aki tem x mas nao esta definido",x);
{
    var x="isso msm"
}
console.log("a partir daqui o x esta definido.",x);

//-----------------------------------------------------------------------------------------------------------------------------//

//const e let são locais e são funcioam dentro do escopo que foi criada

//console.log("aki nao tem y",y); // da erro
{
    let y="isso msm"
    console.log("aqui tem y.",y);
}
//console.log("aqui nao tem y.",y); //da erro pq ta fora do escopo


let y=0;
console.log("aki tem y",y);// da certo pq y foi declarada antes
{
    y="isso msm" // somente mudando o valor de Y
    console.log("aqui tem y.",y);
}
console.log("aqui tem y mudado.",y); //da certo pq y foi declarada antes

//----------------------------------------------------------------------------------------------------------------------------//

//console.log("aki nao tem z",z); // da erro
{
    const z="isso msm"
    console.log("aqui tem z.",z);
}
//console.log("aqui nao tem z.",z); //da erro pq ta fora do escopo


const z=0;
console.log("aki tem z",z);// da certo pq z foi declarada antes
{
    //z="isso msm" // da erro pq nao pode mudar o valor de uma constante
    console.log("aqui tem z.",z);
}
console.log("aqui tem z nao mudado.",z); //da certo pq z foi declarada antes

//----------------------------------------------------------------------------------------------------------------------------//

//nao pode declarar variaveis com numeros mas pode declarar com $ e _

var nome 
nome='variavel';
console.log(nome);

var numero=37,ano="2001";
var idade=numero;
console.log(idade);

var numero = 10;

console.log("agr sou " + numero ,"mas eu era " + ano);

console.log(typeof idade);
console.log(ano);
console.log(ano,idade,typeof nome);


//----------------------------------------------------------------------------------------------------------------------------//