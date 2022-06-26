// useravatar
import image from "../../images/avatars/image-juliusomo.png";

// css
import "./comment-form.css";

export default function CommentForm({
  submitCommentHandler,
  inputHandler,
  commentInput,
}) {
  return (
    <form action="" onSubmit={submitCommentHandler}>
      <div>
        <div className="form-control comment-section">
          <textarea
            value={commentInput}
            onChange={inputHandler}
            name="first"
          ></textarea>
          <div>
            <img className="user-avartar" src={image} alt="" />
            <button className="btn btn-submit">submit</button>
          </div>
        </div>
      </div>
    </form>
  );
}
