import React, { useState, useEffect, Route } from "react";
import Favorites from "./Favorites";
import { api_key } from "../apiKey";

export default function Library() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  //? MODAL CREATION
  useEffect(() => {
    const movieContainers = document.querySelectorAll(".movie-container");
    const movieTemplate = document.querySelector(".movie-template");
    const modalCloseBtnInnerText = `<i class="fas fa-times-circle"></i>`;

    const modalDiv = document.createElement("div");

    movieContainers.forEach((movieContainer) => {
      movieContainer.addEventListener("click", (e) => {
        let movieImage = e.target.children[0].currentSrc;
        let movieTitle = e.target.children[1].innerText;
        let movieOverview = e.target.children[2].innerText;
        let movieReleaseDate = e.target.children[3].innerText;
        let movieRating = e.target.children[4].innerText;

        const favMovies = [];
        const newMovies = [...favMovies];
        newMovies.push(movieTitle, ...newMovies);
        console.log(newMovies);

        modalDiv.style.display = "flex";
        modalDiv.classList.add("modal-movie-wrapper");
        modalDiv.innerHTML = `
          <span>${modalCloseBtnInnerText}</span>
          <div class="modal-movie-inner-wrapper">
            <div class="modal-movie-image-wrapper">
             <img class="modal-movie-image" src=${movieImage} />
            </div>
            <div class="modal-movie-main-info">
              <div class="modal-movie-title">${movieTitle}</div>
              <div class="modal-movie-overview">${movieOverview}</div>
              <div class="modal-movie-secondary-info">
                <div class="modal-movie-release-date">${movieReleaseDate}</div>
                <div class="modal-movie-rating">${movieRating}</div>
              </div>
              <div class="modal-user-input">
                <a href="#" class="favourite-icon"><i class="fas fa-heart"></i></a>
                <a href="#"><i class="fas fa-comment"></i></a>
              </div>
            </div>
          </div>
        `;

        movieTemplate.appendChild(modalDiv);

        window.addEventListener("click", (e) => {
          if (e.target.classList.contains("fa-times-circle")) {
            modalDiv.style.display = "none";
          }
        });

        window.addEventListener("click", (e) => {
          if (e.target.classList.contains("favourite-icon")) {
          }
        });
      });
    });

    window.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal-movie-wrapper")) {
        modalDiv.style.display = "none";
      }
    });
  });
  //? END OF MODAL CREATION

  //? MOVIE TITLE SEARCH - API FETCH
  const submitSearch = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const apiCall = await fetch(url);
      const movies = await apiCall.json();
      setMovies(movies.results);
    } catch (err) {
      console.error("nothing found", err);
    }
  };

  //? MOVIE TITLE SEARCH RENDER
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
                <div className="movie-release-date">
                  Release date: {movie.release_date}
                </div>
                <div className="movie-rating">Rating: {movie.vote_average}</div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

// const favouriteMovies = [movieTitle];
// const newFavouriteMovies = [...favouriteMovies];

// newFavouriteMovies.push(movieTitle);

// console.log(...newFavouriteMovies);
