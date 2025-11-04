import React, { useState } from "react";
import Button from "./Button";
import "../styles/comment.css";
import { Comments } from "../CommentSection";

type CommentProps = {
  comments: Comments[];
  comment: string;
  setComments: any;
  votes: number;
  date: number;
  time: number;
  index: number;
};

const Comment = (props: CommentProps) => {
  const { comment, votes, date, time, index, comments, setComments } = props;
  const [replyComment, setReplyComment] = useState("");
  const [isReplyEnabled, setIsReplyEnabled] = useState(false);
  const [isEditEnabled, setIsEditEnabled] = useState(false);

  const replyClick = () => {
    setIsEditEnabled(false);
    setIsReplyEnabled(true);
  };

  const editClick = () => {
    setIsEditEnabled(true);
    setIsReplyEnabled(false);
  };

  const submitReplyClick = () => {
    const updatedComments = comments.map((data, i) => {
      if (i == index) {
        data.replies = [
          ...data.replies,
          {
            index: data.replies.length,
            commentMessage: replyComment,
            vote: 0,
            date: new Date().getDate(),
            time: new Date().getTime(),
          },
        ];
      }

      return data;
    });
    setReplyComment("");
    setIsReplyEnabled(false);
    setComments([...updatedComments]);
  };

  return (
    <div className="comment-container">
      <div>
        {comment}
        <div>Votes : {votes}</div>
        <div>
          {date}, {time}
        </div>
        <div className="comment-btn-container">
          <Button text={"👍"} />
          <Button text={"👎"} />
          <Button text="Reply" onClick={replyClick} />
          <Button text={"Edit"} onClick={editClick} />
          <Button text={"Delete"} />
        </div>
      </div>
      {isReplyEnabled && (
        <>
          <input
            className="reply-comment-input"
            value={replyComment}
            onChange={(e) => setReplyComment(e.target.value)}
          />
          <Button text="Submit Reply" onClick={submitReplyClick} />
        </>
      )}
      {isEditEnabled && (
        <div>
          <input className="reply-comment-input" />
          <Button text="Update Comment" />
        </div>
      )}
      
    </div>
  );
};

export default Comment;
