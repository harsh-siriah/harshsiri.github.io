import React, { useMemo, useState } from "react";
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
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log("Handle swicth", selectedIndex);
    setIndex(selectedIndex);
  };
  const CardGrid = useMemo(() => {
    const projectsArray = ProjectDataHelper.getProjectsArray();
    const numProjects = projectsArray.length;
    const numPages = Math.ceil(numProjects / 4);

    console.log({ numPages, projectsArray });
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
        {[...Array(numPages)].map((_, index1) => {
          const numProjectsInCarousalPage =
            (index1 + 1) * 4 > numProjects ? numProjects % 4 : 4 * (index1 + 1);
          console.log({ numProjectsInCarousalPage, index1 });
          return (
            <CarouselItem key={index1}>
              <Container style={{ width: "70%", height: "60vh" }}>
                <Row xs={1} md={2} className="g-4">
                  {[...Array(numProjectsInCarousalPage)].map((_, index2) => {
                    const currentProjectIndex = index2 + index1 * 4;

                    const projectId = projectsArray[currentProjectIndex];

                    return (
                      <Col key={index2}>
                        <ProjectCard projectId={projectId} />
                      </Col>
                    );
                  })}
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
