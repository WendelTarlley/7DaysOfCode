class Filme {
    constructor(data) {
      this.adult = data.adult;
      this.backdrop_path = data.backdrop_path;
      this.genre_ids = data.genre_ids;
      this.id = data.id;
      this.original_language = data.original_language;
      this.original_title = data.original_title;
      this.overview = data.overview;
      this.popularity = data.popularity;
      this.poster_path = data.poster_path;
      this.release_date = data.release_date;
      this.title = data.title;
      this.vote_average = data.vote_avarage; // Fixed typo: vote_avarage -> vote_average
      this.vote_count = data.vote_count;
      this.favorito = false; // Default value for the 'favorito' property
    }
  }
  
  let filmes = [];
  
  async function getApiKey() {
    const response = await fetch("apikey.txt");
    return await response.text();
}
getMostPopularFilmes();
  
  async function getMostPopularFilmes() {
    const apiKey = await getApiKey();
    const headerGet = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: apiKey
      }
    };
  
    try {
      const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', headerGet);
      const data = await response.json();
      filmes = data.results.map(item => new Filme(item));
      showContent(filmes);
    } catch (err) {
      console.error(err);
    }
  }
  
  function showContent(lista) {
    const template = document.getElementsByTagName("template")[0];

    clearElement(document.getElementById("card-template"));

    for (const filme of lista) {
      const clone = template.content.cloneNode(true);
      const img = clone.getElementById("imagem-filme");
      img.src = "https://image.tmdb.org/t/p/w500" + filme.poster_path;
  
      const filmName = clone.getElementById("nome-filme");
      filmName.textContent = filme.title;
  
      const filmDescription = clone.getElementById("descricao-filme");
      filmDescription.textContent = filme.overview;
  
      const nota = clone.getElementById("nota");
      nota.textContent = filme.vote_average;
  
      const elementFavorito = clone.getElementById("div-favorito");
      if (filme.favorito) {
        elementFavorito.classList.add("fa-heart");
        elementFavorito.classList.add("fa");
      } else {
        elementFavorito.classList.add("fa-heart-o");
        elementFavorito.classList.add("fa");
      }
  
      document.getElementById('card-template').appendChild(clone);
    }
  }
  
  function clearElement(element) {
    while (element.hasChildNodes()) {
      element.removeChild(element.firstChild);
    }
  }
  
  document.querySelector("input[name=favoritos]").addEventListener('change', function() {
    clearElement(document.getElementById("card-template"));
  
    if (this.checked) {
      const filmesFiltrados = filmes.filter(filme => filme.favorito);
      showContent(filmesFiltrados);
    } else {
      showContent(filmes);
    }
  });
  
  let inputPesquisa = document.querySelector("input[name=pesquisa]");

  inputPesquisa.addEventListener('keydown', function(event) {
    if (event.keyCode === 13 && this.value !== '') {
      search();
    }else if (this.value === '') {
        getMostPopularFilmes()
    }
  });
  
  async function search() {
    const apiKey = await getApiKey();

    const headerGet = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: apiKey
      }
    };
  
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${inputPesquisa.value}`, headerGet);
    const data = await response.json();
    filmes = data.results.map(item => new Filme(item));
    showContent(filmes);
  }
  