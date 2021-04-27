import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-buttons">
        <li>
          <NavLink className="link-btn" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="link-btn" to="/register">
            Register
          </NavLink>
        </li>
        <li>
          <NavLink className="link-btn" to="/login">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink className="link-btn" to="/customer">
            Customers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
