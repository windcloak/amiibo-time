import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./Amiibo.scss";
import AmiiboImg from "../../assets/img/pro_controller.jpg";

function Amiibo() {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col sm={6}>
          <h1 className="py-3">What Are Amiibo?</h1>
          <p>
            Amiibo are figures Nintendo made that can be used in game. You can
            scan them into games to get bonuses, such as new outfits and
            power-ups. They can come in the form of cards or figures.
          </p>

          <p>
            You can use one amiibo in multiple games. In Smash Bros Ultimate,
            you can fight and train them. In Animal Crossing, they can be your
            villagers.
          </p>

          <p>
            You will need a Nintendo Joy-Con or Pro controller to scan in your
            amiibo. Hold the base of the amiibo over the middle of the
            controller to scan it in.
          </p>

          <figure class="figure">
            <img
              src={AmiiboImg}
              alt="Scanning amiibo into controller"
              width="500px"
            />
          </figure>
          <figcaption class="figure-caption">
            Scanning Daisy amiibo with Pro Controller
          </figcaption>

          <h2 className="py-3">Where do I buy them?</h2>
          <ul>
              <li>
                  Amazon
              </li>
              <li>
                  Gamestop
              </li>
              <li>
                  Walmart
              </li>
              <li>
                  Target
              </li>
              <li>
                  Ebay
              </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Amiibo;
