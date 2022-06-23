// useravatar
import image from "../../images/avatars/image-juliusomo.png";

// css
import "./comment-form.css";
// component
import Button from "../Button";

// context
import CommentContext from "../../CommentContext";
export default function CommentForm({
  commentMessageHandler,
  submitCommentHandler,
}) {
  return (
    <div className="form-control comment-section">
      <textarea
        placeholder="Add a comment"
        name=""
        id=""
        onChange={commentMessageHandler}
      ></textarea>
      <div>
        <img className="user-avartar" src={image} alt="" />
        <Button
          btnStyle={"submit-btn"}
          btnText="Send"
          btnFunction={submitCommentHandler}
        />
      </div>
    </div>
  );
}
