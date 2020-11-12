import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  Button,
  ListGroup,
  Form,
  Card,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import Alert from "../shared/Alert";
import { addCartItem } from "../actions/cartActions";

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
  }, [dispatch, addCartItem, productId, qty]);

  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default CartScreen;
