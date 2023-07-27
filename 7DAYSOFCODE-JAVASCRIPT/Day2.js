const nome = prompt("Qual é o seu nome?")
const idade = prompt("Qual a sua idade?")
const linguagem = prompt("Qual a linguaguem de programação que você está estudando?")

window.alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`)

const gostaDeEstudar = prompt(`Você está gostando de estudar ${linguagem}? (Sim ou Não)`)

if (gostaDeEstudar.trim().toLocaleLowerCase() === "sim" || gostaDeEstudar.trim().toLocaleLowerCase() === "s") {
    window.alert("Muito bom! Continue estudando e você terá muito sucesso.")
} else if(gostaDeEstudar.trim().toLocaleLowerCase() === "nao" || gostaDeEstudar.trim().toLocaleLowerCase() === "não" || gostaDeEstudar.trim().toLocaleLowerCase() === "n") {
   const aprendeuOutrasLinguagens = window.prompt("Ahh que pena... Já tentou aprender outras linguagens?")
    if (aprendeuOutrasLinguagens.trim().toLocaleLowerCase() === "sim" || aprendeuOutrasLinguagens.trim().toLocaleLowerCase() === "s") {
        const linguagens = window.prompt("Quais as linguagens que já tentou aprender?")
        window.alert(`Legal, as linguagens informadas foram: ${linguagens}`)
    } else if (aprendeuOutrasLinguagens.trim().toLocaleLowerCase() === "nao" || aprendeuOutrasLinguagens.trim().toLocaleLowerCase() === "não" || aprendeuOutrasLinguagens.trim().toLocaleLowerCase() === "n") {
        
    }else {
        window.alert("Opção selecionada inválida.. tente novamente!")
    }
}else{
    window.alert("Opção selecionada inválida.. tente novamente!")
}
