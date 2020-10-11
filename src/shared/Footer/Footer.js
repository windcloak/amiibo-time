import React from "react";
import {
  Row,
  Col,
  Container,
} from "react-bootstrap";
import "./Footer.scss";

function Footer() {
  return (
      <Container fluid>
        <Row>
          <Col className="d-flex justify-content-center align-items-center py-3 footer">
          Amiibo Time &copy; May. <br />Amiibo &copy; Nintendo
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;
