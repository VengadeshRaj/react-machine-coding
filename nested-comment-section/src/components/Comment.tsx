import React from "react";
import Button from "./Button";
import '../styles/comment.css'

const Comment = () => {
  return (
    <div className="comment-container">
      <div>
        This is sample comment
        <div>Votes : 5</div>
        <div>03/03/2025, 03:00 PM</div>
        <div className="comment-btn-container">
          <Button text={"👍"} />
          <Button text={"👎"} />
          <Button text="Reply" />
          <Button text={"Edit"} />
          <Button text={"Delete"} />
        </div>
      </div>
      <input className="reply-comment-input"/>
      <Button text="reply"/>
    </div>
  );
};

export default Comment;
