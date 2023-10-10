import React from "react";
import "./Home.css";
import { Container, ButtonGroup, Button } from 'react-bootstrap';

const Home = () => {
    return (
        <section className="homepage">
            <div className="home">
                
                <h1 className="multicolor-text"><b>Travel Reservation Web Application</b></h1>
            </div>
            <br /><br />
            <br /> <br />
            <div className="buttons">
                <div>
                <img className="home-image" src="/images/home1.gif" alt="Me" width="1680" height="500" />   <div className="header">
                        <Container>
                            <h5>Seamless Travel Experiences Await You, Empowering Your Journeys: Introducing the Next Generation Ticket Reservation System</h5>
                        </Container>
                    </div>
                    <div className="content">
                        <div className="blurred-background"></div>
                        <Container>
                            <div className="card">
                                <ButtonGroup className="button-container">
                                    <Button variant="dark" size="lg" className="quarter-button" style={{ borderRadius: '0' }} href="/train-management">Train Schedule</Button>
                                    <Button variant="dark" size="lg" className="quarter-button" style={{ borderRadius: '0' }} href="/ticket-create">Ticket Booking</Button>
                                    <Button variant="dark" size="lg" className="quarter-button" style={{ borderRadius: '0' }} href="">Reserve a Train</Button>
                                    <Button variant="dark" size="lg" className="quarter-button" style={{ borderRadius: '0' }} href="">Activate Account</Button>
                                </ButtonGroup>
                            </div>
                            {/* 
              <a href="/train-create" className="btn btn-success">Create Train Schedule</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/train-update" className=" btn btn-info">Update Train Schedule</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp
              <a href="/ticket-update" className="btn btn-success">Ticket Booking Update</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="/#" className="btn btn-info">Travel Management</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                        </Container>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
