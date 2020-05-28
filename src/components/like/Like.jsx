import React from "react";
import Button from "@material-ui/core/Button";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import "./like.css";

export default Like;

function Like() {
  function handleLike(e) {
    e.target.classList.toggle("add-like");
  }

  return (
    <Button onClick={handleLike}>
      <ThumbUpAltIcon />
    </Button>
  );
}
