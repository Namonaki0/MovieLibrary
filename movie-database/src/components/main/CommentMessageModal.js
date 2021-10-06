import React from "react";

export default function CommentMessageModal({
  commentMessage,
  setCommentMessage,
}) {
  return (
    <div
      className="comment-message-overlay"
      style={{ display: commentMessage ? "grid" : "" }}
    >
      <div className="comment-message-outside-wrapper">
        <span>comment sent...</span>
      </div>
    </div>
  );
}
