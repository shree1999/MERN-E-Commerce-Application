import React from "react";
import Container from "react-bootstrap/Container";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductDetail from "./screens/ProductDetail";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Container className="px-0">
        <main className="py-3">
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductDetail} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
