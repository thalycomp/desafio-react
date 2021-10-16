import { useContext, createContext, useState, useEffect } from 'react';
import api from '../services/api';

const ServerContext = createContext({});

export function ServerProvider({ children }) {
  const [servers, setServers] = useState([]);

  useEffect(() => {
    api.get('/servers').then((response) => setServers(response.data));
  }, []);

  function getServers() {
    console.log(servers);
  }

  return (
    <ServerContext.Provider value={{ servers, getServers }}>
      {children}
    </ServerContext.Provider>
  );
}

export function useServers() {
  const context = useContext(ServerContext);

  return context;
}
