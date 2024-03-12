import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import CartWidget from "../CartWidget/CartWidget";
import Logo from "/CannabisTips.png";

const NavBar = () => {
  return (
    <Navbar
      expand="sm"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container className="logo">
        <img src={Logo} alt="Logo Cannabis" />
      </Container>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="menu">
            <Nav.Link href="#Semillas">Semilla</Nav.Link>
            <Nav.Link href="#Luces">Luces</Nav.Link>
            <Nav.Link href="#Carpas">Carpas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container className="cart">
        <CartWidget />
      </Container>
    </Navbar>
  );
};

export default NavBar;
