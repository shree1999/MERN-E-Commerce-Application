import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";

import Product from "../components/Product";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      const res = await axios.get("/api/products");

      setProducts(res.data);
    };

    fetchAllProducts();
  });

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
