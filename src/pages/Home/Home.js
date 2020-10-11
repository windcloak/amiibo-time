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
import DropdownButton from "react-bootstrap/DropdownButton";
import PacmanLoader from "react-spinners/PacmanLoader";

function Home() {
  const [seriesLoading, setSeriesLoading] = useState(true);
  const [loadingAmiibo, setLoadingAmiibo] = useState(true);
  const [searchCharacter, setSearchCharacter] = useState("");
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
    setLoadingAmiibo(true);
    axios
      .get(`${API_AMIIBOS_URL}?amiiboSeries=${seriesTerm}`)
      .then((res) => {
        console.log(res.data);
        setAmiibos(res.data);
        setLoadingAmiibo(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, [seriesTerm]); // only rerun if series term changes


  // get character
  useEffect(() => {
    
    if (searchCharacter==="")
      return;

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
        setError(true);
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
      <Card key={i} className="text-center border-0 bg-transparent p-5">
        <Card.Img variant="top" src={amiibo.image} />
        <Card.Body>
          <Card.Title>{amiibo.character}</Card.Title>
          {/* <Card.Text>Cases {data.cases}</Card.Text> */}
        </Card.Body>
      </Card>
    );
  });

  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
`;


  return (
    <Container>
      <Row className="py-4">
        <Col>
          <h1 className="text-center">Search for Amiibo</h1>
        </Col>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center">
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

           {/* <Button type="submit" className="my-1">
              Submit
            </Button>  */}
          </Form>
        </Col>
      </Row>

      <Row>
        <Col className="d-grid justify-content-center">
          <PacmanLoader
            css={override}
            size={25}
            color={"blue"}
            loading={loadingAmiibo}
          />

          <CardColumns>{amiiboCard}</CardColumns>
        </Col>
      </Row>
    </Container>
  );
}
export default Home;
