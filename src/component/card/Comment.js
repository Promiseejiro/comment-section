// import
import Card from "./Card";

export default function Comment({
  comment,
  editCommentMessageHandler,
  submitReplyHandler,
  likeHandler,
  unLikehandler,
  deleteHandler,
  editHandler,
  replyMessageHandler,
  submitHandler,
}) {
  return (
    <div>
      <Card
        comment={comment}
        editCommentMessageHandler={editCommentMessageHandler}
        // submitReplyHandler={submitReplyHandler}
        likeHandler={likeHandler}
        unLikehandler={unLikehandler}
        deleteHandler={deleteHandler}
        editHandler={editHandler}
        replyMessageHandler={replyMessageHandler}
        submitHandler={submitHandler}
      />
    </div>
  );
}
