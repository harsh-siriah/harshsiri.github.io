import React from "react";
import Stack from "react-bootstrap/Stack";
import TechnologyNames from "../../constants/TechnologyNames";
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
      <div className="intro-cells-container">
        <Bubble
          text={copyTexts.bubble1}
          className="intro-cells"
          technologies={[
            TechnologyNames.ReactNative,
            TechnologyNames.Android,
            TechnologyNames.iOS,
            TechnologyNames.Firebase,
          ]}
        />
        <Bubble
          text={copyTexts.bubble2}
          className="intro-cells"
          technologies={[
            TechnologyNames.ReactJS,
            TechnologyNames.Html,
            TechnologyNames.Css,
          ]}
        />
        <Bubble
          text={copyTexts.bubble3}
          className="intro-cells"
          technologies={[TechnologyNames.Unity, TechnologyNames.CSharp]}
        />
      </div>
    </Stack>
  );
}

export default React.memo(Introduction);

const styles = {
  container: {
    display: "flex",
    height: "100%",
    marginLeft: "130px",
    marginTop: "25vh",
  },
  h3Text: {
    fontSize: "64px",
  },
  h1Text: {
    fontSize: "128px",
  },
};
