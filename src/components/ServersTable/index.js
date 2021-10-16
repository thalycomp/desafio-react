import './styles.css';
import SectionsContainer from '../SectionsContainer';
import { useServers } from '../../hooks/useServers';
import HeadTable from '../HeadTable';

function ServersTable() {
  const { servers, addSelectedServers } = useServers();

  const handleCheckedValue = (server) => {
    addSelectedServers(server);
  };

  const valuesHeadServers = [
    { title: 'Select', key: 0 },
    { title: 'Hostname', key: 1 },
    { title: 'Memória', key: 2 },
    { title: 'vCPUs', key: 3 },
    { title: 'Disco', key: 4 },
    { title: 'IP', key: 5 },
  ];

  return (
    <SectionsContainer title="Tabela de servidores">
      <table className="servers-table">
        <HeadTable type="horizontal" valuesHead={valuesHeadServers} />
        <tbody>
          {servers.map((server) => (
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
              <td>{server.configuracao.cpuProvisioned} vCPUs</td>
              <td>{server.configuracao.memoryProvisioned} GB</td>
              <td>{server.configuracao.totalDiskGB} GB</td>
              <td>{server.ip}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionsContainer>
  );
}

export default ServersTable;
