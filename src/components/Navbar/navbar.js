import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div id="nav">
      <div className="wrapper">
        <span id="title">{props.children}</span>
        <div id="scoreboard">
          Score: {props.score}
          High Score: {props.highscore}
        </div>
      </div>
    </div>
  )
}

export default Navbar;
