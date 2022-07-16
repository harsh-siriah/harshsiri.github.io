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
import "./projects-screen.css";
import { leftArrow, rightArrow } from "../../../assets/arrow_icons";
import { useCallback } from "react";

function Projects() {
  const renderCarousalImage = useCallback(
    (image) => (
      <span>
        <img src={image} />
      </span>
    ),
    []
  );

  const cardGrid = useMemo(() => {
    const projects = ProjectDataHelper.getProjectsArray();
    const numProjects = projects.length;
    const numPages = Math.ceil(numProjects / 4);

    return (
      <Carousel
        prevIcon={renderCarousalImage(leftArrow)}
        nextIcon={renderCarousalImage(rightArrow)}
        fade={true}
      >
        {[...Array(numPages)].map(() => {
          return (
            <CarouselItem>
              <Container style={{ width: "50%" }}>
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
    >
      <h1 className="title ">PROJECTS</h1>
      {cardGrid}
    </Container>
  );
}

export default Projects;
