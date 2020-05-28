import React from "react";
import NavBar from "./../navBar/NavBar";
import HeaderContainer from "./../headerContainer/HeaderContainer";
import PostQuestion from "./../postQuestion/PostQuestion";

export default AddQuestion;

function AddQuestion() {
  return (
    <React.Fragment>
      <NavBar />
      <HeaderContainer display={[PostQuestion]} />
    </React.Fragment>
  );
}
