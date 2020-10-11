import React from "react";
import "./Loader.scss";
import {
  Row,
  Col,
} from "react-bootstrap";
import PacmanLoader from "react-spinners/PacmanLoader";

function Loader(loading) {
  const override = `
  display: block;
  margin: 0 auto;
`;

  return (
      <Row>
        <Col className="d-grid justify-content-center">
          <PacmanLoader
            css={override}
            size={25}
            color={"primary"}
            loading={loading}
          />
        </Col>
      </Row>
  );
}
export default Loader;
