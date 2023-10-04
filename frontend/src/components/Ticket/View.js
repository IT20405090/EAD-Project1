import React, { useState } from 'react';

const TicketManagement = () => {
  const ticketData = [
    {
      refID: '123D',
      busName: 'Express 123',
      to: 'Moratuwa',
      from: 'Gampaha',
      ticketFare: '$400',
      seatNo: '4A',
      time: '19:00',
      date: '10-11-23'
    },
    // Add more train data as needed
  ];

  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mt-4">
      <h2 className="display-4 mb-4">Ticket Management</h2>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search tickets..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Table */}
      <table className="table table-bordered table-striped">
        <thead className="thead-dark">
          <tr>
            <th>Reference ID</th>
            <th>Bus Name</th>
            <th>Destination</th>
            <th>Departure Stand</th>
            <th>Ticket Fare</th>
            <th>Seat No</th>
            <th>Time</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {ticketData
            .filter((ticket) =>
            ticket.busName.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((ticket, index) => (
              <tr key={index}>
                <td>{ticket.refID}</td>
                <td>{ticket.busName}</td>
                <td>{ticket.to}</td>
                <td>{ticket.from}</td>
                <td>{ticket.ticketFare}</td>
                <td>{ticket.seatNo}</td>
                <td>{ticket.time}</td>
                <td>{ticket.date}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TicketManagement;
