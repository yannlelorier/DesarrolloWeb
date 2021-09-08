import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Modal,
  Offcanvas,
} from "react-bootstrap";

function App() {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            SAI
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Link to="/tacos">Tacos</Link>
      <Link to="/sandwiches">Sandwiches</Link>

      <Switch>
        <Route path={"/tacos"} component={Tacos} />
        <Route path={"/sandwiches"} component={Sandwiches} />
      </Switch>
    </Router>
  );
}

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos(data) {
  return <h2>Tacos</h2>;
}

export default App;
