import React, { useState, useEffect } from "react";
import { api_key } from "../apiKey";
import MovieTemplate from "./MovieTemplate";

export default function Library() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  //? MOVIE TITLE SEARCH - API FETCH //
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

  //? MOVIE TITLE SEARCH RENDER //
  return (
    <>
      <div className="library-outter-wrapper">
        <form onSubmit={submitSearch} className="form">
          <input
            type="text"
            placeholder="movie..."
            value={query}
            name="query"
            onChange={(e) => setQuery(e.target.value)}
          ></input>
          <button type="submit" className="submit">
            Search
          </button>
        </form>

        <div className="outter-wrapper">
          {movies.length > 0 ? (
            <div className="movie-template">
              {movies
                .filter((movie) => movie.poster_path)
                .map((movie) => movie && <MovieTemplate movie={movie} />)}
            </div>
          ) : (
            <div class="no-movies-message">
              <p>movie search...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
