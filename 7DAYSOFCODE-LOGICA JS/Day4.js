const numTentativas = 3
let tentativaAtual = 0
const minimo = 0;
const maximo = 10;
const numero = Math.floor(Math.random()* maximo)

console.log(numero)

while (tentativaAtual < numTentativas) {

   let palpite = window.prompt("Qual o seu palpite?")
    tentativaAtual++

   if (palpite === numero) {
        window.alert(`Parabéns você acertou o numero: ${numero}`)
   }else if(tentativaAtual < 3){
        window.alert(`Você errou, você tem mais ${numTentativas - tentativaAtual} tentativas!`)
   }else {
        window.alert(`Numero de tentativas acabou, o numero correto era: ${numero}`)
   }
}