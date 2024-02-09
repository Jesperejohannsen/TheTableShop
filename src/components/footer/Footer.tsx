import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://www.facebook.com/the.table.shop.danmark" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/thetableshopdk/" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
      <div className="contact-info">
        <p>Email: info@woodworks.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
    </footer>
  );
};

export default Footer;
