import { useState, useEffect, useLayoutEffect, React } from "react";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";
import firebase from "../utils/firebase";
import Translate from "react-translate-component";
import {
  lightModeEnabled,
  lightModeDisabled,
} from "../settings/colorSchemeHandler";

export const Comments = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      const commentRef = firebase.database().ref("Comments");

      commentRef.on("value", (comment) => {
        const allComments = comment.val();
        const userInfo = [];
        for (let comment in allComments) {
          userInfo.push({ comment, ...allComments[comment] });
        }
        setUserInfo(userInfo);
      });
    }
    fetchComments();

    //? LIGHTMODE LOCAL-STORAGE CHECKER
    if (localStorage.getItem("lightMode") === "enabled") {
      lightModeEnabled();
    } else {
      lightModeDisabled();
    }
    //? LIGHTMODE LOCAL-STORAGE CHECKER
  }, []);

  useLayoutEffect(() => {
    function commentsArray() {
      const comments = document.querySelectorAll(".comment");
      const commentsPage = document.querySelector(
        "#root > div > div > div.comments-inner-wrapper"
      );
      const lastComment = comments[comments.length - 1];
      if (!lastComment) return;

      commentsPage.scrollTo(0, -2000);
    }

    commentsArray();
  });

  return (
    <div className="comments-outter-wrapper">
      <div className="title-wrapper">
        <Translate content="comments" component="h1" />
      </div>

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
