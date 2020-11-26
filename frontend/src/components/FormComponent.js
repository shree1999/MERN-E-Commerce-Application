import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const FormComponent = props => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};

export default FormComponent;
