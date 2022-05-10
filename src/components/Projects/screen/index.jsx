import { Carousel } from "bootstrap";
import React, { useMemo } from "react";
import { CardGroup, CarouselItem, Col, Container, Row } from "react-bootstrap";
import colors from "../../../utils/colors";
import ProjectCard from "../ProjectCard";
import "./projects-screen.css";

function Projects() {
  const cardGrid = useMemo(
    () => (
      <Container style={{ width: "50%" }}>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <ProjectCard />
            </Col>
          ))}
        </Row>
      </Container>
    ),
    []
  );

  return (
    <Container style={{ justifyContent: "center" }}>
      <h1 className="title ">PROJECTS</h1>
      {cardGrid}
    </Container>
  );
}

export default Projects;
