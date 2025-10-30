import React from "react";
import Comment from "./components/Comment";
import Button from "./components/Button";

const NestedCommentSection = () => {
  return (
    <div className="container">
      <div>
        <h1>Nested Comment System</h1>
        <div className="input-sec-container">
          <input type="text" className="comment-input" />
          <Button text="Add Comment" />
        </div>
      </div>
      <div>
        <Comment />
      </div>
    </div>
  );
};

export default NestedCommentSection;
