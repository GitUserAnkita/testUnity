import React from 'react';
import RequestFilter from './RequestFilter';
import RequestList from './RequestList';
import RequestDetail from './RequestDetail';

const NetworkPanel = () => {
  return (
    <div>
      <RequestFilter />
      <RequestList />
      <RequestDetail />
    </div>
  );
};

export default NetworkPanel;
