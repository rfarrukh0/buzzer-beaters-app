import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        <img src="/assets/images/buzzerbeaters.png" alt="Buzzer Beaters" />
      </Link>
      <Link to="/" className="menu-button">
        <img src="/assets/images/menubutton.png" alt="Menu" />
      </Link>
    </header>
  );
};

export default Header;
