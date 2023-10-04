import React, { useState } from 'react';

const TrainManagement = () => {
  const trainData = [
    {
      name: 'Express 123',
      departureTime: '10:00 AM',
      arrivalTimes: ['12:00 PM', '2:00 PM', '4:00 PM'],
      ticketFare: '$50',
      availableSeats: 100,
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

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search trains..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Arrival Times</th>
            <th>Ticket Fare</th>
            <th>Available Seats</th>
          </tr>
        </thead>
        <tbody>
          {trainData
            .filter((train) =>
              train.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((train, index) => (
              <tr key={index}>
                <td>{train.name}</td>
                <td>{train.departureTime}</td>
                <td>{train.arrivalTimes.join(', ')}</td>
                <td>{train.ticketFare}</td>
                <td>{train.availableSeats}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TrainManagement;
