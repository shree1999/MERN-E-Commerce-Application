import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Col, Row, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";

import { userLoginAction } from "../actions/userAction";
import FormComponent from "../components/FormComponent";

const LoginScreen = ({ location }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const redirect = location.search ? location.search.split("=")[1] : "/";

  return (
    <FormComponent>
      <h1>Login</h1>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={event => setEmail(event.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={event => setPassword(event.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary">
          Login
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Customer?{" "}
          <Link to={redirect ? `/register?redirect=${redirect}` : "/register"}>
            Register
          </Link>
        </Col>
      </Row>
    </FormComponent>
  );
};

export default LoginScreen;
