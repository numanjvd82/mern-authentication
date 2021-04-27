import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../../context/context';

const Navbar = () => {
  const { loggedIn } = useAuthContext();
  return (
    <nav className="nav">
      <ul className="nav-buttons">
        <li>
          <NavLink className="link-btn" to="/">
            Home
          </NavLink>
        </li>
        {loggedIn ? (
          <li>
            <NavLink className="link-btn" to="/logout">
              Logout
            </NavLink>
          </li>
        ) : (
          <li>
            <NavLink className="link-btn" to="/register">
              Register
            </NavLink>
            <NavLink className="link-btn" to="/login">
              Login
            </NavLink>
          </li>
        )}
        {loggedIn && (
          <li>
            <NavLink className="link-btn" to="/customer">
              Customers
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
