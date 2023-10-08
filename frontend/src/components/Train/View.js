import React, { useState } from 'react';
import { Container, ButtonGroup, Button } from 'react-bootstrap';

const TrainManagement = () => {
  const trainData = [
    {
      name: 'Express 123',
      date: '10-12-23',
      departureTime: '10:00 AM',
      arrivalTimes: ['12:00 PM', '2:00 PM', '4:00 PM'],
      ticketFare: '$50',
      availableSeats: 100,
      reserved: true
    },
    {
      name: 'Express 123',
      date: '10-12-23',
      departureTime: '10:00 AM',
      arrivalTimes: ['12:00 PM', '2:00 PM', '4:00 PM'],
      ticketFare: '$50',
      availableSeats: 100,
      reserved: false,
      note: 'late for 10 min'
    },
    // Add more train data as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mt-4">
      
      <h2 className="display-4 mb-4">Train Management</h2>

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
      
        {/* Search Bar */}
        
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Date</th>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Arrival Times</th>
            <th>Ticket Fare</th>
            <th>Available Seats</th>
            <th>Reserved/Not</th>
            <th>Notices</th>
          </tr>
        </thead>
        <tbody>
          {trainData
            .filter((train) =>
              train.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((train, index) => (
              <tr key={index}>
                <td>{train.date}</td>
                <td>{train.name}</td>
                <td>{train.departureTime}</td>
                <td>{train.arrivalTimes.join(', ')}</td>
                <td>{train.ticketFare}</td>
                <td>{train.availableSeats}</td>
                <td>{train.reserved ? (
                    <input type="checkbox" checked readOnly />
                  ) : (
                    <input type="checkbox" readOnly />
                  )}</td>
                  <td>{train.note}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainManagement;
