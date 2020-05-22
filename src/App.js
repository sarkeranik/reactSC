import React from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div classNam="container">
          <NavbarBrand href="/">Restorent Confusion</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
