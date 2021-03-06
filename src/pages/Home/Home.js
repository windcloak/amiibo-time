import React, { useEffect, useState } from "react";
import "./Home.scss";
import axios from "axios";
import {
  Row,
  Col,
  Container,
  Card,
  CardColumns,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Loader from "../../shared/components/Loader/Loader";
import LazyLoad from 'react-lazyload';
// import LazyImg from "../../assets/img/lazyload.png";

function Home() {
  const [loadingAmiibo, setLoadingAmiibo] = useState(true);
  const [searchCharacter, setSearchCharacter] = useState("");
  const [series, setSeries] = useState({ amiibo: [] });
  const [amiibos, setAmiibos] = useState({ amiibo: [] }); // amiibos by series
  const [seriesTerm, setSeriesTerm] = useState("Super Smash Bros."); // series to show

  const API_SERIES_URL = "http://www.amiiboapi.com/api/amiiboseries/";
  const API_AMIIBOS_URL = "https://www.amiiboapi.com/api/amiibo/";

  // get all series
  useEffect(() => {
    axios
      .get(API_SERIES_URL)
      .then((res) => {
        setSeries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // get all amiibos in the series
  useEffect(() => {
    setLoadingAmiibo(true);
    axios
      .get(`${API_AMIIBOS_URL}?amiiboSeries=${seriesTerm}`)
      .then((res) => {
        setAmiibos(res.data);
        setLoadingAmiibo(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [seriesTerm]); // only rerun if series term changes


  // get character
  useEffect(() => {
    
    if (searchCharacter==="") {
      return;
    }

    setLoadingAmiibo(true);
    axios
      .get(`${API_AMIIBOS_URL}?name=${searchCharacter}`)
      .then((res) => {
        console.log(res.data);
        setAmiibos(res.data);
        setLoadingAmiibo(false);
      })
      .catch((err) => {
        console.log(err);
        // setError(true);
        setLoadingAmiibo(false);
      });
  }, [searchCharacter]); // only rerun if character term changes

  const seriesItem = series.amiibo.map((data, i) => {
    return (
      <option
        value={data.name}
        key={i}
        onChange={(e) => setSeriesTerm(data.name)}
      >
        {data.name}
      </option>
    );
  });

  const amiiboCard = amiibos.amiibo.map((amiibo, i) => {
    return (
      <Link to={`/amiibo/${amiibo.head}${amiibo.tail}`} key={i}>
      <Card  className="text-center border-0 bg-transparent p-md-5">

      <LazyLoad>
        <Card.Img variant="top" src={amiibo.image} />
        </LazyLoad>

        <Card.Body>
          <Card.Title>{amiibo.character}</Card.Title>
        </Card.Body>
      </Card>
      </Link>
    );
  });

  return (
    <Container>
      <Row className="py-4">
        <Col>
          <h1 className="text-center">Amiibo Time</h1>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center pb-5">
          <Form inline>
            <Form.Label
              className="my-1 mr-2"
              htmlFor="inlineFormCustomSelectPref"
            >
              Series
            </Form.Label>
            <Form.Control
              as="select"
              className="my-1 mr-sm-2"
              id="inlineFormCustomSelectPref"
              onChange={(e) => setSeriesTerm(e.target.value)}
              custom
            >
              {seriesItem}
            </Form.Control>

            <Form.Label htmlFor="character" srOnly>
              character
            </Form.Label>
            <Form.Control
              placeholder="Search for Character"
              name="character"
              onChange={(e) => setSearchCharacter(e.target.value)}
              required
            />

          </Form>
        </Col>
      </Row>



      <Row>
        <Col className="d-grid justify-content-center">

{ loadingAmiibo && <Loader loading={loadingAmiibo} /> }

          <CardColumns>{amiiboCard}</CardColumns>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
