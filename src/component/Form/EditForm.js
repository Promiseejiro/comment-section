import { useContext, react } from "react";

// component
import Button from "../Button";
// useravatar
import image from "../../images/avatars/image-juliusomo.png";

export default function EditForm({
  hideshowReplyForm,
  editCommentMessageHandler,
  submitHandler,
  text,
}) {
  return (
    <div className="form-control comment-section">
      <textarea
        placeholder="Add a comment"
        name=""
        id=""
        onChange={editCommentMessageHandler}
      ></textarea>
      <div>
        <img className="user-avartar" src={image} alt="" />
        <div onClick={hideshowReplyForm}>
          <Button
            btnStyle={"submit-btn"}
            btnText={text}
            btnFunction={submitHandler}
          />
        </div>
      </div>
    </div>
  );
}
