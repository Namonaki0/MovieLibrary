import { AiOutlineCloseCircle } from "react-icons/ai";
import counterpart from "counterpart";
import Translate from "react-translate-component";

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
  //? TOOLTIP TRANSLATION VARIABLES ------------------
  const namePlaceholder = counterpart.translate("name");
  const commentPlaceholder = counterpart.translate("enterComment");
  //? TOOLTIP TRANSLATION VARIABLES ------------------
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
        <Translate content="comment" component="label" />

        <input
          type="text"
          name="comment"
          className="nameInput"
          placeholder={namePlaceholder}
          autoComplete="off"
          onChange={(e) => setUsername(e.target.value)}
          onFocus={() => setCommentMessage(null)}
        />
        <input
          type="text"
          name="comment"
          className="commentInput"
          placeholder={commentPlaceholder}
          autoComplete="off"
          onChange={(e) => setComments(e.target.value)}
          onFocus={() => setCommentMessage(null)}
        />
        <button
          type="submit"
          onClick={() => {
            setCommentMessage(<Translate content="commentPosted" />);
            setCommentMessageDisplay(!commentMessageDisplay);
            setTimeout(() => {
              setCommentWindow(!commentWindow);
              setCommentMessageDisplay(null);
            }, 2000);
          }}
        >
          <Translate content="submit" />
        </button>
      </form>
    </div>
  );
};

export default CommentModal;
