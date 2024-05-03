import React from 'react';
import '../styles/LoginPage.css';
import logo from '../styles/logo-nobg.png'

const LoginPage = () => {
  return (
    <div className="login-container">
      <header className="login-header">
      <img src={logo} alt="AnimoHub Logo" className="login-logo" />
        AnimoHub Digital Repository System
      </header>
      <div className="login-body">
        <button className="google-login">Sign in using Google</button>
        <div className="or-section">OR</div>
        <form className="login-form">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">LOGIN</button>
        </form>
        <div className="forgot-password">Forgot Password?</div>
      </div>
    </div>
  );
};

export default LoginPage;
