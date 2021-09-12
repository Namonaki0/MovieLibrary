import React, { useState, useEffect } from "react";
// import Modal from "react-modal";

const MovieTemplate = ({
  movie,
  title,
  src,
  overview,
  release_date,
  vote_average,
}) => {
  // const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div
        className="movie-container"
        key={movie.id}
        // onClick={() => setOpenModal(true)}
      >
        <img className="movie-image" src={src} alt={title + "poster"} />
        <h1>{title}</h1>
        <div className="movie-overview">{overview}</div>
        <div className="movie-release-date">Release date: {release_date}</div>
        <div className="movie-rating">Rating: {vote_average}</div>
      </div>

      {/* <Modal
        isOpen={openModal}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setOpenModal(false)}
        className="new-modal"
      >
        <h1>{movie.title}</h1>
      </Modal> */}
    </div>
  );
};
export default MovieTemplate;
