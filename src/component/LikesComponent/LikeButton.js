import React from "react";

export default function LikeButton({ btnFunction, btnSvg }) {
  return (
    <button onClick={btnFunction} className="btn btn-btn">
      {btnSvg}
    </button>
  );
}
