import React, { useMemo } from "react";
import {
  Carousel,
  CardGroup,
  CarouselItem,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import ProjectCard from "../ProjectCard";
import { ProjectDataHelper } from "../ProjectModal/projectDataHelper";
import "./projectScreen.css";
import { LeftArrowIconSvg } from "../../../assets/arrow_icons";

function Projects() {
  const cardGrid = useMemo(() => {
    const projects = ProjectDataHelper.getProjectsArray();
    const numProjects = projects.length;
    const numPages = Math.ceil(numProjects / 4);

    return (
      <Carousel
        indicators={false}
        prevIcon={
          <span>
            <LeftArrowIconSvg
              className="project-arrow-icons"
              fill="white"
              style={{ height: "30px", width: "30px" }}
            />
          </span>
        }
        nextIcon={
          <span>
            <LeftArrowIconSvg
              className="project-arrow-icons"
              fill="white"
              style={{
                height: "30px",
                width: "30px",
                transform: "rotate(180deg)",
              }}
            />
          </span>
        }
        fade={true}
      >
        {[...Array(numPages)].map(() => {
          return (
            <CarouselItem>
              <Container style={{ width: "70%", height: "60vh" }}>
                <Row xs={1} md={2} className="g-4">
                  {projects.map((projectId, idx) => (
                    <Col>
                      <ProjectCard projectId={projectId} />
                    </Col>
                  ))}
                </Row>
              </Container>
            </CarouselItem>
          );
        })}
      </Carousel>
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
      key="Projects"
    >
      <h1 className="title">PROJECTS</h1>
      {cardGrid}
    </Container>
  );
}

export default Projects;
