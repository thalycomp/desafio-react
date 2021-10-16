import { useContext, createContext, useState, useEffect } from 'react';
import api from '../services/api';

const ServerContext = createContext({});

export function ServerProvider({ children }) {
  const [servers, setServers] = useState([]);
  const [selectedServers, setSelectedServers] = useState([]);

  useEffect(() => {
    api.get('/servers').then((response) => setServers(response.data));
  }, []);

  function addSelectedServers(server) {
    const serverExists = selectedServers.filter(
      (s) => s.id_vm !== server.id_vm
    );

    if (serverExists.length < selectedServers.length) {
      setSelectedServers(serverExists);
      return;
    }

    setSelectedServers([...selectedServers, server]);
  }

  return (
    <ServerContext.Provider
      value={{ addSelectedServers, servers, selectedServers }}
    >
      {children}
    </ServerContext.Provider>
  );
}

export function useServers() {
  const context = useContext(ServerContext);

  return context;
}
