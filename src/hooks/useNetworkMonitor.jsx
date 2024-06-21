import { useEffect, useContext } from 'react';
import { NetworkContext } from '../context/NetworkContext';

const useNetworkMonitor = () => {
  const { setRequests } = useContext(NetworkContext);

  useEffect(() => {
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
      const response = await originalFetch(...args);
      const requestInfo = {
        url: args[0],
        method: args[1]?.method || 'GET',
        status: response.status,
        type: 'fetch',
        headers: response.headers,
        time: new Date()
      };
      setRequests(prev => [...prev, requestInfo]);
      return response;
    };
    
    const originalXhrSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function (...args) {
      this.addEventListener('load', () => {
        const requestInfo = {
          url: this.responseURL,
          method: this.method,
          status: this.status,
          type: 'xhr',
          headers: this.getAllResponseHeaders(),
          time: new Date()
        };
        setRequests(prev => [...prev, requestInfo]);
      });
      originalXhrSend.apply(this, args);
    };
  }, [setRequests]);
};

export default useNetworkMonitor;
