import React from "react";

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
        <h3>Are you sure?</h3>
        <div className="watched-modal-btn-wrapper">
          <button className="clear-yes-btn" onClick={clearWatchedLocalStorage}>
            yes
          </button>
          <button className="clear-no-btn" onClick={() => setClearModal(null)}>
            no
          </button>
        </div>
        <span>All movies will be erased from the watched list</span>
      </div>
    </div>
  );
}
