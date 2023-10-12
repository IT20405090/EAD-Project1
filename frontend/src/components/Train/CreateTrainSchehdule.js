import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
// import scheduleImage from '../../images/schedule.jpg';
import "./TrainSchedule.css"

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
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="text" className="form-control datepicker" id="date" placeholder='Date' required />
            </div>
            <div className="mb-3">
              <label htmlFor="startTime" className="form-label">Start Time</label>
              <input type="time" className="form-control" id="startTime" required />
            </div>
            <div className="mb-3">
              <label htmlFor="endTime" className="form-label">End Time</label>
              <input type="time" className="form-control" id="endTime" required />
            </div>
            <div className="mb-3">
              <label htmlFor="startingStation" className="form-label">Starting Station</label>
              <select className="form-select" id="startingStation" required>
                <option value="" disabled selected>Select Starting Station</option>
                {/* Add  starting station options  */}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="endingStation" className="form-label">Ending Station</label>
              <select className="form-select" id="endingStation" required>
                <option value="" disabled selected>Select Ending Station</option>
                {/* Add  ending station options  */}
              </select>
            </div>
          </div>

      

          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Estimated Duration (hours)</label>
              <input type="number" className="form-control" id="duration" required />
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Train Engine</label>
              <input type="number" className="form-control" id="engine" required />
            </div>
            <div className="mb-3">
              <label htmlFor="trainName" className="form-label">Train Name</label>
              <input type="text" className="form-control" id="trainName" required />
            </div>
            <div className="mb-3">
              <label htmlFor="trainId" className="form-label">Available Seats</label>
              <input type="text" className="form-control" id="trainId" required />
            </div>
            <div className="mb-3">
              <label htmlFor="specialNotices" className="form-label">Special Notices</label>
              <textarea className="form-control" id="specialNotices" rows="4"></textarea>
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default CreateTrainSchedule;
