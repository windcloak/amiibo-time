import React from "react";
import {
  Navbar,
  Nav,
} from "react-bootstrap";
import "./Header.scss";

function Header() {
  return (
      
<>
<Navbar collapseOnSelect expand="lg" variant="light" className="align-items-center">
  <Navbar.Brand href="/" className="font-weight-bold" title="Home Page">Amiibo Time</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/about" title="About Website">About</Nav.Link>
      <Nav.Link href="/amiibo" title="What are amiibo?">Amiibo</Nav.Link>
    </Nav>
    {/* <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
    </Nav> */}
  </Navbar.Collapse>
</Navbar>
</>

  );
}

export default Header;
