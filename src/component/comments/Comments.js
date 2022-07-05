// import
import Comment from "./Comment";

export default function Comments({
  comments,
  submitCommentHandler,
  UpdateComment,
  deleteHandler,
  addLike,
  removeLike,
}) {
  return (
    <section>
      {comments.map((comment, index) => (
        <div className="comment-card-container" key={index}>
          <Comment
            comment={comment}
            submitCommentHandler={submitCommentHandler}
            UpdateComment={UpdateComment}
            addLike={addLike}
            removeLike={removeLike}
            deleteHandler={deleteHandler}
          />
        </div>
      ))}
    </section>
  );
}
