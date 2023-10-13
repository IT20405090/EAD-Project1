import React, { useEffect } from 'react';
import $ from 'jquery'; // Import jQuery
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';

import "./form.css"

const Form12 = () => {


  useEffect(() => {
    // Initialize datepicker when the component mounts
    $('.datepicker').datepicker();
    

  
}, []);
      


  return (
    <div>
      <div className="container-fluid">
    <div className="bg-light">
    <div className="container mt-5">
    <div className="containerTicketForm">
      <div className="cta-form">
    
        
      </div>
      <form action="" className="form">
      <div className="row" >
      <div className="col-md-6">
        <div className="mb-3">
          <input type="text"  placeholder="Date" className="form__input datepicker" id="date"   required/> 
          <label htmlFor="date" className="form__label">Date</label>
        </div>

       
        <div className="mb-3">
          <input  type="time" placeholder="Time" className="form__input timepicker" id="startTime" />
          <label htmlFor="startTime" className="form__label">Start Time</label>
        </div>
        <div className="mb-3">
          <input  placeholder="Time" className="form__input timepicker" id="endTime" />
          <label htmlFor="endTime" className="form__label">End Time</label>
        </div>
        <div className="mb-3">
          <input type="text" placeholder="Subject" className="form__input" id="subject" />
          <label htmlFor="subject" className="form__label">Subject</label>
        </div>
        </div>
        </div>
      </form>
    </div>
    </div></div></div>
   
  </div>
  );
};

export default Form12;
