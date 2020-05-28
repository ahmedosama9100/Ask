import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Like from "./../like/Like";
import Dislike from "./../dislike/Dislike";
import Comment from "./../comment/Comment";
import "./question-card.css";

export default QuestionCard;

function QuestionCard() {
  return (
    <div className="question-card">
      <h1 className="question-header">Question Header</h1>
      <p className="question-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, aliquid
        modi dicta perspiciatis magni velit pariatur quod laboriosam quibusdam
        laborum, fuga incidunt beatae doloribus dignissimos blanditiis
        voluptatem? Ex porro neque, ducimus earum accusamus qui vel! Dolores
        officiis officia architecto repellendus.
      </p>
      <ButtonGroup id="question-options">
        <Like />
        <Dislike />
        <Comment />
      </ButtonGroup>
    </div>
  );
}
