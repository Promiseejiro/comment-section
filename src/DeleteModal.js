import React from "react";

// components
import Button from "./component/Button";

export default function ({ deleteHandler, calcelDelete }) {
  return (
    <div className="delete-Modal-container">
      <div className="delete-Modal">
        <h3>Delete comment</h3>
        <p>
          Are you sure you want to remove this comment ? This will remove the
          comment and cant be undone
        </p>
        <div className="modal-delete-btn-container">
          <Button
            btnStyle={"modal-btn cancel-btn"}
            btnText={"no cancel"}
            btnFunction={calcelDelete}
          />
          <Button
            btnStyle={"modal-btn delete-btn"}
            btnText={"delete-btn"}
            btnFunction={deleteHandler}
          />
        </div>
      </div>
    </div>
  );
}
