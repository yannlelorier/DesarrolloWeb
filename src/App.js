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
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://react-bootstrap.github.io/logo.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          SAI
        </Navbar.Brand>

        <Nav defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link eventKey="Tacos">
              <Link to="/tacos">Tacos</Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Sandwiches">
              <Link to="/sandwiches">Sandwiches</Link>
            </Nav.Link>
          </Nav.Item>
          
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title={"Ruben"} id="collasible-nav-dropdown">
            <NavDropdown.Item>Home</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
            <NavDropdown.Item> Launch </NavDropdown.Item>
            <NavDropdown.Item>Info</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>

        
      </Navbar>

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
