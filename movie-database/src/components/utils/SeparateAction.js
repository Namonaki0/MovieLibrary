import { useEffect } from "react";
import React from "react";
import Comments from "../main/Comments";

export default function SeparateAction({ commentNumber, setCommentNumber }) {
  //   console.log(commentNumber);
  return (
    <div className="comment-number-span">
      <span>{commentNumber}</span>
    </div>
  );
}
