// import
import Comment from "./Comment";

export default function Comments({
  comments,
  submitCommentHandler,
  UpdateComment,
  deleteCommentHandler,
  addLikeToComment,
  unlilkeComment,
  deleteReplyHandler,
  editReply,
  addLikeToReply,
  unlikeReply,
  nextedReplyNotification,
}) {
  return (
    <section>
      {comments.map((comment, index) => (
        <div className="comment-card-container" key={index}>
          <Comment
            comment={comment}
            submitCommentHandler={submitCommentHandler}
            UpdateComment={UpdateComment}
            addLikeToComment={addLikeToComment}
            unlilkeComment={unlilkeComment}
            deleteCommentHandler={deleteCommentHandler}
            deleteReplyHandler={deleteReplyHandler}
            editReply={editReply}
            addLikeToReply={addLikeToReply}
            unlikeReply={unlikeReply}
            nextedReplyNotification={nextedReplyNotification}
          />
        </div>
      ))}
    </section>
  );
}
