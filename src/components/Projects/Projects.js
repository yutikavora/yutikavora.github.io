import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import clothing from "../../Assets/Projects/clothing.png";
import virtualmirror from "../../Assets/Projects/virtualmirror.png";
import API from "../../Assets/Projects/API.png";
import plagiarism from "../../Assets/Projects/plagiarism.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={API}
              isBlog={false}
              title="API Integration"
              description="The API Integration with Python project involves connecting external services or databases to a Python application using RESTful APIs. It includes sending HTTP requests, processing responses, and integrating third-party data into the application, enhancing its functionality and scalability."
              ghLink="https://github.com/yutikavora/API_Integration_Python"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={plagiarism}
              isBlog={false}
              title="Plagarism Checker"
              description="Helps identify similarity in contents from different sources. "
              ghLink="https://github.com/yutikavora/plagiarism/tree/main"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={virtualmirror}
              isBlog={false}
              title="Virtual Mirror: A Hassle free approach to trial on."
              description="Deployed computer modeling and image processing algorithms, building neural network with 90% accuracy; applied image processing to commercial
                          software, customizing features as per client-requirements."
              ghLink="https://www.researchgate.net/publication/362539676_Virtual_Mirror_A_Hassle_Free_Approach_To_Trial_On_Using_Deep_Learning"          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clothing}
              isBlog={false}
              title="Clothing Recommendation System for E-commerce "
              description="Developed a collaborative filtering recommendation system with user behavior data and item interactions to restructure product recommendations, resulting in "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
