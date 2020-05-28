import React from "react";
import QuestionCard from "./../questionCard/QuestionCard";
import "./questions.css";

export default Questions;

function Questions() {
  return (
    <div className="questions-container">
      <QuestionCard />
      <QuestionCard />
    </div>
  );
}
