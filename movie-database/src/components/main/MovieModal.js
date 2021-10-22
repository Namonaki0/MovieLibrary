import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

export default function MovieModal({
  movieModalInfo,
  setMovieModalInfo,
  modalImage,
  modalTitle,
  modalOverview,
  modalReleaseDate,
}) {
  return (
    <div
      style={{ display: movieModalInfo ? "block" : "none" }}
      className="movie-modal-overlay"
    >
      <div className="movie-modal-wrapper">
        <AiOutlineCloseCircle
          className="modal-close-icon"
          onClick={() => setMovieModalInfo(!movieModalInfo)}
        />
        <div className="movie-modal-info">
          <img
            className="movie-image"
            src={modalImage}
            alt={modalImage + "poster"}
          />
          <div className="movie-modal-secondary-info">
            <h2>{modalTitle}</h2>
            <p>{modalOverview}</p>
            <span>{modalReleaseDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
