import React from "react";
import NavBar from "./../navBar/NavBar";
import AddIcon from "./../addIcon/AddIcon";
import HeaderContainer from "./../headerContainer/HeaderContainer";
import QuestionCard from "./../questionCard/QuestionCard";
import AddAnswer from "./../addAnswer/AddAnswer";
import CommentCard from "./../commetCard/CommentCard";

export default QuestionPage;

function QuestionPage() {
  return (
    <React.Fragment>
      <NavBar />
      <AddIcon />
      <HeaderContainer display={[QuestionCard, AddAnswer]} />
      <CommentCard />
      <CommentCard />
      <CommentCard />
    </React.Fragment>
  );
}
