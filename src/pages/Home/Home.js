import React, { useEffect, useState } from "react";
// import './Home.scss';
import axios from "axios";
import { Row, Col, Container, Card, CardColumns, Dropdown } from "react-bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";

function Home() {
  const [seriesLoading, setSeriesLoading] = useState(true);
  const [error, setError] = useState(false);
  const [series, setSeries] = useState({ amiibo: [] });
  const [amiibos, setAmiibos] = useState({ amiibo: [] }); // amiibos by series
  const [seriesTerm, setSeriesTerm] = useState("Super Smash Bros."); // series to show

  const API_SERIES_URL = "https://www.amiiboapi.com/api/amiiboseries";
  const API_AMIIBOS_URL = "https://www.amiiboapi.com/api/amiibo/";

  // get all series
  useEffect(() => {
    axios
      .get(API_SERIES_URL)
      .then((res) => {
        // console.log(res.data);
        setSeries(res.data);
        setSeriesLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  // get all amiibos in the series
  useEffect(() => {
    axios
      .get(`${API_AMIIBOS_URL}?amiiboSeries=${seriesTerm}`)
      .then((res) => {
        console.log(res.data);
        setAmiibos(res.data);
        // setSeriesLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [seriesTerm]); // only rerun if series term changes

  const seriesItem = series.amiibo.map((data, i) => {
    return (
      <Dropdown.Item
        as="button"
        key={i}
        eventKey={data.name}
        onChange={(e) => setSeriesTerm(data.name)}
      >
        {data.name}
      </Dropdown.Item>
    );
  });

const amiiboCard = amiibos.amiibo.map((amiibo,i) => {
  return (
    <Card key={i} className="text-center m-5">
    <Card.Img variant="top" src={amiibo.image} />
    <Card.Body>
      <Card.Title>{amiibo.character}</Card.Title>
      {/* <Card.Text>Cases {data.cases}</Card.Text> */}
    </Card.Body>
  </Card>
  );
});

  return (
    <Container>
      <Row>
        <Col>
          <h1>Amiibo</h1>

          <DropdownButton id="dropdown-basic-button" title="Choose Series">
            {series && seriesItem}
          </DropdownButton>

          <button onClick={(e) => setSeriesTerm("Super Mario Bros.")}>
            click me to change
          </button>
        </Col>
      </Row>

      <Row>
        <Col>
          <CardColumns>
            { amiiboCard }
          </CardColumns>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
