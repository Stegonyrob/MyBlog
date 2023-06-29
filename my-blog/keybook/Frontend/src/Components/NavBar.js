import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaBars, FaTimes } from "react-icons/fa";
import "../App.css";

const CustomNavbar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);

  const isActive = (pathname) => {
    return location.pathname === pathname ? "active" : "";
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="custom-navbar">
      <Navbar.Brand href="#">
        <img src="/path/to/logo.png" alt="Logo" className="logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle
        onClick={toggleMenu}
        className={showMenu ? "collapsed" : ""}
      >
        {showMenu ? (
          <FaTimes className="menu-icon" />
        ) : (
          <FaBars className="menu-icon" />
        )}
      </Navbar.Toggle>
      <Navbar.Collapse
        className={`justify-content-end ${showMenu ? "show" : ""}`}
      >
        <Nav>
          <Nav.Link as={Link} to="/" className={isActive("/")}>
            Sobre mi
          </Nav.Link>
          <Nav.Link as={Link} to="/post" className={isActive("/post")}>
            Post
          </Nav.Link>
          <Nav.Link as={Link} to="/add" className={isActive("/add")}>
            Añadir
          </Nav.Link>
          <NavDropdown
            title="Páginas sugeridas"
            className={isActive("/suggested-pages")}
          >
            <NavDropdown.Item as={Link} to="/suggested-pages/page1">
              Página 1
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/suggested-pages/page2">
              Página 2
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
