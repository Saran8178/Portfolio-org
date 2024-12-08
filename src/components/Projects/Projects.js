import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import eleganza from "../../Assets/Projects/eleganza.png";
import hire from "../../Assets/Projects/Front page.png";

function Projects() {
  return ( <Container fluid className="about-section" style={{ backgroundColor: "black" }}>
   
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Urban Craft"
              description="Discover a seamless blend of modern technology and timeless craftsmanship at our furniture site powered by React, Node.js, and Spring Boot. Explore a curated collection of exquisite furniture pieces crafted with precision and passion, enhanced by intuitive user interfaces and robust backend systems. Our platform ensures a delightful shopping experience with unparalleled performance and reliability."
              ghLink="https://github.com/Saran8178/UrbanCraft"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="JetVibe Airlines"
              description="Experience effortless travel planning with our airline booking site crafted using HTML, CSS, and JavaScript. Navigate a user-friendly interface to book flights worldwide, manage reservations, and explore travel options with ease. Designed for seamless functionality and visual appeal, our site ensures a smooth journey from booking to boarding."
              ghLink=""
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ eleganza }
              isBlog={false}
              title="Eleganza"
              description="Step into the world of fashion with our boutique site, meticulously crafted using HTML, CSS, and JavaScript. Explore curated collections of chic apparel and accessories, tailored to elevate your style. With intuitive navigation and elegant design, discover a seamless shopping experience that embodies sophistication and individuality."
              ghLink="https://github.com/Saran8178/Eleganza/"
              demoLink=""              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ hire}
              isBlog={false}
              title="HireVista"
              description="HireVista is a full-stack job searching platform designed to connect job seekers and employers through a seamless and efficient online experience. Built with React and styled using Tailwind CSS, the platform offers a modern, responsive, and user-friendly interface for effortless navigation and functionality. On the backend, Spring Boot powers the system with secure and scalable business logic, enabling features such as advanced job search with filters, role-based user accounts for job seekers and employers, application tracking, and real-time notifications. With its robust architecture and intuitive design, HireVista streamlines the hiring process, providing a reliable platform for discovering opportunities and managing recruitment efficiently."
              ghLink="https://github.com/Saran8178/applicationdev"
              demoLink=""              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
