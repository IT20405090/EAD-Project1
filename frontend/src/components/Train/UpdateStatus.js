import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './createtrains.css'; // Import the CSS file for styling

const TrainStatusPage = () => {
  const [trainName, setTrainName] = useState('');
  const [trainState, setTrainState] = useState('');
  const navigate = useNavigate(); // Import useNavigate from react-router-dom

  const handleTrainNameChange = (e) => {
    setTrainName(e.target.value);
  };

  const handleTrainStateChange = (e) => {
    setTrainState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Train Name:', trainName);
    console.log('Train State:', trainState);
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
          <h2>Update Train Status</h2>
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
                  value={trainName}
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
                  value={trainState}
                  onChange={handleTrainStateChange}
                >
                  <option value="">Select Train State</option>
                  <option value="active">Active</option>
                  <option value="disabled">Disabled</option>
                </select>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary me-2">
                  Update
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

export default TrainStatusPage;
