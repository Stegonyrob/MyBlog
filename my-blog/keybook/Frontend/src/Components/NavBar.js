import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { ReactNavbar } from "react-responsive-animate-navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/react-responsive-animate-navbar/style/responsive-animate-navbar.css";
import logo from "./logo.png";
const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (pathname) => {
    return location.pathname === pathname ? "active" : "";
  };

  return (
    <ReactNavbar
      color="dark"
      logo="Soy Linux"
      menu={[
        { name: "Sobre mi", to: "/" },
        { name: "Galeria", to: "/gallery" },
        { name: "Añadir", to: "/add" },
        { name: "Páginas sugeridas", to: "/suggested-pages" },
      ]}
      brand=""
      responsive
    >
      <Navbar className="bg-dark text-white" expand="lg" variant="light">
        <Navbar.Brand href="#">
          <img src={logo} alt="Logo" className="logo-img" />
        </Navbar.Brand>

        <Nav className="mb-2">
          <NavDropdown title="Menú" id="navbarScroll" className="">
            <NavDropdown.Item as={Link} to="/" className={isActive("/")}>
              Sobre mi
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/gallery"
              className={isActive("/gallery")}
            >
              Galeria
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/add" className={isActive("/add")}>
              Añadir
            </NavDropdown.Item>
            <NavDropdown.Item
              as={Link}
              to="/suggested-pages"
              className={isActive("/suggested-pages")}
            >
              Páginas sugeridas
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar>
    </ReactNavbar>
  );
};

export default Navbar;
