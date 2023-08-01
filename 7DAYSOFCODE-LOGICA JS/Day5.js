

let desejaAdicinoar = "";
let item, categoria;
let frutas=[],laticinios=[],congelados=[],doces=[];
while (desejaAdicinoar !== "2") {
   desejaAdicinoar = window.prompt(`Deseja adicionar algo a sua lista de compras?
1 - Sim
2 - Não`).trim()

if (desejaAdicinoar === "1") {
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
                }
            }
            window.alert(`Lista de compras:
            Frutas: ${frutas.toString()}
            Laticícios: ${laticinios.toString()}
            Congelados: ${congelados.toString()}
            Doces: ${doces.toString()}
            `)
         
                
                