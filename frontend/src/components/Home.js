import React from "react";

// Define the button styles as JavaScript objects
const buttonStyles = {
    button: {
      backgroundColor: "#4CAF50", 
      border: "none",
      color: "white",
      padding: "15px 32px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "4px 2px",
      cursor: "pointer"
    },
    button2: {
      backgroundColor: "#008CBA", 
      border: "none",
      color: "white",
      padding: "15px 32px",
      textAlign: "center",
      textDecoration: "none",
      display: "inline-block",
      fontSize: "16px",
      margin: "4px 2px",
      cursor: "pointer"
    },
    button3: {
        backgroundColor: "#f44336", 
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer"
      }
    

    
  };

const Home = () => {

	return (
		<section className="homepage">


					<div className = "home" >
					<h1><b>Travel Reservation Web Application </b></h1>
					</div>
					
					<br /><br/>
					<br/> <br/>
					<div className="buttons">
                    <button style={buttonStyles.button}>Train Management</button>
                    <button style={buttonStyles.button2}>Ticket Booking Management</button>
                    <button style={buttonStyles.button3}>Travel Management</button>
					</div>
				
				
			
		</section>
	);
};

export default Home;
