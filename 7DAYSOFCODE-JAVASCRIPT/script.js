import {apikey} from "./environment/apikey.js"

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
  const moviesContainer = document.querySelector('.movies')
  
  getFilmes();
  saveFavoritedMovies(Array.from([]))

  async function getFilmes () {
    clearMovieContainer()
    const movies = await getMostPopularFilmes();
    movies.forEach(movie => renderMovie(movie));
  }

  async function getMostPopularFilmes() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=en-US&page=1`;
    const fetchResponse = await fetch(url)
    const { results } = await fetchResponse.json();
    return results;
  }

  document.querySelector("input[name=favoritos]").addEventListener('change', function() {
    clearMovieContainer()
    if (this.checked) {
      getFavoriteMovies().forEach(movie => renderMovie(movie))
    } else {
      getFilmes()
    }
  });

  function renderMovie(movie) {

    const { title, poster_path, vote_average, release_date, overview } = movie
    let isFavorited = checkIsFavorited(movie);
    movie.isFavorited = isFavorited;
    const movieElement = document.createElement('div')
    movieElement.classList.add('movie')
    moviesContainer.appendChild(movieElement);
    

    const movieInformations = document.createElement('div')
    movieInformations.classList.add('movie-informations')

    const movieImageContainer = document.createElement('div')
    movieImageContainer.classList.add('movie-image')
    const movieImage = document.createElement('img')
    movieImage.src = 'https://image.tmdb.org/t/p/w500' + poster_path;

    movieImage.atr = `${title} Poster`
    movieImageContainer.appendChild(movieImage)
    movieInformations.appendChild(movieImageContainer)

    const movieTextContainer = document.createElement('div')
    movieTextContainer.classList.add('movie-text')
    const movieTitle = document.createElement('h4')
    movieTitle.textContent = `${title} (${release_date.split('-',1)})`
    movieTextContainer.appendChild(movieTitle)
    movieInformations.appendChild(movieTextContainer)


    const informations = document.createElement('div')
    informations.classList.add('movie-informations')
    movieTextContainer.appendChild(informations)

    const ratingContainer = document.createElement('div')
    ratingContainer.classList.add('rating')
    const starImage = document.createElement('div')
    starImage.classList.add('fa-star','fa')
    const movieRate = document.createElement('span')
    movieRate.classList.add('movie-rate')
    movieRate.textContent = vote_average
    ratingContainer.appendChild(starImage)
    ratingContainer.appendChild(movieRate)
    informations.appendChild(ratingContainer)
    
    const favorite = document.createElement('button')
    favorite.classList.add('favorite')
    const favoriteImage = document.createElement('span')
    favorite.classList.add('fa',isFavorited ? 'fa-heart' : 'fa-heart-o')
    favoriteImage.classList.add("favoriteImage")

    const favoriteText = document.createElement('span')
    favoriteText.classList.add('movie-favorite')
    favoriteText.textContent = 'Favoritar'
    favorite.appendChild(favoriteImage)
    favorite.appendChild(favoriteText)
    informations.appendChild(favorite)

    favorite.addEventListener('click', (event) => setFavoriteMovie(event,movie))

    const movieDescriptionContainer = document.createElement('div')
    movieDescriptionContainer.classList.add('movie-description')
    const movieDescription = document.createElement('span')
    movieDescription.textContent = overview
    movieDescriptionContainer.appendChild(movieDescription)

    movieElement.appendChild(movieInformations)
    movieElement.appendChild(movieDescriptionContainer)
  }
  let inputPesquisa = document.querySelector("input[name=pesquisa]");
  inputPesquisa.addEventListener('keyup', function(event) {
    if (event.keyCode === 13 && this.value !== '') {
      search();
    }else if (this.value === '') {
      getFilmes()
    }
  });

  async function search() {
    clearMovieContainer();
    const url =  `https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${inputPesquisa.value}`
    const response = await fetch(url);
    const data = await response.json();
    data.results.forEach(movie => renderMovie(movie))
  };


   function clearMovieContainer(){
    moviesContainer.innerHTML = '';
   }

   function setFavoriteMovie(event,movie) {
    if(movie.isFavorited){
      removeFavoriteLocalStorage(movie)
    }else{
      saveFavoriteLocalStorage(movie)
    }

  }

  function saveFavoriteLocalStorage(movie){
    movie.isFavorited = true
    const movies = getFavoriteMovies()
    movies.push(movie)
    saveFavoritedMovies(movies)
  }
  
  function removeFavoriteLocalStorage(movie){
    movie.isFavorited = false
    const movies = getFavoriteMovies()
    movies.splice(movies.indexOf(movie),1)

  }

  function getFavoriteMovies() {
    return JSON.parse(localStorage.getItem('moviesFavorited'))
}

function saveFavoritedMovies(movies) {
  const moviesJSON = JSON.stringify(movies)
  localStorage.setItem( 'moviesFavorited',moviesJSON)
}

function checkIsFavorited(movie) {
  const movies = getFavoriteMovies()
  if (movies.length == 0) {
    return false;
  }else{
    return movies.find(result => movie.id === result.id)
  }
}