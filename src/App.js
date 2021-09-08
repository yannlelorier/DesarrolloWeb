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
      {/* Navbar principal */}


      {/* Navbar franja negra */}
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
        {/* Termina Navbar franja negra */}


        {/* Links de navegacion */}
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
        {/* Terminan Links de navegacion */}


        {/* Links de navegacion derecha */}
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title={"Ruben"} id="collasible-nav-dropdown">
            <NavDropdown.Item>Home</NavDropdown.Item>
            <NavDropdown.Item>Another action</NavDropdown.Item>
            <NavDropdown.Item>Something</NavDropdown.Item>
            <NavDropdown.Item> Launch </NavDropdown.Item>
            <NavDropdown.Item>Info</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
        {/* Termina Links de navegacion derecha */}


        {/* Termina el  Navbar principal */}        
      </Navbar>

      {/* Agregar componentes no visibles */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      

      {/*  */}




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
