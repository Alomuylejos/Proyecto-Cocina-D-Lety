import React from "react";
import "../css/Navbar.css";
import Logo from "../image/Logo.png";
const Navbar = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        <img src={Logo} alt="Logo Doña Lety" className="logo-image" />
      </div>

      <div className="nav-links">
        <a href="/">INICIO</a>
        <a href="/We">NOSOTROS</a>
        <a href="/Products">PRODUCTOS</a>
        <a href="/Contact" className="btn-contacto">
          CONTÁCTANOS
        </a>
      </div>
    </nav>
  );
};

export default Navbar;