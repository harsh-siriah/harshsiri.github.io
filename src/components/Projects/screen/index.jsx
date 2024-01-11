import React, { useMemo, useState } from "react";
import { Carousel, CarouselItem, Col, Container, Row } from "react-bootstrap";
import ProjectCard from "../ProjectCard";
import { ProjectDataHelper } from "../ProjectModal/projectDataHelper";
import "./projectScreen.css";
import { LeftArrowIconSvg } from "../../../assets/arrow_icons";

function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const CardGrid = useMemo(() => {
    const projectsArray = ProjectDataHelper.getProjectsArray();
    const numProjects = projectsArray.length;
    const numPages = Math.ceil(numProjects / 4);

    return (
      <Carousel
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={
          <span>
            <LeftArrowIconSvg
              className="project-arrow-icons"
              fill="white"
              style={{ height: "20px", width: "20px", marginBottom: "5px" }}
            />
          </span>
        }
        nextIcon={
          <span>
            <LeftArrowIconSvg
              className="project-arrow-icons"
              fill="white"
              style={{
                height: "20px",
                width: "20px",
                transform: "rotate(180deg)",
                marginBottom: "5px"
              }}
            />
          </span>
        }
      >
        {[...Array(numPages)].map((_, pageIndex) => {
          const numProjectsInCarousalPage =
            numProjects % 4 === 0
              ? 4
              : pageIndex + 1 === numPages
              ? numProjects - 4 * pageIndex
              : 4;

          return (
            <CarouselItem key={pageIndex}>
              <Container style={{ width: "70%", height: "60vh" }}>
                <Row xs={1} md={2} className="g-4">
                  {[...Array(numProjectsInCarousalPage)].map(
                    (_, projectIndex) => {
                      const currentProjectIndex = projectIndex + pageIndex * 4;

                      const projectId = projectsArray[currentProjectIndex];

                      return (
                        <Col key={projectIndex}>
                          <ProjectCard projectId={projectId} />
                        </Col>
                      );
                    }
                  )}
                </Row>
              </Container>
            </CarouselItem>
          );
        })}
      </Carousel>
    );
  }, [index]);

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
      {CardGrid}
    </Container>
  );
}

export default Projects;
