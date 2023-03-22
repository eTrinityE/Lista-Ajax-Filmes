var filename = "https://api.themoviedb.org/3/movie/popular?api_key=4aa218d2cd173da259732cee033e94e5&language=pt-US&page=1";
    fetch(filename)
        .then(response => response.json())
        .then(dados => {
            const moviesList = document.querySelector("#movies-list");
            for (i = 0; i < 10; i++) {
                const movieDiv = document.createElement("div");
                movieDiv.classList.add("movieDiv");
                const posterPath = document.createElement("img");
                posterPath.classList.add("posterPath");
                posterPath.src = `https://image.tmdb.org/t/p/w300${dados.results[i].poster_path}`;
                const movieInfo = document.createElement("div");
                movieInfo.classList.add("movieInfo");
                const originalTitle = document.createElement("p");
                originalTitle.textContent = `Título: ${dados.results[i].title}`;
                const overviews = document.createElement("p");
                overviews.textContent = `Descrição: ${dados.results[i].overview}`;
                const voteAverage = document.createElement("p");
                voteAverage.textContent = `Avaliação média: ${dados.results[i].vote_average}`;
                const voteCount = document.createElement("p");
                voteCount.textContent = `Quantidade de Votos: ${dados.results[i].vote_count}`;

                movieDiv.appendChild(posterPath);
                movieInfo.appendChild(originalTitle);
                movieInfo.appendChild(overviews);
                movieInfo.appendChild(voteAverage);
                movieInfo.appendChild(voteCount);
                movieDiv.appendChild(movieInfo);
                moviesList.appendChild(movieDiv);
            }
        })
        .catch(error => console.log(error))