// aplicativo de frases motivacionais
// declarando a função
function Frases(int) {
    const frases=["A persistência é o caminho do êxito.","As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.","Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer","Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação."];
    let passado=8;
    for (let i = 0; i < int; i++) {
        let Random = Math.floor(Math.random() * 4);
        if (passado != Random) {
            console.log(frases[Random]);
            passado=Random;
        }
        else{
            i--;
        }
    }
}
// chamando a função
Frases(10)
console.log('vc so tem essas frases');