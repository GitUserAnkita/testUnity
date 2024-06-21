import React, { createContext, useState } from 'react';

export const NetworkContext = createContext();

export const NetworkProvider = ({ children }) => {
  const [requests, setRequests] = useState([]);
  const [filter, setFilter] = useState('all');
  const [reqDetails, setReqdetails] = useState(null);

  return (
    <NetworkContext.Provider value={{ requests, setRequests, filter, setFilter, reqDetails, setReqdetails }}>
      {children}
    </NetworkContext.Provider>
  );
};
