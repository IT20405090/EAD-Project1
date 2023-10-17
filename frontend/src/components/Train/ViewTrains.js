import React, { useState, useEffect } from 'react';
import { Container, Button } from 'react-bootstrap';
import trainImage from '../../images/metro1.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const TrainsView = () => {
  const [trainData, setTrainData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch train data from the API endpoint when the component mounts
    fetch('https://localhost:7261/api/Train')
      .then((response) => response.json())
      .then((data) => setTrainData(data))
      .catch((error) => console.error('Error fetching train data:', error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${trainImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        padding: '20px',
      }}
    >
      <Container
        className="mt-4 p-4"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2 className="display-4 mb-4">Availability of Trains</h2>

        {/* Move the Create Schedule button to the top-right */}
        <div className="d-flex justify-content-between align-items-center mb-3">
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
              <th>Name of the Train</th>
              <th>Availability</th>
              <th>Action</th>
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
                  <td>
                    {train.status ? (
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        style={{ color: 'green' }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        style={{ color: 'red' }}
                      />
                    )}
                  </td>
                  <td>
                    <Link to={`/train-status/${train.id}`}>
                      <button type="button" className="btn btn-warning">
                        <i className="fas fa-edit"></i>&nbsp; Update Status
                      </button>
                    </Link>
                    &nbsp;
                    <Link to="/#">
                      <button type="button" className="btn btn-danger">
                        <i className="far fa-trash-alt"></i>&nbsp; Delete Train
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </Container>
    </div>
  );
};

export default TrainsView;
