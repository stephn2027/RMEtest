import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import '../css/navbar.css';

export default function Nav({ user }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <React.Fragment>
      <nav className="navbar">
        <Link to="/recipes" className="navbar-name" onClick={closeMobileMenu}>
          <h5 className="navbar-title">Recipe Creations</h5>
        </Link>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <NavLink
              to="/recipes"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Recipes
            </NavLink>
          </li>
          {!user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Login
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/register"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Register
                </NavLink>
              </li>
            </React.Fragment>
          )}
          {user && (
            <React.Fragment>
              <li className="nav-item">
                <NavLink
                  to="/profile"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  {user.email}
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/logout"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Logout
                </NavLink>
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </React.Fragment>
  );
}
