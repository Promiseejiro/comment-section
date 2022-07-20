import React from "react";
import "./notification.css";

export default function notification({
  closeNotification,
  notificationMessage,
}) {
  return (
    <div className="notification">
      <div className="notification-details">
        <button className="close-notification-btn" onClick={closeNotification}>
          x
        </button>
        <p>{notificationMessage}</p>
      </div>
    </div>
  );
}
