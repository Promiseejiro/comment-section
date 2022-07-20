// import
import Card from "../card/Card";

export default function Comment({
  comment,
  submitCommentHandler,
  deleteCommentHandler,
  UpdateComment,
  editReply,
  addLikeToComment,
  unlilkeComment,
  deleteReplyHandler,
  unlikeReply,
  addLikeToReply,
  nextedReplyNotification,
}) {
  return (
    <div className="comment-container">
      <Card
        comment={comment}
        submitCommentHandler={submitCommentHandler}
        UpdateComment={UpdateComment}
        addLike={addLikeToComment}
        deleteHandler={deleteCommentHandler}
        removeLike={unlilkeComment}
      />
      <div className="reply-container">
        {comment.allReplies.map((reply, index) => (
          <Card
            replyId={comment.id}
            key={index}
            submitCommentHandler={nextedReplyNotification}
            comment={reply}
            addLike={addLikeToReply}
            UpdateComment={editReply}
            removeLike={unlikeReply}
            deleteHandler={deleteReplyHandler}
          />
        ))}
      </div>
    </div>
  );
}
