import React from "react";
import Button from "@material-ui/core/Button";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import "./dislike.css";

export default Dislike;

function Dislike() {
  function handleDislike(e) {
    e.target.classList.toggle("add-dislike");
  }
  return (
    <Button onClick={handleDislike}>
      <ThumbDownIcon />
    </Button>
  );
}
