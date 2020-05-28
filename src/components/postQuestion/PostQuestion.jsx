import React from "react";
import InputText from "./../inputText/InputText";
import PostButton from "./../postButton/PostButton";
import "./post-question.css";

export default PostQuestion;

function PostQuestion() {
  return (
    <form className="post-question-container">
      <InputText
        placeholder="Question Header"
        className="add-question-header"
      />
      <textarea
        name="add-question-description"
        className="add-question-description"
        placeholder="Question decription"
      />
      <PostButton className="post-question-button" />
    </form>
  );
}
