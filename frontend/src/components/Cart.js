import React from "react";
import { ListGroup, Row, Col, Image, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { addCartItem, removeCartItem } from "../actions/cartActions";

const Cart = props => {
  const dispatch = useDispatch();

  const removeCartItemHandler = id => {
    dispatch(removeCartItem(id));
  };

  return (
    <React.Fragment>
      {props.cartItems.map(item => (
        <ListGroup.Item key={item.product}>
          <Row>
            <Col md={2}>
              <Image src={item.image} alt={item.name} fluid rounded />
            </Col>
            <Col md={3}>
              <Link to={`/product/${item.product}`}>{item.name}</Link>
            </Col>
            <Col md={2}>{item.price}</Col>
            <Col md={3}>
              <Form.Control
                as="select"
                value={item.qty}
                onChange={e =>
                  dispatch(addCartItem(item.product, e.target.value))
                }
              >
                {[...Array(item.countInStock).keys()].map(num => (
                  <option key={num.toString()} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </Form.Control>
            </Col>
            <Col md={2}>
              <Button
                type="button"
                variant="light"
                onClick={() => removeCartItemHandler(item.product)}
              >
                <i className="fas fa-trash"></i>
              </Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
    </React.Fragment>
  );
};

export default Cart;
