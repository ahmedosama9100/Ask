import React from "react";
import NavBar from "./components/navBar/NavBar";
import Questions from "./components/questions/Questions";
import AddIcon from "./components/addIcon/AddIcon";
import Question from "./components/questionPage/QuestionPage";
import AddQuestion from "./components/addQuestion/AddQuestion";
import "./styles.css";

export default function App() {
  return (
    <React.Fragment>
      {/* <NavBar />
      <AddIcon />
      <Questions /> */}

      <Question />
      {/* <AddQuestion /> */}
    </React.Fragment>
  );
}
