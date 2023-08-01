const nome = prompt("Qual seu nome?")
let area = "";
let opcaoLinguagem = "";
let linguagem ="";




while (area !== "1" && area!== "2") {
    area = prompt(`Qual area deseja seguir? 
1 - Back-end                    
2 - Front-end`).toLocaleLowerCase().trim()
}
    
    if (area === "1" ) {
        opcaoLinguagem = prompt(`Você informou Back-End: 
        Qual dessas linguagens deseja aprender:
        1 - C#;
        2 - Java`).toLocaleLowerCase().trim()

        while(opcaoLinguagem !== "1" || opcaoLinguagem !== "2") {
        if(opcaoLinguagem === "1"){
            linguagem = "C#"
        }else if(opcaoLinguagem === "2"){
            linguagem = "Java"
        }
    
            const especializar = prompt(`Você escolheu aprender ${linguagem}. 
Deseja se especializar na area escolhida ou seguir se desenvolvendo para se tornar Fullstack?
1 - Se especializar
2 - Se tornar Fullstack`)
        }
        
    } else if(area.toLocaleLowerCase().trim() === "2") {
        
    }