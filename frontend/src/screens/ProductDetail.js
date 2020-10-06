import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import axios from "axios";

import Rating from "../components/Rating";

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/products/${match.params.id}`);

      setProduct(res.data);
    };

    fetchProduct();
  });

  return (
    <React.Fragment>
      <Link to="/" className="btn btn-light">
        <i class="fa fa-long-arrow-left" aria-hidden="true"></i>
        Go Back
      </Link>

      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <p>Description: {product.description}</p>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} reviews`}
              />
            </ListGroup.Item>
          </ListGroup>

          <ListGroup horizontal className="justify-content-center mt-3">
            <ListGroup.Item>
              <h5> Price: ${product.price} </h5>
            </ListGroup.Item>

            <ListGroup.Item>
              <h5>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</h5>
            </ListGroup.Item>
          </ListGroup>

          <div className="mt-4">
            <Button
              variant="dark"
              class="btn btn-dark"
              disabled={product.countInStock === 0}
            >
              Add to cart
            </Button>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default ProductDetail;
