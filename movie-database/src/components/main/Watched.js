import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export default function Watched() {
  const { watched } = useContext(GlobalContext);

  // let movieInWatchedList = watched.find(
  //   (watchedMovie) => watchedMovie.id === movie.id
  // );

  // const watchedMovieEffect = {
  //   pointerEvents: "none",
  //   cursor: "none",
  //   color: "darkGrey",
  //   transition: "all 300ms ease",
  // };

  // const watchedMovieHighlightEffect = movieInWatchedList
  //   ? watchedMovieEffect
  //   : "";

  return (
    <div className="watched-outter-wrapper">
      <h1>Watched</h1>
      {watched.length > 0 ? (
        <div className="watched-inner-wrapper">
          {watched.map((movie) => (
            <div className="watched-movie-wrapper">
              <h2 className="watched-movie">{movie.title}</h2>
              <img
                className="watched-movie-image"
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                alt={movie.title + "poster"}
              />
            </div>
          ))}
        </div>
      ) : (
        <h2>There are currently no movies in your watched list</h2>
      )}
    </div>
  );
}
