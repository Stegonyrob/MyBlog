import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Col } from "react-bootstrap";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Card bg="dark" className="footer">
      <p>
        <em>Soy Linux</em>
        {`© ${currentYear} - Todos los derechos reservados recordar poner enlace a github`}
      </p>
    </Card>
  );
};

export default Footer;
