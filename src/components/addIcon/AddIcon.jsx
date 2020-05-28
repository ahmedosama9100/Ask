import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import "./add-icon.css";

export default AddQuestionIcon;

function AddQuestionIcon() {
  return (
    <Fab id="add-question">
      <AddIcon className="add-icon" />
    </Fab>
  );
}
