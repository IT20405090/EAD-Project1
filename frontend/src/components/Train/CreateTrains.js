import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './createtrains.css'; // Import the CSS file for styling

const TrainFormPage = () => {
  const [name, setTrainName] = useState('');
  const [status, setTrainState] = useState('');
  const navigate = useNavigate(); // Import useNavigate from react-router-dom

  const handleTrainNameChange = (e) => {
    setTrainName(e.target.value);
  };

  const handleTrainStateChange = (e) => {
    setTrainState(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Convert the status to a boolean based on the dropdown selection
    const statusValue = status === 'active' ? true : false;
  
    // Create an object to represent the data you want to send to the API
    const data = {
      name: name,
      status: statusValue,
    };
  
    try {
      const response = await fetch('https://localhost:7261/api/Train', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (response.ok) {
        // Request was successful, you can add additional logic here
        console.log('Train added successfully');
        navigate('/train-view'); // Navigate to the view page
      } else {
        // Handle errors
        console.error('Failed to add train');
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  
  const handleViewTrains = () => {
    // Navigate to '/train-view' when "View Trains" button is clicked
    navigate('/train-view');
  };

  return (
    <div className="train-form-container">
      {/* Left side with form */}
      <div className="train-form-container-left d-flex align-items-center justify-content-center">
        <div className="train-form" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
          <br /> <br />
          <h2>Addition of New Trains</h2>
          <br />
          <center>
            <form onSubmit={handleSubmit}>
              <div className="mb-3" style={{ width: '450px' }}>
                <label htmlFor="trainName" className="form-label">
                  Name of the Train Engine
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="trainName"
                  value={name}
                  onChange={handleTrainNameChange}
                />
              </div>
              <div className="mb-3" style={{ width: '450px' }}>
                <label htmlFor="trainState" className="form-label">
                  State of the Train
                </label>
                <select
                  className="form-select"
                  id="trainState"
                  value={status}
                  onChange={handleTrainStateChange}
                >
                  <option value="">Select Train State</option>
                  <option value="active">Active</option>
                  <option value="disabled">Disabled</option>
                </select>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary me-2" >
                  Add Train
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleViewTrains}>
                  View Trains
                </button>
              </div>
            </form>
          </center>
        </div>
      </div>

      {/* Right side with picture */}
      <div className="train-picture"></div>
    </div>
  );
};

export default TrainFormPage;
