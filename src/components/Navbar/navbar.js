import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <div id="nav">
      <div className="wrapper">
        <div id="title">{props.children}</div>
        <div id="scoreboard">
          <span className="score">
            Score: {props.score}
          </span>
          <span className="score">
            High Score: {props.highscore}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
