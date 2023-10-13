// Import necessary components and libraries
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './register.css'; // Import the custom CSS file

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const navigate = useNavigate(); // Import useNavigate from react-router-dom

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Check if the passwords match
    setPasswordMatchError(e.target.value !== reenterPassword);
  };

  const handleReenterPasswordChange = (e) => {
    setReenterPassword(e.target.value);
    // Check if the passwords match
    setPasswordMatchError(e.target.value !== password);
  };

  const handleRegister = () => {
    // Frontend validation: Check if passwords match
    if (password !== reenterPassword) {
      // Notify the user about the password mismatch
      alert('Passwords do not match. Please re-enter your passwords.');
      return; // Do not proceed with registration
    }

    // log the entered data 
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Mobile Number:', mobileNumber);
    console.log('Address:', address);
    console.log('Password:', password);

    // Add your registration logic here (call API to register the user)

    // If registration is successful, navigate to the Home page
    navigate('/home');
  };

  return (
    <div className="register-background">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card3">
            <div className="card-header3">
              <h3>Register</h3>
            </div>
            <div className="card-body3">
              <form>
                {/* Row 1: Username and Mobile Number */}
                <div className="row">
                  <div className="col-md-6">
                    {/* Username Input */}
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
                  </div>
                  <div className="col-md-6">
                    {/* Mobile Number Input */}
                    <div className="mb-3">
                      <label htmlFor="mobileNumber" className="form-label">
                        Mobile Number
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={handleMobileNumberChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>

                {/* Row 3: Password and Re-enter Password */}
                <div className="row">
                  <div className="col-md-6">
                    {/* Password Input */}
                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${passwordMatchError ? 'is-invalid' : ''}`}
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                      {passwordMatchError && (
                        <div className="invalid-feedback">Passwords do not match.</div>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* Re-enter Password */}
                    <div className="mb-3">
                      <label htmlFor="reenterPassword" className="form-label">
                        Re-enter Password
                      </label>
                      <input
                        type="password"
                        className={`form-control ${passwordMatchError ? 'is-invalid' : ''}`}
                        id="reenterPassword"
                        value={reenterPassword}
                        onChange={handleReenterPasswordChange}
                      />
                      {passwordMatchError && (
                        <div className="invalid-feedback">Passwords do not match.</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Row 4: Address */}
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <textarea
                    className="form-control"
                    id="address"
                    rows="5"
                    value={address}
                    onChange={handleAddressChange}
                  ></textarea>
                </div>

                {/* Register Button */}
                <button
                  type="button"
                  className="btn btn-primary"
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

export default RegisterPage;
