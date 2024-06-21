import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const RequestDetail = () => {
  const { reqDetails } = useContext(NetworkContext);

  if (!reqDetails || !reqDetails.data) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <h2>Request Details</h2>
      <div>
        <p><strong>URL:</strong> {reqDetails.url}</p>
        <p><strong>Method:</strong> {reqDetails.method}</p>
        <p><strong>Type:</strong> {reqDetails.type}</p>
        <p><strong>Status:</strong> {reqDetails.status}</p>
        <p><strong>Headers:</strong> {JSON.stringify(reqDetails.headers)}</p>
      </div>
      <h3>Response Data</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            {reqDetails.type === 'axios' && <th>Completed</th>}
          </tr>
        </thead>
        <tbody>
          {reqDetails.data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name || item.title}</td>
              {reqDetails.type === 'axios' && <td>{item.completed ? "Yes" : "No"}</td>}
            </tr>
          ))}
        </tbody>
      </table>
   
    </div>
  );
};

export default RequestDetail;
