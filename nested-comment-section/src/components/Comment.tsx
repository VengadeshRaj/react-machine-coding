import React, { useState } from "react";
import Button from "./Button";
import "../styles/comment.css";
import { Comments, CommentType } from "../CommentSection";

type CommentProps = {
  comments: Comments[];
  comment: string;
  setComments: any;
  votes: number;
  date: string;
  time: string;
  index: number;
  replies: CommentType[];
};

const Comment = (props: CommentProps) => {
  const { comment, votes, date, time, index, comments, setComments, replies } =
    props;
  const [replyComment, setReplyComment] = useState("");
  const [updateComment, setUpdateComment] = useState("");
  const [isReplyEnabled, setIsReplyEnabled] = useState(false);
  const [isEditEnabled, setIsEditEnabled] = useState(false);

  const replyClick = () => {
    setIsEditEnabled(false);
    setIsReplyEnabled(true);
  };

  const editClick = () => {
    setUpdateComment(comment);
    setIsEditEnabled(true);
    setIsReplyEnabled(false);
  };

  const editReplyClick=()=>{}

  const submitReplyClick = () => {
    const updatedComments = comments.map((data, i) => {
      if (i == index) {
        data.replies = [
          ...data.replies,
          {
            index: data.replies.length,
            commentMessage: replyComment,
            votes: 0,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
          },
        ];
      }

      return data;
    });
    setReplyComment("");
    setIsReplyEnabled(false);
    setComments([...updatedComments]);
  };

  const getReplies = () =>
    replies.map((r) => (
      <div className="reply-container">
        {r.commentMessage}
        <div>Votes : {r.votes}</div>
        <div>
          {r.date}, {r.time}
        </div>
        <div className="comment-btn-container">
          <Button text={"👍"} />
          <Button text={"👎"} />
          <Button text="Reply" onClick={replyClick} />
          <Button text={"Edit"} onClick={editReplyClick} />
          <Button text={"Delete"} />
        </div>
      </div>
    ));

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
        {getReplies()}
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
          <input
            className="reply-comment-input"
            value={updateComment}
            onChange={(e) => setUpdateComment(e.target.value)}
          />
          <Button text="Update Comment" />
        </div>
      )}
    </div>
  );
};

export default Comment;
