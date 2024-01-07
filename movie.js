import MOVIEDB_KEY from "./key";
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${MOVIEDB_KEY}`
    }
  };
  
  let baseURL = "https://image.tmdb.org/t/p/w500"
  fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => {
        const cardListElem = document.getElementById("card-list")
        cardListElem.innerHTML = ''
        response.results.forEach(element => {
            let newItem = document.createElement("div")
            let titleElem = document.createElement("h3")
            let overviewElem = document.createElement("p")
            let voteElem = document.createElement("p")
            let posterElem = document.createElement("img")
            newItem.classList.add("movie-card")
            posterElem.classList.add("poster")
            titleElem.classList.add("title")
            voteElem.classList.add("vote")
            titleElem.innerText = element.title
            overviewElem.innerText = element.overview
            voteElem.innerText = element.vote_average
            posterElem.src = `${baseURL}${element.poster_path}`
            newItem.appendChild(posterElem)
            newItem.appendChild(titleElem)
            newItem.appendChild(overviewElem)
            newItem.appendChild(voteElem)
            newItem.setAttribute('id', element.id);

            document.getElementById("card-list").appendChild(newItem)
            newItem.addEventListener('click', () => {
                const movieId = newItem.getAttribute('id')
                alert(`이 영화의 ID는 ${movieId}입니다`);
            });
        });
    })
    .catch(err => console.error(err));

