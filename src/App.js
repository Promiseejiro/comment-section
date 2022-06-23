// import
import React, { useContext, useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import juliussomoAvatar from "./images/avatars/image-juliusomo.png";
import Comments from "./component/card/Comments";
import CommentForm from "./component/Form/CommentForm";
import { Data } from "./data/Data";

export default function App() {
  //iniTialization
  const unique_id = uuid();

  // state
  const [commentmessage, setCommentMessage] = useState("");
  const [comment, setComment] = useState({});
  const [editEdMessage, setEditEdMessage] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [comments, setComments] = useState(Data);

  // functions
  const commentMessageHandler = (e) => {
    const value = e.currentTarget.value;
    setCommentMessage(value);
    if (commentmessage) {
      setComment({
        id: unique_id,
        userAvatar: juliussomoAvatar,
        user: "juliusomo",
        timeCommented: "Time",
        commentMessage: commentmessage,
        like: 0,
        AllReplies: [],
      });
    }
  };

  const submitCommentHandler = (e) => {
    e.currentTarget.parentElement.parentElement.firstElementChild.value = "";
    if (commentmessage) {
      setComments([...comments, comment]);
    } else {
      alert("Type in a omment");
    }
    setCommentMessage("");
  };

  const replyMessageHandler = (e) => {
    const value = e.currentTarget.value;
    setReplyMessage(value);
    console.log(replyMessage);
  };

  // const submitReplyHandler = (id) => {
  //  setComments(comments.map((reply)=>reply.id === id ? { reply.map(()=>) } : reply))
  // };

  const editCommentMessageHandler = (e) => {
    const value = e.currentTarget.value;
    setEditEdMessage(value);
  };

  const editHandler = (id) => {
    if (editEdMessage) {
      setComments(
        comments.map((comment) =>
          comment.id === id
            ? { ...comment, commentMessage: editEdMessage }
            : comment
        )
      );
    }
  };

  const deleteHandler = (id) => {
    setComments(comments.filter((comment) => comment.id !== id));
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
    console.log();
  };

  const getCommentsFromLocalStorage = () => {
    if (localStorage.getItem("comments") === null) {
      localStorage.setItem("comments", JSON.stringify(comments));
    } else {
      const localComments = JSON.parse(localStorage.getItem("comments"));
      setComments(localComments);
      console.log(localComments);
      console.log("h");
    }
  };

  useEffect(() => {
    saveToLoacalStorage();
  }, [comments]);

  useEffect(() => {
    getCommentsFromLocalStorage();
  }, []);

  return (
    <div className="main-container">
      <div className="comment-container">
        <Comments
          comments={comments}
          editCommentMessageHandler={editCommentMessageHandler}
          likeHandler={likeHandler}
          deleteHandler={deleteHandler}
          unLikehandler={unLikehandler}
          editHandler={editHandler}
          replyMessageHandler={replyMessageHandler}
          // submitHandler={submitReplyHandler}
        />

        <CommentForm
          commentMessageHandler={commentMessageHandler}
          submitCommentHandler={submitCommentHandler}
        />
      </div>
    </div>
  );
}
