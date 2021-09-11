import React, { useState, useEffect } from "react";
import { api_key } from "../apiKey";
import MovieTemplate from "./MovieTemplate";
import ModalTemplate from "./ModalTemplate";
import Modal from "react-modal";

export default function Library() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [openModal, setOpenModal] = useState(false);

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

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  //? MOVIE TITLE SEARCH RENDER
  return (
    <>
      <div>
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
          <div className="movie-template" styles={customStyles}>
            {movies
              .filter((movie) => movie.poster_path)
              .map(
                (movie) =>
                  movie && (
                    <MovieTemplate
                      movie={movies}
                      src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                    />
                  )
              )}
          </div>
          <ModalTemplate movie={movies} />
        </div>
      </div>
    </>
  );
}
