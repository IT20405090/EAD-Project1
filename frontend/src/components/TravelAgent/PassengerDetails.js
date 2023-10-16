import React from 'react';
import image from '../../images/createTicket.jpeg';
import image2 from '../../images/berth.png';
import { Carousel, Form, Button } from 'react-bootstrap';

// Import Bootstrap styles and JavaScript
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.min.js';

// Import custom CSS file for this component
import "./Ticket.css"

// Define the PassengerDetails component

const PassengerDetails = () => {
  return (
    <div
      className="bg-light"
      style={{
        minHeight: '100vh',
        padding: '3%',
        background: `url(${image})`,
        backgroundSize: 'cover',
        
      }}
    >
        

      <div className="container" style={{ backgroundColor: 'white', padding: '4%' }}>

    <Form>
      <h1 className="PassengerDetails_topic">Passenger Details</h1>
      <div
        className="bg-light"
        style={{
            minHeight: '100vh',
            padding: '2%',
            background: `url(${image2})`,
            // backgroundSize: 'auto',  // Set the background size to auto
            maxwidth:'100%',
            backgroundRepeat: 'no-repeat',  // Prevent image repetition
            backgroundPosition: 'center',  // Center the image
            // width: '100%',  // Adjust the width to control the image size
            margin: '0 auto'  // Center the image horizontally
        }}
></div>
   
      <Carousel>
        <Carousel.Item>
            <center>
            <div  style={{  width: '50%' }}>
          <h3>Passenger 1</h3>
          <br/>
          <div className="form-group" >
              <label htmlFor="name1">Name</label>
              <input type="text" id="name1" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="nic1">NIC</label>
              <input type="text" id="nic1" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="age1">Age</label>
              <input type="number" id="age1" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="gender1">Gender</label>
              <select id="gender1" className="form-select" required>
                <option value="" disabled selected>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="berth1">Berth Choice</label>
              <select id="berth1" className="form-select" required>
                <option value="" disabled selected>Select Berth</option>
                <option value="Lower berth">Lower berth</option>
                <option value="Middle berth">Middle berth</option>
                <option value="Upper berth">Upper berth</option>
                <option value="Side Lower berth">Side Lower berth</option>
                <option value="Side Lower berth">Side Lower berth</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber1">Contact Number</label>
              <input type="tel" id="contactNumber1" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="email1">Email</label>
              <input type="email" id="email1" className="form-control" required />
            </div>
            <div className="form-group">
              <label htmlFor="seatNumber1">Seat Number</label>
              <input type="text" id="seatNumber1" className="form-control" readOnly />
            </div>
            </div>
            </center>
            <br/>
         
        </Carousel.Item>

        <Carousel.Item>

        <center>
        <div  style={{  width: '50%' }}>
          <h3>Passenger 2</h3>
          <br/>
          <div className="form-group">
              <label htmlFor="name1">Name</label>
              <input type="text" id="name1" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="age1">Age</label>
              <input type="number" id="age1" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="gender1">Gender</label>
              <select id="gender1" className="form-select" >
                <option value="" disabled selected>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="berth1">Berth Choice</label>
              <select id="berth1" className="form-select" >
                <option value="" disabled selected>Select Berth</option>
                
                <option value="Lower berth">Lower berth</option>
                <option value="Middle berth">Middle berth</option>
                <option value="Upper berth">Upper berth</option>
                <option value="Side Lower berth">Side Lower berth</option>
                <option value="Side Lower berth">Side Lower berth</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber1">Contact Number</label>
              <input type="tel" id="contactNumber1" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="email1">Email</label>
              <input type="email" id="email1" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="seatNumber1">Seat Number</label>
              <input type="text" id="seatNumber1" className="form-control" readOnly />
            </div>
            </div>
           </center>

        </Carousel.Item>
        <Carousel.Item>
        <center>
        <div  style={{  width: '50%' }}>
          <h3>Passenger 3</h3>
          <br/>
          <div className="form-group">
              <label htmlFor="name1">Name</label>
              <input type="text" id="name1" className="form-control"  />
            </div>
            <div className="form-group">
              <label htmlFor="age1">Age</label>
              <input type="number" id="age1" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="gender1">Gender</label>
              <select id="gender1" className="form-select" >
                <option value="" disabled selected>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="berth1">Berth Choice</label>
              <select id="berth1" className="form-select" >
              <option value="" disabled selected>Select Berth</option>
                <option value="Lower berth">Lower berth</option>
                <option value="Middle berth">Middle berth</option>
                <option value="Upper berth">Upper berth</option>
                <option value="Side Lower berth">Side Lower berth</option>
                <option value="Side Lower berth">Side Lower berth</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber1">Contact Number</label>
              <input type="tel" id="contactNumber1" className="form-control"  />
            </div>
            <div className="form-group">
              <label htmlFor="email1">Email</label>
              <input type="email" id="email1" className="form-control"  />
            </div>
            <div className="form-group">
              <label htmlFor="seatNumber1">Seat Number</label>
              <input type="text" id="seatNumber1" className="form-control" readOnly />
            </div>
            </div>
         </center>

        </Carousel.Item>

        <Carousel.Item>

        <center>
          <div  style={{  width: '50%' }}>

          <h3>Passenger 4</h3>
          <br/>
          <div className="form-group">
              <label htmlFor="name1">Name</label>
              <input type="text" id="name1" className="form-control"  />
            </div>
            <div className="form-group">
              <label htmlFor="age1">Age</label>
              <input type="number" id="age1" className="form-control"  />
            </div>
            <div className="form-group">
              <label htmlFor="gender1">Gender</label>
              <select id="gender1" className="form-select" >
                <option value="" disabled selected>Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="berth1">Berth Choice</label>
              <select id="berth1" className="form-select" >
              <option value="" disabled selected>Select Berth</option>
                <option value="Lower berth">Lower berth</option>
                <option value="Middle berth">Middle berth</option>
                <option value="Upper berth">Upper berth</option>
                <option value="Side Lower berth">Side Lower berth</option>
                <option value="Side Lower berth">Side Lower berth</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="contactNumber1">Contact Number</label>
              <input type="tel" id="contactNumber1" className="form-control"  />
            </div>
            <div className="form-group">
              <label htmlFor="email1">Email</label>
              <input type="email" id="email1" className="form-control"  />
            </div>
            <div className="form-group">
              <label htmlFor="seatNumber1">Seat Number</label>
              <input type="text" id="seatNumber1" className="form-control" readOnly />
            </div>
            </div>
            </center>
          
        </Carousel.Item>
      </Carousel>
     
    </Form>

          <button type="submit" className="btn btn-primary" >
            Submit
          </button>

    </div>
    </div>
  );
};

export default PassengerDetails;
