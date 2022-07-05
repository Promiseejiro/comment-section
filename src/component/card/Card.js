// imports
import { useContext, useState } from "react";
import ReplyAndEditAndDelete from "../Reply-and-delete-and-edit-component/Reply-and-delete-and-edit-Component";
import DeleteModal from "../../DeleteModal";
import LikeContainer from "../LikesComponent/LikeContainer";
import Form from "../Form/Form";

// css file
import "./card.css";
export default function Card({
  comment,
  submitCommentHandler,
  deleteHandler,
  UpdateComment,
  addLike,
  removeLike,
}) {
  // state
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const [deleteModalPage, setDeleteModalPage] = useState(false);
  const [disable, setDisable] = useState(false);
  // function
  const displayReplyForm = () => {
    setShowReplyForm(true);
  };

  const DisplayEditForm = () => {
    setShowEditForm(true);
    setDisableBtn(true);
    setDisable(true);
  };

  const submitReply = (value) => {
    submitCommentHandler(value, comment.id);
    setShowReplyForm(false);
  };

  const deletecomment = () => {
    deleteHandler(comment.id);
    setDeleteModalPage(false);
  };

  const editHandler = (value) => {
    UpdateComment(comment.id, value);
    setShowEditForm(false);
    setDisableBtn(false);
    setDisable(false);
  };

  const cancelOperation = () => {
    setShowEditForm(false);
    setShowReplyForm(false);
    setDisableBtn(false);
    setDisable(false);
    console.log("hey");
  };

  const likeHandler = () => {
    addLike(comment.id);
  };

  const unLikeHandler = () => {
    removeLike(comment.id);
  };

  return (
    <div className="card-container">
      <div className="comment-Card">
        <div className="card">
          <img
            className="user-avartar"
            src={comment.userAvatar}
            alt={comment.id}
          />
          <p className="time">
            {comment.user === "juliusomo" && <span className="you">you</span>}
            {comment.timeCommented}
          </p>
          <h3 className="user-name"> {comment.user}</h3>
          <div className="like-btn-continer">
            <LikeContainer
              handleLike={likeHandler}
              unLikeHandler={unLikeHandler}
              comment={comment}
            />
          </div>
          <div className="comment-message-container">
            {!showEditForm && (
              <p className="comment-message">{comment.commentMessage} </p>
            )}
            <div className="edit-form">
              {showEditForm && (
                <div>
                  <Form
                    btnText="Update"
                    formControlStyle="Edit-form-control"
                    submitCommentHandler={editHandler}
                    editValue={comment.commentMessage}
                    editing={true}
                    cancelOperation={cancelOperation}
                    cancel={true}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="btn-delete-edit-reply-container">
            <ReplyAndEditAndDelete
              comment={comment}
              displayReplyForm={displayReplyForm}
              deletecomment={() => {
                setDeleteModalPage(true);
              }}
              disableBtn={disableBtn}
              DisplayEditForm={DisplayEditForm}
              disable={disable}
            />
          </div>
        </div>
      </div>
      <div className="reply-form">
        {showReplyForm && (
          <Form
            btnText="Reply"
            submitCommentHandler={submitReply}
            formControlStyle="comment-form-control"
            cancel={true}
            editValue=""
            cancelOperation=""
            editing=""
          />
        )}
      </div>

      {deleteModalPage && (
        <DeleteModal
          deleteHandler={deletecomment}
          calcelDelete={() => {
            setDeleteModalPage(false);
          }}
        />
      )}
    </div>
  );
}
