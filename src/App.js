import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Navbar,
  Nav,
  Col,
  Image,
  NavDropdown,
  Carousel,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import Tacos from "./routers/TacosRouters";
import Sandwiches from "./routers/SandwichesRouters";
import MyOffSet from "./components/MyOffSet";
import Loading from "./components/Loading";
import MyVerticallyCenteredModal from "./components/MyVerticallyCenteredModal";

import MyButton from "./components/MyButton";

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [btnActivo, setBtnActivo] = useState("Cargando");
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [nombres, setNombres] = useState([]);

  const handleSelect = () => {
    setModalShow(true);
  };

  const handleSelectFromButton = (props) => {
    console.log(props.target.id);
    setBtnActivo(props.target.id);
    setModalShow(true);
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setNombres(res.data);
    });
  }, []);

  return (
    <Router>
      <Navbar
        style={{ paddingLeft: 20, paddingRight: 20 }}
        sticky="top"
        collapseOnSelect
        bg="dark"
        variant="dark"
        expand="md"
      >
        <LinkContainer to="/tacos">
          <Navbar.Brand href="#home">
            {" "}
            <img
              alt=""
              src="https://react-bootstrap.github.io/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            SAI
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/tacos">
              <Nav.Link>Tacos</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sandwiches">
              <Nav.Link>Sandwiches</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/sandwiches">
              <Nav.Link>{btnActivo}</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item onClick={() => handleShow()}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleSelect()}>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <MyButton
            _handleSelectFromButton={(a) => handleSelectFromButton(a)}
          />
        </Navbar.Collapse>
      </Navbar>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <MyOffSet show={show} onHide={() => setShow(false)} />


        <Switch>
          <Route path={"/tacos"}>
            {nombres.length === 0 || nombres.length === null ? (
              <Loading />
            ) : (
              <u>
                <Tacos data={nombres} />{" "}
              </u>
            )}
          </Route>
          <Route path={"/sandwiches"}>
            {nombres.length === 0 || nombres.length === null ? (
              <Loading />
            ) : (
              <Sandwiches data={nombres} />
            )}
          </Route>
        </Switch>
      
    </Router>
  );
}

export default App;
