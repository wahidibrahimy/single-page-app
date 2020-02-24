import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Product from "./Components/Product/Product";
import Employee from "./Components/Employee/Employee";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul className="formatlinks">
                <li style={{ display: "inline-block", margin: "20px" }}>
                  <Link to="/">Home</Link>
                </li>
                <li style={{ display: "inline-block" }}>
                  <Link to="/employee">Employee</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Route path="/" component={Product} exact />
          <Route path="/employee" component={Employee} exact />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
