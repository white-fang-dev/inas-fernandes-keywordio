import React from "react";
// Stylesheet
import "./TextArea.scss";
//Images
const TextArea = ({ id, header, placeholder }) => {
  return (
    <div className="textarea">
      <label className="labelText" htmlFor={id}>
        {header}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        type="text"
        className="textareaStyle"
      />
    </div>
  );
};
export default TextArea;
