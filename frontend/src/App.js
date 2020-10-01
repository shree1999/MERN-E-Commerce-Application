import React from "react";
import Container from "react-bootstrap/Container";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import "./App.css";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Container className="px-0">
        <main className="py-3">
          <HomeScreen />
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default App;
