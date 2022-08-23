import React from "react";
import Stack from "react-bootstrap/Stack";
import copyTexts from "../../utils/copyTexts";
import Bubble from "./Bubble";
import "./introduction.css";

function Introduction(props) {
  return (
    <Stack style={styles.container} key="Introduction">
      <h3 style={styles.h3Text} className="intro-text">
        {copyTexts.hiMyNameIs}
      </h3>
      <h1 style={styles.h1Text} className="intro-text">
        {copyTexts.name}
      </h1>
      <Stack direction="horizontal" gap={1}>
        <Bubble text={copyTexts.bubble1} className="intro-cells" />
        <Bubble text={copyTexts.bubble2} className="intro-cells" />
        <Bubble text={copyTexts.bubble3} className="intro-cells" />
      </Stack>
    </Stack>
  );
}

export default React.memo(Introduction);

const styles = {
  container: {
    justifyContent: "center",
    display: "flex",
    height: "100%",
    marginLeft: "130px",
  },
  h3Text: {
    fontSize: "64px",
  },
  h1Text: {
    fontSize: "128px",
  },
};
