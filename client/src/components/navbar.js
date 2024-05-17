import React from 'react';
import '../styles/navbar.css';
import logo from '../styles/logo-nobg.png';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <img src={logo} alt="AnimoHub Logo" className="logo" />
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/dashboard" className="nav-link">HOME</a>
        </li>
        <li className="nav-item">
          <a href="/submit" className="nav-link">SUBMISSIONS</a>
        </li>
        <li className="nav-item">
          <a href="/requestform" className="nav-link">REQUESTS</a>
        </li>
        <li className="nav-item">
          <div className="nav-link dropdown-toggle">MY ACCOUNT</div>
          <ul className="dropdown-menu">
            <li><a href="/">Logout</a></li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
