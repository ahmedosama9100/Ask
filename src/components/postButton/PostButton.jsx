import React from "react";
import Button from "@material-ui/core/Button";
import "./post-button.css";

export default PostButton;

function PostButton(props) {
  return (
    <Button type="submit" className={"submit-answer " + props.className}>
      Post
    </Button>
  );
}
