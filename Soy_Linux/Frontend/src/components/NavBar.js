import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import logo from "../img/logo.png";
import { NavLink } from "react-router-dom";

const CustomNavbar = ({ onAddClick }) => {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname ? "active" : "";
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#">
        <img src={logo} alt="Logo" className="logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            isActive={(match, location) => {
              if (match) {
                return true;
              } else if (location.pathname === "/") {
                return true;
              } else {
                return false;
              }
            }}
          >
            Sobre mi
          </Nav.Link>

          <Nav.Link as={Link} to="/home" className={isActive("/home")}>
            Publicaciones
          </Nav.Link>
          <Nav.Link
            as={Link}
            to="/newarticle"
            className={isActive("/newarticle")}
            onClick={onAddClick}
          >
            Añadir
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
