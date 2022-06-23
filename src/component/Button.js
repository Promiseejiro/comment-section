import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";

export default function button({ btnSvg, btnText, btnStyle, btnFunction }) {
  return (
    <button onClick={btnFunction} className={`btn ${btnStyle}`}>
      {btnSvg}
      <span>{btnText}</span>
    </button>
  );
}
