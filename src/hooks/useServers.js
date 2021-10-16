import { useContext, createContext, useState } from 'react';

const ServerContext = createContext({});

export function ServerProvider({ children }) {
  const [servers, setServers] = useState([]);

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
