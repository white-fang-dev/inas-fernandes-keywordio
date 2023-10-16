import React from "react";
import "./Input.scss";
const Input = ({ id, header, placeholder }) => {
  return (
    <div className="input">
      <label className="labelText" htmlFor={id}>
        {header}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type="text"
        className="inputStyle"
      />
    </div>
  );
};
export default Input;
