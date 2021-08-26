import React, { useState } from "react";
import "./modal";
// import MovieModal from "./MovieModal";
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
      // console.log(movies.results);
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
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

{
  /* <MovieModal />; */
}

{
  /* <div class="modal-movie-wrapper">
  <h1 className="modal-movie-title">{movie.title}</h1>
  <img
    className="modal-movie-image"
    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
    alt={movie.title + "poster"}
  />
  <div className="modal-movie-overview">{movie.overview}</div>
</div>; */
}

//  title={movie.title}
//             overview={movie.overview}
//             key={movie.id}

// <MovieModal />;
