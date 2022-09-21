import React, { useCallback, useMemo } from "react";
import { Card, Col } from "react-bootstrap";
import projectAssets from "../../../assets/ProjectAssets";
import EventTypes from "../../../services/LocalEvent/EventTypes";
import { LocalEvent } from "../../../services/LocalEvent/LocalEvent";
import technologyAssets from "../../../assets/TechnologyAssets";
import {
  ProjectDataHelper,
  ProjectModalDataKeys,
} from "../ProjectModal/projectDataHelper";
import "./projectCard.css";
import colors from "../../../utils/colors";

function ProjectCard(props) {
  const { projectId } = props;

  const cardStyle = useMemo(
    () => ({
      borderTopLeftRadius: "20px",
      borderBottomRightRadius: "20px",
      borderTopRightRadius: "0px",
      borderBottomLeftRadius: "0px",
    }),
    []
  );

  const projectData = ProjectDataHelper.getProjectCardsData(projectId);

  const title = projectData?.[ProjectModalDataKeys.title];
  const technologies = projectData?.[ProjectModalDataKeys.technologies];
  const projectImage = projectAssets[projectId];

  const onCardClick = useCallback(() => {
    LocalEvent.emit(EventTypes.ProjectModal.Show, projectId);
  }, [projectId]);

  return (
    <Card
      style={cardStyle}
      className="project-card-container"
      onClick={onCardClick}
    >
      <img src={projectImage} className="main-image" alt="Project logo" />
      <Card.ImgOverlay className="card_overlay" style={cardStyle}>
        <Col className="my-auto">
          <Card.Text>
            <h2 className="project-name">{title}</h2>
          </Card.Text>
          <div className="project-card-technologies">
            {technologies && technologies.length > 0
              ? technologies.map((item) => {
                  const Technology = technologyAssets[item];
                  return (
                    <Technology
                      style={{
                        height: "20%",
                        width: "20%",
                        marginLeft: "5px",
                        marginRight: "5px",
                      }}
                      fill={colors.cadetBlue}
                    />
                  );
                })
              : null}
          </div>
        </Col>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ProjectCard;
