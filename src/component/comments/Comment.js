// import
import Card from "../card/Card";

export default function Comment({
  comment,
  submitCommentHandler,
  deleteHandler,
  UpdateComment,
  addLike,
  removeLike,
}) {
  return (
    <div className="comment-container">
      <Card
        comment={comment}
        submitCommentHandler={submitCommentHandler}
        UpdateComment={UpdateComment}
        addLike={addLike}
        deleteHandler={deleteHandler}
        removeLike={removeLike}
      />
      <div className="reply-container">
        {comment.allReplies.map((reply) => (
          <Card
            key={reply.id}
            submitCommentHandler={submitCommentHandler}
            comment={reply}
            addLike={addLike}
            deleteHandler={deleteHandler}
            UpdateComment={UpdateComment}
            removeLike={removeLike}
          />
        ))}
      </div>
    </div>
  );
}
