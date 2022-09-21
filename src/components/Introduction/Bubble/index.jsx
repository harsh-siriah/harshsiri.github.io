import React from "react";
import { useMemo } from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import technologyAssets from "../../../assets/TechnologyAssets";
import { TechnologyNameMap } from "../../../constants/TechnologyNames";
import "./bubble.css";

function Bubble(props) {
  const { text = "Hi", className = "", technologies = [] } = props;

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
              <Technology className="technology-icon" />
            </OverlayTrigger>
          );
        })
      : null;
  }, []);

  return (
    <div className={`bubble ${className}`}>
      <h5 className="bubble-text">{text}</h5>
      <div className="intro-bubble-technologies">{renderTechnologies}</div>
    </div>
  );
}

export default Bubble;
