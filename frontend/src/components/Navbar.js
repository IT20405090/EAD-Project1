// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'react-bootstrap';
import "./navigation.css"; // Adjust the path based on your file structure

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        {/* Logo or site title linked to the home page */}
        <Link className="navbar-brand" to="/home">Home</Link>

        {/* Navbar toggle button for mobile devices */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              {/* Link to the "Create a Schedule" page */}
              <Link className="nav-link" to="/train-create">Create a Schedule</Link>
            </li>
            <li className="nav-item">
              {/* Link to the "Book a Ticket" page */}
              <Link className="nav-link" to="/ticket-create">Book a Ticket</Link>
            </li>
            <li className="nav-item">
              {/* Link to the "Activate an Account" page */}
              <Link className="nav-link" to="/activate-account">Activate an Account</Link>
            </li>
            <li className="nav-item">
              {/* Link to the "View Bookings" page */}
              <Link className="nav-link" to="/ticket-management">View Bookings</Link>
            </li>
          </ul>
        </div>

        <div className="ml-auto d-flex align-items-center">
          {/* Button to handle user profile */}

           <Button className="btn btn-secondary"  href="/Update-user-profile">User Profile</Button>
                               
        </div>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        
        <div className="ml-auto d-flex align-items-center">
          {/* Button to handle logout */}
          <button className="btn btn-logout" onClick={handleLogout}>Logout</button>
        </div>

      </div>
    </nav>
  );
};

const handleLogout = () => {
  // Handle logout logic 
  console.log("Logout clicked");
};

export default Navbar;
