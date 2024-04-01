import "./NavBar.css";
import Logo from "/CannabisTips.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";

export const NavBar = ({ itemsInCart }) => {
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
            <Nav.Link to="/" as={NavLink}>
              Inicio
            </Nav.Link>
            <Nav.Link to="/category/ventilacion" as={NavLink}>
              Ventilacion
            </Nav.Link>
            <Nav.Link to="/category/luces" as={NavLink}>
              Luces
            </Nav.Link>
            <Nav.Link to="/category/carpas" as={NavLink}>
              Carpas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container className="cart">
        <CartWidget itemsInCart={itemsInCart} />
      </Container>
    </Navbar>
  );
};
