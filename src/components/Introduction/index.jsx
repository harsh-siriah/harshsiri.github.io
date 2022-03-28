import React from "react";
import Bubble from "./Bubble";
import "./introduction.css";

function Introduction(props) {
  return (
    <div>
      <h3>Hi, my name is</h3>
      <h1>Harsh Siriah</h1>
      <Bubble text="Mobile App Developer" />
    </div>
  );
}

export default React.memo(Introduction);
