import React from "react";
import "./PrimaryBtn.scss";
const PrimaryBtn = ({ text, active, btnHandler }) => {
  return (
    <button
      onClick={btnHandler}
      className={`primaryBtn ${active && "activeBtn"}`}
    >
      {text}
    </button>
  );
};
export default PrimaryBtn;
