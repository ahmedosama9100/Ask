import React from "react";
import InputText from "./../inputText/InputText";
import PostButton from "./../postButton/PostButton";
import "./add-answer.css";

export default AddAnswer;

function AddAnswer() {
  return (
    <form className="add-answer-form">
      <InputText placeholder="write comment" />
      <PostButton />
    </form>
  );
}
