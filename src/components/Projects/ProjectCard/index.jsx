import React, { useMemo } from "react";
import { Card, Col } from "react-bootstrap";
import { AndroidLogoSvg } from "../../../assets";
import colors from "../../../utils/colors";
import "./projectCard.css";

const petronusImage = require("../../../assets/petronus_logo.png");

function ProjectCard(props) {
  const { title = "PETronus", technologies = [AndroidLogoSvg] } = props;

  const cardStyle = useMemo(
    () => ({
      borderTopLeftRadius: "20px",
      borderBottomRightRadius: "20px",
      borderTopRightRadius: "0px",
      borderBottomLeftRadius: "0px",
    }),
    []
  );

  return (
    <Card style={cardStyle} className="container">
      <img src={petronusImage} className="main_image" />
      <Card.ImgOverlay className="card_overlay" style={cardStyle}>
        <Col className="my-auto">
          <Card.Text>
            <h2 className="project-name">{title}</h2>
          </Card.Text>
          <div className="technologies">
            {technologies && technologies.length > 0
              ? technologies?.map((Item) => {
                  return <Item fill={colors.cadetBlue} />;
                })
              : null}
          </div>
        </Col>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ProjectCard;
