import React from "react";

// components
import Button from "./component/button/Button";

export default function DeleteModal({ deleteHandler, calcelDelete }) {
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
            btnText={"No cancel"}
            btnFunction={calcelDelete}
          />
          <Button
            btnStyle={"modal-btn delete-modal-btn"}
            btnText={"Delete"}
            btnFunction={deleteHandler}
          />
        </div>
      </div>
    </div>
  );
}
