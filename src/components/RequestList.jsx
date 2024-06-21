import React, { useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const RequestList = () => {
  const { requests, filter } = useContext(NetworkContext);

  const filteredRequests = requests.filter(req => {
    if (filter === 'all') return true;
    if (filter === 'fetch' || filter === 'axios') return req.type === filter;
    if (filter === 'doc') return req.type === 'doc';
    if (filter === 'js') return req.type === 'js';
    return false;
  });

  return (
    <div>
      <h2>Requests</h2>
      <ul>
        {filteredRequests.map((req, index) => (
          <li key={index}>
            <strong>{req.method}</strong> {req.url} - {req.status}
          </li>
        ))}
      </ul>
      <hr/>
    </div>
  );
};

export default RequestList;


