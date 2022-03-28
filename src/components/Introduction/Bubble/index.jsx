import React from "react";
import colors from "../../../utils/colors";

function Bubble(props) {
  const { text = "Hi" } = props;

  return (
    <div style={styles.container}>
      <h5>{text}</h5>
    </div>
  );
}

export default Bubble;

const styles = {
  container: {
    padding: 5,
    borderRadius: 20,
    backgroundColor: colors.cadetBlue,
  },
};
