// css
import "./editForm.css";
// useravatar
import image from "../../images/avatars/image-juliusomo.png";

export default function EditForm({
  editedInputHandler,
  UpdateComment,
  updateInput,
  text,
  classname,
  reply,
}) {
  return (
    <form onSubmit={UpdateComment}>
      <div className={classname}>
        {reply && <img className="reply-img" src={image} alt="J" />}
        <textarea
          placeholder="Add a comment"
          name=""
          id=""
          onChange={editedInputHandler}
          value={updateInput}
        ></textarea>
        <div>
          <button type="submit" className="btn btn-update">
            {text}
          </button>{" "}
        </div>
      </div>
    </form>
  );
}
