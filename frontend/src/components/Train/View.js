import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import trainImage from '../../images/manage.jpg';
import { Link } from 'react-router-dom';

const TrainManagement = () => {
  const trainData = [


      {
        date: '10-12-23',
        trainEngine: 'G901',
        trainName: 'Udarata Manike',
        startTimes: ['12:00 PM'],
        startingStation: 'Colombo Fort',
        availableSeats: 100,
        reserved: false
      },
      {
        date: '11-12-23',
        trainEngine: 'OK90',
        trainName: 'Udaya Devi',
        startTimes: ['1:00 PM'],
        startingStation: 'Dematagoda',
        availableSeats: 100,
        reserved: true
      },
      {
        date: '10-12-23',
        trainEngine: 'TR567',
        trainName: 'Yal Devi',
        startTimes: ['12:00 AM'],
        startingStation: 'Colombo Fort',
        availableSeats: 100,
        reserved: true
      },
      {
        date: '10-12-23',
        trainEngine: 'G901',
        trainName: 'Ruhunu Manike',
        startTimes: ['12:00 PM'],
        startingStation: 'Colombo Fort',
        availableSeats: 100,
        reserved: true,
        note: 'late for 10 min'
      },
      {
        date: '10-12-23',
        trainEngine: 'G901',
        trainName: 'Udarata Manike',
        startTimes: ['12:00 PM'],
        startingStation: 'Colombo Fort',
        availableSeats: 100,
        reserved: true
      },
      {
        date: '10-12-23',
        trainEngine: 'G901',
        trainName: 'Udarata Manike',
        startTimes: ['12:00 PM'],
        startingStation: 'Colombo Fort',
        availableSeats: 100,
        reserved: false,
        note: 'late for 10 min'
      },
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${trainImage})`, // Use your train image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        padding: '20px',
      }}
    >
      <Container className="mt-4 p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
        
        <h2 className="display-4 mb-4">Train Schedule Management</h2>

        {/* Move the Create Schedule button to the top-right */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search trains..."
            value={searchTerm}
            onChange={handleSearch}
          />
          &nbsp;
          &nbsp;
          <Button type="submit" className="btn btn-success" href="/train-create">
            Create Schedule
          </Button>
        </div>

        {/* Table */}
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Date</th>
              <th>Train Engine</th>
              <th>Train Name</th>
              <th>Start Time</th>
              <th>Starting Station</th>
              <th>Available Seats</th>
              <th>Reserved/Not</th>
              <th>Notices</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {trainData
              .filter((train) =>
              train.trainName.toLowerCase().includes(searchTerm.toLowerCase())
              )
              .map((train, index) => (
                <tr key={index}>
                  <td>{train.date}</td>
                  <td>{train.trainEngine}</td>
                  <td>{train.trainName}</td>
                  <td>{train.startTimes.join(', ')}</td>
                  <td>{train.startingStation}</td>
                  <td>{train.availableSeats}</td>
                  <td>
                    {train.reserved ? (
                      <input type="checkbox" checked readOnly />
                    ) : (
                      <input type="checkbox" readOnly />
                    )}
                  </td>
                  <td>{train.note}</td>
                  <td> <Link to="/train-update"><button type="button" class="btn btn-warning"><i className="fas fa-edit"></i>&nbsp; Update</button></Link>
                  &nbsp; <Link to="/#"><button type="button" class="btn btn-danger"><i className ="far fa-trash-alt"> </i>&nbsp; Delete</button></Link></td>
                
                </tr>
              ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default TrainManagement;
