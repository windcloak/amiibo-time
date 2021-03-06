import React from "react";
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import "./Header.scss";
import Logo from '../../assets/icons/logo.svg';

function Header() {
  return (
      
<>
<Navbar collapseOnSelect expand="lg" variant="light">
  
<Container className="pl-sm-5">
  <Navbar.Brand href="/" className="font-weight-bold" title="Home Page">
  <img
        alt=""
        src={Logo}
        width="50"
        height="30"
        className="myimag d-inline-block align-top"
      />{' '}
    Amiibo Time</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/about" title="About Website" className="font-weight-bold">About</Nav.Link>
      <Nav.Link href="/amiibo" title="What are amiibo?" className="font-weight-bold">Amiibo</Nav.Link>
    </Nav>
  </Navbar.Collapse>

</Container>

</Navbar>
</>

  );
}

export default Header;
