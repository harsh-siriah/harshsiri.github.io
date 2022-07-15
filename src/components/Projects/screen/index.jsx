import { Carousel } from "bootstrap";
import React, { useMemo } from "react";
import { CardGroup, CarouselItem, Col, Container, Row } from "react-bootstrap";
import ProjectCard from "../ProjectCard";
import { ProjectDataHelper } from "../ProjectModal/projectDataHelper";
import "./projects-screen.css";

function Projects() {
  const cardGrid = useMemo(() => {
    const projects = ProjectDataHelper.getProjectsArray();
    return (
      <Container style={{ width: "50%" }}>
        <Row xs={1} md={2} className="g-4">
          {projects.map((projectId, idx) => (
            <Col>
              <ProjectCard projectId={projectId} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }, []);

  return (
    <Container
      style={{
        justifyContent: "center",
        height: "100%",
        alignItems: "center",
        display: "flex",
      }}
    >
      <h1 className="title ">PROJECTS</h1>
      {cardGrid}
    </Container>
  );
}

export default Projects;
