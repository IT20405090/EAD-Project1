// Import necessary components and libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; // Import the custom CSS file

// Define the LoginPage component
const LoginPage = () => {
  // Initialize state for username and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Get the navigation function from react-router-dom
  const navigate = useNavigate();

  // Handle changes in the username input
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // Handle changes in the password input
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle the login action
  const handleLogin = () => {
    // For simplicity, log the entered username and password
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your authentication logic here (e.g., call an API, validate against a database)

    // If authentication is successful, navigate to the Home page
    navigate('/home');
  };

  // Handle the registration action
  const handleRegister = () => {
    // If registration is successful, navigate to the Registration page
    navigate('/Register');
  };

  return (
    // Render the login page
    <div className="login-background">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card1">
            <div className="card-header1">
              <h3>Login</h3>
            </div>
            <div className="card-body1">
              <form>
                {/* Username Input */}
                <br/>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                {/* Password Input */}
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                {/* Login Button */}
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleLogin}
                >
                  Login
                </button>

                &nbsp;&nbsp;&nbsp;&nbsp;

                {/* Register Button */}
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleRegister}
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the LoginPage component
export default LoginPage;
