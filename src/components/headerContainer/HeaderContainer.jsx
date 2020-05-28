import React from "react";
import "./header-container.css";

export default HeaderContainer;

function HeaderContainer(props) {
  return (
    <div className="single-card-container">
      {props.display.map(View => (
        <View />
      ))}
    </div>
  );
}
