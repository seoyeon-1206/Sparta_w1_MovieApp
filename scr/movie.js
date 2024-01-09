
async function fetchMovieDatat() {
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTA0YmVlZjQxZjYxNGQxMWZlZDQxZTAwYWFmZjg0YSIsInN1YiI6IjY1OTc5NmJmNWNjMTFkNzc2ZTdkODQyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IZ78_IkpDpSstACHGP0dddrf52ji2H0-nnKLnae_aQM'
        }
      };

      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        options
      );
      const data = await response.json();
      return data.results;
};  

export const createMovieCard = async() => {
    const movies = await fetchMovieData();

    const cardList = document.querySelector("#card-list");
    cardList.innerHTML = movies 
    .map( 
        (movie) => `
        <li class="movie-card" id=${movie.id}>
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
              <h3 class="movie-title">${movie.title}</h3>
              <p>${movie.overview}</p>
              <p>Rating: ${movie.vote_average}</p>
          </li>
        `
    ).join(""); 

    cardList.addEventListener("click", handleClickCard);

    function handleClickCard(event) {
        if(event.target === cardList) return;
        if(event.target.matches(".movie-card")){
            alert(`영화 id; ${event.target.id}`);
        } else{
            alert(`영화 id: ${event.target.parentNode.id}`);
        }
    }
};
