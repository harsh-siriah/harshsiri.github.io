import React from "react";
import colors from "../../../utils/colors";
import "./bubble.css";

function Bubble(props) {
  const { text = "Hi" } = props;

  const containerStyle = {
    backgroundColor: colors.bubbleBgColor,
  };

  const textStyle = {
    color: colors.bubbleTextColor,
  };

  return (
    <div className="bubble" style={containerStyle}>
      <h5 style={textStyle}>{text}</h5>
    </div>
  );
}

export default Bubble;
