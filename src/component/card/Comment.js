// import
import Card from "./Card";

export default function Comment({
  comment,
  editedInputHandler,
  UpdateComment,
  // submitReplyHandler,
  likeHandler,
  unLikehandler,
  deleteHandler,

  submitHandler,
  updateInput,
  replyInput,
  submitReply,
}) {
  return (
    <div className="comment-container">
      <Card
        comment={comment}
        likeHandler={likeHandler}
        unLikehandler={unLikehandler}
        deleteHandler={deleteHandler}
        // replyMessageHandler={replyMessageHandler}
        submitHandler={submitHandler}
        editedInputHandler={editedInputHandler}
        UpdateComment={UpdateComment}
        updateInput={updateInput}
        replyInput={replyInput}
        submitReply={submitReply}
      />
      <div className="reply-container">
        {comment.allReplies.map((reply) => (
          <Card
            key={reply.id}
            comment={comment}
            likeHandler={likeHandler}
            unLikehandler={unLikehandler}
            deleteHandler={deleteHandler}
            // replyMessageHandler={replyMessageHandler}
            submitHandler={submitHandler}
            editedInputHandler={editedInputHandler}
            UpdateComment={UpdateComment}
            updateInput={updateInput}
            replyInput={replyInput}
            submitReply={submitReply}
          />
        ))}
      </div>
    </div>
  );
}
