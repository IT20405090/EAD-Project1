import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './activate.css'; // Import the custom CSS file


const ActivatePage = () => {
  // State variables for form fields
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [NIC, setNIC] = useState('');

  // Event handlers for form fields
  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNICChange = (e) => setNIC(e.target.value);


  return (
    <div className="register-background">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card3">
            <div className="card-header3">
              <h3>Activate User Account</h3>
            </div>
            <div className="card-body3">
              <form>
                <br/>
                 {/* Username Input */}
                 <div className="mb-3">
                  <label htmlFor="Username" className="form-label">
                    Username of the User
                  </label>
                  <input
                    type="username"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>

                {/* NIC Input */}
                <div className="mb-3">
                  <label htmlFor="NIC" className="form-label">
                    NIC of the User
                  </label>
                  <input
                    type="NIC"
                    className="form-control"
                    id="NIC"
                    value={NIC}
                    onChange={handleNICChange}
                  />
                </div>

                {/* Email Input */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email Address of the User
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>

                {/* Register Button */}
                <button
                  type="button"
                  className="btn btn-primary"
                  // onClick={handleRegister}
                >
                  Activate Account
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivatePage;
