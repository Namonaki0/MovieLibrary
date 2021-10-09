import { AiOutlineCloseCircle } from "react-icons/ai";
// import CommentMessageModal from "./CommentMessageModal";

const CommentModal = ({
  setComments,
  setUsername,
  commentWindow,
  movieTitle,
  setCommentWindow,
  formSubmit,
  movieTitleTarget,
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
          onClick={() => setCommentWindow(!commentWindow)}
        />

        <span className="comment-window-movie-title">{movieTitle}</span>
        <label for="comment">comment</label>
        <input
          type="text"
          name="comment"
          className="nameInput"
          placeholder="name..."
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          name="comment"
          className="commentInput"
          placeholder="comment..."
          autoComplete="off"
          onChange={(e) => setComments(e.target.value)}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CommentModal;
