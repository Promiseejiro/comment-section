import { useState, useEffect } from "react";
import Comments from "./component/comments/Comments";
import Form from "./component/Form/Form";
import Notification from "./component/notification/Notification";
import juliussomoAvatar from "./images/avatars/image-juliusomo.webp";
import Data from "./data/Data";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  // // state
  const [comments, setComments] = useState(Data);
  const [notification, setNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  const closeNotification = () => {
    setNotification(false);
  };

  const nextedReplyNotification = () => {
    setNotification(true);
    setNotificationMessage("Currently working on nexted Replies");
  };

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
    } else {
      if (!inputValue) {
        setNotificationMessage("Cannot submit an empty Commentmessage");
        setNotification(true);
      }
    }
  };

  const UpdateComment = (replyId, commentId, value) => {
    if (value) {
      const newComments = comments.map((comment) =>
        comment.id === commentId
          ? { ...comment, commentMessage: value }
          : comment
      );
      saveCommentsToLoacalStorage(newComments);
      setComments(newComments);
    }
    console.log(value);
  };

  const deleteCommentHandler = (cmt, replyId) => {
    var newComments = comments.filter((comment) => comment.id !== cmt);
    saveCommentsToLoacalStorage(newComments);
    setComments(newComments);
  };

  const addLikeToComment = (commentId) => {
    const newComments = comments.map((comment) =>
      comment.id === commentId
        ? { ...comment, like: comment.like + 1 }
        : comment
    );
    saveCommentsToLoacalStorage(newComments);
    setComments(newComments);
  };

  const unlilkeComment = (id) => {
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

  const submitReplyHandler = (value, id) => {
    const commentBeenReplied = comments.find((comment) => comment.id === id);

    if (value) {
      const reply = {
        id: uuidv4(),
        userAvatar: juliussomoAvatar,
        user: "juliusomo",
        timeCommented: new Date().toDateString(),
        commentMessage: value,
        replyUser: "@" + commentBeenReplied.user,
        like: 0,
      };

      comments.filter((comment) =>
        comment.id === id ? comment.allReplies.unshift(reply) : comment
      );

      const newComments = comments;
      setComments(newComments);
      saveCommentsToLoacalStorage(newComments);
      getCommentsFromLocalStorage();
    } else {
      if (!value) {
        setNotification(true);
        setNotificationMessage("Cannot submit an empty Replymessage");
      }
    }
  };

  const editReplyHandler = (commentId, replyId, value) => {
    const commentIndex = comments.findIndex((comment) => {
      return comment.id === commentId;
    });

    const restOfComment = comments.filter(
      (comment) => comment.id !== commentId
    );

    const targetComment = comments.find((comment) => comment.id === commentId);

    const restOfReply = targetComment.allReplies.filter(
      (reply) => reply.id !== replyId
    );

    const changingReply = targetComment.allReplies.find(
      (reply) => reply.id === replyId
    );

    changingReply.commentMessage = value;

    // reply index
    const replyIndex = targetComment.allReplies.findIndex((reply) => {
      return reply.id === replyId;
    });
    restOfReply.splice(replyIndex, 0, changingReply);
    const freshReplies = restOfReply;

    // const freshReplies = [...restOfReply, changingReply];

    const freshComment = {
      ...targetComment,
      allReplies: freshReplies,
    };

    restOfComment.splice(commentIndex, 0, freshComment);
    const newComments = restOfComment;
    setComments(newComments);
    saveCommentsToLoacalStorage(newComments);
  };

  const deleteReplyHandler = (replyId, commentId) => {
    const commentIndex = comments.findIndex((comment) => {
      return comment.id === commentId;
    });
    const restOfComment = comments.filter(
      (comment) => comment.id !== commentId
    );
    const targetComment = comments.find((comment) => comment.id === commentId);
    const newReplies = targetComment.allReplies.filter(
      (reply) => reply.id !== replyId
    );

    const freshComment = {
      ...targetComment,
      allReplies: newReplies,
    };

    restOfComment.splice(commentIndex, 0, freshComment);

    const newComments = restOfComment;
    setComments(newComments);
    saveCommentsToLoacalStorage(newComments);

    // setComments([...restOfComment, freshComment]);
    // saveCommentsToLoacalStorage([...restOfComment, freshComment]);
  };

  const likeReply = (replyId, commentId) => {
    const commentIndex = comments.findIndex((comment) => {
      return comment.id === commentId;
    });
    const restOfComment = comments.filter(
      (comment) => comment.id !== commentId
    );
    const targetComment = comments.find((comment) => comment.id === commentId);
    const restOfReply = targetComment.allReplies.filter(
      (reply) => reply.id !== replyId
    );

    const changingReply = targetComment.allReplies.find(
      (reply) => reply.id === replyId
    );
    changingReply.like = changingReply.like + 1;

    // changingReply index
    const replyIndex = targetComment.allReplies.findIndex((reply) => {
      return reply.id === replyId;
    });
    restOfReply.splice(replyIndex, 0, changingReply);
    const freshReplies = restOfReply;

    const freshComment = {
      ...targetComment,
      allReplies: freshReplies,
    };

    restOfComment.splice(commentIndex, 0, freshComment);
    const newComments = restOfComment;
    setComments(newComments);
    saveCommentsToLoacalStorage(newComments);
  };

  const unlikeReply = (replyId, commentId) => {
    const commentIndex = comments.findIndex((comment) => {
      return comment.id === commentId;
    });
    const restOfComment = comments.filter(
      (comment) => comment.id !== commentId
    );
    const targetComment = comments.find((comment) => comment.id === commentId);
    const restOfReply = targetComment.allReplies.filter(
      (reply) => reply.id !== replyId
    );

    const changingReply = targetComment.allReplies.find(
      (reply) => reply.id === replyId
    );
    if (changingReply.like === 0) {
      changingReply.like = 0;
    } else {
      changingReply.like = changingReply.like - 1;
    }
    // changingReply index
    const replyIndex = targetComment.allReplies.findIndex((reply) => {
      return reply.id === replyId;
    });
    restOfReply.splice(replyIndex, 0, changingReply);
    const freshReplies = restOfReply;
    const freshComment = {
      ...targetComment,
      allReplies: freshReplies,
    };

    restOfComment.splice(commentIndex, 0, freshComment);
    const newComments = restOfComment;
    setComments(newComments);
    saveCommentsToLoacalStorage(newComments);
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
      {notification && (
        <Notification
          closeNotification={closeNotification}
          notificationMessage={notificationMessage}
        />
      )}

      <div className="comment-container">
        <Comments
          comments={comments}
          submitCommentHandler={submitReplyHandler}
          deleteCommentHandler={deleteCommentHandler}
          UpdateComment={UpdateComment}
          addLikeToComment={addLikeToComment}
          unlilkeComment={unlilkeComment}
          editReply={editReplyHandler}
          deleteReplyHandler={deleteReplyHandler}
          addLikeToReply={likeReply}
          unlikeReply={unlikeReply}
          nextedReplyNotification={nextedReplyNotification}
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
