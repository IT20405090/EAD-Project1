import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import "./TrainSchedule.css"
import { Link } from 'react-router-dom';

const CreateTrainSchedule = () => {
  useEffect(() => {
    // Initialize datepicker when the component mounts
    $('.datepicker').datepicker();
  }, []);

  return (
    <div className="container-fluid">
    <div className="bg-light">
    <div className="container mt-5">
      <h2 className="TrainScehdule_topic" >Create Train Schedule </h2> <br/>
      <form>
        <div className="row" style={{ textAlign: 'left', color:'gray', fontSize:'20px' }}>
          <div className="col-md-6">
          
          <hr/>

            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="text" className="form-control datepicker" id="date" placeholder='Enter the date'  required />
            </div>
            
            <div className="mb-3">
              <label htmlFor="startTime" className="form-label">Start Time</label>
              <input type="time" className="form-control" id="startTime" placeholder='Enter the startug time' required />
            </div>

            <br/>
            <hr/>
            <div className="mb-3">
            <label htmlFor="duration" className="form-label">Train Engine</label>
            <input type="number" className="form-control" id="engine" placeholder='Enter the engine number' required /> 
            </div>

            <div className="mb-3">
              <label htmlFor="startingStation" className="form-label">Starting Station</label>
              <select className="form-select" id="startingStation" placeholder='Select the starting station' required>
                <option value="" disabled selected>Select Starting Station</option>
                <option>Gampaha</option>
                <option>Colombo-Fort</option>
                <option>Colombo-Maradana</option>
                <option>Colombo-Dematagoda</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="trainId" className="form-label">Available Seats</label>
              <input type="text" className="form-control" id="trainId" placeholder='Enter the available seats count' required />
            </div>
          </div>

      

          <div className="col-md-6">
          
            <hr/>

            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Estimated Duration (hours)</label>
              <input type="number" className="form-control" id="duration" placeholder='Enter the duration' required />
            </div>

            <div className="mb-3">
            <label htmlFor="endTime" className="form-label">End Time</label>
            <input type="time" className="form-control" id="endTime" placeholder='Enter the ending time' required />
            </div>

            <br/>
            <hr/>
            <div className="mb-3">
              <label htmlFor="trainName" className="form-label">Train Name</label>
              <input type="text" className="form-control" id="trainName" placeholder='Enter the train name' required />
            </div>

            <div className="mb-3">
            <label htmlFor="endingStation" className="form-label">Ending Station</label>
              <select className="form-select" id="endingStation" placeholder='Select the ending station' required>
                <option value="" disabled selected>Select Ending Station</option>
                <option>Gampaha</option>
                <option>Colombo-Fort</option>
                <option>Colombo-Maradana</option>
                <option>Colombo-Dematagoda</option>
              </select>
            </div>
          </div>

            
            <br/>
            <hr/>
            <div className="mb-3">
                <label htmlFor="specialNotices" className="form-label">Special Notices</label>
                <textarea className="form-control" id="specialNotices" rows="4" placeholder='Type here ...'></textarea>
              </div>

        </div>

        <div className="mb-3">
        <Link to="/train-management">
        <button type="submit" className="btn btn-secondary" style={{ marginRight: '20%', width: '110px' }}>
            Back
          </button>
        </Link>
          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
          
        </div>
        <br/>

      </form>
    </div>
    </div>
    </div>
  );
};

export default CreateTrainSchedule;
