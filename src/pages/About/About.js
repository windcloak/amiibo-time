import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./About.scss";
import AmiiboImg from "../../assets/img/pro_controller.jpg";

function About() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm={6}>
   
          <h1>About Website</h1>
          <p>This website was developed by May Guo</p>
          <p>It uses React JS as the framework and several 3rd party libraries like Bootstrap. This is my first React app.</p>
          <p>It also utilizes the <a href="https://www.amiiboapi.com/" target="_blank" rel="noopener noreferrer">Amiibo API</a></p>
<p>Find the code on <a href="https://github.com/windcloak/amiibo-time" target="_blank" rel="noopener noreferrer">Github</a></p>
<p>Follow me on</p>
<ul>
    <li>
        Github
    </li>
    <li>
        Linkedin
    </li>
    <li>
        Medium
    </li>
    <li>
        Twitter
    </li>
</ul>


        </Col>
      </Row>
    </Container>
  );
}

export default About;
