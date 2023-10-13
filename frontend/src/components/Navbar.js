// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import "./navigation.css"; // Adjust the path based on your file structure

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/home">Home</Link>
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/train-create">Create a Schedule</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/ticket-create">Book a Ticket</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/activate-account">Activate an Account</Link>
            </li>
          </ul>
        </div>
        <div className="ml-auto d-flex align-items-center">
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
