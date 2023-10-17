import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './createtrains.css'; // Import the CSS file for styling

const TrainStatusPage = () => {
  const { id } = useParams(); // Get the train ID from the URL
  const [trainName, setTrainName] = useState('');
  const [trainState, setTrainState] = useState('');
  const navigate = useNavigate(); // Import useNavigate from react-router-dom

  useEffect(() => {
    // Fetch train data based on the ID when the component mounts
    fetch(`https://localhost:7261/api/Train/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTrainName(data.name);
        setTrainState(data.status ? 'active' : 'disabled');
      })
      .catch((error) => console.error('Error fetching train data:', error));
  }, [id]); // Add id to the dependency array to trigger the effect when it changes

  const handleTrainNameChange = (e) => {
    setTrainName(e.target.value);
  };

  const handleTrainStateChange = (e) => {
    setTrainState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create an object with the updated train data
    const updatedTrain = {
      name: trainName,
      status: trainState === 'active' ? true : false
    };
  
    fetch(`https://localhost:7261/api/Train/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTrain)
    })
    .then((response) => {
      if (response.ok) {
        console.log('Train updated successfully');
        alert('Train updated successfully');
        navigate('/train-view');
        // You can add code to navigate to a success page or perform other actions after a successful update.
      } else {
        console.error('Error updating train:', response.status);
        alert('Train update failed');
        // You can handle errors here, e.g., display an error message to the user.
      }
    })
    .catch((error) => {
      console.error('Error updating train:', error);
      alert('Train update failed');
      // Handle other errors, e.g., network issues.
    });
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
