class filme{
    constructor(nome,imagem,nota,favorito,descricao){
        this.nome = nome;
        this.imagem = imagem;
        this.nota = nota;
        this.favorito = favorito;
        this.descricao = descricao;
    }

}

const filme1 = new filme("filme1","https://mundoconectado.com.br/uploads/chamadas/capa_145.jpg",
9.5,true, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")

const filme2 = new filme("filme1","https://mundoconectado.com.br/uploads/chamadas/capa_145.jpg",
9.5,false, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.")

let filmes = [filme1,filme2];
showContent(filmes)

function showContent(lista){
    
    
    let temp;
    temp = document.getElementsByTagName("template")[0]
    for (let index = 0; index < lista.length; index++) {
        let clone = temp.content.cloneNode(true)
        
        let div = clone.getElementById("geral")
        let img = clone.getElementById("imagem-filme")
        img.src = lista[index].imagem
        let filmName = clone.getElementById("nome-filme")
        filmName.textContent = lista[index].nome
        let filmDescription = clone.getElementById("descricao-filme")
        filmDescription.textContent = lista[index].descricao
        let nota = clone.getElementById("nota")
        nota.textContent = lista[index].nota

        let elementFavorito = clone.getElementById("div-favorito")
        if(lista[index].favorito){
            elementFavorito.classList.add("fa-heart")
            elementFavorito.classList.add("fa")            
        }else{
            elementFavorito.classList.add("fa-heart-o")
            elementFavorito.classList.add("fa")
        }
        document.getElementById('card-template').appendChild(clone)
        
    }

}

var checkbox = document.querySelector("input[name=favoritos]");
var inputPesquisa = document.querySelector("input[name=pesquisa]");

checkbox.addEventListener( 'change', function() {
    clearElement(document.getElementById("card-template"))
    if(this.checked) {
        let filmesFiltrados = filmes.filter( filme => filme.favorito)
        showContent(filmesFiltrados)
    } else {
        showContent(filmes)
        // Checkbox não está selecionado.
    }
});

inputPesquisa.addEventListener('input', function () {
    clearElement(document.getElementById("card-template"))
    if(this.value === "" || this.value === null){
        showContent(filmes)
    }else{
        filmesFiltrados = filmes.filter((filme) => filme.nome.includes(this.value) )
        showContent(filmesFiltrados)
    }

})

function clearElement(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}