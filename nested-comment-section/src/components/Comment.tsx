import React, { useState } from "react";
import Button from "./Button";
import "../styles/comment.css";
import { Comments, CommentType } from "../CommentSection";

type CommentProps = {
  comment: string;
  votes: number;
  date: string;
  time: string;
  index: number;
  upVoteClick: () => void;
  downVoteClick: () => void;
  deleteClick: () => void;
  submitReply: ( reply: string) => void;
  updateComment: ( reply: string) => void;
};

const Comment = (props: CommentProps) => {
  const {
    comment,
    date,
    time,
    votes,
    index,
    upVoteClick,
    downVoteClick,
    deleteClick,
    submitReply,
    updateComment,
  } = props;
  const [isReplyEnabled, setIsReplyEnabled] = useState(false);
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [replyComment, setReplyComment] = useState("");
  const [editedComment, setEditedComment] = useState("");

  const editClick = () => {
    setEditedComment(comment);
    setIsReplyEnabled(false);
    setIsEditEnabled(true);
  };

  const replyClick = () => {
    setIsEditEnabled(false);
    setIsReplyEnabled(true);
  };

  return (
    <div >
      <div>
        {comment}
        <div>Votes : {votes}</div>
        <div>
          {date}, {time}
        </div>
        <div className="comment-btn-container">
          <Button text={"👍"} onClick={() => upVoteClick()} />
          <Button text={"👎"} onClick={() => downVoteClick()} />
          <Button text="Reply" onClick={replyClick} />
          <Button text={"Edit"} onClick={editClick} />
          <Button text={"Delete"} onClick={() => deleteClick()} />
        </div>
      </div>
      {isReplyEnabled && (
        <>
          <input
            className="reply-comment-input"
            value={replyComment}
            onChange={(e) => setReplyComment(e.target.value)}
          />
          <Button
            text="Submit Reply"
            onClick={() => {
              setIsReplyEnabled(false);
              setReplyComment("");
              submitReply( replyComment);
            }}
          />
        </>
      )}
      {isEditEnabled && (
        <div>
          <input
            className="reply-comment-input"
            value={editedComment}
            onChange={(e) => setEditedComment(e.target.value)}
          />
          <Button
            text="Update Comment"
            onClick={() => {
              setIsEditEnabled(false);
              setEditedComment("");
              updateComment( editedComment);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Comment;
