let opcaoSelecionada = ""
do {
    

    opcaoSelecionada = prompt(`Escolha uma opção no menu:
    1 - Somar
    2 - Subtrair
    3 - Multiplicar
    4 - Dividir
    5 - Sair`)

    if (opcaoSelecionada=== "1" || opcaoSelecionada === "2" || opcaoSelecionada === "3" || opcaoSelecionada === "4") {
        let numero1 = parseInt(prompt("Digite o primeiro numero:"))
        let numero2 = parseInt(prompt("Digite o segundo numero:"))
        switch (opcaoSelecionada) {
            case "1":
                alert(`Resultado: ${somar(numero1,numero2)}`)
                break;
            case "2":
                alert(`Resultado: ${subtrair(numero1,numero2)}`)
                break;
            case "3":   
                alert(`Resultado: ${multiplicar(numero1,numero2)}`)
                break;
            case "4":
                alert(`Resultado: ${dividir(numero1,numero2)}`)
                break;
        }
    }else if(opcaoSelecionada === "5"){
        alert("Até a proxima")
    }else {
        alert("Selecione uma opção válida conforme menu!")
    }
}while (opcaoSelecionada !== "5")


function somar(numero1,numero2) {
    return numero1+numero2;
}
function subtrair(numero1,numero2) {
    return numero1-numero2;
}
function multiplicar(numero1,numero2) {
    console.log(numero1)
    console.log(numero2)
    console.log(numero1*numero2)
    return numero1*numero2;
}
function dividir(numero1,numero2) {
    return numero1/numero2;
}