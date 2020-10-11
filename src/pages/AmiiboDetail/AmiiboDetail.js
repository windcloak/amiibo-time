import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import axios from "axios";
import "./AmiiboDetail.scss";
import Loader from "../../shared/components/Loader/Loader";

function AmiiboDetail({ match }) {
  const [amiibo, setAmiibo] = useState({});
  const [amiiboDate, setAmiiboDate] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const API_URL = `https://www.amiiboapi.com/api/amiibo/?id=${match.params.id}`;

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        setAmiibo(res.data.amiibo);
        setAmiiboDate(res.data.amiibo.release);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Container fluid>

<Loader loading={loading} />
<Row className="justify-content-center">
        <Col sm={4}>

      
          <Card className="bg-transparent border-0 py-4">
            <Card.Title>
              <h1 className="pl-5">{amiibo.character}</h1>
            </Card.Title>
            <Card.Img variant="top" src={amiibo.image} alt={amiibo.character}/>
            <Card.Body>
            <ListGroup className="list-group-flush border-0">
              <ListGroupItem>
                <b>Amiibo Series:</b> {amiibo.amiiboSeries}
              </ListGroupItem>
              <ListGroupItem>
                <b>Type:</b> {amiibo.type}
              </ListGroupItem>
            </ListGroup>

            <Card.Header><b>Release Date</b></Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>NA {amiiboDate.na}</ListGroup.Item>
              <ListGroup.Item>JP {amiiboDate.jp}</ListGroup.Item>
              <ListGroup.Item>AU {amiiboDate.au}</ListGroup.Item>
              <ListGroup.Item>EU {amiiboDate.eu}</ListGroup.Item>
            </ListGroup>
          </Card.Body></Card>


</Col>
</Row>

    </Container>
  );
}

export default AmiiboDetail;
