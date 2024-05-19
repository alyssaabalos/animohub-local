import React from 'react';
import '../styles/css/navbar.css';
import logo from '../styles/images/logo-nobg.png';

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
          <a href="/submission" className="nav-link">SUBMISSIONS</a>
        </li>
        <li className="nav-item">
          <a href="/myrequests" className="nav-link">REQUESTS</a>
        </li>
        <li className="nav-item">
          <div className="nav-link dropdown-toggle">MY ACCOUNT
            <div className="dropdown-menu">
              <a href="/" className="logout-link">Logout</a>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
