import React from "react";

export default function MovieModal({ movieModalInfo, movie }) {
  return (
    <div
      style={{ display: movieModalInfo ? "block" : "none" }}
      className="movie-modal-overlay"
    >
      <div className="movie-modal-wrapper">
        <div className="movie-modal-info">
          <img
            className="movie-image"
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
            alt={movie.title + "poster"}
          />
          <div className="movie-modal-secondary-info">
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
