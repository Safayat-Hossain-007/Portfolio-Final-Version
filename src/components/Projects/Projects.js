import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={editor}
              isBlog={false}
              title="Chat App"
              description="A real-time messaging Chat App using React, Socket.io, Node.js, Redux-Toolkit, and MongoDB. This tutorial series covers everything from setup to implementation, offering valuable insights and practical skills."
              ghLink="https://github.com/Safayat-Hossain-007/Chat-App"
                           
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Tech Blogs"
              description="I built a personal blog page using Next.js and Tailwind CSS. The blog dynamically renders content from markdown files, making it easy to write and manage posts. It also supports dark mode for a better reading experience."
              ghLink="https://github.com/Safayat-Hossain-007/Tech-BLogs"
              demoLink="https://tech-blogs-dnnmyzpuo-safayats-projects.vercel.app/"
            />
          </Col>

          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Sentiment Analysis and Emotion Detection"
              description="I trained a CNN classifier using the 'FER-2013' dataset with Keras and TensorFlow as the backend. The classifier successfully predicted various human emotions, achieving a highest accuracy of 60.1%.Next, I utilized OpenCV to detect faces in images. Once a face was detected, it was passed to the classifier to predict the person's emotion."
              ghLink="https://github.com/Safayat-Hossain-007/Sentiment-Detection/tree/master"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
