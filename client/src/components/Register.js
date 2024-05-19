import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ImageStack from './imageStack';
import '../styles/Register.css';
import logo from '../styles/logo-nobg.png'; // Make sure the image path is correct and the image has a transparent background

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get('firstname');
    const lastName = formData.get('lastname');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');

    // Basic validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert('All fields are required.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Placeholder for actual registration logic
    // registerUser({ firstName, lastName, email, username, password }).then(
    //   () => {
    //     alert('Registration successful!');
    //     navigate('/dashboard'); // Redirect on success
    //   },
    //   error => {
    //     alert('Registration failed: ' + error.message);
    //   }
    // );
    console.log('Registration data:', { firstName, lastName, email, password }); // Simulate successful registration
    navigate('/dashboard'); // Simulate redirection after registration
  };

  return (
    <div className="main-layout">
      <ImageStack />
      <div className="register-container">
        <header className="register-header">
          <img src={logo} alt="AnimoHub Logo" className="register-logo" />
          AnimoHub Digital Repository System
        </header>
        <div className="register-body">
          <form className="register-form" onSubmit={handleRegister}>
            <input type="text" name="firstname" placeholder="First Name" required />
            <input type="text" name="lastname" placeholder="Last Name" required />
            <div className="info-fields">
              <input type="text" name="age" placeholder="Age" required />
              <input type="text" name="occupation" placeholder="Occupation" required />
            </div>
            <input type="email" name="email" placeholder="Email" required />
            <input type="password" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" name="password" placeholder="Password" title="Password must be at least 8 characters long and include letters and numbers." required />
            <input type="password" pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}" name="confirmPassword" placeholder="Confirm Password" required />
            <button type="submit" className="submit">REGISTER</button>
          </form>
          <p id="question">Already have an account? <Link to="/">Sign in</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
