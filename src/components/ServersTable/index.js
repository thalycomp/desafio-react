import './styles.css';
import SectionsContainer from '../SectionsContainer';
import HeadTable from '../HeadTable';

import { theadTableServersStrings } from '../../constants/theadStrings';
import { useServers } from '../../hooks/useServers';

function ServersTable() {
  const { servers, addSelectedServers } = useServers();

  const handleCheckedValue = (server) => {
    addSelectedServers(server);
  };

  return (
    <SectionsContainer title="Tabela de servidores">
      <table className="servers-table">
        <HeadTable type="horizontal" valuesHead={theadTableServersStrings} />
        <tbody>
          {servers.length === 0 ? (
            <tr className="no-server">
              <td>Não há servidores</td>
            </tr>
          ) : (
            servers.map((server) => (
              <tr key={server.id_vm} className="servers-table-tr">
                <td>
                  <label className="container">
                    <input
                      type="checkbox"
                      onClick={() => handleCheckedValue(server)}
                      value={server.id_vm}
                    />
                  </label>
                </td>
                <td>{server.hostname}</td>
                <td>{server.configuracao.memoryProvisioned} GB</td>
                <td>{server.configuracao.cpuProvisioned} vCPUs</td>
                <td>{server.configuracao.totalDiskGB} GB</td>
                <td>{server.ip}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </SectionsContainer>
  );
}

export default ServersTable;
