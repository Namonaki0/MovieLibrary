import React from "react";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "../../languages/en";
import es from "../../languages/es";
import jp from "../../languages/jp";

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
        {/* <h3>Are you sure?</h3> */}
        <div className="watched-modal-btn-wrapper">
          <button className="clear-yes-btn" onClick={clearWatchedLocalStorage}>
            <Translate content="yes" />
            {/* yes */}
          </button>
          <button className="clear-no-btn" onClick={() => setClearModal(null)}>
            <Translate content="no" />
            {/* no */}
          </button>
        </div>
        <Translate content="eraseMovies" component="span" />
        {/* <span>All movies will be erased from the watched list</span> */}
      </div>
    </div>
  );
}
