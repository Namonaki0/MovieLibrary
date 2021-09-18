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
        userInfo.push(allComments[comment]);
      }
      setUserInfo(userInfo);
      console.log(userInfo);
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

  return (
    <div className="comments-outter-wrapper">
      <h1>Comments</h1>

      <div className="comments-inner-wrapper">
        {userInfo.map((comment) => (
          <div className="comment">
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
            <cite>"{comment.comment}"</cite>
            <div className="comment-bottom-section">
              <span>- {comment.user}</span>
              <BiLike className="like-icon" />
              <BiDislike className="deslike-icon" />
              <button>
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
