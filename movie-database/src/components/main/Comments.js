import { useState, useEffect } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import firebase from "../utils/firebase";
import ScrollToTop from "./ScrollToTop";

const Comments = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [windowScroll, setWindowScroll] = useState(null);

  useEffect(async () => {
    const commentRef = firebase.database().ref("Comments");
    commentRef.on("value", (comment) => {
      const allComments = comment.val();
      const userInfo = [];
      for (let comment in allComments) {
        userInfo.push({ comment, ...allComments[comment] });
      }
      setUserInfo(userInfo);
    });
  }, []);

  useEffect(() => {
    setWindowScroll(window.scrollTo(100, 100));
  }, []);

  // useEffect(() => {
  //   setWindowScroll(window.scrollTo(0, 0));
  // });

  const deleteComment = (e) => {
    const commentRef = firebase
      .database()
      .ref("Comments")
      .child(e.target.value);
    commentRef.remove();
  };

  return (
    <div className="comments-outter-wrapper">
      <h1>Comments</h1>
      <ScrollToTop />
      <div className="comments-inner-wrapper" onChange={(e) => console.log(e)}>
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
                <BiLike className="like-icon" />
                <BiDislike className="deslike-icon" />
                {/* <button
                  className="delete-btn"
                  onClick={(e) => deleteComment(e)}
                >
                  <AiOutlineDelete />
                  delete{" "}
                </button> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
