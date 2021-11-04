import React from "react";
import Translate from "react-translate-component";

export default function clearWatchedModal({
  clearModal,
  setClearModal,
  clearWatchedLocalStorage,
}) {
  return (
    <div
      className="clear-watched-modal-wrapper"
      style={{ display: clearModal ? "block" : "" }}
    >
      <div className="clear-watched-modal-inner">
        <Translate content="areYouSure" component="h3" />
        <div className="watched-modal-btn-wrapper">
          <button className="clear-yes-btn" onClick={clearWatchedLocalStorage}>
            <Translate content="yes" />
          </button>
          <button className="clear-no-btn" onClick={() => setClearModal(null)}>
            <Translate content="no" />
          </button>
        </div>
        <Translate content="eraseMovies" component="span" />
      </div>
    </div>
  );
}
