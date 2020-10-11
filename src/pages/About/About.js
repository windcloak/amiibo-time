import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./About.scss";

function About() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col>
          <h1>About</h1>
<p>Amiibo are figures Nintendo made that can be used in game. In Smash Bros Ultimate, you can scan your amiibo and fight and train them.</p>

          <p>This  was made by May</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
