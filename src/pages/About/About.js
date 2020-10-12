import React from "react";
import { Row, Col, Container, ListGroup } from "react-bootstrap";
import "./About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About() {
  return (
    <Container fluid>
      <Row className="justify-content-center px-2">
        <Col sm={6}>
          <h1 className="py-4">About Website</h1>
          <p>Amiibo Time was developed by May Guo</p>
          <p>
            It uses React JS as the framework and several 3rd party libraries
            like Bootstrap.
          </p>
          <p>
            This website uses the{" "}
            <a
              href="https://www.amiiboapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Amiibo API
            </a>
          </p>
          <p>
            Find the code on{" "}
            <a
              href="https://github.com/windcloak/amiibo-time"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon="code" />
              <span className="pl-1">Github</span>
            </a>
          </p>
          <p>Follow me on</p>
          <ListGroup className="col-sm-3">
            <ListGroup.Item
              action
              href="https://github.com/windcloak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "github"]} size="2x" />
              <span className="pl-2">Github</span>
            </ListGroup.Item>

            <ListGroup.Item
              action
              href="https://www.linkedin.com/in/xinmei-guo/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" />
              <span className="pl-2">Linkedin</span>
            </ListGroup.Item>

            <ListGroup.Item
              action
              href="https://medium.com/@xfirecloak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "medium"]} size="2x" />
              <span className="pl-2">Medium</span>
            </ListGroup.Item>

            <ListGroup.Item
              action
              href="https://twitter.com/firecloak"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
              <span className="pl-2">Twitter</span>
            </ListGroup.Item>
          </ListGroup>

          <h1 className="py-3">Disclaimer</h1>
          <p className="pb-3">
            Game trademarks and copyrights are properties of their respective
            owners. <br />
            Nintendo properties are trademarks of Nintendo. © 2018 Nintendo.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
