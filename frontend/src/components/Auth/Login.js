// Import necessary components and libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'; // Import the custom CSS file


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Import useNavigate from react-router-dom

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // For simplicity, just log the entered username and password for now
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your authentication logic here (e.g., call an API, validate against a database)

    // If authentication is successful, navigate to the Home page
    navigate('/home');
  };

  const handleRegister = () => {


    // If authentication is successful, navigate to the Home page
    navigate('/Register');
  };

  return (
   
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

export default LoginPage;
