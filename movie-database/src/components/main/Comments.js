import { useState, useEffect } from "react";
import { AiOutlineClockCircle, AiOutlineCalendar } from "react-icons/ai";

const Comments = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(async () => {
    const uri = "http://localhost:3000/comments";

    try {
      const res = await fetch(uri);
      const userInfo = await res.json();
      setUserInfo(userInfo);
    } catch (err) {
      console.error("nothing found", err);
    }
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
            <span>- {comment.user}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
