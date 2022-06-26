// import
import Comment from "./Comment";

export default function Comments({
  comments,
  likeHandler,
  unLikehandler,
  deleteHandler,
  editedInputHandler,
  UpdateComment,
  updateInput,
  replyInput,
  submitReply,
}) {
  return (
    <section>
      {comments.map((comment, index) => (
        <div className="comment-card-container" key={index}>
          <Comment
            comment={comment}
            likeHandler={likeHandler}
            unLikehandler={unLikehandler}
            deleteHandler={deleteHandler}
            editedInputHandler={editedInputHandler}
            UpdateComment={UpdateComment}
            updateInput={updateInput}
            replyInput={replyInput}
            submitReply={submitReply}
          />
        </div>
      ))}
    </section>
  );
}
