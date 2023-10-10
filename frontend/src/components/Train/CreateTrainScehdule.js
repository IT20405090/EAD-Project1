import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';
import scheduleImage from '../../images/schedule.jpg';

const CreateTrainSchedule = () => {
  useEffect(() => {
    // Initialize datepicker when the component mounts
    $('.datepicker').datepicker();
  }, []);

  return (
    <div
      className="container-fluid"
      style={{
        minHeight: '100vh',
        padding: '20px',
        backgroundImage: `url(${scheduleImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
      }}
    >
      <div className="bg-light" style={{ minHeight: '92vh', padding: '20px', maxWidth: '900px', margin: 'auto' }}>
        <div className="container mt-5">
          <h2>Create Train Schedule </h2>
          <br />
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="date" className="col-sm-4 col-form-label">Date</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control datepicker" id="date" required />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="startTime" className="col-sm-4 col-form-label">Start Time</label>
                  <div className="col-sm-8">
                    <input type="time" className="form-control" id="startTime" required />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="endTime" className="col-sm-4 col-form-label">End Time</label>
                  <div className="col-sm-8">
                    <input type="time" className="form-control" id="endTime" required />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="startingStation" className="col-sm-4 col-form-label">Starting Station</label>
                  <div className="col-sm-8">
                    <select className="form-select" id="startingStation" required>
                      <option value="" disabled selected>Select Starting Station</option>
                      {/* Add  starting station options  */}
                    </select>
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="endingStation" className="col-sm-4 col-form-label">Ending Station</label>
                  <div className="col-sm-8">
                    <select className="form-select" id="endingStation" required>
                      <option value="" disabled selected>Select Ending Station</option>
                      {/* Add  ending station options  */}
                    </select>
                  </div>
                </div>
                <div className="mb-3 row">
                  <div className="col-sm-8 offset-sm-4">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="reserved" />
                      <label className="form-check-label" htmlFor="reserved">Reserved</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mb-3 row">
                  <label htmlFor="duration" className="col-sm-4 col-form-label">Estimated Duration (hours)</label>
                  <div className="col-sm-8">
                    <input type="number" className="form-control" id="duration" required />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="engine" className="col-sm-4 col-form-label">Train Engine</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="engine" required />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="trainName" className="col-sm-4 col-form-label">Train Name</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="trainName" required />
                  </div>
                </div>
                <div className="mb-3 row">
                  <label htmlFor="trainId" className="col-sm-4 col-form-label">Available Seats</label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="trainId" required />
                  </div>
                </div>
                {/* Special Notices field takes full width */}
                <div className="mb-3 row">
                  <label htmlFor="specialNotices" className="col-sm-12 col-form-label">Special Notices</label>
                  <div className="col-sm-12">
                    <textarea className="form-control" id="specialNotices" rows="4"></textarea>
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTrainSchedule;
