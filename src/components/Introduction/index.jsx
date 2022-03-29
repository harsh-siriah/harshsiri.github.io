import React from "react";
import Bubble from "./Bubble";
import "./introduction.css";

function Introduction(props) {
  return (
    <div>
      <h3>Hi, my name is</h3>
      <h1>Harsh Siriah</h1>
      <div className="bubbles">
        <Bubble text="Mobile App Developer" />
        <Bubble text="Frontend Developer" />
        <Bubble text="Game Developer" />
      </div>
    </div>
  );
}

export default React.memo(Introduction);
