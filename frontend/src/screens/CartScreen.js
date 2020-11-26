import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button, ListGroup, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import Alert from "../shared/Alert";
import { addCartItem } from "../actions/cartActions";
import Cart from "../components/Cart";

const CartScreen = ({ match, location, history }) => {
  /*
    match -> to get the parameters donated by :id
    location -> to get query string
    history for redirecting
  */
  const productId = match.params.id;
  // location.search will give us everything after ? in the url
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addCartItem(productId, qty));
    }
  }, [dispatch, productId, qty]);

  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Alert>
            Your cart is empty <Link to="/"> Go Back</Link>
          </Alert>
        ) : (
          <ListGroup variant="flush">
            <Cart cartItems={cartItems} />
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                {" "}
                Subtotal (
                {cartItems.reduce((acc, item) => acc + Number(item.qty), 0)})
                items
              </h2>
              Total:{" "}
              {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0)}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
              >
                Proceed To Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
