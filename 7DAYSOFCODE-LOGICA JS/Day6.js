

let opcaoSelecionada = "";
let item, categoria;
let frutas=[],laticinios=[],congelados=[],doces=[];

while (opcaoSelecionada !== "3") {
    if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && doces.length === 0) {
        opcaoSelecionada = window.prompt(`Deseja adicionar algo a sua lista de compras?
        1 - Adicionar
        3 - Não`).trim()
    }else{
        opcaoSelecionada = window.prompt(`Deseja adicionar algo a sua lista de compras ou remover algum item da sua lista??
        1 - Adicionar
        2 - Remover
        3 - Não`).trim()
    }

if (opcaoSelecionada === "1") {
    item = window.prompt(`Qual item deseja adicionar a sua lista?`).trim()
    categoria = window.prompt(`A Qual categoria o item pertence?
    1 - Frutas;
    2 - Laticínios;
    3 - Congelados;
    4 - doces.`).trim().toLowerCase()
        
        switch (categoria) {
            case "1":
                frutas.push(item)
                break;
            case "2":
                laticinios.push(item)
                break;
            case "3":
                congelados.push(item)
                break;
            case "4":
                doces.push(item)
                break;
            }
}else if (opcaoSelecionada === "2") {
   let itemARemover = window.prompt(`Quais item deseja remover da sua lista:
    ${exibirListas()}`)
    
    if(frutas.indexOf(itemARemover) !== -1){
        frutas = frutas.slice(frutas.indexOf(itemARemover)+1,1)
        console.log(frutas)
    }else if(laticinios.indexOf(itemARemover) !== -1){
        laticinios = laticinios.slice(laticinios.indexOf(itemARemover)+1,1)
    }else if(congelados.indexOf(itemARemover) !== -1){
        congelados = congelados.slice(congelados.indexOf(itemARemover)+1,1)
    }else if(doces.indexOf(itemARemover)!== -1 ){
        doces = doces.slice(doces.indexOf(itemARemover)+1,1)
    }else{
        window.alert(`Não foi possível encontar o item "${itemARemover}" dentro da lista`)
    }
}
            }

window.alert(exibirListas())
          
         
function exibirListas() {
   return `Lista de compras:
    Frutas: ${frutas.toString()}
    Laticícios: ${laticinios.toString()}
    Congelados: ${congelados.toString()}
    Doces: ${doces.toString()}
    `
}
                
