import React from "react";

// css file
import "./button.css";

export default function button({
  btnSvg,
  btnText,
  btnStyle,
  btnFunction,
  disableBtn,
}) {
  return (
    <button
      disabled={disableBtn}
      onClick={btnFunction}
      className={`btn ${btnStyle}`}
    >
      {btnSvg}
      <span className="btn-text">{btnText}</span>
    </button>
  );
}
