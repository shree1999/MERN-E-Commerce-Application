import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
  return (
    <React.Fragment>
      <h1>Our Recent Products</h1>
      <Row>
        {products.map(item => (
          <Col sm={12} md={6} lg={4} key={item._id.toString()}>
            <Product item={item} />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default HomeScreen;
