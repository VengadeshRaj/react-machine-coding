import React, { useState } from "react";
import Button from "./components/Button";
import Comment from "./components/Comment";

export interface CommentType {
  index: number;
  commentMessage: string;
  votes: number;
  date: string;
  time: string;
}

export interface Comments extends CommentType {
  replies: CommentType[];
}

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

  const upVote = (index: number) => {
    const updatedComments = comments.map((data, i) => {
      if (i == index) {
        data.votes = data.votes + 1;
      }

      return data;
    });
    setComments([...updatedComments]);
  };

  const downVote = (index: number) => {
    const updatedComments = comments.map((data, i) => {
      if (i == index) {
        data.votes = data.votes - 1;
      }

      return data;
    });
    setComments([...updatedComments]);
  };

  const upVoteReply = (commentIndex: number, replyIndex: number) => {
    const newComments = new Array(...comments);

    newComments[commentIndex].replies[replyIndex].votes =
      newComments[commentIndex].replies[replyIndex].votes + 1;

    setComments([...newComments]);
  };

  const downVoteReply = (commentIndex: number, replyIndex: number) => {
    const newComments = new Array(...comments);

    newComments[commentIndex].replies[replyIndex].votes =
      newComments[commentIndex].replies[replyIndex].votes - 1;

    setComments([...newComments]);
  };

  const deleteComment = (index: number) => {
    const updatedComments = comments.filter((_, i) => i != index);
    setComments([...updatedComments]);
  };

  const addReply = (index: number, reply: string) => {
    const updatedComments = comments.map((data, i) => {
      if (i == index) {
        data.replies = [
          ...data.replies,
          {
            index: data.replies.length,
            commentMessage: reply,
            votes: 0,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
          },
        ];
      }

      return data;
    });
    setComments([...updatedComments]);
  };

  const editComment = (index: number, reply: string) => {
    const updatedComments = comments.map((data, i) => {
      if (i == index) {
        data.commentMessage = reply;
      }

      return data;
    });
    setComments([...updatedComments]);
  };

  const deleteReply = (commentIndex: number, replyIndex: number) => {
    const newComments = new Array(...comments);

   newComments[commentIndex].replies =  newComments[commentIndex].replies.filter((_,index)=>index!=replyIndex)

    setComments([...newComments]);
  };

  const editReply = (
    commentIndex: number,
    replyIndex: number,
    editedReply: string
  ) => {

    const newComments = new Array(...comments);

    newComments[commentIndex].replies[replyIndex].commentMessage = editedReply

    setComments([...newComments]);
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
        {comments.map((c, commentIndex) => (
          <>
          <div className="comment-container">
            <Comment
              comment={c.commentMessage}
              votes={c.votes}
              date={c.date}
              time={c.time}
              index={commentIndex}
              upVoteClick={() => upVote(commentIndex)}
              downVoteClick={() => downVote(commentIndex)}
              deleteClick={() => deleteComment(commentIndex)}
              submitReply={( reply) => addReply(commentIndex, reply)}
              updateComment={(reply) => editComment(commentIndex, reply)}
            />
            
            {c.replies.map((r, replyIndex) => (
                <div className="reply-container">
              <Comment
                comment={r.commentMessage}
                votes={r.votes}
                date={r.date}
                time={r.time}
                index={replyIndex}
                upVoteClick={() => upVoteReply(commentIndex, replyIndex)}
                downVoteClick={() => downVoteReply(commentIndex, replyIndex)}
                deleteClick={() => deleteReply(commentIndex, replyIndex)}
                submitReply={(reply) => addReply(commentIndex, reply)}
                updateComment={( reply) =>
                  editReply(commentIndex, replyIndex, reply)
                }
              />
              </div>
              
            ))}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default NestedCommentSection;
