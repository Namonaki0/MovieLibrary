import { useState, useEffect, React } from "react";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import firebase from "../utils/firebase";
import counterpart from "counterpart";
import Translate from "react-translate-component";
import en from "../../languages/en";
import es from "../../languages/es";
import jp from "../../languages/jp";

export const Comments = () => {
  const [userInfo, setUserInfo] = useState([]);

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

  return (
    <div className="comments-outter-wrapper">
      <Translate
        content="comments"
        component="h1"
        onClick={(e) => console.log(e.target)}
      />
      {/* <h1>Comments</h1> */}
      <div className="comments-inner-wrapper">
        {userInfo &&
          userInfo.map((comment, index) => (
            <div className="comment" key={index}>
              <div className="comment-top">
                <h2>{comment.title} </h2>
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
              </div>

              <p className="comment-paragraph">"{comment.comment}"</p>
              <div className="comment-bottom-section">
                <span>- {comment.user}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Comments;
