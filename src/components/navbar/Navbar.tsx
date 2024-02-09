import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const linkMapping = {
    Forside: "/",
    Produkter: "/products",
    "Om TTS": "/about",
    Kontakt: "/contact",
  };

  return (
    <nav className="navbar">
      <div className="logo">The Table Shop</div>
      <div className={`menu-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isOpen ? "showMenu" : ""}`}>
        {Object.entries(linkMapping).map(([text, path]) => (
          <li key={text}>
            <Link to={path} onClick={closeMenu}>
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
