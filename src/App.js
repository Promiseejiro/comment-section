// import
import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import juliussomoAvatar from "./images/avatars/image-juliusomo.png";
import Comments from "./component/card/Comments";
import CommentForm from "./component/Form/CommentForm";
import { Data } from "./data/Data";

export default function App() {
  //iniTialization

  const unique_id = uuid();

  // state
  const [commentInput, setCommentInput] = useState("");
  const [updateInput, setUpdateInput] = useState("");
  const [comments, setComments] = useState([]);

  // functions
  const inputHandler = (e) => {
    setCommentInput(e.target.value);
  };

  const submitCommentHandler = (e) => {
    e.preventDefault();
    setComments([
      {
        id: unique_id,
        userAvatar: juliussomoAvatar,
        user: "juliusomo",
        timeCommented: "2 week ago",
        commentMessage: commentInput,
        like: 0,
        allReplies: [],
      },
      ...comments,
    ]);
    setCommentInput("");
    saveToLoacalStorage();
  };

  const editedInputHandler = (e) => {
    setUpdateInput(e.target.value);
  };

  const UpdateComment = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id
          ? { ...comment, commentMessage: updateInput }
          : comment
      )
    );
    setUpdateInput("");
  };
  const replyInput = () => {};

  const submitReply = () => {
    alert("Submission of reply has not been set");
  };

  const deleteHandler = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
    saveToLoacalStorage();
  };

  const likeHandler = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, like: comment.like + 1 } : comment
      )
    );
  };

  const unLikehandler = (id) => {
    setComments(
      comments.map((comment) =>
        comment.id === id ? { ...comment, like: comment.like - 1 } : comment
      )
    );
  };

  // save to local storage
  const saveToLoacalStorage = () => {
    localStorage.setItem("comments", JSON.stringify(comments));
  };

  const getCommentsFromLocalStorage = () => {
    if (localStorage.getItem("comments") === null) {
      localStorage.setItem("comments", JSON.stringify(comments));
    } else {
      const localStoreData = JSON.parse(localStorage.getItem("comments"));
      setComments(localStoreData);
    }
  };

  useEffect(() => {}, [comments]);

  useEffect(() => {
    getCommentsFromLocalStorage();
  }, []);

  return (
    <div className="main-container">
      <div className="comment-container">
        <Comments
          comments={comments}
          likeHandler={likeHandler}
          deleteHandler={deleteHandler}
          unLikehandler={unLikehandler}
          editedInputHandler={editedInputHandler}
          UpdateComment={UpdateComment}
          updateInput={updateInput}
          replyInput={replyInput}
          submitReply={submitReply}
        />

        <CommentForm
          submitCommentHandler={submitCommentHandler}
          inputHandler={inputHandler}
          commentInput={commentInput}
        />
      </div>
    </div>
  );
}
