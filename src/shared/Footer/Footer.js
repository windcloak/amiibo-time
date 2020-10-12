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
        <Row className="text-center">
          <Col className="d-flex justify-content-center align-items-center py-3 footer">
            <small>Amiibo Time &copy; May with help from  <a href="https://www.amiiboapi.com" target="_blank" rel="noopener noreferrer"> Amiibo API</a><br />
            Game trademarks and copyrights are properties of their respective owners. 
Nintendo properties are trademarks of Nintendo.</small>

          
          </Col>
        </Row>
      </Container>
  );
}

export default Footer;
