class filme{
    constructor(adult,backdrop_path,genre_ids,id,original_language,original_title,overview,popularity,poster_path,release_date,title,vote_avarage,vote_count){
      this.adult = adult;
      this.backdrop_path = backdrop_path;
      this.genre_ids = genre_ids;
      this.id = id;
      this.original_language = original_language;
      this.original_title = original_title;
      this.overview = overview;
      this.popularity = popularity;
      this.poster_path = poster_path;
      this.release_date = release_date;
      this.title = title
      this.vote_avarage = vote_avarage;
      this.vote_count = vote_count
    }

}

let filmes = [];
getMostPopularFilmes()

function showContent(lista){
    
    
    let temp;
    temp = document.getElementsByTagName("template")[0]
    for (let index = 0; index < lista.length; index++) {
        let clone = temp.content.cloneNode(true)
        
        let div = clone.getElementById("geral")
        let img = clone.getElementById("imagem-filme")
        img.src = "https://image.tmdb.org/t/p/w500" + lista[index].poster_path
        let filmName = clone.getElementById("nome-filme")
        filmName.textContent = lista[index].title
        let filmDescription = clone.getElementById("descricao-filme")
        filmDescription.textContent = lista[index].overview
        let nota = clone.getElementById("nota")
        nota.textContent = lista[index].vote_average

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
        filmesFiltrados = filmes.filter((filme) => filme.title.toLowerCase().includes(this.value.toLowerCase()) )
        showContent(filmesFiltrados)
    }

})

function clearElement(element) {
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
}

async function getMostPopularFilmes() {

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNTk1MDM5ZmE2MzcxYmQzMDBmMzFlOTE5ZTkxYTJiNCIsInN1YiI6IjY0Y2E3NDBjMDAxYmJkMDEwNzk5ZWZlYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JZ5FaLaqoWZ5t9_0DQcnQpYaje8synfIsJnYfJFIkaE'
        }
      };
   await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        showContent(response.results)
        filmes = response.results
    })
    .catch(err => console.error(err));
}