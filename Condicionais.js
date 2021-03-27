
//if e else
let age=19
if (age>=18) {
    console.log("ja pode ser preso kkkkk")
} else if(age<=14) {
    console.log("tu é criança nem devia estar pensando nisso")
}
    else{
        console.log("nao pode dirigir ainda")
    }

//----------------------------------------------------------------------------------------------------------------------------//

//switch
Aula="dispositivos moveis";
switch (Aula) {
    case "python":
        console.log('Braba');
        break;
    case "JS":
        console.log('Massa');
        break;
    default: //ele é para case nenhum dos case compra
        console.log('chata');
        break;
}

//----------------------------------------------------------------------------------------------------------------------------//

//throw
function meunome(name) {
    if (name=="a") {
        throw new Error("nome é necessario")
    }
    console.log("dps do erro")
}
//try...catch servem para testar e mostrar erros
try {
    meunome("a")
} catch (error) {
    console.log(error)
}
console.log("dps do erro")
