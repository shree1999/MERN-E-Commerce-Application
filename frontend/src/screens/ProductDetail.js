import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, ListGroup, Image } from "react-bootstrap";
import axios from "axios";

import Rating from "../components/Rating";
import Loader from "../shared/Loader";
import AlertComponent from "../shared/Alert";
import { getProduct } from "../actions/productActions";

const ProductDetail = ({ match }) => {
  const dispatch = useDispatch();

  const productDetail = useSelector(state => state.productDetail);
  const { loading, product, errMessage } = productDetail;

  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, [dispatch]);

  return (
    <React.Fragment>
      <Link to="/" className="btn btn-light">
        <i class="fas fa-arrow-left"></i>
        {"  "}Go Back
      </Link>

      <Row>
        {loading ? (
          <Loader />
        ) : errMessage ? (
          <AlertComponent variant="danger">{errMessage}</AlertComponent>
        ) : (
          <React.Fragment>
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
                    value={product.avgRating}
                    text={`${product.numReviews} reviews`}
                  />
                </ListGroup.Item>
              </ListGroup>

              <ListGroup horizontal className="justify-content-center mt-3">
                <ListGroup.Item>
                  <h5> Price: ${product.price} </h5>
                </ListGroup.Item>

                <ListGroup.Item>
                  <h5>
                    {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                  </h5>
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
          </React.Fragment>
        )}
      </Row>
    </React.Fragment>
  );
};

export default ProductDetail;
