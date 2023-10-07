import React from "react";


const Home = () => {

	return (
		<section className="homepage">


					<div className = "home" >
					<h1><b>Travel Reservation Web Application </b></h1>
					</div>
					
					<br /><br/>
					<br/> <br/>
					<div className="buttons">
              <a href="/train-management" className="btn btn-primary">Train Management</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  {/* <a href="/train-management" className="btn btn-primary">Login</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			  <a href="/train-management" className="btn btn-primary">Register</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
              <a href="/train-create" className="btn btn-success">Create Train Schedule</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/train-update" className=" btn btn-info">Update Train Schedule</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/ticket-management" className="btn btn-secondary">Ticket Booking Management</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/ticket-create" className="btn btn-primary">Ticket Booking</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/ticket-update" className="btn btn-success">Ticket Booking Update</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/#" className="btn btn-info">Travel Management</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
				
				
			
		</section>
	);
};

export default Home;
