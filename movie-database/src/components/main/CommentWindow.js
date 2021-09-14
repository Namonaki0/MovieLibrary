import { AiOutlineCloseCircle } from "react-icons/ai";

const CommentWindow = ({ data }) => {
  return (
    <div
      style={{ display: "none" }}
      className={data.commentWindow ? "comment-window-wrapper" : "none"}
    >
      <form>
        <AiOutlineCloseCircle className="comment-window-close-icon" />
        <label for="comment">comment</label>
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="enter comment..."
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default CommentWindow;
