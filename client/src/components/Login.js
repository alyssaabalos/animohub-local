import React from 'react';
import { useNavigate, Link } from 'react-router-dom';  // Import Link here
import ImageStack from './imageStack';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import '../styles/css/LoginPage.css';
import logo from '../styles/images/logo-nobg.png';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/dashboard');
  };

  const handleGoogleSuccess = (response) => {
    console.log('Google response:', response);
    // Here, you might want to extract the token or user details and store them
    navigate('/dashboard');
  };

  const handleGoogleFailure = (error) => {
    console.error('Google Sign in was unsuccessful: ', error);
    // Optionally handle errors, such as showing a message to the user
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
          <GoogleOAuthProvider clientId="731979151229-sitlrvrcq7cd9h7empf0orvti4f9jfo4.apps.googleusercontent.com">
            <GoogleLogin
              buttonText="Sign in using Google"
              onSuccess={handleGoogleSuccess}
              onFailure={handleGoogleFailure}
              cookiePolicy={'single_host_origin'}
            />
          </GoogleOAuthProvider>
          <div className="or-section">OR</div>
          <form className="login-form" onSubmit={handleLogin}>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <div className="button-container">
              <button type="submit">LOGIN</button>
              <div className="forgot-password">Forgot Password?</div> {/* Move this inside the button container */}
            </div>
          </form>
          <p id="question">Don't have an account? <Link to="/register">Register</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
