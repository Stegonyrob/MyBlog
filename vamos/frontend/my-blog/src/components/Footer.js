import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="footer-text">Soy Linux</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="footer-text">{`© ${currentYear} - Todos los derechos reservados recordar poner enlace a github`}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
