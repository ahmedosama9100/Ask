import React from "react";
import "./input-text.css";

export default InputText;

function InputText(props) {
  return (
    <input
      type="text"
      className={"add-answer " + props.className}
      placeholder={props.placeholder}
    />
  );
}
