import React, { useState, useEffect } from "react";
import Modal from "react-modal";

const MovieTemplate = (movie) => {
  return (
    <div>
      <div
        className="movie-container"
        key={movie.id}
        onClick={() => setOpenModal(true)}
      >
        <img
          className="movie-image"
          src={movie.src}
          alt={movie.title + "poster"}
        />
        <h1>{movie.title}</h1>
        <div className="movie-overview">{movie.overview}</div>
        <div className="movie-release-date">
          Release date: {movie.release_date}
        </div>
        <div className="movie-rating">Rating: {movie.vote_average}</div>
      </div>
    </div>
  );
};
export default MovieTemplate;
