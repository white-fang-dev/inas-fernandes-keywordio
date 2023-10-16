import React from "react";
import "./SuccessfulModal.scss";
import tick from "./../images/tick.svg";
const SuccessfulModal = () => {
  return (
    <div className="successfulModal">
      <div className="modal">
        <img src={tick} alt="successful" className="tickImg" />
        <h2 className="modalText">Submitted</h2>
      </div>
    </div>
  );
};
export default SuccessfulModal;
