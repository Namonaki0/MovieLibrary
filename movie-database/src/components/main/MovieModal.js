import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function MovieModal({
  movieModalInfo,
  movie,
  commentWindow,
  setCommentWindow,
}) {
  return (
    <div
      style={{ display: movieModalInfo ? "block" : "none" }}
      className="movie-modal-overlay"
    >
      <div className="movie-modal-wrapper">
        <AiOutlineCloseCircle
          className="comment-window-close-icon"
          onClick={() => setCommentWindow(!commentWindow)}
        />
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
