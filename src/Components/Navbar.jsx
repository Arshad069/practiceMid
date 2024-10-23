import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from React Router
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyLogo</div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/services" activeClassName="active">Services</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
