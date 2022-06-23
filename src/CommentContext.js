// random id

// image

// hooks

// important
import { createContext, useState, useEffect } from "react";
const CommentContext = createContext();

var timeComeneted = new Date().getTime();
var timeAgo = 0;

export function CommentProvider({ children }) {
  const [sec, setSec] = useState(0);
  var [minutes, setMinutes] = useState(0);
  var [hours, setHours] = useState(0);
  var [days, setDays] = useState(0);
  var [months, setMonth] = useState(0);
  var [years, setYears] = useState(0);
  const [t, setT] = useState(0);

  const [replyMessage, setReplyMessage] = useState("");
  const [Reply, setReply] = useState({});
  const [Replies, setReplies] = useState([]);
  const [hideReplyForm, setSHideReplyForm] = useState(false);
  const [time, setTime] = useState("Now");

  const unlikeHandler = () => {
    //  setComment(comments.map((comment)=>{
    //    {...comment,like:''}
    //  }))
  };

  const timeHandler = () => {
    const futureTime = new Date().getTime();
    timeAgo = futureTime - timeComeneted;
    setSec(Math.floor(timeAgo / 1000));
    setMinutes(Math.floor(timeAgo / 60000));
    setHours(Math.floor(timeAgo / (60 * 60 * 1000)));
    setDays(Math.floor(timeAgo / (60 * 60 * 1000 * 24)));
    setMonth(Math.floor(timeAgo / (60 * 60 * 1000 * 24 * 30)));
    setYears(Math.floor(timeAgo / (60 * 60 * 1000 * 24 * 30 * 12)));

    if (sec > 60) {
      setTime(`${minutes} Minutes ago`);
    }
    if (minutes > 60) {
      setTime(`${hours} Hour ago `);
    }
    if (hours >= 24) {
      setTime(`${days} Day ago`);
    }
    if (days >= 30) {
      setTime(`${months} Month ago`);
    }
    if (months >= 12) {
      setTime(`${years} Year ago`);
    }
    console.log(time);
  };
  setInterval(() => {
    // timeHandler();
  }, 1000);

  return (
    <CommentContext.Provider
      value={{
        Replies,
        unlikeHandler,
        hideReplyForm,
      }}
    >
      {children}
    </CommentContext.Provider>
  );
}

export default CommentContext;
