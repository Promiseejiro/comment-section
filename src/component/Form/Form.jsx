// useravatar
import image from "../../images/avatars/image-juliusomo.png";
import { useState } from "react";
// css
import "./form.css";

export default function Form({
  cancelOperation,
  cancel,
 editing,
  btnText,
  formControlStyle,
  submitCommentHandler,
  editValue,
}) {
  // initiallization
  const [inputValue, setInput] = useState(editValue);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    submitCommentHandler(inputValue);
    setInput("");
  };

  return (
    <form action="" onSubmit={HandleSubmit}>
      {cancel && (
        <div className="cancel-operation">
          <button onClick={cancelOperation}>X</button>
        </div>
      )}

      <div className={formControlStyle}>
        {!editing && (
          <img className="current-form-user-avarta" src={image} alt="" />
        )}

        <textarea
          value={inputValue}
          onChange={handleChange}
          name="first"
        ></textarea>
        <div className="btn-submit-container">
          <button className="btn btn-submit">{btnText}</button>
        </div>
      </div>
    </form>
  );
}
