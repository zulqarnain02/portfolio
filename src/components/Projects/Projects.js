import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import task from "../../Assets/Projects/task.png";
import loan from "../../Assets/Projects/loan.png";
import speech from "../../Assets/Projects/speech.png";


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
              imgPath={loan}
              isBlog={false}
              title="Loan Management system"
              description="Designed and implemented a robust Loan Management System leveraging Django,HTML, CSS, JavaScript,
and MySQL. The system encompasses a range of functionalities including loan application, real-time
status tracking, credit score assessment, contact page for user support, and detailed transaction history. Engineered MySQL database for optimal performance and data integrity, encompassing user details,
loan info, credit scores, and transactions. Integrated Django backend seamlessly with MySQL for
efficient data management."
              ghLink="https://github.com/zulqarnain02/loan-management-with-proper-messages-on-mobile"
              demoLink="/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={task}
              isBlog={false}
              title="Task Management System"
              description="Developed a comprehensive task management system using HTML, CSS, JavaScript, Django, and MySQL. The application provides full CRUD functionality, allowing users to create, view, update, and delete tasks seamlessly. The front end, crafted with HTML, CSS, and JavaScript, ensures an intuitive user interface for task handling, while the back end, powered by Django, efficiently manages data flow and integrates with a MySQL database for robust storage and retrieval"
              ghLink="https://github.com/zulqarnain02/TaskManagement/tree/master"
              demoLink="/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={speech}
              isBlog={false}
              title="Speech-to-Speech Translation"
              description="Currently developing a speech-to-speech translation system to convert spoken English into Kannada. This ongoing project integrates speech recognition, language translation, and speech synthesis technologies to enable real-time, accurate translations. My responsibilities include designing the translation pipeline, implementing algorithms for speech processing, and testing the system for language accuracy and naturalness."
              ghLink="/"
              demoLink="/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
