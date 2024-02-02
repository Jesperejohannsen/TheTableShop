import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">WoodWorks</div>
      <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <ul className={`nav-links ${isOpen ? 'showMenu' : ''}`}>
        {['Home', 'Products', 'About Us', 'Contact', 'Cart(0)'].map((text, index) => (
          <li key={index}><a href={`/#${text.toLowerCase()}`} onClick={closeMenu}>{text}</a></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
