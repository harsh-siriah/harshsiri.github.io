import React from "react";
import TechnologyNames from "../../constants/TechnologyNames";
import copyTexts from "../../utils/copyTexts";
import Bubble from "./Bubble";
import "./introduction.css";

function Introduction(props) {
  return (
    <div className="introduction-content-container" key="Introduction">
      <h3 className="intro-text intro-subtitle-text">{copyTexts.hiMyNameIs}</h3>
      <h1 className="intro-text intro-title-text ">{copyTexts.name}</h1>
      <div className="intro-cells-container">
        <Bubble
          text={copyTexts.prodBubble}
          className="intro-cells"
        />
        <Bubble
          text={copyTexts.brandManagementBubble}
          className="intro-cells"
        />
        <Bubble
          text={copyTexts.digitalMarketingBubble}
          className="intro-cells"
        />
        <Bubble
          text={copyTexts.projectManagementBubble}
          className="intro-cells"
        />
      </div>
      <div className="intro-cells-container">
        <Bubble
          text={copyTexts.bubble1}
          className="intro-cells bubble-hover"
          technologies={[
            TechnologyNames.Android,
            TechnologyNames.ReactNative,
            TechnologyNames.iOS,
          ]}
        />
        <Bubble
          text={copyTexts.bubble2}
          className="intro-cells bubble-hover"
          technologies={[
            TechnologyNames.Html,
            TechnologyNames.ReactJS,
            TechnologyNames.Css,
          ]}
        />
        <Bubble
          text={copyTexts.bubble3}
          className="intro-cells bubble-hover"
          technologies={[TechnologyNames.Unity, TechnologyNames.CSharp]}
        />
      </div>
    </div>
  );
}

export default React.memo(Introduction);
