import { useState } from "react";

// useravatar
import image from "../../images/avatars/image-juliusomo.png";

// css
import "./comment-form.css";

export default function CommentForm({
  submitCommentHandler,
  inputHandler,
  commentInput,
}) {

  const [comment, setComment] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    submitCommentHandler(comment);
    setComment("");
  }

  // render
  return (
    <form action="" onSubmit={submitHandler}>
      <div>
        <div className="form-control comment-section">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            name="first"
          ></textarea>
          {/* <textarea
            value={commentInput}
            onChange={inputHandler}
            name="first"
          ></textarea> */}
          <div>
            <img className="user-avartar" src={image} alt="" />
            <button className="btn btn-submit">submit</button>
          </div>
        </div>
      </div>
    </form>
  );
}
