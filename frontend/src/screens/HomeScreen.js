import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { listProducts } from "../actions/productActions";
import Product from "../components/Product";

const HomeScreen = () => {
  /*
    1. useDispatch is used for firing of action that we create and
    2. useSelector is used for getting the required state given be redux from reducers.
  */

  const dispatch = useDispatch();

  const productList = useSelector(state => state.productList);
  const { loading, products, errMessage } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <React.Fragment>
      <h1>Our Recent Products</h1>
      <Row>
        {loading ? (
          <h2>Loading...</h2>
        ) : errMessage ? (
          <h2>{errMessage}</h2>
        ) : (
          products.map(item => (
            <Col sm={12} md={6} lg={4} key={item._id.toString()}>
              <Product item={item} />
            </Col>
          ))
        )}
      </Row>
    </React.Fragment>
  );
};

export default HomeScreen;
