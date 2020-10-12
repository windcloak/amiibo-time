import React from "react";
import { Row, Col } from "react-bootstrap";
import PacmanLoader from "react-spinners/PacmanLoader";

function Loader({ isLoading }) {
  const override = `
  display: block;
  margin: 0 auto;
`;

  return (
    <Row className="py-5">
      <Col>
        <PacmanLoader
          css={override}
          size={25}
          color={"#3aa8ad"}
          loading={isLoading}
        />
      </Col>
    </Row>
  );
}
export default Loader;
