import { useState, useEffect, React } from "react";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import { IoMdThumbsUp } from "react-icons/io";
import firebase from "../utils/firebase";
import { CommentsHandler, likeHandler } from "./CommentsHandler";

export const Comments = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [likeCounter, setLikeCounter] = useState(0);

  useEffect(async () => {
    const commentRef = firebase.database().ref("Comments");
    commentRef.on("value", (comment) => {
      const allComments = comment.val();
      const userInfo = [];
      for (let comment in allComments) {
        userInfo.push({ comment, ...allComments[comment] });
      }
      setUserInfo(userInfo);
      localStorage.setItem("comments", JSON.stringify(userInfo));
    });
  }, []);

  // const deleteComment = (e) => {
  //   const commentRef = firebase
  //     .database()
  //     .ref("Comments")
  //     .child(e.target.value);
  //   commentRef.remove();
  // };

  useEffect(() => {
    const likeBtns = document.querySelectorAll(".like-icon");
    const likeNum = document.querySelectorAll(".like-reaction-number");
    likeBtns.forEach((comment, i) => {
      comment.setAttribute("id", `${i++}`);
      // console.log(comment);
    });
    likeNum.forEach((like, i) => {
      like.setAttribute("id", `${i++}`);
      // console.log(like);
    });
    // console.log(likeNum);
  });

  const commentTarget = (e) => {
    const likeNum = document.querySelectorAll(".like-reaction-number");

    likeNum.forEach((like) => {
      console.log(like);
    });
  };

  return (
    <div className="comments-outter-wrapper">
      <h1>Comments</h1>
      <div className="comments-inner-wrapper">
        {userInfo &&
          userInfo.map((comment, index) => (
            <div className="comment" key={index}>
              <h2>
                {comment.title}{" "}
                <div className="date-time-wrapper">
                  <span className="date-span">
                    <AiOutlineCalendar />
                    {comment.date}
                  </span>
                  <span className="time-span">
                    <AiOutlineClockCircle />
                    {comment.time}
                  </span>
                </div>
              </h2>
              <p className="comment-paragraph">"{comment.comment}"</p>
              <div className="comment-bottom-section">
                <span>- {comment.user}</span>
                <div className="reaction-pannel">
                  <div className="reaction-btn-wrapper">
                    <BiLike
                      className="like-icon"
                      onClick={(e) => commentTarget(e)}
                    />
                    <span className="like-reaction-number">0</span>
                  </div>
                  <div className="reaction-btn-wrapper">
                    <BiDislike
                      className="deslike-icon"
                      onClick={() => console.log("disliked")}
                    />
                    <span className="dislike-reaction-number">0</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
