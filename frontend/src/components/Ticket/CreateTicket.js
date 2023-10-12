import React from 'react';
import image from '../../images/ticket.jpg'

const CreateTicket = () => {
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
      <div className="container" style={{ backgroundColor: '#d2b48c', padding: '4%', borderRadius: '2%' }}>
        <h2>Train Ticket Booking</h2>

      
      <form>
        <h3>Journey Details  Ref ID 01</h3>
        <div className="row">
            <center>
          <div className="col-md-7">
            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input type="text" id="date" className="form-control datepicker" required />
            
              <label htmlFor="time">Time</label>
              <input type="time" id="time" className="form-control" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="startingPoint">Starting Point</label>
              <select id="startingPoint" className="form-select" required>
                <option value="" disabled selected>Select Starting Point</option>
                {/* Add starting point options  */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="endingPoint">Ending Point</label>
              <select id="endingPoint" className="form-select" required>
                <option value="" disabled selected>Select Ending Point</option>
                {/* Add ending point options */}
              </select>
            </div>
            <br/>
            <div className="form-group">
              <button type="button" className="btn btn-primary">Search Trains</button>
            </div>
          </div>
          </center>


          <center>
          <div className="col-md-7"><br/><br/><br/>
            <h3>Passenger 1 Details</h3>
            <div className="form-group">
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
              <label htmlFor="sex1">Sex</label>
              <select id="sex1" className="form-select" required>
                <option value="" disabled selected>Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="berth1">Berth Choice</label>
              <select id="berth1" className="form-select" required>
                <option value="" disabled selected>Select Berth</option>
                {/* Add berth choices */}
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

          <center>
          <div className="col-md-7"><br/><br/><br/>
            <h3>Passenger 2 Details</h3>
            <div className="form-group">
              <label htmlFor="name1">Name</label>
              <input type="text" id="name1" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="age1">Age</label>
              <input type="number" id="age1" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="sex1">Sex</label>
              <select id="sex1" className="form-select" >
                <option value="" disabled selected>Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="berth1">Berth Choice</label>
              <select id="berth1" className="form-select" >
                <option value="" disabled selected>Select Berth</option>
                {/* Add berth choices */}
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

          <center>
          <div className="col-md-7"><br/><br/><br/>
            <h3>Passenger 3 Details</h3>
            <div className="form-group">
              <label htmlFor="name1">Name</label>
              <input type="text" id="name1" className="form-control"  />
            </div>
            <div className="form-group">
              <label htmlFor="age1">Age</label>
              <input type="number" id="age1" className="form-control" />
            </div>
            <div className="form-group">
              <label htmlFor="sex1">Sex</label>
              <select id="sex1" className="form-select" >
                <option value="" disabled selected>Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="berth1">Berth Choice</label>
              <select id="berth1" className="form-select" >
                <option value="" disabled selected>Select Berth</option>
                {/* Add berth choices  */}
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

          <center>
          <div className="col-md-7"><br/><br/><br/>
            <h3>Passenger 4 Details</h3>
            <div className="form-group">
              <label htmlFor="name1">Name</label>
              <input type="text" id="name1" className="form-control"  />
            </div>
            <div className="form-group">
              <label htmlFor="age1">Age</label>
              <input type="number" id="age1" className="form-control"  />
            </div>
            <div className="form-group">
              <label htmlFor="sex1">Sex</label>
              <select id="sex1" className="form-select" >
                <option value="" disabled selected>Select Sex</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="berth1">Berth Choice</label>
              <select id="berth1" className="form-select" >
                <option value="" disabled selected>Select Berth</option>
                {/* Add berth choices */}
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


        </div>
        <br/>
        <button type="submit" className="btn btn-primary">Submit</button>
      
      </form>
    </div>
    </div>
  );
};

export default CreateTicket;
