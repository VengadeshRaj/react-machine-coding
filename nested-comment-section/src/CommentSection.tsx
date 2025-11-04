import React, { useState } from "react";
import Comment from "./components/Comment";
import Button from "./components/Button";

export interface CommentType {
  index: number;
  commentMessage: string;
  votes: number;
  date: string;
  time: string;
}

export interface Comments extends CommentType{
  replies: CommentType[];
};

const NestedCommentSection = () => {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState<Comments[]>([]);

  const addCommentClick = () => {
    if (newComment) {
      setComments((prev) => [
        ...prev,
        {
          index: prev.length,
          commentMessage: newComment,
          votes: 0,
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          replies: [],
        },
      ]);
      setNewComment("");
    }
  };

  return (
    <div className="container">
      <div>
        <h1>Nested Comment System</h1>
        <div className="input-sec-container">
          <input
            type="text"
            className="comment-input"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <Button text="Add Comment" onClick={addCommentClick} />
        </div>
      </div>
      <div>
        {comments.map((c, index) => (
          <Comment
            comments= {comments}
            comment={c.commentMessage}
            votes={c.votes}
            date={c.date}
            time={c.time}
            index={index}
            setComments={setComments}
            replies= {c.replies}
          />
        ))}
      </div>
    </div>
  );
};

export default NestedCommentSection;
