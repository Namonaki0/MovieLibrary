import { useState, useEffect } from "react";
import {
  AiOutlineClockCircle,
  AiOutlineCalendar,
  AiOutlineDelete,
} from "react-icons/ai";
import { BiLike, BiDislike } from "react-icons/bi";
import firebase from "../utils/firebase";

const Comments = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(async () => {
    const commentRef = firebase.database().ref("Comments");
    commentRef.on("value", (comment) => {
      const allComments = comment.val();
      const userInfo = [];
      for (let comment in allComments) {
        userInfo.push({ comment, ...allComments[comment] });
        // console.log(userInfo);
      }
      setUserInfo(userInfo);
      // console.log(allComments);
    });

    //? JSON-SERVER ----------------
    // const uri =
    //   "https://moviedatabase-74d8e-default-rtdb.europe-west1.firebasedatabase.app/";
    // try {
    //   const res = await fetch(uri);
    //   const userInfo = await res.json();
    //   setUserInfo(userInfo);
    // } catch (err) {
    //   console.error("nothing found", err);
    // }
    //? END OF JSON-SERVER --------------
  }, []);

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
                <BiLike className="like-icon" />
                <BiDislike className="deslike-icon" />
                <button
                  className="delete-btn"
                  onClick={(e) => deleteComment(e)}
                >
                  <AiOutlineDelete />
                  delete{" "}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
