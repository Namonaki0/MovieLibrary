import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ModalTemplate(movie) {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Modal
        isOpen={openModal}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setOpenModal(false)}
        className="new-modal"
      >
        <img
          className="movie-image"
          src={movie.src}
          alt={movie.title + "poster"}
        />
        <h1>{movie.title}</h1>
        <p className="movie-overview">{movie.overview}</p>
        <button onClick={setOpenModal(false)}>Close</button>
      </Modal>
    </div>
  );
}
