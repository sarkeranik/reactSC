import React from "react";
import logo from "./logo.svg";
import { Navbar, NavbarBrand } from "reactstrap";
import Menu from './components/MenuComponents';
import "./App.css";

function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div classNam="container">
          <NavbarBrand href="/">Restorent Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>

  );
}

export default App;
