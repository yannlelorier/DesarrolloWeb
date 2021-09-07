import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function RouteConfigExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/tacos">Tacos</Link>
          </li>
          <li>
            <Link to="/sandwiches">Sandwiches</Link>
          </li>
        </ul>

        <Switch>
          <Route path={"/tacos"} component={Tacos} />
          <Route path={"/sandwiches"} component={Sandwiches} />
        </Switch>
      </div>
    </Router>
  );
}

function Sandwiches() {
  return <h2>Sandwiches</h2>;
}

function Tacos() {
  return <h2>Tacos</h2>;
}
