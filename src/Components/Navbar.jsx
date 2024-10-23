import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ThemeCounterContext } from '../ThemeCounterContext';
import { FaBars } from 'react-icons/fa'; // Import hamburger icon
import '../Styles/Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme, counter, incrementCounter, decrementCounter } = useContext(ThemeCounterContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`navbar ${theme}`}>
      <div className="logo">MyLogo</div>
      <div className={`menu ${isOpen ? 'open' : ''}`}>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/about" activeClassName="active">About</NavLink> 
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <FaBars size={24} /> {/* Hamburger icon */}
      </div>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <div className="counter">
        <button onClick={decrementCounter}>-</button>
        <span>{counter}</span>
        <button onClick={incrementCounter}>+</button>
      </div>
    </nav>
  );
};

export default Navbar;
