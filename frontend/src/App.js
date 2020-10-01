import React from "react";
import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container className="px-0">
        <main>
          <h1>Welcome to E-commerce Website</h1>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default App;
