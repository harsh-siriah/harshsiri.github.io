import React from "react";
import TechnologyNames from "../../constants/TechnologyNames";
import copyTexts from "../../utils/copyTexts";
import Bubble from "./Bubble";
import "./introduction.css";

function Introduction(props) {
  return (
    <div className="introduction-content-container" key="Introduction">
      <h3 className="intro-text intro-subtitle-text ">
        {copyTexts.hiMyNameIs}
      </h3>
      <h1 className="intro-text intro-title-text ">{copyTexts.name}</h1>
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
    </div>
  );
}

export default React.memo(Introduction);

const styles = {
  h3Text: {
    fontSize: "64px",
  },
  h1Text: {
    fontSize: "128px",
  },
};
