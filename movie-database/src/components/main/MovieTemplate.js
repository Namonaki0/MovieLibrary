import React from "react";

const MovieTemplate = ({
  movie,
  title,
  src,
  overview,
  release_date,
  vote_average,
}) => {
  return (
    <div className="movie-container" key={movie.id}>
      <img className="movie-image" src={src} alt={title + "poster"} />
      <h1>{title}</h1>
      <div className="movie-overview">{overview}</div>
      <div className="movie-release-date">Release date: {release_date}</div>
      <div className="movie-rating">Rating: {vote_average}</div>
    </div>
  );
};
export default MovieTemplate;
