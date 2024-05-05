import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageStack from './imageStack';
import '../styles/LoginPage.css';
import logo from '../styles/logo-nobg.png';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault(); 

    navigate('/dashboard'); 
  };

  return (
    <div className="main-layout">
      <ImageStack />
      <div className="login-container">
        <header className="login-header">
          <img src={logo} alt="AnimoHub Logo" className="login-logo" />
          AnimoHub Digital Repository System
        </header>
        <div className="login-body">
          <button className="google-login">Sign in using Google</button>
          <div className="or-section">OR</div>
          <form className="login-form" onSubmit={handleLogin}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">LOGIN</button>
          </form>
          <div className="forgot-password">Forgot Password?</div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
