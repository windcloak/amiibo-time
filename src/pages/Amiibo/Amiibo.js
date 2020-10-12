import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import "./Amiibo.scss";
import AmiiboImg from "../../assets/img/pro_controller.jpg";

function Amiibo() {
  const linksArray = [
    {
      name: "Gamestop",
      url: "https://www.gamestop.com/search/?q=amiibo&lang=null",
    },
    {
      name: "Nintendo",
      url: "https://www.nintendo.com/amiibo/",
    },
    {
      name: "Amazon",
      url: "https://www.amazon.com/s?k=amiibo",
    },
    {
      name: "Ebay",
      url:
        "https://www.ebay.com/sch/i.html?_from=R40&_trksid=p2380057.m570.l1313&_nkw=amiibo&_sacat=0",
    },
    {
      name: "Walmart",
      url: "https://www.walmart.com/search/?query=amiibo",
    },
    {
      name: "Target",
      url: "https://www.target.com/s?searchTerm=amiibo",
    },
  ];

  const links = linksArray.map((link, i) => {
    return (
      <li>
        <a href={link.url} target="_blank" key={i} rel="noopener noreferrer">
          {link.name}
        </a>
      </li>
    );
  });

  return (
    <Container fluid>
      <Row className="justify-content-center px-2">
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
          <Image src={AmiiboImg} rounded fluid alt="Scanning amiibo into controller" />
          </figure>
          <figcaption class="figure-caption">
            Scanning Daisy amiibo with Pro Controller
          </figcaption>
          <h2 className="py-3">Where do I buy them?</h2>I personally prefer to
          buy them in-person at Gamestop since they are sometimes on sale.
          <ul className="py-3">
            {links}
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Amiibo;
