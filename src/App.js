import { useState, useEffect } from "react";
import Comments from "./component/comments/Comments";
import Form from "./component/Form/Form";
import juliussomoAvatar from "./images/avatars/image-juliusomo.webp";
import Data from "./data/Data";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  // // state
  const [comments, setComments] = useState(Data);
  const submitCommentHandler = (inputValue) => {
    if (inputValue) {
      const newComments = [
        {
          id: uuidv4(),
          userAvatar: juliussomoAvatar,
          user: "juliusomo",
          timeCommented: new Date().toDateString(),
          commentMessage: inputValue,
          like: 0,
          allReplies: [],
        },
        ...comments,
      ];
      setComments(newComments);
      saveCommentsToLoacalStorage(newComments);
    }
  };

  const submitReplyHandler = (value, id) => {
    if (value) {
      const newComments = comments.map((comment) =>
        comment.id === id
          ? {
              ...comment,
              allReplies: [
                {
                  id: new Date().toDateString(),
                  userAvatar: juliussomoAvatar,
                  user: "juliusomo",
                  timeCommented: new Date().toDateString(),
                  commentMessage: value,
                  like: 0,
                },
              ],
            }
          : comment
      );
      setComments(newComments);
      saveCommentsToLoacalStorage(newComments);
    }
  };

  const UpdateComment = (id, value) => {
    if (value) {
      const newComments = comments.map((comment) =>
        comment.id === id ? { ...comment, commentMessage: value } : comment
      );
      saveCommentsToLoacalStorage(newComments);
      setComments(newComments);
    }
  };

  const deleteHandler = (id) => {
    const newComments = comments.filter((comment) => comment.id !== id);

    saveCommentsToLoacalStorage(newComments);
    setComments(newComments);
  };

  const addLike = (id) => {
    const newComments = comments.map((comment) =>
      comment.id === id ? { ...comment, like: comment.like + 1 } : comment
    );
    saveCommentsToLoacalStorage(newComments);
    setComments(newComments);
  };

  const removeLike = (id) => {
    const newComments = comments.map((comment) =>
      comment.id === id
        ? {
            ...comment,
            like: comment.like < 0 || comment.like === 0 ? 0 : comment.like - 1,
          }
        : comment
    );
    saveCommentsToLoacalStorage(newComments);
    setComments(newComments);
  };

  // save to local storage
  const saveCommentsToLoacalStorage = (comments) => {
    localStorage.setItem("comments", JSON.stringify(comments));
  };

  // get comments from localstorage
  const getCommentsFromLocalStorage = () => {
    if (localStorage.getItem("comments") === null) {
      localStorage.setItem("comments", JSON.stringify(Data));
    } else {
      setComments(JSON.parse(localStorage.getItem("comments")));
    }
  };

  useEffect(() => {
    getCommentsFromLocalStorage();
  }, []);

  return (
    <div className="main-container">
      <div className="comment-container">
        <Comments
          comments={comments}
          submitCommentHandler={submitReplyHandler}
          deleteHandler={deleteHandler}
          UpdateComment={UpdateComment}
          addLike={addLike}
          removeLike={removeLike}
        />
        <Form
          submitCommentHandler={submitCommentHandler}
          btnText="Submit"
          formControlStyle="comment-form-control"
          editing={false}
          cancel={false}
        />
      </div>
    </div>
  );
}
