import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button, ListGroup, Image, Form } from "react-bootstrap";

import Rating from "../components/Rating";
import Loader from "../shared/Loader";
import AlertComponent from "../shared/Alert";
import { getProduct } from "../actions/productActions";

const ProductDetail = ({ match, history }) => {
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  // fetching product detail from reducers.
  const productDetail = useSelector(state => state.productDetail);
  const { loading, product, errMessage } = productDetail;

  useEffect(() => {
    dispatch(getProduct(match.params.id));
  }, [dispatch, match.params.id]);

  const addToCartHandler = () => {
    // redirect to the cart page with number of items and id
    history.push(`/cart/${match.params.id}?qty=${qty}`);
  };

  return (
    <React.Fragment>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i>
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

                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>
                        <Form.Control
                          as="select"
                          value={qty}
                          onChange={event => setQty(event.target.value)}
                        >
                          {[...Array(product.countInStock).keys()].map(num => (
                            <option key={num.toString()}>{num + 1}</option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
              </ListGroup>

              <div className="mt-4">
                <Button
                  variant="dark"
                  className="btn btn-dark"
                  disabled={product.countInStock === 0}
                  onClick={addToCartHandler}
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
