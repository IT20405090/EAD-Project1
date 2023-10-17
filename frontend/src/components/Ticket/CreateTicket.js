import React from 'react';
import image from '../../images/createTicket.jpeg';

//for date picking logics
import { useState, useEffect } from 'react';
import { isWithinInterval, addDays, subDays } from 'date-fns'; // Import date manipulation functions


// Import Bootstrap styles and JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';

// Import custom CSS file for this component
import "./Ticket.css"

// Import the Link component from react-router-dom
import { Link } from 'react-router-dom';

// Define the CreateTicket component
const CreateTicket = () => {

 // State to store the selected date and error message
 const [selectedDate, setSelectedDate] = useState('');
 const [allowedDateRange, setAllowedDateRange] = useState({ start: null, end: null });
 const [errorMessage, setErrorMessage] = useState('');

 // Calculate the date range (30 days in the future)
 useEffect(() => {
   const today = new Date();
   const futureDate = addDays(today, 30);
   const pastDate = subDays(today, 1); // Optional: Set a past date as the lower limit
   setAllowedDateRange({ start: pastDate, end: futureDate });
 }, []);

 // Validate the selected date
 const handleDateChange = (date) => {
   setSelectedDate(date);
   if (!isWithinInterval(new Date(date), allowedDateRange)) {
     setErrorMessage('Please select a date within the next 30 days.');
   } else {
     setErrorMessage('');
   }
 };


  return (
    <div
      className="bg-light"
      style={{
        minHeight: '100vh',
        padding: '20px',
        background: `url(${image})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="container" style={{ backgroundColor: 'white', padding: '4%' }}>
        <h2 className='Ticket_topic' >Train Ticket Booking</h2>
        <br/>

        <form>
          <h3> Fill The Journey Details </h3>
          <div className="row" style={{ textAlign: 'left', color:'gray', fontSize:'20px' }}>
            <center>
              <br/>

              <div className="col-md-7">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date" // Use type="date" for date selection
                    id="date"
                    className="form-control datepicker"
                    required
                    value={selectedDate}
                    onChange={(e) => handleDateChange(e.target.value)}
                  />
                </div>
                {errorMessage && (
                  <div className="alert alert-danger" role="alert">
                    {errorMessage}
                  </div>
                )}</div>



              <div className="col-md-7">
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input type="time" id="time" className="form-control" required />
                </div>
            
                <div className="form-group">
                  <label htmlFor="startingPoint">Starting Point</label>
                  <select id="startingPoint" className="form-select" required>
                    <option value="" disabled selected>Select Starting Point</option>
                    <option>Gampaha</option>
                    <option>Colombo-Fort</option>
                    <option>Colombo-Maradana</option>
                    <option>Colombo-Dematagoda</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="endingPoint">Ending Point</label>
                  <select id="endingPoint" className="form-select" required>
                    <option value="" disabled selected>Select Ending Point</option>
                    <option>Gampaha</option>
                    <option>Colombo-Fort</option>
                    <option>Colombo-Maradana</option>
                    <option>Colombo-Dematagoda</option>
                  </select>
                </div>
                <br/>
                <div className="mb-3">
                  <label htmlFor="search" className="visually-hidden">Search</label>
                  <input type="text" id="search" className="form-control" placeholder="Search Trains" />
                </div>
                <div className="form-group">
                  <button type="button" className="btn btn-primary">Search Trains</button>
                </div>
              </div>
              
              <Link to="/ticket-passenger1">
                <button type="button" class="btn btn-secondary" style={{ width: '750px' }}>Add Passenger Details</button>
              </Link>
            </center>
          </div>
        </form>
      </div>
      <br/><br/><br/><br/>
    </div>
  );
};

// Export the CreateTicket component
export default CreateTicket;
