import React from "react";

const MovieTemplate = ({ movie }) => {
  return (
    <div className="movie-container" key={movie.id}>
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + "poster"}
      />
      <h1>{movie.title}</h1>
      <div className="movie-overview">{movie.overview}</div>
      <div className="movie-release-date">
        Released:{" "}
        {movie.release_date ? movie.release_date.substring(0, 4) : "N/A"}
      </div>
      <div className="movie-rating">Rating: {movie.vote_average}</div>
    </div>
  );
};
export default MovieTemplate;
