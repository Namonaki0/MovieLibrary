import React, { useState } from "react";
// import { useEffect, useState } from "react";

export default function Library() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const submitSearch = async (e) => {
    e.preventDefault();

    const api_key = `fef4f456a619d2054596d72fcd9a7171`;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const apiCall = await fetch(url);
      const movies = await apiCall.json();
      console.log(movies.results);
      setMovies(movies.results);
      // console.log(movies);
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
        <button type="submit" classNAme="submit">
          Search
        </button>
      </form>
      <div className="movie-template">
        {movies.map((movie) => (
          <div className="movie-container">
            <h1>{movie.title}</h1>
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
              alt={movie.title + "poster"}
            />
          </div>
        ))}
      </div>
    </>
  );
}
