import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-buttons">
        <li>
          <NavLink activeClassName="link-btn" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="link-btn" to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="link-btn" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink activeClassName="link-btn" to="/customer">
            Customers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
