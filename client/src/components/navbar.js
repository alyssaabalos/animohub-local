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
          <a href="/" className="nav-link">HOME</a>
        </li>
        <li className="nav-item">
          <a href="/submissions" className="nav-link">SUBMISSIONS</a>
        </li>
        <li className="nav-item">
          <a href="/myaccount" className="nav-link">MY ACCOUNT</a>
        </li>
        <li className="nav-item">
          <a href="/contactus" className="nav-link">CONTACT US</a>
        </li>
        <li className="nav-item">
          <a href="/logout" className="nav-link">LOG OUT</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
