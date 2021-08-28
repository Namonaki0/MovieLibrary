import "./modal";
import React, { useState, useEffect } from "react";

export default function Library() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const movieContainers = document.querySelectorAll(".movie-container");
    const movieTemplate = document.querySelector(".movie-template");
    const modal = document.querySelector(".modal");

    const modalDiv = document.createElement("div");

    movieContainers.forEach((movieContainer) => {
      movieContainer.addEventListener("click", (e) => {
        let movieImage = e.target.children[0].currentSrc;
        let movieTitle = e.target.children[1].innerText;
        let movieOverview = e.target.children[2].innerText;

        modalDiv.style.display = "flex";
        modalDiv.classList.add("modal-movie-wrapper");
        modalDiv.innerHTML = `
          <i class="fas fa-times-circle"></i>
          <img class="modal-movie-image" src=${movieImage} />
          <div class="modal-movie-info">
            <div class="modal-movie-title">${movieTitle}</div>
            <div class="modal-movie-overview">${movieOverview}</div>
          </div>
        `;

        movieTemplate.appendChild(modalDiv);
      });
    });

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-movie-wrapper")) {
        modalDiv.style.display = "none";
      }
    });
  });

  const submitSearch = async (e) => {
    e.preventDefault();

    const api_key = `fef4f456a619d2054596d72fcd9a7171`;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const apiCall = await fetch(url);
      const movies = await apiCall.json();
      setMovies(movies.results);
    } catch (err) {
      console.error("nothing found", err);
    }
  };

  return (
    <>
      <form onSubmit={submitSearch} className="form">
        <input
          type="text"
          placeholder="search movie..."
          value={query}
          name="query"
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button type="submit" className="submit">
          Search
        </button>
      </form>
      <div className="outter-wrapper">
        <div className="movie-template">
          {movies
            .filter((movie) => movie.poster_path)
            .map((movie) => (
              <div className="movie-container" key={movie.id}>
                <img
                  className="movie-image"
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                  alt={movie.title + "poster"}
                />
                <h1>{movie.title}</h1>
                <div className="movie-overview">{movie.overview}</div>
              </div>
            ))}
        </div>
        <div className="modal"></div>
      </div>
    </>
  );
}
