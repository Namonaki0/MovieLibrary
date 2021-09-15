import { useState, useEffect } from "react";

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
  }, [userInfo]);

  return (
    <div className="comments-outter-wrapper">
      <h1>Comments</h1>
      <div className="comments-inner-wrapper">
        {userInfo.map((comment) => (
          <div className="comment">
            <h2>{comment.user}</h2>
            <p>{comment.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
