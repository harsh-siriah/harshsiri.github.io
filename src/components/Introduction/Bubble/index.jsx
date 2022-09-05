import React from "react";
import { useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import technologyAssets from "../../../assets/technologyAssets";
import { TechnologyNameMap } from "../../../constants/TechnologyNames";
import colors from "../../../utils/colors";
import "./bubble.css";

function Bubble(props) {
  const { text = "Hi", className = "", technologies = [] } = props;

  const containerStyle = {
    backgroundColor: colors.bubbleBgColor,
  };

  const textStyle = {
    color: colors.bubbleTextColor,
  };

  const renderTechnologies = useMemo(() => {
    return technologies && technologies.length > 0
      ? technologies.map((item) => {
          const Technology = technologyAssets[item];
          const technologyName = TechnologyNameMap[item];
          return (
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 250 }}
              overlay={<Tooltip id="button-tooltip">{technologyName}</Tooltip>}
            >
              <Technology className="technology-icon" fill={colors.cadetBlue} />
            </OverlayTrigger>
          );
        })
      : null;
  }, []);

  return (
    <div className={`bubble ${className}`} style={containerStyle}>
      <h5 style={textStyle}>{text}</h5>
      <div className="intro-bubble-technologies">{renderTechnologies}</div>
    </div>
  );
}

export default Bubble;
