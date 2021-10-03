import React from "react";

export default function clearWatchedModal() {
  return (
    <div className="clear-watched-modal-wrapper">
      <div className="clear-watched-modal-inner">
        <h3>Are you sure?</h3>
        <div className="watched-modal-btn-wrapper">
          <button>yes</button>
          <button>no</button>
        </div>
      </div>
    </div>
  );
}
