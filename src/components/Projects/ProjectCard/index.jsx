import React, { useMemo } from "react";
import { Card, Col } from "react-bootstrap";
import colors from "../../../utils/colors";
import { ReactComponent as AndroidLogo } from "../../../assets/android-logo.svg";
import "./projectCard.css";

const petronusImage = require("../../../assets/petronus_logo.png");

function ProjectCard(props) {
  const { title = "PETronus", technologies = [AndroidLogo] } = props;

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
        <Col className="py-auto">
          <Card.Text>
            <h2>{title}</h2>
          </Card.Text>
          {technologies && technologies.length > 0
            ? technologies?.map((Item) => {
                return <Item fill={colors.cadetBlue} />;
              })
            : null}
        </Col>
      </Card.ImgOverlay>
    </Card>
  );
}

export default ProjectCard;
