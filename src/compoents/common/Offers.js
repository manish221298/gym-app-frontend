import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const Offers = () => {
  return (
    <div>
      <Container>
        <Row className="row">
          <Col xs={12} md={5} lg={5} className="col">
            sm=8
          </Col>
          <Col xs={12} md={5} lg={5} className="col">
            sm=4
          </Col>
        </Row>
        <Row className="row">
          <Col className="col">sm=true</Col>
        </Row>
      </Container>
    </div>
  );
};

export default Offers;
