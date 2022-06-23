// import
import { useContext, useState, useEffect } from "react";
import Comment from "./Comment";
import Card from "./Card";

export default function Comments({
  comments,
  editCommentMessageHandler,
  likeHandler,
  unLikehandler,
  deleteHandler,
  editHandler,
  replyMessageHandler,
  submitHandler,
}) {
  return (
    <section>
      {comments.map((comment) => (
        <div className="comment-card-container" key={comment.id}>
          <Comment
            comment={comment}
            editCommentMessageHandler={editCommentMessageHandler}
            likeHandler={likeHandler}
            unLikehandler={unLikehandler}
            deleteHandler={deleteHandler}
            editHandler={editHandler}
            replyMessageHandler={replyMessageHandler}
            submitHandler={submitHandler}
          />
          {/* how filter through the replies and render it  */}
          {comment.AllReplies.map((reply, index) => (
            <div className="reply-container" key={index}>
              <Card comment={reply} />
            </div>
          ))}
        </div>
      ))}
    </section>
  );
}
