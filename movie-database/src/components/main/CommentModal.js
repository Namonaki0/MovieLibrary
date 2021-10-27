import { AiOutlineCloseCircle } from "react-icons/ai";

const CommentModal = ({
  setComments,
  setUsername,
  commentWindow,
  movieTitle,
  setCommentWindow,
  formSubmit,
  commentMessage,
  setCommentMessage,
  commentMessageDisplay,
  setCommentMessageDisplay,
}) => {
  return (
    <div
      className="comment-window-wrapper"
      style={{
        display: commentWindow ? "grid" : "none",
      }}
    >
      <form onSubmit={formSubmit} className="form">
        <AiOutlineCloseCircle
          className="comment-window-close-icon"
          onClick={() => {
            setCommentWindow(!commentWindow);
            setCommentMessage(null);
          }}
        />

        <span
          className="comment-message"
          style={{
            display: commentMessageDisplay ? "grid" : "none",
          }}
        >
          {commentMessage}
        </span>

        <span className="comment-window-movie-title">{movieTitle}</span>
        <label for="comment">comment</label>
        <input
          type="text"
          name="comment"
          className="nameInput"
          placeholder="name..."
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setCommentMessage(null)}
        />
        <input
          type="text"
          name="comment"
          className="commentInput"
          placeholder="comment..."
          autoComplete="off"
          onChange={(e) => setComments(e.target.value)}
          onFocus={() => setCommentMessage(null)}
        />
        <button
          type="submit"
          onClick={() => {
            setCommentMessage("Thank you, comment posted!");
            setCommentMessageDisplay(!commentMessageDisplay);
            setTimeout(() => {
              setCommentWindow(!commentWindow);
              setCommentMessageDisplay(null);
            }, 2000);
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default CommentModal;
